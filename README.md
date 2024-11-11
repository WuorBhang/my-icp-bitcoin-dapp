# CryptoFund - Bitcoin & ICP Crowdfunding Platform

A decentralized crowdfunding platform that leverages Bitcoin integration using Chain Fusion on the Internet Computer Protocol (ICP).

## Features

- Create and manage crowdfunding projects
- Accept Bitcoin donations through ICP integration
- Secure transaction verification using Chain Fusion
- Real-time project status and funding updates
- Responsive UI with dark/light mode support

## Technology Stack

- Frontend: Next.js, React, Tailwind CSS, shadcn/ui
- Backend: Internet Computer Protocol (ICP)
- Bitcoin Integration: Chain Fusion
- Authentication: Internet Identity

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy `.env.example` to `.env.local` and update the values
4. Start the development server:
   ```bash
   npm run dev
   ```

## Deployment

1. Deploy the ICP canisters:
   ```bash
   dfx deploy
   ```
2. Update the environment variables with your canister IDs
3. Deploy the frontend:
   ```bash
   npm run build
   dfx deploy frontend
   ```

## Architecture

The platform uses Chain Fusion to integrate Bitcoin with ICP:

1. Project Creation:
   - Projects are stored in ICP canisters
   - Each project gets a unique Bitcoin address through ECDSA signing

2. Donation Flow:
   - Users send BTC to project-specific addresses
   - ICP verifies transactions using Chain Fusion
   - Smart contracts update project funding status

3. Security:
   - Threshold ECDSA for Bitcoin address generation
   - Secure transaction verification
   - Automated fund distribution

## License

MIT License - see LICENSE file for details