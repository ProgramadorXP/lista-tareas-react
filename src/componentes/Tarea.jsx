import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckSquare,
  faEdit,
  faSquare,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Tarea = ({ tarea, toggleCompletada, editarTarea, borrarTarea }) => {
  const [editandoTarea, cambiarEditandoTarea] = useState(false);
  const [nuevaTarea, cambiarNuevaTarea] = useState(tarea.nombre);

  const handleSubmit = (e) => {
    e.preventDefault();
    editarTarea(tarea.id, nuevaTarea);
    cambiarEditandoTarea(false);
  }

  return (
    <li className="even:bg-zinc-100 group/edit p-4 font-medium flex justify-between">
      <div className="flex items-center w-full">
        <FontAwesomeIcon 
          icon={tarea.completada ? faCheckSquare : faSquare}
          className="w-5 h-5 mr-2 cursor-pointer"
          onClick={() => toggleCompletada(tarea.id)}
        />
        { editandoTarea ? 
        <form action="" onSubmit={handleSubmit} className="flex justify-between w-full">
          <input 
            type="text"
            className="outline-none border-b-2 focus:border-blue-600 rounded-sm w-full ml-2 mr-4 bg-transparent" 
            value={nuevaTarea}
            onChange={(e) => cambiarNuevaTarea(e.target.value)}
            />
            <button type="submit" className="bg-green-400 text-white px-2 mr-4 rounded-sm">Actualizar</button>
        </form>
        :
        tarea.nombre
        }
      </div>
      <div className="flex items-center">
        <FontAwesomeIcon 
          id="icono" 
          icon={faEdit} 
          className="opacity-0 group-hover/edit:opacity-50 hover:opacity-50 duration-200 ease-out mr-3 cursor-pointer"
          onClick={() => {cambiarEditandoTarea(!editandoTarea)}}
        />
        <FontAwesomeIcon onClick={() => borrarTarea(tarea.id)} icon={faTimes} className="opacity-0 group-hover/edit:opacity-50 hover:opacity-50 duration-200 ease-out cursor-pointer"/>
      </div>
    </li>
  );
};

export default Tarea;
