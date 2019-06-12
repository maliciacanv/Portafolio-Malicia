export const contactame = () => {
  const templateContacto = `
  <div class="contact-title">
    <p>Si tienes alguna duda o reto, no dudes en contactarme. 
        Juntos lo resolvemos!!!</p>
  </div>
  <hr>
  <div class="container-contact">
    <div class="contact-image">
      <img src="../imagenes/llamada-telefonica (1).png" class="contact-img" />
      <p class="number">+51 926-508-970</p>
    </div>    
    <div class="contact-image">
      <img src="../imagenes/email.png" class="contact-img" />
      <p class="number">cantenovictoriomaruja@gmail.com</p>
    </div>
  </div>
    <h1 class="contact-sub-title">También podemos conectar mediante redes sociales:</h1>
  <div class="contact-list">
    <a href="https://www.linkedin.com/in/malicia-maruja-cante%C3%B1o/" target="blank">
    <img src="../imagenes/linkedin (3).png" class="list-img"/>
    </a>
    <a href="https://github.com/maliciacanv" target="blank">
    <img src="../imagenes/github (1).png" class="list-img" />
    </a>
    <a href="https://twitter.com/CantenoMaruja" target="blank">
    <img src="../imagenes/gorjeo (1).png" class="list-img" />
    </a>
  </div>`;
  const divElem = document.createElement('div');
  divElem.innerHTML = templateContacto;
  return divElem;
};
