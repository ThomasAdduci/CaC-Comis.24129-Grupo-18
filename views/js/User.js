
var username = localStorage.getItem("username");


document.addEventListener('DOMContentLoaded', function() {
    var username = localStorage.getItem("username");

    if (username) {
        var greeting = `Hola, <span class="username-red">${username}</span>`;
        document.getElementById("username").innerHTML = greeting;
    }
});


//cerrar sesion
app.get('/index.html', (req, res) => {
   
    res.redirect('/'); 
});





