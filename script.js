const perguntas = [
{
pergunta: "Qual prática ajuda a preservar o solo?",
opcoes: [
"Desmatamento",
"Queimadas",
"Rotação de culturas",
"Poluição"
],
correta: 2
},
{
pergunta: "O que significa agricultura sustentável?",
opcoes: [
"Produzir sem cuidar do ambiente",
"Produzir preservando recursos naturais",
"Usar mais agrotóxicos",
"Desmatar mais áreas"
],
correta: 1
},
{
pergunta: "Qual tecnologia ajuda o agro moderno?",
opcoes: [
"Máquinas antigas",
"Drones",
"Queimadas",
"Lixo no campo"
],
correta: 1
},
{
pergunta: "Por que o agro é importante?",
opcoes: [
"Produz alimentos",
"Destrói florestas",
"Polui rios",
"Não gera empregos"
],
correta: 0
},
{
pergunta: "O que contribui para um futuro sustentável?",
opcoes: [
"Desperdício de água",
"Poluição",
"Uso consciente dos recursos",
"Queimadas"
],
correta: 2
}
];

let atual = 0;
let pontos = 0;

const pergunta = document.getElementById("pergunta");
const opcoes = document.querySelectorAll(".opcao");

function carregarPergunta(){
    pergunta.textContent = perguntas[atual].pergunta;

    opcoes.forEach((botao, index)=>{
        botao.textContent = perguntas[atual].opcoes[index];
    });
}

function responder(indice){
    if(indice === perguntas[atual].correta){
        pontos++;
    }

    atual++;

    if(atual < perguntas.length){
        carregarPergunta();
    }else{
        document.getElementById("quiz").innerHTML = "";
        document.getElementById("resultado").innerHTML =
        `🌾 Você acertou ${pontos} de ${perguntas.length} perguntas!`;
    }
}

carregarPergunta();
