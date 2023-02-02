var num1 = +prompt("enter num1");
var num2 = +prompt("enter num2");
var op = prompt("enter operation */+-");

var result = 0;

if (op === "+") {
    result = num1 + num2;
}

if (op === "-") {
    result = num1 - num2;
}

if (op === "*") {
    result = num1 * num2;
}

if (op === "/") {
    result = num1 / num2;
}

if (!result) {
    alert("You should enter only numbers and operators");
} else {
    alert(`Your result: ${result}`);
}