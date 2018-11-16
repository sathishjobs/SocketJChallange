/**
 * Create a Car class with the following properties – brandName, registrationNumber,
 * current location (X and Y).
 * a. Create an array of car objects with the above class.
 * b. Given coordinates X and Y, can u filter the above array of cars to find cars whose
 * distance is less than 1 KM (assuming all coordinates are on the same scale)
 * 1 KM = 1000 meters
 */

class Car {
    constructor(brandName = null, registrationNumber = null, location = { X: 0, Y: 0 }) {
        this.brandName = brandName;
        this.registrationNumber = registrationNumber;
        this.location = location;
    }
}

let cars = [];

//sample cars 
cars.push(new Car('BMW', 'TN54550U', { X: 100, Y: 1000 }));
cars.push(new Car('AUDI', 'TN52550U', { X: 200, Y: 400 }));
cars.push(new Car('BENZE', 'TK64550U', { X: 1000, Y: 2200 }));
cars.push(new Car('HONDA', 'KN54550U', { X: 600, Y: 1200 }));
cars.push(new Car('BMW-S', 'A54550U', { X: 300, Y: 3000 }));
cars.push(new Car('HONDA-I', 'B54550U', { X: 400, Y: 450 }));
cars.push(new Car('SKODA', 'CN54550U', { X: 100, Y: 990 }));
cars.push(new Car('WOLKSVOGAN', 'DN54550U', { X: 220, Y: 2000 }));
cars.push(new Car('JAGUAR', 'EN54550U', { X: 250, Y: 7000 }));
cars.push(new Car('MINI-COOPER', 'FN54550U', { X: 320, Y: 8100 }));

function findCarsWithDistance(distance) {
    try {
        if (isNaN(distance))
            throw ("It is not a valid distance")
        return cars.filter((car, index, cars) => {
            let carCurrentDistance = Math.abs((car.location.X - car.location.Y))
            return (carCurrentDistance > distance)
        })
    } catch (error) {
        return new Error(error);
    }
}

//1000 meters = 1 km
//you can pass various distances
console.log(findCarsWithDistance(1000));
