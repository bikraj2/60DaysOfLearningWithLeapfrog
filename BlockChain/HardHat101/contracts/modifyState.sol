//SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Company {
 mapping (string=>uint) public salary;
 address public owner; // the creater of the company
 address[] authorized_personnel; //Mod of the company
    constructor() {
        owner = msg.sender;
    }
    function addMod(address _newMod) public {
        authorized_personnel.push(_newMod);
    }
     function setSalary(string memory _name, uint _salary) public {
         salary[_name] = _salary;
     }
     function fireEmployee(string memory _employToFire)  public {
        require(msg.sender == owner,"Only authorized personnel can fire employees");
        salary[_employToFire] =0;
     }
     function isEmployed(string memory _name) public view returns(bool){
            if (salary[_name] > 0) {
                return true;
            } else {
                return false;
            }
     }
    function getSalary(string memory _name) view public returns (string memory) {
        return _name;
    }
}