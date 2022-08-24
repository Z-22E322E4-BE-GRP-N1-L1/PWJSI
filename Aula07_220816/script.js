let corR = 0;
let corG = 0;
let corB = 0;

function addR(){
  corR += 10;
  alterColor();
}

function subR(){
  corR -= 10;
  alterColor();
}

function addG(){
  corG += 10;
  alterColor();
}

function subG(){
  corG -= 10;
  alterColor();
}

function addB(){
  corB += 10;
  alterColor();
}

function subB(){
  corB -= 10;
  alterColor();
}

function alterColor(){
  const color = `rgb(${corR},${corG},${corB})`;
  console.log(color);
  document.body.style.background = color;
}
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
