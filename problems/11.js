/**
 * Problem 11: Palindrome
 * 
 * Given a string, return true if it is a palindrome.
 * A palindrome is a string that is the same forward and backwards.
 * Only consider letters, ignore spaces and cases.
 * 
 * @example "racecar" -> true
*/
function problem(str) {
    let clean_string = ""
    for (let i = 0; i<str.length; i++){
        if (str[i] === " "){
            continue;
        }
        clean_string += str[i].toLowerCase()
    }
    const reversed_string = clean_string.split('').reverse().join('');
    return clean_string === reversed_string; 
}
const tests = [
    ["racecar", true],
    ["icssc", false],
    ["dont nod", true],
    ["Was it a cat I saw", true],
    ["how are you", false]
]

module.exports = {problem, tests};