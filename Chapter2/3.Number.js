// 10진수가 기본 , 소수점 이하는 뺀다
var a = 42.300;
var b = 42.0;
console.log(a)
console.log(b)

//아주 크거나 작은 숫자는 지수형으로 표시
var c = 5E10;
console.log(c)
console.log(c.toExponential())

var d = c * c
console.log(d)

var e = 1 / c
console.log(e)

a = 42.59
console.log(a.toFixed(0))
console.log(a.toFixed(1))
console.log(a.toFixed(2))
console.log(a.toFixed(3))
console.log(a.toFixed(4))

console.log(a.toPrecision(1))
console.log(a.toPrecision(2))
console.log(a.toPrecision(3))
console.log(a.toPrecision(4))
console.log(a.toPrecision(5))
console.log(a.toPrecision(6))

console.log((42).toFixed(3))
console.log(0.42.toFixed(3))
console.log(42..toFixed(3))
console.log(42 .toFixed(3))

var oneThousand = 1E3
console.log(oneThousand)
var oneMillionOneHundredThousand = 1.1E6
console.log(oneMillionOneHundredThousand)

console.log(0xf3)
console.log(0Xf3)
console.log(0363)