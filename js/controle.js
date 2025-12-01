
let contador = 0;
let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('areaLista');

function addTarefa(){

    //PEGAR O VALOR DIGITADO NO INPUT
    let valorInput = input.value;

    //SE NÃO FOR VAZIO, NEM NULO, NEM INDEFINIDO
    if ((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)){

        ++contador;

        let novoItem = `<div id="${contador}" class="item">
            <div onclick="marcarTarefa(${contador})" class="item_icone">
                <span id="icone_${contador}" class="material-symbols-outlined">radio_button_unchecked</span>
            </div>
            <div onclick="marcarTarefa(${contador})" class="item_nome">
                ${valorInput}
            </div>
            <div class="item_botao">
                <button onclick="deletar(${contador})" class="delete"><span class="material-symbols-outlined">delete</span>Deletar</button>
            </div>
        </div>`;

        //ADICIONAR NOVO ITEM NA MAIN NO TOPO DA LISTA
        main.insertAdjacentHTML("afterbegin", novoItem);


        //ZERAR OS CAMPINHOS
        input.value = "";
        input.focus();
    }
}

//PEGAR A TAREFA PELO ID E DELETAR
function deletar(id){
    var tarefa = document.getElementById(id);
    tarefa.remove();
}

function marcarTarefa(id){
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');

    var icone = document.getElementById('icone_' + id);

    if (classe === "item") {

        // marca
        item.classList.add('clicado');
        icone.innerHTML = "check_circle";  // trocar ícone

        // mandar para o final
        item.parentNode.append(item);

    } else {

        // desmarca
        item.classList.remove('clicado');
        icone.innerHTML = "radio_button_unchecked";  // trocar ícone
    }
}

input.addEventListener("keyup", function(event){

    //SE TECLOU ENTER (13) ELE ADICIONA UMA NOVA TAREFA
    if (event.keyCode === 13){
        event.preventDefault();
        btnAdd.click();
    }
});