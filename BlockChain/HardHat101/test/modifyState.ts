import { ModifyVariable } from './../typechain-types/modifyState.sol/ModifyVariable';
// import testing libraries: https://www.chaijs.com/guide/styles/
const { expect, assert } = require('chai');
const { ethers } = require('ethers');
// the `describe` scope encapsulates an entire test called `TestModifyVariable`
// the `it` says the behavior that should be expected from the test
describe('TestModifyVariable', function () {
  it('should change x to 1337', async function () {
    // this line creates an ethers ContractFactory abstraction: https://docs.ethers.org/v5/api/contract/contract-factory/
    const url = process.env.RPC_URL;
    let artifacts = await hre.artifacts.readArtifact('ModifyVariable');
    const provider = new ethers.JsonRpcProvider(url);
    const privateKey = process.env.TESTNET_PRIVATE_KEY;
    let wallet = new ethers.Wallet(privateKey!, provider);
    let ModifyVariable = new ethers.ContractFactory(
      artifacts.abi,
      artifacts.bytecode,
      wallet
    );

    // we then use the ContractFactory object to deploy an instance of the contract
    const contract = await ModifyVariable.deploy(100);

    // wait for contract to be deployed and validated!
    await contract.waitForDeployment();

    // modify x from 10 to 1337 via this function!
    await contract.modifyToLeet();
    // getter for state variable x
    const newX:BigInt = await contract.x();
    assert.equal(newX.valueOf, 1337);
  });
});
