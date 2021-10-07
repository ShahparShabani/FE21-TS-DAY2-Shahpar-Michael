"use strict";
class Vehicles {
    constructor(image, model, kilometersLeft, numberOfSeats, fuelType, yearOfProduction, price) {
        this.image = image;
        this.model = model;
        this.kilometersLeft = kilometersLeft;
        this.numberOfSeats = numberOfSeats;
        this.fuelType = fuelType;
        this.yearOfProduction = yearOfProduction;
        this.price = price;
        vehicles.push(this);
    }
    startCard() {
        return `<div class="col"><div class="card" style="width: 18rem;">
        <img src="${this.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${this.model}</h5>
          <p class="card-text">I am ${this.yearOfProduction} years old.</p>`;
    }
    endDiv() {
        return `<a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div></div>`;
    }
    printCard() {
        return this.startCard() + this.endDiv();
    }
}
class Motorbikes extends Vehicles {
    constructor(image, model, kilometersLeft, numberOfSeats, fuelType, yearOfProduction, price, hasSidecar) {
        super(image, model, kilometersLeft, numberOfSeats, fuelType, yearOfProduction, price);
        this.image = image;
        this.model = model;
        this.kilometersLeft = kilometersLeft;
        this.numberOfSeats = numberOfSeats;
        this.fuelType = fuelType;
        this.yearOfProduction = yearOfProduction;
        this.price = price;
        this.hasSidecar = hasSidecar;
    }
    startCard() {
        return `${super.startCard()}
        <p class="card-text">And it has hasSidecar : (${this.hasSidecar}.</p>`;
    }
}
class Trucks extends Vehicles {
    constructor(image, model, kilometersLeft, numberOfSeats, fuelType, yearOfProduction, price, numberOfDoors, numberOfAxels) {
        super(image, model, kilometersLeft, numberOfSeats, fuelType, yearOfProduction, price);
        this.image = image;
        this.model = model;
        this.kilometersLeft = kilometersLeft;
        this.numberOfSeats = numberOfSeats;
        this.fuelType = fuelType;
        this.yearOfProduction = yearOfProduction;
        this.price = price;
        this.numberOfDoors = numberOfDoors;
        this.numberOfAxels = numberOfAxels;
    }
    startCard() {
        return `${super.startCard()}
        <p class="card-text">and number of axels are ${this.numberOfAxels}.</p>`;
    }
}
let vehicles = [];
new Vehicles("https://cdn.pixabay.com/photo/2017/03/27/14/56/auto-2179220_1280.jpg", "Mercedes-Benz", 300, 6, "Benzin", "2020-01-01");
new Vehicles("https://cdn.pixabay.com/photo/2021/09/16/03/35/mercury-montclair-6628215__480.jpg", "ford torino", 300, 6, "Benzin", "2020-01-01");
new Vehicles("https://cdn.pixabay.com/photo/2015/09/02/12/25/bmw-918408_1280.jpg", "BMW", 300, 6, "Benzin", "2020-01-01");
new Vehicles("https://cdn.pixabay.com/photo/2019/07/07/14/03/fiat-4322521__340.jpg", "ford torino", 300, 6, "Benzin", "2020-01-01");
new Motorbikes("https://cdn.pixabay.com/photo/2018/06/27/17/29/motorbike-3502133__340.jpg", "ford torino", 300, 6, "Benzin", "2020-01-01", 0, true);
new Motorbikes("https://cdn.pixabay.com/photo/2017/01/11/15/26/harley-1972061__480.jpg", "ford torino", 300, 6, "Benzin", "2020-01-01", 0, false);
new Trucks("https://media.istockphoto.com/photos/truck-with-container-on-road-cargo-transportation-concept-picture-id1178046269?b=1&k=20&m=1178046269&s=170667a&w=0&h=i4jImQ3JYqigMXIa4-hLzxqVhwTZHmKFDzjnJFRpl0E=", "Truck Benz", 300, 6, "Benzin", "2020-01-01", 0, 2, 4);
new Trucks("https://media.istockphoto.com/photos/red-semi-trailer-lorry-truck-passing-on-a-highway-at-sunset-picture-id1278747609?b=1&k=20&m=1278747609&s=170667a&w=0&h=sw54GdRdlac3egPzKwQRMUoJnhdKmucr5oT0qivcTQU=", "Truck ford", 300, 6, "Benzin", "2020-01-01", 0, 4, 5);
for (let vehicle of vehicles) {
    document.getElementById("cardExample").innerHTML +=
        vehicle.printCard();
}
