const colors = ['green', 'blue', 'rgba(133, 122, 200)', '#f15025'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
  //Get random number between 0 - 3
  const randomButton = getRandomNumber();
  console.log(randomButton)
  document.body.style.backgroundColor = colors[randomButton];
  color.textContent = colors[randomButton];
});

function getRandomNumber(){
  return Math.floor (Math.random() * colors.length);
}