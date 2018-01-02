

/*function transform(para){
    //split the string into different letter
    var number = para.split('');
    //convert the strng to number in an array
    var number = number.map(function(n){
    return parseInt(n, 10)
    })
   //sort the number
    var number=number.sort()
   //change the number to asic char using a loop
    for (i=0;i<number.length; i++){
    number[i] = String.fromCharCode(96+number[i])
    }
   //join the char
    var number = number.join('')
    // var number = number.toString()
    console.log(number)
}

transform('213')*/


//set number equal to alpahbet
//if new array = number[], return 

var a = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
var b = a.pop()
a.unshift(b);
var index = 

function transform(number) {
    var number = number.split('')
    var number = number.sort()
    var number =number.map(function(n){
        return parseInt(n)
    })

    number.forEach(function(number,index ) {
        console.log(number, index)
        
    });
    if (number==a){
        console.log(a)
    }

    }


transform('213')

