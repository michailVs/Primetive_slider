const sliderImg = document.querySelector('.slider__img')
const forwardBtn = document.querySelector('.slider__forward')
const backBtn = document.querySelector('.slider__back')

let leftCount = -2400
function forwardImg() {
    if (leftCount > -1) {
        leftCount = -2400
        sliderImg.style.left = `${leftCount}px`
    } else {
        leftCount += 800
        sliderImg.style.left = `${leftCount}px`
    }
}
function backImg() {
    if (leftCount < -2399) {
        leftCount = 0
        sliderImg.style.left = `${leftCount}px`
    } else {
        leftCount -= 800
        sliderImg.style.left = `${leftCount}px`
    }
}
forwardBtn.addEventListener('click', forwardImg)
backBtn.addEventListener('click', backImg)