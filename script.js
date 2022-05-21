
function validateForm(event) {
    // Creo un diccionario clave valor para facilitar la lectura de codigo, lo vi aqui https://www.w3schools.com/js/js_objects.asp
    let formData = {
        name: document.forms["formulario"]["nombre"].value,
        telefono: document.forms["formulario"]["tel"].value,
        correo: document.forms["formulario"]["correo"].value,
        password1: document.forms["formulario"]["pass1"].value,
        password2: document.forms["formulario"]["pass2"].value,
        fnac: document.forms["formulario"]["naci"].valueAsDate,
        country: document.forms["formulario"]["pais"].value,
        city: document.forms["formulario"]["ciudad"].value,
    };

    // Llamamos a las funciones que he creado para que compruebe si es validos los datos, si trae null no hay ningun fallo
    const nameCheck = checkName(formData.name);
    const phoneCheck = checkPhone(formData.telefono);
    const mailCheck = checkMail(formData.correo);
    const dateCheck = checkDate(formData.fnac);
    const countryCheck = checkCountry(formData.country);
    const cityCheck = checkCity(formData.city);
    const passwordCheck = checkPasswordValidation(formData.password1, formData.password2);

    // Veremos si hay alguno que haya dado error, es decir que no sea nulo, lanzamos mensaje y no enviamos el formulario
    if (nameCheck != null) {
        document.getElementById("errorD").innerHTML = nameCheck;
        event.preventDefault();
    } else if (phoneCheck != null) {
        document.getElementById("errorD").innerHTML = phoneCheck;
        event.preventDefault();
    } else if (mailCheck != null) {
        document.getElementById("errorD").innerHTML = mailCheck;
        event.preventDefault();
    } else if (passwordCheck != null) {
        document.getElementById("errorD").innerHTML = passwordCheck;
        event.preventDefault();
    } else if (countryCheck != null) {
        document.getElementById("errorD").innerHTML = countryCheck;
        event.preventDefault();
    } else if (cityCheck != null) {
        document.getElementById("errorD").innerHTML = cityCheck;
        event.preventDefault();
    } else if (dateCheck != null) {
        document.getElementById("errorD").innerHTML = dateCheck;
        event.preventDefault();
    }
}

function checkPasswordValidation(password, passwordCopy) {
    const isWhitespace = /^(?=.*\s)/;
    if (password.match(isWhitespace)) {
        return "en la contraseña los espaciados no son validos ";
    }

    const isContainsUppercase = /^(?=.*[A-Z])/;
    if (!password.match(isContainsUppercase)) {
        return "Necesita una mayuscula en la contraseña.";
    }


    const isContainsLowercase = /^(?=.*[a-z])/;
    if (!password.match(isContainsLowercase)) {
        return "Necesita una mayuscula en la contraseña.";
    }


    const isContainsNumber = /^(?=.*[0-9])/;
    if (!password.match(isContainsNumber)) {
        return "Necesita un digito en la contraseña..";
    }


    const isContainsSymbol = /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])/;
    if (!password.match(isContainsSymbol)) {
        return "Necesita un caracter especial en la contraseña.";
    }


    const isValidLength = /^.{4,15}$/;
    if (!password.match(isValidLength)) {
        return "la contraseña debe ser mayor de 4 caracteres pero menor que 15 .";
    }

    if (password !== passwordCopy) {
        return "las contraseñas no coinciden";
    }

}

function checkName(name) {


    if (name.length <= 2) {
        return "Nombre invalido 2 caracteres minimo"
    }

    if (name.length > 15) {
        return "Nombre invalido 15 caracteres maximo"
    }

    if (!name.match("^[A-Za-z]+$")) {
        return "Nombre invalido, introduzca solo letras sin espacios "
    }
}

function checkPhone(phone) {
    let especial = /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])/

    if (phone.length !== 9) {
        return "introduce un numero valido";
    }
    if (phone.match("^[A-Za-z]+$") || phone.match(especial)) {
        return "introduce un numero valido";
    }
}

function checkMail(mail) {
    if (!mail.match(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i)) {
        return "correo invalido";
    }
}

function checkDate(fnac) {
    const date = new Date(Date.now());
    if (fnac === "" || fnac == null) {
        return  "Porfavor introduzca la edad";
    }
    if (fnac > date) {
        return "la fecha no puede ser futura";
    }
    if ((date.getFullYear() - fnac.getFullYear()) <= 18) {
        if (date.getFullYear() - fnac.getFullYear() < 18) {
            return "No cumple la mayoria de edad";
        } else if (fnac.getMonth() <= date.getMonth()) {
            if (fnac.getMonth() === date.getMonth()) {
                if (fnac.getDate() > date.getDate()) {
                    return "No cumple la mayoria de edad";
                }
            }
        } else {
            return "No cumple la mayoria de edad";
        }
    } else if (date.getFullYear() - fnac.getFullYear() > 66) {
        return "No puede tener mas de 65 años";
    } else if (date.getFullYear() - fnac.getFullYear() === 66) {
        if (fnac.getMonth() >= date.getMonth()) {
            if (fnac.getMonth() === date.getMonth()) {
                if (fnac.getDate() <= date.getDate()) {
                    return "No puede tener mas de 65 años";
                }
            }
        } else {
            return "No puede tener mas de 65 años";
        }
    }
}

function checkCountry(country){
    return country === "" ? "pon un pais" : undefined
}

function checkCity(city){
    return city === "" ? "pon una ciudad" : undefined
}