// Aula 18


let r = 0;
let g = 0;
let b = 0;

let pR = document.getElementById("pR");
let pG = document.getElementById("pG");
let pB = document.getElementById("pB");
let body = document.body;

function addCor(cor, valor){
  switch(cor){
    case "r": if (r < 255) r += valor; else r = 0;break;
    case "g": if (g < 255) g += valor; else g = 0; break;
    case "b": if (b < 255) b += valor; else b = 0; break;
  }
}

function subCor(cor, valor){
  switch(cor){
    case "r": if (r > 0) r -= valor; else r = 255;break;
    case "g": if (g > 0) g -= valor; else g = 255; break;
    case "b": if (b > 0) b -= valor; else b = 255; break;
  }
}

function alterCor(cor, op){
  if (op === "+") addCor(cor, 10); 
  else subCor(cor, 10);
  pR.innerText = r;
  pG.innerText = g;
  pB.innerText = b;
  body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

/* function mudarCor(novaCor) {
  const pMensagem = document.getElementById("pMensagem");
  pMensagem.style.color = novaCor; // red, blue
}

const pContador = document.getElementById("pContador");
console.log(pContador);
// let pContador = "Paragrafo Contador";
let contador = 0;
pContador.innerText = contador;

function addContador() {
  contador++;
  pContador.innerText = contador;
}

function subContador() {
  contador--;
  pContador.innerText = contador;
} */

// const tarefa = prompt("Informe a tarefa");
// const itemLista1 = document.getElementById("itemLista1");
// itemLista1.innerText = tarefa;



// const h = document.body.children[0];
// // h.innerText = "<p>Olá Mundo</p>";
// h.innerHTML = "<p>Olá Mundo</p>";
// h.children[0];


/* function addItemNaLista() {
  const itemLista1 = document.getElementById("itemLista1");
  itemLista1.innerText = "Fazer tarefa 1";
} */


