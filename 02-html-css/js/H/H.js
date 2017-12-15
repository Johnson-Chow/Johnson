var calculator = function(operation,value1,value2){
    if (operation=='+'){
        return value1+value2;
    }
    else if(operation=='-'){
        return value1-value2;
    }
    else if(operation=='*'){
        return value1 * value2;
    }
    else if(operation=='/'){
        return value1/value2;
    }
    else{
        return console.log('Please give a correct operation character!');
    }

}

console.log(calculator('-', 7, 3));
console.log(calculator('*', 5, 5));
console.log(calculator('/', 9, 3));
console.log(calculator('+', 5, 9));

//Bonus 

function area(height, width) {
   return height * width;
}
console.log(area(5,6));