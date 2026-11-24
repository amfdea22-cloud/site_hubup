/**
 * ============================================================================
 * HubUP! — Catálogo Centralizado de Soluções (catalogData)
 * ============================================================================
 * Para adicionar novos softwares no futuro, basta incluir um novo objeto no
 * array `products` associando-o ao `railId` desejado.
 */

window.catalogData = {
  whatsappNumber: "5511999999999",
  contactEmail: "empresa.hubup@gmail.com",
  // Access Key Web3Forms (funciona em localhost e produção)
  web3formsAccessKey: "943e8306-e5a9-4b22-8b33-5649748fbdc7",
  rails: [
    {
      id: "trilho-saas",
      eyebrow: "PLATAFORMAS SAAS",
      title: "Em Alta na HubUP!",
      subtitle: "Softwares prontos para escalar operações críticas"
    },
    {
      id: "trilho-ia",
      eyebrow: "AUTOMAÇÃO INTELIGENTE",
      title: "Inteligência Artificial & Automação",
      subtitle: "Agentes autônomos, pipelines de dados e integrações omnichannel"
    },
    {
      id: "trilho-engenharia",
      eyebrow: "SOB MEDIDA ENTERPRISE",
      title: "Engenharia & Infraestrutura Sob Medida",
      subtitle: "Arquitetura escalável, cloud-native e segurança defensiva"
    }
  ],
  products: [
    // ========================================================================
    // TRILHO 1: Em Alta na HubUP! (Plataformas SaaS)
    // ========================================================================
    {
      id: "anonymize",
      railId: "trilho-saas",
      rank: "TOP #1",
      title: "Anonymize",
      heroTitle: "ANONYMIZE",
      heroBadge: "DESTAQUE ENTERPRISE • COMPLIANCE & LGPD",
      heroSubtitleMeta: "Top #1 em Segurança de Dados",
      badge: "LGPD & Segurança • SaaS B2B",
      category: "Compliance & LGPD",
      status: "Disponível para Demo",
      match: "99% Match Enterprise",
      metrics: "Precisão PII 99.4% • < 1.8s/doc • Auditoria LGPD",
      artwork: "anonymize",
      hudLabel: "ANONYMIZE ENGINE v4.2",
      hudStatus: "PII SHIELD ATIVO",
      heroStats: [
        { value: "99.4%", label: "Precisão na detecção de PII" },
        { value: "< 1.8s", label: "Tempo médio por documento" },
        { value: "100%", label: "Trilha auditável LGPD" }
      ],
      specs: [
        { key: "FORMATOS SUPORTADOS", value: "PDF, DOCX, XLSX, CSV, JSON, Imagens (OCR)" },
        { key: "MOTOR DE DETECÇÃO", value: "NLP Híbrido + NER Customizado + Regex" },
        { key: "ENTIDADES PII", value: "CPF, RG, Nomes, CID, Endereços, Dados Bancários" },
        { key: "INTEGRAÇÃO", value: "API REST, Webhooks & Portal Web" },
        { key: "DEPLOY", value: "Cloud SaaS Dedicado ou On-Premise (Docker)" },
        { key: "CONFORMIDADE", value: "LGPD (Lei 13.709/2018) & ISO 27001 Ready" }
      ],
      heroPitch:
        "Proteção inteligente e anonimização automatizada de documentos e dados sensíveis. Adeque sua operação à LGPD em segundos com IA, eliminando riscos de vazamento e multas sem comprometer a utilidade dos arquivos.",
      pitchShort:
        "Sistema automatizado de anonimização e mascaramento inteligente de documentos (PDFs, contratos, laudos e bases de dados) com detecção de PII por IA.",
      descriptionFull:
        "O Anonymize identifica, classifica e oculta automaticamente dados pessoais e sensíveis (CPF, RG, nomes, endereços, dados clínicos e financeiros) em documentos estruturados e não estruturados, garantindo conformidade total com a Lei Geral de Proteção de Dados (LGPD) para clínicas, escritórios jurídicos, RH e empresas orientadas a dados.",
      gains:
        "Elimina o risco de vazamentos acidentais e multas regulatórias da ANPD, reduzindo em até 92% o tempo manual gasto por equipes jurídicas, médicas e de compliance na tarjação de documentos.",
      keyFeatures: [
        "Detecção automática de PII em PDFs, DOCX, planilhas e documentos escaneados (OCR)",
        "Mascaramento definitivo, pseudonimização reversível e políticas customizáveis por setor",
        "Processamento em lote de milhares de arquivos com filas de alta velocidade",
        "Logs completos de auditoria e certificado de conformidade por documento processado",
        "API REST pronta para integração com ERPs, prontuários eletrônicos e GEDs"
      ],
      tags: [
        "IA & NLP",
        "LGPD Compliance",
        "Processamento em Lote",
        "Auditoria & Logs",
        "API REST"
      ]
    },
    {
      id: "barize",
      railId: "trilho-saas",
      rank: "TOP #2",
      title: "Barize / Barize Web",
      heroTitle: "BARIZE WEB",
      heroBadge: "ERP & PDV • HOSPITALIDADE INTELIGENTE",
      heroSubtitleMeta: "Gestão de Alta Velocidade para Salão e Caixa",
      badge: "ERP & PDV • Hospitalidade",
      category: "ERP & PDV",
      status: "Disponível para Demo",
      match: "97% Match Operacional",
      metrics: "Split Instantâneo • Zero Fila • Controle RBAC",
      artwork: "barize",
      hudLabel: "BARIZE POS CORE v3.1",
      hudStatus: "PDV CLOUD ONLINE",
      heroStats: [
        { value: "+28%", label: "Giro de mesas em horários de pico" },
        { value: "0 erros", label: "No split individual de comandas" },
        { value: "RBAC", label: "Controle granular por perfil" }
      ],
      specs: [
        { key: "STACK PRINCIPAL", value: "Python, FastAPI, PostgreSQL & Web SPA" },
        { key: "MÓDULOS", value: "PDV, Mesas, Comandas, Split, Estoque e Caixa" },
        { key: "PERMISSÕES", value: "Perfis Garçom, Caixa, Gerente e Admin" },
        { key: "DISPOSITIVOS", value: "Desktop, Tablet e Smartphone via navegador" },
        { key: "RELATÓRIOS", value: "Faturamento, Ticket Médio e Curva ABC em tempo real" }
      ],
      heroPitch:
        "Sistema completo de gestão e PDV para bares e restaurantes com divisão individual inteligente de comandas, mapa de mesas em tempo real e controle granular de acesso.",
      pitchShort:
        "Sistema completo de gestão e PDV para bares e restaurantes com divisão individual inteligente de comandas e controle granular de acesso.",
      descriptionFull:
        "O Barize transforma a operação de bares, pubs e restaurantes com um PDV ultrarrápido na web. Permite lançar pedidos por mesa ou comanda individual, dividir contas complexas sem erros matemáticos e acompanhar estoque, caixa e desempenho da equipe em tempo real.",
      gains:
        "Acelera o fechamento de mesas em horários de pico, reduz perdas e desvios de caixa com permissões granulares por perfil e aumenta o giro de salão em até 28%.",
      keyFeatures: [
        "Divisão individual inteligente de comandas (por item, fração ou valor livre)",
        "Mapa interativo de mesas com status de consumo e tempo de permanência",
        "Controle granular de acesso (garçom, caixa, gerente e administrador)",
        "Painel financeiro e relatórios gerenciais em tempo real",
        "Arquitetura web responsiva de baixa latência em Python e FastAPI"
      ],
      tags: [
        "Python",
        "FastAPI",
        "Gestão de Mesas",
        "Split de Conta",
        "Relatórios em Tempo Real"
      ]
    },
    {
      id: "radar-fx",
      railId: "trilho-saas",
      rank: "TOP #3",
      title: "Radar FX / Raio FX",
      heroTitle: "RADAR FX",
      heroBadge: "FINTECH & QUANT • AGENTES AUTÔNOMOS DE IA",
      heroSubtitleMeta: "Telemetria Institucional e Análise Quantitativa",
      badge: "FinTech & Quant • IA",
      category: "FinTech & Quant",
      status: "Disponível para Demo",
      match: "96% Match Quant",
      metrics: "Telemetria ms • Agentes Autônomos • PostgreSQL",
      artwork: "radarfx",
      hudLabel: "RADAR FX TELEMETRY v2.8",
      hudStatus: "FEED QUANT ATIVO",
      heroStats: [
        { value: "< 50ms", label: "Ingestão de telemetria de ordens" },
        { value: "24/5", label: "Monitoramento de risco e drawdown" },
        { value: "ML + IA", label: "Agentes autônomos de contexto" }
      ],
      specs: [
        { key: "TELEMETRIA", value: "Ordens, Spread, Slippage, Drawdown e Sharpe" },
        { key: "BANCO ANALÍTICO", value: "PostgreSQL otimizado para séries temporais" },
        { key: "INTELIGÊNCIA", value: "Machine Learning + Agentes IA para análise macro" },
        { key: "ALERTAS", value: "Notificações instantâneas de risco e anomalias" },
        { key: "VISUALIZAÇÃO", value: "Dashboards quantitativos multi-estratégia" }
      ],
      heroPitch:
        "Ecossistema quantitativo de telemetria de operações, análise de mercado financeiro em tempo real e agentes autônomos de IA para trading disciplinado e gestão de risco.",
      pitchShort:
        "Ecossistema quantitativo de telemetria de operações, análise de mercado financeiro e agentes autônomos de IA para trading.",
      descriptionFull:
        "O Radar FX / Raio FX reúne ingestão de dados de mercado em baixa latência, telemetria avançada de ordens e modelos de Machine Learning para monitoramento de risco, validação de estratégias quantitativas e apoio decisório contínuo.",
      gains:
        "Traz visibilidade estatística em tempo real sobre drawdown, taxa de acerto e exposição, substituindo planilhas manuais por dashboards quantitativos auditáveis e automação disciplinada.",
      keyFeatures: [
        "Telemetria em tempo real de ordens, spread, slippage e performance por estratégia",
        "Agentes autônomos de IA para leitura de contexto macro e sinais quantitativos",
        "Armazenamento histórico estruturado em PostgreSQL para backtesting rigoroso",
        "Alertas inteligentes de gestão de risco e anomalias operacionais",
        "Dashboards executivos com métricas institucionais (Sharpe, Profit Factor, Drawdown)"
      ],
      tags: [
        "Machine Learning",
        "Telemetria Real-Time",
        "PostgreSQL",
        "Agentes IA",
        "Dashboards"
      ]
    },
    {
      id: "skyhub",
      railId: "trilho-saas",
      rank: null,
      title: "SkyHub",
      heroTitle: "SKYHUB",
      heroBadge: "TRAVELTECH • MONITORAMENTO TARIFÁRIO 24/7",
      heroSubtitleMeta: "Alertas Automatizados de Oportunidades Aéreas",
      badge: "TravelTech • Automação",
      category: "TravelTech",
      status: "Disponível para Demo",
      match: "95% Match Automação",
      metrics: "Monitoramento 24/7 • Alertas Instantâneos",
      artwork: "skyhub",
      hudLabel: "SKYHUB RADAR v2.4",
      hudStatus: "SCANNER 24/7 ATIVO",
      heroStats: [
        { value: "24/7", label: "Varredura contínua de rotas aéreas" },
        { value: "< 60s", label: "Disparo de alerta após queda de preço" },
        { value: "Multi-Canal", label: "Entrega via Telegram e WhatsApp" }
      ],
      specs: [
        { key: "MOTOR DE COLETA", value: "Web Scraping distribuído e resiliente" },
        { key: "CANAIS DE ALERTA", value: "Telegram Bots & WhatsApp Business API" },
        { key: "REGRAS", value: "Filtros por trecho, faixa de preço e datas flexíveis" },
        { key: "HISTÓRICO", value: "Comparativo de média histórica para validar desconto" },
        { key: "PÚBLICO-ALVO", value: "Agências, gestores corporativos e clubes de viagens" }
      ],
      heroPitch:
        "Motor inteligente de monitoramento contínuo e alertas automatizados de oportunidades de passagens aéreas em tempo real via Telegram e WhatsApp.",
      pitchShort:
        "Motor inteligente de monitoramento contínuo e alertas automatizados de oportunidades de passagens aéreas em tempo real.",
      descriptionFull:
        "O SkyHub varre continuamente rotas nacionais e internacionais, identificando quedas abruptas de tarifa, emissões promocionais e janelas de oportunidade com entrega imediata via Telegram e WhatsApp para agências, gestores de viagens e clubes de alertas.",
      gains:
        "Automatiza 100% da pesquisa tarifária contínua, permitindo capturar oportunidades que duram minutos e reduzindo drasticamente o custo de aquisição de passagens.",
      keyFeatures: [
        "Engine distribuída de Web Scraping e monitoramento contínuo 24/7",
        "Regras personalizadas por origem, destino, faixa de preço e datas flexíveis",
        "Disparo instantâneo de alertas formatados no Telegram e WhatsApp",
        "Histórico de variação tarifária para validação de descontos reais",
        "Painel administrativo para gestão de rotas e grupos de assinantes"
      ],
      tags: [
        "Web Scraping",
        "Alertas Telegram/WhatsApp",
        "Monitoramento 24/7"
      ]
    },
    {
      id: "adpulse-ai",
      railId: "trilho-saas",
      rank: null,
      title: "AdPulse AI (Creative Testing)",
      heroTitle: "ADPULSE AI",
      heroBadge: "MARTECH • PERFORMANCE & TESTES MULTIVARIADOS",
      heroSubtitleMeta: "Escala Inteligente de Criativos com IA Generativa",
      badge: "MarTech • Performance",
      category: "MarTech & IA",
      status: "Disponível para Demo",
      match: "96% Match Growth",
      metrics: "Testes Multivariados • Otimização de ROAS",
      artwork: "adpulse",
      hudLabel: "ADPULSE ENGINE v1.9",
      hudStatus: "OTIMIZADOR ATIVO",
      heroStats: [
        { value: "3x+", label: "Velocidade na validação de criativos" },
        { value: "A/B/n", label: "Testes multivariados automatizados" },
        { value: "ROAS", label: "Detecção precoce de fadiga criativa" }
      ],
      specs: [
        { key: "EXPERIMENTAÇÃO", value: "Testes A/B e multivariados com significância estatística" },
        { key: "IA GENERATIVA", value: "Variações de copy, ganchos e headlines orientadas a dados" },
        { key: "MÉTRICAS", value: "CTR, CPA, ROAS e alerta automático de fadiga" },
        { key: "RELATÓRIOS", value: "Ranking visual de vencedores para times de mídia paga" }
      ],
      heroPitch:
        "Plataforma automatizada de testes multivariados para criativos de anúncios, combinando IA generativa e analytics para otimizar ROI e escala em mídia paga.",
      pitchShort:
        "Plataforma automatizada de testes multivariados para criativos de anúncios, otimizando ROI e escala em campanhas de mídia paga.",
      descriptionFull:
        "O AdPulse AI combina IA generativa com análise estatística de performance para criar variações de headlines, ganchos e criativos, executar testes A/B estruturados e identificar rapidamente os anúncios vencedores antes de desperdiçar verba.",
      gains:
        "Acelera o ciclo de descoberta de criativos campeões, reduz o CPA (Custo por Aquisição) e fornece clareza estatística sobre quais elementos visuais e textuais geram maior retorno.",
      keyFeatures: [
        "Orquestração automatizada de testes A/B e multivariados de criativos",
        "Geração assistida por IA de variações de copy, ângulos e chamadas",
        "Score preditivo e ranking em tempo real por CTR, CPA e ROAS",
        "Alertas automáticos de fadiga criativa em campanhas ativas",
        "Relatórios executivos prontos para times de tráfego e agências"
      ],
      tags: [
        "Testes A/B",
        "Analytics",
        "Automação de Mídia",
        "IA Generativa"
      ]
    },

    // ========================================================================
    // TRILHO 2: Inteligência Artificial & Automação
    // ========================================================================
    {
      id: "agentes-rag",
      railId: "trilho-ia",
      rank: null,
      title: "Agentes Corporativos & RAG",
      heroTitle: "AGENTES & RAG",
      heroBadge: "ENTERPRISE AI • BASE DE CONHECIMENTO SEGURA",
      heroSubtitleMeta: "IA Treinada nos Documentos da Sua Empresa",
      badge: "Enterprise AI • Conhecimento",
      category: "Inteligência Artificial",
      status: "Disponível para Demo",
      match: "98% Match IA",
      metrics: "Zero Alucinação • Base Privada • Citações",
      artwork: "rag",
      hudLabel: "HUBUP RAG CORE v3.0",
      hudStatus: "INDEXAÇÃO SEGURA",
      heroStats: [
        { value: "-70%", label: "Tempo de busca interna por documentos" },
        { value: "100%", label: "Respostas com citação da fonte" },
        { value: "Privado", label: "Dados isolados fora de modelos públicos" }
      ],
      specs: [
        { key: "ARQUITETURA", value: "RAG (Retrieval-Augmented Generation) + Vector DB" },
        { key: "FONTES", value: "PDFs, Manuais, Wikis, Contratos e Bancos Internos" },
        { key: "SEGURANÇA", value: "Controle de acesso por departamento e auditoria" },
        { key: "CANAIS", value: "Portal Web, Slack, Microsoft Teams e WhatsApp" }
      ],
      heroPitch:
        "Assistentes corporativos de IA conectados à base documental privada da sua empresa para consultas internas e atendimento seguro, com citações verificáveis e zero vazamento.",
      pitchShort:
        "Assistentes de IA treinados na base documental da sua empresa para atendimento e consulta interna segura.",
      descriptionFull:
        "Construímos agentes inteligentes com arquitetura RAG (Retrieval-Augmented Generation) conectados aos seus manuais, políticas, contratos e bases de conhecimento, garantindo respostas precisas, auditáveis e restritas às permissões de cada colaborador.",
      gains:
        "Reduz em até 70% o tempo de busca por informações internas e acelera o atendimento a clientes com respostas consistentes baseadas exclusivamente em fontes aprovadas.",
      keyFeatures: [
        "Indexação vetorial segura de PDFs, wikis, bancos de dados e documentos internos",
        "Respostas com citação explícita da fonte e controle de alucinações",
        "Isolamento de dados corporativos (seus dados não treinam modelos públicos)",
        "Controle de acesso por departamento e logs completos de interações",
        "Integração com portal web interno, Slack, Teams e WhatsApp"
      ],
      tags: [
        "RAG & Embeddings",
        "LLMs Corporativos",
        "Busca Semântica",
        "Segurança de Dados",
        "Python"
      ]
    },
    {
      id: "pipelines-bi",
      railId: "trilho-ia",
      rank: null,
      title: "Pipelines de Dados & BI",
      heroTitle: "PIPELINES & BI",
      heroBadge: "DATA ENGINEERING • DECISÃO EM TEMPO REAL",
      heroSubtitleMeta: "ETL Automatizado e Painéis Executivos",
      badge: "Data Engineering • Analytics",
      category: "Automação & Dados",
      status: "Disponível para Demo",
      match: "95% Match Dados",
      metrics: "ETL Automatizado • Single Source of Truth",
      artwork: "pipelines",
      hudLabel: "DATA PIPELINE ENGINE",
      hudStatus: "SYNC EM TEMPO REAL",
      heroStats: [
        { value: "0", label: "Planilhas manuais para consolidar KPIs" },
        { value: "ETL/ELT", label: "Pipelines resilientes com alertas" },
        { value: "Real-Time", label: "Visão executiva unificada" }
      ],
      specs: [
        { key: "INGESTÃO", value: "ERPs, CRMs, Gateways de Pagamento e Planilhas" },
        { key: "ARMAZENAMENTO", value: "PostgreSQL, BigQuery ou Data Lake Cloud" },
        { key: "GOVERNANÇA", value: "Camada semântica única e validação de qualidade" },
        { key: "VISUALIZAÇÃO", value: "Dashboards executivos com drill-down interativo" }
      ],
      heroPitch:
        "Engenharia de dados moderna, pipelines ETL automatizados e painéis executivos unificados para decisões rápidas com uma única fonte de verdade.",
      pitchShort:
        "Engenharia de dados, ETL automatizado e painéis executivos para tomada de decisão em tempo real.",
      descriptionFull:
        "Unificamos dados dispersos em ERPs, CRMs, planilhas e gateways de pagamento em um Data Warehouse moderno, entregando pipelines resilientes e dashboards executivos atualizados automaticamente.",
      gains:
        "Acaba com retrabalho semanal em planilhas manuais, elimina divergências de números entre áreas e dá à diretoria visão em tempo real de receita, margens e KPIs críticos.",
      keyFeatures: [
        "Pipelines ETL/ELT automatizados com monitoramento de qualidade e alertas",
        "Modelagem analítica em PostgreSQL, BigQuery ou data lakes modernos",
        "Dashboards executivos interativos com drill-down por unidade e período",
        "Sincronização agendada ou em tempo real via webhooks e APIs",
        "Governança de métricas e camada semântica padronizada"
      ],
      tags: [
        "ETL / ELT",
        "Engenharia de Dados",
        "PostgreSQL",
        "Dashboards BI",
        "Automação"
      ]
    },
    {
      id: "bots-omnichannel",
      railId: "trilho-ia",
      rank: null,
      title: "Bots Omnichannel & Integrações",
      heroTitle: "OMNICHANNEL",
      heroBadge: "AUTOMAÇÃO • WHATSAPP, TELEGRAM, ERP & CRM",
      heroSubtitleMeta: "Fluxos Integrados de Alta Disponibilidade",
      badge: "Automação • APIs & Mensageria",
      category: "Automação & Dados",
      status: "Disponível para Demo",
      match: "96% Match Integração",
      metrics: "WhatsApp + ERP/CRM • Alta Disponibilidade",
      artwork: "bots",
      hudLabel: "OMNICHANNEL HUB v2.6",
      hudStatus: "APIS CONECTADAS",
      heroStats: [
        { value: "24/7", label: "Atendimento e triagem automatizada" },
        { value: "99.9%", label: "Disponibilidade em filas resilientes" },
        { value: "Bi-Dir", label: "Sincronização em tempo real ERP/CRM" }
      ],
      specs: [
        { key: "CANAIS", value: "WhatsApp Business API, Telegram e Webchat" },
        { key: "INTEGRAÇÕES", value: "ERPs, CRMs, Gateways de Pagamento e Webhooks" },
        { key: "ORQUESTRAÇÃO", value: "Regras determinísticas + IA conversacional" },
        { key: "OBSERVABILIDADE", value: "Filas com retentativa, métricas de SLA e logs" }
      ],
      heroPitch:
        "Fluxos automatizados integrados a WhatsApp, Telegram, ERPs e CRMs via APIs de alta disponibilidade para atender, qualificar e operar 24/7 sem digitação manual.",
      pitchShort:
        "Fluxos automatizados integrados a WhatsApp, Telegram, ERPs e CRMs via APIs de alta disponibilidade.",
      descriptionFull:
        "Desenvolvemos orquestrações inteligentes que conectam canais de atendimento (WhatsApp Business API, Telegram, Webchat) diretamente aos seus sistemas internos para qualificação de leads, emissão de boletos, agendamentos e atualizações de pedidos.",
      gains:
        "Garante atendimento imediato 24/7 com transbordo humano contextualizado, reduz custos operacionais de suporte e elimina digitação manual entre sistemas.",
      keyFeatures: [
        "Integração oficial com WhatsApp Business API, Telegram e webhooks customizados",
        "Sincronização bidirecional com ERPs, CRMs e gateways financeiros",
        "Fluxos híbridos combinando regras determinísticas e IA conversacional",
        "Filas resilientes com retentativa automática e observabilidade completa",
        "Painel de métricas de conversão, SLA e volume de atendimentos"
      ],
      tags: [
        "WhatsApp API",
        "Telegram Bots",
        "Integração ERP/CRM",
        "Webhooks",
        "Alta Disponibilidade"
      ]
    },

    // ========================================================================
    // TRILHO 3: Engenharia & Infraestrutura Sob Medida
    // ========================================================================
    {
      id: "fullstack-saas",
      railId: "trilho-engenharia",
      rank: null,
      title: "Desenvolvimento Full Stack SaaS",
      heroTitle: "FULL STACK SAAS",
      heroBadge: "ENGENHARIA SOB MEDIDA • DO MVP AO ENTERPRISE",
      heroSubtitleMeta: "Arquitetura Multi-Tenant e UI/UX Sênior",
      badge: "Engenharia • Produto Digital",
      category: "Engenharia Sob Medida",
      status: "Disponível para Demo",
      match: "97% Match Produto",
      metrics: "Do MVP ao Enterprise • Multi-Tenant",
      artwork: "fullstack",
      hudLabel: "SAAS ARCHITECTURE LAB",
      hudStatus: "CI/CD PIPELINE READY",
      heroStats: [
        { value: "Multi-Tenant", label: "Isolamento e escala nativa" },
        { value: "100% IP", label: "Propriedade intelectual do cliente" },
        { value: "CI/CD", label: "Entregas contínuas e testadas" }
      ],
      specs: [
        { key: "ARQUITETURA", value: "Multi-Tenant, RBAC, Billing Recorrente e Webhooks" },
        { key: "FRONT-END", value: "Interfaces responsivas de alta performance e UI/UX sênior" },
        { key: "BACK-END", value: "APIs REST/GraphQL escaláveis com documentação OpenAPI" },
        { key: "QUALIDADE", value: "Testes automatizados, CI/CD e observabilidade completa" }
      ],
      heroPitch:
        "Arquitetura e construção de plataformas web SaaS escaláveis do MVP à operação Enterprise, com código sustentável, UI/UX de alto nível e foco em conversão.",
      pitchShort:
        "Arquitetura e construção de plataformas web escaláveis do MVP à operação Enterprise.",
      descriptionFull:
        "Projetamos e desenvolvemos plataformas SaaS sob medida com foco em experiência do usuário, código sustentável, arquitetura multi-tenant, billing recorrente e performance preparada para crescer sem reescritas traumáticas.",
      gains:
        "Acelera o time-to-market com base técnica sólida, reduz dívida técnica desde o dia 1 e garante autonomia total sobre a propriedade intelectual da sua plataforma.",
      keyFeatures: [
        "Arquitetura multi-tenant com isolamento de dados e controle RBAC",
        "Front-end moderno, responsivo e focado em alta conversão e usabilidade",
        "Back-end escalável em APIs REST/GraphQL com documentação OpenAPI",
        "Testes automatizados, CI/CD e observabilidade desde a primeira entrega",
        "Integração com gateways de pagamento, SSO e webhooks para clientes"
      ],
      tags: [
        "SaaS Multi-Tenant",
        "Full Stack",
        "UI/UX Sênior",
        "APIs Escaláveis",
        "CI/CD"
      ]
    },
    {
      id: "cloud-seguranca",
      railId: "trilho-engenharia",
      rank: null,
      title: "Cloud & Segurança Defensiva",
      heroTitle: "CLOUD & SEC",
      heroBadge: "DEVSECOPS • INFRAESTRUTURA CLOUD-NATIVE",
      heroSubtitleMeta: "Docker, Zero Trust e Proteção de Aplicações Web",
      badge: "DevSecOps • Infraestrutura",
      category: "Infraestrutura & Cloud",
      status: "Disponível para Demo",
      match: "98% Match Segurança",
      metrics: "Docker • Zero Trust • Hardening Web",
      artwork: "cloudsec",
      hudLabel: "DEVSECOPS SHIELD v3.4",
      hudStatus: "PERÍMETRO PROTEGIDO",
      heroStats: [
        { value: "99.9%", label: "Uptime com deploy zero-downtime" },
        { value: "OWASP", label: "Hardening defensivo de aplicações" },
        { value: "Docker", label: "Infraestrutura reproduzível em nuvem" }
      ],
      specs: [
        { key: "CONTAINERS", value: "Docker, orquestração e deploy zero-downtime" },
        { key: "SEGURANÇA", value: "Hardening OWASP Top 10, WAF e Zero Trust" },
        { key: "OBSERVABILIDADE", value: "Logs centralizados, métricas e alertas proativos" },
        { key: "CONTINUIDADE", value: "Backups criptografados e plano de Disaster Recovery" }
      ],
      heroPitch:
        "Deploy em nuvem, containerização Docker, controle rigoroso de acesso e proteção defensiva de aplicações web para manter sua operação blindada e sempre no ar.",
      pitchShort:
        "Deploy em nuvem, containerização Docker, controle de acesso e proteção de aplicações web.",
      descriptionFull:
        "Estruturamos ambientes cloud resilientes e seguros com containerização Docker, pipelines automatizados, WAF, controle rigoroso de segredos, backups testados e práticas de segurança defensiva (OWASP) para proteger operações críticas.",
      gains:
        "Minimiza indisponibilidades, reduz custos de infraestrutura com dimensionamento inteligente e blinda suas aplicações contra invasões e vazamentos de dados.",
      keyFeatures: [
        "Containerização com Docker, orquestração e deploy zero-downtime",
        "Hardening de aplicações web seguindo boas práticas OWASP Top 10",
        "Controle de acesso Zero Trust, gestão de segredos e SSL/TLS automatizado",
        "Monitoramento proativo de uptime, logs centralizados e alertas de incidentes",
        "Rotinas automatizadas de backup criptografado e plano de disaster recovery"
      ],
      tags: [
        "Docker",
        "Cloud Architecture",
        "DevSecOps",
        "OWASP & WAF",
        "Observabilidade"
      ]
    }
  ]
};
