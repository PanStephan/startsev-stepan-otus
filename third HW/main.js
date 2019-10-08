function getPath(el) {
  const elementNode = document.querySelectorAll(el);
  console.log(elementNode)
  if (elementNode.length > 1) {
    console.log('bad');
    elementNode.forEach((el) => {
      console.log('el doesnt have unique class');
      console.log(el)
      console.log(el.dataset.uniqueDataSet = `some unique dataset`)
    })
  } else { console.log('el has unique class') }
}

document.addEventListener('DOMContentLoaded', () => {
  getPath('.button');
  getPath('.navbar-block');
});