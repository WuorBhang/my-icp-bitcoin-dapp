const express = require('express');
const Project = require('../models/Project');
const auth = require('../middleware/auth');

const router = express.Router();

// Create new project
router.post('/', auth, async (req, res) => {
  try {
    const { title, description, goalAmount, currency, duration } = req.body;

    const endDate = new Date();
    endDate.setDate(endDate.getDate() + parseInt(duration));

    const project = new Project({
      title,
      description,
      goalAmount,
      currency,
      creator: req.user.userId,
      endDate
    });

    await project.save();
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ message: 'Error creating project' });
  }
});

// Get all projects
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find()
      .populate('creator', 'name')
      .sort({ createdAt: -1 });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching projects' });
  }
});

// Get single project
router.get('/:id', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id)
      .populate('creator', 'name')
      .populate('donors.user', 'name');
    
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    
    res.json(project);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching project' });
  }
});

// Update project
router.patch('/:id', auth, async (req, res) => {
  try {
    const project = await Project.findOne({
      _id: req.params.id,
      creator: req.user.userId
    });

    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    const updates = Object.keys(req.body);
    const allowedUpdates = ['title', 'description'];
    const isValidOperation = updates.every(update => allowedUpdates.includes(update));

    if (!isValidOperation) {
      return res.status(400).json({ message: 'Invalid updates' });
    }

    updates.forEach(update => project[update] = req.body[update]);
    await project.save();

    res.json(project);
  } catch (error) {
    res.status(500).json({ message: 'Error updating project' });
  }
});

module.exports = router;