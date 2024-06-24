const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "um ion de certo elemento quimico de numero de massa 85 apresenta 36 eletrons e carga +1? qual eo o numero atomico desse ion??",
        alternativas: [
            {
                texto: "prot=85 eletrons=36+1 neutrons=112!",
                afirmacao: "afirmação"
            },
            {
                texto: "prot=85 eletros=36-1=35 neutrons=50!",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "o atomo de um elemento quimico possui 83 protons83 eletrons e 126 neutrons. qual e respectivamente o numero atomico e o numero de massa desse atomo??",
        alternativas: [
            {
                texto: "208.",
                afirmacao: "afirmação"
            },
            {
                texto: "209.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "em um atomo q apresenta 40 eletrons e 65 neutrons podemos afirmar q seu numero de protons e igual a:?",
        alternativas: [
            {
                texto: "40.",
                afirmacao: "afirmação"
            },
            {
                texto: "35.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "igor geoani?",
        alternativas: [
            {
                texto: "campos.",
                afirmacao: "afirmação"
            },
            {
                texto: "alvez.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "quando você terminar sua perguntas, você vai saber se é? ",
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

            
    
