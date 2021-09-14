"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.englishToMorse = exports.morseCodeTranslations = void 0;
// const translations = () =>{
//     const english = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
//     'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 
//     'y', 'z']
//      for(let i=0; i< english.length; i++);
//     const morse = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", 
//     ".---", "-.-", ".-..", "--", "-.", "---", ".---.", "--.-", ".-.",
//     "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."]
//      for(let j=0; j< english.length; j++); 
// }
var morseCodeTranslations = {
  "A": ".-",
  "B": "-...",
  "C": "-.-.",
  "D": "-..",
  "E": ".",
  "F": "..-.",
  "G": "--.",
  "H": "....",
  "I": "..",
  "J": ".---",
  "K": "-.-",
  "L": ".-..",
  "M": "--",
  "N": "-.",
  "O": "---",
  "P": ".--.",
  "Q": "--.-",
  "R": ".-.",
  "S": "...",
  "T": "-",
  "U": "..-",
  "W": ".--",
  "X": "-..-",
  "Y": "-.--",
  "Z": "--.."
}; // export const englishToMorse = (eng) => {
//     return eng
//     .toUpperCase()
//     .split("")
//     .map(value =>{
//         return morseCodeTranslations[value]
//     })
//     .join("");
// }

exports.morseCodeTranslations = morseCodeTranslations;

var englishToMorse = function englishToMorse(eng) {
  var tran1 = eng.toUpperCase().split("");
  var morseCodeArray = [];

  for (var i = 0; i < tran1.length; i++) {
    var currentLetter = tran1[i];
    morseCodeArray.push(morseCodeTranslations[currentLetter]);
  }

  return morseCodeArray.join("");
};

exports.englishToMorse = englishToMorse;