// The Date object in JavaScript is used to work with dates and times. It provides methods for getting, setting, and manipulating dates.
//getFullYear()	Gets  the year	2025
// getMonth()	Gets the month (0-11)	1 (February)
// getDate()	Gets the day of the month (1-31)	11
// getDay()	Gets the day of the week (0-6, Sunday = 0)	2 (Tuesday)
// getHours()	Gets the hours (0-23)	12
// getMinutes()	Gets the minutes (0-59)	34
// getSeconds()	Gets the seconds (0-59)	56
// getMilliseconds()	Gets milliseconds (0-999)	123
// getTime()	Gets timestamp (ms since Jan 1, 1970)	1736606000000

// let x = new Date(2018, 10, 13, 10, 33, 56, 7); //IN this we Pass 7 Parameter
// let x = new Date("july 13,2018 11:12:33"); //IN String Format
// console.log(x);
// let x = new Date();
// console.log(x);

// let x = "2024,12,45";
// console.log(x);

// This all Are Get Method
// console.log(x.getTime()); // It Will Show in Mili Second
// console.log(x.getFullYear());
// console.log(x.getMonth());
// console.log(x.getDate());
// console.log(x.getDay());
// console.log(x.getHours());
// console.log(x.getMinutes());
// console.log(x.getSeconds());
// console.log(x.getMilliseconds());
// console.log(x.getTime()); // It Will Show in Mili Second

// This All Are Set method
// console.log(x.setDate(6));
// console.log(x.setFullYear(2016));
// console.log(x.setMonth(10)
// console.log(x.setHours(10)
// console.log(x.setMinutes(10)
// console.log(x.setSeconds(10)

// console.log(x);

// One Example
// let date = new Date();
// // console.log(date);
// date.setDate(date.getDate() + 2);
// console.log(date);

// date.setDate(date.getDate() + 49);
// console.log(date);

// Hoisting

// let obj = {
//   name: "manjunath",
//   age: 12,
//   gender: "Male",
//   obj2: {
//     city: "pune",
//     address: "Vaiduwadi",
//     obj3: {
//       country: "India",
//       pincode: "123456",
//       obj4: {
//         name2: "manjunath",
//         name3: "manjunath",
//       },
//     },
//   },
// };
// console.log(obj.obj2.obj3.obj4.name3);

// let student = {
//   name: "manjunath",
//   age: 12,
//   marks: 36,
//   getdetails: function () {
//     console.log(this.name, this.marks, this.age0);
//   },
// };

// student.getdetails();

// let numbers = [15, 5, 65, 8, 5];
// let maxnumber = Math.max(...numbers);
// console.log(maxnumber);

// Hoisting

// function hello() {
//   console.log("Heloo");
// }
// hello();

// a = 12;
// var a;
// console.log(a);

// a = 12;
// console.log(a);

// let a;
