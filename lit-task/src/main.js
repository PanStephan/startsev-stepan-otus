import { LitElement, html } from 'lit-element'

class MyTree extends LitElement {

  static get properties() { 
    return {
      tree: { type: Object }
    }
  }

  constructor () {
    super()
    this.tree = {}
  }

  render() {
    return html`
      ${
        Object.values(this.tree).map(el => {
          if(typeof el ===  'object') return html`<my-tree tree=${JSON.stringify(el)}></my-tree>`
          return html`<my-leaf leaf=${el}></my-leaf>`
        })
      }
    `
  }

}

class MyLeaf extends LitElement {

  static get properties() { 
    return {
      leaf: { type: Number }
    }
  }

  constructor () {
    super()
    this.leaf = ''
  }

  render() {
    return html`
      ${
        this.leaf
      }
    `
  }
}

customElements.define('my-tree', MyTree)
customElements.define('my-leaf', MyLeaf)