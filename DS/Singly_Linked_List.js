class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class SinglyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}
	// Push at end
	push(val) {
		const newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}
	// Pop from end
	pop() {
		if (!this.head) {
			return this.tail;
		}
		let curr = this.head;
		let secondLastEle = null;
		while (curr.next) {
			secondLastEle = curr;
			curr = curr.next;
		}
		let lastEle = secondLastEle.next;
		this.tail = secondLastEle;
		this.tail.next = null;
		this.length--;
		if (!this.length) {
			this.head = null;
			this.tail = null;
		}
		return lastEle;
	}
	// Remove from beginning
	shift() {
		if (!this.head) {
			return this.head;
		}
		let firstEle = this.head;
		this.head = this.head.next;
		this.length--;
		if (!this.length) {
			this.tail = null;
		}
		return firstEle;
	}
	// Adding at beginning
	unshift(val) {
		const newNode = new Node(val);
		const currFirstEle = this.head;
		if (!currFirstEle) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.next = currFirstEle;
			this.head = newNode;
		}
		this.length++;
		return this;
	}
}

let list = new SinglyLinkedList();
list.push("first");
list.push("second");
list.push("third");
console.log(list.pop());
console.log(list);

constj