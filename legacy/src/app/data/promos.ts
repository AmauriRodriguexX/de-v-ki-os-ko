import modeloImg from "figma:asset/014ef29e28d3ebdfb3e9d1baf861f7644a2562d6.png";
import doritosImg from "figma:asset/4b0421d1cfd6de3a199c77375812926a602da24b.png";
import magnumImg from "figma:asset/3184b0a3d8971a80a9d8b91ea315bc4f44a6fe73.png";
import electrolitImg from "figma:asset/f1ee4434c4f32c0ed3bbdd7d17011e232f7fd506.png";
import santaRitaImg from "figma:asset/5b9982ab82efe4c428a7b3a5327ead52a26923d9.png";

export interface Promo {
  id: string;
  name: string;
  description: string;
  category: string;
  badge: string;
  badgeBg: string;
  badgeColor: string;
  price: string;
  savings?: string;
  vigencia: string;
  image: string;
  yayaPoints?: number;
}

export const promos: Promo[] = [
  {
    id: "1",
    name: "Cerveza Modelo Especial 12 Pack",
    description: "La cerveza que todos quieren al mejor precio",
    category: "Miércoles Cervecero",
    badge: "Miércoles",
    badgeBg: "#EBF6FD",
    badgeColor: "#045098",
    price: "$189",
    savings: "Ahorra $40",
    vigencia: "Solo miércoles",
    image: modeloImg,
    yayaPoints: 38,
  },
  {
    id: "2",
    name: "Doritos + Salsa Valentina",
    description: "Combo perfecto para compartir",
    category: "Botanas",
    badge: "Promo del día",
    badgeBg: "#FFF3B8",
    badgeColor: "#A07800",
    price: "$45",
    savings: "Ahorra $15",
    vigencia: "Hoy 12 Mar",
    image: doritosImg,
    yayaPoints: 12,
  },
  {
    id: "3",
    name: "Paleta Magnum Doble Chocolate",
    description: "El placer helado que te mereces",
    category: "Helados",
    badge: "Nuevo",
    badgeBg: "#D4EDCA",
    badgeColor: "#2D6B1B",
    price: "$35",
    vigencia: "Hasta agotar existencias",
    image: magnumImg,
    yayaPoints: 8,
  },
  {
    id: "4",
    name: "Electrolit 625ml",
    description: "Hidratación inteligente para tu día",
    category: "Hidratación",
    badge: "Promo del día",
    badgeBg: "#FFF3B8",
    badgeColor: "#A07800",
    price: "2x$40",
    savings: "Ahorra $18",
    vigencia: "Hoy 12 Mar",
    image: electrolitImg,
    yayaPoints: 10,
  },
  {
    id: "5",
    name: "Vino Tinto Santa Rita 120",
    description: "Perfecto para la cena de hoy",
    category: "Vinos y Licores",
    badge: "Últimas piezas",
    badgeBg: "#FFD5D5",
    badgeColor: "#A00000",
    price: "$129",
    savings: "Ahorra $30",
    vigencia: "Hasta agotar",
    image: santaRitaImg,
    yayaPoints: 25,
  },
  {
    id: "6",
    name: "Coca-Cola 600ml",
    description: "Refresca tu día al mejor precio",
    category: "Hidratación",
    badge: "Promo del día",
    badgeBg: "#FFF3B8",
    badgeColor: "#A07800",
    price: "2x$35",
    savings: "Ahorra $11",
    vigencia: "Lun-Vie",
    image: "https://images.unsplash.com/photo-1769720754590-168f18fb538d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2RhJTIwY2FucyUyMHJlZnJlc2hpbmclMjBjb2xkfGVufDF8fHx8MTc3MzI4OTM5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    yayaPoints: 8,
  },
];

export const categories = [
  "Todos",
  "Miércoles Cervecero",
  "Botanas",
  "Helados",
  "Hidratación",
  "Vinos y Licores",
  "Súper Lunes",
];

