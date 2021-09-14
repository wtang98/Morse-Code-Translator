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


test("translates a string",() => {
    //1. arrange
    let result; 
    const outcome = ".-.--..--..-...";
    //2. act
    result = englishToMorse("apple");
    //3. assert
    expect(result).toBe(outcome);
})





