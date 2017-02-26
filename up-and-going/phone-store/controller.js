// used to calculate final total
const TAX_RATE = 0.08;

// account model
var account = {
  username: 'string',
  firstName: 'string',
  lastName: 'string',
  bankBalance: 'number',
  fullName: () => {
    return this.firstName + '' + this.lastName
  },
}

createAccount() {
  var username;
  var firstName;
  var lastName;
  let bankBalance;
}
