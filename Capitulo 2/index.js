//Pregunta 1
const Edad_Min_Permitida = 18;
const HoraFreeInicio = 2;
const HoraFreeTermino = 22;
const texto = document.getElementById("respuesta")

function write() {
    let edad = document.getElementsByName("Edad")[0].value;
    let date = document.getElementsByName("date")[0].value;
    let time = document.getElementsByName("time")[0].value;
    let fecha = new Date(date + " " + time);
    if (edad >= Edad_Min_Permitida) {
        if (fecha.getHours() >= HoraFreeInicio && fecha.getHours() <= HoraFreeTermino) {
            texto.innerHTML = '<br/><h2 style= "color:blue">Puede entrar a la sala señor mayor de edad y GRATIS </h2><br/>'
        }
        else {
            comunicado = `<br/><h3 style= "color:blue">Puede entrar a la sala señor mayor de edad</h3> <h3 style= "color:red">PERO TIENE QUE PAGAR</h3><br/>`
            texto.innerHTML = comunicado
        }
    }
    else {
        texto.innerHTML = '<br/><h1 style= "color:red">No puedes entrar a la sala pendejo de mrd</h1> <br/>'
    }
    texto.innerHTML += `Tiene ${edad} años y entró el ${fecha}`
    texto.innerHTML;

}
document.getElementById("submit").addEventListener("click", write);

//Pregunta 2
const alumnos = [
    { nombre: "Juan", asistencias: 0 },
    { nombre: "Paco", asistencias: 0 },
    { nombre: "Seba", asistencias: 0 },
    { nombre: "Pepo", asistencias: 0 },
    { nombre: "Pepa", asistencias: 0 },
    { nombre: "Pablo", asistencias: 0 },
    { nombre: "Pedro", asistencias: 0 },
    { nombre: "Maria", asistencias: 0 },
    { nombre: "Pepito", asistencias: 0 },
    { nombre: "Churro", asistencias: 0 },
    { nombre: "Juanito", asistencias: 0 },
    { nombre: "Yohanns", asistencias: 0 },
    { nombre: "Sebastían", asistencias: 0 },
]
const texto2 = document.getElementById("Respuesta_2")
const max_class = 20;
function Getalumnos() {
    let Nalumnos = document.getElementsByName("Nalumnos")[0].value;
    let allAlumnos = "Alumno| Días que asistió: <br/>";
    for (let i = 0; i < Nalumnos; i++) {

        let AlumnoLavel = `<label for="${alumnos[i].nombre}">${alumnos[i].nombre}  :<input name="${alumnos[i].nombre}" type="number" value="0" max="${max_class}" min="0"></label><div id="${alumnos[i].nombre}asist"></div> <br/>`
        allAlumnos += AlumnoLavel
    }
    let boton = `<button id="Comprobar">Comprobar</button>`
    allAlumnos += boton
    texto2.innerHTML = allAlumnos;
    document.getElementById("Comprobar").addEventListener("click", Asistencias);
}

function Asistencias() {
    let Nalumnos = document.getElementsByName("Nalumnos")[0].value;
    for (let index = 0; index < Nalumnos; index++) {
        let asistencias = document.getElementsByName(alumnos[index].nombre)[0].value;
        alumnos[index].asistencias = parseInt(asistencias)
    }
    for (let index = 0; index < Nalumnos; index++) {
        let asistencias = document.getElementById(alumnos[index].nombre + "asist")
        if (alumnos[index].asistencias >= max_class * 0.9) {
            asistencias.innerHTML = `<h4 style="color:blue">${alumnos[index].nombre} asistió ${alumnos[index].asistencias} días, por lo que aprobó con un ${100 * alumnos[index].asistencias / max_class}% de asistencia</h4>`
        } else {
            asistencias.innerHTML = `<h4 style="color:red">${alumnos[index].nombre} asistió ${alumnos[index].asistencias} días, por lo que reprobó con un ${100 * alumnos[index].asistencias / max_class}% de asistencia</h4>`
        }
    }
}
document.getElementById("GetAlumnos").addEventListener("click", Getalumnos);

//Pregunta 3

function Sumar() {
    let num1 = document.getElementsByName("num1")[0].value;
    let num2 = document.getElementsByName("num2")[0].value;
    let suma = parseInt(num1) + parseInt(num2);
    document.getElementById("Respuesta_3").innerHTML = `La suma de ${num1} y ${num2} es ${suma}`
}
function Restar() {
    let num1 = document.getElementsByName("num1")[0].value;
    let num2 = document.getElementsByName("num2")[0].value;
    let suma = parseInt(num1) - parseInt(num2);
    document.getElementById("Respuesta_3").innerHTML = `La resta de ${num1} y ${num2} es ${suma}`
}
function Dividir() {
    let num1 = document.getElementsByName("num1")[0].value;
    let num2 = document.getElementsByName("num2")[0].value;
    let suma = parseInt(num1) / parseInt(num2);
    document.getElementById("Respuesta_3").innerHTML = `La division de ${num1} y ${num2} es ${suma}`
}
function Multiplicar() {
    let num1 = document.getElementsByName("num1")[0].value;
    let num2 = document.getElementsByName("num2")[0].value;
    let suma = parseInt(num1) * parseInt(num2);
    document.getElementById("Respuesta_3").innerHTML = `La multiplicacion de ${num1} y ${num2} es ${suma}`
    console.log("Multiplicar")
}

document.getElementById("btnSumar").addEventListener("click", Sumar);
document.getElementById("btnRestar").addEventListener("click", Restar);
document.getElementById("btnDividir").addEventListener("click", Dividir);
document.getElementById("btnMultiplicar").addEventListener("click", Multiplicar);



