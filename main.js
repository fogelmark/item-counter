const plus = document.querySelectorAll('.plus')
const minus = document.querySelectorAll('.minus')
const number = document.querySelectorAll('input');

plus.forEach((button, index) => {
  button.addEventListener('click', () => {
    number[index].value++
  })
})

minus.forEach((button, index) => {
  button.addEventListener('click', () => {
    number[index].value--
  })
})


