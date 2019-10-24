class LinkedListNode {
  constructor(data) {
    this.data = data;   // data being the actual node.. comparable to index within array
    this.next = null;   // containing null.. because it will be the connector for next node also considered the pointer
  }

  //create the first node
  const head = new LinkedListNode(12);

  //add a second node
  head.next = new LinkedListNode(99);

  //add a third node
  head.next.next = new LinkedListNode(37);
}

// the .next ( or pointer ) starts out as null becaus we do not know the next node\
// the pointer preceding the next node in the list passes the value to the next node as above..
// assigning values in an sequential order
// the first node in a linked list is typically called the head

// traversing array
// the  'next' pointer on each node allows us to traverse the array

// example of traversing array

let current = head;

// null would be the end of linked list
while ( current != null ) {
  console.log(current.data);
  // current acts as the pointer that moves through the linked list
  current = current.next;
}
