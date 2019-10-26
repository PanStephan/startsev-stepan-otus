class MyTree extends HTMLElement {

  constructor() {
    super();
    const obj = document.querySelector('my-tree').dataset.id;
    debugger
    this.createDOM(JSON.parse(obj));
  }

  connectedCallback() {
    const shadow = this.attachShadow({mode: 'open'});
    shadow.innerHTML = `<p>${this.innerHTML}</p>`;
  }

  createDOM(obj) {
    if(obj.hasOwnProperty('items')) {
      debugger
      const tree = this.setElement('my-tree', 'tree', 'treeEl');
      tree.dataset.id = (`${JSON.stringify(obj.items[0])}`);
      delete obj.items;
      this.createDOM(JSON.parse(tree.dataset.id));
    }
    Object.keys(obj).map(item => {
      this.setElement('my-leaf', 'leaf', obj[item])
    })
  }

  setElement(name, className, inner) {
    debugger
    const el = document.createElement(`${name}`);
    el.classList.add(`${className}`);
    el.innerHTML = `${inner}`;
    document.body.appendChild(el);
    return el
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

// const tree = new MyTree();
// console.log(tree)

customElements.define('my-tree', MyTree);
customElements.define('my-leaf', MyLeaf);
