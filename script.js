/* ==========================================================================
   CONTEÚDO EDITÁVEL — Elton Celestino
   Edite aqui telefone, e-mail, projetos, depoimentos e perguntas frequentes.
   ========================================================================== */
const CONFIG = {
  telefone: "5585988769260",
  telefoneExibido: "(85) 98876-9260",
  email: "eltongf2014@gmail.com",
  mensagensWhats: {
    geral: "Olá, Elton! Vim pelo seu site e queria entender como funciona a automação de WhatsApp e processos para pequenos negócios.\nHoje tenho muito trabalho manual no atendimento e queria ver se faz sentido aplicar aqui.",
    diagnostico: "Olá, Elton! Vim pelo seu site e quero agendar o diagnóstico gratuito de 20 minutos.\nQuero ver o que dá para automatizar na rotina aqui do negócio, sem compromisso. Quais horários você tem disponíveis?",
    clinica: "Olá, Elton! Vi no seu site as automações para clínicas e queria entender como funciona na prática.\nQuero melhorar o agendamento pelo WhatsApp e diminuir as faltas dos pacientes com lembretes automáticos.",
    curso: "Olá, Elton! Vi no seu site a automação para cursos e escolas e queria entender como funciona.\nQuero responder mais rápido quem chama no WhatsApp pedindo informações e reduzir o trabalho repetitivo da secretaria.",
    imobiliaria: "Olá, Elton! Vi no seu site a automação para imobiliárias e queria entender como funciona na prática.\nQuero responder os interessados mais rápido no WhatsApp e organizar melhor o acompanhamento dos contatos.",
    outros: "Olá, Elton! Vim pelo seu site e queria ver se dá para automatizar processos e atendimento no meu negócio.\nHoje perdemos bastante tempo com planilhas e mensagens repetidas, e queria entender o que dá para melhorar."
  },
  formEndpoint: "", // URL do Formspree ou webhook n8n; vazio = WhatsApp ou e-mail

  // Quando tiver depoimentos reais, preencha abaixo e mude para `mostrarDepoimentos: true`.
  mostrarDepoimentos: false,
  depoimentos: [
    // { nome: "Nome do cliente", cargo: "Clínica · Fortaleza/CE", texto: "Depoimento real aqui." }
  ],

  problemas: [
    { icon: "calendarX", texto: "Pacientes e alunos que faltam e ninguém lembra" },
    { icon: "messageClock", texto: "WhatsApp lotado e respostas demoradas" },
    { icon: "table", texto: "Planilhas soltas e retrabalho todo dia" },
    { icon: "chartDown", texto: "Você não sabe quanto vende, quantos leads perde, nem de onde vêm" }
  ],

  servicos: [
    {
      featured: true,
      badge: "Mais procurado",
      icon: "whatsappBot",
      t: "Atendimento e agendamento no WhatsApp",
      o: "Um assistente responde, marca horários e envia lembretes, com IA se você quiser.",
      g: "Menos faltas e clientes atendidos na hora.",
      p: "Clínicas, cursos e imobiliárias.",
      msgWhats: "Olá, Elton! Vi no seu site o serviço de atendimento e agendamento no WhatsApp e queria entender como funciona.\nQuero responder mais rápido os clientes e diminuir faltas com lembretes automáticos."
    },
    {
      icon: "workflow",
      t: "Processos internos digitais",
      o: "Formulários, aprovações, avisos e cadastros funcionando sozinhos.",
      g: "Fim do vai e vem de planilhas e mensagens.",
      p: "Escritórios e equipes administrativas.",
      msgWhats: "Olá, Elton! Vi no seu site a parte de processos internos digitais e queria entender como funciona.\nHoje perdemos bastante tempo com planilhas e tarefas manuais, e queria ver o que dá para automatizar."
    },
    {
      icon: "dashboard",
      t: "Painéis de indicadores",
      o: "Um painel com vendas, atendimento e financeiro, atualizado automaticamente.",
      g: "Decisões com base em números reais.",
      p: "Donos que querem enxergar o negócio.",
      msgWhats: "Olá, Elton! Vi no seu site a criação de painéis de indicadores e queria entender como funciona na prática.\nQuero enxergar melhor os números de vendas e atendimento do meu negócio sem depender de planilhas manuais."
    }
  ],

  /* Para adicionar um projeto, copie um bloco abaixo */
  projetos: [
    {
      waKey: "clinica",
      nome: "Aurea Estética Avançada",
      subtitulo: "Captação de clientes no piloto automático com foco em conversão e LGPD",
      t: "Aurea Estética Avançada — Captação de clientes no piloto automático com foco em conversão e LGPD",
      segmento: "Clínicas de estética",
      r: "Clínicas de estética · Conversão em avaliações e atendimento imediato",
      problemaCurto: "Leads perdidos por demora na resposta e controle manual sem conformidade LGPD.",
      solucaoCurta: "Landing page de conversão integrada ao WhatsApp Cloud API com disparo imediato via n8n.",
      resultadoCurto: "Resposta em segundos e captação organizada com consentimento LGPD.",
      d: "Clínicas de estética investem em divulgação, mas perdem pacientes interessadas quando o atendimento demora para responder ou quando o site não transmite confiança e profissionalismo. Além disso, o controle manual de contatos fora de um fluxo estruturado gera retrabalho para a recepção e riscos de não conformidade com a LGPD.",
      s: "Foi desenvolvida uma página de apresentação editorial de alta conversão, pensada para transformar visitantes em avaliações agendadas. O sistema conta com botões de contato direto no WhatsApp que já informam o interesse da cliente, formulário inteligente com rastreio de origem de campanha, bloqueio automático contra spam e consentimento explícito pela LGPD. Assim que o formulário é enviado, a automação dispara o atendimento imediato via WhatsApp Cloud API.",
      tec: "Next.js 14, React 18, TypeScript, Tailwind CSS, Zod, Supabase e Automação n8n com WhatsApp Cloud API",
      res: "Resposta imediata às interessadas sem depender de digitação manual, redução de leads perdidos por demora no atendimento e captação organizada com segurança jurídica (LGPD).",
      imgs: [
        {
          src: "img/aurea-estetica-hero.jpg",
          webp: "img/aurea-estetica-hero.webp",
          w: 1024,
          h: 556,
          alt: "Hero editorial da Aurea Estética Avançada com avaliação gratuita e botão de WhatsApp"
        }
      ],
      link: "https://github.com/eltoncelestino/aurea-estetica"
    },
    {
      waKey: "imobiliaria",
      nome: "Ceará Prime Imóveis S.A.",
      subtitulo: "Atendimento instantâneo com IA e controle total do funil imobiliário",
      t: "Ceará Prime Imóveis S.A. — Atendimento instantâneo com IA e controle total do funil imobiliário",
      segmento: "Imobiliárias de alto padrão",
      r: "Imobiliárias de alto padrão · Triagem em menos de 1 minuto e CRM com SLA",
      problemaCurto: "Espera no primeiro contato faz leads fecharem com a concorrência e trava o funil.",
      solucaoCurta: "Catálogo com Concierge IA no site e WhatsApp integrado a CRM Kanban com alertas de SLA.",
      resultadoCurto: "Triagem em menos de 1 minuto e 100% do funil comercial visível em um único painel.",
      d: "No mercado imobiliário de alto padrão, poucos minutos de espera fazem o cliente fechar com a concorrência. Sem um atendimento inicial imediato e sem visibilidade clara do tempo de resposta da equipe, corretores perdem oportunidades valiosas e a gestão não consegue acompanhar em que etapa cada negociação está travada.",
      s: "Plataforma completa que une vitrine digital e catálogo filtrável por bairros a um Concierge de Inteligência Artificial capaz de atender o cliente no site e no WhatsApp em menos de 1 minuto. Todos os contatos entram automaticamente em um CRM privado com quadro Kanban visual, cronômetro de SLA ao vivo (com alerta para a gerência em caso de atraso) e conformidade total com a LGPD.",
      tec: "Next.js 15, React 18, TypeScript, Tailwind CSS, Framer Motion, PostgreSQL, Prisma ORM, Zod, n8n, Evolution API (WhatsApp), OpenAI (gpt-4o-mini) e Telegram Bot API",
      res: "Triagem de novos leads em segundos, monitoramento contínuo de SLA de 2 minutos para a equipe comercial e centralização de 100% do funil de vendas em um único painel.",
      imgs: [
        {
          src: "img/ceara-prime-hero.jpg",
          webp: "img/ceara-prime-hero.webp",
          w: 1024,
          h: 572,
          alt: "Landing page pública da Ceará Prime Imóveis S.A. com busca por bairro em Fortaleza"
        },
        {
          src: "img/ceara-prime-crm.jpg",
          webp: "img/ceara-prime-crm.webp",
          w: 1024,
          h: 547,
          alt: "Private CRM com quadro Kanban, SLA ao vivo e filtros por bairro"
        },
        {
          src: "img/ceara-prime-concierge.png",
          webp: "img/ceara-prime-concierge.webp",
          w: 417,
          h: 758,
          alt: "Concierge IA para triagem instantânea de leads"
        }
      ],
      link: "https://github.com/eltoncelestino/ceara-prime-imobiliaria"
    },
    {
      waKey: "outros",
      nome: "Brasa Viva Burger & Grill",
      subtitulo: "Cardápio digital próprio, pedido na mesa e cozinha sincronizada em tempo real",
      t: "Brasa Viva Burger & Grill — Cardápio digital próprio, pedido na mesa e cozinha sincronizada em tempo real",
      segmento: "Restaurantes e delivery",
      r: "Restaurantes e delivery · Venda direta sem taxas de marketplace",
      problemaCurto: "Taxas altas de aplicativos e pedidos anotados manualmente geram erros e atrasos.",
      solucaoCurta: "Cardápio próprio com Pix, QR Code na mesa e Kanban da cozinha em tempo real.",
      resultadoCurto: "Canal direto sem comissão por pedido e operação sincronizada do Pix ao preparo.",
      d: "Restaurantes e hamburguerias perdem margem de lucro com taxas elevadas de aplicativos de terceiros e enfrentam falhas operacionais quando pedidos de delivery, retirada e salão são anotados manualmente — gerando atrasos, erros de montagem e filas no caixa.",
      s: "Plataforma própria de cardápio digital e pedidos online para delivery, retirada e atendimento na mesa via QR Code. O cliente personaliza o lanche, calcula a entrega automaticamente por bairro e paga via Pix com confirmação instantânea. Na operação, os pedidos chegam em tempo real ao quadro Kanban da cozinha com alerta sonoro, impressão de comanda térmica 80mm, gestão de cardápio e painel de faturamento — com validação segura de preços direto no servidor.",
      tec: "Next.js 15, React 19, TypeScript, Tailwind CSS v4, Prisma ORM (SQLite/PostgreSQL), Socket.IO (tempo real), Auth.js v5, Zustand, Zod, Recharts e Vitest",
      res: "Eliminação de erros manuais entre cliente e cozinha, fluxo sincronizado em tempo real do pagamento Pix ao preparo e canal próprio de vendas sem comissão por pedido.",
      imgs: [
        {
          src: "img/brasa-viva-cardapio.jpg",
          webp: "img/brasa-viva-cardapio.webp",
          w: 1024,
          h: 640,
          alt: "Cardápio público desktop do Brasa Viva Burger & Grill"
        },
        {
          src: "img/brasa-viva-mesa.jpg",
          webp: "img/brasa-viva-mesa.webp",
          w: 430,
          h: 932,
          alt: "Cardápio mobile-first na mesa via QR Code"
        },
        {
          src: "img/brasa-viva-admin.png",
          webp: "img/brasa-viva-admin.webp",
          w: 1024,
          h: 640,
          alt: "Login administrativo do painel de gestão e cozinha"
        }
      ],
      link: ""
    }
  ],

  passos: [
    ["Conversa de diagnóstico", "20 minutos, gratuita, para entender sua rotina."],
    ["Proposta fechada", "Escopo, prazo e valor definidos por escrito."],
    ["Desenvolvimento e testes", "Você valida cada etapa antes de ir ao ar."],
    ["Entrega e treinamento", "Treinamento da equipe na entrega, com plano mensal de suporte opcional."]
  ],

  ferramentas: [
    { nome: "n8n", icon: "nodes", cor: "#ff6d5a" },
    { nome: "WhatsApp API", icon: "whatsapp", cor: "#25d366" },
    { nome: "Power Automate", icon: "bolt", cor: "#38bdf8" },
    { nome: "Power BI", icon: "bars", cor: "#facc15" },
    { nome: "SQL", icon: "database", cor: "#818cf8" },
    { nome: "Python", icon: "code", cor: "#60a5fa" },
    { nome: "Google Workspace", icon: "grid", cor: "#34d399" },
    { nome: "Claude e IA", icon: "spark", cor: "#fb923c" }
  ],

  faq: [
    ["Quanto tempo leva?", "Projetos simples ficam prontos em 1 a 2 semanas. O prazo exato vem na proposta."],
    ["Como funciona o pagamento?", "Entrada de 50% para começar e o restante na entrega, conforme o contrato."],
    ["Preciso trocar minhas ferramentas?", "Não. Adapto a solução ao que você já usa sempre que possível."],
    ["Meus dados ficam seguros?", "Sim. O tratamento segue a LGPD, com acesso restrito e só dos dados necessários."],
    ["Tem suporte depois?", "Sim. Há suporte na entrega e planos mensais de manutenção opcionais."],
    ["Funciona com o WhatsApp que já uso?", "Na maioria dos casos, sim. Vemos no diagnóstico a melhor forma de conectar."]
  ]
};

