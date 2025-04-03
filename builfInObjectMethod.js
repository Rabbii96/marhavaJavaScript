let start = "786";
let con = Number(start);
console.log(con);

let willAttend = 0;
console.log(Boolean(willAttend));

const CreateObj = new Object();
CreateObj.city = "Dhaka";
CreateObj.country = "Bangladesh";

let total = 1970;
console.log(String(total));

const min = Math.min(45, 11, 89, 23, 56, -12, -56);
console.log(min);

const max = Math.max(21, 35, 67);
console.log(max);

console.log(Math.round(7.6, 7.2));

console.log(Math.floor(9.8));
console.log(Math.floor(5.3));

console.log(Math.ceil(3.1));
console.log(Math.floor(6.9));

console.log(Math.abs(-34));

function frac(a) {
  let round = Math.round(a);
  console.log(round);
  let floor = Math.floor(a);
  console.log(floor);
  let ceil = Math.ceil(a);
  console.log(ceil);
}

frac(3.8);

const date = new Date("2025-04-03");
console.log(date);

const dateTime = new Date(2035, 6, 15, 14, 45, 30);
console.log(dateTime);

const year = new Date().getFullYear();
console.log(year);

const myDate = new Date();
myDate.setFullYear(2040);
console.log(myDate);

const date1 = new Date(2029, 1, 16);
const dayOfWeek = date1.getDay();
const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const dayName = dayNames[dayOfWeek];
console.log(dayName);
console.log(dayOfWeek);

const sentence = "I bought an orange";
const newSentence = sentence.replace(/orange/g, "grape");
console.log(newSentence);

const givenSentence = "I like to have apple and banana";
const pat = /ana/;
console.log(pat.test(givenSentence));

const se = " I am eating apple.apple is good.apple helps me a lot";
const newSentence1 = se.replace(/apple/g, "JavaScript");
console.log(newSentence1);

const number = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumber = new Set(number);
console.log(uniqueNumber);

const mySet = new Set();
mySet.add(10);
mySet.add(20);
mySet.add(10);
mySet.add(30);
console.log(mySet);

const set = new Set([10, 20, 30]);
set.delete(10);
console.log(set);

const array = [1, 2, 3, 4, 2, 1, 5, 5];
const uniqueNumber1 = new Set(array);
console.log(uniqueNumber1);

const uniqueArray1 = [...uniqueNumber1];
console.log(uniqueArray1);
