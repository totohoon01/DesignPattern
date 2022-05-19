class Pizza {
  prepare() {}
  bake() {}
  cut() {}
  box() {}
}

class Pizza1 extends Pizza {}
class Pizza2 extends Pizza {}
class Pizza3 extends Pizza {}
class Pizza4 extends Pizza {}
class Pizza5 extends Pizza {}

class PizzaStore {
  constructor(factory) {
    this.factory = factory;
  }
  orderPizza(type) {
    let pizza = this.factory.createPizza(type);

    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();

    return pizza;
  }
}

class SimplePizzaFactory {
  constructor() {
    this.pizza;
  }
  createPizza(type) {
    if (type == "1") {
      this.pizza = new Pizza1();
    }
    if (type == "2") {
      this.pizza = new Pizza2();
    }
    if (type == "3") {
      this.pizza = new Pizza3();
    }
    if (type == "4") {
      this.pizza = new Pizza4();
    }
    if (type == "5") {
      this.pizza = new Pizza5();
    }
    return this.pizza;
  }
}

let pizzaFactory = new SimplePizzaFactory();
let pizzaStore = new PizzaStore(pizzaFactory);
pizzaStore.orderPizza("1");
