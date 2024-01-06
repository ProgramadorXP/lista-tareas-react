import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";

const Header = ({ mostrarCompletadas, cambiarMostrarCompletadas }) => {
  const toggleCompletadas = () => {
    //Alternamos el valor Booleano del estado mostrarCompletadas cada que hay un click en el boton
    cambiarMostrarCompletadas(!mostrarCompletadas);
  };
  return (
    <header className="bg-blue-500 p-4 flex items-center justify-between">
      <h1 className="text-white py-1 tracking-wide text-xl font-medium">
        Lista de Tareas
      </h1>
      {mostrarCompletadas ? (
        <button
          onClick={() => toggleCompletadas()}
          className="text-white bg-blue-900 px-2 py-1 flex items-center font-medium"
        >
          No mostrar completadas
          <FontAwesomeIcon icon={faEyeSlash} className="text-white ml-2" />
        </button>
      ) : (
        <button
          onClick={() => toggleCompletadas()}
          className="text-white bg-blue-900 px-2 py-1 flex items-center font-medium"
        >
          Mostrar completadas
          <FontAwesomeIcon icon={faEye} className="text-white ml-2" />
        </button>
      )}
    </header>
  );
};

export default Header;
