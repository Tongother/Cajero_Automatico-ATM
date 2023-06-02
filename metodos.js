//Variables globales y funciones globales

function guardarPerfil(perfilFocus){
    localStorage.setItem("Perfil", perfilFocus)
}

function obtenerPerfil () {
   return localStorage.getItem("Perfil");
}

function guardarDatosCuentas(cuentasString){
    localStorage.setItem("Cuentas", cuentasString);
}

function obtenerCuentas(){
    return localStorage.getItem("Cuentas");
}

function guardarDepositoRetiro(retiroDeposito){
    localStorage.setItem("retiroDeposito", retiroDeposito)
}

function obtenerDepositoRetiro(){
    return localStorage.getItem("retiroDeposito")
}

function guardarUbicacion(ubi){
    localStorage.setItem("ubicacion", ubi)
}

function obtenerUbicacionRetiroDeposito(){
    return localStorage.getItem("ubicacion")
}

let imagenAutorCuenta = document.getElementById("personaTitular");

//Declaración de varialbes para Login
if(document.title === "Login"){

let perfil_1 = document.getElementById("perfil1");
let perfil_2 = document.getElementById("perfil2");
let perfil_3 = document.getElementById("perfil3");
let angle_left = document.getElementById("angle-left-id");
let angle_right = document.getElementById("angle-right-id");
let namePerson = document.getElementById("namePerson");
let InputPassword = document.getElementById("password");
let contraseñasGAS = ["tulepepera", "CampusDef", "teExtrañoAlex"];
let verificacionContraseña = contraseñasGAS[0];
let contador=0;
guardarDatosCuentas(undefined);
guardarPerfil("Cuenta Gunther");

//Función para hacer chicos los perfiles y dar un efecto de lejanía
function doSmall(element){
    if(element instanceof HTMLElement){
        element.style.width= "5em";
        element.style.height="5em";
        element.style.opacity="0.3";
    }
}

//Función para hacer grandes los perfiles y dar un efecto de cercanía
function doBig(element){
    if(element instanceof HTMLElement){
        element.style.width= "10em";
        element.style.height="10em";
        element.style.opacity="1";
        if(element == perfil_1){
            namePerson.textContent = "Alex";
            verificacionContraseña = contraseñasGAS[1];
            guardarPerfil("Cuenta Alex");

        }else if(element == perfil_2){
            namePerson.textContent = "Gunther";
            verificacionContraseña = contraseñasGAS[0];
            guardarPerfil("Cuenta Gunther");

        }else if(element == perfil_3){
            namePerson.textContent = "Sofia";
            verificacionContraseña = contraseñasGAS[2];
            guardarPerfil("Cuenta Sofia");
        }
    }
}

//Función que revisa si la contraseña es correcta para redireccionar al usuario a ATM
function checkPassword(OutputContraseña){
    if(verificacionContraseña == OutputContraseña){
        window.location.href = "ATM.html";
    }else{
        alert("Contraseña invalida, intentelo de nuevo");
    }
}

//Código para el botón de Modo nocturno
const btnSwitch = document.getElementById("btn-switch");
const h1 = document.getElementsByTagName("h1");

btnSwitch.addEventListener("click", () =>{
    document.body.classList.toggle("dark");
    btnSwitch.classList.toggle("active");
    h1[0].classList.toggle("white");
    namePerson.classList.toggle("white");
    angle_left.classList.toggle("white");
    angle_right.classList.toggle("white");
    InputPassword.classList.toggle("white");

    if(document.body.classList.contains("dark")){
        localStorage.setItem("Oscuro", "true");
    }else{
        localStorage.setItem("Oscuro", "false");
    }
})

//Mantener la página en darkMode si el usuario asi lo decidio
if(localStorage.getItem("Oscuro") === "true"){
    document.body.classList.add("dark");
    btnSwitch.classList.add("active");
    h1[0].classList.add("white");
    namePerson.classList.add("white");
    angle_left.classList.add("white");
    angle_right.classList.add("white");
    InputPassword.classList.add("white");
}else{
    document.body.classList.remove("dark");
    btnSwitch.classList.remove("active");
    h1[0].classList.remove("white");
    namePerson.classList.remove("white");
    angle_left.classList.remove("white");
    angle_right.classList.remove("white");
    InputPassword.classList.remove("white");
}

//Aquí empieza el algoritmo para hacer el movimiento entre perfiles

    InputPassword.addEventListener("keypress", function(evento){
        if(evento.key == "Enter"){
            var password = InputPassword.value;
            checkPassword(password);
        }
    });

angle_left.addEventListener("click", function(){
    if(contador==0){
    contador++;
    perfil_1.animate([
        {transform: "translateX(0px)"},
        {transform: "translateX(200px)"}
    ],  {
            duration:1000, iterations: 1
        }).onfinish = function(){
            perfil_1.style.transform = "translateX(200px)";
        }
    perfil_2.animate([
        {transform: "translateX(0px)"},
        {transform: "translateX(-60px)", width: "5em", height:"5em", opacity: "0.5"}
    ], {
        duration:1000, iterations: 1
    }).onfinish = function(){
        perfil_2.style.transform = "translateX(-60px)";
        doSmall(perfil_2);
    }

    perfil_3.animate([
        {transform: "translateX(0px)"},
        {transform: "translateX(-60px)", width: "10em", height:"10em", opacity: "1", zIndex: "10"}
    ], {
        duration:1000, iterations: 1
    }).onfinish = function(){
        perfil_3.style.transform = "translateX(-60px)";
        doBig(perfil_3);
    }
}else if(contador==1 || contador==-2){
    contador++;
    perfil_1.animate([
        {transform: "translateX(200px)"},
        {transform: "translateX(60px)", width: "10em", height:"10em", opacity: "1"}
    ],  {
            duration:1000, iterations: 1
        }).onfinish = function(){
            perfil_1.style.transform = "translateX(60px)";
            doBig(perfil_1);
        }
    perfil_2.animate([
        {transform: "translateX(-60px)"},
        {transform: "translateX(60px)"}
    ], {
        duration:1000, iterations: 1
    }).onfinish = function(){
        perfil_2.style.transform = "translateX(60px)";
    }

    perfil_3.animate([
        {transform: "translateX(-60px)"},
        {transform: "translateX(-200px)", width: "5em", height:"5em", opacity: "0.5"}
    ], {
        duration:1000, iterations: 1
    }).onfinish = function(){
        perfil_3.style.transform = "translateX(-200px)";
        doSmall(perfil_3);
    }
}else if(contador==2 || contador==-1){
    contador=0;
    perfil_1.animate([
        {transform: "translateX(60px)"},
        {transform: "translateX(0px)", width: "5em", height:"5em", opacity: "0.5"}
    ],  {
            duration:1000, iterations: 1
        }).onfinish = function(){
            perfil_1.style.transform = "translateX(0px)";
            doSmall(perfil_1);
        }
    perfil_2.animate([
        {transform: "translateX(60px)"},
        {transform: "translateX(0px)", width: "10em", height:"10em", opacity: "1"}
    ], {
        duration:1000, iterations: 1
    }).onfinish = function(){
        perfil_2.style.transform = "translateX(0px)";
        doBig(perfil_2);
    }

    perfil_3.animate([
        {transform: "translateX(-200px)"},
        {transform: "translateX(0px)"}
    ], {
        duration:1000, iterations: 1
    }).onfinish = function(){
        perfil_3.style.transform = "translateX(0px)";
    }
}
});

angle_right.addEventListener("click", function(){
    if(contador==0){
    contador--;
    perfil_1.animate([
        {transform: "translateX(0px)"},
        {transform: "translateX(60px)", width: "10em", height:"10em", opacity: "1"}
    ],  {
            duration:1000, iterations: 1
        }).onfinish = function(){
            perfil_1.style.transform = "translateX(60px)";
            doBig(perfil_1);
        }
    perfil_2.animate([
        {transform: "translateX(0px)"},
        {transform: "translateX(60px)", width: "5em", height:"5em", opacity: "0.5"}
    ], {
        duration:1000, iterations: 1
    }).onfinish = function(){
        perfil_2.style.transform = "translateX(60px)";
        doSmall(perfil_2);
    }

    perfil_3.animate([
        {transform: "translateX(0px)"},
        {transform: "translateX(-200px)"}
    ], {
        duration:1000, iterations: 1
    }).onfinish = function(){
        perfil_3.style.transform = "translateX(-200px)";
    }
}else if(contador==-1  || contador==2){
    contador--;
    perfil_1.animate([
        {transform: "translateX(60px)"},
        {transform: "translateX(200px)", width: "5em", height:"5em", opacity: ".5"}
    ],  {
            duration:1000, iterations: 1
        }).onfinish = function(){
            perfil_1.style.transform = "translateX(200px)";
            doSmall(perfil_1);
        }
    perfil_2.animate([
        {transform: "translateX(60px)"},
        {transform: "translateX(-60px)"}
    ], {
        duration:1000, iterations: 1
    }).onfinish = function(){
        perfil_2.style.transform = "translateX(-60px)";
    }

    perfil_3.animate([
        {transform: "translateX(-200px)"},
        {transform: "translateX(-60px)", width: "10em", height:"10em", opacity: "1"}
    ], {
        duration:1000, iterations: 1
    }).onfinish = function(){
        perfil_3.style.transform = "translateX(-60px)";
        doBig(perfil_3);
    }
}else if(contador==-2 || contador==1){
    contador=0;
    perfil_1.animate([
        {transform: "translateX(200px)"},
        {transform: "translateX(0px)"}
    ],  {
            duration:1000, iterations: 1
        }).onfinish = function(){
            perfil_1.style.transform = "translateX(0px)";
        }
    perfil_2.animate([
        {transform: "translateX(-60px)"},
        {transform: "translateX(0px)", width: "10em", height:"10em", opacity: "1"}
    ], {
        duration:1000, iterations: 1
    }).onfinish = function(){
        perfil_2.style.transform = "translateX(0px)";
        doBig(perfil_2);
    }

    perfil_3.animate([
        {transform: "translateX(-60px)"},
        {transform: "translateX(0px)", width: "5em", height:"5em", opacity: ".5"}
    ], {
        duration:1000, iterations: 1
    }).onfinish = function(){
        perfil_3.style.transform = "translateX(0px)";
        doSmall(perfil_3);
    }
}
});
}

