class Tarefa  {
    #elemento = [];
    #ul;

    constructor(){
        this.#ul = document.querySelector(".container");
        this.#elemento = this.#elemento
    }

    pegarValor(){
        const input = document.querySelector(".campo-adicionar");
        const valor = input.value;

        
        if(valor){
            this.adicionar(valor);
            this.criarView();
            this.limparCampo(valor, input);
        }else {
            this.validaCampo(valor);
        }
    }

    adicionar(input){
        this.#elemento.push({itemTarefa: input});
    }

    criarView(){
        this.buscaUl.innerHTML = ""
        this.buscaElemento.forEach((itemElemento, indexElemento) => {
            this.buscaUl.innerHTML += `
                <li>
                    <div class="lista">
                        <img class="logo-concluir" src="/assets/img/verificar.png" onClick="concluir()" alt="logo-concluir">
                        <span>${itemElemento.itemTarefa}</span>
                    </div>
                    <img class="logo-excluir" src="/assets/img/excluir.png" onClick="excluir(${indexElemento})" alt="logo-excluir">
                </li>
            `
        })
    }

    validaCampo(valor){
       if(valor == ""){
            alert("O campo deve ser preenchido!");
       }
    }

    get buscaUl(){
        return this.#ul;
    }

    set buscaUl(lista){
        return this.#ul = lista;
    }

    get buscaElemento(){
        return this.#elemento;
    }

    set buscaElemento(novoElemento){
        return this.#elemento = novoElemento;
    }


    limparCampo(valor,input){
        if(valor){
            input.value = ""
        }
    }
}

const tarefa = new Tarefa();
console.log(tarefa);

const form = document.querySelector(".form");
form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    tarefa.criarView();
    tarefa.pegarValor();
})

function excluir(posicao){
    tarefa.buscaElemento.splice(posicao, 1);
    console.log(tarefa.buscaElemento)
    tarefa.criarView()
}