class LinkedList {
  #size = 0;
  #head = null;
  #tail = null;

  constructor() {
    this.#size = 0;
    this.#head = null;
    this.#tail = null;
  }

  append(nodeVal) {
    const newNode = new Node();
    newNode.setValue(nodeVal);
    if (this.size() == 0) {
      this.#tail = newNode;
      this.#head = newNode;
    } else {
      this.#tail.setNext(newNode);
      this.#tail = newNode;
    }
    this.#size++;
  }

  prepend(nodeVal) {
    const newNode = new Node();
    newNode.setValue(nodeVal);
    if (this.size() == 0) {
      this.#head = newNode;
      this.#tail = newNode;
    } else {
      newNode.setNext(head);
      this.#head = newNode;
    }
    this.#size++;
  }

  size() {
    return this.#size;
  }

  head() {
    return this.#head;
  }

  tail() {
    return this.#tail;
  }

  at(index) {
    if (index == 0) {
      return this.#head.getValue();
    }

    let currentNode = this.#head;
    let i = 0;
    while (i < index) {
      currentNode = currentNode.getNext();
      i++;
    }
    return currentNode.getValue();
  }

  #atNode(index) {
    if (index == 0) {
      return this.#head;
    }

    let currentNode = this.#head;
    let i = 0;
    while (i < index) {
      currentNode = currentNode.getNext();
      i++;
    }
    return currentNode;
  }

  pop() {
    if (this.size() == 1 || this.size() == 0) {
      this.#head = null;
      this.#tail = null;
      this.#size = 1; // Prevent negative size
    } else {
      const newTail = this.#atNode(this.size() - 2);
      this.#tail = newTail;
      this.#tail.setNext(null);
    }
    this.#size--;
  }

  contains(value) {
    let currentNode = this.#head;
    let i = 0;
    while (i < this.size()) {
      if (currentNode.getValue() == value) return true;
      currentNode = currentNode.getNext();
      i++;
    }
    return false;
  }

  find(value) {
    let currentNode = this.#head;
    let i = 0;
    while (i < this.size()) {
      if (currentNode.getValue() == value) return i;
      currentNode = currentNode.getNext();
      i++;
    }
    return null;
  }

  toString() {
    let returnStr = "";
    let currentNode = this.#head;
    let i = 0;
    while (i < this.size()) {
      returnStr += `( ${currentNode.getValue()} ) -> `;
      currentNode = currentNode.getNext();
      i++;
    }
    returnStr += ` ${currentNode}`;
    return returnStr;
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

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log("Full list of items: " + list.toString());
console.log("At index 1 (hamster): " + list.at(3));
console.log("Contains snake? (true): " + list.contains("snake"));
console.log("Contains frisbee? (false): " + list.contains("frisbee"));
console.log("Find snake? (5): " + list.find("turtle"));
console.log("Find dog? (0): " + list.find("dog"));
list.pop();
console.log("Tail after pop() (snake): " + list.tail().getValue());

const list2 = new LinkedList();
list2.append("The One Ring");
console.log("New List with one item: " + list2.toString());
console.log("New List size: " + list2.size());
list2.pop()
console.log("New List when popped: " + list2.toString());
list2.pop()
console.log("New List size after pop when empty: " + list2.size());
