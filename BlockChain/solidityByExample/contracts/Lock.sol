// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;



contract Storage {
    uint  x=97; // 0x0 ->> 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9f
    uint  y =56; //0x1
    mapping (uint=>uint) public map;

    //keccak256 (key+base Slot)
    constructor () {
        map[90]=1;
        map[123]=1234;
    }
    //_ethGetStorageAt
}