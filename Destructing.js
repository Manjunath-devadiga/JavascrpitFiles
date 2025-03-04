let Books = [
  "Advances Js",
  300,
  200,
  "Manjunath",
  ["Html", 200, 150, "Skekar"],
];
// let Bookname = Books[0];
// let Price = Books[1];
// let Pages = Books[2];
// let Author = Books[3];

//Array Destructing

// let [Bookname, Prices, Pages, Author, [Bookname2 , Htmlpages , Htmlprices , Htmlauthorname]] = Books;

// console.log(Htmlauthorname);

// Object Destructing

let obj = {
  name: "manjunath",
  age: 12,
  Gender: "Male",
  Postion: "Font-end-developer",
  publication: {
    names: "shekar",
    ages: 25,
  },
};

// let name = obj.name;

let {
  name: ne,
  age,
  Gender,
  Postion,
  publication: { names, ages },
} = obj;

console.log(ages);

function array() {
  return ["Manjunath", "Shekar"];
}
// console.log(array());

let [name1, name2, name3 = "Ram"] = array();

console.log(name3);
