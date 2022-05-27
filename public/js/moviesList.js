window.onload = function(){
    let body = document.querySelector('body');
    let moviesListTitulo = document.querySelector('.moviesListTitulo');
    let modo = confirm('Desea modo oscuro');

    /* clase 38 */
    let logo = document.querySelector('figure');
    let agregar = document.querySelector('.botonAgregar')
    if(modo){
        body.style.backgroundColor = '#7f7f7f'
        body.classList.add('fondoMoviesList');
    }
    
    console.log(body);
    moviesListTitulo.innerHTML = 'LISTADO DE PELÍCULAS';
    moviesListTitulo.style.color ='white';
    moviesListTitulo.style.backgroundColor = 'teal';
    moviesListTitulo.style.padding = '20px';

    logo.addEventListener('mouseover', function(){
        body.style.backgroundColor = '#7f7f7f'
    })
    agregar.addEventListener('mouseover', function(){
        this.style.backgroundColor = 'red'
        
    })
}