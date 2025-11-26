// Smooth scroll for navbar links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// PROJECT CAROUSEL SCRIPT
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const slide = document.querySelector('.carousel-slide');
let index = 0;

const projects = [
    {
        img: '/mnt/data/df2221e9-3bd7-4cc7-a646-c13924f67b69.png',
        number: '07',
        title: 'E-commerce RFM Customer Segmentation',
        desc: 'Implemented the RFM framework in Python to segment e-commerce customers.'
    },
    {
        img: '/mnt/data/ee0e3376-7f4b-4581-a1d6-1688b34450f5.png',
        number: '08',
        title: 'Image Search Engine',
        desc: 'Search, edit and customize images using API-powered tools.'
    }
];

function updateCarousel() {
    const p = projects[index];

    slide.innerHTML = `
        <div class="project-item">
            <img src="${p.img}" class="project-img">
            <div class="project-info">
                <h3>${p.number}</h3>
                <h2>${p.title}</h2>
                <p>${p.desc}</p>
            </div>
        </div>
    `;
}

nextBtn.addEventListener('click', () => {
    index = (index + 1) % projects.length;
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    index = (index - 1 + projects.length) % projects.length;
    updateCarousel();
});

// Initialize carousel
updateCarousel();