//Aquí empieza el algoritmo para mantener a ATM en darkMode si el usuario así lo quiso
if(document.title === "ATM"){
    const btnsATM = document.getElementsByTagName("button");
    const inputCerrarSesion = document.getElementsByTagName("input");

    if(localStorage.getItem("Oscuro") === "true"){
        for(i=0; i<=2; i++){
            btnsATM[i].classList.add("white");
        }
        document.body.classList.add("dark");
        inputCerrarSesion[0].classList.add("white");
        
    }
}

//Aquí empieza el algoritmo para vincular los perfiles con sus cuentas de banco (página deposito, retiro y consultarSaldo)

var cuentas = [
    {nombrePersona1: "Gunther", saldoPersona1: 200},
    {nombrePersona2: "Alex", saldoPersona2: 290},
    {nombrepersona3: "Sofia", saldoPersona3: 267},
];
let cuentasString = JSON.stringify(cuentas);

if(obtenerCuentas() == "undefined"){
    guardarDatosCuentas(cuentasString);
}else{
   cuentas = JSON.parse(obtenerCuentas());
}


if(document.title === "Deposito" || document.title === "Retiro" || document.title === "Consultar saldo" || document.title === "Comprobante"){

//Funciones globales para Deposito, retiro y estado de cuenta
function agregarFotoGunther(){
    let nombreTitular = document.getElementById("titular-id");
    imagenAutorCuenta.src = "./WhatsApp Image 2023-05-21 at 13.33.44.jpeg";
    nombreTitular.textContent= "Gunther";
}

function agregarFotoAlex(){
    let nombreTitular = document.getElementById("titular-id");
    imagenAutorCuenta.src = "./mubariz-mehdizadeh-Py8F6-hRn5o-unsplash.jpg";
    nombreTitular.textContent= "Alex";
}

function agregarFotoSofia(){
    let nombreTitular = document.getElementById("titular-id");
    imagenAutorCuenta.src = "./toa-heftiba-O3ymvT7Wf9U-unsplash.jpg";
    nombreTitular.textContent= "Sofia";
}


function darkModeDepositoRetiroConsultar(){
    const p = document.getElementsByTagName("p");
    const h2 = document.getElementsByTagName("h2");
    if(window.location.href.includes("Deposito.html") || window.location.href.includes("Retiro.html")){
    const iconoAdvertencia = document.getElementById("iconoAdvertencia");
    var h5 = document.getElementsByTagName("h5");
    var label = document.getElementsByTagName("label");
    }
    //Código para hacer oscuro si así lo desea el usuario
    if(localStorage.getItem("Oscuro") === "true"){
        document.body.classList.add("dark");
        p[0].classList.add("white");
        h2[0].classList.add("white");
        if(window.location.href.includes("Deposito.html") || window.location.href.includes("Retiro.html")){
            h5[0].classList.add("white");
            label[0].classList.add("white");
            iconoAdvertencia.classList.add("white");
        }
        
    }else{
        document.body.classList.remove("dark");
        p[0].classList.remove("white");
        h2[0].classList.remove("white");
        if(window.location.href.includes("Deposito.html") || window.location.href.includes("Retiro.html")){
            h5[0].classList.remove("white");
            label[0].classList.remove("white");
        }
    }
}


if(document.title === "Deposito"){
    let inputDepositoRetiro = document.getElementById("input-operaciones-id");
    let Estado_de_cuenta = document.getElementById("estadoDeCuenta");
    darkModeDepositoRetiroConsultar();
    guardarUbicacion("0");

    inputDepositoRetiro.addEventListener("keydown", function (event) {
        const allowedKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "Backspace", "ArrowLeft", "ArrowRight", "Enter"];
      
        if (!allowedKeys.includes(event.key)) {
          event.preventDefault();
        }
      });

    function procesoDeposito(evento){
        if(evento.key == "Enter"){
            if(inputDepositoRetiro.value != "" && inputDepositoRetiro.value== 20 || inputDepositoRetiro.value== 100 || inputDepositoRetiro.value== 200 || inputDepositoRetiro.value== 500 || inputDepositoRetiro.value== 1000){
            const deposito = parseInt(inputDepositoRetiro.value);
            guardarDepositoRetiro(deposito.toString());
            if((deposito+cuentas[0].saldoPersona1) > 990){
                alert("Por favor, ingrese una cantidad más pequeña, su saldo no debe superar más de $990 pesos MXN");
            }else{
                if(obtenerPerfil() == "Cuenta Gunther"){
                    cuentas[0].saldoPersona1 += deposito;
                    guardarDatosCuentas(JSON.stringify(cuentas));
                    Estado_de_cuenta.textContent = `Estado de cuenta: $${cuentas[0].saldoPersona1}`;
                    window.location.href = "Comprobante.html";
                }else if(obtenerPerfil() == "Cuenta Alex"){
                    cuentas[1].saldoPersona2 += deposito;
                    guardarDatosCuentas(JSON.stringify(cuentas));
                    Estado_de_cuenta.textContent = `Estado de cuenta: $${cuentas[1].saldoPersona2}`;
                    window.location.href = "Comprobante.html";
                }else if(obtenerPerfil() == "Cuenta Sofia"){
                    cuentas[2].saldoPersona3 += deposito;
                    guardarDatosCuentas(JSON.stringify(cuentas));
                    Estado_de_cuenta.textContent = `Estado de cuenta: $${cuentas[2].saldoPersona3}`;
                    window.location.href = "Comprobante.html";
                }
            }
            
        }else{
            alert("Valor no valido, por favor, ingrese una cantidad que este entre las opciones")
        }
        }
    }

    if(obtenerPerfil() == "Cuenta Gunther"){
        agregarFotoGunther();
        Estado_de_cuenta.textContent = `Estado de cuenta: $${cuentas[0].saldoPersona1}`;
        inputDepositoRetiro.addEventListener("keypress", function(evento){
           procesoDeposito(evento);
        });


    }else if(obtenerPerfil() == "Cuenta Alex"){
        agregarFotoAlex();
        Estado_de_cuenta.textContent = `Estado de cuenta: $${cuentas[1].saldoPersona2}`;
        inputDepositoRetiro.addEventListener("keypress", function(evento){
            procesoDeposito(evento);
         });
    }else if(obtenerPerfil() == "Cuenta Sofia"){
        agregarFotoSofia();
        Estado_de_cuenta.textContent = `Estado de cuenta: $${cuentas[2].saldoPersona3}`;
        inputDepositoRetiro.addEventListener("keypress", function(evento){
            procesoDeposito(evento);
         });
    }

}else if(document.title === "Retiro"){
    let inputDepositoRetiro = document.getElementById("input-operaciones-id");
    let Estado_de_cuenta = document.getElementById("estadoDeCuenta");
    darkModeDepositoRetiroConsultar();
    guardarUbicacion("1");

inputDepositoRetiro.addEventListener("keydown", function (event) {
  const allowedKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "Backspace", "ArrowLeft", "ArrowRight", "Enter"];

  if (!allowedKeys.includes(event.key)) {
    event.preventDefault();
  }
});

    function procesoRetiro(evento){
        if(evento.key == "Enter"){
            if((inputDepositoRetiro.value != "" && inputDepositoRetiro.value== 20 || inputDepositoRetiro.value== 100 || inputDepositoRetiro.value== 200 || inputDepositoRetiro.value== 500 || inputDepositoRetiro.value== 1000)){
            const retiro = parseInt(inputDepositoRetiro.value);
            guardarDepositoRetiro(retiro.toString());
            if((cuentas[0].saldoPersona1-retiro) < 10){
                alert("Por favor, ingrese una cantidad más pequeña, su saldo no debe ser menor a $10 pesos MXN");
            }else{
                if(obtenerPerfil() == "Cuenta Gunther"){
                    cuentas[0].saldoPersona1 -= retiro;
                    guardarDatosCuentas(JSON.stringify(cuentas));
                    Estado_de_cuenta.textContent = `Estado de cuenta: $${cuentas[0].saldoPersona1}`;
                    window.location.href = "Comprobante.html";
                }else if(obtenerPerfil() == "Cuenta Alex"){
                    cuentas[1].saldoPersona2 -= retiro;
                    guardarDatosCuentas(JSON.stringify(cuentas));
                    Estado_de_cuenta.textContent = `Estado de cuenta: $${cuentas[1].saldoPersona2}`;
                    window.location.href = "Comprobante.html";
                }else if(obtenerPerfil() == "Cuenta Sofia"){
                    cuentas[2].saldoPersona3 -= retiro;
                    guardarDatosCuentas(JSON.stringify(cuentas));
                    Estado_de_cuenta.textContent = `Estado de cuenta: $${cuentas[2].saldoPersona3}`;
                    window.location.href = "Comprobante.html";
    
                }
            }
            inputDepositoRetiro.value = "";
        }else{
            alert("Valor no valido, por favor, ingrese una cantidad que este entre las opciones");
        }
        }
    }

    if(obtenerPerfil() == "Cuenta Gunther"){
        agregarFotoGunther();
        Estado_de_cuenta.textContent = `Estado de cuenta: $${cuentas[0].saldoPersona1}`;
        inputDepositoRetiro.addEventListener("keypress", function(evento){
           procesoRetiro(evento);
        });

    }else if(obtenerPerfil() == "Cuenta Alex"){
        agregarFotoAlex();
        Estado_de_cuenta.textContent = `Estado de cuenta: $${cuentas[1].saldoPersona2}`;
        inputDepositoRetiro.addEventListener("keypress", function(evento){
            procesoRetiro(evento);
         });
    }else if(obtenerPerfil() == "Cuenta Sofia"){
        agregarFotoSofia();
        Estado_de_cuenta.textContent = `Estado de cuenta: $${cuentas[2].saldoPersona3}`;
        inputDepositoRetiro.addEventListener("keypress", function(evento){
            procesoRetiro(evento);
         });
    }
}else if(document.title === "Consultar saldo"){
    let Estado_de_cuenta = document.getElementById("estadoDeCuenta");
    darkModeDepositoRetiroConsultar();
    if(obtenerPerfil() == "Cuenta Gunther"){
        agregarFotoGunther();
        Estado_de_cuenta.textContent = `Estado de cuenta: $${cuentas[0].saldoPersona1}`;

    }else if(obtenerPerfil() == "Cuenta Alex"){
        agregarFotoAlex();
        Estado_de_cuenta.textContent = `Estado de cuenta: $${cuentas[1].saldoPersona2}`;
        
    }else if(obtenerPerfil() == "Cuenta Sofia"){
        agregarFotoSofia();
        Estado_de_cuenta.textContent = `Estado de cuenta: $${cuentas[2].saldoPersona3}`;
        
    }

}
}

