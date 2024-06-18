const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "você é fã de Harry potter?",
        alternativas: [
            {
                texto: "não sou fã,pois eu nãoconheço mais eu gostaria de assistir!",
                afirmacao: "afirmação"
            },
            {
                texto: "amo muito,eu ja marátonei todos os filmes!",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "dois cálices são colocados diante de você.Qual você bebe?",
        alternativas: [
            {
                texto: "O líquido espumoso,espumante roxo que brilha como se contevesse diamantes lapidados.",
                afirmacao: "afirmação"
            },
            {
                texto: "O de liquido dourado tão brilhante que machuca osolhos e faz as manchas solares dançarem por toda a sala.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Dentre estes, qual seus personagens preferido de HARRY POTTER?",
        alternativas: [
            {
                texto: "harry potter,dobby,lupin.",
                afirmacao: "afirmação"
            },
            {
                texto: "dra,voldemort,sirius.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Que tipo de fama voce gostariade ter?",
        alternativas: [
            {
                texto: "ser amado.",
                afirmacao: "afirmação"
            },
            {
                texto: "nunca ser famoso na vida, mas ser lembrado eternamente depois da morte.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "afirmação"
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "afirmação"
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

            
    
