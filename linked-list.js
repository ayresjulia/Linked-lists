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

	/** get helper function for setAt and insertAt to get Node obj from idx */

	get (idx) {
		let counter = 0;
		let currentNode = this.head;

		while (currentNode !== null && counter !== idx) {
			counter++;
			currentNode = currentNode.next;
		}
		return currentNode;
	}

	/** setAt(idx, val): set val at idx to val */

	setAt (idx, val) {
		let currentNodeObj = this.get(idx);
		currentNodeObj.val = val;
	}

	/** insertAt(idx, val): add node w/val before idx. */

	insertAt (idx, val) {
		// if the list is empty i.e. head = null
		if (!this.head) {
			this.head = new Node(val);
			this.tail = new Node(val);
			this.length++;
			return;
		}
		// if new node needs to be inserted at the front of the list
		if (idx === 0) return this.unshift(val);

		// if new node needs to be inserted at the end of the list
		if (idx === this.length) return this.push(val);

		// use get() to find the previous node and insert at that index
		const previous = this.get(idx - 1);
		let newNode = new Node(val);
		newNode.next = previous.next;
		previous.next = newNode;

		this.length++;
	}

	/** removeAt(idx): return & remove item at idx */

	removeAt (idx) {
		if (idx >= this.length || idx < 0) {
			throw new Error("Invalid index.");
		}

		// remove at the beginning

		if (idx === 0) {
			let val = this.head.val;
			this.head = this.head.next;
			this.length -= 1;
			if (this.length < 2) this.tail = this.head;
			return val;
		}

		let prev = this.get(idx - 1);

		// remove at the end

		if (idx === this.length - 1) {
			let val = prev.next.val;
			prev.next = null;
			this.tail = prev;
			this.length -= 1;
			return val;
		}

		// remove in middle

		let val = prev.next.val;
		prev.next = prev.next.next;
		this.length -= 1;
		return val;
	}
}

module.exports = LinkedList;
