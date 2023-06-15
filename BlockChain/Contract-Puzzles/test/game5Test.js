const { loadFixture } = require('@nomicfoundation/hardhat-network-helpers');
const { assert } = require('chai');
const { ethers } = require('hardhat');

describe('Game5', function () {
  async function deployContractAndSetVariables() {
    const Game = await ethers.getContractFactory('Game5');
    const game = await Game.deploy();
    const url = process.env.RPC_URL;
    
    return { game };
  }
  it('should be a winner', async function () {
    const { game } = await loadFixture(deployContractAndSetVariables);

    // good luck
    const signer1 = ethers.provider.getSigner("0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199");
    await game.connect(signer1).win();

    // leave this assertion as-is
    assert(await game.isWon(), 'You did not win the game');
  });
});
