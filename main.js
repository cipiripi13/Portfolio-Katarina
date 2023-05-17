// Dark theme js 
let toggle = document.getElementById('toggle');
let box = document.querySelector('.box');
console.log(box);

toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');

})

