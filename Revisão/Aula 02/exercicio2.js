const nomeInput = document.getElementById("nome");
const cargoInput = document.getElementById("cargo");
const corInput = document.getElementById("color");
const nomeCard = document.getElementById("nome-card");
const cargoCard = document.getElementById("cargo-card");
const card = document.getElementById("card");

nomeInput.addEventListener("input", () => {
  nomeCard.innerText = nomeInput.value || "Seu Nome";
});

cargoInput.addEventListener("input", () => {
  cargoCard.innerText = cargoInput.value || "Seu Cargo";
});

corInput.addEventListener("input", () => {
  card.style.setProperty("--card-color", corInput.value);
});
