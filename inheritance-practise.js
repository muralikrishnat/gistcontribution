//Intro : Basic explanation of Javascript Inheritance concept
//there are many ways to achieve inheritance feature in Javascript
//this is one of the approach I follow most of the time.


//Declaring Parent Class/Function
//with three properties and one method
var ParentClass = function(property1, property2){
	this.Property1 = property1;
	this.Property2 = property2;
	this.Property3 = null;

	this.method1 = function(method1arg1){
     this.Property3 = method1arg1 + ' Appending in Parent';
	};
};

//Declaring Child Class
var ChildClass1 = function(property1, property2, property3){
  //Getting ParentClass properties and methods into Child context
  ParentClass.call(this, property1, property2);

  this.method1 = function(method2arg1){
    this.Property3 = method2arg1 + 'Appending in Child';
  };
};

var ChildClass2 = function(property1, property2, property3){
  //Getting ParentClass properties and methods into Child context
  ParentClass.call(this, property1, property2);

  //preserving the parent method into one child method
  //that can be used as parent method
  this.ParentMethod1 = this.method1;

  this.method1 = function(method2arg1){
    //calling patent method that preserved while creating of object
    this.ParentMethod1.call(this,method2arg1);
  };
};


//creating object for child class 1 which overwrties the parent method
var child1object = new ChildClass1('Hansel', 'Hunter', 23);
//creating object for child class 2 which invokes the parent method on call of child method
var child2object = new ChildClass2('Gretel', 'Hunter', 23);
console.log(child1object.Property3);
child1object.method1('child1 ');
//prints 'child1 Appending in Child' calling 'method1' will invoke child method
console.log(child1object.Property3);
console.log(child2object.Property3);
child2object.method1('child 2');
//prints 'child1 Appending in Parent' calling 'method1' will invoke child method
console.log(child2object.Property3);
