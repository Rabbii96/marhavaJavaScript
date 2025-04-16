//Shopping Cart project


const products = [
    { id: 1, name: "Laptop", price: 50000, stock: 5 },
    { id: 2, name: "Mouse", price: 500, stock: 10 },
    { id: 3, name: "Keyboard", price: 1500, stock: 7 },
];


let cart = [];


function addToCart(id, quantity) {
    const product = products.find((p) => p.id === id);

    if (!product) {
        return "Product not found.";
    }

    if (product.stock < quantity) {
        return `Not enough stock for ${product.name}. Available: ${product.stock}`;
    }


    product.stock -= quantity;

    const cartItem = {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: quantity,
    };

    cart.push(cartItem);

    return `${product.name} added to cart. Quantity: ${quantity}`;
}


function viewCart() {
    if (cart.length === 0) {
        console.log("Cart is empty.");
        return;
    }

    console.log("Your Cart:");
    cart.forEach((item, index) => {
        console.log(
            `${index + 1}. ${item.name} - Quantity: ${item.quantity}, Price per item: ৳${item.price}`
        );
    });
}


function placeOrder() {
    if (cart.length === 0) {
        return "Your cart is empty.";
    }

    let totalPrice = 0;

    cart.forEach((item) => {
        totalPrice += item.price * item.quantity;
    });

    const orderSummary = {
        totalPrice: totalPrice,
    };

    // Optionally clear the cart after placing order
    cart = [];

    return orderSummary;
}


console.log(addToCart(1, 2));   // Laptop added to cart. Quantity: 2
console.log(addToCart(2, 1));   // Mouse added to cart. Quantity: 1
viewCart();                     // Shows cart contents
console.log(placeOrder());      // Returns totalPrice
viewCart();                     // Cart is empty now


//Pandar Anda
// Sample Restaurants with Menu and Reviews
const restaurants = [
    {
        name: "Spicy Kitchen",
        menu: {
            "Burger": 250,
            "Pizza": 500,
            "Pasta": 300,
        },
        reviews: [],
    },
    {
        name: "Sweet Treats",
        menu: {
            "Cake": 350,
            "Donut": 120,
            "Ice Cream": 200,
        },
        reviews: [],
    },
];

// Sample discount codes
const discountCodes = {
    "WELCOME10": 10, // 10% discount
    "SAVE50": 50,    // Flat 50 taka discount
};

// Orders list
let orders = [];
let orderIdCounter = 1000;

// Task-4: Get Food Price Function
function getFoodPrice(restaurantName, foodItem) {
    const restaurant = restaurants.find(r => r.name === restaurantName);
    if (!restaurant) return "Restaurant not found.";

    const price = restaurant.menu[foodItem];
    if (!price) return "Food Item not found.";

    return price;
}

// Task-5: Place Order Function (Revised)
function placeOrder(customerName, restaurantName, foodItem, discountCode) {
    let price = getFoodPrice(restaurantName, foodItem);

    if (price === "Restaurant not found." || price === "Food Item not found.") {
        return price;
    }

    // Apply discount if valid
    if (discountCodes[discountCode]) {
        const discount = discountCodes[discountCode];
        if (discount < 100) {
            // Percentage discount
            price = price - (price * discount) / 100;
        } else {
            // Flat discount
            price = Math.max(0, price - discount);
        }
    }

    const order = {
        orderId: ++orderIdCounter,
        customerName,
        restaurantName,
        foodItem,
        orderPrice: price,
    };

    orders.push(order);

    return `Your Order is Successfully placed! Order Id: ${order.orderId}`;
}

// Task-6: Get Order Details Function
function getOrderDetails(orderId) {
    const order = orders.find(o => o.orderId === orderId);
    if (!order) return "Order not found.";

    return order;
}

// Task-7: Submit Review Function
function submitReview(restaurantName, rating) {
    const restaurant = restaurants.find(r => r.name === restaurantName);
    if (!restaurant) return "Restaurant not found.";

    if (rating < 0 || rating > 5) return "Rating should be between 0 and 5.";

    restaurant.reviews.push(rating);

    // Calculate average rating
    const sum = restaurant.reviews.reduce((acc, val) => acc + val, 0);
    const average = (sum / restaurant.reviews.length).toFixed(2);

    return `Thank you! New average rating for ${restaurant.name}: ${average}`;
}

// -----------------------------
// Sample Usage
// -----------------------------
console.log(getFoodPrice("Spicy Kitchen", "Burger"));         // 250
console.log(getFoodPrice("Fake Place", "Burger"));            // Restaurant not found.
console.log(getFoodPrice("Spicy Kitchen", "Hotdog"));         // Food Item not found.

console.log(placeOrder("Fazle", "Spicy Kitchen", "Pizza", "WELCOME10")); // Order placed
console.log(placeOrder("Arafat", "Sweet Treats", "Cake", "SAVE50"));     // Order placed
console.log(placeOrder("Mira", "Sweet Treats", "Biryani", "SAVE50"));    // Food Item not found.

console.log(getOrderDetails(1001)); // Fazle's order
console.log(getOrderDetails(9999)); // Order not found.

