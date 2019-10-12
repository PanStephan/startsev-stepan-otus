function getPath(el) {
  let DOM;
  while (el) {
    DOM = el.localName + (DOM ? '>' + DOM : '');
    if (el.parentElement == null) {
      break;
    }
    el = el.parentElement;
  }
  const DOMLength = document.querySelectorAll(`${DOM}`).length;
  if (DOMLength > 1) {
    for (let i = 0; i < DOMLength; i++) {
      console.log(DOM + ':nth-child('+parseInt(i+2)+')');  //nth-child starts from 2
    }
  } else { return console.log(DOM) }
}

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.navbar__button');
  const navbar = document.querySelector('.navbar-block');
  getPath(btn);
  getPath(navbar);
});