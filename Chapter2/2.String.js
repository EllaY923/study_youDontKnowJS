var a = "foo"
var b = ["f", "o", "o"]
console.log(a.length)
console.log(b.length)
console.log(a.indexOf('o'))
console.log(b.indexOf('o'))

var c = a.concat("bar")
var d = b.concat(['b', 'a', 'r'])
console.log(c)
console.log(d)
console.log(a === c)
console.log(b === d)
console.log(a)
console.log(b)

/* 문자열 vs 배열 */
// 메서드 사용 후 적용
c = a.toUpperCase()
console.log(a === c)
console.log(a)
console.log(c)

b.push('!')
console.log(b)

// 배열메서드 사용
console.log(a.join)
console.log(a.map)

var e = Array.prototype.join.call(a, "-")
var f = Array.prototype.map.call(a, function (v) {
    return v.toUpperCase() + "."
}).join("")

console.log(e)
console.log(f)

// 문자열 뒤집는 코드  reverse
//console.log(a.reverse())
console.log(b.reverse())

//Array.prototype.reverse.call(a)

var g = a.split("").reverse().join("")
console.log(g)
