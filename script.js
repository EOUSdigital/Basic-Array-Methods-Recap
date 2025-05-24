//TODO Module 3 - Lesson 03.02: Basic Arrays Methods - Challenges

//TODO 🧩 Challenge: Smart Product Dashboard

//* 🎯 Scenario:
// We are managing a product list for an online store.
//  Each product has:
//  • name (string)
//  • price (number)
//  • inStock (boolean)

//  Here is the product list:

const products = [
    { name: 'Laptop', price: 1200, inStock: true },
    { name: 'Phone', price: 800, inStock: false },
    { name: 'Tablet', price: 600, inStock: true },
    { name: 'Monitor', price: 300, inStock: true },
    { name: 'Headphones', price: 150, inStock: false },
];

//* ✅ Tasks:
//  1. Use .filter() to get only products that are in stock.
//  2. Use .map() to create a list of product names in this format:
//  - '💻 Laptop - $1200'
//  3. Use .find() to locate the first product that costs less than $500.
//  4. Log:
//  • The list of available products.
//  • The first budget-friendly product.
//  • If no product is under $500, log "No budget products available."

//! Solution

//* Step 1.

const availableStock = products.filter(product => product.inStock === true);

//* Step 2.

const newProductName = availableStock.map(product => `${product.name} - $${product.price}`);

//* Step 3.

const budgetProduct = products.find(product => product.price < 500);

//* Step 4.

console.log('🛒 Available Products: ');
console.log(availableStock);

console.log(newProductName);

if (budgetProduct) {
    console.log('🎯 First Budget Product: ' + budgetProduct.name);
} else {
    console.log('🎯 First Budget Product: No budget products available.');
};


//TODO 🧩 Challenge: Premium Product Selector

//* 🎯 Scenario:
//  You are building a dashboard for a luxury store.
//  From a product list, you need to:
//  1. Filter products that:
//  • Are in stock
//  • Cost over $500
//  2. Map those products into this format:
//  - "💻 Premium: Laptop ($1200)"
//  3. If no premium products exist, log:
//  - "❌ No premium products available."

//* ✅ Data Example:

const products2 = [
    { name: 'Laptop', price: 1200, inStock: true },
    { name: 'Phone', price: 800, inStock: false },
    { name: 'Tablet', price: 600, inStock: true },
    { name: 'Monitor', price: 300, inStock: true },
    { name: 'Headphones', price: 150, inStock: false }
];

//? 🧠 Task:
//  1. Use method chaining to:
//  • .filter() in-stock & price > 500.
//  • .map() into the "🔥 Premium: Name ($Price)" format.
//  2. Log the result.
//  3. If the result array is empty, log the fallback message.

//! Solution

const result = products2.filter(product => product.inStock && product.price > 500).map(product => `🔥 Premium: ${product.name} ($${product.price})`);
if (result.length > 0) {
    console.log(result);
} else {
    console.log('No premium products available.');
};


//TODO 🧩 Chaining with .find() Challenge: Featured Product Picker

//* 🎯 Scenario:
//  We are building a featured section on a luxury website.
//  From the full product list, you need to:
//  1. Filter for products that:
//  • Are in stock
//  • Cost more than $500
//  2. Then, find the first product from a specific brand.
//  3. If found, log:
//  - 🏆 Featured: [Name] from [Brand] ($[Price])
//  4. If not found, log:
//  - ❌ No featured product available from [Brand]

//* ✅ Sample Data:

const products3 = [
    { name: 'Laptop', price: 1200, inStock: true, brand: 'NovaTech' },
    { name: 'Phone', price: 800, inStock: false, brand: 'TechEdge' },
    { name: 'Tablet', price: 600, inStock: true, brand: 'NovaTech' },
    { name: 'Monitor', price: 300, inStock: true, brand: 'DisplayWorks' },
    { name: 'Headphones', price: 150, inStock: false, brand: 'AudioMax' },
];

