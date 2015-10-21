
// コールバック地獄
// 単に非同期処理を逐次実行したいだけで、ネストのため見れたものではない
// また、エラーハンドリングを1箇所に書けない

function funcA(v, cb) {
  setTimeout(function() {
    cb(null, 'res')
  })
}

funcA('a', function(err, resA) {
  if (err) {
    console.log(err);
    return;
  }
  funcA('b', function(err, resB) {
    if (err) {
      console.log(err);
      return;
    }
    funcA('c', function(err, resC) {
      if (err) {
        console.log(err);
        return;
      }
    });
  });
});


// Promise

function promisedFuncA(v) {
  return new Promise(function(resolve, reject) {
    resolve('res')
  });
}

promisedFuncA('a')
  .then((resA) => {
    return promisedFuncA('b');
  })
  .then((resB) => {
    return promisedFuncA('c');
  })
  .then((resC) => {
  })
  .catch(err => { // 発生した例外は全てここでキャッチされる
    // handle error
    console.log(err);
  });


// await and async

async function asyncFunc() {
  try {
    let resA = await promisedFuncA('a');
    let resB = await promisedFuncA('b');
    let resC = await promisedFuncA('c');
  } catch(e) {
    console.log(e);
  }
}

asyncFunc();
