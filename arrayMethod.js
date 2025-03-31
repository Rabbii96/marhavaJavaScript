const price = [30, 45, 20, 60, 10];
const increasePrice = price.map((num) => num + 13);
console.log(increasePrice);

const nameList = ["Messi", "Maradona", "Pele", "Zidan", "Lonaldo"];
const morefiveWords = nameList.filter((name) => name.length > 5);
console.log(morefiveWords);

const numberList = [10, 15, 20, 25, 30, 35];
const findUpTweenty = numberList.find((num) => num > 20);
console.log(findUpTweenty);

const height = [65, 70, 68, 72, 68, 73];
const aboveUpsixtynine = height.filter((height) => height > 69);
console.log(aboveUpsixtynine);

const number = [7, 10, 15, 20, 25, 30];
const divResult = number.map((num) => num / 3);
console.log(divResult);

const friendsList1 = [
  "Leonardo",
  "Brad Pitt",
  "Kate Winslet",
  "Aundrey Hepburn",
  "johny Deep",
];
const findThreeCap = friendsList1.map((str) => str[2]);
console.log(findThreeCap);

const nameArr = ["Tom", "Harry", "Sam", "Jack"];
const fintWithH = nameArr.find((str) => str[0] === "H");
console.log(fintWithH);

const numAr = [1, 2, 3, 4, 5];
const re = numAr.forEach((n) => console.log(n));
console.log(re);

const strAr = ["cow", "goat", "sheep", "horse"];
const restr = strAr.forEach((n) => console.log(n));
console.log(restr);

const numbers = [20, 30, 50, 200];
const have = numbers.some((num) => num > 100);
console.log(have);

const numberarray = [20, 30, 50, 200, 201];
const div = numberarray.every((num) => num % 5);
console.log(div);

const words = ["Rabbi", "hello", "class", "random"];
const match = words.some((str) => str === "hello");
console.log(match);

const age = [10, 14, 15, 18, 20, 40];
const check = age.every((age) => age > 20);
console.log(check);

const array = [5, 10, 15, 20, 25];

const sum = array.reduce((accumulator, currentvalue) => {
  return accumulator + currentvalue;
}, 0);

const shop = [
  { name: "shampoio", price: 100 },
  { name: "soap", price: 50 },
  { name: "toothpast", price: 75 },
];
const totalPrice = shop.reduce(
  (accumulator, currentvalue) => accumulator + currentvalue.price,
  0
);
console.log(totalPrice);

const products = [
  { name: "Pen", price: 5 },
  { name: "Book", price: 50 },
  { name: "Bag", price: 100 },
];
const productPrice = products.reduce(
  (accumulator, currentvalue) => accumulator + currentvalue.price,
  0
);
console.log(productPrice);

const arrra = [1, 2, 3, 4, 5];
const mul = arrra.reduce(
  (accumulator, currentvalue) => accumulator * currentvalue,
  1
);
console.log(mul);

const numb = [10, 20, 30, 40, 50];
const max = numb.reduce(
  (accumulator, currentvalue) =>
    accumulator > currentvalue ? accumulator : currentvalue,
  0
);
console.log(max);

const lastarr = [100, 200, 300, 400];
const allSum = lastarr.reduce(
  (accumulator, currentvalue) => accumulator + currentvalue,
  50
);
console.log(allSum);

const names = ["Zara", "Tariq", "Amir", "Lina"];
const rev = names.reverse();
console.log(rev);

const numberr = [1, 4, 9, 7];
const rev1 = numberr.reverse();
console.log(rev1);

const users = [
  { name: "Ali", age: 30 },
  { name: "Sara", age: 25 },
  { name: "Tariq", age: 35 },
];
const objrev = users.reverse();
console.log(objrev);

const fruits = ["Apple", "Banana", "Cherry", "Date"];
const bananaIndex = fruits.indexOf("Banana");
const cherryIndex = fruits.indexOf("Cherry");
const bananaToCherry = fruits.slice(bananaIndex, cherryIndex + 1);
console.log(bananaToCherry);

const cars = ["Tesla", "BMW", "Toyota", "Ford"];
const teslaIndex = cars.indexOf("Tesla");
const bmwIndex = cars.indexOf("BMW");
const finalSort = cars.slice(teslaIndex, bmwIndex + 1);
console.log(finalSort);

const movieList = ["Inception", "Titanic", "Joker", "Avatar", "Intestellar"];

const jokerIndex = movieList.indexOf("Joker");
const avatarIndex = movieList.indexOf("Avatar");
movieList.splice(jokerIndex, 2, "Batman", "Superman");
console.log(movieList);

const players = ["Messi", "Ronaldo", "Neymar", "Mbappe"];
const neymarIndex = players.indexOf("Neymar");
players.splice(neymarIndex, 1, "Haaland");
console.log(players);
