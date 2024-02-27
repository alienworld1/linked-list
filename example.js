import LinkedList from "./linkedlist.js";

const linkedList = new LinkedList('a');
linkedList.append('c');
linkedList.prepend('b');

console.log(linkedList.head.value);
console.log(linkedList.head.next.value);
console.log(linkedList.tail.value);