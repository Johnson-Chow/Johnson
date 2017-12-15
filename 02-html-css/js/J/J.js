var numberTest = function(number){

    if (number < 0 || number == 0 || number == !isNaN) {
       return 'string';
    }
    else if(number>=1000000){
       return number;
    }
    else {
        return numberTest(number * 10)
    }
}
console.log(numberTest(200))