/* ==========================================================================
   ÍCONES SVG CONSISTENTES (stroke 1.9, estilo Lucide, zero dependências)
   ========================================================================== */
const ICONS = {
  calendarX: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18M10 14l4 4M14 14l-4 4"/></svg>`,
  messageClock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 11.5a8.5 8.5 0 0 1-12.4 7.5L3 21l2-5.4A8.5 8.5 0 1 1 21 11.5Z"/><path d="M12 7v4l2.5 1.5"/></svg>`,
  table: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v18"/></svg>`,
  chartDown: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 3v18h18"/><path d="m7 9 4 4 3-3 5 5"/><path d="M15 15h4v-4"/></svg>`,
  whatsappBot: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 11.5a8.5 8.5 0 0 1-12.4 7.5L3 21l2-5.4A8.5 8.5 0 1 1 21 11.5Z"/><path d="M8.5 11.5h7M8.5 14.5h4.5"/></svg>`,
  workflow: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/><path d="M10 6.5h4a3.5 3.5 0 0 1 3.5 3.5v4"/><path d="m15 12 2.5 2 2.5-2"/></svg>`,
  dashboard: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 16v-4M12 16V8M17 16v-6"/></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 12 4.5 4.5L19 7"/></svg>`,
  users: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  arrowRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`,
  plus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>`,
  nodes: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="5" cy="12" r="2.5"/><circle cx="19" cy="6" r="2.5"/><circle cx="19" cy="18" r="2.5"/><path d="M7.5 11 16.5 7M7.5 13l9 4"/></svg>`,
  whatsapp: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 11.5a8.5 8.5 0 0 1-12.4 7.5L3 21l2-5.4A8.5 8.5 0 1 1 21 11.5Z"/><path d="M9.5 9.5c.3 2 2.5 4.2 4.5 4.5l1.2-1.2 1.8.8v1.4c0 .6-.5 1-1.1 1-4.1-.2-7.7-3.8-7.9-7.9 0-.6.4-1.1 1-1.1h1.4l.8 1.8-1.7.7Z"/></svg>`,
  bolt: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z"/></svg>`,
  bars: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 20v-6M10 20v-10M15 20V6M20 20v-8"/></svg>`,
  database: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5"/><path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3"/></svg>`,
  code: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m8 9-4 3 4 3M16 9l4 3-4 3M13.5 5.5l-3 13"/></svg>`,
  grid: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="7.5" height="7.5" rx="1.5"/><rect x="13.5" y="3" width="7.5" height="7.5" rx="1.5"/><rect x="3" y="13.5" width="7.5" height="7.5" rx="1.5"/><rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.5"/></svg>`,
  spark: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m12 3 2.2 6.8L21 12l-6.8 2.2L12 21l-2.2-6.8L3 12l6.8-2.2L12 3Z"/></svg>`
};

