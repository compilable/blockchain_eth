pragma solidity ^0.5.16;

contract VijithaContract {

    address[16] public girls;

    // Date a girl
    function date(uint256 age) public returns (uint256) {
        require(age >= 0 && age <= 15);

        girls[age] = msg.sender;

        return age;
    }

    // Retrieving the girls
    function getGirls() public view returns (address[16] memory) {
        return girls;
    }
}
