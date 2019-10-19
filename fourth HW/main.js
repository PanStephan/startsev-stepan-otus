const obj = {
  "id": 1,
  "id1": 2,
  "items": [{
    "id": 2,
    "items": [{ 
      "id": 3
      }]
  }]
};

class MyTree extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const shadow = this.attachShadow({mode: 'open'});
    shadow.innerHTML = `<p>${this.innerHTML}</p>`;
  }
}

class MyLeaf extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const shadow = this.attachShadow({mode: 'open'});
    shadow.innerHTML = `<p>${this.innerHTML}</p>`;
  }
}

function createDOM(obj) {
  if(obj.hasOwnProperty('items')) {
    const tree = setElement('my-tree', 'tree', 'treeEl');
    tree.dataset.id = (`${JSON.stringify(obj.items[0])}`);
    delete obj.items;
    createDOM(JSON.parse(tree.dataset.id));
  }
  Object.keys(obj).map(item => {
    setElement('my-leaf', 'leaf', obj[item])
  })
}

function setElement(name, className, inner) {
  const el = document.createElement(`${name}`);
  el.classList.add(`${className}`);
  el.innerHTML = `${inner}`;
  document.body.appendChild(el);
  return el
}
createDOM(obj);

customElements.define('my-tree', MyTree);
customElements.define('my-leaf', MyLeaf);
