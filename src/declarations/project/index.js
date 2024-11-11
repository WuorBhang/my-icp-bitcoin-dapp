import { Actor, HttpAgent } from "@dfinity/agent";
import { idlFactory } from './project.did.js';

const agent = new HttpAgent({
  host: process.env.NEXT_PUBLIC_IC_HOST || "https://ic0.app",
});

export const projectActor = Actor.createActor(idlFactory, {
  agent,
  canisterId: process.env.NEXT_PUBLIC_PROJECT_CANISTER_ID,
});