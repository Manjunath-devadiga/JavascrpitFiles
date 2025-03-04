// let userInput = prompt("Enter a string to reverse:");
// let reversedString = userInput.split("").reverse().join("");
// console.log("Reversed:", reversedString);

// let userInput = prompt("Enter a string:");
// let formattedString =
//   userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();
// console.log(formattedString);

// if (userInput) {
//   let formattedString =
//     userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase();
//   console.log("Formatted String:", formattedString);
// } else {
//   console.log("No input provided.");

// function isPalindrome(str) {
//   let reversedStr = str.split("").reverse().join("");
//   return str === reversedStr;
// }

// console.log(isPalindrome("madam"));
// console.log(isPalindrome("hello"));

// let a = [12, 55, 22, 55];
// a.length = 0;
// console.log(a);

// let obj = {
//   name: "Manjunath",
//   age: 12,
//   say: function () {
//     console.log("jjj");
//   },
// };
// obj.gender = "12";
// obj.age = 13;
// console.log(obj["age"]);
// console.log(obj);
// delete obj.age;
// console.log(obj);
// console.log("name" in obj);

// obj.person = function () {
//   console.log("Hello");
// };

// obj.person();
// obj.say();

// let obj = {
//   names: "manjunath",
//   age: 12,
//   person: function () {
//     console.log("Hello");
//   },
//   greeting: ["Manjunath", "Shekar"],
//   obj1: {
//     city: "Pune",
//     ph: "123456789",
//   },
// };

let Employee = {
  name: "Manjunat",
  age: 24,
  salary: 50000,
  Gender: "Male",
  Greeting: function () {
    console.log("Gud Morning");
  },
  Obj1: {
    city: "Pune",
    address: "Hadapasar",
    pincode: 12121,
  },
};

console.log(Employee.Obj1.city);

Employee.Greeting();

console.log(Employee.name);
console.log(Employee.salary);
Employee.name = "Shekar";
console.log(Employee.name);
Employee.poistion = "Fornt-developer";
console.log(Employee);
delete Employee.age;
console.log(Employee);

// console.log(obj.names);
// console.log(obj["names"]);
// obj.age = 14;
// console.log(obj);

// obj.gender = "MAle";

// console.log(obj);

// console.log("nam" in obj);

// obj.person = function () {
//   console.log("Hello");
// };

console.log(obj.greeting[1]);
console.log(obj.obj1.city);

obj.person();

// delete obj.names;
// console.log(obj);
