/*var arr = [75, 80, 90]
var sum = arr.reduce(function (accumulater, number) {
    return (accumulater+number)
},0)

var average = Math.round(sum/arr.length);
console.log(average)*/

var array = [75, 80, 90]

function average(arr){
//   console.log(arr);

   var sum = arr.reduce(function (accumulater, number) {
        return (accumulater + number)
    })
        var average = Math.round(sum / arr.length);
  return average;
}

console.log(average(array))