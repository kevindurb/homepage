export class Container {
  factories = {}

  instances = {}

  set(id, factory) {
    this.factories[id] = factory;
  }

  get(id) {
    if (!this.instances[id]) {
      this.instances[id] = this.factories[id](this);
    }
    return this.instances[id];
  }
}
