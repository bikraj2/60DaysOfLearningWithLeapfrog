const { keccak256 } = require('ethereum-cryptography/keccak');
const { hexToBytes, bytesToHex } = require('ethereum-cryptography/utils');

const concat = (left, right) => keccak256(Buffer.concat([left, right]));

function verifyProof(proof, leaf, root) {
    proof = proof.map(({ data, left }) => ({
      left,
      data: hexToBytes(data),
    }));
  let data = keccak256(Buffer.from(leaf))
  for (var i =0;i<proof.length;i+=1){
    if (proof[i].left) {
      data = concat(proof[i].data, data);
    } else {
      data = concat(data, proof[i].data);
    }
  }
  return bytesToHex(data)===root
}

module.exports = verifyProof;
