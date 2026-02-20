import { useState, useEffect } from "react";
import type { Dificultad, Categoria, Receta } from "../types";

interface RecetaFormularioProps {
  onAgregar: (receta: Omit<Receta, "id">) => void;
  recetaEditando?: Receta | null;
  onActualizar?: (id: string, receta: Omit<Receta, "id">) => void;
  onCancelarEdicion?: () => void;
}

export default function RecetaFormulario({
  onAgregar,
  recetaEditando,
  onActualizar,
}: RecetaFormularioProps) {
  //campos del formulario
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [ingredientesTexto, setIngredientesTexto] = useState("");
  const [tiempoPreparacion, setTiempoPreparacion] = useState(0);
  const [dificultad, setDificultad] = useState<Dificultad>("Fácil");
  const [categoria, setCategoria] = useState<Categoria>("Plato Principal");

  const limpiarFormulario = () => {
    setTitulo("");
    setDescripcion("");
    setIngredientesTexto("");
    setTiempoPreparacion(0);
    setDificultad("Fácil");
    setCategoria("Plato Principal");
  };
  useEffect(() => {
    if (recetaEditando) {
      //Para que no me de error el setTitulo pongo la siguiente linea
      // eslint-disable-next-line react-hooks/exhaustive-deps
      setTitulo(recetaEditando.titulo);
      setDescripcion(recetaEditando.descripcion);
      //para que se pueda introducir separado por comas
      setIngredientesTexto(recetaEditando.ingredientes.join(", "));
      setTiempoPreparacion(recetaEditando.tiempoPreparacion);
      setDificultad(recetaEditando.dificultad);
      setCategoria(recetaEditando.categoria);
    } else {
      limpiarFormulario();
    }
  }, [recetaEditando]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!titulo) return;
    const arrayIngredientes = ingredientesTexto
      .split(",")
      .map((item) => item.trim());

    const datosReceta = {
      titulo,
      descripcion,
      ingredientes: arrayIngredientes,
      tiempoPreparacion,
      dificultad,
      categoria,
    };

    if (recetaEditando && onActualizar && recetaEditando.id) {
      onActualizar(recetaEditando.id, datosReceta);
    } else {
      onAgregar(datosReceta);
      alert("¡Receta guardada!");
    }

    limpiarFormulario();
  };

  return (
    <div>
      <h2>{recetaEditando ? "Editar Receta" : "Añadir Nueva Receta"}</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Título: </label>
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Descripción: </label>
          <textarea
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Ingredientes (separados por comas): </label>
          <input
            type="text"
            value={ingredientesTexto}
            onChange={(e) => setIngredientesTexto(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Tiempo (minutos): </label>
          <input
            type="number"
            value={tiempoPreparacion}
            onChange={(e) => setTiempoPreparacion(Number(e.target.value))}
            required
          />
        </div>

        <div>
          <label>Dificultad: </label>
          <select
            value={dificultad}
            onChange={(e) => setDificultad(e.target.value as Dificultad)}
          >
            <option value="Facil">Facil</option>
            <option value="Media">Media</option>
            <option value="Dificil">Dificil</option>
          </select>
        </div>

        <div>
          <label>Categoria: </label>
          <select
            value={categoria}
            onChange={(e) => setCategoria(e.target.value as Categoria)}
          >
            <option value="Entrante">Entrante</option>
            <option value="Plato Principal">Plato Principal</option>
            <option value="Postre">Postre</option>
            <option value="Bebida">Bebida</option>
          </select>
        </div>

        <button type="submit">
          {recetaEditando ? "Actualizar Receta" : "Guardar Receta"}
        </button>
      </form>
    </div>
  );
}
