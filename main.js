const inputRange = document.querySelector('#range')
const img360 = document.querySelector('#main img')
const prevButton = document.querySelector('#prev-img')
const nextButton = document.querySelector('#next-img')

function display360() {
  let rangeValue = inputRange.value
  img360.src = `products/chair/${rangeValue}.jpg`
}

function prevImg() {
  let rangeValue = inputRange.value

  if (rangeValue <= 1) return 

  img360.src = `products/chair/${--rangeValue}.jpg`
  inputRange.value = --inputRange.value
}
function nextImg() {
  let rangeValue = inputRange.value

  if (rangeValue >= 40) return 

  img360.src = `products/chair/${++rangeValue}.jpg`
  inputRange.value = ++inputRange.value
}

inputRange.addEventListener('input', () => {
  display360()
})
inputRange.addEventListener('mouseup', (e) => {
  inputRange.value = e.target.value
})
prevButton.addEventListener('click', prevImg)
nextButton.addEventListener('click', nextImg)