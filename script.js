let equation = [];
let number = "";
let bracketCount = 1;
function pressButton(c) {
    if(c == 'bracket'){
        c = brackets();
    }
    if (isOp(c)) {

        if (number.length > 0) {
            equation.push(number)
        }
        if (equation.length > 3) {
            if (!isOp(equation[1])  && !isOp(equation[0])) {
                equation[0] += equation[1];
                equation.splice(1, 1);
            }

        }
        if (c != '=') {
            equation.push(c);
        } else{
            equate();
        }
        console.log('eq', equation)
        number = ""
    } else {
        number += c;
    }

    console.log('number:', number)
    showAnswer(convertEqToString(equation, number))
}

function convertEqToString(equation, currNumber) {
    return equation.join("") + currNumber
}


function equate() {
    let answer = doCalculation(equation)

    showAnswer(equation[0]);
    equation = []
    answer += '';
    equation.push(answer)
    if (answer == "0") {

        equation.shift();
    }

}

function doCalculation(eq){
    console.log('cal equation', eq)
    let para = eq.filter((s) => (isHighestPriorityOperator(s)))
    let opperators = eq.filter( (s) => (isHiPriorityOperator(s)) )
    opperators = opperators.concat(eq.filter(s => (isLowPriorityOperator(s))) )
    console.log('opperators', opperators)
    console.log('parantheses', para)


while(eq.length >= 3){
    if(para.length > 0){
        for(let i = 0; i<para.length; i++){
            let start = para.indexOf(para[i]);
            let end = para.indexOf(para[i+1])
            console.log("start:end",start,end)

            for(let j = start; j<end; j++){

                let k = eq.indexOf(opperators[j])
                answer = calc(eq[k-1],eq[k+1],eq[k]);
                answer+='';
                eq.splice(k-1,3,answer);
                if(eq.indexOf('(') == (eq.indexOf(')') -2)){
                    eq.splice(eq.indexOf('('),3,answer);
                }
            }
            para.splice(0,2)
        }
    } else{
        for (let i = 0; i < opperators.length; i++) {
            let j = eq.indexOf(opperators[i]);
            console.log('index \''+opperators[i]+"'=",j);
            answer = calc(eq[j - 1], eq[j + 1], eq[j]);
            console.log('answer of '+eq[j - 1] + eq[j] + eq[j + 1]+"=",answer);
            answer += '';
            eq.splice(j-1, 3,answer)
            console.log('eq',eq)
        }
        console.log('answer', eq[0])

    }
    }
            return eq[0]
}





function calc(num1, num2, opp) {
    let number1 = parseInt(num1);
    let number2 = parseInt(num2);

    if (opp == "+") {
        return number1 + number2;
    } else if (opp == "-") {
        return number1 - number2;
    } else if (opp == "*") {
        return number1 * number2;
    } else if (opp == "/") {
        return number1 / number2;
    } else if (opp == "%") {
        return (number1 / 100) * number2;
    } else if (opp == "^") {
        return number1 ** number2;
    }
}


function showAnswer(answer) {
    document.querySelector(".answer").innerText = answer;
}

function isOp(c) {
    if (isLowPriorityOperator(c) || isHiPriorityOperator(c) || isHighestPriorityOperator(c) || c == "=" ) {
        return true;
    }
    return false
}
function isHighestPriorityOperator(c){
    if(c == "(" || c== ")"){
        return true;
    }
    return false;
}
function isHiPriorityOperator(c){
    if (c == "*" || c == "/" || c == "%" ||c == "^") {
        return true;
    }
    return false
}
function isLowPriorityOperator(c){
    if(c == "+" || c == "-"){
        return true
    }
    return false
}

function cancel() {
    number = "";
    equation = [];
    opperators = [];
    showAnswer('Enter Value')
}

function brackets(){
    bracketCount++;
    if(bracketCount % 2 == 0){
        return "(";

    } else if(bracketCount % 2 != 0){
        return ")"
    }
}

function findBrackets(equation){
    let findBrackets = [];
    for(let i = 0; i < equation.length; i++){
        if(equation[i] == '(' || equation[i] == ')'){
            findBrackets.push(equation[i]);
        }
    }
    sortBrackets(findBrackets);
}

function sortBrackets(bracketArr){
    let bracketLocation = [];
    console.log(bracketArr)
    while(bracketArr > 0){
        for(let i = 0; i < bracketArr.length; i++){
            if(bracketArr[i] == '(' && bracketArr[i+1] == ')'){

                bracketLocation.push(i)
                bracketLocation.push(i+1)
                bracketArr.splice(0,2)
            }  else if(bracketArr[i] == ('(') && bracketArr[i] == ('(')){
                console.log(bracketLocation)
                console.log(bracketArr)
                let g = i;
                while(g != ')'){
                  g++;  
                }

                bracketLocation.push(g)
                bracketLocation.push(g-1)

            }
        }
    }
    return bracketLocation; 
}

console.log(findBrackets(['(','2','+','2',')','+','(','2','+','2',')']))
console.log(findBrackets(['(','2','+','2', '+','(','2','+','2',')',')','+','(','2','+','2',')']))