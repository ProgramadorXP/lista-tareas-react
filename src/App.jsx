import Header from "./componentes/Header";
import FormularioTareas from "./componentes/FormularioTareas";
import ListaTareas from "./componentes/ListaTareas";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  //Obtenemos las tareas guardadas del localStorage.
  const tareasGuardadas = 
  localStorage.getItem('tareas') ? 
  JSON.parse(localStorage.getItem('tareas')) : [];

  //Establemcemos el estado de las tareas.
  const [tareas, cambiarTareas] = useState(tareasGuardadas);
  /*Convertimos el arreglo en una cadena de texto para poder guardarlo
  en el localStorage(solo admite guardar cadenas de texto) en formato
  JSON.*/
  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas));  
  }, [tareas]);

  //Accedemos a localStorage y comprobamos si mostrarCompletadas es null.
  let configMostrarCompletadas = '';
  if(localStorage.getItem('mostrarCompletadas') === null){
    configMostrarCompletadas = true;
  } else {
    configMostrarCompletadas = localStorage.getItem('mostrarCompletadas') === 'true';
  }

  //El estado de mostrarCompletadas.
  const [mostrarCompletadas, cambiarMostrarCompletadas] = useState(configMostrarCompletadas);
  /*Guardando el valor Booleano del estado mostrarCompletadas dentro del
  localStorage*/
  useEffect(() => {
    localStorage.setItem('mostrarCompletadas', mostrarCompletadas.toString());
  }, [mostrarCompletadas])
  
  return (
    <div className="bg-white shadow-md shadow-white max-w-[600px] m-auto">
      <Header 
        mostrarCompletadas={mostrarCompletadas} 
        cambiarMostrarCompletadas={cambiarMostrarCompletadas}
      />
      <FormularioTareas tareas={tareas} cambiarTareas={cambiarTareas}/>
      <ListaTareas 
        tareas={tareas} 
        cambiarTareas={cambiarTareas}
        mostrarCompletadas={mostrarCompletadas}
      />
    </div>
  );
}

export default App;