/* ==========================================================================
   INICIALIZAÇÃO E RENDERIZAÇÃO
   ========================================================================== */
const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const waUrl = (m = CONFIG.mensagensWhats.geral) =>
  CONFIG.telefone ? `https://wa.me/${CONFIG.telefone}?text=${encodeURIComponent(m)}` : "#contato";

function pictureTag(im, cls = "", lazy = true) {
  const webpSource = im.webp ? `<source srcset="${esc(im.webp)}" type="image/webp">` : "";
  const dims = im.w && im.h ? ` width="${im.w}" height="${im.h}"` : "";
  const loading = lazy ? ` loading="lazy" decoding="async"` : ` decoding="async"`;
  return `<picture>${webpSource}<img class="${cls}" src="${esc(im.src)}" alt="${esc(im.alt)}"${dims}${loading}></picture>`;
}

/* Links de contato & rodapé */
document.querySelectorAll(".wa").forEach(a => {
  const key = a.dataset.wa || "geral";
  a.href = waUrl(CONFIG.mensagensWhats[key] || CONFIG.mensagensWhats.geral);
  if (CONFIG.telefone) {
    a.target = "_blank";
    a.rel = "noopener";
  }
});

const mailEl = $("#mail");
if (mailEl) {
  mailEl.href = "mailto:" + CONFIG.email;
  mailEl.textContent = CONFIG.email;
}
if (CONFIG.telefoneExibido) {
  $("#phone").textContent = CONFIG.telefoneExibido;
  $("#phone-wrap").hidden = false;
}
$("#ano").textContent = new Date().getFullYear();

