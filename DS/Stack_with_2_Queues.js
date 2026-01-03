class Stack {
	constructor() {
		this.mainQ = new Queue();
		this.helperQ = new Queue();
	}
	push(val) {
		if (!this.mainQ.size) {
			this.mainQ.enqueue(val);
			return this;
		}
		this.helperQ.enqueue(val);
		while (this.mainQ.size !== 0) {
			const ele = this.mainQ.dequeue();
			this.helperQ.enqueue(ele);
		}
		const temp = this.mainQ;
		this.mainQ = this.helperQ;
		this.helperQ = temp;
		return this;
	}
	pop() {
		return this.mainQ.dequeue();
	}
}

// QUEUE AND NODE HAVE BEEN IMPLEMENTED FOR YOU

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}
	enqueue(data) {
		var node = new Node(data);

		if (!this.first) {
			this.first = node;
			this.last = node;
		} else {
			this.last.next = node;
			this.last = node;
		}

		return ++this.size;
	}

	dequeue() {
		if (!this.first) return null;

		var temp = this.first;
		if (this.first == this.last) {
			this.last = null;
		}
		this.first = this.first.next;
		this.size--;
		return temp.value;
	}
}
