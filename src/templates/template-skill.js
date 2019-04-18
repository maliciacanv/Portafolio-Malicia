export const skills = () => {
  const templateSkills = `
        <div class="container-skill">
          <div class="skill">
          <h1 class="h1-skill">SKILL SET</h1>
          <ul class="list"> 
            <li><i class="fab fa-angular"></i> Framework Angular 
            <div class="progress">
            <div class="progress-bar bg-warning" role="progressbar" style="width: 50%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div></li>
            <li><i class="fab fa-node"></i> Node js
            <div class="progress">
            <div class="progress-bar bg-warning" role="progressbar" style="width: 50%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div></li>
            <li><i class="fab fa-html5"></i> HTML 5 
            <div class="progress">
            <div class="progress-bar bg-warning" role="progressbar" style="width: 70%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div></li>
            <li><i class="fab fa-css3"></i> CSS 3 
            <div class="progress">
            <div class="progress-bar bg-warning" role="progressbar" style="width: 70%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div></li>
            <li><i class="fab fa-js"></i> JavaScript
            <div class="progress">
            <div class="progress-bar bg-warning" role="progressbar" style="width: 70%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div></li>
            <li><i class="fab fa-sass"></i> Procesador/ Sass
            <div class="progress">
            <div class="progress-bar bg-warning" role="progressbar" style="width: 60%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div></li>
            <li><i class="fas fa-database"></i> Firebase Authentication, Cloud Firestore
            <div class="progress">
            <div class="progress-bar bg-warning" role="progressbar" style="width: 50%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div></li>
            <li><i class="fas fa-fetch"></i> Librería Fetch
            <div class="progress">
            <div class="progress-bar bg-warning" role="progressbar" style="width: 50%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div></li>
            <li><i class="fas fa-bold"></i> Bootstrap 4
            <div class="progress">
            <div class="progress-bar bg-warning" role="progressbar" style="width: 70%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div></li>
            <li><i class="fas fa-file-code"></i> HTTP JSON
            <div class="progress">
            <div class="progress-bar bg-warning" role="progressbar" style="width: 50%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div></li>
            <li><i class="fas fa-table"></i> Metodología agíl / Scrum - kanban
            <div class="progress">
            <div class="progress-bar bg-warning" role="progressbar" style="width: 90%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div></li>
          </ul>
          </div>
          <div class="skill">
          <h1 class="h1-skill">TOOLS</h1>
          <ul class="list">
            <li><i class="fab fa-git"></i> Git
            <div class="progress">
            <div class="progress-bar bg-success" role="progressbar" style="width: 50%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div></li>
            <li><i class="fab fa-github"></i> Git Hub
            <div class="progress">
            <div class="progress-bar bg-success" role="progressbar" style="width: 50%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div></li>
            <li><i class="fab fa-adobe"></i> Adobe Ilustrator
            <div class="progress">
            <div class="progress-bar bg-success" role="progressbar" style="width: 60%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div></li>
            <li><i class="fab fa-adobe"></i> Adobe Indesing
            <div class="progress">
            <div class="progress-bar bg-success" role="progressbar" style="width: 60%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div></li>
            <li><i class="fas fa-adjust"></i> Editor de diseño web Figma
            <div class="progress">
            <div class="progress-bar bg-success" role="progressbar" style="width: 70%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
            </div></li>
  
          </ul>
          </div>
         </div>`;

  const divElem = document.createElement('div');
  divElem.innerHTML = templateSkills;
  return divElem;
};
  