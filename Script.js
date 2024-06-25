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
                afirmacao: "afirmação"
            },
            {
                texto: "2-saio correndo!",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Você tá na escola e perde a sua caneta, o que você faz?",
        alternativas: [
            {
                texto: "1roubo-quer dizer...pego emprestada de um colega.",
                afirmacao: "afirmação"
            },
            {
                texto: "2-fico sem a caneta e começo a chorar.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Quem é você em um grupo de amigos?",
        alternativas: [
            {
                texto: "2-o normal.",
                afirmacao: "afirmação"
            },
            {
                texto: "1-mais introvertido.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Faltava um minuto pra acabar a aula que você mais odeia... Mas a diretora deixa mais 1 hora de colégio pra hoje e PRA SEMPRE! O que você faz?",
        alternativas: [
            {
                texto: " 1-vamo logo!!!*respira muito alto parecendo que tá morrendo*VAMOOO!ME TIRA DAQUIIIIII!!!😭😭😭😭😭.",
                afirmacao: "afirmação"
            },
            {
                texto: "2-🥰tudo bem...eu tô começando a gostar dessa matéria mesmo...",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "em uma discussão? ",
        alternativas: [
            {
                texto: "1-.",
                afirmacao: "afirmação"
            },
            {
                texto: ".",
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
    caixaAlternativas.textContent = "quem vc seria alegria ou a raiva de divertidamente?vc n tem muita paciência,e provavelmente escolhou 1 você seria a raiva😡ou se na resposta você respondeu a maioria 2 você séria alegria😄 ";
}

mostraPergunta();

            
    
