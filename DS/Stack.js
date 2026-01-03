/*
first (TOP)                                         last (BOTTOM)
   |                                                     |
   v                                                     v
+--------+      +--------+      +--------+      +--------+
|  40    | ---> |  30    | ---> |  20    | ---> |  10    |
+--------+      +--------+      +--------+      +--------+
                                                     |
                                                     v
                                                   NULL
*/

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class Stack {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	push(val) {
		const newNode = new Node(val);
		if (!this.first) {
			this.first = newNode;
			this.last = newNode;
		} else {
			newNode.next = this.first;
			this.first = newNode;
		}
		this.size++;
		return this.size;
	}

	pop() {
		if (!this.first) {
			return null;
		}
		let res = this.first;
		this.first = this.first.next;
		this.size--;
		if (!this.size) {
			this.first = null;
			this.last = null;
		}
		return res.val;
	}
}

var stack = new Stack();

stack.push(10);
// 1
stack.first.value;
// 10
stack.last.value;
// 10
stack.push(100);
stack.first.value;
// 100
stack.last.value;
// 10
stack.push(1000);
stack.first.value;
// 1000
stack.last.value;
// 10
