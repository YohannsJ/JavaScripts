const personas = [
    { nombre: 'Roberto', edad: 20, plata: 1.5 },
    { nombre: 'Pedro', edad: 30, plata: 1.7 },
    { nombre: 'Cofla', edad: 25, plata: 3 }
]
const helados = [
    { nombre: "Palito de helado de agua", valor: 0.6 },
    { nombre: "Palito de helado de crema", valor: 1 },
    { nombre: "Bombón helado marca heladix", valor: 1.6 },
    { nombre: "Bombón helado marca heladovich", valor: 1.7 },
    { nombre: "Bombón helado marca helardo", valor: 1.8 },
    { nombre: "Potecito de helado con confites", valor: 2.9 },
    { nombre: "Pote de 1/4 KG", valor: 2.9 }
]
const boletoLotoria = 1.4;
const texto = document.getElementById("Resultado")

function InfoPersonas(){
    personas.map(persona => {
        console.log(`${persona.nombre} tiene ${persona.edad} años y tiene $${persona.plata} USD`)
    })
}

function CompraHelado(){
    let Respuesta = `<ul>`
    boletosComprados = {cantidad: 0, resto: 0}
    personas.map(persona => {
        if(persona.nombre =="Cofla"){
            if(persona.plata >= boletoLotoria){
                boletosComprados.cantidad = Math.floor(persona.plata/boletoLotoria)
                boletosComprados.resto = persona.plata%boletoLotoria
            }
        }
        let Compra
        Respuesta += "<li>"
        helados.map(helado => {
            if(persona.plata >= helado.valor){
                Compra = { "nombre": helado.nombre, "valor": helado.valor}  
                //            
            }
        })
        Respuesta += `${persona.nombre} tenía $${persona.plata}, compra ${Compra.nombre} que le costó $${Compra.valor}, quedandole $${persona.plata-Compra.valor}`     
        Respuesta += `</li>`
    })
    Respuesta += `</ul>`
    Respuesta += `<br/> Cofla compró ${boletosComprados.cantidad} boletos de loteria y le sobró ${boletosComprados.resto}`
    console.log(personas)

    texto.innerHTML = Respuesta
}

function Rellenar(){
    personas.map(persona => {
        // document.getElementsByName(persona.nombre)[0].placeholder= persona.plata;
        document.getElementsByName(persona.nombre)[0].value=persona.plata;
    })
}

function Calcular(){
    personas.map(persona => {
        persona.plata = document.getElementsByName(persona.nombre)[0].value;
    }
    )
    CompraHelado()
}


InfoPersonas()
CompraHelado()
Rellenar()

document.getElementById("buton").addEventListener("click", Calcular)