//? 🧠 Task:
//  1. Chain:
//  • .filter() → in stock & over $500
//  • .find() → brand === 'NovaTech'
//  2. Log the featured product or fallback message.

//! Solution

const stockProducts = products3
    .filter(product => product.inStock && product.price > 500)
    .find(product => product.brand === 'NovaTech');

if (stockProducts) {
    console.log(`🏆 Featured: ${stockProducts.name} from ${stockProducts.brand} ($${stockProducts.price})`);
} else {
    console.log(`❌ No featured product available from NovaTech`);
};



//TODO 🧩 Dynamic Search System Challenge: Brand + Price Search

//* 🎯 Scenario:
// We are building a live search system for an online store admin panel.
//  Admins can enter:
//  A brand name (e.g., 'NovaTech')
//  A minimum price (e.g., 500)
//  The system should:
//  1. Filter all products that:
//  • Are in stock
//  • Have a price greater than or equal to the input
//  2. Find the first product that matches the brand input
//  3. Map the entire filtered list to this format:
//  - "Laptop ($1200) from NovaTech"
//  4. Log:
//  • 🟢 Matched product
//  • 🔄 All available options in case of fallback
//  • ❌ If nothing matches at all

//* ✅ Sample Data:

const products4 = [
    { name: 'Laptop', price: 1200, inStock: true, brand: 'NovaTech' },
    { name: 'Phone', price: 800, inStock: false, brand: 'TechEdge' },
    { name: 'Tablet', price: 600, inStock: true, brand: 'NovaTech' },
    { name: 'Monitor', price: 300, inStock: true, brand: 'DisplayWorks' },
    { name: 'Headphones', price: 150, inStock: false, brand: 'AudioMax' },
];

//? 🧠 Task:
//  1. Ask the user for:
//  • searchBrand = 'NovaTech'
//  • minPrice = 500
//  2. Chain .filter() ➔ .find() ➔ .map() for display
//  3. Log:
//  • The matching product if found
//  • Fallback message with filtered list if no match
//  • Fallback message if the list is empty

//! Solution 1.

const searchBrand = 'NovaTech';
const minimumPrice = 500;

//* Step 1.

const filteredProducts = products4.filter(product => product.inStock && product.price >= minimumPrice);

//* Step 2.

const featuredProduct = filteredProducts.find(product => product.brand === searchBrand);

//* Step 3.

const displayList = filteredProducts.map(product => `${product.name} ($${product.price}) from ${product.brand}`);

//* Step 4.

if (featuredProduct) {
    console.log(`🏆 Featured: ${featuredProduct.name} ($${featuredProduct.price}) from ${featuredProduct.brand}`);
} else if (displayList.length > 0) {
    console.log(`🔄 No featured product from ${searchBrand}, but here are other options:`);
    console.log(displayList);
} else {
    console.log(`❌ No products available matching your criteria.`);
};

//! Solution 2.

// Filter, find, and map products
const matchingProducts = products4.filter(
    product => product.inStock && product.price >= minimumPrice && product.brand === searchBrand
); 

if (matchingProducts.length > 0) {
    // Mapping the results if found
    const stockProducts2 = matchingProducts.map(product => `${product.name} ($${product.price}) from ${product.brand}`);
    console.log(stockProducts2);
} else if (products4.filter(product => product.price >= minimumPrice).length > 0) {
    // If there are other featured products available but not matching the brand
    console.log(`❌ No featured product available from ${searchBrand}`);
} else {
    // If no products at all in the price range
    console.log(`❌ No products available at or above $${minimumPrice}`);
}


//TODO 🧩 Recap Challenge

// We will create a simple chaining guide that help at any time until this becomes second nature.

//* 🧩 Exercise:

// ✅ Sample Dataset:

const users = [
    { name: 'Alice', age: 25, active: true },
    { name: 'Bob', age: 19, active: false },
    { name: 'Charlie', age: 30, active: true },
    { name: 'Diana', age: 22, active: true },
];

//? 🧠 Task:

