import {morseCodeTranslations} from "./translator.js";
test("A should be .-",() => {
    //1. arrange
    let result; 
    const outcome = ".-";
    //2. act
    result = morseCodeTranslations.A;
    //3. assert
    expect(result).toBe(outcome);
})

// import {morseCodeTranslations} from "./translator.js";
test("K should be -.-",() => {
    //1. arrange
    let result; 
    const outcome = "-.-";
    //2. act
    result = morseCodeTranslations.K;
    //3. assert
    expect(result).toBe(outcome);
})

import {englishToMorse} from "./translator.js";
test("translates a string",() => {
    //1. arrange
    let result; 
    const outcome = "...---...";
    //2. act
    result = englishToMorse("sos");
    //3. assert
    expect(result).toBe(outcome);
})



