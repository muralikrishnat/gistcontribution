//Pre-requirements: knowing following concepts is good to understand DI in better way.
//1.SingleTon Design Pattern and usage
//2.'call' and 'apply' methods


//Intro: Below Code example is the basic explanation of Dependency Injection
//it explains how we can achieve DI with basic things.
//gives basic idea of how DI will work ,how to handle arguments

//Declaring the Dependency Injection Manager class/function
//we can create singleTon Object using this function/class
//breaking code into functions will increase re-usability
function DI_Manager() {
	//Property that holds all the service list with respective code
	this.InjectorContainer = {};
	//Property that holds objects of services
	this.InjectorCache = {};
	//Regular Exp for getting arguments of service function
	this.FN_ARGS = /^function\s*[^\(]*\(\s*([^\)]*)\)/m;
	//used to register service into Dependency Manager
	this.service = function (serviceName, serviceMethod) {
		//adding service to InjectorContainer as kay value pair
		//Key is the name of te service
		//Value is the function that represents service
		this.InjectorContainer[serviceName] = serviceMethod;
	};

	//Method that will be using for injecting services as arguments to repective service code
	//takes array of strings as arguments that has to inject
	//return array of service objects that has to inject
	this.processInjection = function (servicesToInject) {
		var tmpInjectorList = [];
		//looping the string array
		for (var i = 0, len = servicesToInject.length; i < len; i++) {
			//checking the Injector Cache for service object
			if (!this.InjectorCache[servicesToInject[i]]) {
				var injectorObject = function () {};
				//checking the Injector Container for service code
				if (this.InjectorContainer[servicesToInject[i].trim()]) {
					injectorObject = this.InjectorContainer[servicesToInject[i].trim()]
				} else {
					console.warn('Service : ' + (servicesToInject[i].trim()) + ' is not available');
				}

				//getting the list of arguments of service code
				var innerArgs = injectorObject.toString().match(this.FN_ARGS)[1].split(',');

				var trimmedArgs = [];
				for (var argsIndex = 0, argsLen = innerArgs.length; argsIndex < argsLen; argsIndex++) {
					if (innerArgs[argsIndex].trim().length > 0) {
						trimmedArgs.push(innerArgs[argsIndex]);
					}
				}

				//creating context object to insert into service
				var serviceContextInner = {};
				if (trimmedArgs.length > 0) {
					//calling for dependency service to insert
					injectorObject.apply(serviceContextInner, this.processInjection(trimmedArgs));
				} else {
					injectorObject.apply(serviceContextInner);
				}
				//adding service object to Injector Cache ,it could be used later services
				//all service objects are single ton objects for our service code
				this.InjectorCache[servicesToInject[i]] = serviceContextInner;
			}
			//pushing  the dependency service object to array
			tmpInjectorList.push(this.InjectorCache[servicesToInject[i]]);

		}
		return tmpInjectorList;
	};


	//method to invoke applciation ,it has to all after completion of service registry
	this.run = function (runfn) {
		var args = runfn.toString().match(this.FN_ARGS)[1].split(',');
		try {
			runfn.apply({}, this.processInjection(args));
		} catch (er) {
			console.warn(er);
		}

	};

}

//creating singleton object for DI_Manager.
var DependencyInjectionManager = new DI_Manager();

//registering the 'service1' to DependencyInjectionManager(DIM)
DependencyInjectionManager.service('service1', function(){
  this.Name = 'Service 1';
});

//registering the 'service2' to DependencyInjectionManager(DIM) with dependency on 'service1'
DependencyInjectionManager.service('service2', function(service1){
  this.Name = 'Service 2';
  this.P1 = service1 ? service1.Name : null;
});

//registering the 'service3' to DependencyInjectionManager(DIM) with dependency on 'service1', 'service2'
DependencyInjectionManager.service('service3', function(service1, service2){
  this.Name = 'Service 3';
  this.P1 = service1 ? service1.Name : null;
  this.P2 = service2 ? service2.Name : null;
});

//registering the 'service4' to DependencyInjectionManager(DIM) with dependency on 'service1', 'service2'
DependencyInjectionManager.service('service4', function(service2, service1){
  this.Name = 'Service 4';
  this.P1 = service1 ? service1.Name : null;
  this.P2 = service2 ? service2.Name : null;
});


//finally executing the DIM using run method as mention above
DependencyInjectionManager.run(function(service4){
  console.log(service4);
});
//it is having dependency on service4 this will determine in the run method of DIM
//Code : runfn.toString().match(this.FN_ARGS)[1].split(',');
//above line will get the array of service tobe injected i.e., ['service4']
//this array passed to 'processInjection' method inorder to retrieve 'service4' object
//DIM will check in InjectionCache for service4 object, If it exists will inject service4 object otherwise
//fallback to InjectionContainer as explained in 'processInjection' method


//If you try to inject 'service5' which is not registered in DIM,
//it will shows the warning as below in console
//Service : service5 is not available
/*

DependencyInjectionManager.run(function(service5){
  console.log(service5);
});

*/

//Note : Above code is only basic example of DI, it is not complete code to handle loop,self,Async DI.
