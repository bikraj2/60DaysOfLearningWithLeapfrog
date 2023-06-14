import { Address } from './../node_modules/ethereumjs-util/src/address';


const { ethers } = require('ethers');
require('dotenv').config();
var keepRunning: boolean = true;
async function main() {
  const url = process.env.RPC_URL;
  let artifacts = await hre.artifacts.readArtifact('Company');
  const provider = new ethers.JsonRpcProvider(url);
  const privateKey = process.env.TESTNET_PRIVATE_KEY;
  let wallet = new ethers.Wallet(privateKey!, provider);
  let ModifyVariable = new ethers.ContractFactory(
    artifacts.abi,
    artifacts.bytecode,
    wallet
  );

  // we then use the ContractFactory object to deploy an instance of the contract
  const contract = await ModifyVariable.deploy({ gasLimit: 1000000 });
  const address: Address = await contract.owner();
  console.log(address);
}

main()
  .then(() => console.log('Completed Interaction'))
  .catch((error) => console.log(error));
