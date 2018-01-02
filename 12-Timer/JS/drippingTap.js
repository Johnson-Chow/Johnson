var drippingTap = function (timeID) {
    var timeID = setInterval(function () {
        console.log('Drop');
    }, 1000);
}
drippingTap();
function turnoffTap() {
    var timeID = setInterval(function () {
        console.log('Drop');
    }, 1000);
    clearInterval(timeID)
}
turnoffTap()