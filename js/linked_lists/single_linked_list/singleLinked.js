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
   * @param {*} node
   * @returns Linked list instance
   */
  appendToList(node) {
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
    let currentPosition = 0;

    if (currentNode.data === data && currentPosition === position) {
      this.deleteHead();
      return this;
    }

    while (currentNode !== null && !deletedFlag) {
      if (currentNode.data === data && currentPosition === position) {
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

    let currentNode = this.head;
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

    let currentNode = this.head;
    while (currentNode != null) {
      array.push(currentNode.data);
      currentNode = currentNode.next;
    }

    return array;
  }

  /**
   * @returns list of nodes in-order after removing duplicates
   */
  removeDuplicatesInPlace() {
    let pivotIterator, pivotIteratorPosition, runnerIterator, runnerIterator2;
    if (this.head === this.tail) {
      return this;
    }

    pivotIterator = this.head;
    runnerIterator2 = this.head;
    while (pivotIterator.next != null) {
      runnerIterator2 = pivotIterator;
      runnerIterator = pivotIterator.next;

      while (runnerIterator != null) {
        if (pivotIterator.data === runnerIterator.data) {
          runnerIterator2.next = runnerIterator.next;
        } else {
          runnerIterator2 = runnerIterator2.next;
        }
        runnerIterator = runnerIterator.next;
      }

      pivotIterator = pivotIterator.next;
    }
    return this.toArray();
  }

  kthFromLast(k) {
    const currentLength = this.length();
    const positionFromTail = k;
    const positionFromHead = currentLength - k;

    let iterator = 0;
    let currentNode = this.head;
    let nodeOfInterest = "null";
    let foundFlag = false;

    while (currentNode != null && !foundFlag) {
      if (iterator === positionFromHead) {
        nodeOfInterest = currentNode;
        foundFlag = true;
        return nodeOfInterest;
      }
      iterator++;
      currentNode = currentNode.next;
    }
  }
}

export default LinkedList;

const linkedListInstance = new LinkedList([1, 1, 1, 2, 3, 42, 1, 2, 2, 3]);
