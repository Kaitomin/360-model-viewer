
// DOM elements
const inputRange = document.querySelector('#range')
const img360 = document.querySelector('#main img')
const prevButton = document.querySelector('#prev-img')
const nextButton = document.querySelector('#next-img')

const currentProductImg = []
let productsList = ''

const display360 = () => {
  let rangeValue = inputRange.value
  img360.src = `img/products/chair/${rangeValue}.jpg`
}

const prevImg = () => {
  let rangeValue = inputRange.value

  if (rangeValue <= 1) return 

  img360.src = `img/products/chair/${--rangeValue}.jpg`
  inputRange.value = --inputRange.value
}

const nextImg = () => {
  let rangeValue = inputRange.value

  if (rangeValue >= 40) return 

  img360.src = `img/products/chair/${++rangeValue}.jpg`
  inputRange.value = ++inputRange.value
}

// Preload all images of a product 
const preloadCurrentProductImg = () => {
  for (let i = 1; i <= 40; i++) {
    let img = new Image()
    img.src = `img/products/chair/${i}.jpg`
    currentProductImg.push(img)
  }
}

const fetchProducts = (name) => {
  fetch('./data/products.json')
    .then(res => res.json())
    .then(data => productsList = data.products)
}

window.addEventListener('load', () => {
  const products = document.querySelectorAll('.products-container div')

  inputRange.addEventListener('input', display360)
  inputRange.addEventListener('mouseup', e => inputRange.value = e.target.value)
  prevButton.addEventListener('click', prevImg)
  nextButton.addEventListener('click', nextImg)

  console.log(products)
  Array.from(products).forEach(p => p.addEventListener('click', (e) => {
        
  }))
  
  fetchProducts()
  preloadCurrentProductImg()
})

