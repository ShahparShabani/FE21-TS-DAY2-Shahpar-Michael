"use strict";
let vehicles = [];
new Vehicles("John Doe", 32, "https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg");
new Vehicles("BlaName", 32, "https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg");
new Vehicles("Johanna", 32, "https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg");
new Vehicles("Julio", 32, "https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg");
new Motorbikes("John Doe", 32, "https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg", [1, 2, 3, 4, 5]);
new Motorbikes("BlaName", 32, "https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg", [1, 2, 3, 4, 5]);
new Trucks("Johanna", 32, "https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg", [1, 2, 3, 4, 5]);
new Trucks("Julio", 32, "https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg", [1, 2, 3, 4, 5]);
for (let Vehicles of people) {
    document.getElementById("cardExample").innerHTML +=
        Vehicles.printCard();
}
class Vehicles {
    constructor(image, model, kilometersLeft, numberOfSeats, fuelType, yearOfProduction, price) {
        this.image = image;
        this.model = model;
        this.kilometersLeft = kilometersLeft;
        this.numberOfSeats = numberOfSeats;
        this.fuelType = fuelType;
        this.yearOfProduction = yearOfProduction;
        this.price = price;
    }
    startCard() {
        return `<div class="card" style="width: 18rem;">
        <img src="${this.image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${this.model}</h5>
          <p class="card-text">I am ${this.yearOfProduction} years old.</p>`;
    }
    endDiv() {
        return `<a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>`;
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
