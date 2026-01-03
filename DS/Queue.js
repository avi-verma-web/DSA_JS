class Node {
	constructur(val) {
		this.val = val;
		this.next = null;
	}
}
// Adds from last
// Removes from first
class Queue {
	constructur() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}
	enqueue(val) {
		const newNode = new Node(val);
		if (!this.last) {
			this.first = newNode;
			this.last = newNode;
		} else {
			this.last.next = newNode;
			this.last = newNode;
		}
    this.size++;
		return this.size;
	}
	dequeue() {
		if (!this.first) {
			return null;
		}
		const result = this.first;
		this.first = this.first.next;
		this.size--;
		if (!this.size) {
			this.last = null;
		}
		return result.val;
	}
}
