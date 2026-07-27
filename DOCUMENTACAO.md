# Onboarding Interativo — Sistemas Comando Log

Documentação completa do projeto de onboarding interativo desenvolvido para apresentar os sistemas logísticos da Comando Log.

---

## Visão Geral

| Item | Detalhe |
|------|---------|
| **Arquivo principal** | `onboarding-light.html` |
| **Tecnologia** | HTML + CSS + JavaScript puro (single-file, sem framework) |
| **Deploy** | GitHub Pages |
| **URL de produção** | https://comandosistemasti10-stack.github.io/onboarding-comandolog/onboarding-light.html |
| **Repositório** | https://github.com/comandosistemasti10-stack/onboarding-comandolog |
| **Total de slides** | 12 |
| **Idiomas** | Português (PT) e Inglês (EN) |

---

## Estrutura de Slides

| # | ID | Conteúdo |
|---|----|----------|
| 0 | `slide-1` | Capa — hero com vídeo |
| 1 | `slide-2` | Ecossistema — diagrama de rede interativo |
| 2 | `slide-3` | Hub Sistemas Internos |
| 3 | `slide-4` | NEXUS — detalhe |
| 4 | `slide-5` | RESERVE — detalhe |
| 5 | `slide-7` | FARM ROUTE — módulo NEXUS |
| 6 | `slide-viewstock` | VIEW STOCK — módulo NEXUS |
| 7 | `slide-8` | Hub Sistemas Externos |
| 8 | `slide-9` | TOTVS WMS — detalhe |
| 9 | `slide-10` | TOTVS PROTHEUS — detalhe |
| 10 | `slide-6` | VIA NEXXUS — detalhe |
| 11 | `slide-11` | Próximos Passos + Contatos |

---

## Sistemas Apresentados

### Internos
| Sistema | Tipo | URL | Modal configurado |
|---------|------|-----|-------------------|
| NEXUS | Sistema interno | https://nexus.integralogis.net/ | Sim |
| RESERVE | Sistema interno | https://reserve.integralogis.net/ | Sim |

### Módulos NEXUS
| Sistema | Tipo | URL | Modal configurado |
|---------|------|-----|-------------------|
| FARM ROUTE | Módulo NEXUS | — | Não |
| VIEW STOCK | Módulo NEXUS | — | Não |

### Externos
| Sistema | Tipo | URL | Modal configurado |
|---------|------|-----|-------------------|
| TOTVS WMS | Sistema externo | — | Não |
| TOTVS PROTHEUS | Sistema externo | — | Não |
| VIA NEXXUS | Sistema externo | — | Não |

---

## Funcionalidades

### Navegação
- Setas do teclado `←` `→` para trocar slides
- Swipe (toque) no mobile
- Dots de navegação clicáveis na parte inferior
- Botões ANTERIOR / PRÓXIMO em cada slide
- Cards clicáveis nos hubs de sistemas

### Modo Apresentação
- Botão `📺` no canto superior direito (ou tecla `P`)
- Oculta os dots e a barra de progresso
- Ideal para projeção em TV/telão

### Tela Cheia
- Botão `⤢` no canto superior direito
- Prompt automático ao abrir solicitando tela cheia

### Seletor de Idioma
- Bandeiras 🇧🇷 / 🇺🇸 no canto superior direito
- Troca todo o conteúdo: títulos, subtítulos, bullets, modais, badges, botões e footers
- Preferência salva via `localStorage` (persiste entre sessões)
- Chaves de tradução via atributo `data-i18n` no HTML

### Modal de Sistemas
- Abre ao clicar em "VISUALIZAR SISTEMA"
- Exibe o sistema em iframe (94vw × 90vh)
- Spinner de carregamento + fallback automático se iframe bloqueado
- Botão "Nova aba" sempre disponível
- **Limitação atual:** sistemas em `integralogis.net` bloqueiam iframe via `X-Frame-Options: sameorigin`. Para liberar, o servidor precisa adicionar:
  ```
  Content-Security-Policy: frame-ancestors 'self' https://comandosistemasti10-stack.github.io
  ```

### Modal de Bullets
- Cada bullet nos slides de detalhe é clicável
- Abre modal com título e descrição detalhada do recurso
- Primeiro bullet de cada slide pulsa para chamar atenção

### Animação de Caminhão
- 3 caminhões cruzam a tela em loop (`CAMINHAO.png`, `CAMINHAO_2.png`, `CAMINHAO_3.png`)
- Ciclo de 75 segundos com atraso de 25s entre cada um

### Barra de Progresso
- Barra roxa no topo indicando progresso entre os 12 slides

---

## Internacionalização (i18n)

### Arquitetura
```javascript
// Objeto de traduções no JS
const translations = { pt: { ... }, en: { ... } }

// HTML: elemento traduzível
<div data-i18n="chave">Texto em PT</div>

// HTML: bullet com modal traduzível
<li data-modal-key="n.b1" onclick="triggerBulletModal(this)">

// Função de troca
setLang('en') // ou setLang('pt')
```

