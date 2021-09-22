const slides = document.querySelectorAll('.slide');

function clearActiveClasses() {
    for (const slide of slides) {
        slide.classList.remove('active');
    }
}

for (const slide of slides) {
    slide.addEventListener('click', (event) => {
        clearActiveClasses();
        slide.classList.add('active');
    });
}