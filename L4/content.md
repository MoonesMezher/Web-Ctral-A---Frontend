// any string + any type => string
// console.log(10 + +"100" + 200 + +"30")

// truthy & falsy values
const a = (function () { });
console.log(a ? "AA" : "BB")

// truthy => true, array, object, function
// falsy => false, 0, empty string, null, undefined, NaN

// console.log(Math.max(10, 20, 30, 60, 10))
// console.log(Math.min(10, 20, 30, 60, 10))
// console.log(Math.ceil(4.1))
// console.log(Math.floor(4.9))
// console.log(Math.round(4.5))
// console.log(Math.PI)
// console.log(Math.abs(-10))
// console.log(Math.log(1))
// console.log(Math.pow(10, 2))
// console.log(10 ** 2)
console.log((Math.random() * (10 - 2)) + 2)
// 0 <= x <= 1
// 0 <= x <= 10
// 2 <= x <= 10
// 0 <= x <= max - min = 8
function random(min, max) {
    if (max < min) return "ERROR";
    return (Math.random() * (max - min)) + min;
}
console.log(random(20, 100))

console.log(+(10.554252353).toFixed(3))
function fix(number, digits = 0) {
    return +number.toFixed(digits);
}
fix(10.5435345)

// HOF 
function a() {
    return function () {
        return "1"
    }
}

console.log(a()())




const arr = [
    1, 2, 3, 4, 5
];

// [10, 20, 30, 40, 50]
// function m1() {
//     return arr.map((e, i) => e * 10)
// }
// console.log(m1())

// [1, 3, 5, 7, 9]
// function m2() {
//     return arr.map((e, i) => e + i)
// }
// console.log(m2())

// [11, 21, 31, 41, 51]
// function m3() {
//     return arr.map((e, i) => e + "1")
// }
// console.log(m3())

// ["1a", "2a", ...]
function m4() {
    return arr.map((e, i) => e + "a")
}
console.log(m4())
console.log(arr)

const arr = [
    1, 2, 20, 4, 5
];

// console.log(
//     arr.reduce((prev, curr) => prev + curr, 1)
// )
// initial value => numbers[] => + => prev = 0
// curr, prev
// i = 0, prev = 0, curr = 1, prev + curr = 1
// i = 1, prev = 1, curr = 2, prev + curr = 3
// i = 2, prev = 3, curr = 3, prev + curr = 6
// i = 3, prev = 6, curr = 4, prev + curr = 10
// i = 4, prev = 10, curr = 5, prev + curr = 15

// max
console.log(
    arr.reduce((prev, curr) => prev > curr ? prev : curr, arr[0])
)