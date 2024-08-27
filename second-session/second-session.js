// Function to check if a number is even
function isEven(num) {
    return num % 2 === 0
}

// Function to print even numbers using a for loop
function printEvenNumbersForLoop(limit) {
    console.log("Even numbers using for loop:");
    for (let i = 1; i <= limit; i++) {
        if (isEven(i)) {
            console.log(i)
        }
    }
}

// Function to print even numbers using a while loop
function printEvenNumbersWhileLoop(limit) {
    console.log("Even numbers using while loop:")
    let i = 1
    while (i <= limit) {
        if (isEven(i)) {
            console.log(i)
        }
        i++
    }
}

// Call the functions
printEvenNumbersForLoop(10)
printEvenNumbersWhileLoop(10)
