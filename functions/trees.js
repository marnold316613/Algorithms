const helloWorld = () => {
  console.log('Hello World');
}


class Node {
  constructor(value) {
    this.left=null;
    this.right= null
    this.value=value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root=null;
  }
  insert(value) {
    if (this.root===null)
    {
      this.root = new Node(value);
      return this;
    }
    let checkNode=this.root;
    while(true) {
      if (value>=checkNode.value) {
        //check right
        if (checkNode.right===null) {
          checkNode.right= new Node(value);
          break;
        }
        else {
          checkNode=checkNode.right;
        }
      }
      else {
        if (checkNode.left===null) {
          checkNode.left= new Node(value);
          break;
        }
        else {
          checkNode=checkNode.left;
        }
      }
    }
    return this;
  }
  lookup(value) {
    if (this.root===null)
    {
      return false;
    }
    let checkNode=this.root;
    while(true) {
      if (value===checkNode.value) {
        //value found
        return true;
      } else if(value>checkNode.value) {
        if (checkNode.right!==null) {
        checkNode=checkNode.right;
        } else {
          //not found
          return false;
        }
      } else {
        if (checkNode.left!==null) {
          checkNode=checkNode.left;
        } else {
          // not found
          return false;
        }
      }   
    }
  }
  remove(value) {
    return false;
    //not implemented
  }
  printTree() {

  }
}

















module.exports = {
  helloWorld:helloWorld,
  BinarySearchTree:BinarySearchTree,
}