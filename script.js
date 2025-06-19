// Create binary code animation for profile picture
function createBinaryAnimation() {
    const binaryContainer = document.getElementById('binaryBackground');
    const binaryStrings = [];

    for (let i = 0; i < 15; i++) {
        const binaryRow = document.createElement('div');
        binaryRow.className = 'binary-text';

        let binaryString = '';
        for (let j = 0; j < 25; j++) {
            binaryString += Math.random() > 0.5 ? '1' : '0';
        }

        binaryRow.textContent = binaryString;
        binaryRow.style.top = (i * 12) + 'px';
        binaryRow.style.left = '-50px';
        binaryRow.style.animationDelay = Math.random() * 2 + 's';

        binaryContainer.appendChild(binaryRow);
        binaryStrings.push(binaryRow);
    }

    setInterval(() => {
        binaryStrings.forEach(row => {
            let newBinary = '';
            for (let j = 0; j < 25; j++) {
                newBinary += Math.random() > 0.5 ? '1' : '0';
            }
            row.textContent = newBinary;
        });
    }, 1000);
}

function createParticles() {
    const particlesContainer = document.getElementById('particles');
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        particlesContainer.appendChild(particle);
    }
}

window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('scrolled', window.scrollY > 100);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

function downloadCV() {
    const cvContent = `...`; // CV content string, unchanged
    const blob = new Blob([cvContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Suryanath_Tripathy_CV.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
}

document.addEventListener('DOMContentLoaded', function () {
    createBinaryAnimation();
    createParticles();

    const downloadButtons = document.querySelectorAll('#downloadCV, #downloadCV2');
    downloadButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            downloadCV();
        });
    });

    document.getElementById('contactForm').addEventListener('submit', function (e) {
        e.preventDefault();
        const formData = new FormData(this);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message')
        };
        // Optionally handle data
        document.getElementById('successMessage').classList.add('show');
    });
});
