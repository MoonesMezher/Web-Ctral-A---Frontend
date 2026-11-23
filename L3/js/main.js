// js 
let numbers = [1, 2, 3, 4, 5];

// Write functions
// 1) return length of array
function len() {
    return numbers.length;
}
console.log(len());
// 2) return max number
function max() {
    let maxNum = numbers[0];
    for(let i = 0; i < len(); i++) {
        if(numbers[i] > maxNum) maxNum = numbers[i];
    }
    return maxNum;
}
// 3) return min number
function min() {
    let minNum = numbers[0];
    for(let i = 0; i < len(); i++) {
        if(numbers[i] < minNum) minNum = numbers[i];
    }
    return minNum;
}
// 4) add new element and return the new length
function add(e) {
    return numbers.push(e)
}
// 5) return new array (element / 2)
function m1() {
    const output = [];
    for(let i =0; i < len(); i++) output.push(numbers[i] / 2)
    return output;
}
// 6) return new array has (elements > 3)
function m1() {
    const output = [];
    for(let i =0; i < len(); i++) {
        if(numbers[i] > 3) output.push(numbers[i])
    }
    return output;
}