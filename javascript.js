'use strict';

let somaFranbacon = 0;
let somaVaca = 0;
let somaPorco = 0;
let somaLinguica = 0;
let somaCoracao = 0;

let vendaFranbacon = 0.00;
let vendaVaca = 0.00;
let vendaPorco = 0.00
let vendaLinguica = 0.00;
let vendaCoracao = 0.00;

//variaveis que vão receber instruções do html
let btnVendas = document.getElementById('vendas');
let btnEstorno = document.getElementById('estorno');
let btnPlanilha = document.getElementById('export');

//eventos -> vou capturar o click do usuario no html
btnVendas.addEventListener('click', venda, false); //peguei o evento e joguei na função venda. Coloquei falso pq n quero outro evento do html
btnEstorno.addEventListener('click', estorno, false);
btnPlanilha.addEventListener('click', planilha, false);

//funções
function venda(e){
    if(document.getElementById('franbacon').checked){
        somaFranbacon += 1;
        vendaFranbacon = vendaFranbacon + 6.0;

        //mandando as informações pro html manipulando o DOM
        document.getElementById('resultadoFranbacon').innerHTML = somaFranbacon;
        document.getElementById('vendaFranbacon').innerHTML = vendaFranbacon.toFixed(2);//duas casas decimais
    } else if(document.getElementById('vaca').checked){
        somaVaca += 1;
        vendaVaca = vendaVaca + 6.0;

        document.getElementById('resultadoVaca').innerHTML = somaVaca;
        document.getElementById('vendaVaca').innerHTML = vendaVaca.toFixed(2);
    } else if(document.getElementById('porco').checked){
        somaPorco += 1;
        vendaPorco = vendaPorco + 6.0;

        document.getElementById('resultadoPorco').innerHTML = somaPorco;
        document.getElementById('vendaPorco').innerHTML = vendaPorco.toFixed(2);
    } else if(document.getElementById('linguica').checked){
        somaLinguica += 1;
        vendaLinguica = vendaLinguica + 6.0;

        document.getElementById('resultadoLinguica').innerHTML = somaLinguica;
        document.getElementById('vendaLinguica').innerHTML = vendaLinguica.toFixed(2);
    } else if(document.getElementById('coracao').checked){
        somaCoracao += 1;
        vendaCoracao = vendaCoracao + 6.0;

        document.getElementById('resultadoCoracao').innerHTML = somaCoracao;
        document.getElementById('vendaCoracao').innerHTML = vendaCoracao.toFixed(2);
    }
}

function estorno(e){
    if(document.getElementById('franbacon').checked){
        somaFranbacon -= 1;
        vendaFranbacon = vendaFranbacon + 6.0;

        //tratativa para não ficar número negativo na venda
        if(somaFranbacon < 0){
            somaFranbacon = 0;
            vendaFranbacon = 0.00
        }

        //mandando as informações pro html manipulando o DOM
        document.getElementById('resultadoFranbacon').innerHTML = somaFranbacon;
        document.getElementById('vendaFranbacon').innerHTML = vendaFranbacon.toFixed(2);//duas casas decimais
    } else if(document.getElementById('vaca').checked){
        somaVaca -= 1;
        vendaVaca = vendaVaca + 6.0;

        if(somaVaca < 0){
            somaVaca = 0;
            vendaVaca = 0.00;
        }

        document.getElementById('resultadoVaca').innerHTML = somaVaca;
        document.getElementById('vendaVaca').innerHTML = vendaVaca.toFixed(2);
    } else if(document.getElementById('porco').checked){
        somaPorco -= 1;
        vendaPorco = vendaPorco + 6.0;

        if(somaPorco < 0){
            somaPorco = 0;
            vendaPorco = 0.00;
        }

        document.getElementById('resultadoPorco').innerHTML = somaPorco;
        document.getElementById('vendaPorco').innerHTML = vendaPorco.toFixed(2);
    } else if(document.getElementById('linguica').checked){
        somaLinguica -= 1;
        vendaLinguica = vendaLinguica + 6.0;

        if(somaLinguica < 0){
            somaLinguica = 0;
            vendaLinguica = 0.00;
        }

        document.getElementById('resultadoLinguica').innerHTML = somaLinguica;
        document.getElementById('vendaLinguica').innerHTML = vendaLinguica.toFixed(2);
    } else if(document.getElementById('coracao').checked){
        somaCoracao -= 1;
        vendaCoracao = vendaCoracao + 6.0;

        if(vendaCoracao < 0){
            vendaCoracao = 0;
            somaCoracao = 0.00;
        }

        document.getElementById('resultadoCoracao').innerHTML = somaCoracao;
        document.getElementById('vendaCoracao').innerHTML = vendaCoracao.toFixed(2);
    }
}

function planilha(e){
    TableToExcel.convert(document.getElementById('table'));
}
