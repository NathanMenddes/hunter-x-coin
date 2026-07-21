# Hunter x Coin 🪙

Dashboard de criptomoedas em tempo real, construído com HTML, CSS e JavaScript puro (vanilla JS), consumindo dados da API pública da [CoinGecko](https://www.coingecko.com/en/api).

![status](https://img.shields.io/badge/status-conclu%C3%ADdo-brightgreen)

## 🔗 Demo

[Acesse o site aqui](https://nathanmenddes.github.io/hunter-x-coin/)

## 📸 Preview

*(adicione um screenshot do projeto aqui)*

## ✨ Funcionalidades

- **Preços em tempo real** — busca dados atualizados de 5 criptomoedas (Bitcoin, Ethereum, Solana, Dogecoin e Cardano) via API
- **Atualização automática** — os preços são atualizados a cada 60 segundos, sem precisar recarregar a página
- **Busca/filtro** — campo de pesquisa que filtra as moedas exibidas pelo nome, em tempo real
- **Favoritos** — botão para marcar moedas favoritas, com uma seção dedicada exibindo só elas; os favoritos são salvos no navegador (`localStorage`) e persistem entre sessões
- **Indicadores visuais** — variação percentual das últimas 24h destacada em verde (alta) ou vermelho (queda)
- **Estados de carregamento e erro** — feedback visual enquanto os dados são buscados, e uma mensagem amigável caso a API falhe
- **Layout responsivo** — grid que se adapta a diferentes tamanhos de tela, do desktop ao celular

## 🛠️ Tecnologias

- HTML5
- CSS3 (Grid, Flexbox, nesting, gradientes)
- JavaScript (ES6+) — `fetch`, `async/await`, manipulação de DOM, `localStorage`
- [CoinGecko API](https://www.coingecko.com/en/api) — dados de mercado das criptomoedas

## 🚀 Como rodar localmente

Por ser um projeto sem build step, basta:

1. Clonar o repositório
   ```bash
   git clone https://github.com/NathanMenddes/hunter-x-coin.git
   ```
2. Abrir a pasta do projeto
   ```bash
   cd hunter-x-coin
   ```
3. Abrir o arquivo `index.html` no navegador (ou usar uma extensão tipo Live Server, no VS Code, para recarregamento automático)

Nenhuma instalação de dependências é necessária — o projeto não usa nenhum framework ou bundler.

## 📚 O que aprendi construindo este projeto

- Consumo de APIs REST com `fetch` e `async/await`
- Tratamento de erros e limites de requisição (rate limiting)
- Manipulação dinâmica do DOM para renderizar dados
- Persistência de dados no navegador com `localStorage`
- CSS Grid responsivo e boas práticas de layout
- Controle de versão com Git e publicação com GitHub Pages

## 👤 Autor

**Nathan Mendes**
[GitHub](https://github.com/NathanMenddes)

## 📄 Licença

Este projeto é livre para fins de estudo e aprendizado.
