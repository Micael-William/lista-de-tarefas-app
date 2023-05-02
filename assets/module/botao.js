export class Botao {
    evento

    constructor(evento){
        this.evento = evento
    }
}


renderizar() {

    const div = document.querySelector('.container')
    div.innerHTML += `
            <ul>
                <li>
                    <div class="campo-tarefa">
                        <img class="logo-concluir" src="/assets/img/verificar.png" alt="logo-concluir">
                        <span>${item}</span>
                    </div>
                    <img class="logo-excluir" src="/assets/img/excluir (1).png" alt="">
                </li>
                <li>
                    <div class="campo-tarefa">
                        <img class="logo-concluir" src="/assets/img/verificar.png" alt="logo-concluir">
                        <span>${item}</span>
                    </div>
                    <img class="logo-excluir" src="/assets/img/excluir (1).png" alt="">
                </li>
                <li>
                    <div class="campo-tarefa">
                        <img class="logo-concluir" src="/assets/img/verificar.png" alt="logo-concluir">
                        <span>${item}</span>
                    </div>
                    <img class="logo-excluir" src="/assets/img/excluir (1).png" alt="">
                </li>
            </ul>
    `
    return div
}