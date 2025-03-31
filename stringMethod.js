const city = "Chattogram";
const findG = city.indexOf("g");
console.log(findG);

const division = "Sylhet";
const yFind = division.includes("y");
console.log(yFind);

const name = "Rifat";
const lastchar = name[name.length - 1];
console.log(lastchar);

let language = "JavaScript";
let index = language.indexOf("rip");
console.log(index);

const text = "Immutable";
const leng = text.length;
console.log(leng);

const email = "User@Example.Com";
const smallConv = email.toLowerCase();
console.log(smallConv);

const greeting = "hELlo WoRLd";
const smCon = greeting.toLowerCase();
const UpCon = greeting.toUpperCase();
console.log(smCon);
console.log(UpCon);

const language1 = "JavaScript";
console.log(language1.toLowerCase().includes("script"));

const text1 = "NodeJs";
const isFirstLetterCapital = text1[0] === text1[0].toUpperCase();
console.log(isFirstLetterCapital);

const sentence = "Raju,Rana,Hasan,Kabir,Mahi";
const ar = sentence.split(",");
console.log(ar);

const frName = ["Raju", "Rana", "Hasan", "Kabir", "Mahi"];
const str = `"${frName.join(",")}"`;
console.log(str);

const stri = "function if else while";
const words = stri.split(" ");
console.log(words);

const languag = ["JavaScript", "Python", "Java"];
const s1 = languag.join(":");
console.log(s1);

const s2 = "for,while,for-in,for-of,do-while";
const spl = s2.split(",");
console.log(spl);

const st3 = " console log debug ";
const tr = st3.trim();
console.log(tr);

const str1 = "Push";
const str2 = "pop";
const str3 = "shift";
const str4 = "unshift";
const conc = str1 + " " + str2 + " " + str3 + " " + str4;
console.log(conc);

const cote = "Hello JavaScript Developers";
const cut = cote.substring(6, 16);
console.log(cut);

const cote2 = "Code More Learn More";
const cut2 = cote2.substring(9, 15);
console.log(cut2);

const st = "Hi";
const re = st.repeat(10);
console.log(re);

const strin = "I am Learning JavaScript. JavaScript is amazing!";
console.log(strin.replace("JavaScript", "JS"));

const stLast = "I love apples and apples are testy!";
console.log(stLast.replaceAll("apples", "mangoes"));