/* Animação realista de conversa + indicador de digitação no Hero */
(function playChatSequence() {
  const msgs = [...document.querySelectorAll("#phone-chat .msg")];
  const typing = $("#typing-indicator");
  if (!msgs.length) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    msgs.forEach(m => m.classList.add("visible"));
    return;
  }

  const showMsg = idx => msgs[idx] && msgs[idx].classList.add("visible");
  const setTyping = (show, beforeEl) => {
    if (!typing) return;
    if (show && beforeEl) beforeEl.parentNode.insertBefore(typing, beforeEl);
    typing.hidden = !show;
  };

  setTimeout(() => showMsg(0), 220);
  setTimeout(() => setTyping(true, msgs[1]), 520);
  setTimeout(() => { setTyping(false); showMsg(1); }, 1120);
  setTimeout(() => showMsg(2), 1650);
  setTimeout(() => setTyping(true, msgs[3]), 1950);
  setTimeout(() => { setTyping(false); showMsg(3); }, 2550);
})();

/* Problemas */
$("#problemas-grid").innerHTML = CONFIG.problemas
  .map(p => `
    <article class="card problem-card">
      <div class="icon-badge">${ICONS[p.icon] || ICONS.bolt}</div>
      <h3>${esc(p.texto)}</h3>
    </article>
  `)
  .join("");

/* Serviços — Bento Grid */
const waAttrs = CONFIG.telefone ? 'target="_blank" rel="noopener"' : "";
$("#servicos-grid").innerHTML = CONFIG.servicos
  .map(s => {
    const href = waUrl(s.msgWhats || CONFIG.mensagensWhats.geral);
    if (s.featured) {
      return `
        <article class="card service-card is-featured">
          <div class="service-body">
            ${s.badge ? `<span class="service-badge">${esc(s.badge)}</span>` : ""}
            <div class="icon-badge">${ICONS[s.icon] || ICONS.whatsappBot}</div>
            <h3>${esc(s.t)}</h3>
            <p class="service-desc">${esc(s.o)}</p>
          </div>
          <div class="service-side">
            <ul class="service-meta">
              <li>${ICONS.check}<span><strong>Você ganha:</strong> ${esc(s.g)}</span></li>
              <li>${ICONS.users}<span><strong>Para:</strong> ${esc(s.p)}</span></li>
            </ul>
            <a class="btn btn-cta" ${waAttrs} href="${href}">
              Pedir proposta ${ICONS.arrowRight}
            </a>
          </div>
        </article>
      `;
    }
    return `
      <article class="card service-card">
        <div class="icon-badge">${ICONS[s.icon] || ICONS.workflow}</div>
        <h3>${esc(s.t)}</h3>
        <p class="service-desc">${esc(s.o)}</p>
        <ul class="service-meta">
          <li>${ICONS.check}<span><strong>Você ganha:</strong> ${esc(s.g)}</span></li>
          <li>${ICONS.users}<span><strong>Para:</strong> ${esc(s.p)}</span></li>
        </ul>
        <a class="btn btn-ghost" ${waAttrs} href="${href}">
          Pedir proposta ${ICONS.arrowRight}
        </a>
      </article>
    `;
  })
  .join("");

/* Projetos — Palco Imersivo de Rolagem Horizontal (estilo Vice City) */
const SLIDE_ACCENTS = ["rgba(37, 211, 102, 0.48)", "rgba(56, 189, 248, 0.48)", "rgba(251, 191, 36, 0.45)"];

const introPanelHtml = `
  <div class="proj-intro-panel" data-panel="0">
    <div class="proj-intro-head">
      <span class="eyebrow">Estudos de caso</span>
      <h2>Projetos</h2>
      <p>Demonstrações criadas para mostrar como cada solução funciona. Clique para ver os detalhes.</p>
    </div>
    <div class="proj-routemap" aria-label="Mapa de projetos">
      <span class="proj-routemap-title">Rota interativa · selecione um projeto</span>
      ${CONFIG.projetos
        .map(
          (p, i) => `
          <button type="button" class="route-pin" data-goto="${i + 1}">
            <span class="route-pin-num">0${i + 1}</span>
            <span class="route-pin-meta">
              <strong>${esc(p.nome)}</strong>
              <span>${esc(p.segmento)}</span>
            </span>
          </button>`
        )
        .join("")}
    </div>
    <div class="proj-scroll-hint">
      <span class="hint-desktop">Role a página para atravessar os projetos</span>
      <span class="hint-mobile">Arraste para o lado para ver os projetos</span>
      ${ICONS.arrowRight}
    </div>
  </div>
`;

