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
  constructor() {}
  orderPizza(type) {
    let pizza = this.createPizza(type);

    pizza.prepare();
    pizza.bake();
    pizza.cut();
    pizza.box();

    return pizza;
  }
  createPizza(type) {
    throw new Error("createPizz() not defined!");
  }
}
class NYStylePizzaStore extends PizzaStore {
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
class ChicagoStylePizzaStore extends PizzaStore {
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
let pizzaStore = new ChicagoStylePizzaStore();
pizzaStore.orderPizza("1");
