
 const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Se você está com fome,o que você faz?",
        alternativas: [
            {
                texto: "1-grito com todo mundo até me darem a comida!",
                afirmacao: "Eu grito com todo mundo até me darem a comida."
            },
            {
                texto: "2-Eu começo a entrar em pânico e saio correndo rapidamente, reagindo impulsivamente ao que está acontecendo ao meu redor",
                afirmacao: "saio correndo!."
            }
        ]
    },
    {
        enunciado: "Você tá na escola e perde a sua caneta, o que você faz??",
        alternativas: [
            {
                texto: "1-quer dizer que estou pegando algo emprestado de um colega sem a permissão ou conhecimento dele.",
                afirmacao: "roubo-quer dizer...pego emprestado de um colega."
            },
            {
                texto: "2-Eu fico sem a caneta e começo a chorar porque me sinto frustrado/a ou incapaz de lidar com a situação de não ter algo tão importante para mim naquele momento.",
                afirmacao: "fico sem a caneta e começo a chorar."
            }
        ]
    },
    {
        enunciado: "Quem é você em um grupo de amigos?",
        alternativas: [
            {
                texto: "2-Eu sou a pessoa que representa a normalidade dentro do grupo, agindo de maneira equilibrada e seguindo padrões aceitos pela maioria.",
                afirmacao: "o normal."
            },
            {
                texto: "1-mais introvertido..",
                afirmacao: "quando eu estou em uma atividade solitária ou em pequenos grupos, onde você pode refletir e recarregar sua energia pessoal."
            }
        ]
    },
    {
        enunciado: "Faltava um minuto pra acabar a aula que você mais odeia... Mas a diretora deixa mais 1 hora de colégio pra hoje e PRA SEMPRE! O que você faz??",
        alternativas: [
            {
                texto: "1-vamo logo!!!*respira muito alto parecendo que tá morrendo*VAMOOO!ME TIRA DAQUIIIIII!!!😭😭😭😭😭.",
                afirmacao: "Vamos logo! respira alto, parecendo que está morrendo Vamos lá! Me tira daqui!!! 😭."
            },
            {
                texto: "2-🥰tudo bem...eu tô começando a gostar dessa matéria mesmo...",
                afirmacao: "Tudo bem, estou realmente começando a gostar dessa matéria!"
            }
        ]
    },
    {
        enunciado: "em uma discussão voce prefere? ",
        alternativas: [
            {
                texto: "1-levantar a voz e falar tudo que voce tem para falar.",
                afirmacao: "Levante a voz e expresse tudo o que você tem a dizer."

."
            },
            {
                texto: "2-manter a calma e não gritar e explica o porque tava brava..",
                afirmacao: "Manter a calma, não gritar e explicar por que estava brava. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();           
    
