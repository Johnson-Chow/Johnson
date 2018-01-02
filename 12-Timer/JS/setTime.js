var myDate = new Date();
function timeOut(callback, milliseconds) {
    var future = myDate.getTime() + milliseconds;
    if(future = myDate.getTime()) {
        return callback();
    }
}
timeOut(function () {
    console.log('');
}, 1000);

