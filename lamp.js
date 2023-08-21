// as variáveis são criadas e a elas atribuído o query selector que vai pegar o selementos pelo id
//tendo isso em mente, as funções lampOn e lampOff são criadas e a elas atribuímos o addEventListener que vai executar as funções
// ao clicarmos nos botões 

const turnOn = document.getElementById('turnOn')
const turnOff = document.getElementById('turnOff')
const lamp = document.getElementById('lamp')

function lampOn (){
    lamp.src = './img/terry2.gif'
}

function lampOff(){
    lamp.src = './img/terry.gif'
}

turnOn.addEventListener('click', lampOn)
turnOff.addEventListener('click', lampOff)
lamp.addEventListener( 'mouseover', lampOn)
lamp.addEventListener( 'mouseleave', lampOff)

//adicionamos o addEventListener mouseover e mouseleave, que respectivamente chama a função ao colocar o mouse por cima e tirar.
