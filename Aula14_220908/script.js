// Aula 14
let r = 0;
let g = 0;
let b = 0;
function alterCor(cor, op){
  switch(cor){
    case "r":
      if (op === "+") r += 10;
      else r -= 10;
      break;
    case "g":
      if (op === "+") g += 10;
      else g -= 10;
      break;
    case "b":
      if (op === "+") b += 10;
      else b -= 10;
      break;
  }
  console.log(`rgb(${r}, ${g}, ${b})`);
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

/* const calcularSalLiq = function (sal, descInss, descVt){
  const salLiq = sal - descInss - descVt;
  return salLiq;
}

const calcularSalario = function (sal) {
  const descInss = sal * 0.11;
  const descVt = sal * 0.06;
  let salLiq = calcularSalLiq(sal, descInss, descVt);
  console.log("Sal. Brt.:\t", sal.toFixed(2));
  console.log("Des. INSS:\t", descInss.toFixed(2));
  console.log("Des. VT.:\t", descVt.toFixed(2));
  console.log("Sal. Liq.:\t", salLiq.toFixed(2));
}


calcularSalario(1_300);
calcularSalario(2_500); */

/* function operar(numA, numB, operador){
  let retorno = "";
  switch(operador){
    case "+": retorno = `Soma: ${numA + numB}`; break;
    case "-": return `Sub: ${numA - numB}`;
    case "*": return `Mult: ${numA * numB}`;
    case "/": return `Div: ${numA / numB}`;
    default: return `Div: ${numA / numB}`;
  }
  return retorno;
} */

/* function operar(numA, numB, operador){
  switch(operador){
    case "+": return `Soma: ${numA + numB}`;
    case "-": return `Sub: ${numA - numB}`;
    case "*": return `Mult: ${numA * numB}`;
    case "/": return `Div: ${numA / numB}`;
    default: return `Div: ${numA / numB}`;
  }
}

console.log(operar(5, 10, "+"));
console.log(operar(5, 10, "*"));
console.log(operar(5, 10, "/")); */

/* let opcao;
let menu = "Escolha uma opção:\n";
  menu += "1 - Inserir Usuário.\n";
  menu += "2 - Listar Usuário.\n";
  menu += "0 - Sair.\n";
  menu += "Opção: ";

function imprimirMenu(){
  opcao = +prompt(menu);
  switch(opcao){
    case 1: console.log("Usuário inserido."); break;
    case 2: console.log("Lista de Usuário."); break;
    case 0: console.log("Saindo do programa..."); break;
    default: 
      console.log("Escolha uma opção válida.");
      imprimirMenu();
  }
}

imprimirMenu();
console.log(opcao); */
// let contador = 10;
// function contar(){
//   console.log(contador--);
//   if (contador >= 0) contar();
// }

// contar();

/* function calcularSalario(salario, reajuste){
  let novoSalario = salario * 1.1;
  novoSalario = reajuste(novoSalario);
  return novoSalario;
}

const novoSal = calcularSalario(3000, function(salario) {
  return salario + 300;
});

const novoSal2 = calcularSalario(4000, function(salario) {
  if (salario > 3000)
    return salario + 100;
  else return salario + 200;
}); */

// Função com parâmetro.
// function funcao() {
//   console.log("Função Qualquer");
// }
// let func = funcao;
// func();

// const func = function () {
//   console.log("Outra Função Qualquer");
// }
// func();
// console.log(typeof func);

// function funcaoQualquer() {
//   return "Função Qualquer";
// }

// let outraFuncaoQualquer = funcaoQualquer;

// console.log(outraFuncaoQualquer());
// console.log(funcaoQualquer());
// var func = funcaoQualquer;
// func();
// console.log(func);
