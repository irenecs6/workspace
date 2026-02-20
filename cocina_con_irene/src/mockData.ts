import type { Receta } from "./types";

export const recetasMock: Receta[] = [
  {
    id: "1",
    titulo: "Tortilla de Patatas",
    descripcion: "Receta española",
    ingredientes: ["Patatas", "Huevos", "Cebolla", "Aceite de oliva", "Sal"],
    tiempoPreparacion: 40,
    dificultad: "Media",
    categoria: "Plato Principal",
  },
  {
    id: "2",
    titulo: "Gazpacho",
    descripcion: "Ideal para los dias de calor",
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
