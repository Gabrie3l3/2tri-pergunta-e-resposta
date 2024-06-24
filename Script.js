const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "pergunta sobre divertidamente 2 Se você está com fome,o que você faz?",
        alternativas: [
            {
                texto: "grito com todo mundo até me darem a comida!",
                afirmacao: "afirmação"
            },
            {
                texto: "saio correndo!",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Você tá na escola e perde a sua caneta, o que você faz?",
        alternativas: [
            {
                texto: "roubo-quer dizer...pego emprestada de um colega.",
                afirmacao: "afirmação"
            },
            {
                texto: "fico sem a caneta e começo a chorar.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Quem é você em um grupo de amigos?",
        alternativas: [
            {
                texto: "o introvertido.",
                afirmacao: "afirmação"
            },
            {
                texto: "o normal.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Faltava um minuto pra acabar a aula que você mais odeia... Mas a diretora deixa mais 1 hora de colégio pra hoje e PRA SEMPRE! O que você faz?",
        alternativas: [
            {
                texto: "vamo logo!!!*respira muito alto parecendo que tá morrendo*VAMOOO!ME TIRA DAQUIIIIII!!!😭😭😭😭😭.",
                afirmacao: "afirmação"
            },
            {
                texto: "🥰tudo bem...eu tô começando a gostar dessa matéria mesmo...",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "? ",
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

            
    
