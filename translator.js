
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

// export 
const morseCodeTranslations = {
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

    // function englishToMorse(eng){
    //  const toString = eng.toString();
    //  const toUpperCase = toString.toUpperCase();
    //  const act = toUpperCase.split("").map(i =>{
    //     return morseCodeTranslations[i] ? morseCodeTranslations[i] : i;
    //    }).join("");
    //}

// export 
function englishToMorse(eng){
    return eng
        .toString()
        .toUpperCase()
        .split("")
        .map(i =>{
            return morseCodeTranslations[i]
        })
        .join("");
    ;}
    
// console.log(englishToMorse("sos"))