# JavaScript

## Tipos de datos
 
#### Primitivos

* Number
* String
* Boolean
* Undefined
* bigInt
* Symbol
* Null (Con typeof da tipo object, pero es error de js)


#### Object:

* {}
* []
* new Map()

#### Function:
* function ( ){ }
  
Diferencias entre los tipos de datos primitivos y los tipo object:

Los primitivos se pasan por valor y los object se pasan por referencias (Como si fueran punteros en C).

Los primitivos son inmutables, los object son mutables.

* Inmutable = _Que no puede ser cambiado o alterado._

Los primitivos se comparan por valor, los object se comparan por referencia.
```javascript
1 == 1 // true
null == undefined // true
{} == {} // false

```

### Lenguajes dinamicos y estaticos
    
Cambia los tipos de datos en ejecucion
por ej.
```js
//JavaScript
let string = "HolaMundo"
typeof(string) //string
string = 3
typeof(string) //number
```
Caso contrario son los lenguajes estaticos. 


```c
//C
char* string= "Hola Mundo";
printf(typeof(string)); //char*
string = 15; //Error

```
```py
#python
string = "Hola Mundo"
type(string) #<class 'str'>
string = 3
type(string) #<class 'int'>
``` 

### Tipado fuerte y debil

Python es un lenguaje dinamico pero de tipado fuerte, es decir, que no se puede hacer una operación entre dos tipos de datos incompatibles, por ej.
```py
a = 5
b = "7"
print(a + b)  # ¡Error!
```

JavaScript es un lenguaje dinamico y de tipado debil, es decir que se puede asignar un tipo de dato a una variable que no es del mismo tipo y ademas se puede hacer una operación de dos tipos de datos incompatibles.
por ej.
```js   
string = "Hola Mundo";
typeof(string); //string
b = 7;
console.log(string + b); //Hola Mundo7
```

Typescript es un lenguaje estatico y fuerte, es decir que no se puede asignar un tipo de dato a una variable que no es del mismo tipo ni hacer operaciones aritmeticas con ellos.


Especificion de JavaScript 

[Bibliografia de javaScript](https://tc39.es/ecma262/)

[Documentación de JavaScript W3schools](https://www.w3schools.com/js/js_datatypes.asp)

[Documentación mozilla de JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)

[Documentación oficial de TypeScript](https://www.typescriptlang.org/docs/home.html)

[Documentación oficial de C](https://www.cprogramming.com/tutorial/c_data_types.html)

[Documentación oficial de C++](https://www.tutorialspoint.com/cplusplus/cpp_data_types.htm)	

[Documentación de pyton](https://docs.python.org/3/tutorial/index.html)



![JavaScript](https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png)

