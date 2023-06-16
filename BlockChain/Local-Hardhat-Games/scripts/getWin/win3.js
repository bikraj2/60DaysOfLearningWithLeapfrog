// add the game address here and update the contract name if necessary
const gameAddr = '0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6';
const contractName = 'Game3';

async function main() {
  // attach to the game
  const game = await hre.ethers.getContractAt(contractName, gameAddr);

  // do whatever you need to do to win the game here:
  // did you win? Check the transaction receipt!
  // if you did, it will be in both the logs and events array
  const trx3 = await game.win(45);
  const receipt = await trx3.wait();
  console.log(receipt);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
