const {ethers} = require('hardhat')
const address = '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512';

async function lookUp() {
    const key = ethers.zeroPadBytes(ethers.toUtf8Bytes(21),30)
    const baseSlot = ethers.zeroPadBytes(ethers.toUtf8Bytes(0x2), 30);
    console.log(key,baseSlot);
    const slot = ethers.keccak256(key+baseSlot);
    console.log(key)
  // const val = await ethers.provider.getStorage(address, '0x0');
  // console.log('', parseInt(val));
}

lookUp();
