/**
 * ============================================================================
 * HubUP! — Application Engine (Catalog, Search, Carousels, Modal & Forms)
 * ============================================================================
 */

(function () {
  "use strict";

  const data = window.catalogData;
  const artworks = window.HubUPArtworks;
  if (!data || !artworks) return;

  // DOM References
  const siteHeader = document.getElementById("siteHeader");
  const catalogMain = document.getElementById("catalogMain");
  const mainContent = document.getElementById("mainContent");

  // Search DOM
  const searchBox = document.getElementById("searchBox");
  const searchToggle = document.getElementById("searchToggle");
  const searchInput = document.getElementById("catalogSearchInput");
  const searchClear = document.getElementById("searchClear");
  const searchResultsSection = document.getElementById("searchResultsSection");
  const searchResultsTitle = document.getElementById("searchResultsTitle");
  const searchResultsGrid = document.getElementById("searchResultsGrid");
  const resetSearchBtn = document.getElementById("resetSearchBtn");

  // Mobile Nav
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const mobileNav = document.getElementById("mobileNav");

  // Modal DOM
  const productModal = document.getElementById("productModal");
  const modalCloseBtn = document.getElementById("modalCloseBtn");
  const modalArtwork = document.getElementById("modalArtwork");
  const modalBadges = document.getElementById("modalBadges");
  const modalTitle = document.getElementById("modalTitle");
  const modalPitch = document.getElementById("modalPitch");
  const modalDescription = document.getElementById("modalDescription");
  const modalFeatures = document.getElementById("modalFeatures");
  const modalGains = document.getElementById("modalGains");
  const modalTags = document.getElementById("modalTags");
  const modalMetrics = document.getElementById("modalMetrics");
  const modalSiteLink = document.getElementById("modalSiteLink");
  const modalDetailPanel = document.getElementById("modalDetailPanel");
  const modalDemoPanel = document.getElementById("modalDemoPanel");
  const openDemoFromModalBtn = document.getElementById("openDemoFromModalBtn");
  const backToDetailsBtn = document.getElementById("backToDetailsBtn");
  const demoRequestForm = document.getElementById("demoRequestForm");
  const demoProductInput = document.getElementById("demoProductInput");
  const sendDemoWhatsappBtn = document.getElementById("sendDemoWhatsappBtn");

  // Drawer DOM
  const specsDrawer = document.getElementById("specsDrawer");
  const drawerBackdrop = document.getElementById("drawerBackdrop");
  const heroMoreInfoBtn = document.getElementById("heroMoreInfoBtn");
  const drawerCloseBtn = document.getElementById("drawerCloseBtn");
  const drawerTitle = document.getElementById("drawerTitle");
  const drawerIntro = document.getElementById("drawerIntro");
  const drawerSpecsList = document.getElementById("drawerSpecsList");
  const drawerSiteLink = document.getElementById("drawerSiteLink");
  const drawerOpenFullModal = document.getElementById("drawerOpenFullModal");
  const drawerScrollCatalog = document.getElementById("drawerScrollCatalog");

  // Hero Dynamic Preview DOM
  const heroContent = document.getElementById("heroContent");
  const heroVisual = document.getElementById("heroVisual");
  const heroBadgeText = document.getElementById("heroBadgeText");
  const heroTitle = document.getElementById("heroTitle");
  const heroMetaRow = document.getElementById("heroMetaRow");
  const heroPitch = document.getElementById("heroPitch");
  const heroExploreBtn = document.getElementById("heroExploreBtn");
  const heroExploreLabel = document.getElementById("heroExploreLabel");
  const heroStats = document.getElementById("heroStats");
  const hudEngineLabel = document.getElementById("hudEngineLabel");
  const hudStatusText = document.getElementById("hudStatusText");
  const hudPreviewArea = document.getElementById("hudPreviewArea");
  const hudFooterMetrics = document.getElementById("hudFooterMetrics");

  // Footer Form & Toast
  const footerContactForm = document.getElementById("footerContactForm");
  const toast = document.getElementById("toast");
  const toastMessage = document.getElementById("toastMessage");

  let activeProduct = null;
  let activeHeroProductId = "anonymize";
  let hoverPreviewTimer = null;
  let heroSwapTimer = null;
  let toastTimeout = null;

  // ==========================================================================
  // Helpers
  // ==========================================================================
  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function formatBrandHtml(str) {
    return escapeHtml(str).replace(
      /HubUP!/g,
      '<span class="brand-inline">Hub<span class="brand-text-accent">UP!</span></span>'
    );
  }

  function showToast(message) {
    toastMessage.innerHTML = formatBrandHtml(message);
    toast.classList.add("show");
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.remove("show");
    }, 4200);
  }

  function getProductById(id) {
    return data.products.find((p) => p.id === id) || null;
  }

  function lockScroll(lock) {
    document.body.classList.toggle("no-scroll", lock);
  }

  // ==========================================================================
  // Dynamic Hero Preview (Hover & Preview Button)
  // ==========================================================================
  const anonymizeDocPreviewHtml = `
    <div class="hud-doc-preview">
      <div class="hud-scan-line"></div>
      <div>DOC_ID: CONTRATO_CLINICO_2026.PDF</div>
      <div>TITULAR: <span class="redacted-token">[NOME_OCULTADO]</span></div>
      <div>DOC_FED: <span class="redacted-token">[CPF_MASCARADO]</span></div>
      <div>ENDERECO: <span class="redacted-token">[LOCAL_ANONIMIZADO]</span></div>
      <div>DIAGNOSTICO: <span class="redacted-token">[DADO_SENSIVEL_LGPD]</span></div>
      <div>STATUS: CONFORMIDADE VERIFICADA &check;</div>
    </div>
  `;

  function markPreviewingCard(productId) {
    document.querySelectorAll(".product-card").forEach((el) => {
      el.classList.toggle("is-previewing", el.dataset.productId === productId);
    });
  }

  function populateSpecsDrawer(product) {
    if (!product) return;
    drawerTitle.textContent = `${product.title}`;
    drawerIntro.textContent = product.descriptionFull;
    const specs = product.specs || [];
    drawerSpecsList.innerHTML = specs
      .map(
        (s) => `
        <div class="spec-row">
          <span class="spec-key">${escapeHtml(s.key)}</span>
          <span class="spec-val">${escapeHtml(s.value)}</span>
        </div>
      `
      )
      .join("");
    drawerOpenFullModal.textContent = `Abrir Ficha Completa — ${product.title}`;

    if (drawerSiteLink) {
      if (product.siteUrl) {
        drawerSiteLink.href = product.siteUrl;
        drawerSiteLink.textContent = `Acessar Site Oficial — ${product.title} ↗`;
        drawerSiteLink.style.display = "inline-flex";
      } else {
        drawerSiteLink.style.display = "none";
      }
    }
  }

  function renderHeroContent(product) {
    heroBadgeText.textContent = product.heroBadge || product.badge.toUpperCase();
    heroTitle.textContent = product.heroTitle || product.title.toUpperCase();

    const pills = product.tags
      .slice(0, 3)
      .map((tag) => `<span class="hero-tag-pill">${escapeHtml(tag.toUpperCase())}</span>`)
      .join("");

    heroMetaRow.innerHTML = `
      <span class="hero-match">${escapeHtml(product.match)}</span>
      <span>&bull;</span>
      ${pills}
      <span>${escapeHtml(product.heroSubtitleMeta || product.category)}</span>
    `;

    heroPitch.textContent = product.heroPitch || product.pitchShort;
    heroExploreBtn.dataset.openProduct = product.id;
    heroExploreLabel.textContent = `Explorar ${product.title}`;

    const stats = product.heroStats || [];
    heroStats.innerHTML = stats
      .map(
        (st) => `
        <div class="hero-stat-item">
          <span class="hero-stat-value">${escapeHtml(st.value)}</span>
          <span class="hero-stat-label">${escapeHtml(st.label)}</span>
        </div>
      `
      )
      .join("");

    hudEngineLabel.textContent = product.hudLabel || `${product.title.toUpperCase()} ENGINE`;
    hudStatusText.textContent = product.hudStatus || "ONLINE & PRONTO";

    if (product.id === "anonymize") {
      hudPreviewArea.innerHTML = anonymizeDocPreviewHtml;
      hudFooterMetrics.innerHTML = `
        <div class="hud-metric">
          <span class="hud-metric-val">24</span>
          <span class="hud-metric-lbl">Entidades PII</span>
        </div>
        <div class="hud-metric">
          <span class="hud-metric-val">AES-256</span>
          <span class="hud-metric-lbl">Criptografia</span>
        </div>
        <div class="hud-metric">
          <span class="hud-metric-val">ZERO</span>
          <span class="hud-metric-lbl">Exposição</span>
        </div>
      `;
    } else {
      hudPreviewArea.innerHTML = `
        <div class="hud-artwork-preview">
          ${artworks.get(product.artwork)}
          <div class="hud-scan-line"></div>
        </div>
      `;
      hudFooterMetrics.innerHTML = stats
        .slice(0, 3)
        .map(
          (st) => `
          <div class="hud-metric">
            <span class="hud-metric-val">${escapeHtml(st.value)}</span>
            <span class="hud-metric-lbl">${escapeHtml(st.label.split(" ").slice(0, 2).join(" "))}</span>
          </div>
        `
        )
        .join("");
    }

    populateSpecsDrawer(product);
  }

  function updateHeroPreview(productId, options = {}) {
    const { scrollToHero = false } = options;
    const product = getProductById(productId);
    if (!product) return;

    if (scrollToHero && searchInput.value.trim()) {
      clearSearch();
    }

    if (activeHeroProductId === productId) {
      markPreviewingCard(productId);
      if (scrollToHero) {
        document.getElementById("inicio")?.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }

    activeHeroProductId = productId;
    markPreviewingCard(productId);

    clearTimeout(heroSwapTimer);
    heroContent.classList.add("hero-swap");
    heroVisual.classList.add("hero-swap");

    heroSwapTimer = setTimeout(() => {
      renderHeroContent(product);
      heroContent.classList.remove("hero-swap");
      heroVisual.classList.remove("hero-swap");
    }, 150);

    if (scrollToHero) {
      document.getElementById("inicio")?.scrollIntoView({ behavior: "smooth" });
    }
  }

  // ==========================================================================
  // Card Template
  // ==========================================================================
  function createProductCard(product) {
    const card = document.createElement("article");
    card.className = "product-card";
    if (product.id === activeHeroProductId) {
      card.classList.add("is-previewing");
    }
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `Ver detalhes de ${product.title}`);
    card.dataset.productId = product.id;

    const visibleTags = product.tags.slice(0, 3);
    const extraCount = product.tags.length - visibleTags.length;

    card.innerHTML = `
      <div class="card-poster">
        ${artworks.get(product.artwork)}
        <div class="card-poster-overlay"></div>
        <div class="card-top-badges">
          ${product.rank ? `<span class="card-rank-badge">${escapeHtml(product.rank)}</span>` : ""}
          <span class="card-status-pill">
            <span class="card-status-dot"></span>
            ${escapeHtml(product.status)}
          </span>
        </div>
      </div>
      <div class="card-body">
        <span class="card-category">${escapeHtml(product.badge)}</span>
        <h3 class="card-title">${escapeHtml(product.title)}</h3>
        <p class="card-pitch">${escapeHtml(product.pitchShort)}</p>
        <div class="card-tags">
          ${visibleTags.map((t) => `<span class="tech-tag">${escapeHtml(t)}</span>`).join("")}
          ${extraCount > 0 ? `<span class="tech-tag">+${extraCount}</span>` : ""}
        </div>
        <div class="card-footer">
          <span class="card-match">${escapeHtml(product.match)}</span>
          <div class="card-footer-actions">
            <button type="button" class="card-preview-btn" aria-label="Visualizar ${escapeHtml(product.title)} no destaque principal">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" aria-hidden="true">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
              Preview
            </button>
            <span class="card-cta">
              Ver Detalhes
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" aria-hidden="true">
                <path d="M5 12h14M13 5l7 7-7 7" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
          </div>
        </div>
      </div>
    `;

    // Hover atualiza dinamicamente o Hero Banner com debounce suave
    card.addEventListener("mouseenter", () => {
      clearTimeout(hoverPreviewTimer);
      hoverPreviewTimer = setTimeout(() => {
        updateHeroPreview(product.id, { scrollToHero: false });
      }, 140);
    });

    card.addEventListener("mouseleave", () => {
      clearTimeout(hoverPreviewTimer);
    });

    // Botão Preview atualiza o Hero e rola suavemente até o destaque
    const previewBtn = card.querySelector(".card-preview-btn");
    previewBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      if (card.closest(".rail-track")?.dataset.wasDragged === "true") return;
      updateHeroPreview(product.id, { scrollToHero: true });
    });

    card.addEventListener("click", (e) => {
      if (card.closest(".rail-track")?.dataset.wasDragged === "true") {
        e.preventDefault();
        return;
      }
      openProductModal(product.id);
    });

    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openProductModal(product.id);
      }
    });

    return card;
  }

  // ==========================================================================
  // Render Netflix-Style Catalog Rails
  // ==========================================================================
  function renderCatalogRails() {
    catalogMain.innerHTML = "";

    data.rails.forEach((rail) => {
      const items = data.products.filter((p) => p.railId === rail.id);
      if (!items.length) return;

      const section = document.createElement("section");
      section.className = "catalog-rail";
      section.id = rail.id;
      section.setAttribute("aria-labelledby", `title-${rail.id}`);

      section.innerHTML = `
        <div class="container">
          <div class="rail-header">
            <div>
              <span class="rail-eyebrow">${escapeHtml(rail.eyebrow)}</span>
              <h2 class="rail-title" id="title-${rail.id}">
                ${formatBrandHtml(rail.title)}
                <span class="rail-count">${items.length} ${items.length === 1 ? "solução" : "soluções"}</span>
              </h2>
            </div>
            <span class="rail-controls-hint">Arraste ou use as setas &rarr;</span>
          </div>
        </div>
        <div class="rail-wrapper">
          <button type="button" class="rail-arrow prev hidden" aria-label="Rolar ${escapeHtml(rail.title)} para a esquerda">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4">
              <path d="M15 18l-6-6 6-6" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <div class="rail-track" tabindex="0" aria-label="Carrossel ${escapeHtml(rail.title)}"></div>
          <button type="button" class="rail-arrow next" aria-label="Rolar ${escapeHtml(rail.title)} para a direita">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4">
              <path d="M9 18l6-6-6-6" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      `;

      const track = section.querySelector(".rail-track");
      items.forEach((product) => track.appendChild(createProductCard(product)));

      catalogMain.appendChild(section);
      setupRailCarousel(section, track);
    });
  }

  function setupRailCarousel(section, track) {
    const prevBtn = section.querySelector(".rail-arrow.prev");
    const nextBtn = section.querySelector(".rail-arrow.next");

    function updateArrows() {
      const maxScroll = track.scrollWidth - track.clientWidth;
      if (maxScroll <= 8) {
        prevBtn.classList.add("hidden");
        nextBtn.classList.add("hidden");
        return;
      }
      prevBtn.classList.toggle("hidden", track.scrollLeft <= 12);
      nextBtn.classList.toggle("hidden", track.scrollLeft >= maxScroll - 12);
    }

    prevBtn.addEventListener("click", () => {
      const step = Math.max(track.clientWidth * 0.72, 340);
      track.scrollBy({ left: -step, behavior: "smooth" });
    });

    nextBtn.addEventListener("click", () => {
      const step = Math.max(track.clientWidth * 0.72, 340);
      track.scrollBy({ left: step, behavior: "smooth" });
    });

    track.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);

    // Drag-to-scroll with click protection
    let isDown = false;
    let startX = 0;
    let scrollStart = 0;
    let moved = false;

    track.addEventListener("mousedown", (e) => {
      if (e.button !== 0) return;
      isDown = true;
      moved = false;
      track.dataset.wasDragged = "false";
      track.classList.add("dragging");
      startX = e.pageX - track.offsetLeft;
      scrollStart = track.scrollLeft;
    });

    window.addEventListener("mouseup", () => {
      if (!isDown) return;
      isDown = false;
      track.classList.remove("dragging");
      if (moved) {
        track.dataset.wasDragged = "true";
        setTimeout(() => {
          track.dataset.wasDragged = "false";
        }, 60);
      }
    });

    track.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      const x = e.pageX - track.offsetLeft;
      const walk = (x - startX) * 1.25;
      if (Math.abs(walk) > 6) {
        moved = true;
        e.preventDefault();
        track.scrollLeft = scrollStart - walk;
      }
    });

    requestAnimationFrame(updateArrows);
  }

  // ==========================================================================
  // Real-Time Instant Search
  // ==========================================================================
  function performSearch(rawQuery) {
    const query = rawQuery.trim().toLowerCase();
    searchClear.classList.toggle("visible", query.length > 0);

    if (!query) {
      searchResultsSection.classList.remove("active");
      mainContent.style.display = "";
      return;
    }

    const matches = data.products.filter((p) => {
      const haystack = [
        p.title,
        p.badge,
        p.category,
        p.pitchShort,
        p.descriptionFull,
        ...p.tags
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(query);
    });

    mainContent.style.display = "none";
    searchResultsSection.classList.add("active");
    searchResultsTitle.innerHTML = `Resultados para <span>"${escapeHtml(rawQuery.trim())}"</span> (${matches.length})`;
    searchResultsGrid.innerHTML = "";

    if (!matches.length) {
      searchResultsGrid.innerHTML = `
        <div class="search-empty">
          <h3>Nenhuma solução encontrada para "${escapeHtml(rawQuery.trim())}"</h3>
          <p>Tente buscar por termos como <strong>LGPD</strong>, <strong>Anonymize</strong>, <strong>FastAPI</strong>, <strong>IA</strong>, <strong>Docker</strong> ou <strong>WhatsApp</strong>.</p>
          <button type="button" class="btn btn-primary" id="emptyResetBtn">Ver Todo o Catálogo</button>
        </div>
      `;
      document.getElementById("emptyResetBtn")?.addEventListener("click", clearSearch);
      return;
    }

    matches.forEach((p) => searchResultsGrid.appendChild(createProductCard(p)));
  }

  function clearSearch() {
    searchInput.value = "";
    performSearch("");
    searchBox.classList.remove("open");
  }

  searchToggle.addEventListener("click", () => {
    const willOpen = !searchBox.classList.contains("open");
    searchBox.classList.toggle("open", willOpen);
    if (willOpen) {
      searchInput.focus();
    } else if (!searchInput.value.trim()) {
      searchBox.classList.remove("open");
    }
  });

  searchInput.addEventListener("input", (e) => {
    performSearch(e.target.value);
  });

  searchClear.addEventListener("click", () => {
    clearSearch();
    searchInput.focus();
  });

  resetSearchBtn.addEventListener("click", clearSearch);

  // ==========================================================================
  // Product Detail Modal & Quick Demo Form
  // ==========================================================================
  function populateModal(product) {
    activeProduct = product;
    modalArtwork.innerHTML = artworks.get(product.artwork);
    modalBadges.innerHTML = `
      ${product.rank ? `<span class="card-rank-badge">${escapeHtml(product.rank)}</span>` : ""}
      <span class="hero-tag-pill" style="color: var(--neon-cyan); border-color: rgba(0,229,255,0.4);">${escapeHtml(product.badge)}</span>
      <span class="card-status-pill" style="margin-left: 0;">
        <span class="card-status-dot"></span>
        ${escapeHtml(product.status)}
      </span>
    `;
    modalTitle.textContent = product.title;
    modalPitch.textContent = product.pitchShort;
    modalDescription.textContent = product.descriptionFull;
    modalGains.textContent = product.gains;
    modalMetrics.textContent = product.metrics;

    modalFeatures.innerHTML = product.keyFeatures
      .map(
        (feat) => `
        <li>
          <svg class="feature-check" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
            <path d="M20 6L9 17l-5-5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>${escapeHtml(feat)}</span>
        </li>
      `
      )
      .join("");

    modalTags.innerHTML = product.tags
      .map((tag) => `<span class="tech-tag">${escapeHtml(tag)}</span>`)
      .join("");

    if (modalSiteLink) {
      if (product.siteUrl) {
        modalSiteLink.href = product.siteUrl;
        modalSiteLink.textContent = `Visitar Site Oficial ↗`;
        modalSiteLink.style.display = "inline-flex";
      } else {
        modalSiteLink.style.display = "none";
      }
    }

    demoProductInput.value = product.title;
  }

  function showModalView(view) {
    const isDemo = view === "demo";
    modalDetailPanel.classList.toggle("hidden", isDemo);
    modalDemoPanel.classList.toggle("active", isDemo);
    if (isDemo) {
      setTimeout(() => {
        document.getElementById("demoNameInput")?.focus();
      }, 80);
    }
  }

  function openProductModal(productId, startInDemo = false) {
    const product = getProductById(productId);
    if (!product) return;
    closeSpecsDrawer();
    populateModal(product);
    backToDetailsBtn.style.display = "";
    showModalView(startInDemo ? "demo" : "details");
    productModal.classList.add("open");
    productModal.setAttribute("aria-hidden", "false");
    lockScroll(true);
  }

  function openGeneralDemoModal(subjectTitle) {
    closeSpecsDrawer();
    activeProduct = null;
    modalArtwork.innerHTML = artworks.get("anonymize");
    modalBadges.innerHTML = `
      <span class="hero-tag-pill" style="color: var(--neon-cyan); border-color: rgba(0,229,255,0.4);">ATENDIMENTO CONSULTIVO</span>
      <span class="card-status-pill" style="margin-left: 0;">
        <span class="card-status-dot"></span>
        Agenda Aberta
      </span>
    `;
    modalTitle.textContent = "Agendar Demonstração";
    demoProductInput.value = subjectTitle || "HubUP! — Consultoria & Demo Geral";
    backToDetailsBtn.style.display = "none";
    showModalView("demo");
    productModal.classList.add("open");
    productModal.setAttribute("aria-hidden", "false");
    lockScroll(true);
  }

  function closeProductModal() {
    productModal.classList.remove("open");
    productModal.setAttribute("aria-hidden", "true");
    lockScroll(false);
  }

  openDemoFromModalBtn.addEventListener("click", () => {
    showModalView("demo");
  });

  backToDetailsBtn.addEventListener("click", () => {
    showModalView("details");
  });

  modalCloseBtn.addEventListener("click", closeProductModal);

  productModal.addEventListener("click", (e) => {
    if (e.target === productModal) {
      closeProductModal();
    }
  });

  // Delegated triggers for Hero Explore & Header Demo buttons
  document.querySelectorAll("[data-open-product]").forEach((btn) => {
    btn.addEventListener("click", () => {
      openProductModal(btn.dataset.openProduct, false);
    });
  });

  document.querySelectorAll("[data-open-demo]").forEach((btn) => {
    btn.addEventListener("click", () => {
      mobileNav.classList.remove("open");
      mobileMenuBtn.setAttribute("aria-expanded", "false");
      openGeneralDemoModal(btn.dataset.openDemo);
    });
  });

  // ==========================================================================
  // Lead Sync & Email Dispatch (Web3Forms / FormSubmit AJAX + Mailto Fallback)
  // ==========================================================================
  async function submitLeadToEmail(payload, submitBtn) {
    const emailTarget = data.contactEmail || "empresa.hubup@gmail.com";
    const web3Key = (data.web3formsAccessKey || "").trim();
    const originalText = submitBtn ? submitBtn.textContent : "";

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = "Enviando...";
    }

    // Backup local em localStorage para rastreabilidade
    try {
      const stored = JSON.parse(localStorage.getItem("hubup_leads") || "[]");
      stored.push({ ...payload, timestamp: new Date().toISOString() });
      localStorage.setItem("hubup_leads", JSON.stringify(stored));
    } catch (_) {
      // Ignora erro de storage bloqueado
    }

    try {
      // 1. Se houver Access Key do Web3Forms (funciona em localhost e produção)
      if (web3Key) {
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify({
            access_key: web3Key,
            subject: payload.subject,
            from_name: "Site HubUP!",
            replyto: payload.fields.Email || emailTarget,
            ...payload.fields
          })
        });
        const json = await res.json().catch(() => ({}));
        if (res.ok && json.success) {
          return { ok: true, mode: "web3forms" };
        }
        throw new Error(json.message || `Web3Forms HTTP ${res.status}`);
      }

      // 2. Tentativa via FormSubmit AJAX (requer ativação única no e-mail e domínio público)
      const response = await fetch(
        `https://formsubmit.co/ajax/${encodeURIComponent(emailTarget)}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify({
            _subject: payload.subject,
            _template: "table",
            _captcha: "false",
            ...payload.fields
          })
        }
      );

      const json = await response.json().catch(() => ({}));
      const succeeded =
        response.ok && (json.success === true || json.success === "true");

      if (succeeded) {
        return { ok: true, mode: "formsubmit" };
      }

      // FormSubmit retornou aviso de ativação ou restrição de localhost
      const apiMsg = String(json.message || "");
      if (apiMsg.toLowerCase().includes("activation")) {
        return {
          ok: false,
          mode: "needs_activation",
          message: `Ative o formulário clicando no e-mail enviado pelo FormSubmit para ${emailTarget} (verifique também a pasta Spam).`
        };
      }

      throw new Error(apiMsg || `HTTP ${response.status}`);
    } catch (err) {
      console.warn("Envio automático indisponível:", err);
      // Fallback via mailto para garantir que o lead possa ser enviado agora
      const bodyLines = Object.entries(payload.fields)
        .map(([k, v]) => `${k}: ${v}`)
        .join("\n");
      const mailtoUrl = `mailto:${emailTarget}?subject=${encodeURIComponent(
        payload.subject
      )}&body=${encodeURIComponent(bodyLines)}`;
      window.location.href = mailtoUrl;
      return {
        ok: false,
        mode: "mailto",
        message: `Envio direto bloqueado em localhost. Abrindo seu cliente de e-mail para ${emailTarget}.`
      };
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      }
    }
  }

  // Demo Form Submission
  demoRequestForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.getElementById("demoNameInput").value.trim();
    const company = document.getElementById("demoCompanyInput").value.trim();
    const email = document.getElementById("demoEmailInput").value.trim();
    const phone = document.getElementById("demoPhoneInput").value.trim() || "Não informado";
    const notes = document.getElementById("demoNotesInput").value.trim() || "Sem observações adicionais";
    const product = demoProductInput.value.trim();

    if (!name || !company || !email || !email.includes("@")) {
      showToast("Preencha nome, empresa e um e-mail corporativo válido.");
      return;
    }

    const submitBtn = demoRequestForm.querySelector('button[type="submit"]');
    const result = await submitLeadToEmail(
      {
        subject: `[HubUP! Demo] ${product} — ${company}`,
        fields: {
          Origem: "Formulário de Demonstração (Modal)",
          Software: product,
          Nome: name,
          Empresa: company,
          Email: email,
          WhatsApp: phone,
          Cenario: notes
        }
      },
      submitBtn
    );

    if (result.ok) {
      demoRequestForm.reset();
      closeProductModal();
      showToast(`Solicitação enviada para ${data.contactEmail}! Retornaremos sobre "${product}".`);
    } else {
      showToast(result.message);
    }
  });

  // Demo WhatsApp Redirect
  sendDemoWhatsappBtn.addEventListener("click", () => {
    const product = demoProductInput.value.trim() || "Soluções HubUP!";
    const name = document.getElementById("demoNameInput").value.trim();
    const company = document.getElementById("demoCompanyInput").value.trim();
    const notes = document.getElementById("demoNotesInput").value.trim();

    const parts = [
      `Olá equipe HubUP! Gostaria de agendar uma demonstração do software: *${product}*.`
    ];
    if (name) parts.push(`Nome: ${name}`);
    if (company) parts.push(`Empresa: ${company}`);
    if (notes) parts.push(`Cenário: ${notes}`);

    const url = `https://wa.me/${data.whatsappNumber}?text=${encodeURIComponent(parts.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
    showToast(`Abrindo WhatsApp comercial para "${product}"...`);
  });

  // ==========================================================================
  // Anonymize Specs Drawer ("Saiba Mais")
  // ==========================================================================
  function openSpecsDrawer() {
    specsDrawer.classList.add("open");
    drawerBackdrop.classList.add("open");
    specsDrawer.setAttribute("aria-hidden", "false");
    drawerBackdrop.setAttribute("aria-hidden", "false");
    lockScroll(true);
  }

  function closeSpecsDrawer() {
    specsDrawer.classList.remove("open");
    drawerBackdrop.classList.remove("open");
    specsDrawer.setAttribute("aria-hidden", "true");
    drawerBackdrop.setAttribute("aria-hidden", "true");
    if (!productModal.classList.contains("open")) {
      lockScroll(false);
    }
  }

  heroMoreInfoBtn.addEventListener("click", openSpecsDrawer);
  drawerCloseBtn.addEventListener("click", closeSpecsDrawer);
  drawerBackdrop.addEventListener("click", closeSpecsDrawer);

  drawerOpenFullModal.addEventListener("click", () => {
    closeSpecsDrawer();
    openProductModal(activeHeroProductId, false);
  });

  drawerScrollCatalog.addEventListener("click", () => {
    closeSpecsDrawer();
    document.getElementById("trilho-saas")?.scrollIntoView({ behavior: "smooth" });
  });

  // ==========================================================================
  // Global ESC key handler
  // ==========================================================================
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (productModal.classList.contains("open")) {
        closeProductModal();
      } else if (specsDrawer.classList.contains("open")) {
        closeSpecsDrawer();
      } else if (mobileNav.classList.contains("open")) {
        mobileNav.classList.remove("open");
        mobileMenuBtn.setAttribute("aria-expanded", "false");
      } else if (searchInput.value.trim()) {
        clearSearch();
      }
    }
  });

  // ==========================================================================
  // Header Scroll Effect, Active Nav & Mobile Menu
  // ==========================================================================
  function handleScroll() {
    siteHeader.classList.toggle("scrolled", window.scrollY > 24);
  }

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  mobileMenuBtn.addEventListener("click", () => {
    const isOpen = mobileNav.classList.toggle("open");
    mobileMenuBtn.setAttribute("aria-expanded", String(isOpen));
  });

  document.querySelectorAll(".mobile-nav a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("open");
      mobileMenuBtn.setAttribute("aria-expanded", "false");
      if (searchInput.value.trim()) clearSearch();
    });
  });

  document.querySelectorAll(".main-nav a").forEach((link) => {
    link.addEventListener("click", () => {
      if (searchInput.value.trim()) clearSearch();
      document.querySelectorAll(".main-nav a").forEach((l) => l.classList.remove("active"));
      link.classList.add("active");
    });
  });

  // ==========================================================================
  // Footer Contact Form
  // ==========================================================================
  footerContactForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.getElementById("footerName").value.trim();
    const email = document.getElementById("footerEmail").value.trim();
    const message = document.getElementById("footerMessage").value.trim();

    if (!name || !email || !email.includes("@") || !message) {
      showToast("Por favor, preencha nome, e-mail válido e sua mensagem.");
      return;
    }

    const submitBtn = footerContactForm.querySelector('button[type="submit"]');
    const result = await submitLeadToEmail(
      {
        subject: `[HubUP! Contato Comercial] Mensagem de ${name}`,
        fields: {
          Origem: "Formulário de Contato (Rodapé)",
          Nome: name,
          Email: email,
          Mensagem: message
        }
      },
      submitBtn
    );

    if (result.ok) {
      footerContactForm.reset();
      showToast(`Obrigado, ${name}! Sua mensagem foi enviada para ${data.contactEmail}.`);
    } else {
      showToast(result.message);
    }
  });

  // Initialize
  renderCatalogRails();
  const initialProduct = getProductById(activeHeroProductId);
  if (initialProduct) {
    renderHeroContent(initialProduct);
  }
})();
