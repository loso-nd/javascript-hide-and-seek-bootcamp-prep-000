function getFirstSelector(selector){
  return $('#app');
}

const nestedTarget = function() {
  return document.querySelector('#nested .target');
}

const increasedRankBy = (n) => {
  let rankedList =  parseInt(document.querySelector('.ranked-list'), 10);
}

function deepestChild() {
  let node = $('#grand-node'); 
  let nextNode = node.children[0];
  
  while (nextNode){
    node = nextNode;
    nextNode = node.children[0];
  }
  return node;
}

