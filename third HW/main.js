function getPath(el) {

  let DOMArray;
  while(el) {

    DOMArray = el.localName + (DOMArray ? '>' + DOMArray : '');

    if(el.parentElement == null) {
      break;
    }

    el = el.parentElement;
  }
  return DOMArray;
}

document.addEventListener('DOMContentLoaded', () => {

  const btn = document.querySelector('.navbar__button');
  const btnId = document.querySelector('#button');
  const navbar = document.querySelector('.navbar-block');

  console.log(getPath(btn));
  console.log(getPath(navbar));
  console.log(getPath(btnId));
});
