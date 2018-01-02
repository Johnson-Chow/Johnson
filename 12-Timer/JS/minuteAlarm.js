var myDate = new Date();
var minuteAlarm = function (timeframe){
    var mytime = myDate.toLocaleTimeString()
    if(!(timeframe<=60000 && timeframe >= 1000)){
        console.log ('Error: Please input a valid number')
    }
else {
    setTimeout(function () {
        console.log('Alarm ringing at ' +  mytime);
    }, timeframe);
}
}
minuteAlarm('1000')

