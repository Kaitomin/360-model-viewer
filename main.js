const inputRange = document.querySelector('#range')
const main = document.querySelector('#main')

function work() {
  let rangeValue = inputRange.value
  main.innerHTML = `<img src="products/chair/${rangeValue}.jpg" />`
}

inputRange.addEventListener('input', () => {
  work()
})