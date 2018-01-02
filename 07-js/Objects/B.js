/*var number =12345;
var number = number.toString();
var number= number.split('');
for (i=0; i<number.length; i++){
number [i] = parseInt(number[i],10)

}
var number= number.reverse()

console.log(number)*/

function reverse(number){

    var number= number.toString();
    var number= number.split('');
    for (i = 0; i < number.length; i++) {
        number[i] = parseInt(number[i], 10)
    }
    console.log(number.reverse())
}

reverse(12345) 

/*function reverse(number) {

    var number = number.toString();
    var number = number.split('');
    var number = number.map(function(n) {
        return parseInt(n, 10)
    })
    console.log(number.reverse())
}
reverse(12345) 
*/