export const skills = () => {
  const templateSkills = `
        <div class="container-skill">
          <div class="skill">
          <h1 class="h1-skill">SKILL SET</h1>
          <ul class="list"> 
            <li><i class="fab fa-angular"></i> Framework Angular</li>
            <li><i class="fab fa-js"></i> JavaScript</li>
            <li><i class="fab fa-node"></i> Node js</li>
            <li><i class="fab fa-html5"></i> HTML 5 </li>
            <li><i class="fab fa-css3"></i> CSS 3 </li>
            <li><i class="fab fa-sass"></i> Procesador/ Sass</li>
            <li><i class="fas fa-bold"></i> Bootstrap 4</li>
            <li><i class="fas fa-code-branch"></i> Librería Fetch</li>
            <li><i class="fas fa-file-code"></i> HTTP JSON</li>
            <li><i class="fas fa-database"></i> Firebase Authentication, Cloud Firestore, Storage</li>
            <li><i class="fas fa-table"></i> Metodología agíl / Scrum - kanban</li>
          </ul>
          </div>
          <div class="skill">
          <h1 class="h1-skill">TOOLS</h1>
          <ul class="list">
            <li><i class="fab fa-git"></i> Git</li>
            <li><i class="fab fa-github"></i> Git Hub</li>
            <li><i class="fab fa-adobe"></i> Adobe Ilustrator</li>
            <li><i class="fab fa-adobe"></i> Adobe Indesing</li>
            <li><i class="fas fa-adjust"></i> Editor de diseño web Figma</li>
          </ul>
          </div>
         </div>`;

  const divElem = document.createElement('div');
  divElem.innerHTML = templateSkills;
  return divElem;
};
  