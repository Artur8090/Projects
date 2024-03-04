
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


function testBracket(){
    assert(findBrackets(['1','+','(','2','+','2',')','+','1'])===([2, 6]),"1+(2+2)+1=[2,6]")
    assert(findBrackets(['(','2','+','2',')','+','(','2','+','3',')'])===([0, 4]),"(2+2)+(2+3)=[0,4]")
    assert(findBrackets(['(','2','+','5', '+','(','2','+','4',')',')','+','(','3','+','2',')'])===([0, 10]),"(2+2)+(2+2)=[0,4,6,10]")
}
testBracket();