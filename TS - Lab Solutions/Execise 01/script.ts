//create interface IEngine with 2 methods: start, stop.
//create class carEngine (implementing IEngine ) with properties horesepower, engineType 
// add start and stop methods with a timeout of 1000ms and 500ms
// use the console to tell the world the engine is starting.

// create a vehicle class
// with properties engine, make, model

// create class truck with extra properties: pullingCapacity
// create class car with extra properties: seats

// when I call .toString on a car I want to be able to see the make, model, seats
// when I call .toString on a truck I want to be able to see the make, model, pullingCapacity
// example: Hello there I'm a Car , Audi, A4. I have 5 seats

// tip: this.constructor.toString().match(/\w+/g)[1] get the class name

module example07 {


    interface IEngine {
        start(): void
        stop(): void
    }
    /**
     * Engine
     */
    class Engine implements IEngine {
        constructor(public horesepower: number, public engineType: string) { }

        start(): void {
            setTimeout(() => {
                console.log("Starting engine: " + this.engineType);
            }, 1000);
        }
        stop(): void {
            setTimeout(() => {
                console.log("Stopping engine: " + this.engineType);
            }, 500);
        }
    }
    /**
     * Vehicle
     */
    class Vehicle {
        constructor(public engine: Engine, public make: string, public model: string) { }

        toString() {
            return "Hello there I'm a " + this.constructor.toString().match(/\w+/g)[1] + " , " + this.make + ", " + this.model;
        }
    }

    /**
     * Truck
     */
    class Truck extends Vehicle {
        constructor(public pullingCapacity: number, engine: Engine, make: string, model: string) {
            super(engine, make, model);
        }

        toString() {
            return super.toString() + ". I can pull: " + this.pullingCapacity + "kg";
        }
    }

    /**
     * Car
     */
    class Car extends Vehicle {
        constructor(public seats: number, engine: Engine, make: string, model: string) {
            super(engine, make, model);
        }

        toString() {
            return super.toString() + ". I have " + this.seats + " seats";
        }
    }

    window.onload = () => {

        var carEngine = new Engine(150, "V4");
        var car = new Car(5, carEngine, "Audi", "A4");
        console.log(car.engine.start());
        console.log(car.toString());


        var truckEngine = new Engine(350, "V8");
        console.log(new Truck(5000, truckEngine, "Daf", "D300").toString())
    }
}