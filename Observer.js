class Observable {
  constructor() {
    this.observers = [];
  }
  subscribe(func) {
    this.observers.push(func);
  }
  unsubscribe(func) {
    this.observers = this.observers.filter((observers) => observers !== func);
  }
  notify(data) {
    this.observers.forEach((observer) => observer.notified(data));
  }
}

class Observer {
  constructor(_name) {
    this.name = _name;
  }
  notified(data) {
    console.log(`${this.name} got --> ${data}`);
  }
}

//Testing
let observable = new Observable();
let names = ["me", "myself", "I"];
names.forEach((name) => observable.subscribe(new Observer(name)));
observable.notify("Hello?");

///////?
class Todo {
  constructor() {
    this.observers = [];
  }
  subscribe(func) {
    this.observers.push(func);
  }
  addWork(numWork) {
    console.log(`${numWork} works left! <--- Observer`);
    this.observers.forEach((obs) => obs.addWork(numWork));
  }
  doneWork(numWork) {
    this.observers.forEach((obs) => obs.doneWork(numWork));
  }
}
class Descenter {
  constructor() {
    this.numWork = 0;
  }
  addWork(_numWork) {
    this.numWork = _numWork;
  }
  doneWork() {
    this.numWork--;
    console.log(`${this.numWork} left... ---> descenter`);
  }
}
class Ascenter {
  constructor() {
    this.done = 0;
  }
  addWork(_numWork) {
    this.numWork = _numWork;
  }
  doneWork() {
    this.done++;
    console.log(`${this.done} done... ---> ascenter`);
  }
}

let todo = new Todo();
let descenter = new Descenter();
let ascenter = new Ascenter();
todo.subscribe(descenter);
todo.subscribe(ascenter);
todo.addWork(15);
todo.doneWork(1);
todo.doneWork(1);
todo.doneWork(1);
todo.doneWork(1);
