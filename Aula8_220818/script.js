// Controles de Fluxo
// Controles condicionais
// Controles de repetição

// SE (IF)
// se (condicao) { 
//  códigos
// }

const salario = prompt("Salário:");
const dep = prompt("Dependentes:");

let salarioNovo = salario * 1.1;
const temDep = dep > 0;
if (temDep) salarioNovo += 300.0;

// if (temDep) //{ // if (dep > 0){
//   salarioNovo += 300.0;
// // }

console.log("Novo Salário: ", salarioNovo);

// if (0) {
//   console.log("Zero é True");
// }
// const ehAdmin = true;
// if (ehAdmin == true) {
//   console.log("Olá, Admin!");
// }

// console.log("Fim do programa.");


// const nota1 = +prompt("Informe uma nota:");
// const nota2 = +prompt("Informe uma nota:");
// const nota3 = +prompt("Informe uma nota:");
// const nota4 = +prompt("Informe uma nota:");

// const somatorio = nota1 + nota2 + nota3 + nota4;
// const media = somatorio / 4;

// const aprovado = media >= 7;

// console.log("Média    :\t", media);
// console.log("Aprovado :\t", aprovado);

// let chaveDeAutenticacao = 8231823828312838123;
// //...
// chaveDeAutenticacao = "sdasdasd989988asd";

// Operadores de comparação
// menor que
// <

// menor ou igual
// <=

// const numeroA = 100;
// const numeroB = 100;
// const menor = numeroA <= numeroB;
// console.log(`${numeroA} <= ${numeroB}: ${menor}`);


// const numeroA = 10;
// const numeroB = 1;
// const menor = numeroA < numeroB;
// console.log(`${numeroA} < ${numeroB}: ${menor}`);
// console.log(`numeroA < numeroB: menor`);
// Operadores de comparação
// maior que
// >

// maior ou igual
// >=

// const numeroA = 10;
// const numeroB = 10;
// const maior = numeroA >= numeroB;
// console.log(`${numeroA} >= ${numeroB}: ${maior}`);

// const idade = prompt("Informe a sua idade:");
// const ehMaiorDeIdade = idade > 17;
// console.log("Idade: ", idade);
// console.log("Maior de idade: ", ehMaiorDeIdade);

// const numeroA = "Nikola";
// const numeroB = "Tesla";
// const maior = numeroA > numeroB;
// console.log(`${numeroA} > ${numeroB}: ${maior}`);


// Operadores de comparação
// diferença
// !=

// const numeroA = 10;
// const numeroB = "10";
// const diferenca = numeroA !== numeroB;
// console.log(`${numeroA} != ${numeroB}: ${diferenca}`);

// let aposta = prompt("Aposte em um número (1-6):");
// let resultado = Math.random();         // 0 - 1
// resultado *= 6;                         // 0 - 5
// resultado = Math.floor(resultado) + 1; // 1 - 6

// 10.5
// 10.4

// const acertou = aposta === resultado;

// console.log("Aposta    :\t", aposta);
// console.log("Resultado :\t", resultado);
// console.log("Acertou   :\t", acertou);
// aposta = parseInt(aposta);
// console.log(aposta);
// Operadores de comparação
// igualdade

// = atribuição
// 10 = 20 
//let corR = 0;
// == 

// const numeroA = 10;
// const numeroB = "10";
// const igualdade = numeroA === numeroB;
// console.log(`${numeroA} = ${numeroB}: ${igualdade}`);
//console.log(numeroA + " = " + numeroB + ":" + igualdade);

// let corR = 0;
// let corG = 0;
// let corB = 0;

// function addR(){
//   corR += 10;
//   document.body.style.background = `rgb(${corR},${corG},${corB})`;
// }

// function subR(){
//   corR -= 10;
//   document.body.style.background = `rgb(${corR},${corG},${corB})`;
// }

// function addG(){
//   corG += 10;
//   document.body.style.background = `rgb(${corR},${corG},${corB})`;
// }

