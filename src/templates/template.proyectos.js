export const proyectos = () => {
  const templateProyectos = `
    <div class="work">
      <div class="container-cards">
        <div class="card">
          <div class="image">
            <img src="../imagenes/turismoi.png" class="card-imagen"/>
          </div>
          <div class="details">
            <div class="center">
              <h1 class="card-title">Reto con la Api de turismoi<br><span class="card-span">Realizado con React hooks</span></h1>
              <p class="card-text">Este reto técnico es individual, realizado en 3 días y consta de consumir una api con un token para luego 
              mostrarlo en la interfaz tipo card, donde hay un buscador que filtra por región, y un select para ordenar según el precio de menor
              a mayor y por el tiempo de duración de cada tour.</p>
                <p>Tecnología utilizada: Libreria React js , react hooks, Api rest, Fetch, bootstrap 4, Sass, lazy loading.</p>
                <ul class="card-list">
                  <li class="card-li"><a href="https://maliciacanv.github.io/prueba-frontend-developer/" target="blank"> <button type="button" id="btn" class="btn btn-outline-warning">Ver sitio web <i class="far fa-newspaper"></i></button></a></li>
                  <li class="card-li"><a href="https://github.com/maliciacanv/prueba-frontend-developer" target="blank"> <button type="button" id="btn-web" class="btn btn-outline-secondary">Ver repositorio <i class="fab fa-github"></i></i></button></a></li>
                </ul>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="image">
            <img src="../imagenes/comunal1.PNG" class="card-imagen"/>
          </div>
          <div class="details">
            <div class="center">
              <h1 class="card-title">Reto Comunal en la hackaton TFL19<br><span class="card-span">Comunal 2°do puesto</span></h1>
              <p class="card-text">En squad de 5 compañeras, en 36 horas, nos tocó desarrollar un mvp para la mejora de atención de visitantes a los locales de comunal.
                Normalmente lxs office manager son lxs encargados de hacer el registro y aprox se demoran 10 minutos en registrar a un visitante.
                Para ello creamos 2 web app: Para el vistante donde podrá registrarse y enviar automáticamente el aviso de su llegada.</p>
              <p >Tecnología utilizada: Framework Angular 7, TypeScript, CSS 3, Bootstrap 4.</p>
              <ul class="card-list">
                <li class="card-li"><a href="https://maliciacanv.github.io/comunal-co/" target="blank"> <button type="button" id="btn" class="btn btn-outline-warning">Ver sitio web <i class="far fa-newspaper"></i></button></a></li>
                <li class="card-li"><a href="https://github.com/maliciacanv/comunal-co/" target="blank"> <button type="button" id="btn-web" class="btn btn-outline-secondary">Ver repositorio <i class="fab fa-github"></i></i></button></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="image">
            <img src="../imagenes/comunal-2.png" class="card-imagen"/>
          </div>
          <div class="details">
          <div class="center">
            <h1 class="card-title">Reto Comunal en la hackaton TFL19<br><span class="card-span">Comunal 2°do puesto</span></h1>
            <p class="card-text">Web App para el office manager donde podra visualizar los visitantes registrados del día a día, y donde podra filtrar datos, realizar un registro manual y hacer una invitación personalizada.</p>
            <p>Tecnología utilizada: Framework Angular 7, CSS 3, Bootstrap 4.</p>
            <ul class="card-list">
              <li class="card-li"><a href="https://comunal-co.firebaseapp.com/" target="blank"><button type="button" id="btn" class="btn btn-outline-warning">Ver sitio web <i class="far fa-newspaper"></i></button></a></li>
              <li class="card-li"><a href="https://github.com/maliciacanv/office-maganement/tree/master/my-app" target="blank"><button type="button" id="btn-web" class="btn btn-outline-secondary">Ver repositorio <i class="fab fa-github"></i></i></button></a></li>
            </ul>
          </div>
          </div>
        </div>
        <div class="card">
          <div class="image">
            <img src="../imagenes/burger.png" class="card-imagen"/>
          </div>
          <div class="details">
          <div class="center">
            <h1 class="card-title">Burger Queen<br><span class="card-span">BBQ</span></h1>
            <p class="card-text">El reto Burger Queen, es individual y fue desarrollado con Framework Angular, la web app es para un pequeño restaurante de hamburguesas, 
              que está creciendo y necesitan una interfaz en la que puedan tomar pedidos usando una tablet, y enviarlos a la cocina para que se preparen ordenada y eficientemente.</p>
              <p>Tecnología utilizada: Framework Angular 7, Firebase Cloud Firestore, TypeScript, Bootstrap 4, Testing con Karma.</p>
            <ul class="card-list">
              <li class="card-li"><a href="https://burgerqueen-807e7.firebaseapp.com/" target="blank"><button type="button" id="btn" class="btn btn-outline-warning">Ver sitio web <i class="far fa-newspaper"></i></button></a></li>
              <li class="card-li"><a href="https://github.com/maliciacanv/LIM008-fe-burger-queen" target="blank"><button type="button" id="btn-web" class="btn btn-outline-secondary">Ver repositorio <i class="fab fa-github"></i></i></button></a></li>
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
            con extención Md, recopilar los links y mostrarlos, además tiene opcion para validar y calcular estadística de los links.</p>       
            <p>Tecnología utilizada: Node js, Librería Fetch, JavaScript, Funciones Asíncronas Promesas, Testing.</p>
          <ul class="card-list">
            <li class="card-li"><a href="https://github.com/maliciacanv/LIM008-fe-md-links" target="blank"><button type="button" id="btn-web" class="btn btn-outline-secondary">Ver repositorio <i class="fab fa-github"></i></button></a></li>
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
          recomendaciones a traves de post.</p> 
          <p>Tecnología utilizada: Firebase Authentication y Cloud Firestore, HTML 5, JavaScript, CSS 3, Modules Import y export, Testing, SPA, Templates, Responsive Desing.</p>
        <ul class="card-list">
          <li class="card-li"><a href="https://gabrieladiazb.github.io/LIM008-social-network/src/" target="blank"><button type="button" id="btn" class="btn btn-outline-warning">Ver sitio web <i class="far fa-newspaper"></i></button></a></li>
          <li class="card-li"><a href="https://github.com/maliciacanv/LIM008-social-network/" target="blank"><button type="button" id="btn-web" class="btn btn-outline-secondary">Ver repositorio <i class="fab fa-github"></i></button></a></li>              
        </ul>
      </div>
      </div>
    </div>
    <div class="card">
      <div class="image">
        <img src="../imagenes/data-lover.png" class="card-imagen"/>
      </div>
    <div class="details">
    <div class="center">
      <h1 class="card-title">DATA LOVERS<br><span class="card-span">LEAGE OF LEGENDS</span></h1>
      <p class="card-text">El reto Data Lovers, esta conformado por 2 personas y la tarea es crear una página web.
        La temática es el videojuego League of legends, para ello hicimos una encuesta online a 20 personas para saber que información 
        les interesaría ver de dicho videojuego, por eso la página league of legends permite al jugador conocer el campeón de su interes.</p>
        <p>Tecnología utilizada: HTML 5, JavaScript, Archivo JSON, Métodos de arrays y objetos, CSS 3, Templates, Testing, Responsive Desing..</p>
      <ul class="card-list">
        <li class="card-li"><a href="https://maliciacanv.github.io/lim-2018-11-bc-core-am-data-lovers/src/" target="blank"><button type="button" id="btn" class="btn btn-outline-warning">Ver sitio web <i class="far fa-newspaper"></i></button></a></li>
        <li class="card-li"><a href="https://github.com/maliciacanv/lim-2018-11-bc-core-am-data-lovers" target="blank"><button type="button" id="btn-web" class="btn btn-outline-secondary">Ver repositorio <i class="fab fa-github"></i></button></a></li>              
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
