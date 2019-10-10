function getPath(el) {
  const DOMArray = [];
  while(el) {
    DOMArray.push(el.localName)

    if(el.parentElement == null) {
      break;
    }

    el = el.parentElement
  }
  const DOM = DOMArray.reduceRight((str, value) => str = str + value + ' ', '');
  console.log(DOM)
}





document.addEventListener('DOMContentLoaded', () => {

  const btn = document.querySelector('.navbar__button');
  const navbar = document.querySelector('.navbar-block')

  console.log(getPath(btn));
  console.log(getPath(navbar));

});
