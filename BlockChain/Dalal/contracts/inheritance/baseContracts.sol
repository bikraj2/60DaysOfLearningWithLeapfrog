// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Ownable {
    address owner;
    constructor() {
        owner=msg.sender;
    }
    modifier onlyOwner {
        require(msg.sender==owner,"Only the owner can mark the price.");
        _;
    }
}
contract Transferable is Ownable {
    function transfer(address _owner) public onlyOwner{
        owner = _owner;
    }
}