const slidesHtml = CONFIG.projetos
  .map((p, i) => {
    const cover = p.imgs && p.imgs[0];
    const num = `0${i + 1}`;
    const screensBadge = p.imgs && p.imgs.length > 1
      ? `<span class="case-screens-pill">${p.imgs.length} telas interativas</span>`
      : "";
    return `
      <article class="case-slide" data-panel="${i + 1}" style="--slide-accent:${SLIDE_ACCENTS[i % SLIDE_ACCENTS.length]}">
        <div class="case-media">
          <div class="case-media-bar">
            <span class="case-tag">Projeto demonstrativo</span>
            ${screensBadge}
          </div>
          <div class="case-browser">
            <div class="case-browser-top" aria-hidden="true">
              <span></span><span></span><span></span>
              <small>${esc(p.nome)}</small>
            </div>
            <div class="case-browser-screen">
              ${cover ? pictureTag(cover, "", true) : ""}
            </div>
          </div>
          <span class="case-slide-num" aria-hidden="true">${num}</span>
        </div>
        <div class="case-body">
          <span class="case-segment">${num} · ${esc(p.segmento)}</span>
          <h3 class="case-title">${esc(p.nome)}</h3>
          <p class="case-sub">${esc(p.subtitulo)}</p>
          <ul class="case-facts">
            <li><strong>Problema:</strong> ${esc(p.problemaCurto)}</li>
            <li><strong>Solução:</strong> ${esc(p.solucaoCurta)}</li>
            <li class="case-res"><strong>Resultado esperado:</strong> ${esc(p.resultadoCurto)}</li>
          </ul>
          <div class="case-actions">
            <button type="button" class="btn btn-cta" data-project="${i}">
              Ver detalhes ${ICONS.arrowRight}
            </button>
            <a class="btn btn-ghost" ${waAttrs} href="${waUrl(CONFIG.mensagensWhats[p.waKey] || CONFIG.mensagensWhats.outros)}">
              Quero algo assim
            </a>
          </div>
        </div>
      </article>
    `;
  })
  .join("");

$("#projetos-grid").innerHTML = introPanelHtml + slidesHtml;

