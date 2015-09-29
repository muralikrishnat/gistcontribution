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


var Person = {
  _name: '',
  get Name(){
    return this._name;
  },
  set Name(name){
    this._name = name;
  }
};

function PersonClass(){
  var _name = '';
}

PersonClass.prototype = {
  get Name(){ return _name;},
  set Name(name){ console.log('you are trying to set the Name from ');_name = name;}
};


var person1 = new PersonClass();

person1.Name = 'Murali';
console.log(person1.Name);

function f1(obj1){
  var obj2 = obj1;
    var obj3 = obj2;
    var obj4 = obj3;
  obj4.Name = 'krishna';
}

f1(person1);
console.log(person1);




var obj = {
  subobj1: {
    Name:"Murali"
  },subobj2:{
    Age:24
  }
};

console.log(obj);
var obj2 = obj;
var subobj2_1 = obj2.subobj1;

obj2.subobj1.Name = 'krishna';

console.log(obj.subobj1.Name);


subobj2_1.Name = 'testst';
console.log(obj.subobj1.Name);
obj.subobj1.Name = 'Murali finakl';
console.log(obj2.subobj1.Name);
console.log(subobj2_1.Name);

function ClassA(){
  this._name = '';

}

ClassA.prototype = {
  get Name(){ return this._name ;},
  set Name(name) { this._name = name;}
};


var objClassA = new ClassA();


function ClassB(name){
    var _name = name;
    return {get Name(){ return _name ;},
          set Name(name) { _name = name;}};
}


var objClassB = new ClassB('Murali');

objClassB.Name = 'Krishna';


var obj1 = new ClassB('Value1');
var obj2 = ClassB('Value2');






// Start guid generator
var guidSelectorString = 'abcdefghijklmnopqrstuvwxyz0123456789';
var shuffledguidSelectorString ='';
var digit8String = '';
guidSelectorString.length
var completedIndexes = [];
for(var i=0,len =guidSelectorString.length;i<len;i++){
  var rndIndex = (Math.floor(Math.random()*(1+3-0))+0);
  //var rndIndex = (Math.floor(Math.random()*(1+35-0))+0);
  if(completedIndexes.indexOf(rndIndex) < 0){
    shuffledguidSelectorString += guidSelectorString[rndIndex];
    completedIndexes.push(rndIndex);
  }
}
console.log(completedIndexes);
var allIndexes = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35];
for(var i =0,len =completedIndexes.length;i < len;i++){
  delete allIndexes[completedIndexes[i]];
}
allIndexes = allIndexes.filter(function(filterItem){ return filterItem != null;});
console.log(allIndexes);
var leftOverString = '';
for(var i =0,len = allIndexes.length ; i< len; i++){
  leftOverString += guidSelectorString[allIndexes[i]];
}

console.log(leftOverString);

console.log(shuffledguidSelectorString);

if(shuffledguidSelectorString.length < 8){
  var missingletters = 8 - shuffledguidSelectorString.length;
  for(var i=0,len = missingletters; i <len;i++){
    var rndIndex = (Math.floor(Math.random()*(1+len-0))+0);
    shuffledguidSelectorString += guidSelectorString[i];
  }
}
digit8String = shuffledguidSelectorString.substr(0, 8);

// End guid generator

console.log(digit8String);
