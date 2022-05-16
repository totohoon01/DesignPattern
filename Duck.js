class Duck {
  constructor() {}
  swim() {}
  display() {
    console.log("SSSSSSSSuuuuuuuperDuck");
  }

  quack() {}
  //fly를 추가한다.
  fly() {
    console.log("Me Fly");
  } // RubberDuck Fly!!!!

  //특수 메소드를 인터페이스로 분리한다면??
  //동작별로 인터페이스를 오버라이드 해줘야한다.

  //Duck에서 quack와 fly만 달라지는 부분
}

class MallardDuck extends Duck {
  display() {
    console.log("MallardDuck");
  }
}

class ReadHeadDuck extends Duck {
  display() {
    console.log("ReadHeadDuck");
  }
}
class RubberDuck extends Duck {
  display() {
    console.log("RubberDuck");
  }
  fly() {
    return;
    //What if we have 50 Ducks?
    //Override All???
  }
}

//상위 형식에 맞추어서 프로그래밍 하라
class Animal {
  constructor() {}
  makeSound() {}
}

class Dog extends Animal {
  makeSound() {
    this.bark();
  }
  bark() {
    console.log("bark!");
  }
}
class Cat extends Animal {
  makeSound() {
    this.meow();
  }
  meow() {
    console.log("meow");
  }
}

pet = new Dog();
pet.makeSound();
