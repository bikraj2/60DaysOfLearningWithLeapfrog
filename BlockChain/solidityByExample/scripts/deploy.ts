import { ethers } from "hardhat";

async function main() {


  // make sure to replace the "GoofyGoober" reference with your own ERC-20 name!
  const Storage = await ethers.getContractFactory('Storage');
  const deployedStorage = await Storage.deploy();

  console.log('Token address:', await deployedStorage.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });