window.onload = function () {
  //JavaScript del Index
  let container = document.querySelector('.container');
  let subtitulo = document.querySelector('.subtitulo');
  let destacado = document.querySelectorAll('p');
  let fondo = document.querySelector('body');
  let enlace = document.querySelector('a');
  let nombre = prompt('Ingrese su nombre');
  /* clase 38 */
  let logo = document.querySelector('.logoDH');
  let menuLateral = document.getElementById("menu");

  console.log(nombre);
  if (nombre != '') {
    subtitulo.innerHTML += nombre;
  } else {
    subtitulo.innerHTML += 'INVITADO';
  }

  subtitulo.style.textTransform = 'uppercase';
  let confirmar = confirm('Desea colocar un fondo de pantalla ')
  if (confirmar) {
    fondo.classList.add('fondo');
    enlace.style.color = '#E51B3E';
  }
  console.log(destacado);
  for (let i = 0; i < destacado.length; i++) {
    if (i % 2 == 0) {
      destacado[i].classList.add('destacadoPar');
    } else {
      destacado[i].classList.add('destacadoImpar');
    }
  }


  container.style.display = 'block';

  /* clase 38 */
  logo.addEventListener("click", function () {
    menuLateral.classList.toggle("mostrar")

  });
  menuLateral.addEventListener("mouseout",function(){
    menuLateral.classList.toggle("mostrar")
  })


}


