export type Dificultad = 'Fácil' | 'Media' | 'Difícil';
export type Categoria = 'Entrante' | 'Plato Principal' | 'Postre' | 'Bebida';

export interface Receta {
  id?: string;
  titulo: string;
  descripcion: string;
  imagenUrl: string; 
  ingredientes: string[];
  tiempoPreparacion: number;
  dificultad: Dificultad;
  categoria: Categoria;
}