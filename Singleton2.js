class Singleton {
  static instance;
  constructor() {
    // if (Singleton.instance) return Singleton.instance;
    // Singleton.instance = this;
  }
  static getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = this;
    }
    return Singleton.instance;
  }
}

let singleton = Singleton.getInstance();
let singleton2 = Singleton.getInstance();
console.log(singleton == singleton2);
