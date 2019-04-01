const changeHash = (hash) => {
  location.hash = hash;
};

export const home = () => { 
  const templateOne = `
    <div class="home">  
    <div class="bd-example">
        <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>     
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class ="imagen" src="../imagenes/collage.png" alt="foto">
              <div class="carousel-caption">
                <h1>¡Hola! me llamo Malicia Canteño y</h1>
                <div class = "welcome">
                  <p>Soy front-end developer y</p>
                  <ul class="ul"> 
                    <li>me fascina el diseño web</li>
                    <li>me encanta viajar</li>
                    <li>amo los girasoles</li>
                  </ul>
                </div>
                <div>
                  <button type="button" id="sobre-mí" class="btn btn-outline-danger">Algo más sobre mí <i class="fas fa-user"></i></button>
                  <a href="../imagenes/MaliciaCanteño-cv.pdf" target:"blank"><button type="button" class="btn btn-outline-warning">Descargar cv <i class="fas fa-angle-double-down"></i></button></a>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img class ="imagen" src="../imagenes/imagenFondo7.png" alt="imagen-2">
              <div class="carousel-caption d-none d-md-block">
              <div class="welcome-two">
                <p>[ No soy ni un Ninja,</p> 
                <ul class="ul-two">
                  <li>ni CEO <span>pero... ]</span></li
                  <li>ni una CoFunder de una Startup <span>pero... ]</span></li>
                  <li>ni code Evangelista <span>pero... ]</span></li>
                </ul>  
                </div>
                <h1 class="h1-two">¡ME APASIONA LO QUE HAGO!</h1>
              <div>
                <button type="button" id="btn-two" class="btn btn-outline-warning">Ver mis trabajos <i class="fas fa-angle-double-down"></i></button>
              </div>
            </div>
            </div>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only"></span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only"></span>
          </a>
        </div>
      </div>
    </div>`;
  const divElem = document.createElement('div');
  divElem.innerHTML = templateOne;

  const btnSobreMi = divElem.querySelector('#sobre-mí');
  btnSobreMi.addEventListener('click', () => {
    changeHash('/sobreMi');
  });

  const btnProyectos = divElem.querySelector('#btn-two');
  btnProyectos.addEventListener('click', () => {
    changeHash('/proyectos');
  });
  return divElem;
};
