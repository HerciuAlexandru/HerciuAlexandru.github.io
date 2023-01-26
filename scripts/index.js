const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];
const brandTitle = document.getElementsByClassName("brand-tile-doi");
const textDisplay = document.getElementById("text");
const phrase = ["Alexandru Herciu", "full-stack developer", "eager to learn"];
console.log(phrase);

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

let i = 0;
let j = 0;
let currentPhrase = [];
let isEndOfWord = false;
let isEnd = false;

function loop() {
  isEnd = false;

  if (i < phrase.length) {
    if (!isEndOfWord && j <= phrase[i].length) {
      currentPhrase.push(phrase[i][j]);
      j++;
      textDisplay.innerHTML = currentPhrase.join("");
    }
    if (isEndOfWord && j <= phrase[i].length) {
      currentPhrase.pop(phrase[i][j]);
      j--;
      textDisplay.innerHTML = currentPhrase.join("");
    }
    if (j == phrase[i].length) {
      isEnd = true;
      isEndOfWord = true;
    }
    if (isEndOfWord && j === 0) {
      currentPhrase = [];
      isEndOfWord = false;
      i++;
      if (i === phrase.length) {
        i = 0;
      }
    }
  }
  const speedUp = Math.random() * (80 - 50) + 50;
  const normalSpeed = Math.random() * (300 - 200) + 200;
  const time = isEnd ? 2000 : isEndOfWord ? speedUp : normalSpeed;
  setTimeout(loop, time);
}
loop();

// Load more
let loadMoreBtn = document.querySelector("#load-more");
let currentItem = 3;

loadMoreBtn.onclick = () => {
  let boxes = [...document.querySelectorAll(".container .box-container .box")];
  for (var i = currentItem; i < currentItem + 3; i++) {
    boxes[i].style.display = "inline-block";
  }
  currentItem += 3;

  if (currentItem >= boxes.length) {
    loadMoreBtn.style.display = "none";
  }
};
