// do {
//     //code block
// } while (condition)


let count = 1;
while (count > 5) {
    console.log(count);
    count++
}

let count1 = 1
do {
    console.log(count)
    count1++
} while (count > 5)


let count2 = 1
do {
    console.log(count2)
    count2++
} while (count2 <= 5)

let item = 3
do {
    console.log(item)
    item++
} while (item > 5)

let attemps = 12
do {
    console.log(attemps)
    attemps++
} while (attemps < 10)


let attempts = 9;

if (attempts < 10) {
    do {
        console.log(attempts)
        attempts++;
    } while (attempts < 10);
}


// switch (expression) {

// }

// switch (expression) {
//     case value1:
//         //code block
//         break;
//        deafault:
//        deafault block
// }


const mobile = {
    brand: "Apple"
};

switch (mobile.brand) {
    case "Apple":
        console.log("USA");
        break;
    case "Samsung":
        console.log("Korea");
        break;
    case "Xiaomi":
        console.log("China");
        break;
    default:
        console.log("Unknown source");
}


const browser = "Chrome";

switch (browser) {
    case "Chrome":
        console.log("Best for developers");
        break;
    case "Brave":
        console.log("Privacy focused");
        break;
    case "Safari":
        console.log("Apple users' choice");
        break;
    default:
        console.log("Unsupported browser");
}

const paymentMethod = "credit";

switch (paymentMethod) {
    case "cash":
        console.log("Pay with cash");
        break;
    case "credit":
        console.log("Pay with credit card");
        break;
    case "debit":
        console.log("Pay with debit card");
        break;
    default:
        console.log("Invalid payment method");
}



const membership = "gold";

if (membership === "free") {
    console.log("Access limited content");
} else if (membership === "silver") {
    console.log("Access most content");
} else if (membership === "gold") {
    console.log("Access premium content");
} else if (membership === "platinum") {
    console.log("Full access");
}

const orderStatus = "shipped";

if (orderStatus === "pending") {
    console.log("Your order is being processed");
} else if (orderStatus === "shipped") {
    console.log("Your order is on the way");
} else if (orderStatus === "delivered") {
    console.log("Your order has been delivered");
} else if (orderStatus === "cancelled") {
    console.log("Your order was cancelled");
}


const grade = "B";

if (grade === "A") {
    console.log("Excellent");
} else if (grade === "B") {
    console.log("Good");
} else if (grade === "C") {
    console.log("Average");
} else if (grade === "D") {
    console.log("Poor");
} else if (grade === "F") {
    console.log("Fail");
}

//The with statement lets  extend the scope chain for a block of code, so  access object properties without repeatedly typing the object name.
//eval() is a function that executes a string as JavaScript code.Security risks, performance issues, hard to debug




//IIFE stands for Immediately Invoked Function Expression. It's a JavaScript function that runs as soon as it is defined.Scope Management: IIFEs create a new scope, preventing variables declared within them from polluting the global scope. This helps avoid naming conflicts and keeps the code organized.

(function () {
    console.log("I am isolated from outer scope");
})();

(() => {
    console.log("borrow from arrow");
})();

(function (temperature) {
    const celsius = temperature - 273.15;
    console.log(celsius);
})(300);

//"use strict" is a directive that tells the JavaScript engine to run  code in a stricter, safer way. It helps  write cleaner, less error-prone code.