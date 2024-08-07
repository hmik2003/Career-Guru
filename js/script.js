function getStarted() {
    window.location.href = "#career-guidance";
}

document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.getElementById('universityCarousel');
    const carouselInner = carousel.querySelector('.university-carousel-inner');
    const cards = Array.from(carouselInner.children);

    // Clone the cards to create a seamless loop
    cards.forEach(card => {
        const clone = card.cloneNode(true);
        carouselInner.appendChild(clone);
    });

    // Calculate the total width for animation
    const totalWidth = carouselInner.scrollWidth / 2; // Half of the width to ensure seamless loop
    carouselInner.style.width = `${totalWidth}px`;
});
