//Javascript basic behaviour
//As we know, everything in javascript is goes as key value Pair but the difference is context
var Name = "Jason Bourne";
//above code will declare variable called 'Name' and that is added to window object as below
console.log(window["Name"]); //prints  'Jason Bourne' in console
console.log(Name); //prints  'Jason Bourne' in console
//the context of variable declarassion is window, So we can access 'Name' in above ways
//either key of the window or direct variable name
//simple represenation of above variable under window is
//window = {
// ...
// "Name": "Jason Bourne"
//}

var ContextObject = {};
ContextObject.Name = "";

//If we declare javascript function as below
function javascriptFunction(){
	this.Name = 'Muralikrishna';
	console.log('This is javascript function');
}
//window is the context of above method
//We can invoke above method as...
// option 1: this is basic way to invoke function in javascript
javascriptFunction();

//option 2: this is another way to invoke
//we can use this way only if that function declared in window closure that means not nested in any other functions
window['javascriptFunction']();

//Now the value of Name variable is changed to 'Muralikrishna', value is changed in javascriptFunction
//this.Name = 'Muralikrishna'; will set Name variable to 'Muralikrishna' under window context
//'this' in javascriptFunction represents 'window' object in above two ways of calling function


//lets see how to change that context of function
console.log(ContextObject.Name); //prints Empty in console b'coz we intialized empty string in above
//for changing the 'this' context we can use 'call' or 'apply' method of functinos as below
javascriptFunction.call(ContextObject);
//or
// window['javascriptFunction'].call(ContextObject);

console.log(ContextObject.Name);
//above line prints 'Muralikrishna'
//If we use 'call' or 'apply' methods to invoke functions that can change the context of 'this' to any object
//that we are passing as argument to 'call' or 'apply' methods


