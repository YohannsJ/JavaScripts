# Ciclos

## For in of en JavaScript

for in es un ciclo que recorre un objeto y devuelve una propiedad por cada iteracion.

```js
let lista = [10,2,30,40,5]

for(indice in lista){
    console.log(indice)
    //imprime 0,1,2,3,4
    console.log(lista[indice])
    //imprime 10,2,30,40,5
}

for(indice of lista){
    console.log(indice)
    //imprime 10,2,30,40,5
}

```