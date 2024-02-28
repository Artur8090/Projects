let equation = [];
let number = "";

function pressButton(c) {
    
    if (isOp(c)) {
        if (number.length > 0) {
            equation.push(number)
        }
        if (equation.length > 3) {
            if (!isOp(equation[1])) {
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

    let opperators = eq.filter( (s) => (isHiPriorityOperator(s)) )
    opperators = opperators.concat(eq.filter(s => (isLowPriorityOperator(s))) )
    console.log('opearators', opperators)

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
    if (isLowPriorityOperator(c) || isHiPriorityOperator(c) || c == "=" ) {
        return true;
    }
    return false
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

