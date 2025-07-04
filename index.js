// Nav toggle - mantém a navegação móvel
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    });
});

// Counter - contador de visitas
// No seu JavaScript
const counterElement = document.querySelector('.count');

function updateCounter() {
    fetch('https://visitor-badge.laobi.icu/badge?page_id=ruanf7.github.io')
        .then(response => response.text())
        .then(text => {
            // Extrai o número do texto retornado
            const count = text.match(/Visitors\s*:\s*(\d+)/i)[1];
            counterElement.textContent = count;
        })
        .catch(() => {
            counterElement.textContent = '0';
        });
}

// Tech Carousel - versão otimizada sem duplicação
function createTechCarousel() {
    const techGroups = [
        {
            title: "Frontend",
            icons: [
                "html.png",
                "css-3.png", 
                "icons8-javascript-48.png",
                "icons8-typescript-48.png",
                "react.png",
                "icons8-nextjs-48.png",
                "icons8-tailwind-css-48.png"
            ]
        },
        {
            title: "Backend",
            icons: [
                "nest.png",
                "python.png",
                "icons8-docker-48.png"
            ]
        },
        {
            title: "Databases",
            icons: [
                "mysqlworkbench_93532.png",
                "postgre.png",
                "icons8-prisma-orm-50.png"
            ]
        },
        {
            title: "Testing",
            icons: [
                "icons8-jest-24.png"
            ]
        }
    ];

    const carouselContainer = document.createElement('div');
    carouselContainer.className = 'tech-carousel';
    
    const carouselInner = document.createElement('div');
    carouselInner.className = 'tech-carousel-container';

    // Cria apenas uma cópia de cada grupo
    techGroups.forEach(group => {
        const groupDiv = document.createElement('div');
        groupDiv.className = 'tech-group';
        
        const title = document.createElement('h4');
        title.textContent = group.title;
        groupDiv.appendChild(title);
        
        const iconsDiv = document.createElement('div');
        iconsDiv.className = 'tech-icons';
        
        group.icons.forEach(icon => {
            const img = document.createElement('img');
            img.src = `./images/logos/${icon}`;
            img.alt = icon.replace('.png', '');
            img.loading = "lazy";
            iconsDiv.appendChild(img);
        });
        
        groupDiv.appendChild(iconsDiv);
        carouselInner.appendChild(groupDiv);
    });

    // Clona todos os grupos para o efeito de loop
    const clonedGroups = carouselInner.cloneNode(true);
    carouselInner.appendChild(clonedGroups);

    carouselContainer.appendChild(carouselInner);
    
    // Insere antes do about-me-body (posição original)
    const aboutMe = document.querySelector('.about-me');
    const aboutMeBody = document.querySelector('.about-me-body');
    if (aboutMe && aboutMeBody) {
        aboutMe.insertBefore(carouselContainer, aboutMeBody);
    }
}

// Inicializa tudo quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    updateCounter();
    createTechCarousel();
});