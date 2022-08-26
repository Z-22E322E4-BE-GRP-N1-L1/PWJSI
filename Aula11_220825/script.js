// Operadores Lógicos

// Conjunção - E    - and
// &&

const nome = prompt("Informe o seu nome.");
const idade = +prompt("Informe a sua idade.");
// console.log(idade);
// console.log(typeof idade);
const validaNome = nome.length > 3;
const validaIdade = typeof idade == "number" && idade > 0;

if (validaNome && validaIdade)
  console.log(`${nome}, acesso permitido.`);
else 
  console.log(`Dados inválidos.`);

// temp < 100 && temp > 0

// const temp = +prompt("Temp ºC");

// if (temp >= 100) console.log("Vapor");
// else if (temp < 100 && temp > 0) console.log("Líguido");
// else console.log("Sólido");

// Disjunção - Ou   - or
// || 

const idade = +prompt("Idade");

if (idade >= 70 || (idade < 18 && idade >= 16))
  console.log("Voto Facultativo.");
else
  console.log("Voto Obrigatório.");

// Negação   - Não  - not

// switch

// let soma = 0;
// soma = (soma + 1)++;
// soma++;

// const telefonou = confirm("Telefonou para a vítima?");
// const local = confirm("Esteve no local do crime?");
// const mora = confirm("Mora perto da vítima?");
// const devia = confirm("Devia para a vítima?");
// const trabalhou = confirm("Já trabalhou com a vítima?");
// let classificacao = 0;
// if (telefonou) classificacao++;
// if (local) {
//   // classificacao += 2;
//   classificacao++; // soma mais 1
//   // classificacao += 1; // soma mais x
//   // classificacao = classificacao + 1;
// } // classificacao = classificacao + 1
// if (mora) classificacao++;
// if (devia) classificacao++;
// if (trabalhou) classificacao++;
// console.log(classificacao);
// switch (classificacao) {
//   case 0: console.log("Inocente"); break;
//   case 1: case 2: console.log("Suspeito"); break;
//   case 3: case 4: console.log("Cúmplice"); break;
//   case 5: console.log("Assassino"); break;
//   default: console.log("Estudar o caso.");
// }

// let msgInput = "Precisando torcar o pneu?\n";
// msgInput += "Em qual etapa você parou?";
// // msgInput = msgInput + "Em qual etapa você parou?";
// const etapa = +prompt(msgInput);

// switch (etapa) {
//   case 1: console.log("Estacione.");
//   case 2: console.log("Sinalize.");
//   case 3: console.log("Posicione o macaco.");
//   case 4: console.log("Levane o veículo.");
//   case 5: console.log("Desparafuse o pneu.");
//   case 6: console.log("Troque o pneu.");
//   case 7: console.log("Parafuse o pneu.");
//   case 8: console.log("Desça o veículo.");
//   default: console.log("Siga a Viagem.");
// } 

// console.log("Fim do programa.");

// const mes = prompt("Informe o número do mês:");

// // switch (mes) {
// //   case "1": console.log("Jan."); break;
// //   case "2": console.log("Fev."); break;
// //   case "3": console.log("Mar."); break;
// //   case "4": console.log("Abr."); break;
// //   case "5": console.log("Mai."); break;
// //   case "6": console.log("Jun."); break;
// //   case "7": console.log("Jul."); break;
// //   case "8": console.log("Ago."); break;
// //   case "9": console.log("Set."); break;
// //   case "10": console.log("Out."); break;
// //   case "11": console.log("Nov."); break;
// //   case "12": console.log("Dez."); break;
// //   default: console.log("Mês inválido.");
// // } 

// console.log("Fim do programa.");

// if (mes == 1) console.log("Janeiro");
// else if (mes == 2) console.log("Fevereiro");
// else if (mes == 3) console.log("Mar.");
// else if (mes == 4) console.log("Abr.");
// else if (mes == 5) console.log("Mai.");
// else if (mes == 6) console.log("Jun.");
// else if (mes == 7) console.log("Jul.");
// else if (mes == 8) console.log("Ago.");
// else if (mes == 9) console.log("Set.");
// else if (mes == 10) console.log("Out.");
// else if (mes == 11) console.log("Nov.");
// else if (mes == 12) console.log("Dezembro");
