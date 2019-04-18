export const sobreMi = () => {
  const templateSobreMi = `
      <div class="pt">
      <img src="../imagenes/foto1.png" class="photo" />
      </div>
      <div class="containers"> 
      <div class="container">
      <div class="container-one">    
          <h1 class="h1">PERSONALIDAD</h1>
            <ul> 
              <li type=square>Innovadora</li> 
              <li type=square>Colaborativa</li>
              <li type=square>Observadora</li>
              <li type=square>Curiosa</li>
              <li type=square>Alegre</li> 
            </ul> 
        <h1 class="h1">RECONOCIMIENTOS</h1>
      <div> 
        <input type="checkbox" class="buttons" id="item1" name="acordeon">
        <label for="item1" class="title"><i class="fas fa-chevron-right"></i> Perseverancia & pasión</li></label>
        <p class="content">
          Pin otorgado a la más perseverante y apasionada del proyecto data lovers en Laboratoria.
          El pin lo recibí en el proyecto data lovers, al esforzarme y no darme por vencida
          a pesar de lo difícil que era aprender los métodos de arrays y objetos para poder manipular data de un archivo JSON,
          culminando así con éxito el proyecto a tiempo.</p>
      </div>
      <div> 
        <input type="checkbox" class="buttons" id="item2" name="acordeon">
        <label for="item2" class="title"><i class="fas fa-chevron-right"></i> Solidaridad con compañeras</li></label>
        <p class="content">
          Pin otorgado a la más solidaria con compañeras de trabajo del proyecto Red social en Laboratoria.
          Este pin lo recibí en el proyecto Red social, al ayudar y apoyar 
          a mis compañeras con los testeos de las funciones de la plataforma de firebase.</p>
      </div>
      </div>  
      </div> 
      <div class="container">
        <span>Hola soy Malicia, vivo en el Callao Lima-Perú soy front-end developer, egresada de la octava promoción del bootcamp 
          de Laboratoria.</span><br/>
        <span>Busco formar parte de un equipo de emprendedores apasionados y determinados a cambiar el mundo a través de la tecnología y el diseño.
          Soy una persona apasionada y comprometida con las metas y objetivos que me trazo. Tiendo a adaptarme rápidamente, a una cultura en crecimiento e innovación tecnológica 
          y metodologías ágiles seria ideal, ya que fuí capacitada para ello.</span><br/>
        <span>Con una laptop y conexión a internet 
          no hay algo que no se pueda aprender, hacer o crear.</span>
        </div>  
        <div class="container">
        <h1 class="h1">INTERESES</h1>
        <span>
          Me interesa investigar y aprender nuevas tecnologías. Por eso a  futuro aspiro crear soluciones tecnológicos con inteligencia artificial.<br/><br/>
        
          En mí interes personal considero importante el voluntariado y el emprendimiento, ya que compartir y ayudar me hace mejor persona. Me encanta viajar conocer nuevas culturas y costumbres, me fascinan los girasoles y compartir momentos 
          con familia y amigos.</span>
        <div>
    </div>`;
  const divElem = document.createElement('div');
  divElem.innerHTML = templateSobreMi;
  return divElem;
};
