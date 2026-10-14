
/* =========================================
   CONFIGURAÇÕES DA LOJA
   ========================================= */

const WHATSAPP_NUMBER = "5577988860629";
const STORE_NAME = "Luar Pratas";

/* =========================================
   PRODUTOS
   ========================================= */

const products = [
    {
        id: 1,
        name: "Anel Aura",
        category: "aneis",
        label: "ANÉIS",
        price: "Consultar",
        description: "Minimalista, delicado e fácil de combinar.",
        image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=700&q=80",
        tag: "MAIS QUERIDO"
    },
    {
        id: 2,
        name: "Colar Serena",
        category: "colares",
        label: "COLARES",
        price: "Consultar",
        description: "Um detalhe sutil para iluminar o look.",
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=700&q=80",
        tag: "ESSENCIAL"
    },
    {
        id: 3,
        name: "Brincos Lumi",
        category: "brincos",
        label: "BRINCOS",
        price: "Consultar",
        description: "Leves, versáteis e cheios de personalidade.",
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=700&q=80",
        tag: ""
    },
    {
        id: 4,
        name: "Pulseira Elo",
        category: "pulseiras",
        label: "PULSEIRAS",
        price: "Consultar",
        description: "Um clássico delicado para usar sempre.",
        image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=700&q=80",
        tag: ""
    },
    {
        id: 5,
        name: "Anel Horizonte",
        category: "aneis",
        label: "ANÉIS",
        price: "Consultar",
        description: "Linhas limpas com um toque contemporâneo.",
        image: "https://images.unsplash.com/photo-1603561596112-0a132b757442?auto=format&fit=crop&w=700&q=80",
        tag: "NOVO"
    },
    {
        id: 6,
        name: "Colar Constelação",
        category: "colares",
        label: "COLARES",
        price: "Consultar",
        description: "Uma peça especial para presentear ou se presentear.",
        image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=700&q=80",
        tag: "PRESENTE"
    },
    {
        id: 7,
        name: "Brincos Gota",
        category: "brincos",
        label: "BRINCOS",
        price: "Consultar",
        description: "Um formato atemporal que combina com tudo.",
        image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=700&q=80",
        tag: ""
    },
    {
        id: 8,
        name: "Pulseira Brisa",
        category: "pulseiras",
        label: "PULSEIRAS",
        price: "Consultar",
        description: "Um brilho discreto para todos os dias.",
        image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=700&q=80",
        tag: ""
    }
];

/* =========================================
   WHATSAPP
   ========================================= */

function whatsappUrl(message) {
    const number = WHATSAPP_NUMBER.replace(/\D/g, "");

    return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

/* =========================================
   ANIMAÇÃO DOS PRODUTOS
   ========================================= */

function observarProdutos() {
    const produtos = document.querySelectorAll(".product-card");

    // Evita erro em navegadores sem suporte ao IntersectionObserver.
    if (!("IntersectionObserver" in window)) {
        produtos.forEach(produto => produto.classList.add("show"));
        return;
    }

    const observador = new IntersectionObserver((entradas, observer) => {
        entradas.forEach(entrada => {
            if (!entrada.isIntersecting) return;

            const produto = entrada.target;
            const grupo = [...produto.parentElement.children];
            const indice = grupo.indexOf(produto);
            const atraso = (indice % 4) * 100;

            produto.style.transitionDelay = `${atraso}ms`;
            produto.classList.add("show");

            observer.unobserve(produto);
        });
    }, {
        threshold: 0.1
    });

    produtos.forEach(produto => observador.observe(produto));
}

/* =========================================
   EXIBIR E FILTRAR PRODUTOS
   ========================================= */

function renderProducts(filter = "todos") {
    const grid = document.querySelector("#product-grid");

    if (!grid) {
        console.error('Elemento "#product-grid" não encontrado no HTML.');
        return;
    }

    const visibleProducts = filter === "todos"
        ? products
        : products.filter(product => product.category === filter);

    grid.innerHTML = visibleProducts.map(product => `
        <article class="product-card">
            <div class="product-image">
                <img
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                >

                ${product.tag
                    ? `<span class="product-tag">${product.tag}</span>`
                    : ""
                }
            </div>

            <div class="product-info">
                <div class="product-meta">
                    <div>
                        <h3>${product.name}</h3>
                        <span class="product-category">${product.label}</span>
                    </div>

                    <span class="product-price">${product.price}</span>
                </div>

                <p class="product-description">
                    ${product.description}
                </p>

                <a
                    class="order-link"
                    href="${whatsappUrl(
                        `Olá! Tenho interesse no produto ${product.name} da ${STORE_NAME}. Pode me informar o preço e a disponibilidade?`
                    )}"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Consultar pelo WhatsApp <span>↗</span>
                </a>
            </div>
        </article>
    `).join("");

    // Observa os produtos recém-criados, inclusive após filtrar.
    observarProdutos();
}

/* =========================================
   BOTÕES DE FILTRO
   ========================================= */

document.querySelectorAll(".filter").forEach(button => {
    button.addEventListener("click", () => {
        document.querySelectorAll(".filter").forEach(item => {
            item.classList.remove("active");
        });

        button.classList.add("active");

        renderProducts(button.dataset.filter || "todos");
    });
});

/* =========================================
   LINKS PRINCIPAIS DO WHATSAPP
   ========================================= */

document.querySelectorAll(".whatsapp-main").forEach(link => {
    link.href = whatsappUrl(
        `Olá! Conheci a ${STORE_NAME} pelo site e gostaria de saber mais sobre as peças.`
    );

    link.target = "_blank";
    link.rel = "noopener noreferrer";
});

/* =========================================
   MENU RESPONSIVO
   ========================================= */

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
        const isOpen = nav.classList.toggle("open");

        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Fechar menu" : "Abrir menu"
        );

        menuToggle.textContent = isOpen ? "×" : "☰";
    });

    nav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("open");

            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Abrir menu");
            menuToggle.textContent = "☰";
        });
    });
}

/* =========================================
   ANO AUTOMÁTICO NO RODAPÉ
   ========================================= */

const yearElement = document.querySelector("#year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

/* =========================================
   TÍTULO DA PÁGINA
   ========================================= */

document.title = `${STORE_NAME} — Joias para todos os dias`;

/* =========================================
   INICIALIZAÇÃO
   ========================================= */

renderProducts();
