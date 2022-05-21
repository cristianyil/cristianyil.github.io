function validateForm(event) {
    const name = document.forms["formulario"]["nombre"].value;
    const telefono = document.forms["formulario"]["tel"].value;
    const correo = document.forms["formulario"]["correo"].value;
    const co1 = document.forms["formulario"]["pass1"].value;
    const co2 = document.forms["formulario"]["pass2"].value;
    const naci = document.forms["formulario"]["naci"].value;
    const pais = document.forms["formulario"]["pais"].value;
    const ciudad = document.forms["formulario"]["ciudad"].value;
    const syearn = naci.substr(0, 4);
    const sdayn = naci.substr(8, 2);
    const smonthn = naci.substr(5, 2);
    const yearn = parseInt(syearn);
    const monthn = parseInt(smonthn);
    const dayn = parseInt(sdayn);
    var alldate = new Date();
    var day = alldate.getDate();
    var year = alldate.getFullYear();
    var month = alldate.getUTCMonth() + 1;
    fecha = year + "/" + month + "/" + day;
    let error = "";
 let especil =/^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])/
    let namRegex = "^[A-Za-z]+$";
    let correoregex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    const password = checkPasswordValidation(co1);
    if (name.length <= 2) { 
        error = "Nombre invalido 2 caracteres minimo"
        event.preventDefault();
        document.getElementById("errorD").innerHTML = error;

    } else if (name.length > 15) {
        error = "Nombre invalido 15 caracteres maximo"
        event.preventDefault();
        document.getElementById("errorD").innerHTML = error;


    } else if (!name.match(namRegex)) {
        error = "Nombre invalido ,introduzca solo letras "
        document.getElementById("errorD").innerHTML = error;
        event.preventDefault();

    } else if ( telefono.length != 9) {
        error = "introduce un numero valido";
        document.getElementById("errorD").innerHTML = error;
        event.preventDefault();


    }
    else if(telefono.match(namRegex)||telefono.match(especil)){
        error = "introduce un numero valido";
        document.getElementById("errorD").innerHTML = error;
        event.preventDefault();
    } else if (!correo.match(correoregex)) {

        error = "correo invalido";
        document.getElementById("errorD").innerHTML = error;
        event.preventDefault();

    }  else if (password != null) {
        
        document.getElementById("errorD").innerHTML = password;
        event.preventDefault();
    } else if (co1 != co2) {
        error = "las contraseñas no coinciden";
        document.getElementById("errorD").innerHTML = error;
        event.preventDefault();

    } else if (pais == "") {
        error = "pon un pais";
        document.getElementById("errorD").innerHTML = error;
        event.preventDefault();
    } else if (ciudad == "") {
        error = "pon un ciuadad";
        document.getElementById("errorD").innerHTML = error;
        event.preventDefault();
    } else if (naci == "") {
        error = "Porfavor introduzca la edad";
        document.getElementById("errorD").innerHTML = error;
        event.preventDefault();
    } else if (naci > fecha) {
        error = "la fecha no puede ser futura";
        document.getElementById("errorD").innerHTML = error;
        event.preventDefault();
    } else if (year - yearn <= 18) {
        if (year - yearn < 18) {
            error = "No cumple la mayoria de edad";
            document.getElementById("errorD").innerHTML = error;
            event.preventDefault();
        } else if (monthn <= month) {
            if (monthn == month) {
                if (dayn > day) {
                    error = "No cumple la mayoria de edad";
                    document.getElementById("errorD").innerHTML = error;
                    event.preventDefault();
                }

            }
        } else {
            error = "No cumple la mayoria de edad";
            document.getElementById("errorD").innerHTML = error;
            event.preventDefault();
        }

    } else if (year - yearn > 66) {
        error = "No puede tener mas de 65 años";
        document.getElementById("errorD").innerHTML = error;
        event.preventDefault();
    } else if (year - yearn == 66) {
        if (monthn >= month) {
            if (monthn == month) {
                if (dayn <= day) {
                    error = "No puede tener mas de 65 años";
                    document.getElementById("errorD").innerHTML = error;
                    event.preventDefault();
                }

            }
        } else {
            error = "No puede tener mas de 65 años";
            document.getElementById("errorD").innerHTML = error;
            event.preventDefault();
        }
    }
}


function checkPasswordValidation(value) {
    const co1 = document.forms["formulario"]["pass1"].value;
    const isWhitespace = /^(?=.*\s)/;
    if (co1.match(isWhitespace)) {
      return "Password must not contain Whitespaces.";
    }


    const isContainsUppercase = /^(?=.*[A-Z])/;
    if (!value.match(isContainsUppercase)) {
      return "Password must have at least one Uppercase Character.";
    }


    const isContainsLowercase = /^(?=.*[a-z])/;
    if (!value.match(isContainsLowercase)) {
      return "Password must have at least one Lowercase Character.";
    }


    const isContainsNumber = /^(?=.*[0-9])/;
    if (!value.match(isContainsNumber)) {
      return "Password must contain at least one Digit.";
    }


    const isContainsSymbol =
      /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])/;
    if (!value.match(isContainsSymbol)) {
      return "Password must contain at least one Special Symbol.";
    }


    const isValidLength = /^.{4,15}$/;
    if (!value.match(isValidLength)) {
      return "Password must be 10-16 Characters Long.";
    }

}

