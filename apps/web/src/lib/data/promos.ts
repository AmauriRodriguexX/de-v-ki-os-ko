// Datos sembrados desde el proyecto original. En la arquitectura final
// esto vendrá de Strapi vía FastAPI; por ahora alimenta la Home igual que antes.
const A = '/assets';

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
    id: '1', name: 'Cerveza Modelo Especial 12 Pack', description: 'La cerveza que todos quieren al mejor precio',
    category: 'Miércoles Cervecero', badge: 'Miércoles', badgeBg: '#EBF6FD', badgeColor: '#045098',
    price: '$189', savings: 'Ahorra $40', vigencia: 'Solo miércoles',
    image: `${A}/014ef29e28d3ebdfb3e9d1baf861f7644a2562d6.png`, yayaPoints: 38
  },
  {
    id: '2', name: 'Doritos + Salsa Valentina', description: 'Combo perfecto para compartir',
    category: 'Antojo', badge: 'Promo del día', badgeBg: '#FFF3B8', badgeColor: '#A07800',
    price: '$45', savings: 'Ahorra $15', vigencia: 'Hoy 12 Mar',
    image: `${A}/4b0421d1cfd6de3a199c77375812926a602da24b.png`, yayaPoints: 12
  },
  {
    id: '3', name: 'Paleta Magnum Doble Chocolate', description: 'El placer helado que te mereces',
    category: 'Antojo', badge: 'Nuevo', badgeBg: '#D4EDCA', badgeColor: '#2D6B1B',
    price: '$35', vigencia: 'Hasta agotar existencias',
    image: `${A}/3184b0a3d8971a80a9d8b91ea315bc4f44a6fe73.png`, yayaPoints: 8
  },
  {
    id: '4', name: 'Electrolit 625ml', description: 'Hidratación inteligente para tu día',
    category: 'Bebidas', badge: 'Promo del día', badgeBg: '#FFF3B8', badgeColor: '#A07800',
    price: '2x$40', savings: 'Ahorra $18', vigencia: 'Hoy 12 Mar',
    image: `${A}/f1ee4434c4f32c0ed3bbdd7d17011e232f7fd506.png`, yayaPoints: 10
  },
  {
    id: '5', name: 'Vino Tinto Santa Rita 120', description: 'Perfecto para la cena de hoy',
    category: 'Cerveza, vinos y licores', badge: 'Últimas piezas', badgeBg: '#FFD5D5', badgeColor: '#A00000',
    price: '$129', savings: 'Ahorra $30', vigencia: 'Hasta agotar',
    image: `${A}/5b9982ab82efe4c428a7b3a5327ead52a26923d9.png`, yayaPoints: 25
  },
  {
    id: '6', name: 'Coca-Cola 600ml', description: 'Refresca tu día al mejor precio',
    category: 'Bebidas', badge: 'Promo del día', badgeBg: '#FFF3B8', badgeColor: '#A07800',
    price: '2x$35', savings: 'Ahorra $11', vigencia: 'Lun-Vie',
    image: 'https://images.unsplash.com/photo-1769720754590-168f18fb538d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    yayaPoints: 8
  }
];

export const categories = [
  'Todos',
  'Miércoles Cervecero',
  'Cerveza, vinos y licores',
  'Antojo',
  'Bebidas',
  'Súper Lunes'
];
