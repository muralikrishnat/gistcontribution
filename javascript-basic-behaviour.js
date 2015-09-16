//Javascript basic behaviour
//As we know everything in javascript is goes as key value Pair but the difference is context
var Name = "Jason Bourne";
//above code will declare variable called 'Name' and that is added to window object as below
console.log(window["Name"]); //prints  'Jason Bourne' in console
console.log(Name); //prints  'Jason Bourne' in console
//As we know that context of variable declarassion is window, So we can access 'Name' in above ways
//either key of the window or direct variable name
//simple represenatino of above variable under window is
//window = {
// ...
// "Name": "Jason Bourne"
//}

var ContextObject = {};
ContextObject.Name = "";

//If we declare javascript function as below
function javascriptFunction(){
	console.log('This is javascript function');
}
//window is the context of above method
//We can invoke above method as...
// option 1: this is basic way to invoke function in javascript
javascriptFunction();

//option 2: this is another way to invoke
//we can use this way only if that function declared in window closure that means not nested in any other functions
window['javascriptFunction']();

