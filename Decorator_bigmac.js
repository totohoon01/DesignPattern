class Hamberger {
  constructor() {
    this.description = "";
  }
  getDescription() {
    return this.description;
  }
}

class Paper extends Hamberger {
  constructor() {
    super(Hamberger);
    this.hamberger = new Hamberger();
  }
  getDescription() {
    return this.description;
  }
}

class Bread extends Paper {
  constructor(hamberger) {
    super(Paper);
    this.hamberger = hamberger;
  }
  getDescription() {
    return "참깨빵" + "\n" + this.hamberger.getDescription();
  }
}
class PureBeef extends Paper {
  constructor(hamberger) {
    super(Paper);
    this.hamberger = hamberger;
  }
  getDescription() {
    return "순 쇠고기 패티" + "\n" + this.hamberger.getDescription();
  }
}
class SpecialSource extends Paper {
  constructor(hamberger) {
    super(Paper);
    this.hamberger = hamberger;
  }
  getDescription() {
    return "특별한 소스" + "\n" + this.hamberger.getDescription();
  }
}
class Cabbage extends Paper {
  constructor(hamberger) {
    super(Paper);
    this.hamberger = hamberger;
  }
  getDescription() {
    return "양상추" + "\n" + this.hamberger.getDescription();
  }
}
class Cheese extends Paper {
  constructor(hamberger) {
    super(Paper);
    this.hamberger = hamberger;
  }
  getDescription() {
    return "치즈" + "\n" + this.hamberger.getDescription();
  }
}
class Peekle extends Paper {
  constructor(hamberger) {
    super(Paper);
    this.hamberger = hamberger;
  }
  getDescription() {
    return "피클" + "\n" + this.hamberger.getDescription();
  }
}
class Onion extends Paper {
  constructor(hamberger) {
    super(Paper);
    this.hamberger = hamberger;
  }
  getDescription() {
    return "양파" + "\n" + this.hamberger.getDescription();
  }
}

let hamberger = new Paper();
hamberger = new Bread(hamberger);
hamberger = new PureBeef(hamberger);
hamberger = new PureBeef(hamberger);
hamberger = new SpecialSource(hamberger);
hamberger = new Cabbage(hamberger);
hamberger = new Cheese(hamberger);
hamberger = new Peekle(hamberger);
hamberger = new Onion(hamberger);
hamberger = new Bread(hamberger);
console.log(hamberger.getDescription());
