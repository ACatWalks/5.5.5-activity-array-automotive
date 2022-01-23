//this includes the vehicle class as a module
const VehicleModule = require("./vehicle")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class Car extends Vehicle{
    constructor(make, model, year, color, mileage){
        super(make, model, year, color, mileage);
        //Additional properties for the Car class
        this.maximumPassengers = 6;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 200;
        this.fuel = 100;
        this.scheduleService = false;
    }
    loadPassenger(num){
        let room = true;
        //Must include number of passengers already in car
        if(num + this.passenger > this.maximumPassengers){
            room = false;
        }
    }
    start(){
        let start;
        if(this.fuel > 0){
            start = true;
        } else{
            start = false;
            console.log('No gas in the tank');
        }
    }
    scheduleService(){
        if(this.mileage > 30000){
            this.scheduleService = true;
        }
    }
}