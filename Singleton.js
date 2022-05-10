class Singleton {
  static instance;

  //자바스크립트는 프라이빗이 안된다.
  //타입스크립트를 사용하던가 하자.
  helloCount = 0;

  constructor() {
    if (Singleton.instance) return Singleton.instance;
    this.helloString = "Hello, World!";
    Singleton.instance = this;
  }
  sayHello() {
    console.log(this.helloString);
    this.helloCount++;
  }
}

let classA = new Singleton();
let classB = new Singleton();
console.log("isSame?", classA === classB);
classA.sayHello();
classB.sayHello();
console.log(classA.helloCount, classB.helloCount);
