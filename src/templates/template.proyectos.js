export const proyectos = () => {
  const templateProyectos = `
    <div class="work">
    <div class="container-cards">
    <div class="card">
      <div class="image">
        <img src="../imagenes/cipher.png" class="card-imagen"/>
      </div>
      <div class="details">
      <div class="center">
        <h1 class="card-title">Cipher<br><span class="card-span">#CODIGOMUJER</span></h1>
          <p class="card-text">Cifrar y descifrar palabras, aplicando #ASCI y modules import export para las funciones.</p>
          <ul class="card-list">
            <li class="card-li"><a href="https://github.com/maliciacanv/lim-2018-11-bc-core-am-cipher" target="blank"><button type="button" id="btn" class="btn btn-outline-secondary">Ver sitio web <i class="far fa-newspaper"></i></button></a></li>
            <li class="card-li"><a href="https://maliciacanv.github.io/lim-2018-11-bc-core-am-cipher/src/" target="blank"><button type="button" id="btn" class="btn btn-outline-warning">Ver Git Hub <i class="fab fa-github"></i></button></a></li>              
          </ul>
      </div>
      </div>
      </div>
      <div class="card">
      <div class="image">
        <img src="../imagenes/dtalover.png" class="card-imagen"/>
      </div>
      <div class="details">
      <div class="center">
        <h1 class="card-title">DATA LOL<br><span class="card-span">LEAGE OF LEGENDS</span></h1>
        <p class="card-text">Manipular data de un archivo JSON, aplicando métodos del array y objetos.</p>
        <ul class="card-list">
          <li class="card-li"><a href="https://github.com/maliciacanv/lim-2018-11-bc-core-am-data-lovers" target="blank"><button type="button" id="btn" class="btn btn-outline-secondary">Ver sitio web <i class="far fa-newspaper"></i></button></a></li>
          <li class="card-li"><a href="https://maliciacanv.github.io/lim-2018-11-bc-core-am-data-lovers/src/" target="blank"><button type="button" id="btn" class="btn btn-outline-warning">Ver Git Hub <i class="fab fa-github"></i></button></a></li>              
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
        <h1 class="card-title">Red social<br><span class="card-span"></span></h1>
        <p class="card-text">Aplicando firebase como base de datos, funciones callback, implementando SPA Y templates</p>
        <ul class="card-list">
          <li class="card-li"><a href="https://github.com/maliciacanv/LIM008-social-network" target="blank"><button type="button" id="btn" class="btn btn-outline-secondary">Ver sitio web <i class="far fa-newspaper"></i></button></a></li>
          <li class="card-li"><a href="https://gabrieladiazb.github.io/LIM008-social-network/src/" target="blank"><button type="button" id="btn" class="btn btn-outline-warning">Ver Git Hub <i class="fab fa-github"></i></button></a></li>              
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
        <h1 class="card-title">Librería<br><span class="card-span">md-links</span></h1>
        <p class="card-text">Aplicando node js sus métodos y funciones síncronas y asíncronas</p>
        <ul class="card-list">
          <li class="card-li"><a href="https://github.com/maliciacanv/LIM008-fe-md-links" target="blank"><button type="button" id="btn" class="btn btn-outline-secondary">Ver sitio web <i class="far fa-newspaper"></i></button></a></li>
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
