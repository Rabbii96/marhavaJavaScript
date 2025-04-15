function juiceKhaw() {
  return "ei nao lebur juice";
}

console.log(juiceKhaw());

function myRoutine() {
  console.log(
    "Woke up 6 am",
    "Complete namaz",
    "Start Study",
    "Take my breakfast"
  );
}

function family() {
  return ["Mother", "Brother", "Grand Mother"];
}
console.log(family());

function taskDone() {
  console.log("Pray namaz");
  console.log("Morning Study");
  console.log("Breakfast");
  console.log("Office Work");
  console.log("House work");
}

function greetMe() {
  return "Good Morning!Have a great day!";
}
console.log(greetMe());

function greatFavFriends() {
  console.log("1. Rakib");
  console.log("2. Rahim");
  console.log("3. Karim");
}

greatFavFriends();

function introduceMyself() {
  console.log("NaMe:Rabbi");

  console.log("Age:29");
  console.log("Address:Mugda");
  console.log("PhoneNumber:015213");
  console.log("height:5.5");
  console.log("FavFood:Beef");
}
introduceMyself();

function sumOfChildrenFather(a, b) {
  let f = a;
  let c = b;
  let sum = f + c;
  return sum;
}

let s = sumOfChildrenFather(40, 22);
console.log(s);

function calculator(a, b) {
  let sum = a + b;
  let minus = a - b;
  let miltiple = a * b;
  let divided = a / b;
  return { sum, minus, miltiple, divided };
}
console.log(calculator(60, 10));

function subjectsSum(a, b, c) {
  let sub1 = a;
  let sub2 = b;
  let sub3 = c;
  let sum = a + b + c;
  return sum;
}
console.log(subjectsSum(60, 10, 30));

function age(a) {
  let agecal = 2025 - a;
  return agecal;
}
console.log(age(1996));

function laukena(a) {
  let lauPrice = a / 35;
  return lauPrice;
}
console.log(laukena(600));

function numberSum(a, b, c, d) {
  let sub1 = a;
  let sub2 = b;
  let sub3 = c;
  let sub4 = d;
  let sum = a + b + c + d;
  return sum / 4;
}
console.log(numberSum(60, 10, 30, 20));

function shopProfit(a) {
  let profit = a + 250;
  return profit;
}
console.log(shopProfit(250));

function ageCentuary(a) {
  let agecal = a + 100;
  return agecal;
}
console.log(ageCentuary(1996));

function mobileUseTime(a) {
  let monthUseTime = 30 * a;
}
console.log(mobileUseTime(5));

function con(a) {
  if (a > 10) {
    return true;
  } else {
    return false;
  }
}
console.log(con(2));

function divfan(a) {
  if (a % 13 == 0) {
    return true;
  } else {
    return false;
  }
}
console.log(divfan(2));

function launch(a, b, c) {
  let rice = a;
  let curry = b;
  let drinks = c;
  let bill = rice + curry + drinks;
  return bill;
}
console.log(launch(60, 120, 50));

function ageCheck(a) {
  if (a > 18) {
    return "Eligible for Voting";
  } else {
    return "Not Eligible";
  }
}
console.log(ageCheck(29));

function str(a) {
  let len = a.length;
  return len;
}
console.log(str("Rabbi"));

function checknegative(a) {
  if (a >= 0) {
    return "positive";
  } else {
    let cal = a * -1;
    return cal;
  }
}
console.log(checknegative(-5));

function evenOdd(arr) {
  if (arr % 2 == 0) {
    return "even";
  } else {
    return "odd";
  }
}
console.log(evenOdd([12, 13, 16, 17, 19]));

function name(str) {
  let i;
  for (i = 0; i < str.length; i++) {
    return str[0];
  }
}
console.log(name("Rabbi"));

function tencheck(a) {
  if (a > 10) {
    let res = a / 10;
    return res;
  } else {
    let res1 = a * 10;
    return res1;
  }
}
console.log(tencheck(20));

function ar(arr) {
  for (let i = 0; i < arr.length; i++) {
    let sum = arr[0] + arr[1];
    return sum;
  }
}
console.log(ar([12, 13, 16, 17, 19]));

function ncheck(a) {
  if (a >= 0) {
    return a * 2;
  } else {
    return a * 3;
  }
}
console.log(ncheck(-10));

