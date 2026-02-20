import type { Receta } from "../types";

interface ListaRecetasProps {
  recetas: Receta[];
  onEliminar: (id: string) => void;
  onEditar: (receta: Receta) => void;
}

export default function ListaRecetas({
  recetas,
  onEliminar,
  onEditar,
}: ListaRecetasProps) {
  return (
    <div>
      <h2>Mis Recetas</h2>

      {recetas.length === 0 ? (
        <p>No hay recetas</p>
      ) : (
        <ul>
          {recetas.map((receta) => (
            <li key={receta.id}>
              <h3>{receta.titulo}</h3>

              <p>{receta.descripcion}</p>

              <p>
                <strong>Categoría:</strong> {receta.categoria}
                <br />
                <strong> Dificultad:</strong> {receta.dificultad}
                <br />
                <strong> Tiempo:</strong> {receta.tiempoPreparacion} min
              </p>
              <div className="botones">
                <button
                  onClick={() => onEditar(receta)}
                  style={{ backgroundColor: "#fbac5e4e" }}
                >
                  Editar Receta
                </button>

                <button
                  onClick={() => onEliminar(receta.id as string)}
                  style={{ backgroundColor: "#fb5e5e72" }}
                >
                  Eliminar Receta
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
