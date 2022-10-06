// EXERCISE 1

/* let slcBox=document.getElementById('colors');

function changeColor(){ */
    /* let slcBox=document.getElementById('colors'); */ /* para cuando sea llamada desde el HTML*/

/*     document.getElementById('number').value=slcBox.selectedIndex;

    document.getElementById('text1').value=slcBox.options[slcBox.selectedIndex].text;

    document.getElementById('text2').value=slcBox.options[slcBox.selectedIndex].value; */
    /* document.getElementById('text2').value=slcBox.value; */

 /*    let paintColor=slcBox.options[slcBox.selectedIndex].value;

    document.getElementById('value-color').value=('#'+paintColor);
}

slcBox.addEventListener('change',changeColor); */


// EXERCISE 2

/* const btnValidate2=document.getElementById('btnTextArea');

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
} */


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
let txt2='-->El texto NO comienza con Letra o NO contiene Vocal <--';

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
let numberPattern=/[0-9]{1}/;
let txt3='--> El texto comienza con Letra y contiene Vocal <--';
let txt4='-->El texto NO comienza con Letra o NO contiene Vocal <--';
