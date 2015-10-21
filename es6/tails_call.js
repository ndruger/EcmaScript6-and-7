function funcA(n) {
  return n + funcA(n - 1);
}

// 末尾再帰バージョン
function funcB(n, acc = 0) {
  if (n === 0) {
    return acc;
  }
  return funcB(n - 1, n + acc);
}

try {
  console.log(funcA(100000));  // スタックサイズオーバーになる(Maximum call stack size exceeded)
} catch(e) {
  console.log(e);
}

console.log(funcB(100000)); // スタックサイズオーバーにならない
