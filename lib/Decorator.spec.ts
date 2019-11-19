import {C, Greeter, Greeter2, Point} from "./Decorator";

describe('Decorator Test', () => {

    it('test', () => {

        const dc = new C();

        //dc.method();

        const gr = new Greeter('test');
        console.log(gr.greet());
        gr.greeting = 'dasda';
        console.log(gr.greet());

        const gr2 = new Greeter2('test');

        console.log(gr2);
        console.log(gr2.constructor);
        // @ts-ignore
        console.log(gr2.constructor.name);
        console.log(gr2 instanceof Greeter2);

        for (let name of Object.getOwnPropertyNames(Object.getPrototypeOf(gr))) {
            console.log(name);
        }

        const p = new Point(4,10);
        (<any>p).print();
    });
});
