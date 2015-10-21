
// コールバック地獄
// 単に非同期処理を逐次実行したいだけで、ネストのため見れたものではない
// また、エラーハンドリングを1箇所に書けない
funcA('a', function(err, resA) {
  if (err) {
    console.log(err);
    return;
  }
  funcB('b', function(err, resB) {
    if (err) {
      console.log(err);
      return;
    }
    funcC('c', function(err, resC) {
      if (err) {
        console.log(err);
        return;
      }
    });
  });
});

// Promise
promisedFuncA('a')
  .then((resA) => {
    return promisedFuncB('b');
  })
  .then((resB) => {
    return promisedFuncC('c');
  })
  .then((resC) => {
  })
  .catch(err => { // 発生した例外は全てここでキャッチされる
    // handle error
    console.log(err);
  });

