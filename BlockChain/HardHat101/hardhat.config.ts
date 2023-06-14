import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';
import dotenv from 'dotenv';
import crypto from 'crypto'; // Import the crypto module
dotenv.config();

// Generate private key

const config: HardhatUserConfig = {
  solidity: '0.8.18',
  networks: {
    localhost: {
      url: 'http://127.0.0.1:8545/',
      accounts: [
        '0x92db14e403b83dfe3df233f83dfa3a0d7096f21ca9b0d6d6b8d88b2b4ec1564e',
        '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80',
        '0x4bbbf85ce3377467afe5d46f804f221813b2bb87f24d81f60f1fcdbf7cbf4356',
        '0xdbda1821b80551c9d65939329250298aa3472ba22feea921c0cf5d620ea67b97',
        '0x2a871d0798f97d79848a013d4936a73bf4cc922c825d33c1cf7073dff6d409c6',
        '0xf214f2b2cd398c806f84e317254e0f0b801d0643303237d97a22a48e01628897',
      ],
    },
  },
};

export default config;
