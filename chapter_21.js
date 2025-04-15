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



