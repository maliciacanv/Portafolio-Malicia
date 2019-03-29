export const sobreMi = () => {
  const templateSobreMi = `
    <div class="sobre-mí">
      <div class="containers"> 
      <div class="container">
      <div class="container-one">    
        <img src="../imagenes/" class="photo" />
          <h1 class="h1">Personalidad</h1>
            <ul> 
              <li type=square>Alegre</li>
              <li type=square>Colaborativa</li>
              <li type=square>Observadora</li>
              <li type=square>Curiosa</li>
            </ul>
      <div> 
        <h1 class="h1">RECONOCIMIENTOS</h1>
      <div> 
        <input type="checkbox" class="buttons" id="item1" name="acordeon">
        <label for="item1" class="title"><i class="fas fa-chevron-right"></i> Perseverancia & pasión</li></label>
        <p class="content">
          Pin otorgado a la más perseverante y apasionada del proyecto 2 en Laboratoria.
          El pin lo recibí en el proyecto 2 del common core al esforzarme y no darme por vencida
          a pesar de lo difícil que era aprender los métodos de arrays y objetos para poder filtrar data de un archivo JSON,
          culminando así con éxito el proyecto a tiempo.</p>
      </div>
      <div> 
        <input type="checkbox" class="buttons" id="item2" name="acordeon">
        <label for="item2" class="title"><i class="fas fa-chevron-right"></i> Solidaridad con compañeras</li></label>
        <p class="content">
          Pin otorgado a la más solidaria con compañeras de trabajo del proyecto 1 en Laboratoria.
          Este pin lo recibí en el proyecto 1 en el track de front-end developer al ayudar y apoyar 
          a mis compañeras con los testeos de las funciones de la plataforma de firebase.</p>
      </div>
      </div>
      </div>
      </div> 
      <div class="container">
        <span>¡Hola! mi nombre es Malicia, actualmente vivo en el Callao Lima-Peru soy front-end developer egresada de la 8 octaba promoción del bootcamp 
          de Laboratoria.</span><br/>
        <span>Actualmente busco formar parte de un equipo de emprendedores apasionados y determinados a cambiar el mundo atraves de la tecnología y diseño.
          Soy una persona super apasionada y comprometida con las metas u objetivos que tengo que cumplir y son algunas 
          de las cosas que me caracterizan, pienso que adaptarme a una cultura en crecimiento, innovación tecnológica 
          y metodologías ágiles seria ideal, ya que fui capacitado para ello.</span><br/>
        <span>Estoy segura que con una laptop y conexión a internet 
          no hay algo que no se pueda aprender, hacer o crear.</span><br/><br/>
        <h1 class="h1">INTERESES</h1>
        <span>
          Me interesa mucho el diseño web, el voluntariado y el emprendimiento.<br/>Aparte me encanta viajar conocer nuevas culturas y costumbres, me fascina el girasol y compartir momentos 
          con familia y amigos.</span>
      </div>  
      <div class="container">
        <h1 class="h1">SKILL SET</h1>
        <ul class="list"> 
          <li type=square>React js <i class="fab fa-react"></i></li>
          <li type=square>Node js <i class="fab fa-node"></i></li>
          <li type=square>HTML5 <i class="fab fa-html5"></i></li>
          <li type=square>CSS3 <i class="fab fa-css3"></i></li>
          <li type=square>Javascript <i class="fab fa-js"></i></li>
          <li type=square>Sass <i class="fab fa-sass"></i></li>
          <li type=square>Firebase<i class="fas fa-database"></i></li>
          <li type=square>Bootstrap 4 <i class="fas fa-bold"></i></li>
          <li type=square>HTTP JSON <i class="fas fa-file-code"></i></li>
          <li type=square>Scrum <i class="fas fa-table"></i></li>
          <li type=square>npm <i class="fab fa-npm"></i></li>
        </ul>
        <h1 class="h1">TOOLS</h1>
        <ul class="list">
          <li type=square>Git <i class="fab fa-git"></i></li>
          <li type=square>Git Hub <i class="fab fa-github"></i></li>
          <li type=square>Adobe Ilustrator <i class="fab fa-adobe"></i></li>
          <li type=square>Adobe Indesing <i class="fab fa-adobe"></i></li>
          <li type=square>Figma <i class="fas fa-adjust"></i></li>
        </ul>
      </div>
      </div>
    </div>`;
  const divElem = document.createElement('div');
  divElem.innerHTML = templateSobreMi;
  return divElem;
};
