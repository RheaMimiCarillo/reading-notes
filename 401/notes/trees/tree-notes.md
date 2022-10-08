# tree stuff

## Terminology:

Root: start of tree

edge: the line that connects nodes together

leaves: nodes that do not have children

complete (tree): the height of the left and right sub-tree differs no more than 1

binary tree: tree in which nodes may only have two children

binary search tree: tree in which nodes are sorted, from left to right (regardless of level), where lower values are on the left and increase in value to the right

- no duplicate node.data

k-ary: tree in which each node may only have a specified number of children nodes (or 'edges') ('k' number of children)

- not typically sorted (but can be)
- 'perfect' and complete tree would where the each 'bottom-slot' is filled

traversing a tree: read all values of the tree

- depth-first traversal: traverse one sub-tree completely, then move right and look at that whole sub-tree's children, ad nauseum
- breadth- first traversal: read all values, from top to bottom, reading all nodes on the same level before going down a level, then looking at all nodes at that level

## traversal process

### Depth :

#### Ordering

in-order: read the left node, then the current/root, then the right

- left -> current -> right

pre-order: read the currentNode (currentRoot), then the left-node, then the right, node

- current -> left -> right

post-order: read the children first, then the current/root node

- left -> right -> current

recursion: utilize callstack to make a Stack of operations to run

- once the stack isn't being added to, it'll pop off the top thing from the stack, and then try to run some more stuff

#### Depth Algorithms:

``` JavaSCript
algorithm PRE_ORDER (recursion-method)
  read CURRENT.VALUE
  if CURRENT.left (not null)
    PRE_ORDER(CURRENT.left)
  if CURRENT.right (not null)
    PRE_ORDER(CURRENT.right)
```

^ if there is a current.left value, call this

### Breadth-first traversal

Read all nodes on the same (vertical) level, from left to right, then move down a level

#### Ordering



#### Breadth Algorithms

``` JavaScript
algorithm BREADTH_FIRST
  declare new QUEUE <- new Queue()

  add root to QUEUE
  while QUEUE is not empty:
    dequeue from front
    log node value
    if left node:
      enqueue left node
    if right node:
      enqueue right node
    
```
