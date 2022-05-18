//주문 시스템

class Beverage {
  constructors() {
    this.description;
  }
  getDescription() {
    return this.description;
  }
  cost() {}
}

//sub class
class HouseBlend extends Beverage {
  constructor() {
    super(Beverage);
    this.description = "Coffee 1";
  }
  cost() {
    return 0.98;
  }
}
class DarkRoast extends Beverage {
  constructor() {
    super(Beverage);
    this.description = "Coffee 2";
  }
  cost() {
    return 0.98;
  }
}
class Decaf extends Beverage {
  constructor() {
    super(Beverage);
    this.description = "Coffee 3";
  }
  cost() {
    return 0.98;
  }
}
class Espresso extends Beverage {
  constructor() {
    super(Beverage);
    this.description = "Coffee 4";
  }
  cost() {
    return 1.99;
  }
}

//데코레이터 클래스
class CondimentDecorator extends Beverage {
  constructor() {
    super(Beverage);
    this.beverage = new Beverage();
  }
  getDescription() {}
}

//
class Mocha extends CondimentDecorator {
  constructor(beverage) {
    super(CondimentDecorator);
    this.beverage = beverage;
  }
  getDescription() {
    return this.beverage.getDescription() + "모카";
  }
  cost() {
    return this.beverage.cost() + 0.2;
  }
}

let beverage = new HouseBlend();
beverage = new Mocha(beverage);
console.log(beverage.getDescription());
console.log(beverage.cost());
