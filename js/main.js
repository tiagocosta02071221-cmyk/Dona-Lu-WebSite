/**
 * DONA LU — LÓGICA DE RENDERIZAÇÃO DO CARDÁPIO E INTERAÇÕES
 */

(function () {
  "use strict";

  // Gera o link oficial do WhatsApp com mensagem codificada
  function buildWhatsAppUrl(customMessage) {
    const message = customMessage || WHATSAPP_CONFIG.mensagemPadrao;
    return `https://wa.me/${WHATSAPP_CONFIG.numero}?text=${encodeURIComponent(message)}`;
  }

  // Renderiza os botões de filtro por categoria
  function renderFilters(activeCategoryId) {
    const filtersContainer = document.getElementById("menuFilters");
    if (!filtersContainer) return;

    const allButton = `<button type="button" class="filter-btn ${
      activeCategoryId === "todas" ? "active" : ""
    }" data-category="todas" role="tab" aria-selected="${
      activeCategoryId === "todas"
    }">Todas as opções</button>`;

    const categoryButtons = CARDAPIO_CATEGORIAS.map(
      (cat) =>
        `<button type="button" class="filter-btn ${
          activeCategoryId === cat.id ? "active" : ""
        }" data-category="${cat.id}" role="tab" aria-selected="${
          activeCategoryId === cat.id
        }">${cat.nome}</button>`
    ).join("");

    filtersContainer.innerHTML = allButton + categoryButtons;

    filtersContainer.querySelectorAll(".filter-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const selected = btn.getAttribute("data-category");
        renderFilters(selected);
        renderMenu(selected);
      });
    });
  }

  // Renderiza as categorias e cards de produtos a partir de CARDAPIO_CATEGORIAS
  function renderMenu(filterCategoryId = "todas") {
    const menuContainer = document.getElementById("menuContainer");
    if (!menuContainer) return;

    const categoriesToRender =
      filterCategoryId === "todas"
        ? CARDAPIO_CATEGORIAS
        : CARDAPIO_CATEGORIAS.filter((cat) => cat.id === filterCategoryId);

    menuContainer.innerHTML = categoriesToRender
      .map((cat) => {
        const noticeHtml = cat.aviso
          ? `<div class="category-notice"><span>&#9733;</span><span>${cat.aviso}</span></div>`
          : "";

        const itemsHtml = cat.itens
          .map((item) => {
            const badgeHtml = item.badge
              ? `<span class="product-badge">${item.badge}</span>`
              : "";

            const pricesHtml = item.precos
              .map(
                (p) => `
                  <div class="price-row">
                    <span class="price-weight">${p.peso}</span>
                    <span class="price-value">${p.valor}</span>
                  </div>
                `
              )
              .join("");

            const whatsappLink = buildWhatsAppUrl(item.mensagemWhatsapp);

            return `
              <article class="product-card">
                <div class="product-media">
                  <img
                    src="${item.imagem}"
                    alt="${item.imagemAlt}"
                    class="product-image"
                    loading="lazy"
                  />
                  ${badgeHtml}
                </div>
                <div class="product-body">
                  <h4 class="product-title">${item.nome}</h4>
                  <p class="product-desc">${item.descricao}</p>
                  <div class="product-prices">
                    ${pricesHtml}
                  </div>
                  <a
                    href="${whatsappLink}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn btn-wine btn-full"
                  >
                    Encomendar pelo WhatsApp
                  </a>
                </div>
              </article>
            `;
          })
          .join("");

        const extraBarHtml = cat.notaExtra
          ? `
            <div class="category-extra-bar">
              <p>${cat.notaExtra.texto}</p>
              <a
                href="${buildWhatsAppUrl(cat.notaExtra.mensagemWhatsapp)}"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-outline-wine btn-sm"
              >
                ${cat.notaExtra.textoBotao}
              </a>
            </div>
          `
          : "";

        return `
          <section class="menu-category" id="cat-${cat.id}">
            <div class="menu-category-header">
              <div class="menu-category-title-wrap">
                <span class="menu-category-sub">${cat.subtitulo}</span>
                <h3 class="menu-category-title">${cat.nome}</h3>
                <p class="menu-category-desc">${cat.descricao}</p>
              </div>
              ${noticeHtml}
            </div>
            <div class="menu-grid">
              ${itemsHtml}
            </div>
            ${extraBarHtml}
          </section>
        `;
      })
      .join("");
  }

  // Menu mobile drawer
  function setupMobileMenu() {
    const btn = document.getElementById("mobileMenuBtn");
    const drawer = document.getElementById("mobileDrawer");
    if (!btn || !drawer) return;

    const closeDrawer = () => {
      drawer.classList.remove("open");
      btn.setAttribute("aria-expanded", "false");
      drawer.setAttribute("aria-hidden", "true");
    };

    btn.addEventListener("click", () => {
      const isOpen = drawer.classList.toggle("open");
      btn.setAttribute("aria-expanded", String(isOpen));
      drawer.setAttribute("aria-hidden", String(!isOpen));
    });

    drawer.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeDrawer);
    });
  }

  // Destaque do link ativo no menu e sombra no header ao rolar
  function setupScrollEffects() {
    const header = document.querySelector(".site-header");
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("main section[id]");

    const onScroll = () => {
      if (header) {
        header.classList.toggle("scrolled", window.scrollY > 24);
      }

      const scrollPos = window.scrollY + 130;
      sections.forEach((sec) => {
        const top = sec.offsetTop;
        const height = sec.offsetHeight;
        const id = sec.getAttribute("id");

        if (scrollPos >= top && scrollPos < top + height) {
          navLinks.forEach((link) => {
            link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
          });
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  // Animação discreta ao entrar na tela
  function setupRevealAnimations() {
    const elements = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((el) => observer.observe(el));
  }

  // Inicialização
  document.addEventListener("DOMContentLoaded", () => {
    const yearEl = document.getElementById("currentYear");
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }

    renderFilters("todas");
    renderMenu("todas");
    setupMobileMenu();
    setupScrollEffects();
    setupRevealAnimations();
  });
})();
