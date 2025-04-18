alert('Boas vindas ao jogo do número secreto');
console.log("Mensagem de inicio exibida");
let numeroSecreto = 100;
console.log(`Numero secreto é `+ numeroSecreto);
let chute = prompt('Escolha um número entre 1 e 10');
console.log(`Usuário escolheu `+ chute);
if (chute == numeroSecreto) {
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto}`);
    console.log(`Isso ai! Você descobriu o número secreto ${numeroSecreto}`);
} else if(chute < numeroSecreto){
    alert('É maior');
    console.log('É maior');
}else {
alert('É menor');
console.log('É menor');
}
