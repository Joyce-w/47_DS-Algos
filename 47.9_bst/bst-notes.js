class Node {
    //pass parameter with a default val
    constructor(val, left=null, right=null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}


//make nodes
const E = new Node('E');
const A = new Node('A');
const B = new Node('B');
const C = new Node('C');
const D = new Node('D');
const F = new Node('F');
const G = new Node('G');

//connect them
E.left = B;
E.right = G;
B.left = A;
B.right = D;
G.left = F;

//create method that inserts at correct spot

//tree class
class Tree{
    constructor(root=null) {
        this.root = root;
    }
}

//make a tree
const tree = new Tree(E)




//////////method written in node class///////////////
class Node {
    //pass parameter with a default val
    constructor(val, left=null, right=null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
    //does not require stack/queue because we only need to visit one child
    find(sought) {
        //this allows for calling on any of these nodes and search on a subtree
        let currentNode = this;
        //loop
        while (currentNode) {
            console.log('visiting', currentNode.val)
            //check node
            if (currentNode.val === sought) return currentNode;
            //if val is less than the currentNode.val, look at the left side
            if (currentNode.val > sought) {
                currentNode = currentNode.left;
            } else {
                currentNode = currentNode.right;
            }
        }
    }

}


//tree class
class BinarySearchTree{
    constructor(root=null) {
        this.root = root;
    }
    
    //2. recurse with what ever the node is (node=this.root)
    /**Inorder traversal will run left, root, right */
    traverseInOrder(node=this.root) {
        //1. node does not exist at the moment
        if(node.left) this.traverse(node.left)
        console.log(node.val)
        //call traverse on left or right
        if(node.right) this.traverse(node.right)
    }
    /**Preorder traversal will run root, left, right*/
    traversePreOrder(node = this.root) {
        console.log(node.val);
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
    }
    /**Post Order traversal will run left, right, root */
    traversePostOrder(node=this.root) {
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
    console.log(node.val);
    }
}

const E = new Node('E');
const A = new Node('A');
const B = new Node('B');
const C = new Node('C');
const D = new Node('D');
const F = new Node('F');
const G = new Node('G');

E.left = B;
E.right = G;
B.left = A;
B.right = D;
G.left = F;

const tree = new BinarySearchTree(E);
