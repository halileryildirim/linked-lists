class Node {
  constructor(value) {
    this.value == value || null;
    this.nextNode == null;
  }
}

class linkedList {
  constructor() {
    this.headNode = null;
  }

  append(value) {
    if (this.headNode == null) {
      this.headNode = new Node(value);
    } else {
      let tempNode = this.headNode;
      while (tempNode.next != null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new Node(value);
    }
  }
}

console.log("test");
