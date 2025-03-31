function threeNumberSum(a = 0, b = 0, c = 0) {
  let sum = a + b + c;
  return sum;
}
console.log(threeNumberSum(10, 20, 30));

function moneyPay(a = 50) {
  let payment = a;
  return payment;
}
console.log(moneyPay());

function earnDeatils(name = "anonymous", earn = 0) {
  return { name, earn };
}
console.log(earnDeatils("Rabbi", 500));

function borgo(a = 1) {
  return a * a;
}
console.log(borgo());

function productDetails(name = "Unknown Products", price = 1) {
  return { name, price };
}
console.log(productDetails());

function favBook(book = "Js Book") {
  let book1 = book;
  return book1;
}
console.log(favBook());

function obPer(obj = { price: 10, quantity: 1 }) {
  return obj;
}
console.log(obPer());
console.log(obPer({ price: 5, quantity: 2 }));

function arr(a = [5, 10, 15]) {
  let mul = [];
  for (let i = 0; i < a.length; i++) {
    mul.push(a[i] * 2);
  }
  return mul;
}
console.log(arr());
console.log(arr([1, 2, 3]));
