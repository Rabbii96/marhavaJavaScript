/*jsonobject and object difference :
 JSON হল text format যা ডেটা ট্রান্সফার এবং সংরক্ষণের জন্য ব্যবহৃত হয়।

JavaScript Object হল dynamic key-value pair structure, যা JavaScript প্রোগ্রামে ডাটা ম্যানেজ করতে ব্যবহৃত হয়।

JSON.parse() দিয়ে JSON কে JavaScript Object-এ রূপান্তর করা হয়।

JSON.stringify() দিয়ে JavaScript Object কে JSON ফরম্যাটে রূপান্তর করা হয়।*/

const { reject } = require("async");

let user = {
  name: "Rabbi",
  email: "rabbi@gmail.com",
  address: "South Mugdapara",
  orderHistory: ["Mac", "Mouse", "keyboard"],
};
const userJSON = JSON.stringify(user);
console.log(userJSON);

let shoppingCart = {
  products: ["Shirt", "Pant", "T-shirt", "shoes", "Belt"],
  totalPrice: 2860,
  userDetails: ["name:Rabbi", "id:102", "Contact:01531413122"],
};
const shoppingJSON = JSON.stringify(shoppingCart);
console.log(shoppingJSON);

let weather = {
  city: "Dhaka",
  temperature: 36,
  humidity: 140,
  forecast: [32, 36, 38, 39, 42, 41, 45, 31],
};
const weatherJSON = JSON.stringify(weather);
console.log(weatherJSON);

const movie = {
  title: "Avatar",
  releseYear: 2020,
  actors: ["tom", "rom", "kelu", "romo", "femo"],
  ratings: 8,
};
const movieJSON = JSON.stringify(movie);
console.log(movieJSON);

let projectManagement = {
  project: [
    {
      name: "Project-01",
      description: "Develop e-commerce website",
      teamMembers: ["John", "Sarah", "Mike"],
      deadline: "2023-12-31",
      task: [
        {
          title: "Design homepage",
          assigned: "John",
          status: "In Progress",
        },
        {
          title: "Implement payment system",
          assigned: "Sarah",
          status: "Pending",
        },
      ],
    },
    {
      name: "Project-02",
      description: "Mobile app development",
      teamMembers: ["Alice", "Bob", "Emma"],
      deadline: "2024-02-15",
      tasks: [
        {
          title: "Create UI components",
          assigned: "Alice",
          status: "Completed",
        },
        {
          title: "Backend integration",
          assigned: "Bob",
          status: "In Progress",
        },
      ],
    },
    {
      name: "Project-03",
      description: "Database optimization",
      teamMembers: ["David", "Lisa"],
      deadline: "2023-11-30",
      tasks: [
        {
          title: "Analyze query performance",
          assigned: "David",
          status: "Completed",
        },
        {
          title: "Implement indexing",
          assigned: "Lisa",
          status: "Pending",
        },
      ],
    },
  ],
};
const projectManagementJSON = JSON.stringify(projectManagement);
console.log(projectManagementJSON);

let edTech = {
  courses: [
    {
      title: "Course-01",
      instructorName: "Abdul Karim",
      duration: "200 Min",
      lessons: [
        {
          name: "Lesson-01",
          duration: "50 min",
          difficultyLevel: "Medium",
        },
      ],
    },
    {
      title: "Course-02",
      instructorName: "Rahat Ullah",
      duration: "400 Min",
      lessons: [
        {
          name: "Lesson-02",
          duration: "30 min",
          difficultyLevel: "Hard",
        },
      ],
    },
    {
      title: "Course-03",
      instructorName: "Manzarul Rana",
      duration: "700 Min",
      lessons: [
        {
          name: "Lesson-03",
          duration: "150 min",
          difficultyLevel: "Easy",
        },
      ],
    },
  ],
};
const edTechJSON = JSON.stringify(edTech);
console.log(edTechJSON);

// 8. Create the product reviews data (JavaScript object)
const productReviews = {
  products: [
    {
      productName: "Wireless Bluetooth Earbuds",
      reviews: [
        {
          reviewer: {
            name: "John Smith",
            email: "john@example.com",
          },
          rating: 4.5,
          reviewText: "Great sound quality, but battery life could be better.",
        },
        {
          reviewer: {
            name: "Sarah Johnson",
            email: "sarah@example.com",
          },
          rating: 5,
          reviewText: "Absolutely love these! Comfortable and excellent sound.",
        },
      ],
    },
    {
      productName: "Smart Fitness Watch",
      reviews: [
        {
          reviewer: {
            name: "Mike Chen",
            email: "mike@example.com",
          },
          rating: 3,
          reviewText: "Decent features but the app needs improvement.",
        },
      ],
    },
  ],
};

