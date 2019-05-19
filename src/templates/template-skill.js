export const skills = () => {
  const templateSkills = `
        <div class="container-skill">
          <div class="skill">
          <h1 class="h1-skill">SKILL SET</h1>
          <ul class="list"> 
            <li><img src="../imagenes/favicon.ico" /> Framework Angular 7</li>
            <li><img src="../imagenes/typescript.png" /> TypeScript</li>
            <li><img src="../imagenes/javascript.png" /> JavaScript</li>
            <li><img src="../imagenes/nodejs.png" /> Node js</li>
            <li><img src="../imagenes/html-5.png" /> HTML 5 </li>
            <li><img src="../imagenes/css-3.png" /> CSS 3 </li>
            <li><img src="../imagenes/sass.png" /> Procesador/ Sass</li>
            <li><img src="../imagenes/bootstrap.png" /> Bootstrap 4</li>
            <li><img src="../imagenes/compartir.png" /> Librería Fetch</li>
            <li><img src="../imagenes/base-de-datos.png" /> Firebase Authentication, Cloud Firestore, Storage</li>
            <li><img src="../imagenes/pizarra.png" /> Metodología agíl / Scrum - Tablero kanban</li>
          </ul>
          </div>
          <div class="skill">
          <h1 class="h1-skill">TOOLS</h1>
          <ul class="list">
            <li><img src="../imagenes/github.png" /> Git</li>
            <li><img src="../imagenes/logo-git.png" /> Git Hub</li>
            <li><img src="../imagenes/ilustrador.png" /> Adobe Ilustrator</li>
            <li><img src="../imagenes/imagen.png" /> Editor de diseño web Figma</li>
          </ul>
          </div>
         </div>`;

  const divElem = document.createElement('div');
  divElem.innerHTML = templateSkills;
  return divElem;
};
  