function tests() {
    console.log('run tests')
    assert(doCalculation(["2", "*" ,"2", "/" , "2","+" ,"4" , "+", "12", "*", "7"])==90,"2*2/2+4+12*7=90")


}
tests();