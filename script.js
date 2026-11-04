
const noticias = [
    {
        titulo: "Inteligência Artificial cresce no mundo",
        descricao: "A tecnologia continua transformando empresas e o dia a dia das pessoas.",
        categoria: "Tecnologia",
        link: "https://canaltech.com.br/",
        favorito: false
    },
    {
        titulo: "Novidades do mercado de tecnologia",
        descricao: "Confira as principais novidades do mundo digital.",
        categoria: "Tecnologia",
        link: "https://www.tecmundo.com.br/",
        favorito: false
    },
    {
        titulo: "Novos jogos chegam ao mercado",
        descricao: "Veja as novidades e lançamentos do universo dos games.",
        categoria: "Games",
        link: "https://www.adrenaline.com.br/",
        favorito: false
    },
    {
        titulo: "Descobertas importantes na ciência",
        descricao: "Pesquisadores apresentam novas descobertas científicas.",
        categoria: "Ciência",
        link: "https://www.nationalgeographicbrasil.com/",
        favorito: false
    },
    {
        titulo: "Segurança digital na internet",
        descricao: "Saiba como proteger seus dados e navegar com segurança.",
        categoria: "Tecnologia",
        link: "https://www.cert.br/",
        favorito: false
    },
    {
        titulo: "O futuro dos videogames",
        descricao: "O mercado de jogos continua crescendo no mundo.",
        categoria: "Games",
        link: "https://www.techtudo.com.br/",
        favorito: false
    }
];

let categoriaAtual = "Todas";

// Mostrar as noticias na tela
function mostrarNoticias() {

    const area = document.getElementById("noticias");
    const pesquisa = document.getElementById("pesquisa").value.toLowerCase();

    area.innerHTML = "";

    const resultado = noticias.filter(noticia => {

        const encontrouTexto = noticia.titulo.toLowerCase().includes(pesquisa);

        const encontrouCategoria =
            categoriaAtual === "Todas" ||
            (categoriaAtual === "Favoritos" && noticia.favorito) ||
            noticia.categoria === categoriaAtual;

        return encontrouTexto && encontrouCategoria;
    });

    if (resultado.length === 0) {
        area.innerHTML = "<p>Nenhuma notícia encontrada.</p>";
        return;
    }

    resultado.forEach(noticia => {

        area.innerHTML += `
            <div class="card">

                <h3>${noticia.titulo}</h3>

                <p>${noticia.descricao}</p>

                <small>Categoria: ${noticia.categoria}</small>

                <br><br>

                <a href="${noticia.link}" target="_blank" rel="noopener noreferrer">
                    Ler notícia
                </a>

                <br>

                <button onclick="favoritar('${noticia.titulo}')">
                    ${noticia.favorito ? "★ Favorito" : "☆ Favoritar"}
                </button>

            </div>
        `;
    });
}

// Filtrar por categoria
function filtrar(categoria) {

    categoriaAtual = categoria;

    mostrarNoticias();
}

// Adicionar ou remover favorito
function favoritar(titulo) {

    const noticia = noticias.find(item => item.titulo === titulo);

    if (noticia) {
        noticia.favorito = !noticia.favorito;
    }

    mostrarNoticias();
}

// Atualizar noticias
function carregarNoticias() {

    mostrarNoticias();

    const botao = document.getElementById("atualizar");

    botao.textContent = "Atualizado!";

    setTimeout(() => {
        botao.textContent = "Atualizar notícias";
    }, 1500);
}

// Pesquisar enquanto digita
document.getElementById("pesquisa").addEventListener("input", mostrarNoticias);

// Iniciar o site
mostrarNoticias();
