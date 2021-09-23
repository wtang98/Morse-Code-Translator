export const morseCodeTranslations = {
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
}

//both work pick your poison
// export const englishToMorse = (eng) => {
//     return eng
//     .toUpperCase()
//     .split("")
//     .map(value =>{
//         return morseCodeTranslations[value]
//     })
//     .join("");
// }

export const englishToMorse = (eng) => {
    let tran1 = eng.toUpperCase().split("")
    let morseCodeArray = []
    for(let i=0; i<tran1.length; i++){
        let currentLetter = tran1[i]
        morseCodeArray.push(morseCodeTranslations[currentLetter])
    }
    return morseCodeArray.join("");
}

