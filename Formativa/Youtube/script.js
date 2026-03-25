function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('fechada');
}

const filtros = document.querySelectorAll('.filtro');
filtros.forEach(filtro => {
    filtro.addEventListener('click', () => {
        filtros.forEach(f => f.classList.remove('ativo'));
        filtro.classList.add('ativo');
    });
});

const videos = [
    {
        titulo: "Como o JavaScript funciona por baixo dos panos",
        canal: "Código Simples",
        visualizacoes: "1,2M",
        tempo: "3 dias atrás",
        duracao: "18:42",
        thumb: "https://picsum.photos/seed/js1/480/270",
        cor: "#e74c3c"
    },
    {
        titulo: "Construindo uma API REST do zero com Node.js e Express",
        canal: "Dev Full Stack",
        visualizacoes: "890K",
        tempo: "1 semana atrás",
        duracao: "32:15",
        thumb: "https://picsum.photos/seed/node2/480/270",
        cor: "#3498db"
    },
    {
        titulo: "CSS Grid vs Flexbox — Quando usar cada um?",
        canal: "Frontend Masters BR",
        visualizacoes: "450K",
        tempo: "5 dias atrás",
        duracao: "12:08",
        thumb: "https://picsum.photos/seed/css3/480/270",
        cor: "#9b59b6"
    },
    {
        titulo: "React 19 — Tudo que mudou na nova versão",
        canal: "Rocketseat",
        visualizacoes: "2,3M",
        tempo: "2 semanas atrás",
        duracao: "24:55",
        thumb: "https://picsum.photos/seed/react4/480/270",
        cor: "#1abc9c"
    },
    {
        titulo: "Inteligência Artificial em 2025 — O que esperar",
        canal: "Tech Insights",
        visualizacoes: "5,1M",
        tempo: "1 dia atrás",
        duracao: "41:30",
        thumb: "https://picsum.photos/seed/ai5/480/270",
        cor: "#f39c12"
    },
    {
        titulo: "Python para iniciantes — Curso completo GRÁTIS",
        canal: "Programador BR",
        visualizacoes: "3,7M",
        tempo: "1 mês atrás",
        duracao: "2:14:08",
        thumb: "https://picsum.photos/seed/py6/480/270",
        cor: "#27ae60"
    },
    {
        titulo: "Docker na prática — Do zero ao deploy",
        canal: "DevOps Academy",
        visualizacoes: "670K",
        tempo: "4 dias atrás",
        duracao: "55:20",
        thumb: "https://picsum.photos/seed/docker7/480/270",
        cor: "#2980b9"
    },
    {
        titulo: "TypeScript avançado — Generics, Decorators e mais",
        canal: "Código Limpo",
        visualizacoes: "320K",
        tempo: "2 dias atrás",
        duracao: "38:47",
        thumb: "https://picsum.photos/seed/ts8/480/270",
        cor: "#8e44ad"
    },
    {
        titulo: "Como ganhar dinheiro como desenvolvedor freelancer",
        canal: "Dev Carreira",
        visualizacoes: "1,8M",
        tempo: "3 semanas atrás",
        duracao: "22:10",
        thumb: "https://picsum.photos/seed/free9/480/270",
        cor: "#c0392b"
    },
    {
        titulo: "Linux para desenvolvedores — Comandos essenciais",
        canal: "Terminal Pro",
        visualizacoes: "540K",
        tempo: "6 dias atrás",
        duracao: "29:33",
        thumb: "https://picsum.photos/seed/linux10/480/270",
        cor: "#d35400"
    },
    {
        titulo: "Animações CSS incríveis sem JavaScript",
        canal: "UI Lab Brasil",
        visualizacoes: "990K",
        tempo: "1 semana atrás",
        duracao: "16:44",
        thumb: "https://picsum.photos/seed/anim11/480/270",
        cor: "#16a085"
    },
    {
        titulo: "Git e GitHub — Guia definitivo para times",
        canal: "Open Source BR",
        visualizacoes: "2,1M",
        tempo: "2 meses atrás",
        duracao: "47:22",
        thumb: "https://picsum.photos/seed/git12/480/270",
        cor: "#7f8c8d"
    }
];

function getIniciais(nome) {
    return nome.split(' ').map(p => p[0]).join('').slice(0, 2).toUpperCase();
}

function renderizarVideos() {
    const grid = document.getElementById('grid-videos');
    grid.innerHTML = '';

    videos.forEach(video => {
        const card = document.createElement('div');
        card.className = 'card-video';
        card.innerHTML = `
            <div class="thumbnail-wrapper">
                <img src="${video.thumb}" alt="${video.titulo}" loading="lazy">
                <span class="duracao">${video.duracao}</span>
            </div>
            <div class="card-info">
                <div class="canal-avatar" style="background-color: ${video.cor};">
                    ${getIniciais(video.canal)}
                </div>
                <div class="card-texto">
                    <div class="card-titulo">${video.titulo}</div>
                    <div class="card-canal">${video.canal}</div>
                    <div class="card-meta">${video.visualizacoes} visualizações • ${video.tempo}</div>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

renderizarVideos();