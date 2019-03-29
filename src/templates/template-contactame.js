export const contactame = () => {
  const templateContacto = `
  <div class="contact">
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
<div class="contact-title">
  <span>También podemos conectar mediante redes sociales:</span>
</div>
  <div class="contact-list">
   <img src="../imagenes/linkedin.png" />
   <img src="../imagenes/logo-de-instagram.png" />
   <img src="../imagenes/boton-del-logo-de-facebook.png" />
   <img src="../imagenes/logo-de-github.png" />
   <img src="../imagenes/boton-de-logo-del-twitter.png" />
 </div>
</div> `;
  const divElem = document.createElement('div');
  divElem.innerHTML = templateContacto;
  return divElem;
};
