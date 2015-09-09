function makeexecution(methodsArray, isStepbystep) {
  var promise = {};

  function executeNextMethod(methodsArray, methodIndex, callback) {
    if (methodsArray.length === methodIndex) {
      callback();
    } else {
      methodsArray[methodIndex](function (fnCompleted) {
        methodIndex = methodIndex + 1;
        console.log(fnCompleted);
        executeNextMethod(methodsArray, methodIndex, callback)
      });
    }
  }

  promise.then = function (callback) {
    var methodCount = methodsArray.length;
    if (isStepbystep) {
      executeNextMethod(methodsArray, 0, callback);
    } else {

      for (methodIndex = 0; methodIndex < methodCount; methodIndex++) {
        methodsArray[methodIndex](function (fnCompleted) {
          methodCount = methodCount - 1;
          console.log(fnCompleted);
          if (methodCount === 0) {
            callback();
          }
        });
      }
    }
  };
  return promise;
}

function f1(stepExecution) {
  setTimeout(function () {
    stepExecution('f1 method completed');
  }, 2000);
}

function f2(stepExecution) {
  setTimeout(function () {
    stepExecution('f2 method completed');
  }, 300);
}


// makeexecution([f1,f2]).then(function(){
//    console.log('all methods are done with out step execution');
//});

//makeexecution([f1,f2],true).then(function(){
//    console.log('all methods are done with step execution');
//});
