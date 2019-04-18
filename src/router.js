import { home } from './templates/template-home.js';
import { sobreMi } from './templates/template-sobremi.js';
import { proyectos } from './templates/template.proyectos.js';
import { contactame } from './templates/template-contactame.js';
import { skills } from './templates/template-skill.js';

const changeTmp = (hash) => {
  if (hash === '#/' || hash === '' || hash === '#') {
    return viewTmp('#/home');
  } else if (hash === '#/sobreMi' || hash === '#/skills' || hash === '#/proyectos' || hash === '#/contactame') {
    return viewTmp(hash);
  } else {
    return viewTmp('#/home');
  }
};
  
const viewTmp = (routers) => {
  const router = routers.substr(2, routers.length - 2);
  const section = document.getElementById('log-container');
  section.innerHTML = '';
  switch (router) { 
  case 'contactame':
    section.appendChild(contactame());
    break;
  case 'proyectos':
    section.appendChild(proyectos());
    break;
  case 'skills':
    section.appendChild(skills());
    break;       
  case 'sobreMi':
    section.appendChild(sobreMi());
    break;      
  default:
    section.appendChild(home());
    break;
  }
};
  
export const routerRed = () => 
  window.addEventListener('load',
    changeTmp(window.location.hash));
if (('onhashchange' in window)) window.onhashchange = () => changeTmp(window.location.hash);
