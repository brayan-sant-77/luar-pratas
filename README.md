# Atelier Prata — site inicial

Site estático, responsivo e sem dependências de instalação. Feito com HTML, CSS e JavaScript puro. Os pedidos são encaminhados ao WhatsApp.

## 1. Personalize antes de publicar

1. Abra `index.html` e substitua **Atelier Prata** pelo nome verdadeiro da loja. Procure também os textos de apresentação para ajustar à marca.
2. Abra `script.js` e altere as duas primeiras constantes:
   - `WHATSAPP_NUMBER`: número real com código do país e DDD, somente dígitos. Exemplo de formato: `5511999999999`.
   - `STORE_NAME`: nome da loja.
3. No mesmo `script.js`, edite a lista `products`: nomes, categorias, descrições, preços e URLs das imagens. O preço inicial aparece como “Consultar”.
4. Em `index.html`, troque os links e textos de Instagram/redes sociais se decidir adicioná-los.
5. Confira os direitos de uso das fotos e substitua as imagens ilustrativas por fotos reais das peças sempre que possível. Fotos reais costumam ajudar mais na confiança e na conversão.

## 2. Testar localmente

- Extraia a pasta, se necessário.
- Abra `index.html` no navegador. Não precisa instalar Node, Java ou banco de dados.
- Para uma experiência melhor no desenvolvimento, abra a pasta no VS Code e use a extensão **Live Server** (opcional).
- Teste os filtros de categoria, o menu no celular e os links de WhatsApp. Antes do número real ser configurado, os links usam um número de exemplo e não devem ser utilizados.

## 3. Publicar gratuitamente com GitHub Pages

1. Crie um repositório público no GitHub, por exemplo `site-loja-prata`.
2. Envie `index.html`, `styles.css`, `script.js` e `README.md` para a raiz do repositório.
3. No repositório, entre em **Settings → Pages**.
4. Em **Build and deployment**, selecione **Deploy from a branch**; escolha `main` e a pasta `/(root)`; clique em **Save**.
5. Aguarde a publicação. O GitHub mostrará o endereço do site nessa mesma tela.

Alternativa: importe o repositório no Vercel e publique como projeto estático, sem comando de build.

## 4. Antes de compartilhar com clientes

- Configure e teste o número correto de WhatsApp em celular.
- Substitua o nome temporário e confirme todos os preços e informações.
- Use imagens próprias ou com permissão de uso; imagens atuais são apenas demonstrações.
- Confira o site no celular e em uma janela anônima.
- Não anuncie pagamento online: esta versão apenas inicia conversas no WhatsApp.

## Estrutura

- `index.html` — conteúdo e estrutura.
- `styles.css` — identidade visual e responsividade.
- `script.js` — catálogo, filtros e mensagens de WhatsApp.
