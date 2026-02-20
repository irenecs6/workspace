import "./App.css";
import { useState, useEffect } from "react";
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "./firebase";
import type { Receta } from "./types";
import ListaRecetas from "./components/ListaRecetas";
import RecetaFormulario from "./components/RecetaFormulario";

function App() {
  const [recetas, setRecetas] = useState<Receta[]>([]);
  const [cargando, setCargando] = useState(true);
  const [recetaEditando, setRecetaEditando] = useState<Receta | null>(null);

  // recetas en la bd
  const coleccionRecetas = collection(db, "recetas");

  useEffect(() => {
    const obtenerRecetas = async () => {
      const respuesta = await getDocs(coleccionRecetas);
      const lista = respuesta.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),  //copia el contenido
      })) as Receta[];

      setRecetas(lista);
      setCargando(false);
    };

    obtenerRecetas();
  }, []);


  const agregarReceta = async (nuevaReceta: Omit<Receta, "id">) => {
    try {
      const docRef = await addDoc(coleccionRecetas, nuevaReceta);
      //copia todo y le añade el 'id' del Firebase
      const recetaConId = { ...nuevaReceta, id: docRef.id };
    //conforme se meta recetas aparexca arriba
      setRecetas([recetaConId, ...recetas]);
    } catch (error) {
      alert("Error al guardar");
    }
  };


  const eliminarReceta = async (id: string) => {
    if (!window.confirm("¿Seguro que quieres borrar esta receta con lo rica que esta?")) return;

    try {
      //borramo usando su ID en Firebase
      await deleteDoc(doc(db, "recetas", id));
      setRecetas(recetas.filter((r) => r.id !== id));
      alert("Eliminada correctamente");
    } catch (error) {
      alert("Error al borrar");
    }
  };

  const actualizarReceta = async (id: string, datosActualizados: Omit<Receta, "id">) => {
    try {
      //busco la receta en Firebase y le cambiamos los datos
      const recetaRef = doc(db, "recetas", id);
      await updateDoc(recetaRef, datosActualizados);
      //si es la receta insertamo los datos nuevos con su ID
      setRecetas(recetas.map((r) => (r.id === id ? { ...datosActualizados, id } : r)));
      setRecetaEditando(null);
      alert("¡Receta actualizada!");
    } catch (error) {
      alert("Error al actualizar");
    }
  };

  return (
    <div className="app-container">
      <h1>Cocina con Irene</h1>
      
      {/* El formulario sirve para crear y editar */}
      <RecetaFormulario 
        onAgregar={agregarReceta} 
        recetaEditando={recetaEditando}
        onActualizar={actualizarReceta}
        onCancelarEdicion={() => setRecetaEditando(null)} 
      />

      <hr />

      {cargando ? (
        <p>Cargando recetas...</p>
      ) : (
        <ListaRecetas 
          recetas={recetas} 
          onEliminar={eliminarReceta} 
          onEditar={setRecetaEditando}
        />
      )}
    </div>
  );
}

export default App;