const accountId = 144256;
let accountEmail = "heyrihsabh12345.com";
var accountPassword = "12345";
accountCity = "Jaipur";
let accountState;

// accountId = 2 is not allowed



accountEmail = "hc@hc.com";
accountPassword = "24245";
accountCity = "Delhi";

console.log(accountId);

/*
Prefer not to use war
beacuse of issue in block scope and functional scope
*/

console.table([{ accountId, accountEmail, accountCity, accountPassword, accountState}]);
