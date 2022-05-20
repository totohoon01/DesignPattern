class Boiler {
  static instance;
  static getInstance() {
    if (!Boiler.instance) {
      Boiler.instance = this;
    }
    return Boiler.instance;
  }
  constructor() {
    throw new Error("not a object");
  }

  static number = 1;

  static addNum() {
    Boiler.number++;
  }
}

let boiler = Boiler.getInstance();
boiler.addNum();
console.log(boiler.number);

//모든 변수를 static으로 선언해야함?