function strName(str1, str2) {
  return str1 < str2;
}
console.log(strName("Rabbiiii", "Rakib"));

function twonum(a, b) {
  let mul = a * b;
  if (mul > 100) {
    return mul / 2;
  }
}
console.log(twonum(20, 30));

function oddSum(number) {
  let sum = 0;
  for (let i = 0; i < number.length; i++) {
    if (number[i] % 2 != 0) {
      sum = sum + number[i];
    }
  }
  return sum;
}
console.log(oddSum([5, 15, 8, 7]));

function minNum(number) {
  for (let i = 0; i < number.length; i++) {
    if (number[i] < number[i + 1]) {
      return number[i];
    }
  }
}
console.log(minNum([20, 15, 48]));

function ager(a) {
  if (a < 18) {
    return 18;
  } else if (a > 45) {
    return 45;
  } else {
    return a;
  }
}
console.log(ager(26));

function evenSum(number) {
  let sum = 0;
  for (let i = 0; i < number.length; i++) {
    if (number[i] % 4 == 0) {
      sum = sum + number[i];
    }
  }
  return sum;
}
console.log(evenSum([2, 4, 5, 7, 8, 32, 45]));

function tweenty(a) {
  if (a < 20) {
    return a * 2;
  } else {
    return a / 20;
  }
}
console.log(tweenty(40));

function negSum(number) {
  let sum = 0;
  for (let i = 0; i < number.length; i++) {
    if (number[i] < 0) {
      sum = sum + number[i];
    }
  }
  return sum;
}
console.log(negSum([2, -4, 5, 7, -8, 32, 45]));

function threedividedSum(number) {
  let mul = 1;
  for (let i = 0; i < number.length; i++) {
    if (number[i] % 3 == 0) {
      mul = mul * number[i];
    }
  }
  return mul;
}

console.log(threedividedSum([2, 3, 5, 7, 9, 32, 41]));

function objcre(obj = { principal: 1000, rate: 5 }) {
  return (obj.principal * obj.rate) / 100;
}
console.log(objcre());
console.log(objcre({ principal: 2000, rate: 10 }));

function salaryobj(obj = { salary: 50000, tax: 10 }) {
  let tax = (obj.salary * obj.tax) / 100;
  let mainsal = obj.salary - tax;
  return mainsal;
}
console.log(salaryobj());
console.log(salaryobj({ salary: 70000, tax: 20 }));

//practice start from 1

function showDivision(num1, num2) {
  return `The substraction of ${num1} by ${num2} is ${num1 - num2}`;
}

console.log(showDivision(200, 20));

let employee = {
  name: "Test",
  age: 29,
  salary: 10000,
};
console.log(
  `emplyee information name:${employee.name},age:${employee.age},salary:${employee.salary}`
);

let arr = ["MAngo", "JackFruits", " Banana", "Pine Apple", "Gouva"];
console.log(`third Number fruits is:${arr[3]}`);

const a = 50;
const b = 10;
console.log(`The division of a  and b is: ${a / b}`);

const person = { firstName: "Amit", lastName: "Kumar" };
console.log(`Full Name:${person.firstName} ${person.lastName}`);

let animals = ["Cat", "Dog", "Elephant"];
console.log(`My Favorite animals are: ${animals}`);

let student = {
  name: "Rahim",
  age: 25,
  result: [82, 80, 85],
};
const average = (student.result[0] + student.result[1] + student.result[2]) / 3;
console.log(`Student Name: ${student.name}`);
console.log(`Average Result: ${average.toFixed(2)}`);

//arrow function

const array = [10, 20, 30, 40, 50];
const getFirstIndexValue = (arr) => arr[0];
console.log(getFirstIndexValue(array));

const multiTgreeValue = (a, b, c) => a * b * c;
const result = multiTgreeValue(2, 3, 4);
console.log(result);

const unknown = () => "Unknown";
const re = unknown();
console.log(re);

let information = {
  name: "Rabbi",
  Money: 200,
};

const divMoney = (obj, divisor) => obj.Money / divisor;
const result1 = divMoney(information, 5);
console.log(result1);

const array1 = [10, 20, 30, 40, 50];
const sumFirstLast = (arr) => arr[0] + arr[arr.length - 1];
const result2 = sumFirstLast(array1);
console.log(result);

const addfunction = (a = 10, b = 5) => a + b;
const result3 = addfunction(20, 20);
console.log(result3);
