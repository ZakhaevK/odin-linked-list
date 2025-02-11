class LinkedList {
  #size = 0;
  #head = null;
  #tail = null;

  constructor() {}

  append(Node) {
    this.#tail.setNext(Node);
    this.#size++;
    tail = Node;
  }

  prepend(Node) {
    Node.setNext(head);
    this.#head = Node;
    this.#size++;
  }

  size() {
    return this.#size;
  }
}


class Node {
  #value = null;
  #nextNode = null;

  constructor() {}

  setValue(val) {
    this.#value = val;
  }

  setNext(Node) {
    this.#nextNode = Node;
  }

  getValue() {
    return this.#value;
  }

  getNext() {
    return this.#nextNode;
  }
}
