/**
 * ============================================================================
 * HubUP! — Gerador de Capas Vetoriais SVG (Estilo Catálogo Streaming Tech)
 * ============================================================================
 * Gera artes cinematográficas 16:9 leves, nítidas em qualquer resolução (4K/Retina)
 * e com estética Cyberpunk Tech coerente para cada produto do catálogo.
 */

window.HubUPArtworks = (function () {
  function baseWrapper(bgGrad, accent1, accent2, innerSvg) {
    return `
      <svg viewBox="0 0 640 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
        <defs>
          <linearGradient id="bg-${bgGrad}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#070B14"/>
            <stop offset="55%" stop-color="#0D1526"/>
            <stop offset="100%" stop-color="#060911"/>
          </linearGradient>
          <radialGradient id="glow-${bgGrad}" cx="70%" cy="35%" r="60%">
            <stop offset="0%" stop-color="${accent1}" stop-opacity="0.34"/>
            <stop offset="50%" stop-color="${accent2}" stop-opacity="0.12"/>
            <stop offset="100%" stop-color="#07090E" stop-opacity="0"/>
          </radialGradient>
          <pattern id="grid-${bgGrad}" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M 32 0 L 0 0 0 32" fill="none" stroke="${accent1}" stroke-opacity="0.08" stroke-width="1"/>
          </pattern>
        </defs>
        <rect width="640" height="360" fill="url(#bg-${bgGrad})"/>
        <rect width="640" height="360" fill="url(#grid-${bgGrad})"/>
        <rect width="640" height="360" fill="url(#glow-${bgGrad})"/>
        ${innerSvg}
      </svg>
    `;
  }

  const templates = {
    anonymize: () =>
      baseWrapper(
        "anon",
        "#00E5FF",
        "#2979FF",
        `
        <g opacity="0.9">
          <!-- Digital Document Frame -->
          <rect x="76" y="64" width="230" height="232" rx="14" fill="rgba(13,17,23,0.78)" stroke="#00E5FF" stroke-opacity="0.4" stroke-width="1.5"/>
          <rect x="102" y="96" width="120" height="10" rx="5" fill="#94A3B8" fill-opacity="0.35"/>
          <rect x="102" y="122" width="175" height="16" rx="4" fill="#00E5FF" fill-opacity="0.22" stroke="#00E5FF" stroke-opacity="0.6"/>
          <rect x="102" y="152" width="150" height="10" rx="5" fill="#94A3B8" fill-opacity="0.25"/>
          <rect x="102" y="176" width="168" height="16" rx="4" fill="#2979FF" fill-opacity="0.28" stroke="#2979FF" stroke-opacity="0.7"/>
          <rect x="102" y="208" width="136" height="16" rx="4" fill="#00E5FF" fill-opacity="0.2" stroke="#00E5FF" stroke-opacity="0.55"/>
          <rect x="102" y="242" width="108" height="10" rx="5" fill="#10B981" fill-opacity="0.5"/>
          <!-- Shield Emblem -->
          <g transform="translate(360, 68)">
            <path d="M100 12L186 44V112C186 168 148 214 100 232C52 214 14 168 14 112V44L100 12Z" fill="rgba(0,229,255,0.1)" stroke="#00E5FF" stroke-width="2.5"/>
            <path d="M100 34L164 58V110C164 154 136 189 100 205C64 189 36 154 36 110V58L100 34Z" fill="rgba(41,121,255,0.14)" stroke="#2979FF" stroke-opacity="0.7" stroke-width="1.5"/>
            <path d="M74 116L93 135L132 92" fill="none" stroke="#00E5FF" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
          <line x1="60" y1="164" x2="322" y2="164" stroke="#00E5FF" stroke-width="2" stroke-opacity="0.8"/>
        </g>
      `
      ),

    barize: () =>
      baseWrapper(
        "barize",
        "#00E5FF",
        "#3B82F6",
        `
        <g>
          <!-- Table Grid & Split UI -->
          <rect x="64" y="68" width="250" height="218" rx="14" fill="rgba(13,17,23,0.82)" stroke="#2979FF" stroke-opacity="0.45" stroke-width="1.5"/>
          <circle cx="122" cy="126" r="26" fill="rgba(0,229,255,0.15)" stroke="#00E5FF" stroke-width="2"/>
          <circle cx="204" cy="126" r="26" fill="rgba(41,121,255,0.18)" stroke="#2979FF" stroke-width="2"/>
          <circle cx="122" cy="212" r="26" fill="rgba(16,185,129,0.16)" stroke="#10B981" stroke-width="2"/>
          <circle cx="204" cy="212" r="26" fill="rgba(0,229,255,0.12)" stroke="#00E5FF" stroke-opacity="0.6" stroke-width="2"/>
          <rect x="256" y="96" width="38" height="150" rx="8" fill="rgba(255,255,255,0.04)" stroke="#00E5FF" stroke-opacity="0.25"/>
          <!-- Split Bill Cards -->
          <rect x="352" y="78" width="218" height="62" rx="10" fill="rgba(17,24,39,0.85)" stroke="#00E5FF" stroke-opacity="0.5"/>
          <rect x="372" y="98" width="90" height="8" rx="4" fill="#E2E8F0" fill-opacity="0.6"/>
          <rect x="372" y="116" width="58" height="8" rx="4" fill="#00E5FF"/>
          <rect x="352" y="154" width="218" height="62" rx="10" fill="rgba(17,24,39,0.85)" stroke="#2979FF" stroke-opacity="0.5"/>
          <rect x="372" y="174" width="110" height="8" rx="4" fill="#E2E8F0" fill-opacity="0.6"/>
          <rect x="372" y="192" width="70" height="8" rx="4" fill="#2979FF"/>
          <rect x="352" y="230" width="218" height="46" rx="10" fill="rgba(0,229,255,0.14)" stroke="#00E5FF"/>
        </g>
      `
      ),

    radarfx: () =>
      baseWrapper(
        "radarfx",
        "#00E5FF",
        "#10B981",
        `
        <g>
          <!-- Candlestick / Quant Chart -->
          <path d="M56 250 L120 218 L184 236 L248 164 L312 182 L384 112 L456 138 L528 76 L590 92" fill="none" stroke="#00E5FF" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M56 250 L120 218 L184 236 L248 164 L312 182 L384 112 L456 138 L528 76 L590 92 L590 310 L56 310 Z" fill="#00E5FF" fill-opacity="0.08"/>
          <!-- Radar Rings -->
          <circle cx="480" cy="140" r="92" fill="none" stroke="#00E5FF" stroke-opacity="0.22" stroke-dasharray="6 6"/>
          <circle cx="480" cy="140" r="56" fill="none" stroke="#10B981" stroke-opacity="0.35"/>
          <circle cx="528" cy="76" r="7" fill="#00E5FF"/>
          <circle cx="384" cy="112" r="6" fill="#10B981"/>
          <circle cx="248" cy="164" r="6" fill="#2979FF"/>
          <!-- Telemetry Bars -->
          <rect x="86" y="268" width="18" height="34" rx="3" fill="#2979FF" fill-opacity="0.5"/>
          <rect x="116" y="248" width="18" height="54" rx="3" fill="#00E5FF" fill-opacity="0.65"/>
          <rect x="146" y="260" width="18" height="42" rx="3" fill="#10B981" fill-opacity="0.6"/>
          <rect x="176" y="232" width="18" height="70" rx="3" fill="#00E5FF" fill-opacity="0.75"/>
        </g>
      `
      ),

    skyhub: () =>
      baseWrapper(
        "skyhub",
        "#38BDF8",
        "#2979FF",
        `
        <g>
          <!-- Global Flight Arcs -->
          <path d="M72 252 Q 250 70 554 146" fill="none" stroke="#00E5FF" stroke-width="2.5" stroke-dasharray="7 6"/>
          <path d="M110 280 Q 320 130 572 222" fill="none" stroke="#2979FF" stroke-width="2" stroke-opacity="0.7"/>
          <circle cx="72" cy="252" r="7" fill="#00E5FF"/>
          <circle cx="554" cy="146" r="9" fill="#00E5FF" fill-opacity="0.3" stroke="#00E5FF" stroke-width="2"/>
          <circle cx="312" cy="136" r="24" fill="rgba(0,229,255,0.12)" stroke="#00E5FF" stroke-width="1.5"/>
          <!-- Plane Vector -->
          <path d="M300 140 L328 130 L314 146 L312 154 L308 144 Z" fill="#FFFFFF"/>
          <!-- Alert Pill -->
          <rect x="370" y="218" width="208" height="68" rx="12" fill="rgba(13,17,23,0.86)" stroke="#00E5FF" stroke-opacity="0.5"/>
          <circle cx="398" cy="252" r="10" fill="#10B981" fill-opacity="0.25" stroke="#10B981" stroke-width="2"/>
          <rect x="422" y="238" width="128" height="9" rx="4" fill="#E2E8F0" fill-opacity="0.7"/>
          <rect x="422" y="256" width="84" height="8" rx="4" fill="#00E5FF"/>
        </g>
      `
      ),

    adpulse: () =>
      baseWrapper(
        "adpulse",
        "#00E5FF",
        "#8B5CF6",
        `
        <g>
          <!-- A/B Creative Cards -->
          <rect x="74" y="82" width="152" height="196" rx="14" fill="rgba(17,24,39,0.8)" stroke="#94A3B8" stroke-opacity="0.35"/>
          <rect x="94" y="106" width="112" height="84" rx="8" fill="rgba(139,92,246,0.2)"/>
          <rect x="94" y="206" width="82" height="10" rx="5" fill="#94A3B8" fill-opacity="0.4"/>
          <rect x="94" y="228" width="112" height="18" rx="6" fill="rgba(255,255,255,0.06)"/>

          <rect x="252" y="64" width="166" height="218" rx="14" fill="rgba(13,17,23,0.92)" stroke="#00E5FF" stroke-width="2"/>
          <rect x="272" y="88" width="126" height="96" rx="8" fill="rgba(0,229,255,0.18)" stroke="#00E5FF" stroke-opacity="0.4"/>
          <path d="M294 156 L322 126 L344 142 L378 106" fill="none" stroke="#00E5FF" stroke-width="3" stroke-linecap="round"/>
          <rect x="272" y="202" width="96" height="10" rx="5" fill="#FFFFFF" fill-opacity="0.8"/>
          <rect x="272" y="224" width="126" height="24" rx="6" fill="#00E5FF" fill-opacity="0.22" stroke="#00E5FF"/>

          <!-- Pulse Signal -->
          <path d="M446 184 L486 184 L504 134 L526 226 L546 164 L584 164" fill="none" stroke="#00E5FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      `
      ),

    rag: () =>
      baseWrapper(
        "rag",
        "#00E5FF",
        "#6366F1",
        `
        <g>
          <!-- Neural Vector Graph -->
          <line x1="140" y1="120" x2="320" y2="180" stroke="#00E5FF" stroke-opacity="0.45" stroke-width="2"/>
          <line x1="140" y1="240" x2="320" y2="180" stroke="#2979FF" stroke-opacity="0.45" stroke-width="2"/>
          <line x1="320" y1="180" x2="500" y2="112" stroke="#00E5FF" stroke-opacity="0.55" stroke-width="2"/>
          <line x1="320" y1="180" x2="500" y2="246" stroke="#6366F1" stroke-opacity="0.55" stroke-width="2"/>
          <circle cx="140" cy="120" r="22" fill="rgba(17,24,39,0.9)" stroke="#00E5FF" stroke-width="2"/>
          <circle cx="140" cy="240" r="22" fill="rgba(17,24,39,0.9)" stroke="#2979FF" stroke-width="2"/>
          <circle cx="320" cy="180" r="44" fill="rgba(0,229,255,0.14)" stroke="#00E5FF" stroke-width="2.5"/>
          <circle cx="320" cy="180" r="18" fill="#00E5FF"/>
          <circle cx="500" cy="112" r="24" fill="rgba(17,24,39,0.9)" stroke="#00E5FF" stroke-width="2"/>
          <circle cx="500" cy="246" r="24" fill="rgba(17,24,39,0.9)" stroke="#8B5CF6" stroke-width="2"/>
        </g>
      `
      ),

    pipelines: () =>
      baseWrapper(
        "pipelines",
        "#00E5FF",
        "#2979FF",
        `
        <g>
          <!-- ETL Flow Nodes -->
          <rect x="64" y="136" width="112" height="88" rx="12" fill="rgba(17,24,39,0.85)" stroke="#2979FF" stroke-width="2"/>
          <rect x="262" y="122" width="118" height="116" rx="14" fill="rgba(0,229,255,0.12)" stroke="#00E5FF" stroke-width="2.2"/>
          <rect x="466" y="136" width="112" height="88" rx="12" fill="rgba(17,24,39,0.85)" stroke="#10B981" stroke-width="2"/>
          <path d="M176 180 H262 M380 180 H466" stroke="#00E5FF" stroke-width="3" stroke-dasharray="8 6"/>
          <rect x="288" y="156" width="16" height="54" rx="4" fill="#2979FF"/>
          <rect x="313" y="140" width="16" height="70" rx="4" fill="#00E5FF"/>
          <rect x="338" y="168" width="16" height="42" rx="4" fill="#10B981"/>
        </g>
      `
      ),

    bots: () =>
      baseWrapper(
        "bots",
        "#10B981",
        "#00E5FF",
        `
        <g>
          <!-- Omnichannel Hub -->
          <rect x="108" y="88" width="210" height="78" rx="16" fill="rgba(17,24,39,0.88)" stroke="#00E5FF" stroke-opacity="0.55" stroke-width="1.8"/>
          <rect x="132" y="114" width="132" height="10" rx="5" fill="#E2E8F0" fill-opacity="0.7"/>
          <rect x="132" y="136" width="88" height="8" rx="4" fill="#00E5FF"/>

          <rect x="316" y="186" width="218" height="82" rx="16" fill="rgba(16,185,129,0.14)" stroke="#10B981" stroke-width="1.8"/>
          <rect x="342" y="212" width="150" height="10" rx="5" fill="#FFFFFF" fill-opacity="0.8"/>
          <rect x="342" y="234" width="96" height="8" rx="4" fill="#34D399"/>

          <path d="M318 128 C 410 128, 410 154, 410 186" fill="none" stroke="#00E5FF" stroke-width="2.5" stroke-dasharray="6 5"/>
        </g>
      `
      ),

    fullstack: () =>
      baseWrapper(
        "fullstack",
        "#00E5FF",
        "#2979FF",
        `
        <g>
          <!-- Code & Architecture Window -->
          <rect x="86" y="64" width="468" height="232" rx="14" fill="rgba(13,17,23,0.88)" stroke="#00E5FF" stroke-opacity="0.45" stroke-width="1.8"/>
          <circle cx="114" cy="90" r="5" fill="#EF4444"/>
          <circle cx="132" cy="90" r="5" fill="#F59E0B"/>
          <circle cx="150" cy="90" r="5" fill="#10B981"/>
          <line x1="86" y1="112" x2="554" y2="112" stroke="#94A3B8" stroke-opacity="0.18"/>
          <rect x="114" y="136" width="136" height="128" rx="8" fill="rgba(41,121,255,0.12)" stroke="#2979FF" stroke-opacity="0.4"/>
          <rect x="272" y="136" width="252" height="56" rx="8" fill="rgba(0,229,255,0.14)" stroke="#00E5FF" stroke-opacity="0.5"/>
          <rect x="272" y="208" width="118" height="56" rx="8" fill="rgba(255,255,255,0.04)" stroke="#94A3B8" stroke-opacity="0.25"/>
          <rect x="406" y="208" width="118" height="56" rx="8" fill="rgba(16,185,129,0.12)" stroke="#10B981" stroke-opacity="0.45"/>
        </g>
      `
      ),

    cloudsec: () =>
      baseWrapper(
        "cloudsec",
        "#00E5FF",
        "#3B82F6",
        `
        <g>
          <!-- Container Cluster & Defensive Perimeter -->
          <polygon points="320,58 468,120 468,240 320,302 172,240 172,120" fill="rgba(0,229,255,0.06)" stroke="#00E5FF" stroke-opacity="0.45" stroke-width="2"/>
          <rect x="236" y="128" width="76" height="50" rx="8" fill="rgba(41,121,255,0.22)" stroke="#2979FF" stroke-width="2"/>
          <rect x="328" y="128" width="76" height="50" rx="8" fill="rgba(0,229,255,0.2)" stroke="#00E5FF" stroke-width="2"/>
          <rect x="282" y="192" width="76" height="50" rx="8" fill="rgba(16,185,129,0.18)" stroke="#10B981" stroke-width="2"/>
        </g>
      `
      )
  };

  function get(key) {
    const fn = templates[key] || templates.anonymize;
    return fn();
  }

  return { get };
})();
