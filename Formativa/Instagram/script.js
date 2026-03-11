const storiesContainer = document.querySelector(".stories-container");
const btnEsquerda = document.getElementById("esquerda");
const btnDireita = document.getElementById("direita");

const STORIES_PER_PAGE = 6;
let currentPage = 0;

const stories = Array.from(document.querySelectorAll(".story"));
const totalPages = Math.ceil(stories.length / STORIES_PER_PAGE);

function updateStories() {
  const start = currentPage * STORIES_PER_PAGE;
  const end = start + STORIES_PER_PAGE;

  stories.forEach((story, index) => {
    if (index >= start && index < end) {
      story.classList.remove("desativado");
      story.classList.add("ativo");
    } else {
      story.classList.remove("ativo");
      story.classList.add("desativado");
    }
  });

  btnEsquerda.style.opacity = currentPage === 0 ? "0" : "1";
  btnEsquerda.style.pointerEvents = currentPage === 0 ? "none" : "auto";
  btnDireita.style.opacity = currentPage >= totalPages - 1 ? "0" : "1";
  btnDireita.style.pointerEvents =
    currentPage >= totalPages - 1 ? "none" : "auto";
}

btnDireita.addEventListener("click", () => {
  if (currentPage < totalPages - 1) {
    currentPage++;
    updateStories();
  }
});

btnEsquerda.addEventListener("click", () => {
  if (currentPage > 0) {
    currentPage--;
    updateStories();
  }
});

updateStories();

function seguir(botao){
    if(botao.textContent === "Seguir"){
        botao.textContent = "Seguindo";
    } else {
        botao.textContent = "Seguir";
    }
}

document.querySelectorAll('.post-actions').forEach(actions => {
  const btns = actions.querySelectorAll('.post-action-btn');

  const curtirBtn = btns[0];
  curtirBtn.addEventListener('click', () => {
    curtirBtn.classList.toggle('curtido');
    const icon = curtirBtn.querySelector('i');
    if (curtirBtn.classList.contains('curtido')) {
      icon.classList.replace('fa-regular', 'fa-solid');
    } else {
      icon.classList.replace('fa-solid', 'fa-regular');
    }
  });

  const salvarBtn = actions.querySelector('.post-actions-right .post-action-btn');
  salvarBtn.addEventListener('click', () => {
    salvarBtn.classList.toggle('salvo');
    const icon = salvarBtn.querySelector('i');
    if (salvarBtn.classList.contains('salvo')) {
      icon.classList.replace('fa-regular', 'fa-solid');
    } else {
      icon.classList.replace('fa-solid', 'fa-regular');
    }
  });
});

const carrosseis = {};

function moverCarrossel(id, direcao) {
  if (!carrosseis[id]) {
    const track = document.getElementById('track' + id.replace('carrossel', ''));
    carrosseis[id] = { index: 0, total: track.children.length, trackId: 'track' + id.replace('carrossel', ''), dotsId: 'dots' + id.replace('carrossel', '') };
  }
  const c = carrosseis[id];
  c.index = Math.max(0, Math.min(c.index + direcao, c.total - 1));

  document.getElementById(c.trackId).style.transform = `translateX(-${c.index * 100}%)`;

  const dots = document.getElementById(c.dotsId).children;
  for (let i = 0; i < dots.length; i++) dots[i].classList.toggle('ativo', i === c.index);

  const carEl = document.getElementById(id);
  carEl.querySelector('.prev').style.display = c.index === 0 ? 'none' : 'flex';
  carEl.querySelector('.next').style.display = c.index === c.total - 1 ? 'none' : 'flex';
}

document.querySelectorAll('.carrossel').forEach(c => {
  c.querySelector('.prev').style.display = 'none';
});