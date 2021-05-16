var a = [1, "2", [3]]
console.log(a.length)
console.log(a[0] === 1)
console.log(a[2][0] === 3)

//선언하지 않는 값도 추가
var b = []
console.log(b.length)
b[0] = 1
b[1] = "2"
b[2] = [3]
console.log(b.length)

// 빠진 슬롯이 있는 배열
var c = []
c[0] = 1;
c[2] = [3]
console.log(c[1])
console.log(c.length)

// 문장열로 키 저장가능 -> 비추
var d = []
d[0] = 1
d['footbar'] = 2
console.log(d.length)
console.log(d['footbar'])
console.log(d.footbar)

// 문자열 10진수를 쓰면 숫자로 들어감
var e = []
e['13'] = 42
console.log(e.length)

// 유사배열
function foo() {
    var arr = Array.prototype.slice.call(arguments)
    arr.push("bam");
    console.log(arr)
}

foo('bar', 'baz')