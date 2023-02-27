const display = document.getElementById("display");
var num1 = "";
var num2 = "";
var operand = "";

function press(num){
    if (display.innerText === "0") {
        display.innerText = "";
    }
    if (display.innerText.length == 10) {
        return;
    }
    num1 += num;
    display.innerText += num;
}

function setOP(op) {
    operand = op;
    num2 = num1;
    num1 = "";
    display.innerText = "0";
}

function clr() {
    num1 = "";
    num2 = "";
    operand = "";
    display.innerText = "0";
}

function calc() {
    var x = parseFloat(num2);
    var y = parseFloat(num1);
    var result = 0;
    if (operand == "/") {
        result = x / y; 
    }
    if (operand == "*") {
        result = x * y; 
    }
    if (operand == "-") {
        result = x - y; 
    }
    if (operand == "+") {
        result = x + y; 
    }
    display.innerText = result;
    num1 = result;
    operand = "";
}