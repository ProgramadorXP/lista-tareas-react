import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

const FormularioTareas = ({ tareas, cambiarTareas }) => {
  const [inputTarea, cambiarInputTarea] = useState("");
  const handleInput = (e) => {
    cambiarInputTarea(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    cambiarTareas([
      ...tareas,
      {
        id: uuidv4(),
        nombre: inputTarea,
        completada: false,
      },
    ]);
    cambiarInputTarea('');
  };

  return (
    <form
      action=""
      onSubmit={handleSubmit}
      className="relative w-full p-4 flex justify-between"
    >
      <input
        type="text"
        className="w-full border-b-2 p-1 focus:border-blue-500 font-medium outline-none text-zinc-600"
        placeholder="Escribe una tarea"
        value={inputTarea}
        onChange={(e) => handleInput(e)}
      />
      <button type="submit" className="absolute right-4 top-5 flex">
        <FontAwesomeIcon
          icon={faSquarePlus}
          className="text-green-500 text-xl"
        />
      </button>
      <p id="leyendaError" className="hidden text-red-500 font-medium mt-4">
        Debes escribir una tarea.
      </p>
    </form>
  );
};

export default FormularioTareas;
