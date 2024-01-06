import Tarea from "./Tarea";

const ListaTareas = ({ tareas, cambiarTareas, mostrarCompletadas }) => {
  const toggleCompletada = (id) => {
    cambiarTareas(
      tareas.map((tarea) => {
        if (tarea.id === id) {
          return { ...tarea, completada: !tarea.completada };
        }
        return tarea;
      })
    );
  };
  const editarTarea = (id, nuevoTexto) => {
    cambiarTareas(
      tareas.map((tarea) => {
        if (tarea.id === id) {
          return { ...tarea, nombre: nuevoTexto };
        }
        return tarea;
      })
    );
  };
  const borrarTarea = (id) => {
    cambiarTareas(
      tareas.filter((tarea) => {
        if (tarea.id !== id) {
          return Tarea;
        }
        return;
      })
    );
  };
  return (
    <ul>
      {tareas.length > 0 ? (
        tareas.map((tarea) => {
          if(mostrarCompletadas){
            return (
              <Tarea
                key={tarea.id}
                tarea={tarea}
                toggleCompletada={toggleCompletada}
                editarTarea={editarTarea}
                borrarTarea={borrarTarea}
              />
            );
            //Si la tarea no esta completada, la devolvemos.
          } else if(!tarea.completada) {
            return (
              <Tarea
                key={tarea.id}
                tarea={tarea}
                toggleCompletada={toggleCompletada}
                editarTarea={editarTarea}
                borrarTarea={borrarTarea}
              />
            );
          }
          //Si ya esta completada no la devolvemos.
          return;
        })
      ) : (
        <div className="flex justify-center items-center h-20 font-semibold text-slate-400">
          ~ No hay tareas agregadas ~
        </div>
      )}
    </ul>
  );
};

export default ListaTareas;
