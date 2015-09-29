function ClassA(name) {
    this._name = name;

}

ClassA.prototype = {
    get Name() {
        return this._name;
    },
    set Name(name) {
        this._name = name;
    }
};


var objClassA = new ClassA('Murali');


function ClassB(name) {
    var _name = name;
    return {
        get Name() {
            return _name;
        },
        set Name(name) {
            _name = name;
        }
    };
}


var objClassB = new ClassB('Murali');

objClassB.Name = 'Krishna';


var obj1 = new ClassB('Value1');
var obj2 = ClassB('Value2');
