// ===========================================================
// TEM&FAZ — interações da landing page
// ===========================================================

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Reveal on scroll ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length){
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting){
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('in'));
  }

  /* ---------- FAQ accordion ---------- */
  document.querySelectorAll('.faq-item').forEach(item => {
    const btn = item.querySelector('.faq-q');
    btn.addEventListener('click', () => {
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(o => o.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });

  /* ---------- Demonstração interativa "o que tem em casa" ---------- */
  const chips = document.querySelectorAll('#ingredientTray .ing-chip');
  const resultBox = document.getElementById('demoResult');

  // Amostra simplificada — só para fins de demonstração visual.
  // As sugestões reais do app usam a biblioteca completa de receitas.
  const demoRecipes = {
    default: { emoji: '🍲', title: 'Omelete de batata rústica', sub: 'Ideia possível com o que você selecionou · POUCOS INGREDIENTES' },
    combo_queijo: { emoji: '🥘', title: 'Batata gratinada com queijo', sub: 'Combina bem com o que você tem · ECONÔMICAS' },
    combo_tomate: { emoji: '🥗', title: 'Salada de tomate com ovos', sub: 'Rápida e leve · COM O QUE TEM EM CASA' },
    combo_full: { emoji: '🍳', title: 'Tortilha completa da despensa', sub: 'Aproveita tudo que você selecionou · ALMOÇO' }
  };

  function updateDemo(){
    const active = Array.from(chips).filter(c => c.classList.contains('active'));
    if (!resultBox) return;
    let key = 'default';
    const hasQueijo = active.some(c => c.textContent.includes('Queijo'));
    const hasTomate = active.some(c => c.textContent.includes('Tomate'));
    if (hasQueijo && hasTomate) key = 'combo_full';
    else if (hasQueijo) key = 'combo_queijo';
    else if (hasTomate) key = 'combo_tomate';
    if (active.length === 0){
      resultBox.innerHTML = '<div class="demo-result-emoji">🤔</div><div><div class="demo-result-title">Selecione ao menos um ingrediente</div><div class="demo-result-sub">Toque nos ingredientes acima para ver uma ideia de receita.</div></div>';
      return;
    }
    const r = demoRecipes[key];
    resultBox.innerHTML = `<div class="demo-result-emoji">${r.emoji}</div><div><div class="demo-result-title">${r.title}</div><div class="demo-result-sub">${r.sub}</div></div>`;
  }

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chip.classList.toggle('active');
      updateDemo();
    });
  });

  /* ---------- Tracking de cliques nos CTAs ----------
     Estrutura pronta para Meta Pixel / GA4 / GTM.
     Substitua os comentários abaixo pelos eventos reais, por exemplo:
       fbq('track', 'InitiateCheckout');
       gtag('event', 'select_promotion', { cta: label });
  ------------------------------------------------------ */
  document.querySelectorAll('a[data-cta]').forEach(link => {
    link.addEventListener('click', () => {
      const label = link.getAttribute('data-cta');
      // Meta Pixel: fbq('track', 'InitiateCheckout', { content_name: label });
      // GA4 / GTM: dataLayer.push({ event: 'cta_click', cta_label: label });
      console.log('[tracking] clique no CTA:', label);
    });
  });

  /* ---------- Clique no WhatsApp flutuante ---------- */
  const waBtn = document.querySelector('.wa-float');
  if (waBtn){
    waBtn.addEventListener('click', () => {
      // Meta Pixel: fbq('track', 'Contact');
      // GA4 / GTM: dataLayer.push({ event: 'whatsapp_click' });
      console.log('[tracking] clique no WhatsApp flutuante');
    });
  }
});
