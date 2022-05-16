class Duck {
  constructor() {
    this.quackBehavior = new QuackBehavior();
    this.flyBehavior = new FlyBehavior();
  }
  swim() {}
  display() {}

  performQuack() {
    this.quackBehavior.quack();
  }
  performFly() {
    this.flyBehavior.fly();
  }
}

class FlyBehavior {
  fly() {}
}
class FlyWithWing extends FlyBehavior {
  fly() {}
}
class FlyNoWay extends FlyBehavior {
  fly() {}
}

class QuackBehavior {
  quack() {}
}
class Quack extends QuackBehavior {
  quack() {
    console.log("quack");
  }
}
class Squeak extends QuackBehavior {
  quack() {
    console.log("squeak");
  }
}
class MuteQuack extends QuackBehavior {
  quack() {}
}

//구현체
class MallardDuck extends Duck {
  constructor() {
    super(Duck);
    this.quackBehavior = new Quack();
    this.flyBehavior = new FlyWithWing();
  }
}
malDuck = new MallardDuck();
malDuck.performQuack();
