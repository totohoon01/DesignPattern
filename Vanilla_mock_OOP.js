class Animal {
  constructor(name) {
    let _name = name;
    this.getName = () => {
      return _name;
    };
    this.setName = (newName) => {
      _name = newName;
    };
  }
  makeSound() {
    throw new Error("makeSound() must be implemented.");
  }
}

class Dog extends Animal {
  constructor(name) {
    super(Animal);
  }
  makeSound() {
    console.log("Bark");
  }
}

let dog = new Dog("dog");
console.log(dog._name); //undifined
dog.makeSound(); // error
