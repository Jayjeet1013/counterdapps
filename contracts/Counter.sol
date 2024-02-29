//SPDX-License-Identifier: UNLICENSED

pragma solidity^0.8.13;

contract Counter{
    address public owner;
    uint public count;

    constructor (){
        owner= msg.sender;
    }

    function setCount(uint _count) public{
        count=count+_count;
    }
}