const form = document.getElementById('form-comparador');

function comparaValores(valorA, valorB) {
    return valorB > valorA;
}

form.addEventListener('submit', function(e) {
    let formValid
    e.preventDefault();

const valorA = document.getElementById('campoA').value;
const valorB = document.getElementById('campoB').value;
const menssagemSucesso = `É válido, o valor B: ${valorB} é maior que o valor A:  ${valorA}`;   

    formValid = comparaValores(valorA, valorB)
    if (formValid) {
        alert(menssagemSucesso);
    
    valorA.value = '';
    valorB.value = '';
    
    } else if (valorB == valorA) {
        alert("Não é válido pois B é igual A");
    } else {
        alert("Não é válido pois A é maior que B")
    } 
})

console.log(form);

