const helloWorld = () => {
  console.log('Hello World');
}

class Node
{
    constructor(value) {
      this.value=value,
      this.next=null,
      this.previous=null
    }
}


class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      previous: null
    }
    this.tail = this.head;  // since there is only one value, the head and tail are the same
    this.length =1;
  }
  append(value) {
    const newNode = new Node(value);
    newNode.previous=this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = new Node(value);
    this.head.previous=newNode;
    newNode.next=this.head;
    this.head=newNode;
    this.length++;
    return this;
  }
  insert(index, value) {
    if (index===0) {
      this.prepend(value);
      return this;
    }
    if (index>=(this.length-1)) {
      this.append(value);
      return this;
    }
    if (index<0) {
      return this;
    }
    
    // we are not inserting at the beginning or the end
    const newNode = new Node(value);
    let counter=0;
    let leader = this.head;
    while(leader!=null)
    {
      counter++;
      if (counter===index)
      {

         const follower=leader.next;
         leader.next=newNode;
         newNode.previous=leader;
         newNode.next=follower;
         follower.previous=newNode;
        break;
      }
      
    }
    this.length++;
    return this;

  }
  remove(index) {
    if (index>=this.length || index<0) {
      return this;
    }
    this.length--;
    if (index===0) {
      this.head===this.head.next;
      this.head.previous=null;
      return;
    }
    let counter=0;
    let leader = this.head;
    while(leader!=null)
    {
      counter++;
      if (counter===index)
      {
        const follower=leader.next;
        const childfollower=follower.next;
        childfollower.previous=leader;
        leader.next=childfollower
        
        break;
      }
      leader=leader.next;
    }
    return this;


  }

  reverse() {

    const reverseList = new LinkedList(this.head.value);
    let checkNode = this.head.next;
    while(checkNode!=null)
    {
      reverseList.prepend(checkNode.value)
      checkNode=checkNode.next;
    }
    this.head=reverseList.head;
    return this;
  }

  printlist(extendedoutput=false) {
    let checkNode = this.head;
    while(checkNode!=null)
    {
    let myoutput=checkNode.value;
     if (extendedoutput) {
     try{myoutput+= ' prev ' + checkNode.previous.value} catch {myoutput += ' prev null'}
     try{myoutput+= ' next ' + checkNode.next.value} catch {myoutput += ' next null';}
     }
     console.log(myoutput);
      checkNode=checkNode.next;
    }
  }
}



module.exports = {
  helloWorld:helloWorld,
  LinkedList:LinkedList
}