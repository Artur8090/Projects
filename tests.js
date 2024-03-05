
function assert(condition, msg){
    if(!condition){
        throw new Error(msg)
    }
    console.log(msg + ' passed')
}
/*
function tests() {
    console.log('run tests')

    assert(doCalculation(["2","*","2","/","2","+","4","+","12","*","7"])==90,"2*2/2+4+12*7=90")
    assert(doCalculation(["2","+","2"])==4, "2+2=4")
    assert(doCalculation(["2","*","2"])==4, "2*2=4")
    assert(doCalculation(["2","+","2", "-","3"])==1, "2+2-3=1")
    assert(doCalculation(["2","+","2", "*","3"])==8, "2+2*3=8")
    assert(doCalculation(["2","+","2", "*","3","+","1"])==9, "2+2*3+1=9")
    assert(doCalculation(["2","+","1","+","2", "*","3"])==9, "2+1+2*3=9")
    assert(doCalculation(["2","+","2", "/","2","+","1"])==4, "2+2/2+1=4")
    assert(doCalculation(["2","+","2", "/","2","*","2","+","1"])==5, "2+2/2*2+1=5")
    assert(doCalculation(["2","+","2", "/","2","*","2","-","1"])==3, "2+2/2*2-1=3")
    assert(doCalculation(["2","-","1","+","2", "/","2","*","2","-","1"])==2, "2-1+2/2*2-1=2") 
    assert(doCalculation(["(","2","+","2",")"])==4, "(2+2)=4")
    assert(doCalculation(["(","2","+","2",")","+","1"])==5, "(2+2)+1=5")
    assert(doCalculation(["(","(","2","+","2",")","+","1",")","+","1"])==5, "(2+2)=4")

}
tests();
*/


function testBracket(bracketPos,answerPos){
    for(let i = 0; i < bracketPos.length; i++){
        assert(bracketPos[i] == answerPos[i],'[' + bracketPos + ']' + '==' + '[' + answerPos + ']')
    }

}
testBracket(findBrackets(['1','+','(','2','+','2',')','+','1']),[2,6]);
testBracket(findBrackets(['(','2','+','2','(','1','+','1',')',')']),[0,9])
testBracket(findBrackets(['(','2','+','2',')','+','(','1','+','1',')']),[0,4])