
 // My Git Practice Project

// 1. Display welcome message
console.log("Welcome to my Git Practice Project!");

// 2. Variables
let userName = "Pasha";
let technology = "JavaScript";

console.log("User Name:", userName);
console.log("Learning:", technology);

// 3. Function to display a message
function showMessage() {
    alert("Hello " + userName + "! Welcome to Git Practice.");
}

// 4. Addition function
function addNumbers(a, b) {
    return a + b;
}

console.log("Sum:", addNumbers(10, 20));

// 5. Array example
let technologies = ["Git", "GitHub", "HTML", "JavaScript"];

technologies.forEach(function(item) {
    console.log("Technology:", item);
});

// 6. Conditional statement
let isLearning = true;

if (isLearning) {
    console.log("I am learning Git and GitHub!");
} else {
    console.log("Keep practicing!");
}
