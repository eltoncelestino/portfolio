# Portfólio — Elton Celestino

Landing page de portfólio profissional focada em **automação de atendimento no WhatsApp, processos digitais e painéis de indicadores** para clínicas, cursos, imobiliárias e escritórios em Fortaleza e remoto.

![Prévia da página inicial do portfólio](img/preview-hero.png)

---

## Visão geral

O projeto foi construído como uma página única (`single-file`) em **HTML5, CSS3 e JavaScript puro**, priorizando carregamento rápido, acessibilidade, SEO local (`Schema.org` + Open Graph) e edição simples de conteúdo através de um objeto centralizado `CONFIG` no próprio `index.html`.

---

## Seções da página

1. **Hero + Simulação de WhatsApp (`#topo`)**
   - Apresentação direta da proposta de valor, botões de chamada para ação e selos de confiança (`+10 anos em TI`, `Fortaleza e remoto`, `Suporte após a entrega`).
   - Mockup interativo de conversa no WhatsApp com entrada sequencial das mensagens e indicador de status online pulsando.
2. **Problemas que eu resolvo (`#problemas`)**
   - Cards destacando dores comuns de negócios (faltas de pacientes/alunos, WhatsApp lotado, planilhas manuais e falta de visibilidade de vendas).
3. **Serviços (`#servicos`)**
   - Detalhamento das três frentes principais: *Atendimento e agendamento no WhatsApp*, *Processos internos digitais* e *Painéis de indicadores*, cada uma com botão direto para solicitar proposta.
4. **Projetos demonstrativos (`#projetos`)**
   - Cards clicáveis que abrem um `<dialog>` modal com desafio, solução, tecnologias utilizadas e resultado esperado.
5. **Como funciona (`#como`)**
   - Fluxo numerado em 4 etapas: diagnóstico gratuito, proposta fechada, desenvolvimento com validação e entrega com suporte.
6. **Ferramentas que uso**
   - Lista de tecnologias e plataformas (`n8n`, `WhatsApp API`, `Power Automate`, `Power BI`, `SQL`, `Python`, `Google Workspace`, `Claude e IA`).
7. **Sobre mim (`#sobre`)**
   - Apresentação pessoal com foto de perfil circular (`img/perfil.jpg`), trajetória em TI e links para [LinkedIn](https://www.linkedin.com/in/eltoncelestino/) e [GitHub](https://github.com/eltoncelestino).

   <img src="img/perfil.jpg" alt="Foto de Elton Celestino" width="180">

8. **Perguntas frequentes (`#faq`)**
   - Acordeão nativo com `<details>` e `<summary>` respondendo dúvidas sobre prazo, pagamento, segurança (LGPD) e suporte.
9. **Contato (`#contato`)**
   - Formulário com validação de campos obrigatórios e telefone/WhatsApp, integrado ao envio por WhatsApp, webhook (`formEndpoint`) ou `mailto:` como fallback.
10. **Rodapé e Modal de Privacidade**
    - Informações de contato, copyright dinâmico e modal explicando o tratamento de dados conforme a LGPD (Lei 13.709/2018).

---

## Recursos visuais e animações

- **Scroll Reveal (`IntersectionObserver`)**: seções, cards, etapas e tags surgem suavemente em cascata conforme o usuário rola a página.
- **Barra de progresso de leitura**: linha fixa no topo acompanhando o avanço da rolagem.
- **Cabeçalho translúcido dinâmico**: `backdrop-filter: blur(12px)` com sombra ativada ao rolar.
- **Microinterações**: elevação de cards e botões no `:hover`, sublinhado animado no menu, rotação do ícone `+` no FAQ e pulso discreto no botão flutuante do WhatsApp.
- **Acessibilidade**: suporte completo a `prefers-reduced-motion: reduce`, desativando animações e transições para quem prefere movimento reduzido.

---

## Estrutura de arquivos

```text
portfolio/
├── index.html          # Estrutura, estilos, animações, conteúdo (CONFIG) e scripts
├── README.md           # Documentação do projeto
└── img/
    ├── LEIA-ME.txt     # Instruções para troca de imagens
    ├── perfil.jpg      # Foto de perfil exibida na seção Sobre mim
    └── preview-hero.png# Captura da tela inicial para documentação
```

---

## Como executar localmente

Por ser um site estático, basta abrir o arquivo `index.html` no navegador ou iniciar um servidor local:

```bash
python -m http.server 8080
```

Depois, acesse `http://localhost:8080`.

---

## Personalização rápida

No bloco `CONFIG` dentro de `index.html`, você pode editar facilmente:
- `telefone` e `telefoneExibido`: número do WhatsApp (quando vazio, os botões direcionam para `#contato` e o formulário usa `mailto:`).
- `email`: endereço de e-mail exibido e usado no formulário.
- `formEndpoint`: URL de webhook (ex.: n8n ou Formspree) para envio direto do formulário.
- `problemas`, `servicos`, `projetos`, `passos`, `ferramentas`, `faq` e `depoimentos`.
