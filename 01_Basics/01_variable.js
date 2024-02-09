// /workspaces/JS-youtube/01_Basics/ 01_variable.js
const accountId=1445553
let accountEmail = "ak@google.com"
var accountPassword = "1234567899"
accountCity = "pune"  
let accountState 

/*
PREFER NOT USE VAR
BECAUSE ISSUE IN BLOCK SCOPE AND FUNCTIONAL SCOPE
*/

// accountId = 2
accountEmail="ddh@haha.com"
accountPassword="5454544"
accountCity="ngp"

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);