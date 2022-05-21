console.log("###### Pruebas unitarias ######")
console.log("undefined significa que no da error")

console.log("")
console.log("---- Nombre ----")
console.log("cristian: " + checkName("cristian"))
console.log("cr: " + checkName("cr"))
console.log("cristiannnnnnnnnnnnnnnnnnnn: " + checkName("cristiannnnnnnnnnnnnnnnnnnn"))
console.log(".cristian: " + checkName(".cristian"))
console.log("131231123: " + checkName("131231123"))
console.log("cristian gil: " + checkName("cristian gil"))

console.log("")
console.log("---- Telefono ----")
console.log("633510114: " + checkPhone("633510114"))
console.log("633510114.: " + checkPhone("633510114."))
console.log("aaaaaaaaa: " + checkPhone("aaaaaaaaa"))

console.log("")
console.log("---- Correo ----")
console.log("cristian@gmail.com: " + checkMail("cristian@gmail.com"))
console.log("cristiangmail.com: " + checkMail("cristiangmail.com"))
console.log("cristian@gmail.c: " + checkMail("cristian@gmail.c"))


console.log("")
console.log("---- Password ----")
console.log("123456789Cr? | 123456789Cr?: " + checkPasswordValidation("123456789Cr?","123456789Cr?"))
console.log("123456789Cr? | pollo: " + checkPasswordValidation("123456789Cr?","pollo"))
console.log("123456789Cr? | : " + checkPasswordValidation("123456789Cr?",""))
console.log("123456789Cr | 123456789Cr: " + checkPasswordValidation("123456789Cr","123456789Cr"))ç

console.log("")
console.log("---- Country ----")
console.log("vacio: " + checkCountry(""))
console.log("relleno: " + checkCountry("españa"))

console.log("")
console.log("---- City ----")
console.log("vacio: " + checkCity(""))
console.log("relleno: " + checkCity("la linea"))

console.log("")
console.log("---- Date ----")

let dateOld = new Date("1956-05-22");
dateOld.setDate(new Date().getDate()+1)

console.log("1997-11-10: " + checkDate(new Date("1997-11-10")))
console.log("2020-11-10: " + checkDate(new Date("2020-11-10")))
console.log("1956-05-21: " + checkDate(new Date("1956-05-21")))
console.log("1956-05-22: " + checkDate(dateOld))
console.log("vacio: " + checkDate())
