const pianoKeys = document.querySelectorAll(".piano-keys .key"),
 keysCheckbox = document.querySelector(".keys-checkbox input");

let allKeys = [],
  audio = new Audio("tunes/a.wav");

const playTune = (key) => {
  audio.src = `tunes/${key}.wav`;
  audio.play();

  const clickedKey = document.querySelector(`[data-key=${key}`);
  clickedKey.classList.add("active", "playing");
  setTimeout(() => {
    clickedKey.classList.remove("active", "playing");
  }, 150);
};

pianoKeys.forEach((key) => {
  allKeys.push(key.dataset.key);
  key.addEventListener("click", () => playTune(key.dataset.key));
});


const showHideKeys = (e) =>{
pianoKeys.forEach(key => key.classList.toggle("hide"));
}
const pressedKey = (e) => {
  if (allKeys.includes(e.key)) playTune(e.key);
};

keysCheckbox.addEventListener("click", showHideKeys);
document.addEventListener("keydown", pressedKey);