import {englishToMorse} from "./translator.js";

const input = document.querySelector(".translate__input");
const translateBtn = document.querySelector(".translate__button");
const ans = document.querySelector(".translate__translated")

translateBtn.addEventListener('click', event => {
    event.preventDefault();
    const returned = englishToMorse(input.value);
    ans.innerHTML = `${input.value}: ${returned}`;
})
