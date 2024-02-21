let equation = [];
let number = "";

function pressButton(c) {

    if (isOp(c)) {
        if(number.length>0){
            equation.push(number)
        }

        if(c != '='){
            equation.push(c);
        }
        
        console.log('eq', equation)
        number=""
    } else {

            number+=c;
    
       

    }

    console.log('number:', number)
    showAnswer(convertEqToString(equation, number))
}

function convertEqToString(equation, currNumber){
    return equation.join("")+currNumber
}

function equate() {
    pressButton("=")
    let answer
    console.log('cal equation', equation.length)

    while(equation.length>=3){

         answer = calc(equation[0], equation[2], equation[1])
         equation[2] = ''+answer
         equation = equation.splice(2,equation.length)
         console.log('eq', equation)
         console.log('eq', equation)
    }

    showAnswer(equation[0]);
    equation=[]
    answer += '';
    equation.push(answer)
    if(answer == "0"){

        equation.shift();
    }
    
}

function calc(num1,num2,opp){
    let number1 = parseInt(num1);
    let number2 = parseInt(num2);

    if (opp == "+") {
        return  number1 + number2;
    } else if (opp == "-") {
        return  number1 - number2;
    } else if (opp == "*") { 
        return  number1 * number2;
    } else if (opp == "/") {
        return  number1 / number2;
    } else if (opp == "%") {
        return (number1 / 100) * number2;
    }
}


function showAnswer(answer){
    document.querySelector(".answer").innerText = answer;
}

function isOp(c){
    if (c == "+" || c == "-" || c == "*" || c == "/" || c == "%" || c == "=") {
        return true;
    }
    false
}
