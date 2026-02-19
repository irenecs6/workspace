import { useState } from 'react';
import type { Dificultad, Categoria } from '../types';
//interface?
export default function FormularioReceta() {
  //cada campo del formulario
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [imagenUrl, setImagenUrl] = useState('');
  const [ingredientesTexto, setIngredientesTexto] = useState('');
  const [tiempoPreparacion, setTiempoPreparacion] = useState(0);
  const [dificultad, setDificultad] = useState<Dificultad>('Fácil');
  const [categoria, setCategoria] = useState<Categoria>('Plato Principal');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); //Evitamos que la página se recargue
    
    if (!titulo) return;
  };

  return (
    <div>
      <h2>Añadir Nueva Receta</h2>
      
      <form onSubmit={handleSubmit}>
        <div>
          <label>Título: </label>
          <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} required />
        </div>
        <br />

        <div>
          <label>Descripción: </label>
          <textarea value={descripcion} onChange={(e) => setDescripcion(e.target.value)} required />
        </div>
        <br />

        <div>
          <label>URL de la imagen: </label>
          <input type="text" value={imagenUrl} onChange={(e) => setImagenUrl(e.target.value)} required />
        </div>
        <br />

        <div>
          <label>Ingredientes (separados por comas): </label>
          <input type="text" value={ingredientesTexto} onChange={(e) => setIngredientesTexto(e.target.value)} required />
        </div>
        <br />

        <div>
          <label>Tiempo (minutos): </label>
          <input type="number" value={tiempoPreparacion} onChange={(e) => setTiempoPreparacion(Number(e.target.value))} required />
        </div>
        <br />

        <div>
          <label>Dificultad: </label>
          <select value={dificultad} onChange={(e) => setDificultad(e.target.value as Dificultad)}>
            <option value="Fácil">Fácil</option>
            <option value="Media">Media</option>
            <option value="Difícil">Difícil</option>
          </select>
        </div>
        <br />

        <div>
          <label>Categoría: </label>
          <select value={categoria} onChange={(e) => setCategoria(e.target.value as Categoria)}>
            <option value="Entrante">Entrante</option>
            <option value="Plato Principal">Plato Principal</option>
            <option value="Postre">Postre</option>
            <option value="Bebida">Bebida</option>
          </select>
        </div>
        <br />

        <button type="submit">Guardar Receta</button>
      </form>
    </div>
  );
}