// function subG(){
//   corG -= 10;
//   document.body.style.background = `rgb(${corR},${corG},${corB})`;
// }

// function addB(){
//   corB += 10;
//   document.body.style.background = `rgb(${corR},${corG},${corB})`;
// }

// function subB(){
//   corB -= 10;
//   document.body.style.background = `rgb(${corR},${corG},${corB})`;
// }

// const cotacaoDolar = 5.15;
// const cotacaoEuro = 5.23;
// const cotacaoLibra = 6.30;
// const cotacaoPesoA = 0.040;

// const saldo = prompt("Informe o seu saldo (R$):");

// const saldoDolar = saldo / cotacaoDolar;
// const saldoEuro = saldo / cotacaoEuro;
// const saldoLibra = saldo / cotacaoLibra;
// const saldoPesoA = saldo / cotacaoPesoA;

// console.log(`Saldo R$: \t${saldo}`);
// console.log(`Saldo Dolar: \t${saldoDolar.toFixed(3)}`);
// console.log(`Saldo Euro: \t${saldoEuro.toFixed(3)}`);
// console.log(`Saldo Libra: \t${saldoLibra.toFixed(3)}`);
// console.log(`Saldo Peso A.: \t${saldoPesoA.toFixed(3)}`);

// const combInicial = prompt("Quantidade inicial (l):");
// const combFinal = prompt("Quantidade final (l):");
// const distancia = prompt("Distância percorrida (km):");
// const valorCombustivel = prompt("Valor do combustível (R$/l):");

// const combGasto = combInicial - combFinal;
// const consumo = distancia / combGasto;

// const valorGasto = consumo * valorCombustivel;

// console.log(`Consumo médio:\t${consumo} (km/l)`);
// console.log(`Valor gasto:\tR$ ${valorGasto}`);

// R$, R$/l -> litros 
// const valorDisponivel = prompt("Valor disponível (R$):");
// const valorCombustivel = prompt("Valor do combustível (R$/l):");

// valor <- regex "," -> "."
// valor .{2}

// const quantLitros = valorDisponivel / valorCombustivel;

// console.log(`Val Disp.:\tR$ ${valorDisponivel}`);
// console.log(`Valor do combustível em R$/l:\tR$ ${valorCombustivel}`);
// console.log(`Quant.:\t${quantLitros} l`);
// c -> f
// let tempCelsiusStr = prompt("Informe a temp ºC:");
// const tempCelsius = Number(tempCelsiusStr);
// const tempFahrenheit = (tempCelsius * (9 / 5)) + 32;
// console.log(`${tempCelsius} ºC = ${tempFahrenheit} ºF`)

// const valor = 1.256;
// console.log(valor.toFixed(1));

// const km/h -> m/s (km/s) / 3.6
// const kmPHora = prompt("Informe a velocidade (km/h):");
// const mPSeg = kmPHora / 3.6;
// console.log(`${kmPHora} km/h -> ${mPSeg.toFixed(2)} m/s`);
// console.log(kmPHora + ` km/h -> ` + mPSeg.toFixed(2) + ` m/s`);

// function mudarVermelho(){
//   document.body.style.background = 'red';
// }

// function mudarVerde(){
//   document.body.style.background = 'green';
// }

// function mudarAzul(){
//   document.body.style.background = 'blue';
// }

// let operandoA = prompt("Informe um número:");
// let operandoB = prompt("Informe outro número:");
// operandoA = Number(operandoA);
// operandoB = Number(operandoB);

// function soma() {console.log(operandoA + operandoB); }
// function sub()  {console.log(operandoA - operandoB); }
// function mult() {console.log(operandoA * operandoB); }
// function div()  {console.log(operandoA / operandoB); }


// // let numA = 2;
// // let numB = 2;
// // numA += numB; //numA = numA + numB;
// // console.log(numA);
// // numA -= numB; //numA = numA - numB;
// // console.log(numA);
// // numA *= 4; //numA = numA * 4;
// // console.log(numA);
// // numA /= 4; //numA = numA / 4;
// // console.log(numA);

