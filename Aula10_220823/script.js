// aX² + bx + c = 0

const numA = +prompt("Informe o valor de A:");

if (numA){
  const numB = +prompt("Informe o valor de B:");
  const numC = +prompt("Informe o valor de C:");
  const delta = numB ** 2 - 4 * numA * numC;
  if (delta < 0) console.log("Não há raizes reais.");
  else {
    if (delta == 0){
      console.log("Há uma raiz.");
      const raiz = (numB * -1) / (2 * numA);
      console.log("Raiz: ", raiz);
    } else {
      console.log("Há duas raizes.");
      const raiz1 = ((numB * -1) + Math.sqrt(delta)) / (2 * numA);
      const raiz2 = ((numB * -1) - Math.sqrt(delta)) / (2 * numA);
      console.log("Raizes: ", raiz1, raiz2);
    }
  }
} else {
  console.log("Não é uma equação do 2º.");
}

// if (true){
//   const valor = 10;
// }

// console.log(valor);

// const mes = +prompt("Informe o número do mês:");

// if (mes == 1) console.log("Janeiro");
// else if (mes == 2) console.log("Fevereiro");
// // ...
// else if (mes == 12) console.log("Dezembro");
// else console.log("Informe um valor entre 1 e 12.");

// const nota1 = +prompt("Nota:");
// const nota2 = +prompt("Nota:");

// const soma = nota1 + nota2;
// const media = soma / 2;

// console.log("Média:\t", media);
// if (media == 10) {
//   console.log("Aprovado. Parabéns!");
// } else if (media >= 7){
//   console.log("Aprovado!");
// } else if (media >= 5){
//   console.log("Recuperação!");
// } else /* if (media < 5) */{
//   console.log("Reprovado!");
// }

// if (media == 10) {
//   console.log("Aprovado. Parabéns!");
// } else {
//   if (media >= 7){
//     console.log("Aprovado!");
//   } else {
//     console.log("Reprovado!");
//   }
// }

// Valores como booleano
// number
// const numero = ["+", "-"];
// function sum(a, b) {
//   return a + b;
// }
// let numero = 1;          // T
// let numero = 0;          // F
// let numero = NaN;        // F
// let numero = null;       // F
// let numero; // undefined // F
// console.log(numero);
// let texto = false;       // F
// let texto = "false";     // T
// let texto = "";          // F
// let texto = " ";         // T
// console.log("Texto: |" + texto + "|");
// if (texto) {
//   console.log("Verdadeiro.");
// } else {
//   console.log("Falso.");
// }

// console.log("Continuação do programa.");


// let idade = null; 
// const idade = +prompt("Informe sua idade:");
// if (idade) { //if (idade == false) {
//   console.log("Informou uma idade válida.");
// } else {
//   console.log("Informe uma idade válida.");
// }
// const nota1 = +prompt("Informe uma nota:");
// const nota2 = +prompt("Informe uma nota:");
// const somatorio = nota1 + nota2;
// const media = somatorio / 2;

// let situacao = "";
// if (media === 10) { situacao = "Parabéns, Aprovado."; }
// else if (media >= 7) { situacao = "Aprovado."; }
// else if (media >= 5) { situacao = "Recuperação."; }
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
