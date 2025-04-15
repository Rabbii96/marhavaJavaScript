let toHome = true;

if (toHome) {
  console.log("Get meal");
} else {
  console.log("Jharu BAri");
}

let login = true;
if (login) {
  console.log("Welcome");
} else {
  console.log("Get Lost");
}

let running = true;
if (running) {
  console.log("Got chocolate");
} else {
  console.log("Beli become fat");
}

let myMarks = 85;
let conditionMarks = 80;

if (myMarks > conditionMarks) {
  console.log("Get a bike");
} else {
  console.log("Do not get any bike");
}

let movieShow = true;
if (movieShow) {
  console.log("Watching Movie");
} else {
  console.log("Going to better sleep");
}

let isTempareture = true;
if (isTempareture) {
  console.log("Start aircondition");
} else {
  console.log("Sleep with blanket");
}

let age = 20;
let height = 65;

if (age > 18 && height > 60) {
  console.log("Gari thelo");
} else {
  console.log("Gari te boso");
}

let mathMarks = 70;
let englishmarks = 80;

if (mathMarks > 80 || englishmarks > 85) {
  console.log("Capable for Admission");
} else {
  console.log("Biyer jonno redy hou");
}

let studentGpa = 5;
let monthlyIncome = 8000;

if (studentGpa == 5 && monthlyIncome < 10000) {
  console.log("Get Scholarship");
} else {
  console.log("Study will be continue with payment");
}

let canage = 31;
let exprienceOfYear = 3;

if (canage > 30 && exprienceOfYear > 2) {
  console.log("Candidate can attend exam");
} else {
  console.log("Candidate can not attend exam");
}

let egg = 13;
let chicken = 0;

if (egg > 12 || chicken > 0) {
  console.log("Eating Korma polau");
} else {
  console.log("Eating ruti kola");
}

let tem = 101;
let cough = true;

if (tem > 100 && cough) {
  console.log("Go to doctor");
} else {
  console.log("Katha muri diye ghuma");
}

let attendence = 85;
let homework = true;

if (attendence > 80 && homework) {
  console.log("Can join in exam ");
} else {
  console.log("You fail");
}

let noElectricity = true;
let noMobileCharge = true;

if (noElectricity && noMobileCharge) {
  console.log("Seat in table for study");
} else {
  console.log("Playing Video Game");
}

let shirtPrice = 1500;
let coupon = true;

if (shirtPrice > 1000 && coupon) {
  let price = shirtPrice * (20 / 100);
  let finalPrice = shirtPrice - price;
  console.log("got Discount", finalPrice);
} else {
  console.log("Did not got discount");
}

let friendPurchase = 4500;

if (friendPurchase > 3000) {
  let parcentDiscount = friendPurchase * (5 / 100);
  let totalDiscount = friendPurchase - parcentDiscount;
  console.log("Friend Got discount", totalDiscount);
} else if (friendPurchase > 6000) {
  let parcentDiscount1 = friendPurchase * (5 / 100);
  let totalDiscount1 = friendPurchase - parcentDiscount1;
  console.log("Friend Got discount", totalDiscount1);
}

let chaildrenAge = 11;
let oldAge = 65;
let mainPrice = 600;

if (12 < chaildrenAge) {
  console.log("free food");
} else if (oldAge > 60) {
  let discount = mainPrice * (50 / 100);
  let finalPrice = mainPrice - discount;
  console.log("Discount price will be", finalPrice);
}

let acBalance = 7000;

if (acBalance > 5000) {
  console.log("Tui Dhoni amk biye kor");
} else if (acBalance > 1000 && acBalance <= 5000) {
  console.log("Bindas life enjoy koro");
} else if (acBalance < 1000) {
  console.log("Desposit koro");
} else {
  console.log("Taka kom, shudhu matha thanda rakho");
}

let marks = 90;

if (marks > 80) {
  console.log("A+");
} else if (marks >= 50 && marks <= 80) {
  console.log("Pass");
} else if (marks < 50) {
  console.log("Fail");
} else {
  console.log("Kono number e input dawa hoy nai");
}

let bookPAge = 90;

if (bookPAge > 500) {
  console.log("heart-attack size");
} else if (bookPAge >= 100 && bookPAge <= 500) {
  console.log("Mid-size book");
} else if (bookPAge < 100) {
  console.log("small size");
} else {
  console.log("Kono number e input dawa hoy nai");
}

let temparature = 5;

if (temparature > 20) {
  console.log("Hot hot");
} else if (temparature >= 0 && temparature <= 20) {
  console.log("Cool cool");
} else if (temparature < 0) {
  console.log("Ice Cool");
} else {
  console.log("Kono number e input dawa hoy nai");
}

let playLevel = 90;

if (playLevel > 50) {
  console.log("Expert");
} else if (playLevel >= 50 && playLevel <= 80) {
  console.log("Pro Level");
} else if (playLevel < 50) {
  console.log("novice");
} else {
  console.log("Kono number e input dawa hoy nai");
}

// sir er bash basay thas thas

let invite = true;
let money = 900;

if (invite) {
  console.log("Join to party");
  if (money > 1000) {
    console.log("Going with gift");
  } else {
    console.log("Going without gift");
  }
} else {
  console.log("Remove from friendlist");
}

let istea = true;

if (istea) {
  console.log("Biskit khaben?");
} else {
  console.log("Sudu cha redy");
  console.log("Star jalsha dekhun");
}

let userActive = true;
let userSubs = true;
let subsPremium = true;
if (userActive) {
  if (userSubs) {
    if (subsPremium) {
      console.log("See premium feature");
    } else {
      console.log("See free version");
    }
  }
}

let food = true;
let deliveryApp = true;
if (food) {
  console.log("Food gorom korbo");
} else {
  console.log("Check food delivery app is working");
  if (deliveryApp) {
    console.log("Order food");
  } else {
    console.log("Ami ajk roja");
  }
}

let partyPeople = 120;
let isgift = true;

if (partyPeople > 100) {
  console.log("Check sobai gift anche kina?");
  if (isgift) {
    console.log("party all night");
  } else {
    console.log("Pary with myself");
  }
}

//ternary operator
let amount = 3000;
let cashback = amount >= 3000 ? 500 : 0;

console.log(cashback);

let age1 = 16;

let ageCal = age1 >= 15 ? "Teenager" : "Child";
console.log(ageCal);

let isLoggedIn = true;

let output = isLoggedIn ? "Well come back" : "PLease login";
console.log(output);

let isFull = true;

let show = isFull ? "Ready for a long Drive" : "Fill the tank";
console.log(show);

let examPass = true;

let output1 = examPass ? "Part time" : " Next semester a e serius study korbo";

console.log(output1);

let sunny = false;
let output2 = sunny ? "Stay home" : "nothing";
console.log(output2);

let expensive = false;
let output3 = expensive ? "will buy this item" : "nothing";
console.log(output3);
