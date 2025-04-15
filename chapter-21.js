//Class: A class is a blueprint or template.It defines the structure and behavior of objects.It does not take up memory by itself. And Object:An object is a real instance of a class.It has actual data and takes memory space.You can use and manipulate it in your program.
//A class instance is just another name for an object that is created from a class.

class Vehical {
  constructor(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
}
const BMW_X5 = new Vehical("BMW", "X5", 20000);
console.log(BMW_X5);
const Tesla = new Vehical("Tesla", "Model 3", 40000);
console.log(Tesla);

class Worker {
  constructor(id, name, hoursWorked) {
    this.id = id;
    this.name = name;
    this.hoursWorked = hoursWorked;
  }
}
const wor = new Worker(101, "Tom Curise", 40);
console.log(wor);

class Library {
  constructor(name, books, location) {
    this.name = name;
    this.books = books;
    this.location = location;
  }
}
const li = new Library("Central Library", 1000, "Dhaka");
console.log(li);

class Classroom {
  constructor(section, teacher) {
    this.section = section;
    this.teacher = teacher;
    this.students = [];
  }
}
const classA = new Classroom("A", "Mr Plumber");
console.log(classA);

class Product {
  constructor(name, category, stock) {
    this.name = name;
    this.category = category;
    this.stock = stock;
  }
}
const pro = new Product("Mobile", "Electronics", 50);
console.log(pro);

class Product1 {
  constructor(name, category, stock = 0) {
    this.name = name;
    this.category = category;
    this.stock = stock;
  }
}
const pro1 = new Product1("Mobile", "Electronics");
console.log(pro1);

class Hotel {
  constructor(name, room, cost) {
    this.name = name;
    this.room = room;
    this.cost = cost;
  }
  getName() {
    return this.name;
  }
}
const hotelinfo = new Hotel("SonarGaon", 4200, 1200);
console.log(hotelinfo);
const name = hotelinfo.getName();
console.log(name);

class Employee {
  constructor(name, Designation, salary) {
    this.name = name;
    this.Designation = Designation;
    this.salary = salary;
  }
  getSalary() {
    return this.salary;
  }
}
const emp = new Employee("Rahim", "Engineer", 40000);
const sal = emp.getSalary();
console.log(sal);

class Library1 {
  constructor() {
    this.books = [];
  }
  addBook(bookName) {
    this.books.push(bookName);
    return bookName;
  }
  hasBook(bookName) {
    return this.books.includes(bookName);
  }
}
const myLibrary = new Library1();
const book = myLibrary.addBook("JavaScript Basic");
console.log(book);

class ShoppingCart {
  constructor() {
    this.products = [];
    this.totalPrice = 0;
  }

  addToCart(productName, price) {
    this.products.push({ name: productName, price: price });
    this.totalPrice += price;
  }

