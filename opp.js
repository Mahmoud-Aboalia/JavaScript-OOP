//Defining Object With Object Literals
let user = {
  // Properties
  firstName: "Mahmoud",
  MiddeName: "Rashad",
  lastName: "Aboalia",
  age: 30,
  addresses: {
    Eg: "Tanta",
    Ksa: "Macca",
    MainAddress: function () {
      return `The Main address is ${this.Eg}`;
    },
  },
  // Methods
  // Return Full Name
  fullName: function () {
    return `My Full Name is ${this.firstName} ${this.MiddeName} ${this.lastName}`;
  },
  // Return Age in days   [arrow function]
  ageInDays: () =>
    `The age is ${user.age} ,And the age in days is ${user.age * 365} days`,
};

// Accessing Object Properties
console.log(user.firstName); // Dot Notation
console.log(user["firstName"]); // Bracket Notation

console.log(typeof user.firstName); // String
console.log(user.addresses.Eg);
console.log(user.addresses.Ksa);
console.log(user.addresses.MainAddress()); // Nested Method inside Properties
// Accessing Object Methods
console.log(typeof user.fullName); // Function
console.log(user.fullName());
console.log(user.ageInDays());
