const form = document.getElementById('Add-contact');
const contato = [];
let linhas = ''

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha(){
    const inputNomeContato = document.getElementById('nome');
    const inputNumContato = document.getElementById('telefone');
    if(contato.includes(inputNomeContato.value)){
        alert (`O contato do ${inputNomeContato.value} já foi inserido antes`)
    } else{
        contato.push(inputNomeContato.value);

        let linha = '<tr>';
        linha += `<td> ${inputNomeContato.value} </td>`;
        linha += `<td> ${inputNumContato.value} </td>`;
        linha += `</tr>`;
        
        linhas += linha;
    }

    inputNomeContato.value = '';
    inputNumContato.value = '';
}

function atualizaTabela () {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}