  getTotalPrice() {
    return this.totalPrice;
  }
}

const myShopping = new ShoppingCart();
myShopping.addToCart("Pen", 30);
myShopping.addToCart("Notebook", 70);

console.log(myShopping.products);
console.log(myShopping.getTotalPrice());

//Inheritance is a fundamental concept in OOP that allows a class (child/subclass) to inherit properties and methods from another class (parent/superclass). This promotes code reusability and establishes a hierarchical relationship between classes.
//Inheritance promotes clean, reusable, and modular code by allowing classes to share and extend behavior. Use it wisely to avoid unnecessary complexity.

class Vehicle {
  constructor(wheels, fuelType) {
    this.wheels = wheels;
    this.fuelType = fuelType;
  }
}

class Bus extends Vehicle {
  constructor(wheels, fuelType, passengerCapacity, numberOfDoors, hasAC) {
    super(wheels, fuelType);
    this.passengerCapacity = passengerCapacity;
    this.numberOfDoors = numberOfDoors;
    this.hasAC = hasAC;
  }

}

class Truck extends Vehicle {
  constructor(wheels, fuelType, loadCapacity, cargoType, numberOfGears) {
    super(wheels, fuelType);
    this.loadCapacity = loadCapacity;
    this.cargoType = cargoType;
    this.numberOfGears = numberOfGears;
  }
}

class Bike extends Vehicle {
  constructor(wheels, fuelType, hasHelmetStorage, isGeared, hasDiscBrake) {
    super(wheels, fuelType);
    this.hasHelmetStorage = hasHelmetStorage;
    this.isGeared = isGeared;
    this.hasDiscBrake = hasDiscBrake;
  }

}


const bus = new Bus(6, "Diesel", 50, 2, true);
const truck = new Truck(8, "Diesel", 15000, "Construction Materials", 6);
const bike = new Bike(2, "Petrol", true, true, true);

console.log(bus)
console.log(truck)
console.log(bike)



class Animal {
  constructor(name, habitat, lifespan, isVertebrate, diet) {
    this.name = name;
    this.habitat = habitat;
    this.lifespan = lifespan;
    this.isVertebrate = isVertebrate;
    this.diet = diet;
  }
}
class Bird extends Animal {
  constructor(name, habitat, lifespan, isVertebrate, diet, canFly, wingspan, beakType, isMigratory, eggColor) {
    super(name, habitat, lifespan, isVertebrate, diet);
    this.canFly = canFly;
    this.wingspan = wingspan;
    this.beakType = beakType;
    this.eggColor = eggColor;
  }

}
class Fish extends Animal {
  constructor(name, habitat, lifespan, isVertebrate, diet, waterType, gillCount, hasScales, canBreatheAir, finType) {
    super(name, habitat, lifespan, isVertebrate, diet);
    this.waterType = waterType;
    this.gillCount = gillCount;
    this.hasScales = hasScales;
    this.canBreatheAir = canBreatheAir;
    this.finType = finType;
  }

}
const animel = new Animal("Tiger", "Jungle", 15, true, "Carnivore");
const bird = new Bird("Eagle", "Mountains", 20, true, "Carnivore", true, 2.3, "Hooked", true, "White");
const fish = new Fish("Salmon", "Rivers", 5, true, "Omnivore", "Freshwater", 4, true, false, "Dorsal");

console.log(animel)
console.log(bird)
console.log(fish)


class Furniture {
  constructor(material, color, height, width, depth, price, weight) {
    this.material = material;
    this.color = color;
    this.height = height;
    this.width = width;
    this.depth = depth;
    this.price = price;
    this.weight = weight;
  }
}
class Chair extends Furniture {
  constructor(
    material, color, height, width, depth, price, weight,
    hasArmrests, isFoldable, cushionType, maxWeightCapacity, isWheeled
  ) {
    super(material, color, height, width, depth, price, weight);
    this.hasArmrests = hasArmrests;
    this.isFoldable = isFoldable;
    this.cushionType = cushionType;
    this.maxWeightCapacity = maxWeightCapacity;
    this.isWheeled = isWheeled;
  }

}
class Table extends Furniture {
  constructor(
    material, color, height, width, depth, price, weight,
    shape, isExtendable, numberOfLegs, isOutdoor, surfaceType
  ) {
    super(material, color, height, width, depth, price, weight);
    this.shape = shape;
    this.isExtendable = isExtendable;
    this.numberOfLegs = numberOfLegs;
    this.isOutdoor = isOutdoor;
    this.surfaceType = surfaceType;
  }

}
const chair = new Chair(
  "metal", "black", 90, 60, 60, 120, 15,
  true, false, "mesh", 150, true
);
const table = new Table(
  "wood", "brown", 75, 180, 90, 350, 50,
  "rectangular", true, 4, false, "glossy"
);
const furniture = new Furniture("wood", "brown", 100, 80, 40, 200, 25);
console.log(chair);
console.log(table);
console.log(furniture)

class Pet {
  constructor(name, age, color) {
    this.name = name;
    this.age = age;
    this.color = color;
  }

}


class Dog extends Pet {
  constructor(name, age, color, breed, isTrained) {
    super(name, age, color);
    this.breed = breed;
    this.isTrained = isTrained;
  }

}

class Cat extends Pet {
  constructor(name, age, color, eyeColor, isIndoor) {
    super(name, age, color);
    this.eyeColor = eyeColor;
    this.isIndoor = isIndoor;
  }

}


class Parrot extends Pet {
  constructor(name, age, color, canTalk, wingSpan) {
    super(name, age, color);
    this.canTalk = canTalk;
    this.wingSpan = wingSpan;
  }

}

const dog = new Dog("Bruno", 4, "Brown", "Labrador", true);
const cat = new Cat("Misty", 2, "White", "Green", true);
const parrot = new Parrot("Polly", 1, "Green", true, "30cm");

console.log(dog)
console.log(cat)
console.log(parrot)


//DRY  is a software development principle that emphasizes avoiding duplication of code or logic. Instead, reuse code through functions, classes, or modules to improve maintainability and reduce errors.


//inheritance primarily works through the prototype chain. When an object is created, it has an internal link to another object called its prototype.
//Prototypal inheritance is a JavaScript feature where an object inherits properties and methods from another object (its prototype).


const person = {
  name: "John Doe"
};

console.log(Object.getPrototypeOf(person));
console.log(person.toString());

const student = {
  name: "Alice",
  id: 123
};
console.log(student.toString());