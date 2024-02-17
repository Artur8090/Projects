let addition = "+";
let subtract = "-"
let multiply = "*"
let divide = "/"
let percentage = "%";
let equal = "=";
let num1 = 0;
let num2 = 0;
let equation = [];
let answer = 0;
function add(x){

    equation.push(x);
        if(equation[0] == "+" || equation[0] == "*" || equation[0] == "/" || equation[0] == "%"){
            return document.querySelector(".answer").innerText = "Error";
        } 
        strEquation = equation.join("");
    document.querySelector(".answer").innerText = strEquation;

    }
 

function equate(){
if(equation.includes("+")){
    equation = equation.join("").split("+");
    num1 += parseInt(equation[0]);
    num2 += parseInt(equation[1]);
    answer = num1 + num2;
} else if(equation.includes("-")){
    equation = equation.join("").split("-");
    num1 += parseInt(equation[0]);
    num2 += parseInt(equation[1]);
    answer = num1 - num2;
} else if(equation.includes("*")){
    equation = equation.join("").split("*");
    num1 += parseInt(equation[0]);
    num2 += parseInt(equation[1]);
    answer = num1 * num2;
} else if(equation.includes("/")){
    equation = equation.join("").split("/");
    num1 += parseInt(equation[0]);
    num2 += parseInt(equation[1]);
    answer = num1 / num2;
} else if(equation.includes("%")){
    equation = equation.join("").split("%");
    num1 += parseInt(equation[0]);
    num2 += parseInt(equation[1]);
    answer = (num1/100)*num2;
}

equation = [];
 num1 = 0;
 num2 = 0;
 equation.push(answer)
 console.log(answer)
 document.querySelector(".answer").innerText = answer;
}