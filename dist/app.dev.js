"use strict";

var _translator = require("./translator.js");

var input = document.querySelector(".translate__input");
var translateBtn = document.querySelector(".translate__button");
var ans = document.querySelector(".translate__translated");
translateBtn.addEventListener('click', function (event) {
  event.preventDefault();
  var returned = (0, _translator.englishToMorse)(input.value);
  ans.innerHTML = "".concat(input.value, ": ").concat(returned);
});