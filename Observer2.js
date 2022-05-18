class WeatherData {
  constructor() {
    this.observers = [];
    this.temperature;
    this.humidity;
    this.pressure;
  }
  register(ob) {
    this.observers.push(ob);
  }
  remove(ob) {
    this.observers = this.observers.filter((obs) => obs !== ob);
  }
  notify() {
    this.observers.forEach((ob) => ob.update());
  }
  measurementsChanged() {
    this.notify();
  }
  setMeasurements(temperature, humidity, pressure) {
    this.temperature = temperature;
    this.humidity = humidity;
    this.pressure = pressure;
    this.measurementsChanged();
  }
  getTemperature() {
    return this.temperature;
  }
  getHumidity() {
    return this.humidity;
  }
  getPressure() {
    return this.pressure;
  }
}

//subject - observer
class CurrentConditionDisplay {
  constructor(weatherData) {
    this.temperature;
    this.pressure;
    this.weatherData = weatherData;
    this.weatherData.register(this);
  }
  update() {
    this.temperature = weatherData.getTemperature();
    this.pressure = weatherData.getPressure();
    console.log("Weather Set on currCoditDsp");
  }
}
class StaticsDisplay {
  constructor(weatherData) {
    this.temperature;
    this.humidity;
    this.weatherData = weatherData;
    this.weatherData.register(this);
  }
  update() {
    this.temperature = weatherData.getTemperature();
    this.humidity = weatherData.getHumidity();
    console.log("Weather Set on StaticsDisplay");
  }
}

let weatherData = new WeatherData();
let currentConditionDisplay = new CurrentConditionDisplay(weatherData);
let staticsDisplay = new StaticsDisplay(weatherData);
weatherData.setMeasurements(40, 80, 80);
console.log(staticsDisplay);
