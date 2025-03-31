function calgoj(a) {
  return a * 1760;
}
console.log(calgoj(13));

function kilocal(a) {
  return a * 860;
}
console.log(kilocal(13));

function convertSec(a) {
  return a * 3600;
}
console.log(convertSec(3));

function centiMeterToMeter(a) {
  return a * 100;
}
console.log(centiMeterToMeter(1200));

function inchTocentiMeter(a) {
  return a * 2.54;
}
console.log(inchTocentiMeter(12));

function poundTokilo(a) {
  return a * 0.453;
}
console.log(poundTokilo(20));

function gojTometer(a) {
  return a * 0.91;
}
console.log(gojTometer(12));

function incomeCal(income_amount) {
  if (income_amount <= 50000) {
    return 10;
  } else if (income_amount > 50001 && income_amount <= 100000) {
    return 20;
  } else if (income_amount > 100001 && income_amount <= 200000) {
    return 30;
  } else {
    return 40;
  }
}
console.log(incomeCal(300000));

function deliveryCost(a) {
  if (a < 10) {
    return 100;
  } else if (a < 20) {
    return 200;
  } else if (a < 50) {
    return 300;
  }
}
console.log(deliveryCost(19));

function marksGrade(a) {
  if (a >= 80) {
    return "A";
  } else if (a >= 70 && a <= 79) {
    return "B";
  } else if (a >= 60 && a <= 69) {
    return "C";
  } else if (a >= 50 && a <= 59) {
    return "D";
  } else {
    return "F";
  }
}
console.log(marksGrade(21));

function evenSumofAverage(number) {
  let sum = 0;
  for (let i = 0; i < number.length; i++) {
    if (number[i] % 2 == 0) {
      sum = sum + number[i];
    }
  }
  let average = number.length;
  return sum / average;
}
console.log(evenSumofAverage([2, 4, 5, 7, 8, 32, 45]));
console.log(evenSumofAverage([2, 4, 8, 2]));
console.log(evenSumofAverage([2, 4, 8, 2, 4]));

function oddSumofAverage(number) {
  let newArr = [];
  for (let i = 0; i < number.length; i++) {
    if (number[i] % 2 != 0) {
      newArr.push(number[i]);
    }
  }

  return newArr;
}
console.log(oddSumofAverage([2, 4, 5, 7, 8, 32, 45]));

function oddNumberFind(number) {
  for (let i = 0; i < number.length; i++) {
    if (number[i] % 2 != 0) {
      return "Odd Number Found";
    }
  }
  return "Odd Number not find";
}
console.log(oddNumberFind([2, 4, 5, 7, 8, 32, 45]));

function evenSumofAverage(number) {
  let sum = 0;
  for (let i = 0; i < number.length; i++) {
    if (number[i] % 2 == 0) {
      sum = sum + number[i];
    }
  }
  let average = number.length;
  return (sum / average).toFixed(2);
}
console.log(evenSumofAverage([2, 4, 5, 7, 8, 32, 45]));

function oddr(number) {
  let newArr = [];
  for (let i = 0; i < number.length; i++) {
    if (number[i] % 2 != 0) {
      let newval = number[i] - 1;
      newArr.push(newval);
    }
  }

  return newArr;
}
console.log(oddr([2, 4, 5, 7, 8, 32, 45]));
