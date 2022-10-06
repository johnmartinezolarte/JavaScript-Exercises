// EXERCISE 1


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

