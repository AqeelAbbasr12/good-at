
function initializeCarousel(carouselId, minPerSlide) {
    let items = document.querySelectorAll(`#${carouselId} .carousel-item`);
    items.forEach((el) => {
      let next = el.nextElementSibling;
      for (let i = 1; i < minPerSlide; i++) {
        if (!next) {
            next = items[0];
        }
        let cloneChild = next.cloneNode(true);
        el.appendChild(cloneChild.children[0]);
        next = next.nextElementSibling;
      }
    });
let carouselElement = document.querySelector(`#${carouselId}`);
    new bootstrap.Carousel(carouselElement, { 
        interval: 5000,
        wrap: true
    });
}
initializeCarousel('serviceCarousel', 3);
initializeCarousel('caringCarousel', 3);
initializeCarousel('artisticCarousel', 3);
initializeCarousel('cookingCarousel', 3);
initializeCarousel('avialableHomeWorkCarousel', 3);
initializeCarousel('availableCaringCarousel', 3);
initializeCarousel('availableArtisticCarousel', 3);
initializeCarousel('availableCookingCarousel', 3);
initializeCarousel('professionalCarousel', 4);
initializeCarousel('professionalCaringCarousel', 4);
initializeCarousel('professionalArtisticCarousel', 4);
initializeCarousel('professionalCookingCarousel', 4);
initializeCarousel('customerCarousel', 1);
