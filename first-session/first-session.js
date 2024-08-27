let array1 = [1, 2, 3, 4, 5];

let array2 = new Array(1, 2, 3, 4, 5);

let mySet = new Set([1, 2, 3, 4, 5]);

let myObject = {
    name: "Ahmed",
    age: 21,
    profession: "Student"
};


function funcExample() {
    if (true) {
        var x = 10; // Accessible outside the block
        let y = 20; // Not accessible outside the block
    }
    console.log(x); // 10
    console.log(y); // error
}

funcExample()

var x = 1;
var x = 2; // No error

let y = 1;
let y = 2; // SyntaxError: because it had been decleared 