export interface Sucursal {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  distance: string;
  hours: string;
  services: string[];
  lat: number;
  lng: number;
}

export const sucursales: Sucursal[] = [
  // Colima, Colima
  {
    id: "1",
    name: "Kiosko Panteón",
    address: "Camino Real 1985, Jardines de Loma, Camino Real, 28014 Colima, Col.",
    city: "Colima",
    state: "Colima",
    distance: "",
    hours: "6:00 - 23:00",
    services: ["Recargas", "Pago de servicios", "YAYA"],
    lat: 19.2384,
    lng: -103.7345,
  },
  {
    id: "2",
    name: "Kiosko San Fernando",
    address: "Av. San Fernando #49, Col. Guadalajarita, Lomas de Circunvalación, 28010 Colima, Col.",
    city: "Colima",
    state: "Colima",
    distance: "",
    hours: "6:00 - 23:00",
    services: ["Recargas", "YAYA", "Hot Dogs"],
    lat: 19.2460,
    lng: -103.7180,
  },
  {
    id: "3",
    name: "Cedis Kiosko",
    address: "C. Netzahualcóyotl 459, Centro, 28000 Colima, Col.",
    city: "Colima",
    state: "Colima",
    distance: "",
    hours: "24 horas",
    services: ["Recargas", "Pago de servicios", "YAYA", "Café"],
    lat: 19.2433,
    lng: -103.7247,
  },
  {
    id: "4",
    name: "Kiosko Las Torres",
    address: "C. República de Colombia, Pablo Silva García, 28047 Colima, Col.",
    city: "Colima",
    state: "Colima",
    distance: "",
    hours: "6:00 - 23:00",
    services: ["Recargas", "YAYA"],
    lat: 19.2590,
    lng: -103.7400,
  },
  {
    id: "5",
    name: "Kiosko Constitución",
    address: "Av. Constitución 1452, Jardines Vista Hermosa III, 28017 Colima, Col.",
    city: "Colima",
    state: "Colima",
    distance: "",
    hours: "6:00 - 00:00",
    services: ["Recargas", "Pago de servicios", "YAYA", "Hot Dogs"],
    lat: 19.2320,
    lng: -103.7090,
  },
  // Puerto Vallarta, Jalisco
  {
    id: "6",
    name: "Kiosko Independencia",
    address: "C. Melchor Múzquiz 192, Independencia, 48327 Puerto Vallarta, Jal.",
    city: "Puerto Vallarta",
    state: "Jalisco",
    distance: "",
    hours: "6:00 - 23:00",
    services: ["Recargas", "Pago de servicios", "YAYA"],
    lat: 20.6220,
    lng: -105.2230,
  },
  {
    id: "7",
    name: "Kiosko Villas del Mar",
    address: "C. Politécnico Nacional 348, Villas del Mar, 48315 Puerto Vallarta, Jal.",
    city: "Puerto Vallarta",
    state: "Jalisco",
    distance: "",
    hours: "24 horas",
    services: ["Recargas", "YAYA", "Hot Dogs", "Café"],
    lat: 20.6500,
    lng: -105.2270,
  },
  {
    id: "8",
    name: "Kiosko Marina Vallarta",
    address: "Av. Paseo de la Marina Local 9, Marina Vallarta, 48385 Puerto Vallarta, Jal.",
    city: "Puerto Vallarta",
    state: "Jalisco",
    distance: "",
    hours: "6:00 - 00:00",
    services: ["Recargas", "Pago de servicios", "YAYA", "Café"],
    lat: 20.6600,
    lng: -105.2470,
  },
  // Tepic, Nayarit
  {
    id: "9",
    name: "Kiosko Lindavista",
    address: "Mississippi 57, Lindavista, 63110 Tepic, Nay.",
    city: "Tepic",
    state: "Nayarit",
    distance: "",
    hours: "6:00 - 23:00",
    services: ["Recargas", "Pago de servicios"],
    lat: 21.5130,
    lng: -104.8850,
  },
  {
    id: "10",
    name: "Kiosko Castilla",
    address: "Castilla, 63196 Tepic, Nay.",
    city: "Tepic",
    state: "Nayarit",
    distance: "",
    hours: "6:00 - 23:00",
    services: ["Recargas", "YAYA"],
    lat: 21.4880,
    lng: -104.8650,
  },
  {
    id: "11",
    name: "Kiosko La Huerta",
    address: "Av. Ignacio Allende Pte 1101, La Huerta, 63070 Tepic, Nay.",
    city: "Tepic",
    state: "Nayarit",
    distance: "",
    hours: "24 horas",
    services: ["Recargas", "Pago de servicios", "YAYA", "Café"],
    lat: 21.5085,
    lng: -104.9030,
  },
  {
    id: "12",
    name: "Kiosko Moctezuma",
    address: "Lib. Nogales, Moctezuma, 63180 Tepic, Nay.",
    city: "Tepic",
    state: "Nayarit",
    distance: "",
    hours: "6:00 - 23:00",
    services: ["Recargas", "YAYA", "Hot Dogs"],
    lat: 21.4950,
    lng: -104.8550,
  },
  {
    id: "13",
    name: "Kiosko Gobernadores",
    address: "Blvr. Gobernadores 56, Gobernadores, 63175 Tepic, Nay.",
    city: "Tepic",
    state: "Nayarit",
    distance: "",
    hours: "6:00 - 00:00",
    services: ["Recargas", "Pago de servicios", "YAYA"],
    lat: 21.5000,
    lng: -104.8700,
  },
  // Mazatlán, Sinaloa
  {
    id: "14",
    name: "Kiosko Palos Prietos",
    address: "Benemérito de las Américas 1911, Palos Prietos, 82010 Mazatlán, Sin.",
    city: "Mazatlán",
    state: "Sinaloa",
    distance: "",
    hours: "6:00 - 23:00",
    services: ["Recargas", "Pago de servicios", "YAYA"],
    lat: 23.2380,
    lng: -106.4260,
  },
  {
    id: "15",
    name: "Kiosko Centro",
    address: "P.º Claussen 24, Centro, 82000 Mazatlán, Sin.",
    city: "Mazatlán",
    state: "Sinaloa",
    distance: "",
    hours: "24 horas",
    services: ["Recargas", "Pago de servicios", "YAYA", "Hot Dogs", "Café"],
    lat: 23.1934,
    lng: -106.4245,
  },
  {
    id: "16",
    name: "Kiosko El Encanto",
    address: "Av. del Tiburón 1901, El Encanto, 82100 Mazatlán, Sin.",
    city: "Mazatlán",
    state: "Sinaloa",
    distance: "",
    hours: "6:00 - 23:00",
    services: ["Recargas", "YAYA"],
    lat: 23.2620,
    lng: -106.4480,
  },
  {
    id: "17",
    name: "Kiosko Zona Costera I",
    address: "Av. Sábalo Cerritos 3333, Zona Costera, 82148 Mazatlán, Sin.",
    city: "Mazatlán",
    state: "Sinaloa",
    distance: "",
    hours: "6:00 - 00:00",
    services: ["Recargas", "Pago de servicios", "YAYA", "Caf��"],
    lat: 23.2790,
    lng: -106.4560,
  },
  {
    id: "18",
    name: "Kiosko Zona Costera II",
    address: "Av. Sábalo Cerritos 3207, Zona Costera, 82148 Mazatlán, Sin.",
    city: "Mazatlán",
    state: "Sinaloa",
    distance: "",
    hours: "6:00 - 23:00",
    services: ["Recargas", "Pago de servicios", "YAYA"],
    lat: 23.2770,
    lng: -106.4540,
  },
];