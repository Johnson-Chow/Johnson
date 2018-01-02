

function whoIsInSpace(name) {
    // Call the AJAX here, And get the Data
    var http = new XMLHttpRequest();
    http.open('GET', 'http://api.open-notify.org/astros.json',true)
    http.onreadystatechange = function () {
        if (http.readyState != XMLHttpRequest.DONE) {
            return;
        } else if (http.status == 200) {
            var z = JSON.parse(http.responseText);
            var x =[];
            for(i=0;i<z.people.length;i++){
            x.push(z.people[i].name)
            }
            console.log(x)
        } else {
            console.log('error occurred' + http.status);
        }
    }
    http.send();
   // Return the Data by calling callback with the resulting data 
}
whoIsInSpace()
    


    