/* Controlador da Animação de Rolagem Horizontal (Desktop sticky + Mobile snap) */
(function initProjectsShowcase() {
  const section = $("#projetos");
  const viewport = $("#projects-viewport");
  const track = $("#projetos-grid");
  const progressEl = $("#proj-progress");
  const hudText = $("#proj-hud-text");
  const prevBtn = $("#proj-prev");
  const nextBtn = $("#proj-next");
  if (!section || !viewport || !track) return;

  const panels = [...track.children];
  const pins = [...track.querySelectorAll(".route-pin")];
  const slideBrowsers = [...track.querySelectorAll(".case-slide .case-browser")];
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const desktopMQ = window.matchMedia("(min-width: 980px)");

  const stageLabels = [
    "00 · VISÃO GERAL",
    ...CONFIG.projetos.map((p, i) => `0${i + 1} · ${p.segmento.toUpperCase()}`)
  ];

  let maxTranslate = 0;
  let currentP = 0;
  let targetP = 0;
  let rafId = 0;
  let activeIndex = 0;

  function isStickyMode() {
    return desktopMQ.matches && !reducedMotion.matches;
  }

  function updateHud(p, idx) {
    activeIndex = idx;
    section.dataset.stage = String(idx);
    if (progressEl) progressEl.style.width = `${Math.round(p * 1000) / 10}%`;
    if (hudText) hudText.textContent = stageLabels[idx] || stageLabels[0];
    if (prevBtn) prevBtn.disabled = idx <= 0;
    if (nextBtn) nextBtn.disabled = idx >= panels.length - 1;
    pins.forEach(pin => {
      pin.classList.toggle("active", Number(pin.dataset.goto) === idx);
    });
    panels.forEach((panel, i) => {
      if (panel.classList.contains("case-slide")) {
        panel.classList.toggle("is-active", i === idx);
      }
    });
  }

  function panelOffsetRatio(idx) {
    if (idx <= 0 || maxTranslate <= 0) return 0;
    const panel = panels[idx];
    const centerTarget = panel.offsetLeft - (viewport.clientWidth - panel.offsetWidth) / 2;
    return Math.min(1, Math.max(0, centerTarget / maxTranslate));
  }

  function nearestPanelFromScroll(tx) {
    const viewCenter = tx + viewport.clientWidth / 2;
    let best = 0;
    let bestDist = Infinity;
    panels.forEach((panel, i) => {
      const center = panel.offsetLeft + panel.offsetWidth / 2;
      const dist = Math.abs(center - viewCenter);
      if (dist < bestDist) {
        bestDist = dist;
        best = i;
      }
    });
    return best;
  }

  function applyTransform(p) {
    const tx = p * maxTranslate;
    track.style.transform = `translate3d(${-tx.toFixed(2)}px, 0, 0)`;
    section.style.setProperty("--stars-x", `${(-p * 90).toFixed(1)}px`);

    // Parallax suave na moldura inteira (sem jamais cortar a imagem)
    const vw = viewport.clientWidth || 1;
    slideBrowsers.forEach(frame => {
      const slide = frame.closest(".case-slide");
      const slideCenter = slide.offsetLeft - tx + slide.offsetWidth / 2;
      const norm = Math.max(-1, Math.min(1, (slideCenter - vw / 2) / vw));
      frame.style.setProperty("--px", `${(-norm * 10).toFixed(1)}px`);
    });

    const idx = nearestPanelFromScroll(tx);
    updateHud(p, idx);
  }

  function tick() {
    const diff = targetP - currentP;
    if (Math.abs(diff) < 0.0004) {
      currentP = targetP;
      applyTransform(currentP);
      rafId = 0;
      return;
    }
    currentP += diff * 0.14;
    applyTransform(currentP);
    rafId = requestAnimationFrame(tick);
  }

  function syncDesktopScroll() {
    if (!isStickyMode()) return;
    const rect = section.getBoundingClientRect();
    const headerH = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header-h")) || 70;
    const scrollable = section.offsetHeight - (window.innerHeight - headerH);
    const raw = scrollable > 0 ? (headerH - rect.top) / scrollable : 0;
    targetP = Math.min(1, Math.max(0, raw));
    if (!rafId) rafId = requestAnimationFrame(tick);
  }

  function measure() {
    if (isStickyMode()) {
      viewport.scrollLeft = 0;
      maxTranslate = Math.max(0, track.scrollWidth - viewport.clientWidth);
      const headerH = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header-h")) || 70;
      const stickyH = window.innerHeight - headerH;
      section.style.height = `${Math.round(stickyH + maxTranslate * 1.15)}px`;
      syncDesktopScroll();
      applyTransform(currentP);
    } else {
      if (rafId) { cancelAnimationFrame(rafId); rafId = 0; }
      section.style.height = "";
      track.style.transform = "";
      slideBrowsers.forEach(frame => frame.style.removeProperty("--px"));
      maxTranslate = Math.max(0, viewport.scrollWidth - viewport.clientWidth);
      syncMobileScroll();
    }
  }

  function syncMobileScroll() {
    if (isStickyMode()) return;
    const maxScroll = Math.max(1, viewport.scrollWidth - viewport.clientWidth);
    const p = Math.min(1, Math.max(0, viewport.scrollLeft / maxScroll));
    const idx = nearestPanelFromScroll(viewport.scrollLeft);
    updateHud(p, idx);
  }

  function goToPanel(idx) {
    const clamped = Math.min(panels.length - 1, Math.max(0, idx));
    if (isStickyMode()) {
      const headerH = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header-h")) || 70;
      const scrollable = section.offsetHeight - (window.innerHeight - headerH);
      const ratio = panelOffsetRatio(clamped);
      const sectionTop = window.scrollY + section.getBoundingClientRect().top;
      window.scrollTo({
        top: Math.round(sectionTop - headerH + ratio * scrollable),
        behavior: "smooth"
      });
    } else {
      const panel = panels[clamped];
      const left = panel.offsetLeft - (viewport.clientWidth - panel.offsetWidth) / 2;
      viewport.scrollTo({ left: Math.max(0, left), behavior: "smooth" });
    }
  }

  pins.forEach(pin => {
    pin.addEventListener("click", () => goToPanel(Number(pin.dataset.goto)));
  });
  if (prevBtn) prevBtn.addEventListener("click", () => goToPanel(activeIndex - 1));
  if (nextBtn) nextBtn.addEventListener("click", () => goToPanel(activeIndex + 1));

  window.addEventListener("scroll", syncDesktopScroll, { passive: true });
  viewport.addEventListener("scroll", syncMobileScroll, { passive: true });
  window.addEventListener("resize", measure, { passive: true });
  if (reducedMotion.addEventListener) reducedMotion.addEventListener("change", measure);

  // Mede imediatamente e após carregamento das fontes/imagens
  measure();
  window.addEventListener("load", measure);
})();

/* Como funciona (Timeline numerada) */
$("#steps").innerHTML = CONFIG.passos
  .map(([titulo, desc], i) => `
    <li class="step-item">
      <div class="step-num" aria-hidden="true">0${i + 1}</div>
      <div class="step-card">
        <h3>${esc(titulo)}</h3>
        <p>${esc(desc)}</p>
      </div>
    </li>
  `)
  .join("");

/* Ferramentas (monocromático -> cor característica no hover) */
$("#tools").innerHTML = CONFIG.ferramentas
  .map(f => `
    <li class="tool-item" style="--tool-color:${esc(f.cor)}">
      <span class="tool-ico">${ICONS[f.icon] || ICONS.code}</span>
      <span>${esc(f.nome)}</span>
    </li>
  `)
  .join("");

/* Prova social opcional (ativa apenas quando CONFIG.mostrarDepoimentos === true) */
if (CONFIG.mostrarDepoimentos && CONFIG.depoimentos.length) {
  $("#depoimentos").hidden = false;
  $("#dep-grid").innerHTML = CONFIG.depoimentos
    .map(d => `
      <figure class="card dep-card">
        <blockquote class="dep-quote">“${esc(d.texto)}”</blockquote>
        <figcaption class="dep-author">
          <strong>${esc(d.nome)}</strong>
          ${d.cargo ? `<span>${esc(d.cargo)}</span>` : ""}
        </figcaption>
      </figure>
    `)
    .join("");
}

/* FAQ acessível */
$("#faq-list").innerHTML = CONFIG.faq
  .map(([q, a]) => `
    <details class="faq-item">
      <summary>
        <span>${esc(q)}</span>
        <span class="faq-icon" aria-hidden="true">${ICONS.plus}</span>
      </summary>
      <p class="faq-answer">${esc(a)}</p>
    </details>
  `)
  .join("");

