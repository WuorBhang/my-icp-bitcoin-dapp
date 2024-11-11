const express = require('express');
const Project = require('../models/Project');
const auth = require('../middleware/auth');
const { Actor, HttpAgent } = require('@dfinity/agent');
const { Principal } = require('@dfinity/principal');

const router = express.Router();

// ICP canister interface (this would be generated from your actual canister)
const icpCanisterInterface = ({ IDL }) => {
  return IDL.Service({
    transferBTC: IDL.Func([IDL.Text, IDL.Nat64], [IDL.Bool], []),
    getBTCAddress: IDL.Func([], [IDL.Text], ['query']),
    verifyPayment: IDL.Func([IDL.Text], [IDL.Bool], ['query'])
  });
};

// Initialize ICP agent
const agent = new HttpAgent({
  host: process.env.ICP_HOST || 'https://ic0.app'
});

// Create actor instance
const canisterId = process.env.ICP_CANISTER_ID;
const actor = Actor.createActor(icpCanisterInterface, {
  agent,
  canisterId
});

// Get Bitcoin address for project
router.get('/btc-address/:projectId', auth, async (req, res) => {
  try {
    const project = await Project.findById(req.params.projectId);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    // Get unique BTC address from ICP canister
    const btcAddress = await actor.getBTCAddress();
    
    res.json({ btcAddress });
  } catch (error) {
    res.status(500).json({ message: 'Error getting BTC address' });
  }
});

// Verify Bitcoin payment
router.post('/verify-payment', auth, async (req, res) => {
  try {
    const { projectId, txHash, amount } = req.body;

    const project = await Project.findById(projectId);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    // Verify payment through ICP canister
    const isVerified = await actor.verifyPayment(txHash);
    
    if (!isVerified) {
      return res.status(400).json({ message: 'Payment verification failed' });
    }

    // Record the donation
    project.donors.push({
      user: req.user.userId,
      amount,
      currency: 'BTC',
      txHash
    });

    project.raisedAmount += amount;
    await project.save();

    res.json({
      success: true,
      project
    });
  } catch (error) {
    res.status(500).json({ message: 'Error processing payment' });
  }
});

// Get payment status
router.get('/payment-status/:txHash', auth, async (req, res) => {
  try {
    const isVerified = await actor.verifyPayment(req.params.txHash);
    res.json({ verified: isVerified });
  } catch (error) {
    res.status(500).json({ message: 'Error checking payment status' });
  }
});

module.exports = router;