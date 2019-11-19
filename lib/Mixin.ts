
class Disposable {
    isDisposed: boolean;
    dispose() {
        this.isDisposed = true;
    }
}

declare var global;
declare var console;

class Activatable {
    isActivate: boolean;
    activate() {
        this.isActivate = true;
    }
    deactivate() {
        this.isActivate = false;
    }
}

export class SmartObject {
    constructor() {
        global.setInterval(() => console.log(this.isActivate + " : " + this.isDisposed), 500);
    }
    interact(){
        this.activate();
    }
}

export interface SmartObject extends Disposable, Activatable {}
applyMixins(SmartObject, [Disposable, Activatable]);


function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            Object.defineProperty(derivedCtor.prototype, name, Object.getOwnPropertyDescriptor(baseCtor.prototype, name));
        });
    });
}


