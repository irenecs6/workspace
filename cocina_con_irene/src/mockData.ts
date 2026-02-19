import type { Receta } from "./types";

export const recetasMock: Receta[] = [
  {
    id: "1",
    titulo: "Tortilla de Patatas",
    descripcion: "Receta española",
    imagenUrl:
      "https://cdn.pixabay.com/photo/2015/01/22/17/02/tortilla-607995_1280.jpg",
    ingredientes: ["Patatas", "Huevos", "Cebolla", "Aceite de oliva", "Sal"],
    tiempoPreparacion: 40,
    dificultad: "Media",
    categoria: "Plato Principal",
  },
  {
    id: "2",
    titulo: "Gazpacho",
    descripcion: "Ideal para los dias de calor",
    imagenUrl:
      "https://cdn.pixabay.com/photo/2017/05/05/19/06/tomato-soup-2288056_1280.jpg",
    ingredientes: [
      "Tomate",
      "Pimiento verde",
      "Pepino",
      "Ajo",
      "Aceite",
      "Vinagre",
    ],
    tiempoPreparacion: 15,
    dificultad: "Fácil",
    categoria: "Entrante",
  },
];
