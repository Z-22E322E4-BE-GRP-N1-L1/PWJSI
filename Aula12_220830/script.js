
const navioX = Math.ceil(Math.random() * 9);
const navioY = Math.ceil(Math.random() * 9);

function atirar() {
  const tiroX = +prompt("Tiro: Posição X");
  const tiroY = +prompt("Tiro: Posição Y");
  
  const validaX = navioX == tiroX;
  const validaY = navioY == tiroY;
  const sair = tiroX == tiroY && tiroY == 0;
  
  if (sair) {
    console.log("Até!");
  } else if (validaX && validaY) {
    console.log("Destruído.");
  } else {
    // if (validaX || validaY) alert("Está próximo");
    // else alert("Errou");

    if (tiroX > navioX) alert("Tente mais para o Oeste.");
    else if (tiroX < navioX) alert("Tente mais para o Leste.");

    if (tiroY > navioY) alert("Tente mais para o Sul.");
    else if (tiroY < navioY) alert("Tente mais para o Norte.");
    atirar();
  }
  console.log(navioX, navioY, " - ", tiroX, tiroY);
}

atirar();
// let palpite;
// const numeroSorteado = Math.ceil(Math.random()*10);

// Declarando.
// function pegarPalpite() {
//   palpite = +prompt("Infrme um número:");
//   if (numeroSorteado == palpite)
//     console.log("Acertou! " + palpite + " " + numeroSorteado);
//   else {
//     if (numeroSorteado > palpite) {
//       alert("Informe um maior.");
//     } else if (numeroSorteado < palpite){
//       alert("Informe um menor.");
//     }
//     pegarPalpite();
//   }
// }

// pegarPalpite();

// const hoje = new Date();
// const diaSemana = hoje.getDay();
// // console.log(diaSemana);
// switch(diaSemana) {
//   case 1: console.log("Seg."); break;
//   case 2: console.log("Ter."); break;
//   case 3: console.log("Qua."); break;
//   case 4: console.log("Qui."); break;
//   case 5: console.log("Sex."); break;
//   case 6: console.log("Sab."); break;
//   case 7: console.log("Dom."); break;
//   default: console.log("Desconhecido.");
// }

// const opndA = +prompt("Operando A");
// const opndB = +prompt("Operando B");

// NaN = false
// const validaOpA = opndA == 0 || opndA;
// const validaOpB = opndB == 0 || opndB;
    
// false && false
// if (opndA && opndB)

// if (validaOpA && validaOpB) {
//   const operador = prompt("Operador");
//   let operacao = "";
//   let resultado = 0;
//   switch(operador) {
//     case "+" :
//       operacao = "Soma";
//       resultado = opndA + opndB;
//       break;
//     case "-" :
//       operacao = "Subtração";
//       resultado = opndA - opndB;
//       break;
//     case "*" :
//       operacao = "Multiplicação";
//       resultado = opndA * opndB;
//       break;
//     case "/" :
//       operacao = "Divisão";
//       resultado = opndA / opndB;
//       break;
//   }
//   console.log(operacao, opndA, operador, opndB, resultado);
// } else {
//   console.log("Informe números válidos.");
// }

// Math.random
// Math.floor

// Operadores Lógicos

// Conjunção - E    - and
// &&
// if (true && true && false){

// }

// if (true || false || true) {

// }
// const nome = prompt("Informe o seu nome.");
// const idade = +prompt("Informe a sua idade.");
// console.log(idade);
// console.log(typeof idade);
// const validaNome = nome.length > 3;
// const validaIdade = typeof idade == "number" && idade > 0;

// if (validaNome && validaIdade)
//   console.log(`${nome}, acesso permitido.`);
// else 
//   console.log(`Dados inválidos.`);

// temp < 100 && temp > 0

// const temp = +prompt("Temp ºC");

// if (temp >= 100) console.log("Vapor");
// else if (temp < 100 && temp > 0) console.log("Líguido");
// else console.log("Sólido");

// Disjunção - Ou   - or
// || 

// const idade = +prompt("Idade");

// if (idade >= 70 || (idade < 18 && idade >= 16))
//   console.log("Voto Facultativo.");
// else
//   console.log("Voto Obrigatório.");

// Negação   - Não  - not
// const booleano = false; // !
// if (!booleano){ // se booleano == false
//   console.log("Falso");
// }

// if (booleano){ // se booleano == true
//   console.log("Verdadeiro");
// }
