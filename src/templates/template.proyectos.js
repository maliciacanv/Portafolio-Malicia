export const proyectos = () => {
  const templateProyectos = `
    <div class="work">
    <div class="container-cards">
      <div class="card">
      <div class="image">
        <img src="../imagenes/dtalover.png" class="card-imagen"/>
      </div>
      <div class="details">
      <div class="center">
        <h1 class="card-title">DATA LOVERS<br><span class="card-span">LEAGE OF LEGENDS</span></h1>
        <p class="card-text">El reto Data Lovers, esta conformado por 2 personas y la tarea es crear una página web.
        La temática es el videojuego League of legends, para ello hicimos una encuesta online a 20 personas para saber que información 
        les interesaría ver de dicho videojuego, por eso la página league of legends permite al jugador ver todos los campeones, filtrar por roles, 
        ordenarlos ascendente y descendente, muestra un top 10 de los mejores y la estadística según su nivel de vida.
        <br/>
        Tecnología utilizada: HTML 5, JavaScript, Archivo JSON, Métodos de arrays y objetos, CSS 3, Templates, Testing, Responsive Desing..</p>
        <ul class="card-list">
          <li class="card-li"><a href="https://github.com/maliciacanv/lim-2018-11-bc-core-am-data-lovers/src/" target="blank"><button type="button" id="btn-web" class="btn btn-outline-secondary">Ver sitio web <i class="far fa-newspaper"></i></button></a></li>
          <li class="card-li"><a href="https://maliciacanv.github.io/lim-2018-11-bc-core-am-data-lovers" target="blank"><button type="button" id="btn" class="btn btn-outline-warning">Ver repositorio <i class="fab fa-github"></i></button></a></li>              
        </ul>
      </div>
      </div>
      </div>
      <div class="card">
      <div class="image">
        <img src="../imagenes/red.png" class="card-imagen"/>
      </div>
      <div class="details">
      <div class="center">
        <h1 class="card-title">Red social<br><span class="card-span">Agogo</span></h1>
        <p class="card-text">El reto Red Social, esta conformado por 3 personas. Despues de una encuesta online a 20 personas, creamos la red social llamada Agogo que tiene como finalidad que los usuarios puedean dar y recibir 
        recomendaciones a traves de post y tiene las siguientes funcionalidades:
        1.Login con google, facebook y twitter, y un registro.
        2.Crear un post con su nombre y foto, opción de público o privado.
        3.Editar, eliminar y dar likes a posts.<br/>
        Tecnología utilizada: Firebase Authentication y Cloud Firestore, HTML 5, JavaScript, CSS 3, Modules Import y export, Testing, SPA, Templates, Responsive Desing.</p>
        <ul class="card-list">
          <li class="card-li"><a href="https://github.com/maliciacanv/LIM008-social-network/src/" target="blank"><button type="button" id="btn-web" class="btn btn-outline-secondary">Ver sitio web <i class="far fa-newspaper"></i></button></a></li>
          <li class="card-li"><a href="https://gabrieladiazb.github.io/LIM008-social-network" target="blank"><button type="button" id="btn" class="btn btn-outline-warning">Ver repositorio <i class="fab fa-github"></i></button></a></li>              
        </ul>
      </div>
      </div>
      </div>
      <div class="card">
      <div class="image">
        <img src="../imagenes/libreria.png" class="card-imagen"/>
      </div>
      <div class="details">
      <div class="center">
        <h1 class="card-title">MARKDOWN<br><span class="card-span">md-links</span></h1>
        <p class="card-text">El reto Markdown Links, es individual y la tarea es crear una librería para programadores, que cumple la función de analizar la ruta ingresada e identificar los archivos
        con extención Md, recopilar los links y mostrarlos, además tiene opcion para validar y calcular estadística de los links.        
        <br/>
        Tecnología utilizada: Node js, Librería Fetch, JavaScript, Funciones Asíncronas Promesas, Testing.</p>
        <ul class="card-list">
          <li class="card-li"><a href="https://github.com/maliciacanv/LIM008-fe-md-links" target="blank"><button type="button" id="btn" class="btn btn-outline-warning">Ver repositorio <i class="fab fa-github"></i></button></a></li>
        </ul>
      </div>
      </div>
      </div>
      <div class="card">
      <div class="image">
        <img src="../imagenes/fondo1.png" class="card-imagen"/>
      </div>
      <div class="details">
      <div class="center">
        <h1 class="card-title">Burger Queen<br><span class="card-span">BBQ</span></h1>
        <p class="card-text">El reto Burger Queen, es individual y fue desarrollado con Framework Angular, la web app es para un pequeño restaurante de hamburguesas, 
        que está creciendo y necesitan una interfaz en la que puedan tomar pedidos usando una tablet, y enviarlos a la cocina para que se preparen ordenada y eficientemente.
        <br/>
        Tecnología utilizada: Framework Angular, Firebase Cloud Firestore, TypeScript, Bootstrap 4, Testing con Karma.</p>
        <ul class="card-list">
        <li class="card-li"><a href="" target="blank"><button type="button" id="btn-web" class="btn btn-outline-secondary">Ver sitio web <i class="far fa-newspaper"></i></button></a></li>
        <li class="card-li"><a href="" target="blank"><button type="button" id="btn" class="btn btn-outline-warning">Ver repositorio <i class="fab fa-github"></i></i></button></a></li>
        </ul>
      </div>
      </div>
      </div>
      </div>
      </div>`;

  const divElem = document.createElement('div');
  divElem.innerHTML = templateProyectos;
  return divElem;
};