//  1. Filter users who are active and over 21.
//  2. Map their names into this format:
//  - "✔️ Alice (25)"
//  3. Log the final array.

//! Solution

//* Step 1.

const activeUsers = users.filter(user => user.age > 21 && user.active);
console.log(activeUsers);

//* Step 2.

const formattedUsers = users
    .filter(user => user.age > 21 && user.active)
    .map(user => `✔️ ${user.name} (${user.age})`);
console.log(formattedUsers);

//* 🚨 Key Lesson:
//  - After .filter(), we still have an array.
//  - We can chain .map() immediately to transform that array.
//  - No need to console.log() after .filter() if we are continuing the chain.

//* 🎯 Final Pattern:
//  array
//      .filter(condition)
//      .map(transformation)
//! This is one of the most common chaining patterns in JavaScript!


//TODO 🚀 Mastering .filter(), .map(), .find() Chaining

//* ⚡ Exercise 1: Active Adults

const users2 = [
    { name: 'Anna', age: 17 },
    { name: 'Ben', age: 22 },
    { name: 'Cara', age: 19 },
    { name: 'Dan', age: 25 },
];

//? ▶️ Task:
//  Use chaining to:
//  1. Filter users aged 18+
//  2. Map to just their names: ['Ben', 'Cara', 'Dan']

//! Solution

const usersOver18 = users2
    .filter(user => user.age >= 18)
    .map(user => `${user.name}`);
console.log(usersOver18);

//* ⚡ Exercise 2: Product Discounts

const products5 = [
    { name: 'Phone', price: 800 },
    { name: 'Tablet', price: 400 },
    { name: 'Laptop', price: 1500 },
];

//? ▶️ Task:
//  1. Filter products under $1000.
//  2. Map to format: "Tablet - $400"

//! Solution

const productsUnder = products5
    .filter(product => product.price < 1000)
    .map(product => `${product.name} - $${product.price}`);
console.log(productsUnder);

//* ⚡ Exercise 3: Find a VIP

const guests = [
    { name: 'John', vip: false },
    { name: 'Maria', vip: true },
    { name: 'Steve', vip: false },
];

//? ▶️ Task:
//  Use .find() to get the first VIP guest and log their name.

//! Solution

const guestVip = guests.find(guest => guest.vip);
if (guestVip) {
    console.log(`🎖️ VIP Guest: ${guestVip.name}`);
} else {
    console.log('❌ No VIP guests found.');
};

//* ⚡ Exercise 4:

const scores = [45, 82, 77, 90, 60];

//? ▶️ Task:
//  1. Filter scores ≥ 70
//  2. Map to format: "Pass: 77"

//! Solution

const filterScores = scores.filter(score => score >= 70).map(score => `Pass: ${score}`);
console.log(filterScores);

//* ⚡ Exercise 5:

const books = [
    { title: 'JS Basics', pages: 120 },
    { title: 'Advanced JS', pages: 300 },
    { title: 'CSS Guide', pages: 150 },
];

//? ▶️ Task:
//  1. Find the first book with over 200 pages
//  2. Log its title.

//! Solution

const firstBook = books.find(book => book.pages > 200);
if (firstBook) {
    console.log(firstBook.title);
} else {
    console.log('No book found over 200 pages.');
};

//* ⚡ Exercise 6:

const employees = [
    { name: 'Alice', department: 'HR' },
    { name: 'Bob', department: 'IT' },
    { name: 'Cara', department: 'IT' },
];

//? ▶️ Task:
//  1. Filter for the IT department
//  2. Map to names: ['Bob', 'Cara']

//! Solution

const departmentIT = employees
    .filter(employee => employee.department === 'IT')
    .map(employee => `${employee.name}`);
console.log(departmentIT);

//* ⚡ Exercise 7:

const movies = [
    { title: 'Inception', rating: 8.8 },
    { title: 'Interstellar', rating: 8.6 },
    { title: 'Cats', rating: 2.7 },
];

