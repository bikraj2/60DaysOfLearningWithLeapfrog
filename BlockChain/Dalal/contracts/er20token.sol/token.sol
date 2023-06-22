// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Token {
    // Basic Information About The Token
    uint public totalSupply=0;
    string public name="Swaspiost";
    string public symbol="Swh";
    uint8 public decimals=18;
    mapping(address=>uint256) balances;

    //event and logging to keep track of the transactions

    event Transfer(address _sender,address _recipient,uint256 amtTransffered);

    constructor() {
        totalSupply=1000*(10**18);
        balances[msg.sender]=totalSupply;
    }
    //Functions to view balance
    function balanceOf(address _owner) external view returns(uint256){
     
        return balances[_owner];
    }
    //Transfer token from sender to the recipient

    function transfer(address _recipient,uint _amtToTransfer) external returns(bool ) {
        require(balances[msg.sender]>_amtToTransfer,"You must have more balance than you would like to transfer.");
        balances[msg.sender]-=_amtToTransfer;
        balances[_recipient]+=_amtToTransfer;
        emit Transfer(msg.sender,_recipient,_amtToTransfer);
        return true;
    }
}