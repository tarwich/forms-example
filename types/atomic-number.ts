export class AtomicNumber {
  static value = Date.now();

  static get next() {
    return ++this.value;
  }
}
