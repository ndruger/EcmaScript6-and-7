let hash = {a: {b: 'v1'}, c: 'v2', d: 'v3'};
let array = [1, 2, 3];

// ハッシュのdestructuring
// 下記と等価
// let b = hash.a.b
// let c = hash.c
let {a: {b: b}, c: c} = hash;

// 取得先が同じ変数名なら省略して書ける
let {d} = hash;

// let e = hash.e // このように解釈されるので例外はでない
let {e} = hash;

try {
  // let e = hash.e.f // このように解釈されるので例外になる
  let {e: {f}} = hash;
} catch(e) {
}

// 配列のdestructuring
let [head, ...rest] = array;


// 関数の引数にも利用できる
function func({a}) {
  console.log(a);
}

func({a: 'v1'})
