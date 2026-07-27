# Summary de Atualizações - Troca de Titularidade (Ownership Transfer)

## Descrição
Adicionamos um recurso completo de **Troca de Titularidade** ao sistema de onboarding interativo da Comando Log, permitindo que clientes CD (Fornecedor) vendam produtos para clientes terceiros sem movimentação física no armazém.

## Funcionalidade
- **Decisão do Pagador**: A parte que paga decide quais itens são armazenados e quem cobrará a armazenagem
- **Sem Movimentação Física**: Os produtos não precisam ser movidos fisicamente no armazém
- **Semiprecisão de Responsabilidade**: 
  - AG (Cliente Destinatário) emite automaticamente uma nota fiscal de armazenagem para comprovação
  - CD (Cliente Fornecedor) emite nota de venda
  - Total transparência operacional e total rastreabilidade

## Slides Atualizados

### Slide 8 - Grid de Sistemas Externos
- **Tradução para Português (PT)**: "Troca de titularidade"
- **Tradução para Inglês (EN)**: "Ownership transfer"
- Destaca como o principal benefício do WMS para clientes parceiros

### Slide 9 - TOTVS WMS (Slide Detalhado)
Adicionamos o **5º bullet point**:

**Título**: "Troca de titularidade" (PT) / "Ownership transfer" (EN)

**Descrição Completa em PT**:
"Quando um CD vende produtos para clientes terceiros, o WMS registra a transferência de responsabilidade sem movimentação física. O pagador que cobrir a armazenagem decide, sem movimentar fisicamente o produto, e o AG emite automaticamente uma nota fiscal de armazenagem para comprovação, enquanto o CD emite nota de venda, garantindo total transparência e controle operacional."

**Descrição Completa em EN**:
"When a CD sells products to third-party customers, WMS records the transfer of responsibility without physical movement. The payer who covers storage decides without physically moving the product, and AG automatically generates a storage invoice for proof, while CD generates a sales invoice, ensuring full transparency and control over the operation."

## Impacto no Negócio
- **Novos Clientes**: Permite que clientes CD comercializem seus produtos com terceiros
- **Flexibilidade Operacional**: A decisão de quem paga a armazenagem é otimizada, sem obstrução física
- **Transparência Total**: Todas as transferências de responsabilidade documentadas sem documentos extras
- **Controle Financeiro**: Fluxo de caixa integrado entre CD, AG e pagador

## Status de Desenvolvimento

✅ **Concluído**:
- Funcionalidade completa adicionada ao Slide 9 (TOTVS WMS)
- Updated Slidebar i18n translations for both PT and EN
- Linkação do sistema de modal integrado para suporte completo

⚠️ **Considerações**: 
- Funcionalidade de Gestão de Armazém fornecida exclusivamente via TOTVS WMS (sistema externo)
- Requer acesso ao TOTVS WMS para suporte completo
- Clientes internos (Comando Log) podem usar funcionalidade separada via NEXUS Module VIEW STOCK

## Configuração do GitHub Actions
Para fazer deploy no GitHub Pages com segurança, siga estas etapas:

### 1. Configurar GitHub Actions Secrets
No repositório: https://github.com/comandosistemasti10-stack/onboarding-comandolog/settings/secrets

Adicione os seguintes secrets:

| Segredo | Valor | Descrição |
|---------|-------|-------------|
| `GH_TOKEN_PERSONAL` | Token de acesso pessoal do GitHub (perm: `repo`, `workflow`) | Para autenticação como CI/CD |
| `GIT_SSH_KEY` | Chave privada da sua chave SSH (conteúdo do arquivo `.ssh/id_rsa`) | Para autenticação SSH |
| `GIT_SSH_PUB` | Chave pública da sua chave SSH (conteúdo do arquivo `.ssh/id_rsa.pub`) | Para autenticação SSH |
| `GIT_USER_NAME` | "Luis Lopes" | Nome do autor para commits |
| `GIT_USER_EMAIL` | "luis.lopes@hotmail.com" | E-mail do autor para commits |

### 2. Adicionar GitHub Actions Workflow
Crie `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

permissions:
  contents: read

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout
      uses: actions/checkout@v3

    - name: Configure Git User
      run: |
        git config --global user.name "${{ secrets.GIT_USER_NAME }}"
        git config --global user.email "${{ secrets.GIT_USER_EMAIL }}"

    - name: Configurar Autenticação SSH
      if: secrets.GIT_SSH_KEY != ''
      run: |
        mkdir -p ~/.ssh
        echo "${{ secrets.GIT_SSH_KEY }}" > ~/.ssh/id_rsa
        chmod 600 ~/.ssh/id_rsa
        echo "${{ secrets.GIT_SSH_PUB }}" > ~/.ssh/id_rsa.pub
        ssh-keyscan github.com >> ~/.ssh/known_hosts
        git config --global credential.helper ssh-agent

    - name: Configurar Token GitHub
      if: secrets.GH_TOKEN_PERSONAL != ''
      run: |
        git config --global credential.https://github.com.token "${{ secrets.GH_TOKEN_PERSONAL }}"

    - name: Push para GitHub
      run: |
        git push origin main
```

### 3. Fluxo de Trabalho Esperado

1. **Commit**: Faça um commit das alterações em `main`:
   ```bash
   git add onboarding-light.html
   git commit -m "Adicionar troca de titularidade ao WMS - Slide 9"
   ```

2. **Push**: Execute este script de setup primeiro:
   ```bash
   # Executar configuração inicial (uma vez)
   # Executar: git config --global credential.helper store

   # Depois: git push origin main
   ```

3. **Autenticação**: O sistema aceitará:
   - SSH Key (se você tiver")
   - Ou Token GitHub (se você tiver)

4. **Publicar**: Após o push bem-sucedido:
   - GitHub Actions será executado automaticamente
   - Site publicado em: `https://comandosistemasti10-stack.github.io/onboarding-comandolog/`

### 4. URLs de Produção

- **Página Principal**: https://comandosistemasti10-stack.github.io/onboarding-comandolog/
- **Página Principal WPS**: https://comandosistemasti10-stack.github.io/onboarding-comandolog/onboarding-light.html

### 5. Verificar Status

Após o deploy:

- **Página**: https://comandosistemasti10-stack.github.io/onboarding-comandolog/onboarding-light.html
- **Actions**: https://github.com/comandosistemasti10-stack/onboarding-comandolog/actions
