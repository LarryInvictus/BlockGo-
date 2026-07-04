const games = [
  {
    title: "Battle Arena",
    players: "12.4K Playing",
    image: "https://via.placeholder.com/300x140"
  },
  {
    title: "Obby Escape",
    players: "8.9K Playing",
    image: "https://via.placeholder.com/300x140"
  },
  {
    title: "Zombie Survival",
    players: "15.2K Playing",
    image: "https://via.placeholder.com/300x140"
  },
  {
    title: "Car Simulator",
    players: "6.1K Playing",
    image: "https://via.placeholder.com/300x140"
  }
];

const gamesGrid = document.getElementById("gamesGrid");
const search = document.getElementById("search");

function renderGames(list) {
  gamesGrid.innerHTML = "";

  list.forEach(game => {
    const card = document.createElement("div");
    card.className = "game-card";

    card.innerHTML = `
      <img src="${game.image}" alt="${game.title}">
      <div class="info">
        <h3>${game.title}</h3>
        <p>${game.players}</p>
      </div>
    `;

    gamesGrid.appendChild(card);
  });
}

search.addEventListener("input", (e) => {
  const filtered = games.filter(game =>
    game.title.toLowerCase().includes(e.target.value.toLowerCase())
  );
  renderGames(filtered);
});

renderGames(games);
