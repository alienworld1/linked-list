import LinkedList from "./linkedlist.js";

const linkedList = new LinkedList('a');

linkedList.append('b');
linkedList.append('c');
linkedList.append('d');
linkedList.append('e');

console.log(linkedList.head.value);
console.log(linkedList.head.next.value);
console.log(linkedList.tail.value);

console.log(linkedList.size);

console.log(linkedList.at(3).value);
