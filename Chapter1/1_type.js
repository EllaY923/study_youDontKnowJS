/* 내장 타입 */
console.log(typeof undefined)
console.log(typeof true)
console.log(typeof 42)
console.log(typeof "42")
console.log(typeof { life: 42 })
console.log(typeof Symbol())

// null
console.log(typeof null)
var a = null
console.log(!a && typeof a)

// function ->  object의 하위타입
console.log(typeof function example() {
    console.log('function example')
})
function example2(a, b) { }
console.log(example2.length)

// Array -> object의 하위타입
console.log(typeof [1, 2, 3])

/* 값의 타입 */
var a = 42;
console.log(typeof a)
a = true
console.log(typeof a)

// 값이 없는 & 값이 선언되지 않은
var b;
console.log(typeof b)
var c = 42;
var d;
c = d;
console.log(typeof c)
console.log(typeof d)
//console.log(e)

// if(DEBUG){
//     console.log("디버깅 시작")
// }
if (typeof DEBUG !== "undefined") {
    console.log("디버깅 시작")
}