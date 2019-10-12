function getPath(el) {
  let DOM = [];
  while (el) {
    DOM.unshift(el);
    el = el.parentElement;
  }
  return console.log(DOM.map((elem) => {
    let index = Array.prototype.indexOf.call(elem.parentNode.children, elem) + 1;
    return `${elem.localName}:nth-child(${index})`
  }).join('>'))
}

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.navbar__button');
  const navbar = document.querySelector('.navbar-block');
  const btnId = document.querySelector('#button');
  getPath(btn);
  getPath(navbar);
  getPath(btnId);
});