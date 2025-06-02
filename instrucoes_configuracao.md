# Instruções para Configuração da Landing Page CredTudo Empréstimos

## Conteúdo do Pacote

Este pacote contém todos os arquivos necessários para sua landing page profissional:

- `index.html`: Estrutura principal da página
- `styles.css`: Estilos e design visual
- `script.js`: Funcionalidades interativas e integração com WhatsApp
- `images/`: Pasta com imagens do site
  - `logo.png`: Logo da CredTudo
  - `hero-image.png`: Imagem do consultor
  - `money-bg.png`: Textura de fundo

## Configuração do Domínio CREDTUDOEMPRESTIMOS.COM.BR

Para conectar seu domínio à landing page, você precisará:

### Opção 1: Hospedagem Compartilhada (Recomendada)

1. **Contrate um serviço de hospedagem** como Hostgator, Locaweb ou Hostinger
2. **Faça login no painel de controle** da sua hospedagem
3. **Faça upload dos arquivos** da landing page para a pasta principal (geralmente chamada `public_html` ou `www`)
4. **Configure os servidores DNS** do seu domínio para apontar para os servidores da hospedagem:
   - Acesse o painel onde registrou seu domínio (Registro.br ou outro)
   - Altere os servidores DNS para os fornecidos pela sua hospedagem
   - Aguarde a propagação (pode levar até 24 horas)

### Opção 2: Redirecionamento para Serviço de Landing Page

Se preferir continuar usando o Canva ou outro serviço de landing page:

1. **Configure um redirecionamento** no painel do seu registrador de domínio
2. **Aponte seu domínio** para a URL da sua landing page existente
3. **Escolha redirecionamento 301** (permanente) para melhor SEO

## Configuração do WhatsApp

O botão de WhatsApp está configurado para funcionar sem expor seu número diretamente:

1. **Edite o arquivo `script.js`**
2. **Localize a linha 3**: `const whatsappNumber = "5500000000000";`
3. **Substitua pelo seu número** no formato internacional (55 + DDD + número)
4. **Personalize a mensagem padrão** na linha 4 se desejar

## Integração com Anúncios Pagos

Para usar esta landing page em anúncios pagos:

1. **Use a URL do seu domínio próprio** nos anúncios (ex: https://credtudoemprestimos.com.br)
2. **Configure o Pixel do Facebook** ou Tag do Google Ads se necessário
3. **Adicione os códigos de rastreamento** no arquivo `index.html` antes da tag `</body>`
4. **Teste os links** antes de iniciar as campanhas

## Personalização Adicional

Para personalizar ainda mais sua landing page:

- **Cores**: Edite as variáveis no início do arquivo `styles.css`
- **Textos**: Modifique diretamente no arquivo `index.html`
- **Imagens**: Substitua os arquivos na pasta `images/` mantendo os mesmos nomes

## Suporte

Se precisar de ajuda adicional com a configuração, entre em contato com um desenvolvedor web ou com o suporte do seu serviço de hospedagem.

---

**Importante**: Esta landing page foi desenvolvida para ser compatível com as políticas de anúncios para produtos financeiros, utilizando redirecionamento seguro para WhatsApp em vez de expor o número diretamente.
