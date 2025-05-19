let listaCompras = [];

function addItem(event) {
    event.preventDefault();
    let nomeItem = document.getElementById('nomeItem').value;
    listaCompras.push(nomeItem);
}

function rmvItem() {

}

function exbLista() {
    let conteudo = '';
    if (listaCompras === 0) {
        conteudo = `<li>Nenhum item adicionado.</li>`
    } else {
        listaCompras.forEach(item, index) => {
            conteudo += `<li> ${item} <button type="button" onclick="remover('${index}')">Apagar</button> </li>`
        }
        
    }


    cntItens();
    addItem();
}

function cntItens() {
    let quantidade_Items = listaCompras.length;
    document.getElementById('quantidade').innerHTML = quantidade_Items;
}