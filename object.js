let teacher = {
  name: "latif",
  age: 75,
  Position: " Assistance",
  address: "Dokkin Kalathatali",
  Education: "Masters",
};
//console.log(teacher)

let tree = {
  Name: "Mango  Tree",
  Height: "6 feet",
  Age: 22,
  fruitsName: "Mango",
};
//console.log(tree)

let animal = {
  Name: "Cow",
  Height: "6 feet",
  Age: 5,
  healthCondition: "Good",
};
//console.log(animal)

let father = {
  Name: "Md ...",
  Height: "6 feet",
  Age: 47,
  children: 2,
  occupation: "farmer",
  address: " Kalathatali",
  Education: "HSC",
};
//console.log(father)
let motorBike = {
  brandName: "BMW",
  tire: 2,
  color: " Black",
  maxSpeed: "300",
  price: "400000",
};
//console.log(motorBike)

let bird = {
  name: "Doel",
  color: " Black-white",
  food: "Natural food",
};
//console.log(bird)

let laptop = {
  brandName: "Dell",
  processor: "13th Gen",
  ram: " 32GB",
  price: 50000,
  display: "15 inch",
};
//console.log(laptop)

let player = {
  name: "Kaka",
  age: 32,
  soprts: " Football",
  teamName: "Real Mdrid",
};
console.log(player.teamName);

let laptop1 = {
  brandName: "Dell",
  processor: "13th Gen",
  ram: " 32GB",
  price: 50000,
  display: "15 inch",
};
console.log(laptop1.display);

let favPlace = {
  name: " Cox's Bazar",
  distance: "400km",
  popularity: "High",
};
console.log(favPlace["popularity"]);

let phone = {
  brand: " Nokai",
  color: "black",
  price: 50000,
};
console.log(phone["price"]);

let library = {
  name: "Public Libarry",
  location: "Dhaka",
  books: 5000,
};
console.log(library.location);

let movie = {
  name: "title Inception",
  director: "Nolan",
  rating: 10,
};
console.log(movie["rating"]);

let college = {
  name: "ndc",
  established: 1949,
  groups: ["Science", "Arts", "Commerce"],
};
console.log(college.groups[1]);

let family = {
  father: {
    Name: "Md ...",
    Age: 45,
    occupation: "farmer",
    address: " Kalathatali",
    Education: "HSC",
  },
  mother: {
    Name: "Mis ...",
    Age: 45,
    occupation: "farmer",
  },
};

let f = family.father.Age;
let m = family.mother.Age;
let ageSum = f + m;

console.log(ageSum);

let headphone = {
  brand: "Sony",
  price: "3000",
  color: "red",
};
Object.freeze(headphone);

headphone.price = "3500";

headphone.model = "WH-1000XM4";

delete headphone.color;
console.log(headphone);

const player1 = {
  name: "Messi",
  goals: 800,
  club: "Inter Miami",
};
Object.freeze(player1);
player1.goals = 805;
player1.country = "Argentina";
delete player1.club;

console.log(player1);

const book = {
  title: "Harry Potter",
  author: "JK Rowling",
  page: 500,
};
Object.seal(book);
book.author = "Rabbi";
console.log(book);

let gadget = {
  name: "iPhone",
  price: 120000,
  color: "Black",
};

delete gadget.price;
console.log(gadget);

let animall = {
  name: "Tiger",
  location: "Sundarban",
};
Object.defineProperty(animall, "location", {
  writable: false,
  configurable: false,
});

console.log(animall);

const food = {
  name: "Pizzaa",
  price: 500,
  size: "Large",
};
Object.seal(food);
food.price = 550;
console.log(food);
