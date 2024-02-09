function calculator(x,y,opperator){
    if(opperator == "+"){
        return x + y;
    } else if(opperator == "-"){
        return x - y;
    } else if(opperator == "*"){
        return x * y;
    } else if(opperator == "/"){
        return x / y;
    } else if(opperator == "%"){
        return (x / y) * 100 + "%"
    }
}
console.log(calculator(10,20,"+"))
console.log(calculator(10,20,"-"))
console.log(calculator(10,20,"*"))
console.log(calculator(10,20,"/"))
console.log(calculator(10,20,"%"))