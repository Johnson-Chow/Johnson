

class User {
    constructor(options) {
        this.first = options.first;
        this.second = options.second;
        this.email = options.email;
        this.dob = options.dob;
    }
}
function makesApiCall(callback) {
    var http = new XMLHttpRequest();
    http.open('GET', 'https://randomuser.me/api/', true)
    http.onreadystatechange = function () {
        if (http.readyState != XMLHttpRequest.DONE) {
            return;
        } else if (http.status == 200) {
            var z = JSON.parse(http.responseText);
            callback(z)
        } else {
            console.log('error occurred' + http.status);
        }
    }
    http.send();
}

makesApiCall(function (z) {
    // console.log(z)
    const user = new User({ first: z.results[0].name.first, second: z.results[0].name.last, email: z.results[0].email, dob: z.results[0].dob})
    console.log(user)
    // console.log(user)
})


// Return the Data by calling callback with the resulting data 









