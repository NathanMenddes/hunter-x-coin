let todasAsMoedas = [];
let primeiraCarga = true;
let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

function atualizarTela(lista) {
  renderizarMoedas(lista, 'crypto-container');
  const moedasFavoritas = todasAsMoedas.filter(moeda => favoritos.includes(moeda.id));
  renderizarMoedas(moedasFavoritas, 'lista-favoritos');
}

function renderizarMoedas(lista, idContainer) {
  const container = document.getElementById(idContainer);
  container.innerHTML = "";

  lista.forEach((moeda) => {
    const precoFormatado = moeda.current_price.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
    const corClasse =
      moeda.price_change_percentage_24h >= 0 ? "positivo" : "negativo";
    const variacaoFormatada = moeda.price_change_percentage_24h.toFixed(2);
    const isFavorito = favoritos.includes(moeda.id) ? "favoritado" : "";

    container.innerHTML += `<div class="card">
      <button class="favorito-btn ${isFavorito}" data-id="${moeda.id}">‪‪❤︎‬</button>
      <img src= "${moeda.image}" alt= "logo">
      <h2>${moeda.name}</h2>
      <p>${precoFormatado}</p>
      <p class="${corClasse}">${variacaoFormatada}%</p>

    </div>`;

  });
}

async function buscarMoedas() {
  const container = document.getElementById("crypto-container");
  if (primeiraCarga) {
    container.innerHTML = "<p>Carregando moedas...</p>";
  }

  try {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,solana,cardano,dogecoin",
    );
    const data = await response.json();
    todasAsMoedas = data;
    atualizarTela(todasAsMoedas);
    primeiraCarga = false;
  } catch (erro) {
    container.innerHTML =
      "<p>Não foi possível carregar os dados. Tente novamente em alguns instantes.</p>";
    console.error("Deu erro:", erro);
  }
}

const container = document.getElementById("crypto-container");
container.addEventListener("click", (evento) => {
  if (!evento.target.classList.contains("favorito-btn")) {
    return;
  }

  const idMoeda = evento.target.dataset.id;

  if (favoritos.includes(idMoeda)) {
    favoritos = favoritos.filter((id) => id !== idMoeda);
  } else {
    favoritos.push(idMoeda);
  }

  localStorage.setItem("favoritos", JSON.stringify(favoritos));
  atualizarTela(todasAsMoedas);
});

const inputBusca = document.getElementById("busca");
inputBusca.addEventListener("input", () => {
  let moedasFiltradas = todasAsMoedas.filter((moeda) =>
    moeda.name.toLowerCase().includes(inputBusca.value.toLowerCase()),
  );
  renderizarMoedas(moedasFiltradas,'crypto-container');
});

buscarMoedas();
setInterval(buscarMoedas, 60000);
