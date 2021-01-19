let selectedColor = 'black';

window.onload = function () {
  const pixelBoardDiv = document.getElementById('pixel-board');
  let n = 5;

  /*renderizando quadrados*/
  for(let index = 0; index < n; index += 1 ){
    const table =  document.createElement('div');
    table.className = "table";
    pixelBoardDiv.appendChild(table);
    
    for(let i = 0; i < n; i += 1){
      const pixel =  document.createElement('div');
      pixel.className = "pixel";
      table.appendChild(pixel);
    }
  }

/* add cor */
  document.getElementsByClassName('color')[0].style.backgroundColor = 'black';
  document.getElementsByClassName('color')[1].style.backgroundColor = 'red';
  document.getElementsByClassName('color')[2].style.backgroundColor = 'blue';
  document.getElementsByClassName('color')[3].style.backgroundColor = 'green';

/* função que muda o selecte da class */
  function toChangeSelect() {
    const oldSelected = document.querySelector('.selected');
    const newSelected = event.target;

    oldSelected.classList.remove('selected');
    newSelected.classList.add('selected');

    selectedColor = newSelected.style.backgroundColor;
  }

/* clicando */
  const listen = document.querySelector('#color-palette');
  listen.addEventListener('click', toChangeSelect);

/* colorindo */
  function handlePixel(event) {
    const selectedPixelDiv = event.target;
    selectedPixelDiv.style.backgroundColor = selectedColor;
  }

  pixelBoardDiv.addEventListener('click', handlePixel);

/* Button reset color */
  const buttonReset = document.querySelector('#clear-board');
  buttonReset.addEventListener('click', function () {
    const colorPixels = document.querySelectorAll('.pixel');
    for (let index = 0; index < colorPixels.length; index += 1) {
      colorPixels[index].style.backgroundColor = 'white';
    }
  });

 /* botão add */
 const bottonAdd = document.querySelector('#add');
 bottonAdd.addEventListener('click', function(){
  const removen = document.querySelectorAll(".table");
   for (let a = 0; a<removen.length; a++ ){
     removen[a].remove();
   }

   const inputValue = document.getElementById('input-add').value;
  console.log(inputValue);
   if (inputValue === '') {
     n = 5
   } else {
     n = inputValue;
   }

   for(let index = 0; index < n; index += 1 ){
     const table =  document.createElement('div');
     table.className = "table";
     pixelBoardDiv.appendChild(table);
     
     for(let i = 0; i < n; i += 1){
       const pixel =  document.createElement('div');
       pixel.className = "pixel";
       table.appendChild(pixel);
     }
   }
 })

/* botão cor aleatoria */
const bottonAleatorio = document.querySelector('#aleatoria');
bottonAleatorio.addEventListener('click', function() {
  
  let r = Math.floor(Math.random() * 256),
      g = Math.floor(Math.random() * 256),
      b = Math.floor(Math.random() * 256);
  

  document.getElementsByClassName('color')[1].style.backgroundColor = 'rgb('+r+','+g+','+b+')';
  document.getElementsByClassName('color')[2].style.backgroundColor = 'rgb('+g+','+b+','+r+')';
  document.getElementsByClassName('color')[3].style.backgroundColor = 'rgb('+b+','+r+','+g+')';
 
})
};
