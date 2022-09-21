// Batalha Naval
const playerA = Math.ceil(Math.random() * 12);
const playerB = Math.ceil(Math.random() * 12);
let playerTurno = "A";
let estadoDoJogo = true;
const pPlacar = document.getElementById('pPlacar');


function updateTile(tile, img) {
  tile.innerHTML += `
      <img 
        style='
          position: relative;
          top: 15px;
          left: 15px;
          width: 15px;'
        src='${img}' />
        `;
}

function trocarTurno() {
  if (playerTurno === "A") playerTurno = "B";
  else playerTurno = "A";
  informarPlacar();
}

function informarPlacar() {
  pPlacar.innerText = `Vez do Jogador ${playerTurno}`;
}

function selecionarCasa(event, numCasa) {
  if (estadoDoJogo) {
    const tile = event.currentTarget;
    const jogadorAAcertou = numCasa === playerB && playerTurno === "A";
    const jogadorBAcertou = numCasa === playerA && playerTurno === "B";
    if (jogadorAAcertou){
      updateTile(tile, "playerB.png");
      pPlacar.innerText = "Player A Ganhou!";
      estadoDoJogo = false;
    } else if (jogadorBAcertou){
      updateTile(tile, "playerA.png");
      pPlacar.innerText = "Player B Ganhou!";
      estadoDoJogo = false;
    } else {
      trocarTurno();
    }
  }
}

informarPlacar();

// Caça tesouro
// Selecionar uma casa aleatória que conterá o tesouro
// const tesouro = Math.ceil(Math.random() * 12); // 1 a 12
// const pQuantTentativas = document.getElementById('pQuantTentativas');
// let estadoDoJogo = true;
// let tentativas = 11;

// function selecionarCasa(event, numCasa) {
//   if (estadoDoJogo && tentativas > 0) {
//     tentativas--;
//     const tile = event.target // Elemento que chamou a função
//     if (numCasa === tesouro){
//       tile.style.background = "blue";
//       tile.innerHTML = "<img src='tesouro.png' />";
//       estadoDoJogo = false;
//     } else
//       tile.style.background = "lightgreen";

//     atualizarUI();
//   }
// }

// function atualizarUI() {
//   pQuantTentativas.innerText = tentativas;
// }

// atualizarUI();