//Intro: Simple example for handling two way binding
//in this example two way binding is made for only 'text', example can be modified to achieve much complex binding
//gives basic Idea of binding ,how it can be done using simple javascript without any Frameworks
//we used 'document.querySelectorAll' to get the list of elements.
//'querySelectorAll' is supported by all modern browsers , example tested in safari,chrome and FF



var BindingManagerClass = function () {
    //config for Handling configurations of binder
    this.Config = {};
    //Initialization of events to listen on 'mn-*' attribute tags
    //for now we used only 'mn-bind'
    this.init = function () {
        //Looping all the elements which are having 'mn-bind' attribute
        for (var itemIndex = 0, itemsLen = document.querySelectorAll('[mn-bind]').length; itemIndex < itemsLen; itemIndex++) {
            //checking element is input
            if (document.querySelectorAll('[mn-bind]')[itemIndex].nodeName == 'input'.toUpperCase()) {
                //Adding 'keyUp' event to input element
                document.querySelectorAll('[mn-bind]')[itemIndex].addEventListener('keyup', function (e) {
                    if (e.keyCode == '13') {
                        //to Something on Enter...
                    } else {
                        var valueToSet = e.target.value;
                        //Looking for all the elements which has value of  'mn-bind' is changed element's 'mn-bind' value.., and looping
                        Array.prototype.slice.call(document.querySelectorAll('[mn-bind="' + e.target.getAttribute('mn-bind') + '"]')).forEach(function (bindElement) {
                            //checking for target element...to skip target element to change
                            if (bindElement != e.target) {
                                //checking the tag name, using 'value' attribute for 'input' instead of 'textContent' which is used for 'div' and 'span'
                                if (bindElement.nodeName == 'span'.toUpperCase() || bindElement.nodeName == 'div'.toUpperCase()) {
                                    bindElement.textContent = valueToSet;
                                } else {
                                    bindElement.value = valueToSet;
                                }
                            }
                        });
                    }
                });
            }
        }

    };
};

//Creating bindingManagerClass single ton Object
var bindManager = new BindingManagerClass();

//To invoke the Binding Manager use below code for now invoking the init method in specified in 'onload' of body tag in html
//bindManager.init();
