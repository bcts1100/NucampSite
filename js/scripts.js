console.log(`Javascript connected!`);

const carousel = new bootstrap.Carousel(`#homeCarousel`,{
    interval:2000 ,
    pause: false
})

//when pause button clicked pause carousel
const carouselPause = document.getElementById(`carouselPause`);
carouselPause.addEventListener(`click`, function(){
    console.log(`pausing the carousel`);
    carousel.pause();
})
const carouselPlay = document.getElementById(`carouselPlay`);
carouselPlay.addEventListener(`click`, function(){
    console.log(`cycle the carousel`);
    carousel.cycle();
})