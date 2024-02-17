function randomRGB() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  //test it with console.log
  //   console.log(r, g, b); //print out random number per each variable
  return `rgb(${r}, ${g}, ${b})`;
}

//select all to pass thru DOM

const letterChange = document.querySelectorAll("#letterInput");
const intervalidId = setInterval(function () {
  for (let letter of letterChange) {
    letter.style.color = randomRGB();
  }
}, 1000);
