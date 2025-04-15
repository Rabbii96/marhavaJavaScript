let subject = ["Bangla", "English", "Math", "Science", "Islam"];

let i;
for (i = 0; i < subject.length; i++) {
  console.log(subject[i]);
}

let food = ["Biriyani", "Khichuri", "Payes", "Rice", "kabab"];

let j;
for (j = 0; j < food.length; j++) {
  console.log(food[j]);
}

let dateOfBirth = ["1986", "1990", "1992", "1995", "2001"];

let b;
for (b = 0; b < dateOfBirth.length; b++) {
  console.log(dateOfBirth[b]);
}

let players = ["Tamim", "Shakib", "Musi", "Mosta", "Riyad", "Taskin", "Taijul"];

let p;
for (p = 0; p < players.length; p++) {
  console.log(players[p]);
}

let dateOfExam = ["1.4.2025", "5.4.2025", "7.4.2025", "9.4.2025", "10.4.2025"];

let e;
for (e = 0; e < dateOfBirth.length; e++) {
  console.log(dateOfExam[e]);
}

let a = 0;
while (a < 10) {
  console.log("Ami protidin minimum 3 hour kore practice korbo");
  a++;
}

let s = 1;
while (s <= 20) {
  console.log(s);
  s++;
}

let s1 = 50;
while (s1 <= 100) {
  console.log(s1);
  s1++;
}

let s2 = 1;
while (s2 <= 10) {
  console.log(s2 * 3);
  s2++;
}

let s3 = 110;
while (s3 <= 111) {
  console.log(s3 / 2);
  s3++;
}

let s4 = 50;
while (s4 <= 100) {
  console.log(s4);
  s4++;
}

let s5 = 5;
let sum = 0;
while (s5 <= 15) {
  sum = sum + s5;
  s5++;
}
console.log(sum);

let s6 = 1;
let sum1 = 0;
while (s6 <= 50) {
  sum1 = sum1 + s6;
  s6++;
}
console.log(sum1);

let s7 = 21;
let sum2 = 0;
while (s7 <= 50) {
  sum2 = sum2 + s7;
  console.log(sum2);
  s7++;
}

let s8 = 20;
let sum3 = 0;
while (s8 <= 40) {
  sum3 = sum3 + s8;
  s8++;
}
console.log(sum3);

let s9 = 20;
let div = 0;
while (s9 <= 50) {
  if (s9 % 7 == 0) {
    console.log(s9);
  }
  s9++;
}

let s10 = 40;
while (s10 <= 80) {
  if (s10 % 5 == 0 && s10 % 7 == 0) {
    console.log(s10);
  }
  s10++;
}

let s11 = 1;
let sum5 = 0;
while (s11 <= 40) {
  if (s11 % 13 == 0) {
    sum5 = sum5 + s11;
  }
  s11++;
}
console.log(sum5);

for (let z = 1; z <= 50; z += 4) {
  console.log(z);
}

let s12 = 0;
while (s12 <= 80) {
  if (s12 % 9 == 0 && s12 % 6 == 0) {
    console.log(s12);
  }
  s12++;
}

let s13 = 1;
sum6 = 0;
while (s13 <= 50) {
  if (s13 % 9 == 3 && s13 % 4 == 0) {
    sum6 = sum6 + s13;
  }
  s13++;
}
console.log(sum6);

for (let d = 0; d < 30; d++) {
  console.log(d);
  if (d == 15) {
    break;
  }
}

for (let e = 1; e <= 40; e++) {
  if (e % 7 == 0) {
    continue;
  }
  console.log(e);
}

for (let f = 1; f < 15; f++) {
  if (f == 9) {
    continue;
  }
  console.log(f);
}

for (let g = 1; g < 20; g++) {
  if (g == 12) {
    continue;
  }
  console.log(g);
}

for (let h = 1; h <= 25; h++) {
  if (h % 3 == 0) {
    continue;
  }
  console.log(h);
}

for (let j = 91; j <= 120; j++) {
  if (j % 10 == 0) {
    break;
  }
  console.log();
}
