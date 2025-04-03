const num = 15;
let copy = num;
copy = 25;

console.log(copy);
console.log(num);

let arr = [1, 2, 3];
let copyar = [...arr];
copyar.push(88);
console.log(arr);
console.log(copyar);

let language = {
  name: "JS",
  age: 30,
};

let newVersion = language;
newVersion.locattion = "Browser";
console.log(language);
console.log(newVersion);

let a;
console.log(a);

function sum(a, b) {
  let s = a + b;
}
sum(5, 5);

let array = [10, 20, 30, 40, 50];
delete array[2];
console.log(array[2]);

function sum2(a, b, c) {
  let s = a + b + c;
  console.log(s);
}
sum2(5, 10);

const student = {
  name: "Serious Sojib",
  roll: "1",
  marks: 99,
};
console.log(student.marks);

let b;
if ((b = false)) {
  console.log(b);
}

let obj = {};

if ((obj = false)) {
  console.log("Return false ");
}

let emptyArr = [];
if ((emptyArr = true)) {
  console.log("Return truth");
}

let ar = !![];
console.log(ar);

if (true == 1) {
  console.log("same");
} else {
  console.log("different");
}

let obj1 = {
  name: "A",
};

let obj2 = {
  name: "A",
};

if (obj1 == obj2) {
  console.log("Object same");
} else {
  console.log("Object Different");
}

let arrayNew = [10, 20, 25];
let arrayCopy = arrayNew;
if (arrayNew === arrayCopy) {
  console.log("Same Array");
} else {
  console.log("Different Array");
}

function check(a, boolean) {
  if (a == boolean) {
    return "Equal";
  } else {
    return "Not Equal";
  }
}
check(15, true);

if (String == false) {
  console.log("Eq");
} else {
  console.log("Not Eq");
}

if (null === undefined) {
  console.log("Eq");
} else {
  console.log("Not Eq");
}

if (1 == "1") {
  console.log("Eq");
} else {
  console.log("Not Eq");
}

function greeting(greatingHandler) {
  console.log(greatingHandler);
}
function morningGreet() {
  console.log("Good Morning");
}
greeting(morningGreet);

function myFunc(myObject, callback) {
  callback(myObject);
}
let myObject = {
  name: "John",
  age: 30,
  city: "New York",
};
myFunc(myObject, function (obj) {
  console.log(Object.keys(obj));
});

function numberProcessor(a, callback) {
  let div = a % 5 == 0;
  callback(div);
}
function callback(result) {
  console.log(result);
}
numberProcessor(10, callback);

function processNumber(num, callback) {
  let square = num * num;
  callback(square);
}
function displaySquare(result) {
  console.log("The square is:", result);
}
processNumber(4, displaySquare);

let taxRate = 15;

function income(a) {
  tax = a * (taxRate / 100);
  return tax;
}
console.log(income(1000));

function personal() {
  let insideSecret = "internal secret hiding place";
}

console.log(insideSecret);

if (true) {
  let temperature = 25;
}
console.log(temperature);

function schoolDetails(b) {
  let schoolName = "MRH";
  function displaySchool() {
    console.log(schoolName);
  }
}
schoolDetails();
