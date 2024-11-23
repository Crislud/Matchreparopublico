function contatarPrestador() {
  alert("Função de contato com o prestador não implementada.");
}

function renderStars(score) {
  const starsElement = document.getElementById("stars");
  starsElement.innerHTML = "";
  const fullStars = Math.floor(score);
  const halfStar = score % 1 >= 0.5;

  for (let i = 0; i < fullStars; i++) {
    starsElement.innerHTML += "<span>&#9733;</span>"; // Estrela cheia
  }

  if (halfStar) {
    starsElement.innerHTML += "<span>&#9734;</span>"; // Estrela meia
  }

  for (let i = fullStars + (halfStar ? 1 : 0); i < 5; i++) {
    starsElement.innerHTML += "<span>&#9734;</span>"; // Estrela vazia
  }
}

window.onload = function () {
  const score = parseFloat(document.getElementById("score").textContent);
  renderStars(score);
};
function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  navLinks.classList.toggle('active');
}

