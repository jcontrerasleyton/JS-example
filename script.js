// Try edit message
const data = {
    message: 'Hello world',
    name: 'Jean Luis',
    altura: 150,
    edad: 24,
}
  
//$('#msg').html(data.message)

var datos = document.getElementById("msg")

datos.innerHTML = `
    <h1>Mensaje: ${data.message}</h1>
    <h1>Nombre: ${data.name}</h1>
    <h1>Mido: ${data.altura} cm</h1>
`;


if(data.altura >= 175){
    datos.innerHTML += '<h1>Eres una persona alta</h1>'
}else datos.innerHTML += '<h1>Eres una persona bajita</h1>'


function Show(ciudad, edad){
    var dat = document.getElementById("msg2")

    dat.innerHTML = `
        Vivo en ${ciudad} y tengo ${edad} años <br/>
    ` 
    for(var i = 0; i <= edad; i++){
        dat.innerHTML += '-'+i
    }
}

Show("La Florida","26")

var nombres = ['Javiera', 'Camila', 'Macarena']

console.log(data)
console.log(nombres)

for(var i = 0; i < nombres.length; i++){
    document.write(nombres[i]+' ')
}

function sh(edad){
    if(edad >= 18){
        msg = '<h1>Eres un adulto</h1>'
    }else msg = '<h1>Eres un niño</h1>'
    
    return msg
}

function imprimir(edad){
    document.write(sh(edad))
}

imprimir(data.edad);