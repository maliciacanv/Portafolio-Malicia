export const skills = () => {
  const templateSkills = `
    <div class="container-skill">
      <div class="skill">
        <h1 class="h1-skill">SKILL SET</h1>
        <ul class="list"> 
          <li><img src="../imagenes/favicon.ico" /><span> Framework Angular 7</span></li>
          <li><img src="../imagenes/typescript.png" /><span> TypeScript</span></li>
          <li><img src="../imagenes/javascript.png" /><span> JavaScript</span></li>
          <li><img src="../imagenes/nodejs.png" /><span> Node js</span></li>
          <li><img src="../imagenes/html-5.png" /><span> HTML 5 </span></li>
          <li><img src="../imagenes/css-3.png" /><span> CSS 3</span> </li>
          <li><img src="../imagenes/sass.png" /><span> Procesador/ Sass</span></li>
          <li><img src="../imagenes/bootstrap.png" /><span> Bootstrap 4</span></li>
          <li><img src="../imagenes/compartir.png" /><span> Librería Fetch</span></li>
          <li><img src="../imagenes/base-de-datos.png" /><span> Firebase Authentication, Cloud Firestore, Storage</span></li>
          <li><img src="../imagenes/pizarra.png" /><span> Metodología agíl / Scrum - Tablero kanban</span></li>
        </ul>
      </div>
      <div class="skill">
        <h1 class="h1-skill">TOOLS</h1>
        <ul class="list">
          <li><img src="../imagenes/github.png" /><span> Git</span></li>
          <li><img src="../imagenes/logo-git.png" /><span> Git Hub</span></li>
          <li><img src="../imagenes/ilustrador.png" /><span> Adobe Ilustrator</span></li>
          <li><img src="../imagenes/imagen.png" /><span> Editor de diseño web Figma</span></li>
        </ul>
      </div>
    </div>`;

  const divElem = document.createElement('div');
  divElem.innerHTML = templateSkills;
  return divElem;
};
  