const productReviewJSON = JSON.stringify(productReviews);
console.log(productReviewJSON);

const productReviewsArray = JSON.parse(productReviewJSON).products;
console.log(productReviewsArray);

const getUsers = new Promise((resolve, reject) => {
  const usersAvaile = true;
  const users = ["John", "Alice", "Bob", "Charlie"];
  if (usersAvaile) {
    resolve(users);
  } else {
    reject("No user data available");
  }
});
getUsers
  .then((usersNames) => {
    console.log(usersNames);
  })
  .catch((error) => {
    console.log(error);
  });

const paymentProcess = new Promise((resolve, reject) => {
  let amount = -1;
  if (amount > 0) {
    resolve("Promise sprocess success");
  } else {
    reject("Promise error");
  }
});
paymentProcess
  .then((paymentResult) => {
    console.log("Payment Done:", paymentResult);
  })
  .catch((error) => {
    console.log(error);
  });

function sendEmail(email) {
  return new Promise((resolve, reject) => {
    const validEmail = [
      "test@example.com",
      "user@gmail.com",
      "admin@company.com",
    ];

    if (validEmail.includes(email)) {
      resolve(`Email sent to: ${email}`);
    } else {
      reject("Lets Dance in the spam folder!");
    }
  });
}

sendEmail("user@gmail.com")
  .then((message) => console.log(message))
  .catch((error) => console.log(error));

sendEmail("nigerianprince@scam.com")
  .then((message) => console.log(message))
  .catch((error) => console.log(error));

//Response object represents the entire HTTP response, including headers, status, and the body
//We use the fetch() function in JavaScript to make HTTP requests (like GET, POST, PUT, DELETE) to APIs or servers. It is the modern, built-in way to fetch resources asynchronously over the network.
//A Promise is a JavaScript object representing the eventual completion (or failure) of an asynchronous operation (like network requests, file reading, timers).
//fetch() is a web API (built into browsers) specifically for making HTTP requests (GET, POST, etc.).

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => console.log(users))
  .catch((error) => console.error("Error:", error));

fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((erroe) => console.log(error));

//Patch
//POST
//GET
//create,Read, Update,delete
//GET , POST, PUT,PATCH DELETE

function testJSONParsing(input) {
  try {
    const dataResult = JSON.parse(input);
    console.log("Parsed Data:", dataResult);
  } catch (error) {
    console.log("Invalid JSON format");
  }
}
testJSONParsing('{"product": "Date", "price": 450}');
testJSONParsing("Data corrupted");

function validInput(str) {
  if (!str.includes("@")) {
    console.log("Invalid Email Format");
  } else {
    console.log("Valid Email");
  }
}

validInput("test@example.com");

try {
  const data = JSON.parse("{role:'CEO',weeklyHours:1000}");
} catch (error) {
  console.log("Week is Over");
}

function stringOnlyParser(input) {
  if (input === null || input === undefined || input === "") {
    console.log("Input Must be String");
  } else {
    console.log("Valid Input:", input);
  }
}
stringOnlyParser("");

try {
  console.log("Deleting Account");
  throw new Error("Server error");
} catch (error) {
  console.log("Failed to deleted Account");
} finally {
  console.log("Account deleteion Finished");
}

//We use async / await to handle asynchronous operations (like fetching data from a server)
//Callback Hell happens when you write many nested callback functions, especially in asynchronous code like reading files, fetching data, etc

async function fetchComments() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/comments");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchComments();

async function fetchUserPosts() {
  try {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/posts?userId=1"
    );
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchUserPosts();

async function fetchUserById() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/2");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchUserById();

function fetchData(callback) {
  setTimeout(() => {
    console.log("Step 1");
    setTimeout(() => {
      console.log("Step 2");
      setTimeout(() => {
        console.log("Step 3");
        callback();
      }, 1000);
    }, 1000);
  }, 1000);
}

fetchData(() => {
  console.log("All done!");
});

async function fetchWithFinally() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/comments");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  } finally {
    console.log("Request complete!");
  }
}

fetchWithFinally();
