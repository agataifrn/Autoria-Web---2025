let listaProdutos = [];

function gravarProduto() {
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

    listaProdutos.push(produto);
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
                </tr>
            `;
        })
    }
    document.getElementById("conteudo").innerHTML = conteudo;
}