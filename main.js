// EXERCISE 1

let slcBox=document.getElementById('colors');
function changeColor(){
    /* let slcBox=document.getElementById('colors'); */ /* para cuando sea llamada desde el HTML*/

    document.getElementById('number').value=slcBox.selectedIndex;
    document.getElementById('text1').value=slcBox.options[slcBox.selectedIndex].text;
    document.getElementById('text2').value=slcBox.options[slcBox.selectedIndex].value;
    /* document.getElementById('text2').value=slcBox.value; */ //Funciona también de esta manera

    let paintColor=slcBox.options[slcBox.selectedIndex].value;
    document.getElementById('value-color').value=('#'+paintColor);
}
slcBox.addEventListener('change',changeColor);


// EXERCISE 2

const btnValidate2=document.getElementById('btnTextArea');
btnValidate2.addEventListener('click', characterControl);
function characterControl(){
    let txtArea=document.getElementById('description');
    if(txtArea.value.length==0){
        alert('Empty text field');
    }else if(txtArea.value.length>50){
        alert('The text must contain a maximum of 50 characters');
    }else{
        alert('Number of characters correct');
    }
}


// EXERCISE 3

const display31=document.getElementById('result3-1');
const display32=document.getElementById('result3-2');
const display33=document.getElementById('result3-3');
const btn31=document.getElementById('validar3-1');
const btn32=document.getElementById('validar3-2');
const btn33=document.getElementById('validar3-3');
let letterPattern1=/^[a-zA-Z]/;
let vocalPattern=/[aeiouAEIOUáéíóú]/;
let txt1='--> El texto comienza con Letra y contiene Vocal <--';
let txt2='--> El texto NO comienza con Letra o NO contiene Vocal <--';
function validateLetters(){
    let letter=document.getElementById('text3-1').value;
    if(letterPattern1.test(letter) && vocalPattern.test(letter)){
        display31.innerHTML=txt1;
    }else{
        display31.innerHTML=txt2;
    }
}
btn31.addEventListener('click', validateLetters);
let letterPattern2=/^[a-zA-Z0-9]*$/;
let numberPattern1=/[0-9]{1}/;
let txt3='--> El texto solo contiene caracteres alfanuméricos y posee 6 caracteres o más <--';
let txt4='--> El texto NO solo contiene caracteres alfanuméricos ó NO posee 6 caracteres o más <--';
function validateLettersNumbers(){
    let letterNumber=document.getElementById('text3-2').value;
    if(letterPattern2.test(letterNumber) && numberPattern1.test(letterNumber) && letterNumber.length>5){
        display32.innerHTML=txt3;
    }else{
        display32.innerHTML=txt4;
    }
}
btn32.addEventListener('click', validateLettersNumbers);
let numberPattern2=/^607\d{7}$/;
let txt5='--> El número inicia con 607 y contiene 10 digitos <--';
let txt6='--> El número NO inicia con 607 ó NO contiene 10 digitos <--';
function validateNumbers(){
    let numbers=document.getElementById('text3-3').value;
    if(numberPattern2.test(numbers)){
        display33.innerHTML=txt5
    }else{
        display33.innerHTML=txt6;
    }
}
btn33.addEventListener('click', validateNumbers);


// validación para entrada de números decimales: /^[0-9]+\.?[0-9]*$/
// comprobar si una cadena es un número escribiremos: /^\d$/


// EXERCISE 4

// teclaPres.addEventListener("keypress", function(){
//     alert("Tecleado");
// })

// Ejemplo 2: El siguiente ejemplo muestra el código del carácter que ingreso en la caja de texto
// teclaPres.addEventListener("keypress", function(evento){
//     document.getElementById("rtaTeclado").innerHTML=evento.keyCode;
// })

let teclaPres = document.getElementById("text4-1");
let resultado = document.getElementById("result4");

window.addEventListener("keypress", function(evento){
    if(evento.keyCode == 13){
        resultado.innerHTML = teclaPres.value
    }
})

const fnCaracteres = ()=>{
    let cantidadCar = document.getElementById("text4-2").value.length;
    let disponibles = 50 -parseInt(cantidadCar);
    document.getElementById("cantidad").innerHTML = disponibles;
}

document.getElementById("text4-2").addEventListener("keyup",fnCaracteres);


// EXERCISE 5

const tag=parameter=>document.getElementById(parameter);
const first=tag('first');
const second=tag('second');
const third=tag('third');
const fourth=tag('fourth');
first.addEventListener('click', ()=>{ muestra('first')})
second.addEventListener('click', ()=>{ muestra('second')})
third.addEventListener('click', ()=>{ muestra('third')})
fourth.addEventListener('click', ()=>{ muestra('fourth')})
function muestra(num){
    let imagen=document.images[num].src;
    let grande=document.images['big'];
    grande.src=imagen;
}


// EXERCISE 6

let contenedor=document.getElementById('copia');
function fnCrear(){
    if(contenedor.textContent===''){
        const nuevoElemento=document.createElement('p');
        const newtext=document.createTextNode('Insertando nuevo texto - coex');
        nuevoElemento.appendChild(newtext);
        nuevoElemento.setAttribute('id','nuevoTexto');
        contenedor.appendChild(nuevoElemento);
    }
}
function copiar(){
    if(contenedor.textContent!==''){
        let copiarNodo= document.getElementById('nuevoTexto');
        let copia=copiarNodo.cloneNode(true);
        contenedor.appendChild(copia);
    }
}
function eliminar(){
    if(contenedor.textContent!==''){
        let eliminarNodo= document.getElementById('nuevoTexto');
        eliminarNodo.parentNode.removeChild(eliminarNodo);
    }
}
let btneliminar=document.getElementById('eliminar');
btneliminar.addEventListener('click', eliminar);
let btncopiar=document.getElementById('duplicar');
btncopiar.addEventListener('click', copiar);
let btncrear=document.getElementById('crear');
btncrear.addEventListener('click', fnCrear);


// EXERCISE 7

let listaElementos =document.querySelector('#elementos');
let form=document.querySelector('#frmLista');
form.addEventListener('submit', fnAgregarElementos);

listaElementos.addEventListener('click', fnEliminarElementos);

function fnAgregarElementos(evento){
    evento.preventDefault();
    let newElement=document.getElementById('txtElemento').value;

    let li=document.createElement('li');
    let btnDelete=document.createElement('button');
    li.className='list-group-item';
    btnDelete.className='btn btn-light btn-outline-danger btn-sm float-end delete';
    li.appendChild(document.createTextNode(newElement));
    btnDelete.appendChild(document.createTextNode('X'));

    listaElementos.appendChild(li);
    li.appendChild(btnDelete)
}

function fnEliminarElementos(evento){
    if(evento.target.classList.contains('delete')){
        if(confirm('¿Esta seguro de eliminar elemento?')){
            let li=evento.target.parentElement;
            listaElementos.removeChild(li);
        }
    }
}