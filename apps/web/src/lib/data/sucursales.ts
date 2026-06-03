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
  { id: '1', name: 'Kiosko Panteón', address: 'Camino Real 1985, Jardines de Loma, Camino Real, 28014 Colima, Col.', city: 'Colima', state: 'Colima', distance: '', hours: '6:00 - 23:00', services: ['Recargas', 'Pago de servicios', 'YAYA'], lat: 19.2384, lng: -103.7345 },
  { id: '2', name: 'Kiosko San Fernando', address: 'Av. San Fernando #49, Col. Guadalajarita, Lomas de Circunvalación, 28010 Colima, Col.', city: 'Colima', state: 'Colima', distance: '', hours: '6:00 - 23:00', services: ['Recargas', 'YAYA', 'Hot Dogs'], lat: 19.246, lng: -103.718 },
  { id: '3', name: 'Cedis Kiosko', address: 'C. Netzahualcóyotl 459, Centro, 28000 Colima, Col.', city: 'Colima', state: 'Colima', distance: '', hours: '24 horas', services: ['Recargas', 'Pago de servicios', 'YAYA', 'Café'], lat: 19.2433, lng: -103.7247 },
  { id: '4', name: 'Kiosko Las Torres', address: 'C. República de Colombia, Pablo Silva García, 28047 Colima, Col.', city: 'Colima', state: 'Colima', distance: '', hours: '6:00 - 23:00', services: ['Recargas', 'YAYA'], lat: 19.259, lng: -103.74 },
  { id: '5', name: 'Kiosko Constitución', address: 'Av. Constitución 1452, Jardines Vista Hermosa III, 28017 Colima, Col.', city: 'Colima', state: 'Colima', distance: '', hours: '6:00 - 00:00', services: ['Recargas', 'Pago de servicios', 'YAYA', 'Hot Dogs'], lat: 19.232, lng: -103.709 },
  // Puerto Vallarta, Jalisco
  { id: '6', name: 'Kiosko Independencia', address: 'C. Melchor Múzquiz 192, Independencia, 48327 Puerto Vallarta, Jal.', city: 'Puerto Vallarta', state: 'Jalisco', distance: '', hours: '6:00 - 23:00', services: ['Recargas', 'Pago de servicios', 'YAYA'], lat: 20.622, lng: -105.223 },
  { id: '7', name: 'Kiosko Villas del Mar', address: 'C. Politécnico Nacional 348, Villas del Mar, 48315 Puerto Vallarta, Jal.', city: 'Puerto Vallarta', state: 'Jalisco', distance: '', hours: '24 horas', services: ['Recargas', 'YAYA', 'Hot Dogs', 'Café'], lat: 20.65, lng: -105.227 },
  { id: '8', name: 'Kiosko Marina Vallarta', address: 'Av. Paseo de la Marina Local 9, Marina Vallarta, 48385 Puerto Vallarta, Jal.', city: 'Puerto Vallarta', state: 'Jalisco', distance: '', hours: '6:00 - 00:00', services: ['Recargas', 'Pago de servicios', 'YAYA', 'Café'], lat: 20.66, lng: -105.247 },
  // Tepic, Nayarit
  { id: '9', name: 'Kiosko Lindavista', address: 'Mississippi 57, Lindavista, 63110 Tepic, Nay.', city: 'Tepic', state: 'Nayarit', distance: '', hours: '6:00 - 23:00', services: ['Recargas', 'Pago de servicios'], lat: 21.513, lng: -104.885 },
  { id: '10', name: 'Kiosko Castilla', address: 'Castilla, 63196 Tepic, Nay.', city: 'Tepic', state: 'Nayarit', distance: '', hours: '6:00 - 23:00', services: ['Recargas', 'YAYA'], lat: 21.488, lng: -104.865 },
  { id: '11', name: 'Kiosko La Huerta', address: 'Av. Ignacio Allende Pte 1101, La Huerta, 63070 Tepic, Nay.', city: 'Tepic', state: 'Nayarit', distance: '', hours: '24 horas', services: ['Recargas', 'Pago de servicios', 'YAYA', 'Café'], lat: 21.5085, lng: -104.903 },
  { id: '12', name: 'Kiosko Moctezuma', address: 'Lib. Nogales, Moctezuma, 63180 Tepic, Nay.', city: 'Tepic', state: 'Nayarit', distance: '', hours: '6:00 - 23:00', services: ['Recargas', 'YAYA', 'Hot Dogs'], lat: 21.495, lng: -104.855 },
  { id: '13', name: 'Kiosko Gobernadores', address: 'Blvr. Gobernadores 56, Gobernadores, 63175 Tepic, Nay.', city: 'Tepic', state: 'Nayarit', distance: '', hours: '6:00 - 00:00', services: ['Recargas', 'Pago de servicios', 'YAYA'], lat: 21.5, lng: -104.87 },
  // Mazatlán, Sinaloa
  { id: '14', name: 'Kiosko Palos Prietos', address: 'Benemérito de las Américas 1911, Palos Prietos, 82010 Mazatlán, Sin.', city: 'Mazatlán', state: 'Sinaloa', distance: '', hours: '6:00 - 23:00', services: ['Recargas', 'Pago de servicios', 'YAYA'], lat: 23.238, lng: -106.426 },
  { id: '15', name: 'Kiosko Centro', address: 'P.º Claussen 24, Centro, 82000 Mazatlán, Sin.', city: 'Mazatlán', state: 'Sinaloa', distance: '', hours: '24 horas', services: ['Recargas', 'Pago de servicios', 'YAYA', 'Hot Dogs', 'Café'], lat: 23.1934, lng: -106.4245 },
  { id: '16', name: 'Kiosko El Encanto', address: 'Av. del Tiburón 1901, El Encanto, 82100 Mazatlán, Sin.', city: 'Mazatlán', state: 'Sinaloa', distance: '', hours: '6:00 - 23:00', services: ['Recargas', 'YAYA'], lat: 23.262, lng: -106.448 },
  { id: '17', name: 'Kiosko Zona Costera I', address: 'Av. Sábalo Cerritos 3333, Zona Costera, 82148 Mazatlán, Sin.', city: 'Mazatlán', state: 'Sinaloa', distance: '', hours: '6:00 - 00:00', services: ['Recargas', 'Pago de servicios', 'YAYA', 'Café'], lat: 23.279, lng: -106.456 },
  { id: '18', name: 'Kiosko Zona Costera II', address: 'Av. Sábalo Cerritos 3207, Zona Costera, 82148 Mazatlán, Sin.', city: 'Mazatlán', state: 'Sinaloa', distance: '', hours: '6:00 - 23:00', services: ['Recargas', 'Pago de servicios', 'YAYA'], lat: 23.277, lng: -106.454 }
];
