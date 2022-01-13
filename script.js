  var btnOpen = document.querySelector('button');
  var input = document.querySelector('input');

  btnOpen.addEventListener('click', () => {
    window.open('http://www.rslpublic.co.uk/mobiledepboard/WYPTEDefaultMenu.aspx?id='+input.value+'&cid=595&RTI=True', '_blank')
  });
