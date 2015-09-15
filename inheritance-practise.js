var ParentClass = function(property1, property2){
	this.Property1 = property1;
	this.Property2 = property2;
	this.Property3 = null;

	this.method1 = function(method1arg1){

		this.Property3 = method1arg1 + ' Appending in Parent';
	};
};

var ChildClass = function(property1, property2, property3){
  ParentClass.call(this, property1, property2);
  this.ParentMethod1 = this.method1;
  this.method1 = function(method2arg1){

    this.Property3 = method2arg1 + 'Appending in Child';
        this.ParentMethod1();
  };
};


ParentClass.prototype
var ch1 = new ChildClass('Murali','krishna',23);
console.log(ch1);
ch1.method1('test');
console.log(ch1);
ch1.method2(25);
