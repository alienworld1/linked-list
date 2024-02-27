function Node(value=null, next=null) {
    return {
        value,
        next,
    }
}

export default class LinkedList {

    #head;
    #tail;

    constructor(headValue) {
        const head = Node(headValue);
        this.#head = head;
        this.#tail = head;
    }

    get head() {
        return this.#head;
    }

    get tail() {
        return this.#tail;
    }

    append(value) {
        const node = Node(value);
        this.#tail.next = node;
        this.#tail = node;
    }

    prepend(value) {
        const node = Node(value);
        node.next = this.#head;
        this.#head = node;
    }

    get size() {
        let size = 1;
        let node = this.head;

        while (node.next) {
            size++;
            node = node.next;
        }

        return size;
    }

}