/**
 * Problem 14: Majority Element
 * 
 * Given a list of numbers, return the majority number.
 * The majority number is the one that appears at least ⌊n/2⌋ times, where n is the size of the list.
 * 
 * @example [3,2,3] -> 3
*/
function problem(numbers) {
    let threshold = Math.floor(numbers.length / 2)
    let map = {}
    for (let num of numbers){
        if (num in map){
            map[num] += 1;
        }
        else 
        {
            map[num] = 1;
        }
    }
    let majority = null
    for (let item in map){
        if (majority !== null && map[item] > majority[1]){
            majority = [item, map[item]]
        }
        else if (map[item] >= threshold){
            majority = [item, map[item]]
        }
    }
    
    return parseInt(majority[0]);
}

const tests = [
    [[3,2,3], 3],
    [[2,2,1,1,3,2,2], 2]
]

module.exports = {problem, tests};