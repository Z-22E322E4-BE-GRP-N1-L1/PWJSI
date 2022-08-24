
const nota1 = +prompt("Informe uma nota:");
const nota2 = +prompt("Informe uma nota:");
const somatorio = nota1 + nota2;
const media = somatorio / 2;

let situacao = "";
if (media === 10) { situacao = "Parabéns, Aprovado."; }
else if (media >= 7) { situacao = "Aprovado."; }
else if (media >= 5) { situacao = "Recuperação."; }
// else { situacao = "Reprovado."; }

// if (media === 10) { 
//   situacao = "Parabéns, Aprovado."; 
// } else {
//   if (media >= 7) { 
//     situacao = "Aprovado."; 
//   } else {
//     if (media >= 5) { 
//       situacao = "Recuperação."; 
//     } else { 
//       situacao = "Reprovado."; 
//     }
//   }
// }

// if (media >= 7) { situacao = "Aprovado."; }
// if (media < 7) { situacao = "Recuperação."; }
// if (media < 5) { situacao = "Reprovado."; }

/* if (media < 7) {
  situacao = "Recuperação.";
  if (media < 5){
    situacao = "Reprovado.";
  }
}*/

console.log("Média    :\t", media);
console.log("Situação :\t", situacao);


// const numero = +prompt("Informe um número.");
// if (numero % 2 === 0) console.log("Par.");
// else console.log("Ímpar.");



// se (condicao) {
//   faça uma coisa
// } se não {
//   faça outra coisa
// }

// const ehAdmin = false;
// if (ehAdmin) {
//   console.log("Dashboard.");
// } else {
//   console.log("Cadastro.");
// }

// const nota1 = +prompt("Informe uma nota:");
// const nota2 = +prompt("Informe uma nota:");
// const nota3 = +prompt("Informe uma nota:");
// const nota4 = +prompt("Informe uma nota:");

// const somatorio = nota1 + nota2 + nota3 + nota4;
// const media = somatorio / 4;

// const aprovado = media >= 7;
// let situacao = "";
// if (aprovado) { situacao = "Aprovado."; }
// else { situacao = "Recuperação."; }

// console.log("Média    :\t", media);
// console.log("Situação :\t", situacao);
// if (media === 10) console.log("Parabéns!");
// if (media < 5) console.log("Estude mais!");











// else

// const numeroA = +prompt("Informe um número:");
// const numeroB = +prompt("Informe outro número:");

// if (numeroA > numeroB) { 
//   console.log("Primeiro é maior.");
// }
// if (numeroA === numeroB) { 
//   console.log("São iguais."); 
// }
// if (numeroA < numeroB) { 
//   console.log("Segundo é maior."); 
// }

// if (numeroA > numeroB || numeroA === numeroB || numeroA < numeroB) console.log("Primeiro é maior.");
// const nota1 = +prompt("Informe uma nota:");
// const nota2 = +prompt("Informe uma nota:");
// const nota3 = +prompt("Informe uma nota:");
// const nota4 = +prompt("Informe uma nota:");

// const somatorio = nota1 + nota2 + nota3 + nota4;
// const media = somatorio / 4;

// const aprovado = media >= 7;
// let situacao = "";
// if (aprovado === true) situacao = "Aprovado.";
// if (aprovado === false) situacao = "Recuperação.";

// console.log("Média    :\t", media);
// console.log("Situação :\t", situacao);
// if (media === 10) console.log("Parabéns!");
// if (media < 5) console.log("Estude mais!");



// ==
// ===
// >
// >=
// <
// <=
  