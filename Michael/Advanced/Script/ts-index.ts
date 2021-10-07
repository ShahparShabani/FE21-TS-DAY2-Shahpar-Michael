var arry:Array<Vehicles>=[];
class Vehicles{
    constructor(public image:string, public model:string, public wheels:number,public seatNumber:number, public id:number){
        arry.push(this); 
    }
    price(){
        let a=this.wheels+this.seatNumber+10000
        return `This vehicle costs ${a} Euros.`
    }
    cardGeneral(){
        (document.getElementById("grid")as HTMLElement).innerHTML+=`<div class="col-lg-3"><div class="card" style="width: 18rem;">
  <img src="${this.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Model: ${this.model}</h5>
    <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal-${this.id}">
  More Info
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal-${this.id}" tabindex="-1" aria-labelledby="exampleModalLabel-${this.id}" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel-${this.id}">Model: ${this.model}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="card" style="width: 18rem;">
  <img src="${this.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5>Wheels: ${this.wheels}</h5>
    <h5>Wheels: ${this.seatNumber}</h5>
    <h5 class="my-message"></h5>
  </div>
</div>
      </div>
      <div class="modal-footer">
        <button type="button" class="my-price btn btn-primary">Show price</button>
      </div>
    </div>
  </div>
</div>
  </div>
</div></div>`
    }
    }
class Motorbike extends Vehicles{
    constructor(public image:string, public model:string, public wheels:number, public seatNumber:number, public id:number, public fType:string, public kmLeft:number){
        
        super(image, model, wheels, seatNumber, id);
        this.seatNumber=1;
    }
    price(){
        let a=this.wheels+this.seatNumber+8000/this.kmLeft;
        return `This vehicle costs ${a} Euros.`
    }
    cardGeneral(){
        (document.getElementById("grid")as HTMLElement).innerHTML+=`<div class="col-lg-3"><div class="card" style="width: 18rem;">
  <img src="${this.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Model:${this.model}</h5>
    <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal-${this.id}">
  More Info
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal-${this.id}" tabindex="-1" aria-labelledby="exampleModalLabel-${this.id}" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel-${this.id}">Model: ${this.model}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="card" style="width: 18rem;">
  <img src="${this.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5>Wheels: ${this.wheels}</h5>
    <h5>Seats: ${this.seatNumber}</h5>
    <h5>Fuel: ${this.fType}</h5>
    <h5>Km left: ${this.kmLeft}</h5>
    <h5 class="my-message"></h5>
  </div>
</div>
      </div>
      <div class="modal-footer">
        <button type="button" class="my-price btn btn-primary">Show price</button>
      </div>
    </div>
  </div>
</div>
  </div>
</div></div>`
}
}
class Truck extends Vehicles{
    constructor(public image:string, public model:string, public wheels:number,public seatNumber:number, public id:number, public fType:string, public description:string ){
        super( image, model, wheels, seatNumber, id);
    }
    price(){
        let a=this.wheels+this.seatNumber+8000*this.seatNumber;
        return `This vehicle costs ${a} Euros.`
    }
    cardGeneral(){
        (document.getElementById("grid")as HTMLElement).innerHTML+=`<div class="col-lg-3"><div class="card" style="width: 18rem;">
  <img src="${this.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Model: ${this.model}</h5>
    <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal-${this.id}">
  More Info
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal-${this.id}" tabindex="-1" aria-labelledby="exampleModalLabel-${this.id}" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel-${this.id}">Model: ${this.model}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="card" style="width: 18rem;">
  <img src="${this.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5>Wheels: ${this.wheels}</h5>
    <h5>Seats: ${this.seatNumber}</h5>
    <h5>Fuel: ${this.fType}</h5>
    <p class="card-text">${this.description}</p>
    <h5 class="my-message"></h5>
  </div>
</div>
      </div>
      <div class="modal-footer">
        <button type="button" class="my-price btn btn-primary">Show price</button>
      </div>
    </div>
  </div>
</div>
  </div>
</div></div>`
}
}
let boat=new Vehicles("https://images.pexels.com/photos/1555313/pexels-photo-1555313.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940","AA",0,6,1111);
let bicycle= new Vehicles("https://images.pexels.com/photos/5464925/pexels-photo-5464925.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940","BB",2,1,2222);
let motorbike=new Motorbike("https://images.pexels.com/photos/39693/motorcycle-racer-racing-race-speed-39693.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940","CC",2,1,3333,"Benzin",10000);
let truck=new Truck("https://images.pexels.com/photos/3089685/pexels-photo-3089685.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940","DD",8,3,4444,"Diesel","Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, voluptatum repellat neque vitae voluptatem fugiat.");
for (const val of arry) {
    val.cardGeneral();
}
for (let index = 0; index < arry.length; index++) {
    let d=(document.getElementsByClassName("my-price")[index] as HTMLElement);
    d.addEventListener("click",function () {
        (document.getElementsByClassName("my-message")[index] as HTMLElement).innerHTML=arry[index].price();
    })
    
}