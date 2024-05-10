import { OrderModel } from "@/models";

export const products: OrderModel["items"][0][] = [
  {
    name: "Frango ao molho",
    amount: 1,
    price: Math.random() * 100,
    extras: [{ amount: 1, name: "Tomate" }],
  },
  { name: "Prato Kids Parmegiana", price: Math.random() * 100, amount: 2 },
  {
    name: "Hambúrguer Tradicional",
    amount: 1,
    price: Math.random() * 100,
    extras: [
      { amount: 1, name: "Queijo" },
      { amount: 1, name: "Bacon" },
    ],
  },
  {
    name: "Pizza Margherita",
    amount: 1,
    price: Math.random() * 100,
    extras: [{ amount: 1, name: "Molho de Pesto" }],
  },
  {
    name: "Spaghetti Carbonara",
    amount: 2,
    price: Math.random() * 100,
  },
  {
    name: "Salada Caesar",
    amount: 1,
    price: Math.random() * 100,
    extras: [
      { amount: 1, name: "Frango Grelhado" },
      { amount: 1, name: "Croutons" },
    ],
  },
  {
    name: "Sushi Combo",
    amount: 1,
    price: Math.random() * 100,
    extras: [
      { amount: 1, name: "Sashimi de Salmão" },
      { amount: 1, name: "Sashimi de Atum" },
    ],
  },
  {
    name: "Taco de Camarão",
    amount: 3,
    price: Math.random() * 100,
    extras: [
      { amount: 1, name: "Guacamole" },
      { amount: 1, name: "Pimenta Jalapeño" },
    ],
  },
];
