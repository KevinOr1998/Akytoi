import Login, { Registrar } from '../src/components/Login.js';



function App() {


  
  return (
    <header>
      <div class="row nav-aki-color">
        <div class="col-12">
          <nav class="navbar navbar-expand-lg navbar-dark border ">
            <div class="collapse navbar-collapse">
              
              <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item active">
                  <a class="nav-link" href="#">Inicio<span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item active">
                  <a class="nav-link" href="#" > Sobre la app </a>
                </li>
                <li class="nav-item active ">
                  <a class="nav-link " href="#">About</a>
                </li>
              </ul>
              <div class="form-inline">
                <button onClick={()=>Login()}  class="btn btn-outline-success" type="button">Login</button>
                <button onClick={()=>Registrar()} class="btn btn-sm btn-outline-secondary" type="button">Registrar</button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
export default App;

