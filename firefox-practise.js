function f1(){
  console.log('this is testing');
}

window['f1']()

for(var t in document.querySelector('div')){ console.log(t,document.querySelector('div')[t]);}

r = 10;

window['r']

(function f22(){
  console.log('this is second fucntion');

  function f33(){
    console.log('this is internal method');
  };
  this.f33 = f33;
})();

var x= {};
(function f22(){
  console.log('this is second fucntion');

  function f33(){
    console.log('this is internal method');
  };
  this.f33 = f33;
}).call(x);


var x = 10;
x.t = 30;
var y = {};
y.r = 30;

window['y']['r']
window['f33']();


window['function']
