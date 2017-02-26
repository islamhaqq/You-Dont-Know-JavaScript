// used to calculate final total
const TAX_RATE = 0.08;

// account model
var Account = {
  userId: Number,
  username: String,
  firstName: String,
  lastName: String,
  bankBalance: Number,
  fullName: () => {
    return this.firstName + '' + this.lastName
  }
}

// create user account
function createAccount() {
  // create new instance of account for new user
  newAccount = New Account();

  // store credentials
  var username = newAccount.username;
  var firstName = newAccount.firstName;
  var lastName = newAccount.lastName;
  let bankBalance = newAccount.bankBalance;
}