// // let numA = 2;
// // let numB = 2;
// // let multi = (numA * numB) + 1;
// // console.log(++multi);
// //alert();

// // for (let i = 0; i <= 10; i++){
// // }

// //console.log(numA);

// // let contador = 10; 

// // console.log(contador++); 
// // console.log(++contador); // 12

// // contador++; // contador = contador + 1
// // console.log(contador);
// // contador--; // 10
// // console.log(contador);
// // ++contador; // 11
// // console.log(contador);




// // let nota1 = 9.0;
// // let peso1 = 1;
// // let nota2 = 9.0;
// // let peso2 = 2;
// // let nota3 = 7.0;
// // let peso3 = 3;
// // let nota4 = 7.0;
// // let peso4 = 4;
// // let soma = (nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3) + (nota4 * peso4);
// // let media = soma / (peso1 + peso2 + peso3 + peso4);

// // console.log("Passou: ", media >= 7);

// // if (media >= 7.0){

// // }
// // let media = soma / 4;
// // console.log(media);
// // Math.sqrt(100);
// // let raiz = 100 ** 0.5

// // // soma +
// // let numA = 10;
// // let numB = 90;
// // let soma = numA + numB;
// // console.log(soma);

// // // Subtração
// // let numC = 10;
// // let numD = 34;
// // let sub = numC - numD;
// // console.log(sub);

// // // multiplicação
// // let multi = numA * numC;
// // let exp = numA ** 2;
// // console.log("Multi:", multi);
// // console.log("Exp:", exp);

// // // divisão
// // let div = numB / numC;
// // let res = numD % numC;
// // console.log("Div:", div);
// // console.log("Res:", res)





// // let numeroDoJogador;
// // let numeroSorteado;

// // numeroDoJogador = prompt("Escolha um número de 1 a 6:");
// // // Math
// // const numRandomico = Math.random() * 6; // [0:6[
// // numeroSorteado = Math.floor(numRandomico) + 1; 

// // console.log(`Número apostado: ${numeroDoJogador}\nNúmero Sorteado: ${numeroSorteado}`)
// // // let nome = "Nikola";

// // let idade = 89;
// // console.log(typeof idade);

// // idade = "89";
// // console.log(typeof idade);

// // idade = 89.5;
// // console.log(typeof idade);

// // let ehAdmin = false; // Booleano true ou false
// // let ehVip = true; // Booleano true ou false
// // console.log(typeof ehAdmin);

// // let nada = null; // nulo
// // console.log(typeof nada);

// // let qualquer;
// // // qualquer = null;
// // console.log(`Tem: ${qualquer}`);
// // console.log(`É: ${typeof qualquer}`);

// // const nula = null;

// // nome = prompt("Informe o seu nome:"); // String
// // idade = prompt("Informe a sua idade:"); // String
// // idade = Number(idade); // Number

// // console.log("Nome: " + nome);
// // console.log(`Nome: ${nome}`);

// // console.log("Nome: " + nome + ", Idade: " + idade);
// // console.log(`Nome: ${nome}, Idade: ${idade}`);
// // let varString = "Nome Completo";
// // varString = 'Nome Completo';
// // varString = `Nome Completo`; // Template String
// // varString = `Nome: ${nome}`;
// // console.log(varString);
// // camelCase / PascalCase
// // salario bruto
// // SalarioBruto // PascalCase
// // salarioBruto // camelCase

// // var, let e const
// //  nomeDaVariavel = 89
// // var nomeDaVariavel = 89;
// // console.log(nomeDaVariavel);
// // var nomeDaVariavel = "Nikola";
// // console.log(nomeDaVariavel);
// // let varComLet = 89;
// // console.log(varComLet);
// // varComLet = "Nikola";
// // console.log(varComLet);
// // varComLet = 90;
// // console.log(varComLet);
// // [var|let|const] nomeDaVariavel [= valor];
// // const varComConst = 90;
// // console.log(varComConst);
// // varComConst = "Thiago";
// // console.log(varComConst);