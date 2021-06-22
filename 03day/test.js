let s = "你是谁"
console.log(s.indexOf())
console.log([1,2,3].indexOf());

function fn() {
  console.log(this);
  return {
    a:"aa",
    b:"bb",
    c:this
  }
}
let obj = fn()
console.log(obj.c);