/* ==========================================================================
   MENU MOBILE ACESSÍVEL
   ========================================================================== */
const burger = $(".burger");
const menu = $("#menu");

function setMenuOpen(open) {
  menu.classList.toggle("open", open);
  burger.setAttribute("aria-expanded", String(open));
  burger.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
}

burger.addEventListener("click", () => setMenuOpen(!menu.classList.contains("open")));
menu.addEventListener("click", e => {
  if (e.target.tagName === "A") setMenuOpen(false);
});
document.addEventListener("keydown", e => {
  if (e.key === "Escape" && menu.classList.contains("open")) {
    setMenuOpen(false);
    burger.focus();
  }
});
document.addEventListener("click", e => {
  if (menu.classList.contains("open") && !e.target.closest(".site-header")) {
    setMenuOpen(false);
  }
});

/* ==========================================================================
   MODAL DE PROJETOS, LIGHTBOX E POLÍTICA DE PRIVACIDADE
   ========================================================================== */
const modal = $("#modal");
const lightbox = $("#lightbox");

function fecharAoClicarFora(dlg) {
  dlg.addEventListener("click", e => {
    if (e.target !== dlg) return;
    const r = dlg.getBoundingClientRect();
    if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) {
      dlg.close();
    }
  });
}
fecharAoClicarFora(modal);
fecharAoClicarFora(lightbox);

function abrirLightbox(src, alt) {
  lightbox.innerHTML = `
    <figure>
      <button type="button" class="lb-close" id="lb-close" aria-label="Fechar imagem">✕</button>
      <img src="${esc(src)}" alt="${esc(alt)}">
      <figcaption>${esc(alt)}</figcaption>
    </figure>
  `;
  lightbox.showModal();
  $("#lb-close").addEventListener("click", () => lightbox.close());
}

function abrirModal({ tag = "", titulo, corpoHtml, extraAction = "" }) {
  modal.innerHTML = `
    <div class="modal-header">
      <div>
        ${tag ? `<span class="modal-tag">${esc(tag)}</span>` : ""}
        <h2 id="m-t">${esc(titulo)}</h2>
      </div>
      <button type="button" class="modal-close-x" id="fechar-x" aria-label="Fechar janela">✕</button>
    </div>
    <div class="modal-body">
      ${corpoHtml}
      <div class="modal-actions">
        ${extraAction}
        <button class="btn btn-ghost" id="fechar" type="button">Fechar</button>
      </div>
    </div>
  `;
  modal.showModal();
  $("#fechar").addEventListener("click", () => modal.close());
  $("#fechar-x").addEventListener("click", () => modal.close());
}

function renderGaleria(p) {
  const lista = Array.isArray(p.imgs) ? p.imgs : [];
  if (!lista.length) return "";
  const thumbs = lista.length > 1
    ? `<div class="gallery-thumbs">${lista
        .map(
          (im, idx) => `
          <button type="button" class="gallery-thumb${idx === 0 ? " active" : ""}" data-src="${esc(im.webp || im.src)}" data-fallback="${esc(im.src)}" data-alt="${esc(im.alt)}" aria-label="Ver tela ${idx + 1}: ${esc(im.alt)}">
            ${pictureTag(im, "", true)}
          </button>`
        )
        .join("")}</div>`
    : "";

  const first = lista[0];
  return `
    <div class="gallery">
      <img class="gallery-main" id="gal-main" src="${esc(first.webp || first.src)}" data-fallback="${esc(first.src)}" alt="${esc(first.alt)}" title="Clique para ampliar">
      <p class="gallery-cap" id="gal-cap">${esc(first.alt)}</p>
      ${thumbs}
    </div>
  `;
}

$("#projetos-grid").addEventListener("click", e => {
  const btn = e.target.closest("button[data-project]");
  if (!btn) return;
  const p = CONFIG.projetos[Number(btn.dataset.project)];
  if (!p) return;

  const waBtn = `<a class="btn btn-cta" ${waAttrs} href="${waUrl(CONFIG.mensagensWhats[p.waKey] || CONFIG.mensagensWhats.outros)}">Quero algo assim</a>`;
  const ghBtn = p.link ? `<a class="btn btn-ghost" href="${esc(p.link)}" target="_blank" rel="noopener">Ver no GitHub</a>` : "";

  abrirModal({
    tag: "Projeto demonstrativo · " + p.segmento,
    titulo: p.t,
    corpoHtml:
      renderGaleria(p) +
      `<p><strong>O Desafio de Negócio:</strong> ${esc(p.d)}</p>` +
      `<p><strong>A Solução Entregue:</strong> ${esc(p.s)}</p>` +
      `<p><strong>Pilares Tecnológicos:</strong> ${esc(p.tec)}</p>` +
      `<p><strong>O Impacto / Resultado Prático:</strong> ${esc(p.res)}</p>`,
    extraAction: waBtn + ghBtn
  });

  const mainImg = $("#gal-main");
  if (mainImg) {
    mainImg.addEventListener("error", () => {
      if (mainImg.dataset.fallback && mainImg.src !== mainImg.dataset.fallback) {
        mainImg.src = mainImg.dataset.fallback;
      }
    });
    mainImg.addEventListener("click", () => abrirLightbox(mainImg.currentSrc || mainImg.src, mainImg.alt));
  }
  const thumbs = modal.querySelector(".gallery-thumbs");
  if (thumbs && mainImg) {
    thumbs.addEventListener("click", ev => {
      const tb = ev.target.closest(".gallery-thumb");
      if (!tb) return;
      mainImg.dataset.fallback = tb.dataset.fallback || "";
      mainImg.src = tb.dataset.src;
      mainImg.alt = tb.dataset.alt;
      $("#gal-cap").textContent = tb.dataset.alt;
      thumbs.querySelectorAll(".gallery-thumb").forEach(el => el.classList.toggle("active", el === tb));
    });
  }
});

