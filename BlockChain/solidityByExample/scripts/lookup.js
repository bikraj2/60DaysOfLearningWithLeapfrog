// const {ethers} = require('hardhat')
const address = '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0';
const { toBeHex, zeroPadBytes, toUtf8Bytes, keccak256} = require('ethers')
const {ethers} = require('hardhat')
// const {hexZerorPad} = hre.ethers.utils;
async function lookUp() {
 
let key = 90;
let keyHex = '0x' + key.toString(16).padStart(62, '0');
let baseSlot = 2;
let baseSlotHex = '0x' + baseSlot.toString(16).padStart(62, '0');
const hash = keccak256(toUtf8Bytes(keyHex+baseSlot))
const value = await ethers.provider.getStorage(address,hash)
console.log(parseInt(value))


  // const val = await ethers.provider.getStorage(address, '0x0');
  // console.log('', parseInt(val));
}

lookUp();