//? ▶️ Task:
//  1. Filter movies with rating ≥ 8
//  2. Map to format: "Inception (8.8)"

//! Solution

const rating8 = movies
    .filter(movie => movie.rating >= 8)
    .map(movie => `${movie.title} (${movie.rating})`);
console.log(rating8);

//* ⚡ Exercise 8:

const orders = [120, 75, 300, 450, 90];

//? ▶️ Task:
//  1. Filter orders over 100
//  2. Map to format: "Order: $300"

//! Solution

const ordersOver = orders
    .filter(order => order > 100)
    .map(order => `Order: $${order}`);
console.log(ordersOver);

//* ⚡ Exercise 9:

const animals = [
    { species: 'Dog', age: 5 },
    { species: 'Cat', age: 2 },
    { species: 'Parrot', age: 4 },
];

//? ▶️ Task:
//  1. Find the first animal older than 3 years
//  2. Log its species.

//! Solution

const olderAnimal = animals.find(animal => animal.age > 3);
if (olderAnimal) {
    console.log(olderAnimal.species);
} else {
    console.log('No animal found age 3 or over.');
}

//* ⚡ Exercise 10:

const tasks = [
    { task: 'Clean', done: true },
    { task: 'Shop', done: false },
    { task: 'Cook', done: false },
];

//? ▶️ Task:
//  1. Filter incomplete tasks
//  2. Map to format: "Pending: Shop"

//! Solution

const incompleteTasks = tasks
    .filter(task => task.done === false)
    .map(task => `Pending: ${task.task}`);
console.log(incompleteTasks);


//TODO 🚀 Project Series (Chaining Mastery in Action)

//? 1️⃣ Task Dashboard
//  Manage tasks dynamically — filter pending tasks, map summaries, find urgent items.

//? 2️⃣ Product Filter System
//  Simulate an e-commerce backend — dynamic price & stock filtering, format product lists, feature premium items.

//? 3️⃣ User Management Tool
//  Handle user data — active/inactive users, role-based filtering, search for admins, and map user reports.

//? 💡 How We'll Approach Each Project:
//  Step 1: Define a realistic dataset.
//  Step 2: List practical features (just like client requirements).
//  Step 3: Use chaining + clean logic to implement.
//  Step 4: Review & optimize for real-world readiness.


//TODO 🎯 Project 1: Task Dashboard

//* 📝 Scenario:
//  We are building a dashboard for a team to manage their daily tasks.

//* Dataset Example:

const tasks2 = [
    { title: 'Submit report', done: false, priority: 'high' },
    { title: 'Email client', done: true, priority: 'low' },
    { title: 'Update website', done: false, priority: 'medium' },
    { title: 'Team meeting', done: false, priority: 'high' },
    { title: 'Backup files', done: false, priority: 'low' },
];

//* ✅ Features to Implement:
//  1. Filter tasks that are still pending.
//  2. Map them to format:
//  - "⚠️ High Priority: Submit report"
//  3. Find the first high-priority task.
//  4. Log:
//  • Pending tasks list.
//  • Highlight the first urgent task.
//  • If no high-priority task exists, show:
//      - "✅ No urgent tasks pending!"

//! Solution

const pendingTasks = tasks2
    .filter(task => !task.done)
    .map(task => `⚠️ ${task.priority.toUpperCase()} Priority: ${task.title}`);

console.log('📝 Pending Tasks:');
console.log(pendingTasks);

const highPriorityTask = tasks2.find(task => !task.done && task.priority === 'high');

if (highPriorityTask) {
    console.log(`🚨 Urgent Task: ${highPriorityTask.title}`);
} else {
    console.log("✅ No urgent tasks pending!");
};


//TODO 🛒 Project 2: Product Filter System

//* 🎯 Scenario:
//  We are building the backend logic for a product dashboard where users can:
//  1. Filter products by:
//  • In stock
//  • Price range
//  2. Highlight premium items (over $1000).
//  3. Find a specific product by brand.
//  4. Display:
//  • A clean list of available products.
//  • A special note if a premium product exists.
//  • A fallback if no products match the search.