### Chaves de Modal
| Chave | Sistema | Bullet |
|-------|---------|--------|
| `n.b1` – `n.b4` | NEXUS | 4 bullets |
| `r.b1` – `r.b4` | RESERVE | 4 bullets |
| `fr.b1` – `fr.b4` | FARM ROUTE | 4 bullets |
| `vs.b1` – `vs.b4` | VIEW STOCK | 4 bullets |
| `wms.b1` – `wms.b4` | TOTVS WMS | 4 bullets |
| `erp.b1` – `erp.b4` | TOTVS PROTHEUS | 4 bullets |
| `vn.b1` – `vn.b4` | VIA NEXXUS | 4 bullets |

---

## Assets

### Pasta raiz
| Arquivo | Uso |
|---------|-----|
| `onboarding-light.html` | Arquivo principal |
| `VIDEO_COMANDO.mp4` | Vídeo da capa (slide 1) |
| `CAMINHAO.png` | Caminhão animado 1 |
| `CAMINHAO_2.png` | Caminhão animado 2 |
| `CAMINHAO_3.png` | Caminhão animado 3 |
| `BANDEIRA_BRASIL.png` | Bandeira BR no seletor de idioma |
| `BANDEIRA_EUA.png` | Bandeira EUA no seletor de idioma |

### `/gifs`
| Arquivo | Sistema |
|---------|---------|
| `NEXUS_GIF.gif` | NEXUS |
| `RESERVE_GIF.gif` | RESERVE |
| `FARM_ROUTE_GIF.gif` | FARM ROUTE |
| `VIEWSTOCK_GIF.gif` | VIEW STOCK |
| `WMS_GIF.gif` | TOTVS WMS |
| `ERP_GIF.gif` | TOTVS PROTHEUS |
| `VIA_NEXXUS_GIF.gif` | VIA NEXXUS |

### `/logos`
| Arquivo | Uso |
|---------|-----|
| `LOGO ROXA NOVA.png` | Logo hero slide 1 |
| `LOGO ROXO COMANDO.png` | Logo global, splash, diagrama |
| `LOGO_NEXUS.svg` | Logo NEXUS (não usada nos slides) |

---

## CSS — Variáveis de Cor

```css
--accent:   #7B2DB8   /* roxo principal */
--accent-2: #9B2DB8   /* roxo médio */
--accent-3: #6A1B9A   /* roxo escuro */
--white:    #1A0A2E   /* texto escuro (nome confuso, é roxo escuro) */
```

---

## Responsividade

| Breakpoint | Comportamento |
|------------|--------------|
| `> 1100px` | Desktop completo |
| `≤ 1100px` | Padding reduzido |
| `≤ 900px` | Colunas de detalhe empilhadas, GIFs visíveis abaixo |
| `≤ 768px` | Mobile: tudo em coluna, logo flui, caminhão menor, diagrama oculto |
| `≤ 480px` | Fontes e padding menores |

---

## Contatos (Slide Final)

| Tipo | Dado |
|------|------|
| Telefone | +55 15 99190-3686 |
| Site | www.comandolog.com.br |
| Suporte | suporte.sistemas@comandolog.com.br |

---

## Pendências

- [ ] Liberar `X-Frame-Options` no servidor `integralogis.net` para habilitar o modal iframe
- [ ] Adicionar URLs dos demais sistemas nos botões "VISUALIZAR SISTEMA" (RESERVE, FARM ROUTE, VIEW STOCK, WMS, PROTHEUS, VIA NEXXUS)
- [ ] Preencher credenciais de demo para auto-login nos sistemas (quando servidor liberar iframe)
- [ ] Adicionar modal de sistema para os demais slides de detalhe

---

## Como fazer deploy

```bash
# Editar o arquivo
onboarding-light.html

# Commitar e subir
git add onboarding-light.html
git commit -m "descrição da mudança"
git push origin main

# GitHub Pages publica automaticamente em ~1 minuto
```

---

## Histórico de Versões

| Commit | Descrição |
|--------|-----------|
| `14fff53` | Modal de sistema com iframe + GIFs maiores |
| `dbf1c69` | GIFs visíveis no mobile |
| `880cb7c` | Mobile responsivo completo |
| `b26f906` | Contatos reais no slide final |
| `9ef4078` | Seletor de idioma PT/EN completo |
| `b8f398f` | Prompt de tela cheia + módulos mais visíveis |
| `ed6a890` | Diagrama slide-2 alinhado + contadores corrigidos |
| `85922f8` | Diagrama com módulos NEXUS |
| `7ad1daf` | Modo apresentação (botão TV + tecla P) |
| `5fe210e` | Splash screen com boas-vindas |
| `69ec32e` | Barra de progresso, splash, transições, mobile |
| `a72af36` | Versão inicial do onboarding |
