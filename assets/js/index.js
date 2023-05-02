class Tarefa {
    Valor
    elemento = []


    constructor(Valor,elemento){
        this.Valor = Valor
        this.elemento = elemento
        
    }

   

    pegarValor(){
       return this.elemento.push(this.Valor)
    }

    
}

const botao = document.querySelector('.botao-adicionar')

botao.addEventListener('click', chamar)


function chamar(){
    const input = document.getElementById('adicionar-tarefa').value
    const item = {
        i: input
    }
    const valor = new Tarefa(input, item.i);
    console.log(valor)
    const dados = valor.pegarValor()
    console.log(dados)
}