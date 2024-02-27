function Node(value=null, next=null) {
    return {
        value,
        next,
    }
}

class LinkedList {

    #head;
    #tail;

    constructor(head) {
        this.#head = head;
        this.#tail = head;
    }

    get head() {
        return this.#head;
    }

    get tail() {
        return this.tail;
    }

    append(node) {
        this.#tail.next = node;
        this.#tail = node;
    }


}