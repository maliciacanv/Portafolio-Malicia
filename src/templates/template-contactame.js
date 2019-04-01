export const contactame = () => {
  const templateContacto = `
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
  <h1 class="contact-title">También podemos conectar mediante redes sociales:</h1>
  <div class="contact-list">
   <a href="https://www.linkedin.com/in/malicia-maruja-cante%C3%B1o/" target="blank"><img src="../imagenes/linkedin.png" class="list-img"/></a>
   <a href="https://www.instagram.com/malimacvi/" target="blank"><img src="../imagenes/logo-de-instagram.png" class="list-img"/></a>
   <a href="https://web.facebook.com/thelokitahh" target="blank"><img src="../imagenes/boton-del-logo-de-facebook.png" class="list-img"/></a>
   <a href="https://github.com/maliciacanv" target="blank"><img src="../imagenes/logo-de-github.png" class="list-img"/></a>
   <a href="https://twitter.com/CantenoMaruja" target="blank"><img src="../imagenes/boton-de-logo-del-twitter.png" class="list-img"/></a>
</div> `;
  const divElem = document.createElement('div');
  divElem.innerHTML = templateContacto;
  return divElem;
};
