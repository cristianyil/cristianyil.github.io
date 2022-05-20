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
    let telRegex = "^[A-Za-z]+$";
    let correoregex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    let passregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]/;
    let namRegex = "(\[A-Za-z]{2,}(|\\s[A-Za-z]{2,})+)";
    if (name.length <= 2) {
        error = "Nombre invalido 2 caracteres minimo"
        event.preventDefault();
        document.getElementById("errorD").innerHTML = error;

    } else if (name.length > 15) {
        error = "Nombre invalido 15 caracteres minimos"
        event.preventDefault();
        document.getElementById("errorD").innerHTML = error;


    } else if (!name.match(namRegex)) {
        error = "Nombre invalido ,introduzca solo letras "
        document.getElementById("errorD").innerHTML = error;
        event.preventDefault();

    } else if (telefono.match(telRegex) || telefono.length != 9) {
        error = "introduce un numero valido";
        document.getElementById("errorD").innerHTML = error;
        event.preventDefault();


    } else if (!correo.match(correoregex)) {

        error = "correo invlido";
        document.getElementById("errorD").innerHTML = error;
        event.preventDefault();

    } else if (co1.length > 15) {
        error = "la contraseña no puede ser mayor de 15 caracteres ";
        document.getElementById("errorD").innerHTML = error;
        event.preventDefault();
    } else if (co1.length < 2) {
        error = "la contraseña no puede tener menos de 2 caracteres";
        document.getElementById("errorD").innerHTML = error;
        event.preventDefault();
    } else if (!co1.match(passregex)) {
        error = "Debe incluir almenos una mayuscula,una minuscula y un caracater ";
        document.getElementById("errorD").innerHTML = error;
        event.preventDefault();
    } else if (co1 != co2) {
        error = "las contraseñas no coinciden";
        document.getElementById("errorD").innerHTML = error;
        event.preventDefault();
    } else if (naci > fecha) {
        error = "la fecha no puede ser futura";
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
    } else if (year - yearn >= 65) {
        error = "No puede tener mas de 65 años";
        document.getElementById("errorD").innerHTML = error;
        event.preventDefault();
    }
}