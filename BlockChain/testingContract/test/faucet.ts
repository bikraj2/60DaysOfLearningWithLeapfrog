const { loadFixture } = require('@nomicfoundation/hardhat-network-helpers');
const { expect } = require('chai');
const { ethers } = require('ethers');

require('dotenv').config();
describe('Faucet', function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployContractAndSetVariables() {
    const url = process.env.RPC_URL;
    let artifacts = await hre.artifacts.readArtifact('Faucet');
    const provider = new ethers.JsonRpcProvider(url);
    const privateKey1 = process.env.TESTNET_PRIVATE_KEY;
    const privateKey2 = process.env.TESTNET_PRIVATE_KEY_ALT;
    let wallet2 = new ethers.Wallet(privateKey2!, provider);
    let wallet1 = new ethers.Wallet(privateKey1!, provider);
    let Facuet = new ethers.ContractFactory(
      artifacts.abi,
      artifacts.bytecode,
      wallet2
    );
    const owner = wallet2;
    const contract = await Facuet.deploy();
    const val: string = await contract.getAddress();
    console.log(
      await provider.getBalance('0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266')
    );
    return { contract, owner, withDrawAmount: 100, val, provider };
  }

  it('should deploy and set the owner correctly', async function () {
    const { contract, owner } = await loadFixture(
      deployContractAndSetVariables
    );
    expect(await contract.owner()).to.equal(owner.address);
  });
  it('should allow  only withdraw amounts less than 1 eth', async function () {
    const { contract, owner, withDrawAmount } = await loadFixture(
      deployContractAndSetVariables
    );

    await expect(contract.withdraw(withDrawAmount)).to.be.reverted;
  });
  it('should allow only owner to destroyFacuet', async function () {
    const { contract, owner, withDrawAmount, provider, val } =
      await loadFixture(deployContractAndSetVariables);
    await contract.destroyFaucet();
    expect(await provider.getCode(val)).to.equal('0x');
  });
  it('withdrawAll should withdraw all the eth from the contract', async function () {
    const { contract,provider,val } = await loadFixture(deployContractAndSetVariables);
    // await contract.withdrawAll();
    expect(await provider.getBalance(val)).to.equal(1n);
  });
});
