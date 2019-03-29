export const proyectos = () => {
  const templateProyectos = `
    <div class="work">
    <div class="container-cards">
    <div class="card">
        <div class="image">
          <img src="http://1.bp.blogspot.com/-EhPr4LXcywE/Udr594sPHTI/AAAAAAAAAJ4/Tv4y4CBLTPM/s400/Cristina-Otero-2.jpg" class="card-imagen"/>
        </div>
        <div class="details">
          <div class="center">
            <h1 class="card-title">Someone famous<br><span class="card-span">team leader</span></h1>
            <p class="card-text">Lorem ipsum is simple dummy text on the printing and typesetting industry.</p>
            <ul class="card-list">
              <li class="card-li"><button type="button" id="btn" class="btn btn-outline-secondary">Ver sitio web <i class="far fa-newspaper"></i></button></li>
              <li class="card-li"><button type="button" id="btn" class="btn btn-outline-warning">Ver Git Hub <i class="fab fa-github"></i></button></li>              
            </ul>
          </div>
        </div>
      </div>
      <div class="card">
          <div class="image">
            <img src="http://1.bp.blogspot.com/-EhPr4LXcywE/Udr594sPHTI/AAAAAAAAAJ4/Tv4y4CBLTPM/s400/Cristina-Otero-2.jpg" class="card-imagen"/>
          </div>
          <div class="details">
            <div class="center">
              <h1 class="card-title">Someone famous<br><span class="card-span">team leader</span></h1>
              <p class="card-text">Lorem ipsum is simple dummy text on the printing and typesetting industry.</p>
              <ul class="card-list">
                <li class="card-li"><button type="button" id="btn" class="btn btn-outline-secondary">Ver sitio web <i class="far fa-newspaper"></i></button></li>
                <li class="card-li"><button type="button" id="btn" class="btn btn-outline-warning">Ver Git Hub <i class="fab fa-github"></i></button></li>              
              </ul>
            </div>
          </div>
        </div>
        <div class="card">
        <div class="image">
          <img src="http://1.bp.blogspot.com/-EhPr4LXcywE/Udr594sPHTI/AAAAAAAAAJ4/Tv4y4CBLTPM/s400/Cristina-Otero-2.jpg" class="card-imagen"/>
        </div>
        <div class="details">
          <div class="center">
            <h1 class="card-title">Someone famous<br><span class="card-span">team leader</span></h1>
            <p class="card-text">Lorem ipsum is simple dummy text on the printing and typesetting industry.</p>
            <ul class="card-list">
              <li class="card-li"><button type="button" id="btn" class="btn btn-outline-secondary">Ver sitio web <i class="far fa-newspaper"></i></button></li>
              <li class="card-li"><button type="button" id="btn" class="btn btn-outline-warning">Ver Git Hub <i class="fab fa-github"></i></button></li>              
            </ul>
          </div>
        </div>
      </div>
      <div class="card">
          <div class="image">
            <img src="http://1.bp.blogspot.com/-EhPr4LXcywE/Udr594sPHTI/AAAAAAAAAJ4/Tv4y4CBLTPM/s400/Cristina-Otero-2.jpg" class="card-imagen"/>
          </div>
          <div class="details">
            <div class="center">
              <h1 class="card-title">Someone famous<br><span class="card-span">team leader</span></h1>
              <p class="card-text">Lorem ipsum is simple dummy text on the printing and typesetting industry.</p>
              <ul class="card-list">
                <li class="card-li"><button type="button" id="btn" class="btn btn-outline-secondary">Ver sitio web <i class="far fa-newspaper"></i></button></li>
                <li class="card-li"><button type="button" id="btn" class="btn btn-outline-warning">Ver Git Hub <i class="fab fa-github"></i></button></li>              
              </ul>
            </div>
          </div>
        </div>
    <div class="card">
            <div class="image">
              <img src="http://1.bp.blogspot.com/-EhPr4LXcywE/Udr594sPHTI/AAAAAAAAAJ4/Tv4y4CBLTPM/s400/Cristina-Otero-2.jpg" class="card-imagen"/>
            </div>
            <div class="details">
              <div class="center">
                <h1 class="card-title">Someone famous<br><span class="card-span">team leader</span></h1>
                <p class="card-text">Lorem ipsum is simple dummy text on the printing and typesetting industry.</p>
                <ul class="card-list">
                  <li class="card-li"><button type="button" id="btn" class="btn btn-outline-secondary">Ver sitio web <i class="far fa-newspaper"></i></button></li>
                  <li class="card-li"><button type="button" id="btn" class="btn btn-outline-warning">Ver Git Hub <i class="fab fa-github"></i></button></li>              
                </ul>
              </div>
            </div>
          </div>
        <div class="card">
              <div class="image">
                <img src="http://1.bp.blogspot.com/-EhPr4LXcywE/Udr594sPHTI/AAAAAAAAAJ4/Tv4y4CBLTPM/s400/Cristina-Otero-2.jpg" class="card-imagen"/>
              </div>
              <div class="details">
                <div class="center">
                  <h1 class="card-title">Someone famous<br><span class="card-span">team leader</span></h1>
                  <p class="card-text">Lorem ipsum is simple dummy text on the printing and typesetting industry.</p>
                  <ul class="card-list">
                    <li class="card-li"><button type="button" id="btn" class="btn btn-outline-secondary">Ver sitio web <i class="far fa-newspaper"></i></button></li>
                    <li class="card-li"><button type="button" id="btn" class="btn btn-outline-warning">Ver Git Hub <i class="fab fa-github"></i></button></li>              
                  </ul>
                </div>
              </div>
            </div>
          </div>
</div>`;
  const divElem = document.createElement('div');
  divElem.innerHTML = templateProyectos;
  return divElem;
};
