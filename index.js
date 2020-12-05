function getFirstSelector(selector){
  return $('selector');
}

const nestedTarget = function() {
  return document.querySelector('#nested .target');
}

const increasedRankBy = (n) => {
  let rankedList =  parseInt(document.querySelector('.ranked-list'), 10);
}

function deepestChild() {
  let node = $()             
}

function deepestChild() {
  let node = document.getElementById('grand-node')
  let nextNode = node.children[0]
  let node = document.getElementById('grand-node');
  let nextNode = node.children[0];

  while (nextNode) {
    node = nextNode
    nextNode = node.children[0]
    node = nextNode;
    nextNode = node.children[0];
  }

  return node
  return node;
}