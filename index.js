// creating a one linked linkedlist and adding functions to linked list

class Node {
  constructor(value) {
    // nodes are created with null values if not mentioned
    this.value = value || null;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor() {
    // headNode of list is null by default
    this.headNode = null;
  }

  // adds a node to end of the list
  append(value) {
    // if the list is empty make the new Node headNode of the list
    if (this.headNode == null) {
      this.headNode = new Node(value);
    } else {
      // if the list is not empty, create a tempnode to move the target node until the last node is reached which's next is null.
      let tempNode = this.headNode;
      while (tempNode.nextNode != null) {
        tempNode = tempNode.nextNode;
      }
      tempNode.nextNode = new Node(value);
    }
  }

  // adds a node to start of the list
  prepend(value) {
    // if the headNode is null, add the node to headNode
    if (this.headNode == null) {
      this.headNode = new Node(value);
    }
    // if the headNode is not null, make a new node, link new node's next with headNode, make the headNode the new node
    else {
      const newNode = new Node(value);
      newNode.nextNode = this.headNode;
      this.headNode = newNode;
    }
  }

  // return the size of the list
  size() {
    // if the list is empty return 0
    if (this.headNode == null) {
      return 0;
    }
    // if the list is not empty start from 1 since headNode is not null and increase while progressing to the last node increase count by 1.
    let count = 1;
    let tempNode = this.headNode;
    while (tempNode.nextNode != null) {
      tempNode = tempNode.nextNode;
      count += 1;
    }
    return count;
  }

  // return the head of the list
  head() {
    // if the headNode is null return null, if not return the headNode
    if (this.headNode == null) {
      return null;
    }
    return this.headNode;
  }

  // return the tail of the list
  tail() {
    // if the headnode is null tail is returned null, if not traverse until next node is null and return when found
    if (this.headNode == null) {
      return null;
    }
    let tempNode = this.headNode;
    while (tempNode.nextNode != null) {
      tempNode = tempNode.nextNode;
    }
    return tempNode;
  }

  // return the node at given index
  at(index) {
    // if the input is negative or the list is empty give an error message
    if (index < 0) {
      return "Enter a positive integer input";
    }
    if (this.headNode == null) {
      return "List is empty";
    }
    // if requirements meet, traverse in a loop until the given index is reached
    let tempNode = this.headNode;
    for (let i = 1; i <= index; i += 1) {
      if (tempNode.nextNode == null) {
        // if the loop encounters a null before finish give an error
        return "List is too short review your input";
      }
      tempNode = tempNode.nextNode;
    }
    return tempNode;
  }

  // remove the last index from the list
  pop() {
    // if the list is not empty apply the function if empty return error.
    if (this.headNode != null) {
      // if list only contains 1 node remove the node
      if (this.headNode.nextNode == null) {
        this.headNode = null;
        // if list contains multiple nodes keep track of previous node to unlink the last node from list
      } else {
        let tempNode = this.headNode;
        let prevNode = null;
        while (tempNode.nextNode != null) {
          prevNode = tempNode;
          tempNode = tempNode.nextNode;
        }
        prevNode.nextNode = null;
      }
    } else return console.log("List is already empty");
  }

  // search the list for given value return true if the list contains the value
  contains(value) {
    let tempNode = this.headNode;
    while (tempNode.nextNode != null) {
      if (tempNode.value === value) {
        return true;
      }
      tempNode = tempNode.nextNode;
    }
    return false;
  }

  // return the index of given value if not found return null
  find(value) {
    if (this.headNode == null) {
      return null;
    }

    let tempNode = this.headNode;
    let index = 0;
    // this loop ends when node is null to return if the last node is searched
    while (tempNode != null) {
      if (tempNode.value === value) {
        return index;
      }
      tempNode = tempNode.nextNode;
      index += 1;
    }
    return null;
  }

  // convert the list into a string ie: (value) -> (value) -> null
  toString() {
    let string = "";
    let tempNode = this.headNode;
    while (tempNode != null) {
      string += ` ( ${tempNode.value} ) -> `;
      tempNode = tempNode.nextNode;
    }
    string += "null";
    return string;
  }

  // add a node at given index with value
  insertAt(index, value) {
    if (index < 0) {
      console.log("Review your index input");
    }
    const newNode = new Node(value);
    if (index === 0) {
      newNode.nextNode = this.headNode;
      this.headNode = newNode;
    } else if (index === 1) {
      newNode.nextNode = this.headNode.nextNode;
      this.headNode.nextNode = newNode;
    } else {
      let prevNode = this.headNode;
      let currNode = this.headNode.nextNode;

      for (let i = 1; i < index; i += 1) {
        prevNode = currNode;
        currNode = currNode.nextNode;
      }
      newNode.nextNode = currNode;
      prevNode.nextNode = newNode;
    }
  }
}

const list = new LinkedList();

list.append(1);
list.append(2);
list.append(3);

list.prepend(4);
list.prepend(5);
list.prepend(6);

list.insertAt(3, 31);

// list.pop();

console.log(list.headNode);
console.log(list.headNode.nextNode);
console.log(list.headNode.nextNode.nextNode);
console.log(list.headNode.nextNode.nextNode.nextNode);
console.log(list.headNode.nextNode.nextNode.nextNode.nextNode);
console.log(list.headNode.nextNode.nextNode.nextNode.nextNode.nextNode);
console.log(
  list.headNode.nextNode.nextNode.nextNode.nextNode.nextNode.nextNode
);

// list.append(3);

// console.log(list.size());
// console.log(list.head());
// console.log(list.tail());
// console.log(list.at(2));
// console.log(list.contains(4));
// console.log(list.find(3));
// console.log(list.toString());