if(document.title === "Comprobante"){
    const pHora= document.getElementById("hora");
    function obtenerHoraActual(){
        const elAhora = new Date();
        let hora = elAhora.getHours();
        let minutos = elAhora.getMinutes();
        let segundos = elAhora.getSeconds();
        let dia = elAhora.getDate();
        let mes = elAhora.getMonth();
        let año = elAhora.getFullYear();

        mes = elAhora.toLocaleString("es", {month: "long"});

        dia = ("0" + dia).slice(-2);
        hora = ("0"+ hora).slice(-2);
        minutos = ("0"+ minutos).slice(-2);
        segundos = ("0"+ segundos).slice(-2);

        const fechahoraActual = `${dia} ${mes} ${año},${hora}:${minutos}:${segundos}`;
        pHora.textContent = fechahoraActual;
    }
    obtenerHoraActual();

    const cuentaVVBA = document.getElementById("cuentaVVBA");
    if(obtenerPerfil() == "Cuenta Gunther"){
        agregarFotoGunther();
        cuentaVVBA.textContent =  "Cuenta bancaria: 4504";

    }else if(obtenerPerfil() == "Cuenta Alex"){
        agregarFotoAlex();
        cuentaVVBA.textContent =  "Cuenta bancaria: 0232";

    }else if(obtenerPerfil() == "Cuenta Sofia"){
        agregarFotoSofia();
        cuentaVVBA.textContent =  "Cuenta bancaria: 0450";
    }

    const folio = document.getElementById("folioComprobante");
    const numeroAleatorio = Math.floor(Math.random() * 9999999999) + 1000000000;
    folio.textContent = `Folio: ${numeroAleatorio}`;


    const dinero = document.getElementById("dineroDepositadoRetirado");
    const textoRetiroDepositoComprobante = document.getElementById("textoRetiroODeposito");
    const linkRegresoRetiroDeposito = document.getElementById("RegresarRetiroDeposito");

    if(obtenerUbicacionRetiroDeposito()=== "0"){
        dinero.textContent = `Deposito: $${obtenerDepositoRetiro()}`;
        textoRetiroDepositoComprobante.textContent = "Deposito exitoso";
        linkRegresoRetiroDeposito.href="Deposito.html";
    }else if(obtenerUbicacionRetiroDeposito()=== "1"){
        dinero.textContent = `Retiro: $${obtenerDepositoRetiro()}`;
        textoRetiroDepositoComprobante.textContent = "Retiro exitoso";
        linkRegresoRetiroDeposito.href="Retiro.html";
    }

    function imprimirPagina(){
        return window.print();
    }


}