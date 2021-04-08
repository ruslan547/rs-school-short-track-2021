const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.first = new ListNode();
    this.last = this.first;
    this.count = 0;
  }

  get size() {
    return this.count;
  }

  enqueue(element) {
    this.last.value = element;
    this.last.next = new ListNode();
    this.last = this.last.next;
    this.count++;
  }

  dequeue() {
    const { value } = this.first;
    this.first = this.first.next;
    this.count--;
    return value;
  }
}

module.exports = Queue;
