function nam(a) {
  if (typeof a !== "string") {
    return "Name Sholud be string";
  }
  return a[0];
}
console.log(nam(123));

function arr(ar) {
  if (!Array.isArray(ar)) {
    return "Input should be array";
  }
  return ar[ar.length - 1];
}
console.log(arr([1, 2, 3, 4]));
console.log(arr("Dbjbc"));

function getArea(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "Enter Valid Number";
  }
  let area = a * b;
  return area;
}
console.log(getArea(10, 10));
console.log(getArea("ABC"));

/*
1.Semicolon Error: No Error
2. Reference Error : Identifier that hasn't been declared or is not accessible in the current scope.
3.Difference Syntax error vs Type Error:The error points to a specific line/character where syntax is broken. Code starts running but crashes when the invalid operation is hit.
*/