const products6 = [
    { name: 'Laptop', price: 1500, inStock: true, brand: 'NovaTech' },
    { name: 'Phone', price: 900, inStock: false, brand: 'TechEdge' },
    { name: 'Tablet', price: 700, inStock: true, brand: 'NovaTech' },
    { name: 'Monitor', price: 300, inStock: true, brand: 'DisplayWorks' },
    { name: 'Headphones', price: 200, inStock: true, brand: 'AudioMax' },
];

//* ✅ Features to Implement:
//  1. Filter:
//  • Only products that are in stock.
//  • Price is greater than or equal to a dynamic minPrice (e.g., 300).
//  2. Map the filtered products to this format:
//  - "Laptop - $1500 (NovaTech)"
//  3. Find the first product from a dynamic searchBrand (e.g., 'NovaTech').
//  4. Log:
//  • The list of available products.
//  • If any product is premium (price > 1000), log:
//      - "🔥 Premium item available!"
//  • If no products match, log:
//      - "❌ No products available in this range."

//! Solution

const searchBrand2 = 'NovaTech';
const minPrice = 300;

const filteredProducts2 = products6
    .filter(product => product.inStock && product.price >= minPrice);

const displayProducts = filteredProducts2 
    .map(product => `${product.name} - $${product.price} (${product.brand})`);

const featuredProduct2 = filteredProducts2
    .find(product => product.brand === searchBrand2);

const hasPremium = filteredProducts2.some(product => product.price > 1000);

if (displayProducts.length > 0) {
    console.log('Available Products:', displayProducts);
    if (hasPremium) {
        console.log(`🔥 Premium item available!`);
    };

    if (featuredProduct2) {
        console.log(`🎯 First ${searchBrand2} product: ${featuredProduct2.name}`);
    };
} else {
    console.log(`❌ No products available in this range.`);
};


//TODO 👥 Project 3: User Management Tool

//* 🎯 Scenario:
//  We are building backend logic for an Admin Dashboard that manages user accounts.
//  Admins need to:
//  1. View active users.
//  2. Highlight users with the role of 'admin'.
//  3. Find the first user who needs password reset.
//  4. Generate a clean user report.

//* ✅ Dataset Example:

const users3 = [
    { username: 'alice', active: true, role: 'user', needsPasswordReset: false },
    { username: 'bob', active: false, role: 'admin', needsPasswordReset: true },
    { username: 'carol', active: true, role: 'admin', needsPasswordReset: false },
    { username: 'dave', active: true, role: 'user', needsPasswordReset: true },
    { username: 'eve', active: false, role: 'user', needsPasswordReset: false },
];

//* ✅ Features to Implement:
//  1. Filter users who are active.
//  2. Map them to this format:
//  - "carol (admin)"
//  3. Use .find() to locate the first user who needsPasswordReset.
//  4. Log:
//  • The list of active users.
//  • A message like "🔐 Password reset needed for: bob" if found.
//  • If no resets are needed, log "✅ All passwords up to date!".
//  5. Bonus: If there are no active users, log "⚠️ No active users found!".

//! Solution

const activeUsers2 = users3.filter(user => user.active);

const displayUsers = activeUsers2.map(user => `${user.username} - (${user.role})`);

const needsPasswordReset = users3.find(user => user.needsPasswordReset);

if (activeUsers2.length === 0) {
    console.log('⚠️ No active users found!');
} else {
    const displayUsers = activeUsers2.map(user => `${user.username} (${user.role})`);
    console.log('Active Users:');
    console.log(displayUsers);

    const needsPasswordReset = users3.find(user => user.needsPasswordReset);

    if (needsPasswordReset) {
        console.log(`🔐 Password reset needed for: ${needsPasswordReset.username}`);
    } else {
        console.log(`✅ All passwords up to date!`);
    };
};