$("#priv").addEventListener("click", e => {
  e.preventDefault();
  abrirModal({
    tag: "LGPD · Lei 13.709/2018",
    titulo: "Política de privacidade",
    corpoHtml: `
      <p>Os dados informados no formulário (nome, WhatsApp, tipo de negócio e mensagem) são usados apenas para responder ao seu contato e não são compartilhados com terceiros.</p>
      <p>Você pode pedir a exclusão dos seus dados a qualquer momento pelo e-mail <strong>${esc(CONFIG.email)}</strong>, conforme a LGPD.</p>
    `
  });
});

/* ==========================================================================
   FORMULÁRIO DE CONTATO COM MÁSCARA E VALIDAÇÃO ACESSÍVEL
   ========================================================================== */
const form = $("#form");
const waInput = form.querySelector('input[name="whatsapp"]');

function formatPhone(v) {
  const digits = v.replace(/\D/g, "").slice(0, 11);
  if (digits.length <= 2) return digits ? `(${digits}` : "";
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

waInput.addEventListener("input", () => {
  waInput.value = formatPhone(waInput.value);
});

function validateField(el) {
  const er = el.closest(".field").querySelector(".err");
  let msg = "";
  if (!el.value.trim()) {
    msg = "Preencha este campo.";
  } else if (el.name === "whatsapp" && el.value.replace(/\D/g, "").length < 10) {
    msg = "Informe um WhatsApp válido com DDD.";
  }
  er.textContent = msg;
  el.setAttribute("aria-invalid", msg ? "true" : "false");
  return !msg;
}

form.querySelectorAll("[required]").forEach(el => {
  el.addEventListener("blur", () => validateField(el));
  el.addEventListener("input", () => {
    if (el.getAttribute("aria-invalid") === "true") validateField(el);
  });
  el.addEventListener("change", () => {
    if (el.getAttribute("aria-invalid") === "true") validateField(el);
  });
});

form.addEventListener("submit", async e => {
  e.preventDefault();
  const st = $("#status");
  const submitBtn = form.querySelector('button[type="submit"]');
  st.className = "form-status";
  st.textContent = "";

  let ok = true;
  let firstInvalid = null;
  form.querySelectorAll("[required]").forEach(el => {
    if (!validateField(el)) {
      ok = false;
      if (!firstInvalid) firstInvalid = el;
    }
  });

  if (!ok) {
    st.className = "form-status is-error";
    st.textContent = "Por favor, corrija os campos destacados antes de enviar.";
    if (firstInvalid) firstInvalid.focus();
    return;
  }

  const d = Object.fromEntries(new FormData(form));
  if (!CONFIG.formEndpoint) {
    const txt = `Olá, Elton! Sou ${d.nome} (${d.negocio}). Quero melhorar: ${d.msg || "ainda a definir"}. Meu WhatsApp: ${d.whatsapp}`;
    st.className = "form-status is-success";
    if (CONFIG.telefone) {
      const url = waUrl(txt);
      window.open(url, "_blank", "noopener");
      st.innerHTML = `Abrindo o WhatsApp com sua mensagem pronta. <a class="status-link" href="${esc(url)}" target="_blank" rel="noopener">Não abriu? Clique aqui para enviar no WhatsApp</a>`;
    } else {
      window.location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent("Contato pelo portfólio – " + d.nome)}&body=${encodeURIComponent(txt)}`;
      st.textContent = "Abrindo seu aplicativo de e-mail para enviar a mensagem.";
    }
    return;
  }

  const originalLabel = submitBtn.textContent;
  submitBtn.disabled = true;
  submitBtn.textContent = "Enviando...";
  try {
    const r = await fetch(CONFIG.formEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(d)
    });
    if (!r.ok) throw new Error("Erro no envio");
    form.reset();
    form.querySelectorAll("[aria-invalid]").forEach(el => el.setAttribute("aria-invalid", "false"));
    st.className = "form-status is-success";
    st.textContent = "Mensagem enviada! Responderei em breve no seu WhatsApp.";
  } catch {
    st.className = "form-status is-error";
    st.textContent = "Não foi possível enviar agora. Tente falar direto pelo botão de WhatsApp.";
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = originalLabel;
  }
});

/* ==========================================================================
   BARRA DE PROGRESSO, HEADER SCROLL E ANIMAÇÕES DISCRETAS
   ========================================================================== */
const hdr = $(".site-header");
const bar = $(".scroll-bar");

function onScroll() {
  const y = window.scrollY;
  const max = document.documentElement.scrollHeight - window.innerHeight;
  hdr.classList.toggle("scrolled", y > 16);
  if (bar) bar.style.width = (max > 0 ? (y / max) * 100 : 0) + "%";
}
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

const revealGroups = [".grid", ".bento-grid", ".steps", ".tools-grid", "#faq-list"];
revealGroups.forEach(sel => {
  document.querySelectorAll(sel).forEach(group => {
    [...group.children].forEach((el, i) => {
      el.classList.add("reveal");
      el.style.setProperty("--i", Math.min(i, 5));
    });
  });
});
document.querySelectorAll("section:not(.hero) .sec-head, .about-grid > *, .contact-grid > *").forEach(el => {
  el.classList.add("reveal");
});

const targets = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const io = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -32px 0px" }
  );
  targets.forEach(el => io.observe(el));
} else {
  targets.forEach(el => el.classList.add("in"));
}
