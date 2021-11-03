function Recuperaredad(){
    var mensaje = "";
        console.log("edad");
    var edad = document.getElementById("edad").value;
        if (edad < 18){
            mensaje = "Es menor de edad";
        }
        else {
            mensaje = "Es mayor de edad";
        }
    var contenedor = document.createElement("p");
    contenedor.innerText = mensaje 
    document.body.appendChild(contenedor);
    } 