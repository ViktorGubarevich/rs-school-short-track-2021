/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.state = [];
    this.top = 0;
  }

  push(e) {
    this.state[this.top] = e;
    this.top += 1;
  }

  pop() {
    if (this.top > 0) {
      this.top -= 1;
    }
    return this.state.pop();
  }

  peek() {
    return this.state[this.top - 1];
  }
}

module.exports = Stack;
