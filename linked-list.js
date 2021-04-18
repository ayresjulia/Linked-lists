/** Node: node for a singly linked list. */

class Node {
	constructor (val) {
		this.val = val;
		this.next = null;
	}
}

/** LinkedList: chained together nodes. */

class LinkedList {
	constructor (vals = []) {
		this.head = null;
		this.tail = null;
		this.length = 0;

		for (let val of vals) this.push(val);
	}

	/** push(val): add new value to end of list. */

	push (val) {
		let newNode = new Node(val);
		if (!this.head) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
	}

	/** unshift(val): add new value to start of list. */

	unshift (val) {
		let newNode = new Node(val);
		if (this.head === null) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}
		if (this.length === 0) this.tail = this.head;
		this.length++;
	}

	/** pop(): return & remove last item. */

	pop () {
		return this.removeAt(this.length - 1);
	}

	/** shift(): return & remove first item. */

	shift () {
		return this.removeAt(0);
	}

	/** getAt(idx): get val at idx. */

	getAt (idx) {
		let currentNode = this.head;

		let count = 0;
		while (currentNode.val !== null && count !== idx) {
			count++;
			currentNode = currentNode.next;
		}

		return currentNode.val;
	}
}

module.exports = LinkedList;
