class IceAmericano {
  constructor() {
    this.price = 3000;
  }
  getPrice() {
    return this.price;
  }
  make() {
    console.log("Making IceAmericano");
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
    console.log("Making Latte");
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
    console.log("Making FlatWhite");
  }
}

class Caffe {
  static makeCoffee(type) {
    if (type == "IceAmericano") {
      return new IceAmericano();
    }

    if (type == "Latte") {
      return new Latte();
    }

    if (type == "FlatWhite") {
      return new FlatWhite();
    }
  }
}

let latte = Caffe.makeCoffee("Latte");
latte.make();
console.log(latte.getPrice());

//자식 클래스에 구현체를 정의하고
//타입에 따라 자식 클래스를 반환하는 부모 클래스(팩토리)

//다수의 작은 객체를 만들때 좋음
//객체를 반환하는 함수와 별로 다른게 없다.
