let Car = (function() {
    function Car() {}
    Car.prototype.start = function() {
        console.log("Car has started");
    };
    Car.prototype.drive = function() {
        console.log("Car is in drive mode");
    };
    Car.prototype.getPosition = function() {
        console.log("GPS coordinates are: 192.168.111,125,255,255.6");
    };
    return Car;
}());
let Helicopter = (function() {
    function Helicopter() {}
    Helicopter.prototype.takeoff = function() {
        console.log("Helicopter has started taking off");
    };
    Helicopter.prototype.fly = function() {
        console.log("Helicopter is now in flying mode");
    };
    Helicopter.prototype.landing = function() {
        console.log("Helicopter is landing ");
    };
    return Helicopter;
}());
let FlyingCar = (function() {
    function FlyingCar() {}
    FlyingCar.prototype.start = function() {
        console.log("Flying Car has started");
    };
    FlyingCar.prototype.drive = function() {
        console.log("FlyingCar is in drive mode");
    };
    FlyingCar.prototype.getPosition = function() {
        console.log("GPS coordinates are: 192.168.111,125,255,255.6");
    };
    FlyingCar.prototype.takeoff = function() {
        console.log("Flying Car has started taking off");
    };
    FlyingCar.prototype.fly = function() {
        console.log("Flying is now in flying mode");
    };
    FlyingCar.prototype.landing = function() {
        console.log("Flying Car is landing ");
    };
    return FlyingCar;
}());
let car = new Car();
car.drive();
car.start();
car.getPosition();
let heli = new Helicopter();
heli.takeoff();
heli.fly();
heli.landing();
let fly = new FlyingCar();
fly.start();
fly.drive();
fly.getPosition();
fly.takeoff();
fly.fly();
fly.landing();
