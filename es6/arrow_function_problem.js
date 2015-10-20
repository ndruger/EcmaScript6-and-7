var o = {
  name: 'mike',

  hello1: function() {
    setTimeout(function() { // thisが変わってしまう
      console.log('My name is ' + this.name); // thisがoではないのでunefined
    }, 0);
  },

  hello2: function() {
    setTimeout(() => {  // この時点のthisをブロック内のthisにバインドする
      console.log('My name is ' + this.name); // thisがoなので'mike'
    }, 0);
  },
}

o.hello1();

o.hello2();
