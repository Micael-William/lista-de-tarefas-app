export default class Conteudo  {
    elemento = [];
    ul;

    constructor(){
        this.ul = document.querySelector(".container");
        this.elemento = this.elemento;
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
        this.elemento.push({itemTarefa: input});
    }

    criarView(){
        this.ul.innerHTML = ""
        this.elemento.forEach((i, index) => {
            this.ul.innerHTML += `
                <li>
                    <div class="lista">
                        <img class="logo-concluir" src="/assets/img/verificar.png" onClick="concluir()" alt="logo-concluir">
                        <span>${i.itemTarefa}</span>
                    </div>
                    <img class="logo-excluir" src="/assets/img/excluir (1).png" onClick="excluir(${index})" alt="logo-excluir">
                </li>
            `
        })
    }

    validaCampo(valor){
       if(valor == ""){
            alert("O campo deve ser preenchido!");
       }
    }

    // excluir(posicao){
    //     conteudo.elemento.splice(posicao, 1);
    // }

    limparCampo(valor,input){
        if(valor){
            input.value = ""
        }
    }
}

const conteudo = new Conteudo();
console.log(conteudo.elemento);

const form = document.querySelector(".form");
form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    conteudo.criarView();
    conteudo.pegarValor();
})

function excluir(posicao){
    const verifica = conteudo.elemento.splice(posicao, 1);
    conteudo.criarView();
}
