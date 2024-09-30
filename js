const form = document.getElementById('form-atividade');
const imgAprovado = '<img src= "./images/aprovado.png" alt="Emoji celebrando" />';
const imgReprovado = '<img src= "./images/rerovado.png" alt="Emoji decepcionado" />';
const atividades  = [];
const notas = [];
 
let linhas = '';

form.addEventListener('submit',function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizarMediaFinal();
}); 



function  adicionaLinha(){  

const inputNomeAtividade = document.getElementById('nome-atividade');
const inputNotaAtividade = document.getElementById('nota-atividade');

atividades.push(inputNomeAtividade.value);
notas.push(inputNotaAtividade.value); 

let linhas = '';
let linha = '<tr>';
linha += <td>${inputNomeAtividade.value} </td>;  
linha += <td>${inputNotaAtividade.value}</td>;
linha += <td>${inputNotaAtividade.value >= 7? "Aprovado": "Reprovado"}</td>;
linha += <tr>;



function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

}

function atualizarMediaFinal (){
    console.log(atividades);
    console.log(notas);
    }
    
