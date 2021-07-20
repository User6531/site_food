function slider({
    sliderSelector,
    sliderWrapperSelector,
    nextArrow,
    prevArrow,
    slidesSelector,
    sliderBodySelector,
    totalSlidesSelector,
    currentSlideSelector
}) {

    const currentSlideNumber = document.querySelector(currentSlideSelector),
        totalSlides = document.querySelector(totalSlidesSelector),
        slides = document.querySelectorAll(slidesSelector),
        arrowNext = document.querySelector(nextArrow),
        arrowPrev = document.querySelector(prevArrow),
        sliderWrapper = document.querySelector(sliderWrapperSelector),
        sliderWrapperWidth = sliderWrapper.getBoundingClientRect().width,
        sliderBody = document.querySelector(sliderBodySelector),
        slider = document.querySelector(sliderSelector),
        dotsArr = [];

    let slideIndex = 1,
        offset = 0;

    function setSliderCounter() {
        if (slides.length < 10) {
            totalSlides.innerHTML = `0${slides.length}`;
            currentSlideNumber.innerHTML = `0${slideIndex}`;
        } else {
            totalSlides.innerHTML = slides.length;
            currentSlideNumber.innerHTML = slideIndex;
        }
    }
    setSliderCounter();

    function activeDots() {
        dotsArr.forEach(item => {
            item.style.cssText = `
                    opacity: .5;
                    transform: scale(1);
                `;
        });
        dotsArr[slideIndex - 1].style.cssText = `
            opacity: 1;
            transform: scale(1.05);
        `;
    }

    sliderBody.style.width = slides.length * 100 + `%`;
    sliderBody.style.display = 'flex';
    sliderBody.style.transition = 'all 0.5s ease';

    sliderWrapper.style.overflow = 'hidden';

    slides.forEach(slide => {
        slide.style.width = sliderWrapperWidth + 'px';
    });

    arrowNext.addEventListener('click', () => {

        if (offset == sliderWrapperWidth * (slides.length - 1)) {
            offset = 0;
            slideIndex = 0;
        } else {
            offset = offset + sliderWrapperWidth;
        }

        sliderBody.style.transform = `translateX(-${offset}px)`;

        slideIndex++;
        setSliderCounter();

        activeDots();
    });

    arrowPrev.addEventListener('click', () => {

        if (offset == 0) {
            offset = sliderWrapperWidth * (slides.length - 1);
            slideIndex = slides.length + 1;
        } else {
            offset = offset - sliderWrapperWidth;
        }

        sliderBody.style.transform = `translateX(-${offset}px)`;

        slideIndex--;
        setSliderCounter();

        activeDots();
    });

    const dots = document.createElement('ol');

    dots.classList.add('carousel-indicators');
    slider.append(dots);

    slides.forEach((slide, i) => {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.classList.add('dot');
        dots.append(dot);
        dotsArr.push(dot);
        activeDots();
    });

    dotsArr.forEach(dot => {
        dot.addEventListener('click', e => {
            slideIndex = e.target.getAttribute('data-slide-to');

            offset = sliderWrapperWidth * (slideIndex - 1);
            sliderBody.style.transform = `translateX(-${offset}px)`;

            activeDots();

            setSliderCounter();
        });
    });

    // if (slides.length < 10)  {
    //     totalSlides.innerHTML = `0${slides.length}`;
    // } else {
    //     totalSlides.innerHTML = slides.length;
    // }

    // if (slideIndex < 10) {
    //     currentSlideNumber.innerHTML = `0${slideIndex}`;
    // } else {
    //     currentSlideNumber.innerHTML = slideIndex;
    // }

    // function hideSlides() {
    //     slides.forEach(slide=>{
    //         slide.style.display = 'none';
    //     });
    // }
    // hideSlides();

    // function showSlide(slideNum) {
    //     if (slideNum > slides.length) {
    //         slideIndex = 1;
    //     }
    //     if (slideNum < 1) {
    //         slideIndex = slides.length;
    //     }

    //     hideSlides();
    //     slides[slideIndex-1].style.display = 'block';

    //     if (slideIndex < 10) {
    //         currentSlideNumber.innerHTML = `0${slideIndex}`;
    //     } else {
    //         currentSlideNumber.innerHTML = slideIndex;
    //     }
    // }
    // showSlide();

    // function changeSlide(n) {
    //     showSlide(slideIndex += n);
    // }

    // arrowNext.addEventListener('click', ()=>{
    //     changeSlide(1);
    // });

    // arrowPrev.addEventListener('click', ()=>{
    //     changeSlide(-1);
    // });

}

export default slider;