class IceAmericano {
  constructor() {
    this.price = 3000;
  }
  getPrice() {
    return this.price;
  }
  make() {
    console.log("doing sth1");
  }
}

class Latte {
  constructor() {
    this.price = 3500;
  }
  getPrice() {
    return this.price;
  }
  make() {
    console.log("doing sth2");
  }
}

class FlatWhite {
  constructor() {
    this.price = 3500;
  }
  getPrice() {
    return this.price;
  }
  make() {
    console.log("doing sth3");
  }
}

class Caffe {
  static makeCoffee(type) {
    let coffee;
    console.log(`Making ${type}`);
    if (type == "IceAmericano") {
      coffee = new IceAmericano();
    }

    if (type == "Latte") {
      coffee = new Latte();
    }

    if (type == "FlatWhite") {
      coffee = new FlatWhite();
    }
    coffee.make();
    return coffee;
  }
}

let latte = Caffe.makeCoffee("Latte");
console.log(latte.getPrice());

//자식 클래스에 구현체를 정의하고
//타입에 따라 자식 클래스를 반환하는 부모 클래스(팩토리)

//다수의 작은 객체를 만들때 좋음
//객체를 반환하는 함수와 별로 다른게 없다.
