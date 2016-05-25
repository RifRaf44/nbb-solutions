//create interface IEngine with 2 methods: start, stop.
//create class carEngine (implementing IEngine ) with properties horesepower, engineType 
// add start and stop methods with a timeout of 1000ms and 500ms
// use the console to tell the world the engine is starting.
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// create a vehicle class
// with properties engine, make, model
// create class truck with extra properties: pullingCapacity
// create class car with extra properties: seats
// when I call .toString on a car I want to be able to see the make, model, seats
// when I call .toString on a truck I want to be able to see the make, model, pullingCapacity
// example: Hello there I'm a Car , Audi, A4. I have 5 seats
// tip: this.constructor.toString().match(/\w+/g)[1] get the class name
var example07;
(function (example07) {
    /**
     * Engine
     */
    var Engine = (function () {
        function Engine(horesepower, engineType) {
            this.horesepower = horesepower;
            this.engineType = engineType;
        }
        Engine.prototype.start = function () {
            var _this = this;
            setTimeout(function () {
                console.log("Starting engine: " + _this.engineType);
            }, 1000);
        };
        Engine.prototype.stop = function () {
            var _this = this;
            setTimeout(function () {
                console.log("Stopping engine: " + _this.engineType);
            }, 500);
        };
        return Engine;
    }());
    /**
     * Vehicle
     */
    var Vehicle = (function () {
        function Vehicle(engine, make, model) {
            this.engine = engine;
            this.make = make;
            this.model = model;
        }
        Vehicle.prototype.toString = function () {
            return "Hello there I'm a " + this.constructor.toString().match(/\w+/g)[1] + " , " + this.make + ", " + this.model;
        };
        return Vehicle;
    }());
    /**
     * Truck
     */
    var Truck = (function (_super) {
        __extends(Truck, _super);
        function Truck(pullingCapacity, engine, make, model) {
            _super.call(this, engine, make, model);
            this.pullingCapacity = pullingCapacity;
        }
        Truck.prototype.toString = function () {
            return _super.prototype.toString.call(this) + ". I can pull: " + this.pullingCapacity + "kg";
        };
        return Truck;
    }(Vehicle));
    /**
     * Car
     */
    var Car = (function (_super) {
        __extends(Car, _super);
        function Car(seats, engine, make, model) {
            _super.call(this, engine, make, model);
            this.seats = seats;
        }
        Car.prototype.toString = function () {
            return _super.prototype.toString.call(this) + ". I have " + this.seats + " seats";
        };
        return Car;
    }(Vehicle));
    window.onload = function () {
        var carEngine = new Engine(150, "V4");
        var car = new Car(5, carEngine, "Audi", "A4");
        console.log(car.engine.start());
        console.log(car.toString());
        var truckEngine = new Engine(350, "V8");
        console.log(new Truck(5000, truckEngine, "Daf", "D300").toString());
    };
})(example07 || (example07 = {}));
//# sourceMappingURL=script.js.map