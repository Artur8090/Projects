
function assert(condition, msg){
    let div = document.querySelector('#tests')
    let addDiv = document.createElement('div');
    div.appendChild(addDiv)
    if(!condition){
        console.error(msg)
        addDiv.className = 'test-failed'
        addDiv.innerHTML += msg + 'failed' 

        return;
    }
    console.log(msg)
    addDiv.className = 'test-success'
    addDiv.innerHTML += msg + ' passed'  

}

function addTestTitle(title){
    let div = document.querySelector('#tests')
    let addDiv = document.createElement('div');
    div.appendChild(addDiv)

    console.log('adding title',title)
    addDiv.className = 'test-title'
    addDiv.innerHTML += title  
}

function tests() {
    console.log('run tests')
    testIsArrayEqual();
    testBrackets();
    testDoCalculationWithBrackets();
    testDoCalculation();
    
}

tests();
function testBrackets(){
    addTestTitle('Bracket location')
    assert(isArrayEqual(findBrackets('1+(2+2)+1'.split("")),[2,6]),'bracket location: 1+(2+2)+1=[2,6]');
    assert(isArrayEqual(findBrackets(['(','2','+','2','(','1','+','1',')',')']),[0,9]),'(2+2(1+1))=[0,9]');
    assert(isArrayEqual(findBrackets(['(','2','+','2',')','+','(','1','+','1',')']),[0,4]),'(2+2)+(1+1)=[0,4]');

}

function testDoCalculationWithBrackets(){
    addTestTitle('DoCalculation with brackets');
    assert(doCalculation(["(","2","+","2",")"])==4, "(2+2)=4")
    assert(doCalculation(["(","2","+","2",")","+","1"])==5, "(2+2)+1=5")
    assert(doCalculation(["(","(","2","+","2",")","+","1",")","+","1"])==6, "((2+2)+1)+1=6")
}

function testDoCalculation(){
    addTestTitle('DoCalculation')
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
}


function isArrayEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}
function testIsArrayEqual(){
    addTestTitle('Is array equal')
    assert(isArrayEqual([1,2,3],[1,2,3]),'123 = 123')
    assert(!isArrayEqual([1,2,3],[1,2]),'123 != 32')
    assert(!isArrayEqual([1,2,3],[3,2,1]),'123 != 321')
    assert(!isArrayEqual([1,2,3],[1,3]),'123 != 13')
}
