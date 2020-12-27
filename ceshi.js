var name = 'name1';
var age = 18;
function fn() {
  var age = 20;
  return function () {
    console.log(age); // 20
    console.log(this.name); // name1
  };
}

var fn1 = fn();
fn1();

// 函数的单独调用  this  ==> 全局对象