console.log(submitReview("Spicy Kitchen", 5));   // Rating added
console.log(submitReview("Spicy Kitchen", 3));   // New average
console.log(submitReview("Unknown", 4));         // Restaurant not found



//MFS Practice
// ====== In-Memory Database ======
let userDatabase = {}; // Stores user data
let transactionHistory = []; // Stores transaction records

// ====== Task 8: Register User ======
function registerUser(username, pin) {
    if (userDatabase[username]) {
        return "Username already taken.";
    } else {
        userDatabase[username] = {
            username: username,
            pin: pin,
            balance: 0
        };
        return "User registered successfully.";
    }
}

// ====== Task 9: Login User ======
function loginUser(username, pin) {
    if (userDatabase[username]) {
        return userDatabase[username].pin === pin;
    } else {
        return false;
    }
}

// ====== Task 10: Add Money ======
function addMoney(username, amount) {
    if (userDatabase[username]) {
        userDatabase[username].balance += amount;
        return userDatabase[username].balance;
    } else {
        return "User not found.";
    }
}

// ====== Task 11: Check Balance ======
function checkBalance(username, pin) {
    if (loginUser(username, pin)) {
        return userDatabase[username].balance;
    } else {
        return "Invalid username or PIN.";
    }
}

// ====== Task 12: Send Money ======
function sendMoney(sender, receiver, amount) {
    if (!userDatabase[sender]) {
        return "Sender not found.";
    }
    if (!userDatabase[receiver]) {
        return "Receiver not found.";
    }
    if (userDatabase[sender].balance < amount) {
        return "Insufficient balance.";
    }

    userDatabase[sender].balance -= amount;
    userDatabase[receiver].balance += amount;

    transactionHistory.push({
        sender: sender,
        receiver: receiver,
        amount: amount,
        timestamp: new Date().toISOString()
    });

    return "Money sent successfully.";
}

// ====== Task 13: Example Usage ======
console.log(registerUser("joy", "1234"));             // ✅ "User registered successfully."
console.log(addMoney("joy", 15));                     // ✅ 15
console.log(sendMoney("joy", "rony", 15));            // ❌ "Receiver not found."

// Optional: Check Balance or Transactions
console.log(checkBalance("joy", "1234"));             // ✅ 15
console.log(transactionHistory);                      // ✅ Shows empty or transaction list



//Kaj kore kaji Faki dey paji

class TodoApp {
    constructor() {
        this.todos = [];
    }

    addTodo(name, time, category) {
        const id = this.todos.length + 1;
        const task = {
            id: id,
            name: name,
            time: time,
            category: category,
            completed: false
        };
        this.todos.push(task);
    }

    completeTodo(taskName) {
        const task = this.todos.find(todo => todo.name === taskName);
        if (task) {
            task.completed = true;
            return task;
        }
        return false;
    }

    removeTodo(taskName) {
        const index = this.todos.findIndex(todo => todo.name === taskName);
        if (index !== -1) {
            this.todos.splice(index, 1);
            return true;
        }
        return false;
    }

    displayTodoList(category = null) {
        let filteredTodos = this.todos;
        if (category) {
            filteredTodos = this.todos.filter(todo => todo.category === category);
        }

        console.log("=== Todo List ===");
        filteredTodos.forEach(todo => {
            console.log(`ID: ${todo.id}, Name: ${todo.name}, Category: ${todo.category}, Time: ${todo.time}, Completed: ${todo.completed}`);
        });
    }

    totalWorked() {
        return this.todos
            .filter(todo => todo.completed)
            .reduce((sum, todo) => sum + todo.time, 0);
    }

    timeNeeded() {
        return this.todos
            .filter(todo => !todo.completed)
            .reduce((sum, todo) => sum + todo.time, 0);
    }

    editTodo(taskName, updateObj) {
        const task = this.todos.find(todo => todo.name === taskName);
        if (!task) return false;

        let updated = false;

        if (updateObj.name) {
            task.name = updateObj.name;
            updated = true;
        }

        if (updateObj.category) {
            task.category = updateObj.category;
            updated = true;
        }

        if (updateObj.time !== undefined) {
            task.time = updateObj.time;
            updated = true;
        }

        return updated ? true : false;
    }
}

// -----------------------------
// ✅ উদাহরণ ব্যবহার (Demo)
// -----------------------------
const app = new TodoApp();

app.addTodo("Learn JS", 3, "Study");
app.addTodo("Watch Movie", 2, "Entertainment");
app.addTodo("Do Homework", 1.5, "Study");

app.completeTodo("Learn JS");

console.log("\n➡️ Display All Tasks:");
app.displayTodoList();

console.log("\n➡️ Display Only Study Tasks:");
app.displayTodoList("Study");

console.log("\n✅ Total Worked Hours:", app.totalWorked(), "hours");
console.log("🕓 Time Still Needed:", app.timeNeeded(), "hours");

console.log("\n✏️ Editing 'Watch Movie'...");
app.editTodo("Watch Movie", { name: "Watch Anime", time: 1 });

console.log("\n❌ Removing 'Do Homework'...");
app.removeTodo("Do Homework");

console.log("\n📋 Final Task List:");
app.displayTodoList();
