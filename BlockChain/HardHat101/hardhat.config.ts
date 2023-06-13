import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';
import dotenv from 'dotenv';
import crypto from 'crypto'; // Import the crypto module
dotenv.config();

// Generate private key

const config: HardhatUserConfig = {
  solidity: '0.8.18',
  networks: {
    goerli: {
      url: process.env.RPC_URL,
      accounts: [process.env.TESTNET_PRIVATE_KEY as string],
    },
  },
};

export default config;
