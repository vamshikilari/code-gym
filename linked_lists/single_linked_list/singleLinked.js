// single linked list

/**
 * @constructor Node
 */
class Node {
  constructor(data, pointer = null) {
    this.data = data;
    this.next = pointer;
  }
}

/**
 * @constructor single Linked list
 */
export class LinkedList {
  constructor(listOfNodes) {
    this.head = null;
    this.tail = null;
    this.listOfNodes = listOfNodes;
    this.fromArray(listOfNodes);
  }

  /**
   * Prepares a linked list from an array
   * @param {Array<*>} dataArray
   */
  fromArray(dataArray) {
    dataArray.forEach((data) => this.appendToList(data));

    return this;
  }

  /**
   * Adds to last of list
   * @param {*} data
   * @returns Linked list instance
   */
  appendToList(data) {
    const newNode = new Node(node);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }

    this.tail.next = newNode;
    this.tail = newNode;

    return this;
  }

  /**
   * Adds to the start of the list
   * @param {*} data
   * @returns Linked list instance
   */
  prependToList(data) {
    const newNode = new Node(node);

    const prevHead = this.head;

    this.head = newNode;
    this.head.next = prevHead;

    return this;
  }

  /**
   * Removes from the end of list
   */
  removeFromEnd() {
    const deletedTail = this.tail;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    }

    const currentNode = this.head;

    while (currentNode) {
      if (!currentNode.next.next) {
        currentNode.next = null;
      } else {
        currentNode = currentNode.next;
      }
    }

    this.tail = currentNode;

    return deletedTail;
  }

  /**
   * deletes the current head
   */
  deleteHead() {
    if (!this.head) {
      return;
    }
    const deletedHead = this.head;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    }

    this.head = deletedHead.next;
    deletedHead.next = null;
    return deletedHead;
  }

  /**
   * Removes an arbitary node from the list
   * @param {Node} node
   * @param {number} position
   */
  removeFromList(data, position) {
    if (!this.head && !this.tail) {
      return;
    }

    let currentNode = this.head;
    let prevNode = this.head;
    let deletedFlag = false;

    if (currentNode.data === data) {
      deleteHead();
      return this;
    }

    while (currentNode !== null && !deletedFlag) {
      if (currentNode.data === data) {
        prevNode.next = currentNode.next;
        deletedFlag = true;
      }
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
  }

  /**
   * @param {Node} node
   * @param {number} position
   */
  insertIntoList(node, position) {}

  /**
   * @returns current length of the linked list
   */
  length() {
    let length = 0;

    if (this.head == null) {
      return length;
    }

    const currentNode = this.head;
    while (currentNode != null) {
      length = length + 1;
      currentNode = currentNode.next;
    }

    return length;
  }

  /**
   * @returns linked list in an array form
   */
  toArray() {
    let array = [];

    if (this.head == null) {
      return array.length;
    }

    const currentNode = this.head;
    while (currentNode != null) {
      array.push(currentNode.data);
      currentNode = currentNode.next;
    }

    return array;
  }
}
