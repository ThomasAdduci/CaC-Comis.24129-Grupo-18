
var username = localStorage.getItem("username");


if (username) {
    
    var greeting = "Hola, " + username;

    document.getElementById("username").textContent = greeting;
}

//cerrar sesion
app.get('/index.html', (req, res) => {
   
    res.redirect('/'); 
});





