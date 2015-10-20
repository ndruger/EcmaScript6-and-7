var list = [1, 2, 3];

for (var i = 0; i < list.length; i++) {
  var item1 = list[i];	// この変数が関数スコープなので
  setTimeout(function() {
    console.log('var item1 is ' + item1); // 3が3回出力される
  }, 0);
}

for (var i = 0; i < list.length; i++) {
  let item2 = list[i];	// この変数がブロックスコープなので
  setTimeout(function() {
    console.log('let item2 is ' + item2); // 1,2,3が出力される
  }, 0);
}

