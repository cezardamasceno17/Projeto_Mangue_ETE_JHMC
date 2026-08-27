window.addEventListener('scroll', function () {
  const header = document.querySelector('.cabecalho');
  if (window.scrollY > 50) {
    header.classList.add('transparente');
  } else {
    header.classList.remove('transparente');
  }
});