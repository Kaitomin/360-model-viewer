
// DOM elements
const inputRange = document.querySelector('#range')
const img360 = document.querySelector('#main img')
const prevButton = document.querySelector('#prev-img')
const nextButton = document.querySelector('#next-img')

const currentProductImg = []
let productsList = ''
let currentActiveProduct = []

const display360 = () => {
  let rangeValue = inputRange.value
  img360.src = `${currentActiveProduct.url}/${rangeValue}.jpg`
}

const prevImg = () => {
  let rangeValue = inputRange.value

  if (rangeValue <= 1) return 

  img360.src = `${currentActiveProduct.url}/${--rangeValue}.jpg`
  inputRange.value = --inputRange.value
}

const nextImg = () => {
  let rangeValue = inputRange.value

  if (rangeValue >= 40) return 

  img360.src = `${currentActiveProduct.url}/${++rangeValue}.jpg`
  inputRange.value = ++inputRange.value
}

// Preload all images of a product 
const preloadCurrentProductImg = () => {
  const activeProduct = document.querySelector('.product.active')

  currentActiveProduct = fetchCurrentProduct(activeProduct.children[0].dataset.name)
  currentProductImg.length = 0

  for (let i = 1; i <= currentActiveProduct.length; i++) {
    let img = new Image()
    img.src = `${currentActiveProduct.url}/${i}.jpg`
    currentProductImg.push(img)
  }

  img360.src = `${currentActiveProduct.url}/1.jpg`
}

// Get all products
const fetchProducts = () => {
  fetch('./data/products.json')
    .then(res => res.json())
    .then(data => {
      productsList = data.products
      preloadCurrentProductImg()
    })
}

// Get current active product
const fetchCurrentProduct = (name) => {
  return productsList.filter(p => p.title === name)[0]
}

const setCurrentProduct = (e) => {
  const products = document.querySelectorAll('.product')

  Array.from(products).forEach(p => {
    switch(e.target.tagName) {
      case 'DIV':
        if (e.target.children[0].dataset.name === p.children[0].dataset.name ) {
          p.classList.add('active')
        } else {
          p.classList.remove('active')
        }
        break;
      
      case 'IMG':
        if (e.target.dataset.name === p.children[0].dataset.name) {
          p.classList.add('active')
        } else {
          p.classList.remove('active')
        }
        break;
    }
  })

  preloadCurrentProductImg()
  img360.src = `${currentActiveProduct.url}/1.jpg`
}

window.addEventListener('DOMContentLoaded', () => {
  const productContainer = document.querySelector('.products-container')

  fetchProducts()

  inputRange.addEventListener('input', display360)
  inputRange.addEventListener('mouseup', e => inputRange.value = e.target.value)
  prevButton.addEventListener('click', prevImg)
  nextButton.addEventListener('click', nextImg)
  productContainer.addEventListener('click', setCurrentProduct)
  
})

