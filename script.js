const form = document.getElementById ('form');

function validaValor(condition){
    const valorA = document.getElementById("valorA").value;
    const valorB = document.getElementById("valorB").value;

    if (valorB > valorA) {
        return true;
    } else {
        return false;
    }
}

form.addEventListener ('submit', function (event){
    event.preventDefault();

    const validou = validaValor();

    const inputA = document.getElementsByTagName('input')[0];
    const inputB = document.getElementsByTagName('input')[1];
    inputA.value =' ';
    inputB.value =' ';

    if (validou) {
        const successmessage = document.getElementsByTagName('p')[0];
        successmessage.innerHTML = 'O segundo número digitado é maior que o primeiro';
        successmessage.style.display = 'block';
        successmessage.classList.add('success')


    } else {
        const errormessage = document.getElementsByTagName('p')[0];
        errormessage.innerHTML = 'O segundo número digitado é menor que o primeiro';
        errormessage.style.display = 'block';
        errormessage.classList.add('error')
    }
})

const input01 = document.getElementById('valorA');
const input02 = document.getElementById('valorB');
const menssage01 = document.getElementsByTagName('p')[0];
const menssage02 = document.getElementsByTagName('p')[0];

input01.addEventListener('click', function(event){
    menssage01.style.display = 'none';
})

input02.addEventListener('click', function(event){
    menssage02.style.display = 'none';
})