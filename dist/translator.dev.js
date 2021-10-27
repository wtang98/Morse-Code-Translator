"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.englishToMorse = exports.morseCodeTranslations = void 0;
var morseCodeTranslations = {
  "A": ".- ",
  "B": "-... ",
  "C": "-.-. ",
  "D": "-.. ",
  "E": ". ",
  "F": "..-. ",
  "G": "--. ",
  "H": ".... ",
  "I": ".. ",
  "J": ".--- ",
  "K": "-.- ",
  "L": ".-.. ",
  "M": "-- ",
  "N": "-. ",
  "O": "--- ",
  "P": ".--. ",
  "Q": "--.- ",
  "R": ".-. ",
  "S": "... ",
  "T": "-",
  "U": "..- ",
  "V": "...- ",
  "W": ".-- ",
  "X": "-..- ",
  "Y": "-.-- ",
  "Z": "--.. ",
  " ": "/"
}; //both work pick your poison
// export const englishToMorse = (eng) => {
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
    morseCodeArray.push(morseCodeTranslations[tran1[i]]);
  }

  return morseCodeArray.join("");
};

exports.englishToMorse = englishToMorse;