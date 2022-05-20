

function validateForm(event) {
    const name = document.forms["formulario"]["nombre"].value;
    const telefono = document.forms["formulario"]["tel"].value;
    const correo = document.forms["formulario"]["correo"].value;
    const co1 = document.forms["formulario"]["pass1"].value;
    const co2 = document.forms["formulario"]["pass2"].value;
    const naci = document.forms["formulario"]["naci"].value;
    

    const syearn = naci.substr(0, 4);
    const sdayn = naci.substr(6, 2);
    const smonthn = naci.substr(5, 2);
    const yearn = parseInt(syearn);
    const monthn = parseInt(smonthn);
    const dayn = parseInt(sdayn);
    var alldate = new Date();
    var month = alldate.getUTCMonth() + 1;
    var day = alldate.getDay();
    var year = alldate.getFullYear();
    fecha = year + "/" + month + "/" + day;

    let error = "";

    let namRegex = "^[A-Za-z]+$";
    let correoregex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    let passregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]/;
    let cont = 0;
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

    } else if (telefono.match(namRegex) || telefono.length != 9) {
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
    } else if (year - yearn <= 18) {
        if (year - yearn < 18) {
            error = "No cumple la mayoria de edad2";
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

const formPart1 = document.getElementById("formPart1");
const formPart2 = document.getElementById("formPart2");
const formPart3 = document.getElementById("formPart3");
const formPartCounter = document.getElementById("formPart");

const nextBtn = document.getElementById("nextBtn");
const backBtn = document.getElementById("backBtn");

nextBtn.addEventListener("click", ()=>{
    if(formPartCounter.value=="1") {
        formPartCounter.value="2";
        backBtn.hidden = false;
        formPart1.hidden = true;
        formPart2.hidden = false;
    } else if(formPartCounter.value=="2"){
        formPartCounter.value="3";
        nextBtn.hidden = true;
        formPart2.hidden = true;
        formPart3.hidden = false;
    }
})

backBtn.addEventListener("click", ()=>{
    if(formPartCounter.value=="3") {
        formPartCounter.value="2";
        nextBtn.hidden = false;
        formPart3.hidden = true;
        formPart2.hidden = false;
    } else if(formPartCounter.value=="2"){
        formPartCounter.value="1";
        nextBtn.hidden = false;
        backBtn.hidden = true;
        formPart2.hidden = true;
        formPart1.hidden = false;
    }
})