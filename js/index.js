// encuentra el elemento html mediante su id
const miBoton = document.getElementById("miBoton")
// definira la funcion que se ejecutara cuando se haga click en function
function handleClick(){
    alert("has dado click");
}

// obtenemos el boton por su id
//let miBoton = document.getElementById("miBoton")

//añadir el oyente
miBoton.addEventListener("click", function(){
    alert("has dado click");
}


)



document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function() {
           document.querySelector(".nav-links").
                      classList.toggle("nav-links-responsive")})