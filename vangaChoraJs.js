const product = {
  name: "Laptop",
  price: 50000,
  brand: "Dell",
};

const { name, price, brand } = product;

console.log(name);
console.log(price);
console.log(brand);

const item = {
  name: "Mobile",
  price1: 20000,
  phone: "Samsung",
};

const { price1, phone } = item;

console.log(price1);
console.log(phone);

let color = ["Red", "Blue", "Green", "Yellow"];

const [firstColor, SecondColor, thirdColor] = color;

console.log(firstColor);
console.log(SecondColor);
console.log(thirdColor);

let numar = [1, 2, 3];
const [first, second, third] = numar;
console.log(second);

const digit = [2, 4, 6, 8];
const [two, four, six, eight] = digit;
console.log(two);
console.log(eight);

function multiply(a, b) {
  return [a * 3, b * 3];
}
const resul = multiply(2, 3);
const [firstValue, secondValue] = resul;

console.log(`First Value: ${firstValue}`);
console.log(`Second Value: ${secondValue}`);

const person4 = {
  name1: "Rahim",
  City: "Dhaka",
  Phone: "n/a",
};
const { name1, City: city, Phone: phone1 = "Default Phone" } = person4;
console.log(name1);
console.log(city);

const teacher = {
  name2: "Maria",
  profession: "Teacher",
};

const { name2, profession: job } = teacher;

console.log(name2);
console.log(job);

const product1 = {
  name5: "Laptop",
  Price: 50000,
  brand: "Dell",
};

//const { name5, ...details } = product1;
//console.log(details)

const project = {
  id: 101,
  title: "Web App",
  budget: 3000,
  client: "Tech Crop",
};
//const { title, ...details } = project
//console.log(details)

const programmer = {
  name: "Sophia",
  language: "JavaScript",
  exprience: 5,
  specility: "frontEnd",
  tools: "React",
};
const { language, specility, ...details } = programmer;
console.log(details);

const ar = [10, 20, 3, 30, 300, 3000];
const [, , ...arry] = ar;
console.log(arry);

function sumRest(a, b, ...rest) {
  const sum = rest.reduce((acc, num) => acc + num, 0);
  return sum;
}
console.log(sumRest(5, 10, 20, 30, 40));

function avgRest(...rest) {
  const sum = rest.reduce((acc, num) => acc + num, 0);
  return sum / rest.length;
}
console.log(avgRest(5, 10, 20, 30, 40));

const techonologies = ["Conditions", "array", "loop"];
const newArr = ["varibale", ...techonologies];
console.log(newArr);

const fruits = ["Apple", "Banana", "Mango"];
const myFruits = [...fruits, "papaya", "Orange"];
console.log(myFruits);

const frontEnd = ["JavaScript"];
const backEnd = ["Node.js"];
const dataBase = ["MongoDB"];

const fullStack = [...frontEnd, ...backEnd, ...dataBase];
console.log(fullStack);

/*
Difference Between export and impore and how it works?
Ans:JavaScript-এ export এবং import হল ES6 (ECMAScript 2015)-এর ফিচার, যা মডিউল সিস্টেমের অংশ। এদের মাধ্যমে আপনি এক ফাইল থেকে অন্য ফাইলে কোড (ফাংশন, অবজেক্ট, ক্লাস, ভেরিয়েবল) শেয়ার এবং ব্যবহার করতে পারেন।
Export কীভাবে কাজ করে?
export ব্যবহার করে আপনি একটি ফাইল থেকে কোড অন্য ফাইলে ব্যবহারের জন্য প্রকাশ (expose) করতে পারেন।
Import কীভাবে কাজ করে?
import ব্যবহার করে আপনি অন্য ফাইল থেকে এক্সপোর্ট করা কোড ব্যবহার করতে পারেন।
Default Export:
একটি মডিউলে শুধুমাত্র একটি ডিফল্ট এক্সপোর্ট থাকতে পারে।
এটি সাধারণত সেই মডিউলের "প্রধান" বা "ডিফল্ট" আইটেম এক্সপোর্ট করার জন্য ব্যবহার করা হয়।
ইম্পোর্ট করার সময় যেকোনো নাম দেওয়া যায়।
as কীওয়ার্ডটি Named Import বা Named Export-এর সময় নাম পরিবর্তন (rename) করার জন্য ব্যবহার করা হয়। এটি বিশেষভাবে উপযোগী যখন:
নামের কনফ্লিক্ট এড়াতে: একই নামের একাধিক আইটেম ইম্পোর্ট করতে গেলে।
কোড রিডেবিলিটি বাড়াতে: দীর্ঘ বা জটিল নামকে সংক্ষিপ্ত বা সহজ নামে পরিবর্তন করতে।
নাম কাস্টমাইজ করতে: ডেভেলপারের পছন্দ অনুযায়ী নাম দেওয়ার জন্য।
Named Export এবং Default Export হল মডিউল সিস্টেমের দুটি আলাদা পদ্ধতি যার মাধ্যমে আপনি একটি ফাইল (মডিউল) থেকে অন্য ফাইলে কোড শেয়ার করতে পারেন।


*/
