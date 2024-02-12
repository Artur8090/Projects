let addition = "+";
let subtract = "-"
let multiply = "*"
let divide = "/"
let percentage = "%";
let equal = "=";

let opp = 0;
let opperator;
let eq1 = 0;
let eq2 = 0;
let equation = [];
let strEquation;
function add(x){
    equation.push(x);
        if(equation[0] == "+" || equation[0] == "*" || equation[0] == "/" || equation[0] == "%"){
            return document.querySelector(".answer").innerText = "Error";
        } 
    strEquation = equation.join("")
    document.querySelector(".answer").innerText = strEquation;
}


function equate(){
    for(let i = 0; i != equation.length; i++){
        if(typeof equation[i] === "str" && typeof equation[i + 1] === "str"){
            return document.querySelector(".answer").innerText = "Error";
        } else {
            strEquation = eval(strEquation);
            document.querySelector(".answer").innerText = strEquation;
        }
    } 
}
