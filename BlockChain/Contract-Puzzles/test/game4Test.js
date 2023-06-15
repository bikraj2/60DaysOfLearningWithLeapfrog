const { loadFixture } = require('@nomicfoundation/hardhat-network-helpers');
const { assert } = require('chai');

describe('Game4', function () {
  async function deployContractAndSetVariables() {
    const Game = await ethers.getContractFactory('Game4');
    const game = await Game.deploy();
    const signer1 = ethers.provider.getSigner(0);
    const signer2 = ethers.provider.getSigner(1);
    // you can get that signer's address via .getAddress()
    // this variable is NOT used for Contract 3, just here as an example
    const address1 = await signer1.getAddress();
    const address2 = await signer2.getAddress();

    return { game, signer1, signer2, address1, address2 };
  }
  it('should be a winner', async function () {
    const { game, signer1, signer2, address1, address2 } = await loadFixture(
      deployContractAndSetVariables
    );
      await game.connect(signer1).write(address2);
        // nested mappings are rough :}

    await game.connect(signer2).win(address1);

    // leave this assertion as-is
    assert(await game.isWon(), 'You did not win the game');
  });
});
