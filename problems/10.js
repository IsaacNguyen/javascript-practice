/**
 * Problem 10: Strings
 * 
 * Given a string, return a modified version with the first half in UPPERCASE, and the second half in lowercase. 
 * If the string has odd length, the middle character should be lowercase.
 * 
 * @example "abcdef" -> "ABCdef"
*/
function problem(str) {
    let length = str.length;
    let middle = Math.floor(length / 2);
    let new_string = "";
    for (let i = 0; i < middle; i++){
        new_string += str[i].toUpperCase()
    }
    for (let i = middle; i < length; i++){
        new_string += str[i].toLowerCase()
    }

    return new_string;
}

const tests = [
    ["abcdef", "ABCdef"],
    ["abcdefg", "ABCdefg"],
    ["HELLO THERE", "HELLO there"],
    ["js4Life!", "JS4Life!"],
    ["UNiTeD STATes OF AMerICA", "UNITED STATEs of america"]
]

module.exports = {problem, tests};