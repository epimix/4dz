//1
const car = {
  manufacturer: "Toyota",
  model: "Corolla",
  year: 2020,
  speed: 80, 

  showInfo() {
    console.log(`Автомобіль: ${this.manufacturer} ${this.model}, ${this.year} year, speed ${this.speed} km/h`);
  },

  calculateTravelTime(distance) {
    let pureTime = distance / this.speed;
    let breaks = Math.floor(pureTime / 4);
    let totalTime = pureTime + breaks;
    console.log(`time to coevr ${distance} km: ${totalTime} h.`);
  }
};


car.showInfo();
car.calculateTravelTime(640); 

//2
class Fraction {
  constructor(numerator, denominator) {
    this.numerator = numerator;
    this.denominator = denominator;
  }
  add(other) {
    const num = this.numerator * other.denominator + other.numerator * this.denominator;
    const den = this.denominator * other.denominator;
    return new Fraction(num, den);
  }
  subtract(other) {
    const num = this.numerator * other.denominator - other.numerator * this.denominator;
    const den = this.denominator * other.denominator;
    return new Fraction(num, den);
  }
  multiply(other) {
    const num = this.numerator * other.numerator;
    const den = this.denominator * other.denominator;
    return new Fraction(num, den);
  }

  divide(other) {
    const num = this.numerator * other.denominator;
    const den = this.denominator * other.numerator;
    return new Fraction(num, den);
  }

  toString() {
    return `${this.numerator}/${this.denominator}`;
  }
}

const a = new Fraction(2, 4);     
const b = new Fraction(1, 6);

console.log("a =", a.toString()); 
console.log("b =", b.toString());

console.log("Сума:", a.add(b).toString());      
console.log("Різниця:", a.subtract(b).toString()); 
console.log("Добуток:", a.multiply(b).toString()); 
console.log("Ділення:", a.divide(b).toString());

//3
const time = {
  hours: 20,
  minutes: 30,
  seconds: 45,

  show() {
    console.log(`Time: ${this.format(this.hours)}:${this.format(this.minutes)}:${this.format(this.seconds)}`);
  },

  format(unit) {
    return unit.toString().padStart(2, '0');
  },

  addSeconds(sec) {
    this.seconds += sec;
    this.normalize();
  },

  addMinutes(min) {
    this.minutes += min;
    this.normalize();
  },

  addHours(hr) {
    this.hours += hr;
    this.normalize();
  },

  normalize() {
    this.minutes += Math.floor(this.seconds / 60);
    this.seconds = this.seconds % 60;

    this.hours += Math.floor(this.minutes / 60);
    this.minutes = this.minutes % 60;

    this.hours = this.hours % 24;
  }
};

time.show();          
time.addSeconds(30);
time.show();
time.addMinutes(30);
time.show();
time.addHours(3);     
time.show();


