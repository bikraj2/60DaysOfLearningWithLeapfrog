const axios = require('axios');
const niceList = require('../utils/niceList.json');
const MerkleTree1 = require('./MerkleTree');
const { text } = require('express');

const serverUrl = 'http://localhost:1225';

async function main() {
 const merkleTree = new MerkleTree1(niceList)
 const toCheck = 'Norman Block';
 const proof = merkleTree.getProof(toCheck);
  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
   proof:proof,
   data:toCheck
  });
  console.log({ gift });
}


main();
