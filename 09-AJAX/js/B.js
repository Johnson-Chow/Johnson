

function informMe(endpoint, value,callback) {
    // Call the AJAX here, And get the Data
    var http = new XMLHttpRequest();
    http.open('GET', 'https://restcountries.eu/rest/v2/'+endpoint+'/'+value,true)
    http.onreadystatechange = function () {
        if (http.readyState != XMLHttpRequest.DONE) {
            return;
        } else if (http.status == 200) {
            var z = JSON.parse(http.responseText);
            callback(z); 

        } else {
            console.log('error occurred' + http.status);
        }
    }
    http.send();
   // Return the Data by calling callback with the resulting data 
}
informMe('capital', 'beijing', function(x){
    console.log(x)
})
    


    