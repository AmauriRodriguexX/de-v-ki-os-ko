import cervezaPapasImg from "figma:asset/66cb57d7d4807f5438660b57fc748ff87d6616e7.png";
import electrolitBarraImg from "figma:asset/ef8f9145d3b61b035dd9f1754ef704cca0e42d3f.png";
import ronCocaImg from "figma:asset/b71004d889a2f113c5e4a91ca2c36ff64b115ab5.png";

export interface CrossingPromo {
  id: string;
  label: string;
  description: string;
  productA: { name: string; emoji: string; price: string };
  productB: { name: string; emoji: string; price: string };
  comboPrice: string;
  saving: string;
  activeDays: number[]; // 0=domingo, 1=lunes... vacío = todos los días
  yayaPoints: number;
  imageUrl?: string; // Imagen del combo
  dayText?: string; // Texto del día válido
}

export const crossingPromos: CrossingPromo[] = [
  {
    id: "combo-1",
    label: "Cerveza + Papas Sabritas",
    description: "Caguama Tecate 940ml + Sabritas 160g, solo hoy. Pregunta por los combos del día en sucursal.",
    dayText: "Válido solo para el día martes",
    productA: { name: "Caguama Tecate", emoji: "🍺", price: "$42" },
    productB: { name: "Sabritas 160g", emoji: "🥔", price: "$35" },
    comboPrice: "$59",
    saving: "Ahorras $18",
    activeDays: [], // todos los días
    yayaPoints: 15,
    imageUrl: cervezaPapasImg,
  },
  {
    id: "combo-2",
    label: "Electrolit + Barra de Cereal",
    description: "Electrolit 625ml + Barra de cereal 30g, solo hoy. Pregunta por los combos del día en sucursal.",
    dayText: "Válido de lunes a viernes",
    productA: { name: "Electrolit 625ml", emoji: "💧", price: "$29" },
    productB: { name: "Barra de cereal", emoji: "🥜", price: "$22" },
    comboPrice: "$39",
    saving: "Ahorras $12",
    activeDays: [1, 2, 3, 4, 5], // lunes a viernes
    yayaPoints: 10,
    imageUrl: electrolitBarraImg,
  },
  {
    id: "combo-3",
    label: "Ron Bacardí + Coca-Cola",
    description: "Ron Bacardí 750ml + Coca-Cola 2L, solo hoy. Pregunta por los combos del día en sucursal.",
    dayText: "Válido solo para el día viernes",
    productA: { name: "Ron Bacardí 750ml", emoji: "🥃", price: "$189" },
    productB: { name: "Coca-Cola 2L", emoji: "🥤", price: "$35" },
    comboPrice: "$199",
    saving: "Ahorras $25",
    activeDays: [5], // viernes
    yayaPoints: 25,
    imageUrl: ronCocaImg,
  },
];