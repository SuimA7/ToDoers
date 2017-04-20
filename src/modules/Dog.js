export default class {
  constructor(name) {
    this.name = name;
  }
  eat(food) {
    return `${this.name} eats ${food}.`;
  }
}