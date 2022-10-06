/* EXERCISE 1*/


let slcBox=document.getElementById('colors');

function changeColor(){
    /* let slcBox=document.getElementById('colors'); */ /* para cuando sea llamada desde el HTML*/

    document.getElementById('number').value=slcBox.selectedIndex;

    document.getElementById('text1').value=slcBox.options[slcBox.selectedIndex].text;

    document.getElementById('text2').value=slcBox.options[slcBox.selectedIndex].value;
    /* document.getElementById('text2').value=slcBox.value; */

    let paintColor=slcBox.options[slcBox.selectedIndex].value;

    document.getElementById('value-color').value=('#'+paintColor);
}

slcBox.addEventListener('change',changeColor);


/* EXERCISE 2*/