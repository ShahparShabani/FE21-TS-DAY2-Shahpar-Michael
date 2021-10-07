class Vehicles {
  constructor(
    public image: string,
    public model: string,
    public kilometersLeft: number,
    public numberOfSeats: number,
    public fuelType: string,
    public yearOfProduction: string,
    public price?: number
  ) {
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
  constructor(
    public image: string,
    public model: string,
    public kilometersLeft: number,
    public numberOfSeats: number,
    public fuelType: string,
    public yearOfProduction: string,
    public price: number,
    public hasSidecar: boolean
  ) {
    super(image, model,kilometersLeft, numberOfSeats, fuelType, yearOfProduction, price);
  }
  startCard() {
    return `${super.startCard()}
        <p class="card-text">And it has hasSidecar : (${this.hasSidecar}.</p>`;
  }
}

class Trucks extends Vehicles {
 
  constructor(public image: string,
    public model: string,
    public kilometersLeft: number,
    public numberOfSeats: number,
    public fuelType: string,
    public yearOfProduction: string,
    public price: number,
    public numberOfDoors: number, public numberOfAxels: number) {
    super(image, model,kilometersLeft, numberOfSeats, fuelType, yearOfProduction, price);
  }
  startCard() {
    return `${super.startCard()}
        <p class="card-text">and number of axels are ${this.numberOfAxels}.</p>`;
  }
}

let vehicles: Array<Vehicles> = [];

new Vehicles(
  "https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg","ford torino",
      300, 6,
      "Benzin",
      "2020-01-01"
);
new Vehicles(
  "https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg","ford torino",
      300, 6,
      "Benzin",
      "2020-01-01"
);
new Vehicles(
  "https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg","ford torino",
      300, 6,
      "Benzin",
      "2020-01-01"
);
new Vehicles(
  "https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg","ford torino",
      300, 6,
      "Benzin",
      "2020-01-01"
);

new Motorbikes(
  "https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg","ford torino",
      300, 6,
      "Benzin",
      "2020-01-01", 0 ,true
);
new Motorbikes(
  "https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg","ford torino",
  300, 6,
  "Benzin",
  "2020-01-01", 0,false
);
new Trucks(
  "https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg","ford torino",
  300, 6,
  "Benzin",
  "2020-01-01", 0,2,4
);
new Trucks(
  "https://cdn.pixabay.com/photo/2017/08/30/12/45/girl-2696947_1280.jpg","ford torino",
  300, 6,
  "Benzin",
  "2020-01-01", 0,4, 5
);


for (let vehicle of vehicles) {
  (document.getElementById("cardExample") as HTMLElement).innerHTML +=
    vehicle.printCard();
}
