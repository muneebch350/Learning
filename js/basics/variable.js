const accountId = 23213
let accountEmail = "test@gmail.com"
var accountPassword = "321321"
accounCity = "Lahore"
let accountState;

// accountId = 2  not allowed

accountEmail = "admin@gmail.com"
accountPassword = "12345"
accounCity = "Multan"
console.table([accountId,accountEmail,accountPassword,accounCity,accountState]);

// Prefer not to use var, because of issue in block scope and functional scope