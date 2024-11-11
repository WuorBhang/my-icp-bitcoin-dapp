import { Actor, HttpAgent } from "@dfinity/agent";
import { idlFactory } from './bitcoin.did.js';

const agent = new HttpAgent({
  host: process.env.ICP_HOST || "https://ic0.app",
});

export const bitcoinActor = Actor.createActor(idlFactory, {
  agent,
  canisterId: process.env.NEXT_PUBLIC_BITCOIN_CANISTER_ID,
});