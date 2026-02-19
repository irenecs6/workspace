import type { Receta } from "../types";

interface ListaRecetasProps {
  recetas: Receta[];
}

export default function ListaRecetas({ recetas }: ListaRecetasProps) {
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
                <strong>Categoría:</strong> {receta.categoria} |
                <strong> Dificultad:</strong> {receta.dificultad} |
                <strong> Tiempo:</strong> {receta.tiempoPreparacion} min
              </p>
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
