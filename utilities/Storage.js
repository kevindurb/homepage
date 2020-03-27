export class Storage {
  get(id) {
    try {
      const value = localStorage.getItem(id);
      return JSON.parse(value);
    } catch (e) {
      return null;
    }
  }

  set(id, value) {
    localStorage.setItem(id, JSON.stringify(value));
    return this.get(id);
  }
}
