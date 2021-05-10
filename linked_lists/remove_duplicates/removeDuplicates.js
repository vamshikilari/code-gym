import { LinkedList } from "../single_linked_list/singleLinked";

/**
 * @constructor Remove duplicates from a given linked list
 */
class RemoveDuplicatesFromLinkedList extends LinkedList {
  constructor(listOfNodes) {
    super(listOfNodes);
  }

  removeDuplicatesInPlace() {
    let pivotIterator, runnerIterator;
    if (this.head === this.tail) {
      return this;
    }

    pivotIterator = this.head;
    runnerIterator = this.head.next;
    while (pivotIterator.next.next != null) {
      while (runnerIterator.next != null) {
        if (pivotIterator.data === runnerIterator.data) {
        }
        runnerIterator = runnerIterator.next;
      }
    }
  }
}
