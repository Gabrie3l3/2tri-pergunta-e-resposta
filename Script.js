const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual das seguintes opções é uma galáxia espiral?",
        alternativas: [
            {
                texto: "a)Galáxia de Andrômeda!",
                afirmacao: "para bem você acertou👏. "
            },
            {
                texto: "b)Galáxia de Messier 87!",
                afirmacao: "você errou."
            }
        ]
    },
    {
        enunciado: "Qual desses corpos celestes é um planeta do nosso sistema solar?",
        alternativas: [
            {
                texto: "a) Alfa Centauri.",
                afirmacao: "na próxima você consegue ."
            },
            {
                texto: "b) Saturno.",
                afirmacao: "eu sabia que você eria acertar 😄."
            }
        ]
    },
    {
        enunciado: "Qual é o nome da nossa galáxia?",
        alternativas: [
            {
                texto: "a) Via Láctea.",
                afirmacao: "você é inteligente ❤️."
            },
            {
                texto: "b) Galáxia de Andrômeda.",
                afirmacao: "não fica triste na próxima você acerta😕."
            }
        ]
    },
    {
        enunciado: "Qual desses é um buraco negro supermassivo??",
        alternativas: [
            {
                texto: "a) Buraco Negro de Sagittarius A*.",
                afirmacao: "você acertou continua assim."
            },
            {
                texto: "b) Buraco Negro de Proxima Centauri.",
                afirmacao: "resposta errada😬!"
            }
        ]
    },
    {
        enunciado: "Qual dessas estrelas é mais quente?? ",
        alternativas: [
            {
                texto: "a) Estrela de Barnard.",
                afirmacao: "wrong answer🥲."
            },
            {
                texto: "b) Estrela Azul.",
                afirmacao: "right answer😄👏. "
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
