function calcularValor(){

let valorEmDolar = parseFloat(prompt("Informe o valor em dolar?"));
let valorDoDolarDia = parseFloat(prompt("Informe o valor do dolar do dia?"));
   
let valorEmReal = valorEmDolar * valorDoDolarDia;

alert("O Valor convertido é R$ " + valorEmReal.toFixed(2));
}
calcularValor();