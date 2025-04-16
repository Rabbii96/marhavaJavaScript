//In a web browser, the window object is the global object for JavaScript running in that browser.
//You will get the window object.
//Yes! When you declare a method inside an object, using a normal function vs an arrow function, there is an important difference in how this behaves.

const laptop = {
  brand: "dell",
  getBrand: function () {
    console.log(this.brand);
  },
};

const mobile = {
  brand: "samsung",
};
mobile.getBrand = laptop.getBrand;
mobile.getBrand();
laptop.getBrand();

//In JavaScript, this refers to the object that is executing the current function. But its value depends on how the function is called, not where it's written.

const manager = {
  assignWork: function () {
    this.tasks = "tjsks";
    console.log(this);
  },
};

manager.assignWork();

console.log(manager.tasks);



const players = {
  name: "Team A",
  playersCount: 11, // Assuming 11 players per team
  play: function (opponentName) {
    console.log(`${this.name} plays against ${opponentName} in the tournament. There are ${this.playersCount} players in each team.`);
  }
};

const playFunction = players.play.bind(players);
playFunction("Team B");


const car = {
  speed: "100 km/h",
  price: "$20,000"
};

const drive = {
  showDetails: function () {
    console.log(`This car's speed is ${this.speed} and price is ${this.price}`);
  }
};

drive.showDetails.call(car);

const bike = {
  name: "Mountain Bike",
  speed: "30 km/h"
};

const truck = {
  speed: "80 km/h"
};

const logSpeeds = function (bikeSpeed, truckSpeed) {
  console.log(`Bike speed: ${bikeSpeed}, Truck speed: ${truckSpeed}`);
};

logSpeeds.apply(null, [bike.speed, truck.speed]);


const employee = {
  name: "Alice",
  role: "Developer",
  details: function () {
    console.log(`This employee's name is ${this.name} and role is ${this.role}`);
  }
};

employee.details();

const manager1 = {
  name: "Bob",
  role: "Team Lead"
};

employee.details.apply(manager1);




const classroom = {
  name: "Math 101",
  students: ["Student A", "Student B", "Student C"],
  attendance: function () {
    console.log(`This classroom has ${this.students.length} students.`);
  }
};

const classroomAttendance = classroom.attendance.bind(classroom);
classroomAttendance();

const lab = {
  name: "Physics Lab",
  students: ["Student X", "Student Y"],
  attendance: function () {
    console.log(`This lab has ${this.students.length} students.`);
  }
};

const labAttendance = lab.attendance.bind(lab);
labAttendance();


//A closure in JavaScript is a function that remembers the variables from the scope in which it was created, even after that scope has finished executing. 1   In simpler terms, a closure allows a function to access variables from its outer (enclosing) function's scope, even when the outer function has returned
function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log(outerVariable + innerVariable);
  };
}

const myClosure = outerFunction("Hello ");
myClosure("World!");

function fridgeTracker() {
  const counters = {};

  return function (personName) {
    if (!counters[personName]) {
      counters[personName] = 0;
    }
    counters[personName]++;
    console.log(`${personName} opened the fridge. Total opens: ${counters[personName]}`);
  };
}

const trackFridge = fridgeTracker();

trackFridge("Alice");
trackFridge("Bob");
trackFridge("Alice");
trackFridge("Charlie");


function taskTracker() {
  let taskCount = 0;

  return function () {
    taskCount++;
    console.log(`Task completed. Total tasks: ${taskCount}`);
  };
}

const trackTasks1 = taskTracker();
const trackTasks2 = taskTracker();

trackTasks1();
trackTasks1();
trackTasks2();



let myNumber = 10;
console.log(myNumber);

myNumber = myNumber + 1;
console.log(myNumber)


const views = 100;
console.log(views / 2);


let myFunctionExpression = function () {
  console.log("This is a function expression.");
};

myFunctionExpression();


console.log(myVar);

var myVar = 10;
console.log(myVar)

//Function expressions are not hoisted in the same way as function declarations. Only the variable declaration is hoisted, not the function assignment.
//Variables declared with var are hoisted to the top of their scope. However, only the declaration is hoisted, not the initialization
//No, the hoisting behavior is different.




function findLargest(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

const largestNumber = findLargest(87, 12);
console.log(largestNumber);

//An execution context is an environment in which JavaScript code is evaluated and executed.Whenever any JavaScript code runs, it's always run inside an execution context. Think of it like a wrapper around the code that provides the necessary setup for it to work.
//The Global Execution Context is the first execution context that is created when any JavaScript code runs. It represents the environment for  entire JS script.