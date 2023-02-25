
import './App.css';
import Logo from './imagenes/logo.png'
import Boton from './componentes/Boton';

function App() {

  const manejarClic = () => {
    console.log("Clic");
  }

  const reiniciarContador = () => {
    console.log("Reiniciar");
  }

  return (
    <div className='App'>
      <div className='logo-contenedor'>
      <img className='imagen-logo'
        src={Logo}
        alt='Logo'
      />
      </div>

      <div className='contenedor-principal'>
        <Boton
          texto= 'Clic'
          esBotonDeCLic={true}
          manejarClic={manejarClic}
        />
        <Boton
          texto= 'Reiniciar'
          esBotonDeCLic={false}
          manejarClic={reiniciarContador}
        />
        </div>

    </div>
  );
}

export default App;
