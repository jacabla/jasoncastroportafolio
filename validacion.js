//Haz tú validación en javascript ac

function validarDatos(){
    let contacto = document.getElementById("contacto"); 
    contacto === ""
    if (contacto = false){
        let formcontato__text__error = document.createElement("p");
        let mensajeError = document.createTextNode("Formulario enviado con exito");
        formcontato__text__error.appendChild(mensajeError);
        document.getElementById("formcontato__text__error").appendChild(formcontato__text__error);
    }else{
        let formcontato__text__error1 = document.createElement("p");
        let mensajeError1 = document.createTextNode("Debe completar todos los campos");
        formcontato__text__error1.appendChild(mensajeError1);
        document.getElementById("formcontato__text__error").appendChild(formcontato__text__error1);
    }
}
