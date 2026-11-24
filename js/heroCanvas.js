/**
 * ============================================================================
 * HubUP! — Hero Neural Network / Digital Shield Canvas Background
 * ============================================================================
 * Renderiza uma rede neural tecnológica leve em Canvas 2D com partículas ciano
 * e azul elétrico, respeitando prefers-reduced-motion e pausando fora de vista.
 */

(function () {
  const canvas = document.getElementById("heroCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let width = 0;
  let height = 0;
  let dpr = Math.min(window.devicePixelRatio || 1, 2);
  let particles = [];
  let animId = null;
  let isVisible = true;
  const mouse = { x: null, y: null, radius: 170 };

  function resize() {
    const rect = canvas.parentElement.getBoundingClientRect();
    width = rect.width;
    height = rect.height;
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    initParticles();
  }

  function initParticles() {
    const count = Math.min(Math.max(Math.floor((width * height) / 18000), 36), 88);
    particles = [];
    for (let i = 0; i < count; i++) {
      const isCyan = Math.random() > 0.35;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        r: Math.random() * 2 + 1.1,
        color: isCyan ? "0, 229, 255" : "41, 121, 255",
        alpha: Math.random() * 0.55 + 0.25
      });
    }
  }

  function drawFrame() {
    ctx.clearRect(0, 0, width, height);

    // Subtle radial cyber aura on right side
    const aura = ctx.createRadialGradient(
      width * 0.72,
      height * 0.44,
      10,
      width * 0.72,
      height * 0.44,
      Math.max(width, height) * 0.48
    );
    aura.addColorStop(0, "rgba(0, 229, 255, 0.14)");
    aura.addColorStop(0.45, "rgba(41, 121, 255, 0.08)");
    aura.addColorStop(1, "rgba(7, 9, 14, 0)");
    ctx.fillStyle = aura;
    ctx.fillRect(0, 0, width, height);

    const maxDist = 148;

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];

      if (!reducedMotion) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
      }

      // Draw connections
      for (let j = i + 1; j < particles.length; j++) {
        const q = particles[j];
        const dx = p.x - q.x;
        const dy = p.y - q.y;
        const dist = Math.hypot(dx, dy);

        if (dist < maxDist) {
          const opacity = (1 - dist / maxDist) * 0.24;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(0, 229, 255, ${opacity.toFixed(3)})`;
          ctx.lineWidth = 0.9;
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.stroke();
        }
      }

      // Mouse link
      if (mouse.x !== null && mouse.y !== null) {
        const mdx = p.x - mouse.x;
        const mdy = p.y - mouse.y;
        const mdist = Math.hypot(mdx, mdy);
        if (mdist < mouse.radius) {
          const opacity = (1 - mdist / mouse.radius) * 0.42;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(0, 229, 255, ${opacity.toFixed(3)})`;
          ctx.lineWidth = 1.1;
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }

      // Draw node
      ctx.beginPath();
      ctx.fillStyle = `rgba(${p.color}, ${p.alpha})`;
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function loop() {
    if (!isVisible) return;
    drawFrame();
    if (!reducedMotion) {
      animId = requestAnimationFrame(loop);
    }
  }

  // Events
  const heroSection = canvas.parentElement;
  heroSection.addEventListener("mousemove", (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  });

  heroSection.addEventListener("mouseleave", () => {
    mouse.x = null;
    mouse.y = null;
  });

  window.addEventListener("resize", () => {
    resize();
    if (reducedMotion) drawFrame();
  });

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        isVisible = entries[0].isIntersecting;
        if (isVisible && !animId && !reducedMotion) {
          loop();
        } else if (!isVisible && animId) {
          cancelAnimationFrame(animId);
          animId = null;
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(heroSection);
  }

  resize();
  loop();
})();
