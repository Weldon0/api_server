var length = 10;
var obj = {
  length: 5,
  method: function (fn) {
    // 函数的单独调用  this  ==> 全局对象
    fn(); // 10
    console.log(arguments[0]);
    arguments[0](); // 10  5  4
  },
};

function fn() {
  // this ==> window
  console.log(this.length);
}

obj.method(fn, 1, 4);
