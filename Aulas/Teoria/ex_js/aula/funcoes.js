let listaProdutos = [];
let emAlteracao = false;
let indiceElementoAlteracao = -1;

function gravarProduto(event) {
    event.preventDefault();
    let nomeProduto = document.getElementById("nomeProdutos").value;
    let qntdEstoque = document.getElementById("qntdEstoque").value;
    let valorUnitario = document.getElementById("valorUnitario").value;
    let fornecedor = document.getElementById("fornecedor").value;

    let produto = {
        nomeProduto: nomeProduto, 
        qntdEstoque: qntdEstoque,
        valorUnitario: valorUnitario,
        fornecedor: fornecedor
    }
    // Criou a classe no propio js

    if (emAlteracao) {
        listaProdutos[indiceElementoAlteracao] = produto;
    } else {    
        listaProdutos.push(produto);
    }

    limpar();
    listarProdutos();

}

function listarProdutos() {
    let conteudo = '';
    if (listaProdutos.length === 0) {
        conteudo = `
            <tr>
                <td colspan="7">Nenhum produto cadastrado até o momento</td>
            </tr>
            `;
    } else {
        listaProdutos.forEach((produto, indice) => {
            conteudo += `
                <tr>
                    <td>${indice}</td>
                    <td>${produto.nomeProduto}</td>
                    <td>${produto.qntdEstoque}</td>
                    <td>${produto.valorUnitario}</td>
                    <td>${produto.fornecedor}</td>
                    <td><button type="button" onclick="botaoAlterar(${indice})">Alterar</button></td>
                    <td><button type="button" onclick="botaoExcluir(${indice})">Excluir</button></td>
                </tr>
            `;
        })
    }
    document.getElementById("conteudo").innerHTML = conteudo;
}

function botaoExcluir(indice) {
    if (confirm(`Deseja realmente excluir este produto? (Produto #${indice})`)) {
            listaProdutos.splice(indice,1);
    listarProdutos();
    }

}

function botaoAlterar(indice) {
    emAlteracao = true;
    indiceElementoAlteracao = indice;
    document.getElementById('nomeProdutos').value = listaProdutos[indice].nomeProduto;
    document.getElementById('qntdEstoque').value = listaProdutos[indice].qntdEstoque;
    document.getElementById('valorUnitario').value = listaProdutos[indice].valorUnitario;
    document.getElementById('fornecedor').value = listaProdutos[indice].fornecedor;
}

function limpar() {
    document.getElementById('meuForm').reset();
    emAlteracao = false;
}