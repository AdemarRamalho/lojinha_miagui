let ITENS_LOJA = [
    {
        nome:"Bola da Copa",
        preco:86.30,
        titulo_preco:"preço:",
        url_img:"./img/bola_copa.webp",
        titulo_discricao:"Discrição",
        descricao:"Bola utilizada na Copa do Mundo, idela para utilizar em campo e colecionar"
    },
    {
        nome:"Carrinho da Hot Wheels",
        preco:5.80,
        titulo_preco:"preço:",
        url_img:"./img/carro_hotwheels.jpeg",
        descricao:"Carrinho para dar de presentes para crianças ou colecionar",
        titulo_discricao:"Discrição",
    },
    {
        nome:"Chinelo",
        preco:19.99,
        titulo_preco:"preço:",
        url_img:"./img/chinelo.webp",
        descricao:"Chinelo para se utilizar em qualquer lugar",
        titulo_discricao:"Discrição",
    },
    {
        nome:"Escorredor de Louça",
        preco:15.20,
        titulo_preco:"preço:",
        url_img:"./img/escorredor_louca.webp",
        descricao:"Utilizando para ajudar no processo de secagem dos utensilios",
        titulo_discricao:"Discrição",
    },
    {
        nome:"Espada Medieval",
        preco:200.18,
        titulo_preco:"preço:",
        url_img:"./img/espada_medieval.png",
        descricao:"Utilizada em batalhar para neutralizar o inimigo ou como item de decoração",
        titulo_discricao:"Discrição",
    },
    {
        nome:"Guitarra",
        preco:1980.99,
        titulo_preco:"preço:",
        url_img:"./img/guitarra.webp",
        descricao:"Otima para utilizar em bandas de hard rock",
        titulo_discricao:"Discrição",
    },
    {
        nome:"Toalha de Banho",
        preco:9.99,
        titulo_preco:"preço:",
        url_img:"./img/toalha_banho.webp",
        descricao:"Boa para se secar apos o banho",
        titulo_discricao:"Discrição",
    },
    {
        nome:"Vinho",
        preco:59.90,
        titulo_preco:"preço:",
        url_img:"./img/vinho.webp",
        descricao:"Vinho que harmoniza muito bem com carnes vermelhas ",
        titulo_discricao:"Discrição",
    }
]
let sessao = document.getElementById("sessao-venda");
let anuncio = ITENS_LOJA.length;

for(i=0;i<anuncio;i++)
{
    criando_anuncio(ITENS_LOJA[i])
}


function criando_anuncio(ITENS_LOJA){
    let article = document.createElement("article");
    article.className="article_anuncio"

    let context = `
    <img class="imagem" src=${ITENS_LOJA.url_img}>
    <h1 class="itens-nome">${ITENS_LOJA.nome}</h1>
    <article class="texto">
        <article class="preco">
            <h1>${ITENS_LOJA.titulo_preco}</h1>
            <p>${ITENS_LOJA.preco}</p>
        </article>
        <article class="discricao">
            <h1>${ITENS_LOJA.titulo_discricao}</h1>
            <p>${ITENS_LOJA.descricao}</p>
        </article>
    </article>    
    `
    article.innerHTML=context;
    sessao.appendChild(article)    
}

