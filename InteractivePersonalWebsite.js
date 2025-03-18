//Photo Carousel 
const track = document.querySelector(".carousel__track");
const slides = Array.from(track.children);
console.log(track)


//Left & Right Buttons
const nextButton = document.querySelector(".carousel__button--right");
const previousButton = document.querySelector(".carousel__button--left");

//Nav Dots
const navDots = document.querySelector(".carousel__nav");
const dots = Array.from(navDots.children);


//slides
const slideSize = slides[0].getBoundingClientRect();
const slideWidth = slideSize.width;


const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + "px";
}

slides.forEach(setSlidePosition);


const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
}

const hideShowArrows = (slides, previousButton, nextButton, targetIndex) => {
    if (targetIndex === 0) {
        previousButton.classList.add('is-hidden');
        nextButton.classList.remove('is-hidden');
    } else if (targetIndex === slides.length -1) {
        previousButton.classList.remove('is-hidden');
        nextButton.classList.add('is-hidden')
    } else {
        previousButton.classList.remove('is-hidden');
        nextButton.classList.remove('is-hidden');
    }
}

//Left Button - moves slide to the left
previousButton.addEventListener('click' , e => {
    const currentSlide = track.querySelector('.current-slide');
    const previousSlide = currentSlide.previousElementSibling;
    const currentDot = navDots.querySelector('.current-slide');
    const previousDot = currentDot.previousElementSibling;
    const previousIndex = slides.findIndex(slide => slide === previousSlide);

    moveToSlide(track, currentSlide, previousSlide);
    updateDots(currentDot, previousDot);
    hideShowArrows (slides, previousButton, nextButton, previousIndex);
})


//Right Button - moves slide to the right
nextButton.addEventListener('click' , e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = navDots.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);


    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
    hideShowArrows (slides, previousButton, nextButton, nextIndex);
})


//dots
navDots.addEventListener('click', e => {
    //what indiccator was clicked on
    const targetDot = e.target.closest('button');
    //console.log(e.target);

    if(!targetDot) return;
    const currentSlide = track.querySelector('.current-Slide');
    const currentDot = navDots.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    hideShowArrows (slides, previousButton, nextButton, targetIndex);
   
})

//Contact form

const form = document.getElementById("contact");
const messageDiv = document.getElementById("form-message");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        messageDiv.innerHTML ="Please complete all fields";
        messageDiv.style.color = "red";
    } else if (name === "") {
        messageDiv.innerHTML = "Please enter your name";
        messageDiv.style.color = "red";
    } else if (email === "") {
        messageDiv.innerHTML = "Please enter your email";
        messageDiv.style.color = "red";
    } else if (message === "") {
        messageDiv.innerHTML = "Please enter a message";
        messageDiv.style.color = "red";    
    } else {
        messageDiv.innerHTML = `Thank you, ${name} for your message!`;
        messageDiv.style.color = "green";   
    } 

})



// Back toTop Button
const toTop =() => window.scrollTo({top: 0, behavior: "smooth"});