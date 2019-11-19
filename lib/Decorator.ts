function f() {
    console.log("f(): evaluated");
    // @ts-ignore
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("f(): called");
    }
}

function g() {
    console.log("g(): evaluated");
    // @ts-ignore
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("g(): called");
    }
}

export class C {
    @f()
    @g()
    method() {}
}


function sealed(constructor: Function) {
    console.log(constructor);
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

function logged(constructor: Function) {
    console.log(constructor);
}

@sealed
export class Greeter {
    public greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    @enumerable(false)
    greet() {
        return 'Hello, ' + this.greeting;
    }
}


function classDecorator<T extends {new(...args: any[]): {}}>(constructor:T) {
    return class extends constructor {
        newProperty = "new property";
        hello = "override";
    }
}

function enumerable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log(target);
        descriptor.enumerable = value;
    };
}

function configurable(value: boolean) {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.configurable = value;
    };
}

@logged
export class Greeter2 {
    property = "property";
    hello: string;
    constructor(m: string) {
        this.hello = m;
    }
}

@printable
export class Point {
    private _x: number;
    private _y: number;
    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    @configurable(false)
    get x() { return this._x; }

    @configurable(false)
    get y() { return this._y; }
}


function printable(constructor: Function) {
    constructor.prototype.print = function () {
        console.log(this);
    }
}
