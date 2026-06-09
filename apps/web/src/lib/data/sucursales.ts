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
  {
    "id": "12002",
    "name": "Kiosko Gas Armeria",
    "address": "Av Netzahualcoyotl 231 Centro, Armeria, Col., CP 28300",
    "city": "Armeria",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 18.93426794,
    "lng": -103.9725375
  },
  {
    "id": "12003",
    "name": "Kiosko Polideportivo",
    "address": "Av Marciano Cabrera 60 Tepeyac, Tecoman, Col., CP 28110",
    "city": "Tecoman",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 18.92526763,
    "lng": -103.8807287
  },
  {
    "id": "12004",
    "name": "Kiosko Imss Tecoman",
    "address": "Matamoros 99 Centro, Tecoman, Col., CP 28100",
    "city": "Tecoman",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 18.91224776,
    "lng": -103.8770174
  },
  {
    "id": "12005",
    "name": "Kiosko Pedro Torres",
    "address": "Pedro Torres Ortiz 455 Union, Tecoman, Col., CP 28130",
    "city": "Tecoman",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 18.91888489,
    "lng": -103.8825999
  },
  {
    "id": "12006",
    "name": "Kiosko Cofradia de Morelos",
    "address": "Carretera Playa Azul Mzllo Km 251-400 Centro, Tecoman, Col., CP 28100",
    "city": "Tecoman",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Hot Dogs"
    ],
    "lat": 18.863138338,
    "lng": -103.837558698
  },
  {
    "id": "12007",
    "name": "Kiosko Triangulito",
    "address": "Av Lopez Mateos 492 Centro, Tecoman, Col., CP 28100",
    "city": "Tecoman",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 18.91541773,
    "lng": -103.8766043
  },
  {
    "id": "12008",
    "name": "Kiosko Juan Oseguera",
    "address": "Av Juan Oseguera 225 Emiliano Zapata, Tecoman, Col., CP 28140",
    "city": "Tecoman",
    "state": "Colima",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 18.91399147,
    "lng": -103.8663819
  },
  {
    "id": "12009",
    "name": "Kiosko Gas Valle Nuevo",
    "address": "Matamoros 690 Bugambilias, Tecoman, Col., CP 28180",
    "city": "Tecoman",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 18.90638949,
    "lng": -103.8776716
  },
  {
    "id": "12010",
    "name": "Kiosko Emiliano Zapata",
    "address": "5 de Mayo 536 Centro, Tecoman, Col., CP 28100",
    "city": "Tecoman",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 18.91959136,
    "lng": -103.8775837
  },
  {
    "id": "12011",
    "name": "Kiosko Crucero Tecoman",
    "address": "Av Camino Real 503 Ma Esther Zuno, Tecoman, Col., CP 28100",
    "city": "Tecoman",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 18.944399436,
    "lng": -103.903279099
  },
  {
    "id": "12012",
    "name": "Kiosko Indeco",
    "address": "Pedro Gutierrez Sur 400 Francisco Villa, Tecoman, Col., CP 28170",
    "city": "Tecoman",
    "state": "Colima",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café",
      "Hot Dogs"
    ],
    "lat": 18.909305555,
    "lng": -103.885804543
  },
  {
    "id": "12014",
    "name": "Kiosko Gas Ticuiz",
    "address": "Carretera Tecoman Playa Azul Km 40 el Ticuiz, Coahuayana, Mich., CP 60800",
    "city": "Coahuayana",
    "state": "Michoacan",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 18.67481449,
    "lng": -103.680823
  },
  {
    "id": "12015",
    "name": "Kiosko Revolucion",
    "address": "Av Juan Oseguera Sur 415 Tecoman Centro, Tecoman, Col., CP 28100",
    "city": "Tecoman",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 18.9087787,
    "lng": -103.8661126
  },
  {
    "id": "12016",
    "name": "Kiosko Cerro de Ortega",
    "address": "Carretera Playa Azul Mzllo Km 234 +633 Cerro de Ortega, Tecoman, Col., CP 28100",
    "city": "Tecoman",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 18.761980941,
    "lng": -103.73016145
  },
  {
    "id": "12017",
    "name": "Kiosko Pipila",
    "address": "Pipila 129 las Palmas, Tecoman, Col., CP 28180",
    "city": "Tecoman",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 18.907363147,
    "lng": -103.873780311
  },
  {
    "id": "12018",
    "name": "Kiosko Palma Real",
    "address": "Carlos de la Madrid Sn Palma Real, Tecoman, Col., CP 28134",
    "city": "Tecoman",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 18.923104,
    "lng": -103.889605
  },
  {
    "id": "12019",
    "name": "Kiosko Oaxaca",
    "address": "Av Manuel Alvarez 161 Centro, Armeria, Col., CP 28300",
    "city": "Armeria",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 18.939836294,
    "lng": -103.965326068
  },
  {
    "id": "12020",
    "name": "Kiosko Valle Querido",
    "address": "Morelos 1301 Real del Valle, Tecoman, Col., CP 28123",
    "city": "Tecoman",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 18.92618306,
    "lng": -103.872538536
  },
  {
    "id": "12021",
    "name": "Kiosko Villas del Rey",
    "address": "Rio Cupatitzio 111 Primaveras del Real, Tecoman, Col., CP 28180",
    "city": "Tecoman",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 18.899309815,
    "lng": -103.882295081
  },
  {
    "id": "12022",
    "name": "Kiosko Gas Caleras",
    "address": "Carretera Estatal Puerta Caleras-madrid Km 1 Puerta Caleras, Tecoman, Col., CP 28930",
    "city": "Tecoman",
    "state": "Colima",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 18.977910472,
    "lng": -103.858285868
  },
  {
    "id": "12023",
    "name": "Kiosko Periquillo",
    "address": "5 de Febrero 77 Cofradia de Juarez, Armeria, Col., CP 28320",
    "city": "Armeria",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 18.960045633,
    "lng": -103.953217821
  },
  {
    "id": "12024",
    "name": "Kiosko La Estacion",
    "address": "Degollado 10 Ejido, Armeria, Col., CP 28305",
    "city": "Armeria",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 18.933848381,
    "lng": -103.964226258
  },
  {
    "id": "12025",
    "name": "Kiosko Rio Balsas",
    "address": "Rio Balsas 103 Libertad, Tecoman, Col., CP 28170",
    "city": "Tecoman",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 18.901524949,
    "lng": -103.890913149
  },
  {
    "id": "12026",
    "name": "Kiosko Gas Limonero",
    "address": "Av Insurgentes 2800 Cofradia de Juarez, Tecoman, Col., CP 28120",
    "city": "Tecoman",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 18.940391166,
    "lng": -103.894372582
  },
  {
    "id": "12027",
    "name": "Kiosko Real del Bosque",
    "address": "Av Independencia 1402 Real del Bosque, Tecoman, Col., CP 28123",
    "city": "Tecoman",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Hot Dogs"
    ],
    "lat": 18.927285007,
    "lng": -103.868949275
  },
  {
    "id": "12028",
    "name": "Kiosko Gas Coahuayana",
    "address": "Av Constitucion 35 Centro, Coahuayana, Mich., CP 60800",
    "city": "Coahuayana",
    "state": "Michoacan",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 18.697042986,
    "lng": -103.665869115
  },
  {
    "id": "12030",
    "name": "Kiosko Gas Tecolapa",
    "address": "Carretera Km 31 Autopista Colima Manzanillo Sn, Tecoman, Col., CP 28920",
    "city": "Tecoman",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.002542,
    "lng": -103.835695
  },
  {
    "id": "12031",
    "name": "Kiosko Hospital Tecoman",
    "address": "Cuauhtemoc 371 la Palmita, Tecoman, Col., CP 28150",
    "city": "Tecoman",
    "state": "Colima",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Hot Dogs"
    ],
    "lat": 18.906971,
    "lng": -103.882572
  },
  {
    "id": "12032",
    "name": "Kiosko Carlos de la Madrid",
    "address": "Av Carlos de la Madrid Nte 604 Sor Juana Ines de la Cruz, Tecoman, Col., CP 28134",
    "city": "Tecoman",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 18.920104,
    "lng": -103.889293
  },
  {
    "id": "12033",
    "name": "Kiosko De Mayo",
    "address": "Av Netzahualcoyotl 74 Centro, Armeria, Col., CP 28300",
    "city": "Armeria",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 18.935673,
    "lng": -103.966737
  },
  {
    "id": "12034",
    "name": "Kiosko El Ranchito",
    "address": "Av Constitucion 7 Centro, Coahuayana, Mich., CP 60800",
    "city": "Coahuayana",
    "state": "Michoacan",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 18.688828,
    "lng": -103.661731
  },
  {
    "id": "12035",
    "name": "Kiosko De Noviembre",
    "address": "Av 20 de Noviembre 399 Centro, Tecoman, Col., CP 28100",
    "city": "Tecoman",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 18.910443,
    "lng": -103.875815
  },
  {
    "id": "12036",
    "name": "Kiosko Crucero Boca de Apiza",
    "address": "Carr Manzanillo-playa Azul 20 San Vicente, Coahuayana, Mich., CP 60804",
    "city": "Coahuayana",
    "state": "Michoacan",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Hot Dogs"
    ],
    "lat": 18.70981,
    "lng": -103.709442
  },
  {
    "id": "12037",
    "name": "Kiosko De los Maestros",
    "address": "Bahia de Salagua 1 Gustavo Diaz Ordaz, Tecoman, Col., CP 28190",
    "city": "Tecoman",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 18.896838,
    "lng": -103.876669
  },
  {
    "id": "12038",
    "name": "Kiosko Pino Suarez",
    "address": "Pipila 136 Centro, Tecoman, Col., CP 28900",
    "city": "Tecoman",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 18.751299,
    "lng": -103.720952
  },
  {
    "id": "12039",
    "name": "Kiosko Bosques de San Antonio",
    "address": "Callejon Valle Querido 1100 Fracc Bosques de San Antonio, Tecoman, Col., CP 28113",
    "city": "Tecoman",
    "state": "Colima",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 18.935437,
    "lng": -103.884633
  },
  {
    "id": "12040",
    "name": "Kiosko El Chamizal",
    "address": "Av Jorge Ochoa 98 Jardines de Tecoman, Tecoman, Col., CP 28140",
    "city": "Tecoman",
    "state": "Colima",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 18.916669,
    "lng": -103.86352
  },
  {
    "id": "12042",
    "name": "Kiosko Santiago Tapia",
    "address": "Av Ignacio Zaragoza 100 Centro, Coahuayana, Mich., CP 60800",
    "city": "Coahuayana",
    "state": "Michoacan",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café",
      "Hot Dogs"
    ],
    "lat": 18.704431,
    "lng": -103.661172
  },
  {
    "id": "12043",
    "name": "Kiosko Panteon Armeria",
    "address": "Av Cuauhtemoc 279 Lazaro Cardenas, Tecoman, Col., CP 28304",
    "city": "Tecoman",
    "state": "Colima",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 18.93742,
    "lng": -103.954338
  },
  {
    "id": "12044",
    "name": "Kiosko Simon Bolivar",
    "address": "Av Carlos de la Madrid Sur 207 Hacienda la Loma, Tecoman, Col., CP 28133",
    "city": "Tecoman",
    "state": "Colima",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 18.912425,
    "lng": -103.889491
  },
  {
    "id": "12045",
    "name": "Kiosko Ixtlahuacan",
    "address": "Morelos 22 No Especificada, Ixtlahuacan, Col., CP 28700",
    "city": "Ixtlahuacan",
    "state": "Colima",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 19.000783,
    "lng": -103.738936
  },
  {
    "id": "12046",
    "name": "Kiosko De la Juventud",
    "address": "Av. de la Juventud 730 Palma Real, Tecoman, Col., CP 28134",
    "city": "Tecoman",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 18.923051,
    "lng": -103.894098
  },
  {
    "id": "12047",
    "name": "Kiosko Ignacio Ramirez",
    "address": "Carretera Entronque Playa Azul - Manzanillo S/n Col Hermanos Leanos, Tecoman, Col., CP 28900",
    "city": "Tecoman",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 18.754004,
    "lng": -103.724504
  },
  {
    "id": "12048",
    "name": "Kiosko Union",
    "address": "Av de la Juventud 75 la Union, Tecoman, Col., CP 28130",
    "city": "Tecoman",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 18.922717,
    "lng": -103.884537
  },
  {
    "id": "12049",
    "name": "Kiosko Rio Grijalva",
    "address": "Rio Grijalva 265 el Relicario, Tecoman, Col., CP 28150",
    "city": "Tecoman",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 18.908338,
    "lng": -103.887868
  },
  {
    "id": "12050",
    "name": "Kiosko Leona Vicario",
    "address": "Vieja Guardia Agrarista 99 Graciano Sanchez, Tecoman, Col., CP 28935",
    "city": "Tecoman",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 18.865549,
    "lng": -103.838265
  },
  {
    "id": "12051",
    "name": "Kiosko Jardines",
    "address": "Calle Valentin Gomez Farias Ote 740 Jardines del Chamizal, Tecoman, Col., CP 28140",
    "city": "Tecoman",
    "state": "Colima",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café",
      "Hot Dogs"
    ],
    "lat": 18.919851,
    "lng": -103.865801
  },
  {
    "id": "12052",
    "name": "Kiosko Madrid",
    "address": "Calle Honduras 385 Madrid, Tecoman, Col., CP 28910",
    "city": "Tecoman",
    "state": "Colima",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 19.082975,
    "lng": -103.869906
  },
  {
    "id": "12053",
    "name": "Kiosko Coahuayana Viejo",
    "address": "20 de Noviembre Sur 55 Coahuayana Viejo, Coahuayana, Mich., CP 28100",
    "city": "Coahuayana",
    "state": "Michoacan",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 18.749674,
    "lng": -103.669452
  },
  {
    "id": "12054",
    "name": "Kiosko Reforma",
    "address": "Reforma 116 Centro, Tecoman, Col., CP 28100",
    "city": "Tecoman",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 18.913343,
    "lng": -103.870635
  },
  {
    "id": "12055",
    "name": "Kiosko Mayor Patricio",
    "address": "Av. Juan Oseguera Velazquez 1128, Tecoman, Col., CP 28140",
    "city": "Tecoman",
    "state": "Colima",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 18.926015,
    "lng": -103.8645
  },
  {
    "id": "12057",
    "name": "Kiosko Tlaxcala",
    "address": "Tlaxcala 158 el Pelillo, Armeria, Col., CP 28307",
    "city": "Armeria",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 18.941355,
    "lng": -103.970476
  },
  {
    "id": "12058",
    "name": "Kiosko Constitucion",
    "address": "Av. Constitucion 607-a Av. Constitucion y Esq. Emiliano Zapata, Coahuayana, Mich., CP 60800",
    "city": "Coahuayana",
    "state": "Michoacan",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Hot Dogs"
    ],
    "lat": 18.684868,
    "lng": -103.666265
  },
  {
    "id": "12059",
    "name": "Kiosko Bayardo",
    "address": "Calzada Independencia 407 el Bayardo, Tecoman, Col., CP 28934",
    "city": "Tecoman",
    "state": "Colima",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 18.94452,
    "lng": -103.922279
  },
  {
    "id": "12061",
    "name": "Kiosko Torres Quintero",
    "address": "Jorge Mesina Peña 102 ., Tecoman, Col., CP 28140",
    "city": "Tecoman",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café",
      "Hot Dogs"
    ],
    "lat": 18.910022,
    "lng": -103.861686
  },
  {
    "id": "12062",
    "name": "Kiosko Valle las Palmas",
    "address": "Rodolfo Hernandez Rosales 137 Valle las Palmas, Tecoman, Col., CP 28120",
    "city": "Tecoman",
    "state": "Colima",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 18.9322,
    "lng": -103.87757
  },
  {
    "id": "12063",
    "name": "Kiosko Crucero Periquillos",
    "address": "Vicente Guerrero 2 Flor de Coco, Armeria, Col., CP 28330",
    "city": "Armeria",
    "state": "Colima",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 18.94997,
    "lng": -103.94697
  },
  {
    "id": "12064",
    "name": "Kiosko Gas Glorieta Perritos",
    "address": "Km 1.0 Carretera Tecoman-cerro de Ortega 20 ., Tecoman, Col., CP 28160",
    "city": "Tecoman",
    "state": "Colima",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 18.896667,
    "lng": -103.859258
  },
  {
    "id": "12065",
    "name": "Kiosko Gas Ixtlahuacan",
    "address": "Los Melones 3 6 de Enero, Ixtlahuacan, Col., CP 28700",
    "city": "Ixtlahuacan",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Hot Dogs"
    ],
    "lat": 18.998492,
    "lng": -103.734675
  },
  {
    "id": "12066",
    "name": "Kiosko El Mercadito",
    "address": "Basilio Vadillo 687 ., Tecoman, Col., CP 28100",
    "city": "Tecoman",
    "state": "Colima",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 18.915417,
    "lng": -103.878999
  },
  {
    "id": "12067",
    "name": "Kiosko Callejones",
    "address": "Calle Daniel Solis No. 3, Tecoman, Col., CP 28900",
    "city": "Tecoman",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café",
      "Hot Dogs"
    ],
    "lat": 18.748124,
    "lng": -103.714733
  },
  {
    "id": "12068",
    "name": "Kiosko Cuyutlan",
    "address": "Miguel Hidalgo 66 Centro, Armeria, Col., CP 28350",
    "city": "Armeria",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 18.919683,
    "lng": -104.069215
  },
  {
    "id": "12069",
    "name": "Kiosko Niños Heroes",
    "address": "Niños Heroes S/n Centro, Tecoman, Col., CP 28100",
    "city": "Tecoman",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 18.908331,
    "lng": -103.872721
  },
  {
    "id": "12071",
    "name": "Kiosko Ejercito Nacional",
    "address": "Av. Insurgentes 1100 Miguel Hidalgo, Tecoman, Col., CP 28120",
    "city": "Tecoman",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 18.927118,
    "lng": -103.88493
  },
  {
    "id": "12072",
    "name": "Kiosko Salida Al Camalote",
    "address": "Calle 20 de Noviembre Norte No 443, Coahuayana, Mich., CP 60805",
    "city": "Coahuayana",
    "state": "Michoacan",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 18.754691,
    "lng": -103.664953
  },
  {
    "id": "13001",
    "name": "Kiosko Federico del Toro",
    "address": "Federico del Toro 823 Mansiones del Real, Zapotlan el Grande, Jal., CP 49010",
    "city": "Zapotlan el Grande",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.72099657,
    "lng": -103.4609066
  },
  {
    "id": "13002",
    "name": "Kiosko Colon Guzman",
    "address": "Cristobal Colon 658 Centro, Zapotlan el Grande, Jal., CP 49000",
    "city": "Zapotlan el Grande",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 19.718498838,
    "lng": -103.460152554
  },
  {
    "id": "13003",
    "name": "Kiosko Obispo",
    "address": "Indio 63 Centro, Zapotlan el Grande, Jal., CP 49000",
    "city": "Zapotlan el Grande",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.691569712,
    "lng": -103.459269352
  },
  {
    "id": "13004",
    "name": "Kiosko Colegio Mexico",
    "address": "Miguel Hidalgo y Costilla 221 Centro, Zapotlan el Grande, Jal., CP 49000",
    "city": "Zapotlan el Grande",
    "state": "Jalisco",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Hot Dogs"
    ],
    "lat": 19.70872245,
    "lng": -103.4650883
  },
  {
    "id": "13005",
    "name": "Kiosko Madero",
    "address": "Calzada Madero y Carranza 567 Centro, Zapotlan el Grande, Jal., CP 49000",
    "city": "Zapotlan el Grande",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 19.70242596,
    "lng": -103.482107302
  },
  {
    "id": "13007",
    "name": "Kiosko Jazmin",
    "address": "Jazmin 32 Centro, Zapotlan el Grande, Jal., CP 49000",
    "city": "Zapotlan el Grande",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 19.693026224,
    "lng": -103.469132511
  },
  {
    "id": "13008",
    "name": "Kiosko Gas San Andres",
    "address": "Carr Libre Cd Guzman Ent San Andres Ixtlan San Andres Ixtlan, Gomez Farias, Jal., CP 49000",
    "city": "Gomez Farias",
    "state": "Jalisco",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 19.8154494,
    "lng": -103.4900422
  },
  {
    "id": "13009",
    "name": "Kiosko Tecnologico",
    "address": "Av Gobernador Alberto Cardenas Jimenez 909 Centro, Zapotlan el Grande, Jal., CP 49000",
    "city": "Zapotlan el Grande",
    "state": "Jalisco",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 19.675711302,
    "lng": -103.476520394
  },
  {
    "id": "13010",
    "name": "Kiosko Tianguis",
    "address": "Lic Carlos Paez Stille 119 Ejidal, Zapotlan el Grande, Jal., CP 49070",
    "city": "Zapotlan el Grande",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 19.69812064,
    "lng": -103.477697308
  },
  {
    "id": "13011",
    "name": "Kiosko Serafin Vazquez",
    "address": "Av Obispo Serafin Vazquez Elizalde 522 U Colonos Adolfo Lopez Mateos, Zapotlan el Grande, Jal., CP 49097",
    "city": "Zapotlan el Grande",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 19.68258405,
    "lng": -103.4621974
  },
  {
    "id": "13012",
    "name": "Kiosko Gas 4 Caminos",
    "address": "Crucero Cuatro Caminos Sn, Tuxpan, Jal., CP 49800",
    "city": "Tuxpan",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 19.53067328,
    "lng": -103.420875932
  },
  {
    "id": "13013",
    "name": "Kiosko Gas Aeropuerto",
    "address": "Av Miguel de la Madrid 70 Centro, Zapotlan el Grande, Jal., CP 49000",
    "city": "Zapotlan el Grande",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 19.7023048,
    "lng": -103.491622679
  },
  {
    "id": "13014",
    "name": "Kiosko Gas Ramon Corona",
    "address": "Calle la Paz 88 Centro, Zapotlan el Grande, Jal., CP 49000",
    "city": "Zapotlan el Grande",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 19.693173441,
    "lng": -103.464939379
  },
  {
    "id": "13015",
    "name": "Kiosko Tuxpan Obregon",
    "address": "Guadalupe Victoria 1 Centro, Tuxpan, Jal., CP 49800",
    "city": "Tuxpan",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Hot Dogs"
    ],
    "lat": 19.55580698,
    "lng": -103.37792
  },
  {
    "id": "13016",
    "name": "Kiosko Gas Cardenas",
    "address": "Cristobal Colon 726 Centro, Zapotlan el Grande, Jal., CP 49000",
    "city": "Zapotlan el Grande",
    "state": "Jalisco",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Hot Dogs"
    ],
    "lat": 19.721956153,
    "lng": -103.45925178
  },
  {
    "id": "13017",
    "name": "Kiosko Sayula",
    "address": "Blvd Juan Rulfo 96 Juan Rulfo, Sayula, Jal., CP 49317",
    "city": "Sayula",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.881406951,
    "lng": -103.584136225
  },
  {
    "id": "13019",
    "name": "Kiosko Santa Ines",
    "address": "Calle Juarez 232 Santa Ines, Sayula, Jal., CP 49315",
    "city": "Sayula",
    "state": "Jalisco",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 19.875532,
    "lng": -103.60239
  },
  {
    "id": "13020",
    "name": "Kiosko Abasolo",
    "address": "Ignacio Allende Unzaga 217 Centro, Zapotlan el Grande, Jal., CP 49056",
    "city": "Zapotlan el Grande",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.713054209,
    "lng": -103.46994334
  },
  {
    "id": "13021",
    "name": "Kiosko Zapotiltic",
    "address": "Juarez 193 Centro, Zapotiltic, Jal., CP 49600",
    "city": "Zapotiltic",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.630525401,
    "lng": -103.422464325
  },
  {
    "id": "13022",
    "name": "Kiosko Panteon Hidalgo",
    "address": "Gral Manuel M Dieguez Lara 438 Centro, Zapotlan el Grande, Jal., CP 49000",
    "city": "Zapotlan el Grande",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.709408392,
    "lng": -103.476480126
  },
  {
    "id": "13023",
    "name": "Kiosko Gas Carco Guzman",
    "address": "Autopista Guadalajara Manzanillo Km 95 + 700 Centro, Zapotlan el Grande, Jal., CP 49000",
    "city": "Zapotlan el Grande",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 19.727656,
    "lng": -103.50979
  },
  {
    "id": "13024",
    "name": "Kiosko Gas Carco Zapotiltic",
    "address": "Autopista Guadalajara Manzanillo Km 83+600 Centro, Zapotiltic, Jal., CP 49000",
    "city": "Zapotiltic",
    "state": "Jalisco",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 19.630304,
    "lng": -103.464892
  },
  {
    "id": "13025",
    "name": "Kiosko Paez Stille",
    "address": "Conspiracion de Queretaro 114116 Miguel Hidalgo, Zapotlan el Grande, Jal., CP 49086",
    "city": "Zapotlan el Grande",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Hot Dogs"
    ],
    "lat": 19.68371827,
    "lng": -103.477088594
  },
  {
    "id": "13026",
    "name": "Kiosko La Primavera",
    "address": "Tulipanes 18 la Primavera, Zapotlan el Grande, Jal., CP 49086",
    "city": "Zapotlan el Grande",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 19.679918,
    "lng": -103.484777
  },
  {
    "id": "13027",
    "name": "Kiosko Camichines",
    "address": "Gral Nicolas Bravo 342 Camichines, Zapotlan el Grande, Jal., CP 49064",
    "city": "Zapotlan el Grande",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.71266,
    "lng": -103.476301
  },
  {
    "id": "13028",
    "name": "Kiosko San Isidro",
    "address": "Jose Vasconcelos 2 16 de Septiembre, Zapotlan el Grande, Jal., CP 49000",
    "city": "Zapotlan el Grande",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café",
      "Hot Dogs"
    ],
    "lat": 19.703163,
    "lng": -103.476619
  },
  {
    "id": "13029",
    "name": "Kiosko Zapotiltic Bustamante",
    "address": "Bustamante 221 Centro, Zapotiltic, Jal., CP 49600",
    "city": "Zapotiltic",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 19.623007,
    "lng": -103.414796
  },
  {
    "id": "13030",
    "name": "Kiosko San Andres Centro",
    "address": "Vicente Guerrero 245 San Andres Ixtlan, Gomez Farias, Jal., CP 49130",
    "city": "Gomez Farias",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.819199,
    "lng": -103.46942
  },
  {
    "id": "13031",
    "name": "Kiosko Gomez Farias",
    "address": "Leandro Valle 27 Centro, Gomez Farias, Jal., CP 49120",
    "city": "Gomez Farias",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.795271,
    "lng": -103.480244
  },
  {
    "id": "13032",
    "name": "Kiosko Dario Vargas",
    "address": "Federico del Toro 356 Centro, Zapotlan el Grande, Jal., CP 49000",
    "city": "Zapotlan el Grande",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 19.712236,
    "lng": -103.462585
  },
  {
    "id": "13033",
    "name": "Kiosko Tuxpan",
    "address": "Av Jose Angel Ceniceros 125 Talpita, Tuxpan, Jal., CP 49808",
    "city": "Tuxpan",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.559765,
    "lng": -103.372319
  },
  {
    "id": "13034",
    "name": "Kiosko Coca Cola Tamazula",
    "address": "Av Jose Maria Martinez 1314 Centro, Tamazula de Gordiano, Jal., CP 49650",
    "city": "Tamazula de Gordiano",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Hot Dogs"
    ],
    "lat": 19.689856,
    "lng": -103.240276
  },
  {
    "id": "13035",
    "name": "Kiosko Cuauhtemoc Tamazula",
    "address": "Cuauhtemoc 61 Centro, Tamazula de Gordiano, Jal., CP 49650",
    "city": "Tamazula de Gordiano",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Hot Dogs"
    ],
    "lat": 19.674148,
    "lng": -103.257294
  },
  {
    "id": "13036",
    "name": "Kiosko Loma Bonita",
    "address": "Juan Jose Arreola Zuñiga 714 Loma Bonita, Zapotlan el Grande, Jal., CP 49020",
    "city": "Zapotlan el Grande",
    "state": "Jalisco",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 19.719924,
    "lng": -103.457014
  },
  {
    "id": "13037",
    "name": "Kiosko Donato Guerra",
    "address": "Gomez Farias 323 Autlan de Navarro Centro, Autlan de Navarro, Jal., CP 48900",
    "city": "Autlan de Navarro",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.76516,
    "lng": -104.369
  },
  {
    "id": "13038",
    "name": "Kiosko Gas Tonaya",
    "address": "Prolongacion Calzada de la Paz 54 la Ermita, Tonaya, Jal., CP 48760",
    "city": "Tonaya",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.778611,
    "lng": -103.975163
  },
  {
    "id": "13040",
    "name": "Kiosko Pedro Moreno",
    "address": "Pedro Moreno 228 Autlan, Autlan de Navarro, Jal., CP 48900",
    "city": "Autlan de Navarro",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 19.771103,
    "lng": -104.371866
  },
  {
    "id": "13041",
    "name": "Kiosko Zapotiltic Hidalgo",
    "address": "Miguel Hidalgo Poniente 201 Zapotiltic Centro, Zapotiltic, Jal., CP 49600",
    "city": "Zapotiltic",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.62819,
    "lng": -103.422218
  },
  {
    "id": "13042",
    "name": "Kiosko Clemente Amaya_",
    "address": "Clemente Amaya 733 Otra No Espesificada en el Catalogo, Autlan de Navarro, Jal., CP 48900",
    "city": "Autlan de Navarro",
    "state": "Jalisco",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 19.785582,
    "lng": -104.363462
  },
  {
    "id": "13044",
    "name": "Kiosko Capaya",
    "address": "Calle Mutualismo 970 el Tecolote, Autlan de Navarro, Jal., CP 48904",
    "city": "Autlan de Navarro",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.788321,
    "lng": -104.370896
  },
  {
    "id": "13045",
    "name": "Kiosko Glorieta el Grullo",
    "address": "Calle Alvaro Obregon 390 Oriente 1ra Seccion, El Grullo, Jal., CP 48743",
    "city": "El Grullo",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.80495,
    "lng": -104.205735
  },
  {
    "id": "13048",
    "name": "Kiosko Fracionamiento las Lomas",
    "address": "Sierra Negra 2 Otra No Especificada en el Catalogo, Zapotlan el Grande, Jal., CP 49026",
    "city": "Zapotlan el Grande",
    "state": "Jalisco",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 19.731685,
    "lng": -103.456065
  },
  {
    "id": "13049",
    "name": "Kiosko Hospital Autlan",
    "address": "Av del Sol Jardines del Sol, Autlan de Navarro, Jal., CP 48902",
    "city": "Autlan de Navarro",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Hot Dogs"
    ],
    "lat": 19.769045,
    "lng": -104.354347
  },
  {
    "id": "13051",
    "name": "Kiosko Gas Relicario",
    "address": "Carretera Jiquilpan-colima Km 179.5 No Especificada, Pihuamo, Jal., CP 48970",
    "city": "Pihuamo",
    "state": "Jalisco",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 19.210128,
    "lng": -103.462463
  },
  {
    "id": "13052",
    "name": "Kiosko Libertad Pihuamo",
    "address": "Libertad 1 Centro, Pihuamo, Jal., CP 48970",
    "city": "Pihuamo",
    "state": "Jalisco",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café",
      "Hot Dogs"
    ],
    "lat": 19.253569,
    "lng": -103.380694
  },
  {
    "id": "13053",
    "name": "Kiosko Fresno Lopez Velarde",
    "address": "Av Fresno, Autlan de Navarro, Jal., CP 48903",
    "city": "Autlan de Navarro",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.759936,
    "lng": -104.374553
  },
  {
    "id": "13055",
    "name": "Kiosko Mariano Barcenas",
    "address": "Mariano Barcenas Autlan de Navarro Centro, Autlan de Navarro, Jal., CP 48900",
    "city": "Autlan de Navarro",
    "state": "Jalisco",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 19.771244,
    "lng": -104.363013
  },
  {
    "id": "13056",
    "name": "Kiosko Gas San Pedro",
    "address": "Carretera Fed Jiquilpan Colima 138 Otra No Especificada en el Catalogo, Tecalitlan, Jal., CP 49900",
    "city": "Tecalitlan",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 19.458536,
    "lng": -103.346876
  },
  {
    "id": "13058",
    "name": "Kiosko Gas el Mentidero",
    "address": "Carretera Autlan-el Grullo S/n el Mentidero, Autlan de Navarro, Jal., CP 48917",
    "city": "Autlan de Navarro",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.769596,
    "lng": -104.296979
  },
  {
    "id": "13059",
    "name": "Kiosko Alameda",
    "address": "Constitucion 118 Autlan de Navarro Centro, Autlan de Navarro, Jal., CP 48900",
    "city": "Autlan de Navarro",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Hot Dogs"
    ],
    "lat": 19.768228,
    "lng": -104.363103
  },
  {
    "id": "13060",
    "name": "Kiosko Circunvalacion Poniente",
    "address": "Circunvalacion Poniente 184 las Flores, El Grullo, Jal., CP 48743",
    "city": "El Grullo",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.79999,
    "lng": -104.221491
  },
  {
    "id": "13061",
    "name": "Kiosko Tecalitlan",
    "address": "Aquiles Serdan 83, Tecalitlan, Jal., CP 49900",
    "city": "Tecalitlan",
    "state": "Jalisco",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café",
      "Hot Dogs"
    ],
    "lat": 19.464955,
    "lng": -103.303015
  },
  {
    "id": "13062",
    "name": "Kiosko Tec Guzman",
    "address": "Av Tecnologico 101 Sin Referencia, Zapotlan el Grande, Jal., CP 49000",
    "city": "Zapotlan el Grande",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café",
      "Hot Dogs"
    ],
    "lat": 19.668001,
    "lng": -103.484976
  },
  {
    "id": "13063",
    "name": "Kiosko Camino a San Gabriel",
    "address": "Privada Eucalipto 14 Colonos, Tapalpa, Jal., CP 49340",
    "city": "Tapalpa",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.942456,
    "lng": -103.771633
  },
  {
    "id": "13064",
    "name": "Kiosko Usmajac",
    "address": "Hidalgo 66 Sayula Centro, Sayula, Jal., CP 49300",
    "city": "Sayula",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.874815,
    "lng": -103.543965
  },
  {
    "id": "13065",
    "name": "Kiosko Gas Huescalapa",
    "address": "Av Miguel Fernandez Morales 51, Zapotiltic, Jal., CP 49610",
    "city": "Zapotiltic",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 19.639619,
    "lng": -103.443864
  },
  {
    "id": "13066",
    "name": "Kiosko Avila Camacho",
    "address": "Avila Camacho_ 11 Avila Camacho y Esq Ocampo_, Tecalitlan, Jal., CP 49900",
    "city": "Tecalitlan",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 19.469925,
    "lng": -103.308099
  },
  {
    "id": "13067",
    "name": "Kiosko San Sebastian Sayula",
    "address": "Calle Independencia 153 Matamoros y Nicolas Bravo, Sayula, Jal., CP 49310",
    "city": "Sayula",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 19.884625,
    "lng": -103.596006
  },
  {
    "id": "13071",
    "name": "Kiosko San Jose Centro",
    "address": "Calle Independencia 77 Independencia y Esq. Vicente Guerrero, Marcos Castellanos, Mich., CP 59500",
    "city": "Marcos Castellanos",
    "state": "Michoacan",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 19.988407,
    "lng": -103.021794
  },
  {
    "id": "13072",
    "name": "Kiosko Central Sayula",
    "address": "Constitucion 289 Independencia y Gral Avila Camacho Ote, Sayula, Jal., CP 49310",
    "city": "Sayula",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.87985,
    "lng": -103.589712
  },
  {
    "id": "13074",
    "name": "Kiosko Manuel M Dieguez",
    "address": "Abasolo 53 Benito Juarez, Tuxpan, Jal., CP 49800",
    "city": "Tuxpan",
    "state": "Jalisco",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Hot Dogs"
    ],
    "lat": 19.551690302,
    "lng": -103.374593847
  },
  {
    "id": "13075",
    "name": "Kiosko Crucero la Frontera",
    "address": "Tapalpa Guadalajara 1 Rancheria la Cruz, Tapalpa, Jal., CP 49356",
    "city": "Tapalpa",
    "state": "Jalisco",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Hot Dogs"
    ],
    "lat": 19.959736482,
    "lng": -103.712545744
  },
  {
    "id": "13076",
    "name": "Kiosko Gas San Gabriel",
    "address": "Autlan de Navarro Acatlan de Juarez S/n Ciudad San Gabriel, San Gabriel, Jal., CP 49700",
    "city": "San Gabriel",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 19.682685,
    "lng": -103.800525
  },
  {
    "id": "13077",
    "name": "Kiosko Valle de Juarez",
    "address": "Sonora 1, Valle de Juarez, Jal., CP 49540",
    "city": "Valle de Juarez",
    "state": "Jalisco",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 19.93590569,
    "lng": -102.9498735
  },
  {
    "id": "13078",
    "name": "Kiosko Constituyentes",
    "address": "Carlos Paez Stille 396 Frac la Providencia, Zapotlan el Grande, Jal., CP 49086",
    "city": "Zapotlan el Grande",
    "state": "Jalisco",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 19.686945,
    "lng": -103.477613
  },
  {
    "id": "13079",
    "name": "Kiosko Techaluta",
    "address": "Prisciliano Sanchez O 4 Pbo Techaluta, Techaluta de Montenegro, Jal., CP 49230",
    "city": "Techaluta de Montenegro",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 20.072228,
    "lng": -103.550646
  },
  {
    "id": "13080",
    "name": "Kiosko Amacueca",
    "address": "Pedro Moreno S/n Pbo. Amacueca, Amacueca, Jal., CP 49370",
    "city": "Amacueca",
    "state": "Jalisco",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Hot Dogs"
    ],
    "lat": 20.010818,
    "lng": -103.595453
  },
  {
    "id": "13081",
    "name": "Kiosko Pintores",
    "address": "Ignacio Aldama Gonzalez 239 Ciudad Guzman Centro, Zapotlan el Grande, Jal., CP 49000",
    "city": "Zapotlan el Grande",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 19.721397,
    "lng": -103.467211
  },
  {
    "id": "13085",
    "name": "Kiosko Fraccionamiento las Garzas",
    "address": "Av. Enrique Arreola Silva 309 ., Zapotlan el Grande, Jal., CP 49027",
    "city": "Zapotlan el Grande",
    "state": "Jalisco",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 19.732187668,
    "lng": -103.45998893
  },
  {
    "id": "13086",
    "name": "Kiosko Gas Gomez Farias",
    "address": "Carretera Libre a Guadalajara-ciudad Guzman Km 83.92 320 ., Gomez Farias, Jal., CP 49120",
    "city": "Gomez Farias",
    "state": "Jalisco",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Hot Dogs"
    ],
    "lat": 19.781401641,
    "lng": -103.477020032
  },
  {
    "id": "13087",
    "name": "Kiosko Las Peñas",
    "address": "Marcos Gordoa 435 B las Peñas, Zapotlan el Grande, Jal., CP 49063",
    "city": "Zapotlan el Grande",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 19.701754992,
    "lng": -103.452561645
  },
  {
    "id": "13088",
    "name": "Kiosko Obrera",
    "address": "Pedro Moreno 2 Benito Juarez, Tamazula de Gordiano, Jal., CP 49653",
    "city": "Tamazula de Gordiano",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Hot Dogs"
    ],
    "lat": 19.691628,
    "lng": -103.241522
  },
  {
    "id": "13090",
    "name": "Kiosko Contla",
    "address": "Constitucion 84 B ., Tamazula de Gordiano, Jal., CP 49660",
    "city": "Tamazula de Gordiano",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 19.752717,
    "lng": -103.177789
  },
  {
    "id": "13091",
    "name": "Kiosko Vista Hermosa",
    "address": "Francisco I Madero 2 ., Tamazula de Gordiano, Jal., CP 49657",
    "city": "Tamazula de Gordiano",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 19.687403,
    "lng": -103.336336
  },
  {
    "id": "13092",
    "name": "Kiosko Vicente Guerrero",
    "address": "Vicente Guerrero 106 ., Gomez Farias, Jal., CP 49120",
    "city": "Gomez Farias",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café",
      "Hot Dogs"
    ],
    "lat": 19.792706,
    "lng": -103.471164
  },
  {
    "id": "13093",
    "name": "Kiosko Tamazula Centro",
    "address": "Juan Alvarez 29 Tamazula de Gordiano Centro, Tamazula de Gordiano, Jal., CP 49650",
    "city": "Tamazula de Gordiano",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 19.673869,
    "lng": -103.25184
  },
  {
    "id": "13094",
    "name": "Kiosko Gas Soyatlan",
    "address": "Carretera Jiquilpan-colima Km 100.5 ., Tamazula de Gordiano, Jal., CP 49655",
    "city": "Tamazula de Gordiano",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.685646,
    "lng": -103.292574
  },
  {
    "id": "13095",
    "name": "Kiosko Quintana Roo",
    "address": "Ramon Corona, No. 174 Int, Zapotiltic, Jal., CP 49600",
    "city": "Zapotiltic",
    "state": "Jalisco",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 19.623309,
    "lng": -103.421668
  },
  {
    "id": "13097",
    "name": "Kiosko Gas el Vergel",
    "address": "Guadalupe Victoria 3155 Autlan de Navarro Centro, Autlan de Navarro, Jal., CP 48900",
    "city": "Autlan de Navarro",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café",
      "Hot Dogs"
    ],
    "lat": 19.744697,
    "lng": -104.361965
  },
  {
    "id": "13099",
    "name": "Kiosko Gas Zapotiltic",
    "address": "Calle Juarez No 341, Zapotiltic, Jal., CP 49600",
    "city": "Zapotiltic",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 19.632239,
    "lng": -103.430841
  },
  {
    "id": "13100",
    "name": "Kiosko Gas Atemajac",
    "address": "Carretera Tapalpa-atemajac de Brizuela 437, Km 34 No. 530a, Atemajac de Brizuela, Jal., CP 45790",
    "city": "Atemajac de Brizuela",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 20.127595,
    "lng": -103.722023
  },
  {
    "id": "13101",
    "name": "Kiosko Gas Tapalpa",
    "address": "Calle Francisco I Madero No. 143 a, Tapalpa, Jal., CP 49340",
    "city": "Tapalpa",
    "state": "Jalisco",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 19.934883,
    "lng": -103.752006
  },
  {
    "id": "14001",
    "name": "Kiosko Las Brisas",
    "address": "Emiliano Zapata 1 del Pacifico, Manzanillo, Col., CP 28219",
    "city": "Manzanillo",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.084842887,
    "lng": -104.307665605
  },
  {
    "id": "14002",
    "name": "Kiosko Gas Olas Altas",
    "address": "Blvd Cost Miguel de la Madrid 15000 Fracc Olas Altas, Manzanillo, Col., CP 28860",
    "city": "Manzanillo",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.119702656,
    "lng": -104.363284846
  },
  {
    "id": "14004",
    "name": "Kiosko Soriana",
    "address": "Boulevard Costero Miguel de la Madrid Hurtado Km 9.5 Playa Azul, Manzanillo, Col., CP 28218",
    "city": "Manzanillo",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 19.10175083,
    "lng": -104.3273348
  },
  {
    "id": "14005",
    "name": "Kiosko Malecon",
    "address": "Sector 5 185 Centro, Manzanillo, Col., CP 28200",
    "city": "Manzanillo",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 19.05348132,
    "lng": -104.313117277
  },
  {
    "id": "14006",
    "name": "Kiosko Gaviotas",
    "address": "Paseo de las Gaviotas 71 Valle de las Garzas, Manzanillo, Col., CP 28219",
    "city": "Manzanillo",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.10377695,
    "lng": -104.3222398
  },
  {
    "id": "14007",
    "name": "Kiosko Gas Garzas",
    "address": "Av Elias Zamora Verduzco 43891 Barrio 2 Valle las Garzas, Manzanillo, Col., CP 28219",
    "city": "Manzanillo",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.095972821,
    "lng": -104.303262491
  },
  {
    "id": "14008",
    "name": "Kiosko Jesus Alcaraz",
    "address": "Av J Jesus Alcaraz 45 Centro, Manzanillo, Col., CP 28200",
    "city": "Manzanillo",
    "state": "Colima",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 19.051017007,
    "lng": -104.310186072
  },
  {
    "id": "14009",
    "name": "Kiosko Tapeixtles",
    "address": "Av del Trabajo 2 Indeco, Manzanillo, Col., CP 28239",
    "city": "Manzanillo",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 19.074357992,
    "lng": -104.282759553
  },
  {
    "id": "14010",
    "name": "Kiosko Fimaga",
    "address": "Elias Zamora Verduzco 918 Valle de las Garzas, Manzanillo, Col., CP 28219",
    "city": "Manzanillo",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 19.104014726,
    "lng": -104.30875574
  },
  {
    "id": "14011",
    "name": "Kiosko Las Joyas",
    "address": "Prol Niños Heroes 70 las Joyas, Manzanillo, Col., CP 28230",
    "city": "Manzanillo",
    "state": "Colima",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 19.05728332,
    "lng": -104.291145
  },
  {
    "id": "14012",
    "name": "Kiosko Las Garzas",
    "address": "Av Elias Zamora Verduzco 2127 Valle de las Garzas, Manzanillo, Col., CP 28219",
    "city": "Manzanillo",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 19.110581459,
    "lng": -104.317166104
  },
  {
    "id": "14013",
    "name": "Kiosko Miramar",
    "address": "Carretera Manzanillo Cihuatlan Km 17.7 Miramar, Manzanillo, Col., CP 28200",
    "city": "Manzanillo",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.119118696,
    "lng": -104.3899047
  },
  {
    "id": "14014",
    "name": "Kiosko Gas Brillolim",
    "address": "Blvd Miguel de la Madrid Hurtado 8712 Playa Azul, Manzanillo, Col., CP 28218",
    "city": "Manzanillo",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café",
      "Hot Dogs"
    ],
    "lat": 19.104221016,
    "lng": -104.331857745
  },
  {
    "id": "14015",
    "name": "Kiosko Gas Santiago",
    "address": "Boulevard Costero Miguel de la Madrid Hurtado 300 Fracc la Querencia, Manzanillo, Col., CP 28200",
    "city": "Manzanillo",
    "state": "Colima",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 19.11997137,
    "lng": -104.357941772
  },
  {
    "id": "14016",
    "name": "Kiosko Pez Vela",
    "address": "Carretera a Minatitlan 5 Tapeixtles, Manzanillo, Col., CP 28239",
    "city": "Manzanillo",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 19.07907723,
    "lng": -104.2866939
  },
  {
    "id": "14018",
    "name": "Kiosko Gas Puerto",
    "address": "Blvd Luis Donaldo Colosio 302 Tapeixtles, Manzanillo, Col., CP 28239",
    "city": "Manzanillo",
    "state": "Colima",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 19.066567702,
    "lng": -104.287224
  },
  {
    "id": "14019",
    "name": "Kiosko Marbella",
    "address": "Boulevard Costero Miguel de la Madrid Hurtado 5080 Fracc. Playa Azul, Manzanillo, Col., CP 28200",
    "city": "Manzanillo",
    "state": "Colima",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 19.098598025,
    "lng": -104.323449348
  },
  {
    "id": "14020",
    "name": "Kiosko Hospital",
    "address": "Av Elias Zamora Verduzco 3055 Nuevo Salahua, Manzanillo, Col., CP 28200",
    "city": "Manzanillo",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.115493998,
    "lng": -104.327254498
  },
  {
    "id": "14021",
    "name": "Kiosko San Pedrito",
    "address": "Teniente Azueta 1 Fracc Playa Azul, Manzanillo, Col., CP 28200",
    "city": "Manzanillo",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Hot Dogs"
    ],
    "lat": 19.056029819,
    "lng": -104.304753265
  },
  {
    "id": "14022",
    "name": "Kiosko El Tesoro",
    "address": "Av Audiencia L53 Peninsula de Santiago, Manzanillo, Col., CP 28200",
    "city": "Manzanillo",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 19.108785324,
    "lng": -104.346489224
  },
  {
    "id": "14023",
    "name": "Kiosko Gas la Central",
    "address": "Carret Cihuatlan-mzllo Km 23+50 Ejido la Central, Manzanillo, Col., CP 28200",
    "city": "Manzanillo",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café",
      "Hot Dogs"
    ],
    "lat": 19.139604407,
    "lng": -104.432234348
  },
  {
    "id": "14024",
    "name": "Kiosko Gas Tepalcates",
    "address": "Carretera Federal Mzllo Armeria 501 Campos, Manzanillo, Col., CP 28200",
    "city": "Manzanillo",
    "state": "Colima",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Hot Dogs"
    ],
    "lat": 19.038058419,
    "lng": -104.25768096
  },
  {
    "id": "14025",
    "name": "Kiosko Las Vias",
    "address": "Adolfo Lopez Mateos 94 Indeco, Manzanillo, Col., CP 28239",
    "city": "Manzanillo",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 19.072511127,
    "lng": -104.280378746
  },
  {
    "id": "14026",
    "name": "Kiosko Cihuatlan",
    "address": "Gral Marcelino Garcia Barragan 2 Centro, Cihuatlan, Jal., CP 48970",
    "city": "Cihuatlan",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 19.23607002,
    "lng": -104.5652431
  },
  {
    "id": "14027",
    "name": "Kiosko Playa Azul",
    "address": "Av Lazaro Cardenas 1699 Fracc Playa Azul, Manzanillo, Col., CP 28200",
    "city": "Manzanillo",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café",
      "Hot Dogs"
    ],
    "lat": 19.081577536,
    "lng": -104.30698075
  },
  {
    "id": "14028",
    "name": "Kiosko Gas el Colomo",
    "address": "Carretera Federal Manzanillo-colima 1100 el Colomo, Manzanillo, Col., CP 28200",
    "city": "Manzanillo",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.05581878,
    "lng": -104.2373671
  },
  {
    "id": "14029",
    "name": "Kiosko Barrio 1",
    "address": "Av Elias Zamora Verduzco 56 Barrio I, Valle de las Garzas, Manzanillo, Col., CP 28219",
    "city": "Manzanillo",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 19.091584796,
    "lng": -104.299848532
  },
  {
    "id": "14030",
    "name": "Kiosko Club de Leones",
    "address": "Belisario Dominguez 60 Centro, Manzanillo, Col., CP 28200",
    "city": "Manzanillo",
    "state": "Colima",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 19.04844308,
    "lng": -104.318255
  },
  {
    "id": "14031",
    "name": "Kiosko Auditorio",
    "address": "Blvd Miguel de la Madrid Hurtado 548 Fondeport, Manzanillo, Col., CP 28219",
    "city": "Manzanillo",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 19.08636758,
    "lng": -104.2933837
  },
  {
    "id": "14032",
    "name": "Kiosko Camelinas",
    "address": "Av Manzanillo 31 Fraccionamiento las Camelinas, Manzanillo, Col., CP 28860",
    "city": "Manzanillo",
    "state": "Colima",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 19.131221641,
    "lng": -104.337361684
  },
  {
    "id": "14033",
    "name": "Kiosko Barra",
    "address": "Av Veracruz 67 Pueblo Nuevo, Cihuatlan, Jal., CP 48987",
    "city": "Cihuatlan",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.206917385,
    "lng": -104.683788106
  },
  {
    "id": "14034",
    "name": "Kiosko Cihuatlan Ocampo",
    "address": "Ocampo 96 Centro, Cihuatlan, Jal., CP 48970",
    "city": "Cihuatlan",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Hot Dogs"
    ],
    "lat": 19.236395318,
    "lng": -104.560845808
  },
  {
    "id": "14035",
    "name": "Kiosko Ballena",
    "address": "Carretera Minatitlan 42 Tapeixtles, Manzanillo, Col., CP 28876",
    "city": "Manzanillo",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.08056032,
    "lng": -104.285032901
  },
  {
    "id": "14036",
    "name": "Kiosko Las Rosas",
    "address": "Gladiolas 2 Jardines de Santiago, Manzanillo, Col., CP 28860",
    "city": "Manzanillo",
    "state": "Colima",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café",
      "Hot Dogs"
    ],
    "lat": 19.133470375,
    "lng": -104.342482377
  },
  {
    "id": "14037",
    "name": "Kiosko Las Pergolas",
    "address": "Blvdmiguel de la Madrid Hurtado 1313 Residencial Salagua, Manzanillo, Col., CP 28869",
    "city": "Manzanillo",
    "state": "Colima",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 19.105091848,
    "lng": -104.334022964
  },
  {
    "id": "14038",
    "name": "Kiosko Progreso",
    "address": "Blvdmiguel de la Madrid Hurtado 11380 Palma Real, Manzanillo, Col., CP 28869",
    "city": "Manzanillo",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 19.113800948,
    "lng": -104.343072486
  },
  {
    "id": "14039",
    "name": "Kiosko Gas Primavera",
    "address": "Elias Zamora Verduzco 71 Valle de las Garzas, Manzanillo, Col., CP 28219",
    "city": "Manzanillo",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.09210128,
    "lng": -104.3009124
  },
  {
    "id": "14040",
    "name": "Kiosko Gas San Patricio",
    "address": "Emiliano Zapata 184 San Patricio Melaque, Cihuatlan, Jal., CP 48980",
    "city": "Cihuatlan",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.228794875,
    "lng": -104.697627734
  },
  {
    "id": "14041",
    "name": "Kiosko Heliodoro Trujillo",
    "address": "Adolfo Lopez Mateos 15 Tapeixtles, Manzanillo, Col., CP 28239",
    "city": "Manzanillo",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 19.071112997,
    "lng": -104.283575585
  },
  {
    "id": "14042",
    "name": "Kiosko Gas Parotas",
    "address": "Av de las Rosas 415 Abelardo L Rodriguez, Manzanillo, Col., CP 28863",
    "city": "Manzanillo",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 19.13248062,
    "lng": -104.342576231
  },
  {
    "id": "14043",
    "name": "Kiosko Melaque",
    "address": "Lopez Mateos 75 Centro, Cihuatlan, Jal., CP 48980",
    "city": "Cihuatlan",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 19.22690562,
    "lng": -104.7056641
  },
  {
    "id": "14044",
    "name": "Kiosko Colomo Zaragoza",
    "address": "Adolfo Lopez Mateos 1 Manzanillo Centro, Manzanillo, Col., CP 28200",
    "city": "Manzanillo",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.06067316,
    "lng": -104.2595828
  },
  {
    "id": "14045",
    "name": "Kiosko Las Albercas",
    "address": "Av Elias Zamora Verduzco Esquina Lazaro Cardenas S/n Arboledas, Manzanillo, Col., CP 28869",
    "city": "Manzanillo",
    "state": "Colima",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 19.117621032,
    "lng": -104.331257333
  },
  {
    "id": "14046",
    "name": "Kiosko Allende",
    "address": "Ignacio Allende 2 el Cerrito, Manzanillo, Col., CP 28863",
    "city": "Manzanillo",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 19.12296664,
    "lng": -104.3528545
  },
  {
    "id": "14047",
    "name": "Kiosko Gas Ramcal",
    "address": "Carretera Fed Mzllo-colima Km 307 Colomo Centro, Manzanillo, Col., CP 28800",
    "city": "Manzanillo",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café",
      "Hot Dogs"
    ],
    "lat": 19.035369253,
    "lng": -104.210687227
  },
  {
    "id": "14048",
    "name": "Kiosko Paseo del Mar",
    "address": "Mar Mediterraneo 75 del Mar, Manzanillo, Col., CP 28864",
    "city": "Manzanillo",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 19.127728855,
    "lng": -104.345802606
  },
  {
    "id": "14049",
    "name": "Kiosko La Floresta",
    "address": "Av de las Orquideas 3940 Orquideas Residenciales, Manzanillo, Col., CP 28865",
    "city": "Manzanillo",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.144163551,
    "lng": -104.33653667
  },
  {
    "id": "14050",
    "name": "Kiosko Vista del Mar",
    "address": "Laguna de Alcuzahue 183 Fracc Vista del Mar, Manzanillo, Col., CP 28860",
    "city": "Manzanillo",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 19.13806441,
    "lng": -104.3512976
  },
  {
    "id": "14051",
    "name": "Kiosko Gonzalez Lugo",
    "address": "Jesus Gonzalez Lugo Sn Francisco Villa, Manzanillo, Col., CP 28860",
    "city": "Manzanillo",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.130563019,
    "lng": -104.34947335
  },
  {
    "id": "14052",
    "name": "Kiosko Salagua",
    "address": "Pedro Nuñez 562 Centro, Manzanillo, Col., CP 28869",
    "city": "Manzanillo",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 19.112290692,
    "lng": -104.335929699
  },
  {
    "id": "14053",
    "name": "Kiosko Mercado Centro",
    "address": "Miguel Allende 49 Centro, Manzanillo, Col., CP 28200",
    "city": "Manzanillo",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café",
      "Hot Dogs"
    ],
    "lat": 19.051575512,
    "lng": -104.317464035
  },
  {
    "id": "14054",
    "name": "Kiosko Terraplena",
    "address": "Av Terraplena 1100 Fraccionamiento Terraplena, Manzanillo, Col., CP 28840",
    "city": "Manzanillo",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.1705587,
    "lng": -104.3461837
  },
  {
    "id": "14055",
    "name": "Kiosko Marimar",
    "address": "Av Pajaritas 534 Marimar I, Manzanillo, Col., CP 28869",
    "city": "Manzanillo",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.121941582,
    "lng": -104.321922698
  },
  {
    "id": "14056",
    "name": "Kiosko Patios",
    "address": "Nabor Ochoa Lopez Sn Jalipa, Manzanillo, Col., CP 28870",
    "city": "Manzanillo",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.11008168,
    "lng": -104.2616992
  },
  {
    "id": "14057",
    "name": "Kiosko Javier Mata",
    "address": "Av Lazaro Cardenas 1108 las Brisas, Manzanillo, Col., CP 28210",
    "city": "Manzanillo",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 19.0731555,
    "lng": -104.3030604
  },
  {
    "id": "14058",
    "name": "Kiosko Santa Carolina",
    "address": "Agachona Comun 501 Santa Carolina, Manzanillo, Col., CP 28864",
    "city": "Manzanillo",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.132174016,
    "lng": -104.333233057
  },
  {
    "id": "14059",
    "name": "Kiosko Unidad Deportiva",
    "address": "Blvd Miguel de la Madrid 1514 Fovissste, Manzanillo, Col., CP 28878",
    "city": "Manzanillo",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Hot Dogs"
    ],
    "lat": 19.093681804,
    "lng": -104.317183635
  },
  {
    "id": "14060",
    "name": "Kiosko Barragan Cihuatlan",
    "address": "Gral Garcia Barragan 158 Barrio Nuevo, Cihuatlan, Jal., CP 48970",
    "city": "Cihuatlan",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 19.240302362,
    "lng": -104.569322515
  },
  {
    "id": "14061",
    "name": "Kiosko Termoelectrica",
    "address": "Calzada de las Flores 226 Villa Florida, Manzanillo, Col., CP 28280",
    "city": "Manzanillo",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 19.02260556,
    "lng": -104.3204704
  },
  {
    "id": "14062",
    "name": "Kiosko Central Melaque",
    "address": "Gomez Farias 26 Centro, Cihuatlan, Jal., CP 48980",
    "city": "Cihuatlan",
    "state": "Jalisco",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 19.22399596,
    "lng": -104.707392588
  },
  {
    "id": "14063",
    "name": "Kiosko Homobono Llamas",
    "address": "Ignacio Zaragoza 168 Arturo Noriega Pizano, Manzanillo, Col., CP 28800",
    "city": "Manzanillo",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Hot Dogs"
    ],
    "lat": 19.055975694,
    "lng": -104.246020237
  },
  {
    "id": "14064",
    "name": "Kiosko Sor Juana",
    "address": "Av Sor Juana Ines de la Cruz 140 Almendros Residencial, Manzanillo, Col., CP 28869",
    "city": "Manzanillo",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 19.111243,
    "lng": -104.325564
  },
  {
    "id": "14065",
    "name": "Kiosko Las Perlas",
    "address": "Angaria 443 Marimar Ii, Manzanillo, Col., CP 28869",
    "city": "Manzanillo",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.126152,
    "lng": -104.32577
  },
  {
    "id": "14066",
    "name": "Kiosko Leona Vicario",
    "address": "Leona Vicario 2 Pedregoza, Manzanillo, Col., CP 28278",
    "city": "Manzanillo",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.044945,
    "lng": -104.321982
  },
  {
    "id": "14067",
    "name": "Kiosko Central Manzanillo",
    "address": "Obras Maritimas Esq con Calle Nogal S/n Fetse, Manzanillo, Col., CP 28219",
    "city": "Manzanillo",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.089374,
    "lng": -104.291682
  },
  {
    "id": "14068",
    "name": "Kiosko Nautilus",
    "address": "Av Manzanillo 239 la Joya Ii, Manzanillo, Col., CP 28869",
    "city": "Manzanillo",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 19.126491,
    "lng": -104.33943
  },
  {
    "id": "14069",
    "name": "Kiosko Pedro Nuñez",
    "address": "Miguel de la Madrid 188 Abelardo L Rodriguez, Manzanillo, Col., CP 28863",
    "city": "Manzanillo",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Hot Dogs"
    ],
    "lat": 19.12407,
    "lng": -104.357825
  },
  {
    "id": "14070",
    "name": "Kiosko La Pesquera",
    "address": "Av Primaveras 34 Valle de las Garzas, Manzanillo, Col., CP 28219",
    "city": "Manzanillo",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Hot Dogs"
    ],
    "lat": 19.093409,
    "lng": -104.299298
  },
  {
    "id": "14071",
    "name": "Kiosko Marabasco Cihuatlan",
    "address": "Alvaro Obregon 78 Centro, Cihuatlan, Jal., CP 48970",
    "city": "Cihuatlan",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.237652,
    "lng": -104.55609
  },
  {
    "id": "14072",
    "name": "Kiosko Las Torres Manzanillo",
    "address": "Mazatlan 1 las Torres, Manzanillo, Col., CP 28237",
    "city": "Manzanillo",
    "state": "Colima",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 19.05081,
    "lng": -104.278044
  },
  {
    "id": "14073",
    "name": "Kiosko Emiliano Zapata",
    "address": "Francisco Villa 2 Emiliano Zapata, Cihuatlan, Jal., CP 48983",
    "city": "Cihuatlan",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 19.24354,
    "lng": -104.717435
  },
  {
    "id": "14074",
    "name": "Kiosko Teniente Azueta",
    "address": "Av Teniente Azueta 48 Burocrata, Manzanillo, Col., CP 28250",
    "city": "Manzanillo",
    "state": "Colima",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 19.05887,
    "lng": -104.30277
  },
  {
    "id": "14075",
    "name": "Kiosko Villa Obregón",
    "address": "Alvaro Obregon 31 ., Cihuatlan, Jal., CP 48980",
    "city": "Cihuatlan",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.22584,
    "lng": -104.700584
  },
  {
    "id": "14076",
    "name": "Kiosko Nuevo Miguel Hidalgo",
    "address": "Carretera Federal #200 1 Localidad Miguel Hidalgo Mpio de la Huerta, La Huerta, Jal., CP 48890",
    "city": "La Huerta",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.357393,
    "lng": -104.896501
  },
  {
    "id": "14078",
    "name": "Kiosko La Huerta Zapata",
    "address": "Carretera Federal 200 2, Manzanillo, Col., CP 28836",
    "city": "Manzanillo",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 19.38646,
    "lng": -104.964857
  },
  {
    "id": "14079",
    "name": "Kiosko La Huerta",
    "address": "Av Rafael Palomera 40 Centro la Huerta, Manzanillo, Col., CP 48850",
    "city": "Manzanillo",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.487726,
    "lng": -104.636094
  },
  {
    "id": "14080",
    "name": "Kiosko Jalipa",
    "address": "Calle Alvaro Obregon 3 Jalipa, Manzanillo, Col., CP 28870",
    "city": "Manzanillo",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.124586,
    "lng": -104.263556
  },
  {
    "id": "14081",
    "name": "Kiosko De Septiembre",
    "address": "Calle San Luis Potosi 1 16 de Septiembre, Manzanillo, Col., CP 28239",
    "city": "Manzanillo",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 19.060582,
    "lng": -104.287534
  },
  {
    "id": "14082",
    "name": "Kiosko Los Altos",
    "address": "Carret Manzanillo Chandiablo 4014 No Especificada en el Catalogo, Manzanillo, Col., CP 28865",
    "city": "Manzanillo",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.14934,
    "lng": -104.336827
  },
  {
    "id": "14083",
    "name": "Kiosko Obregon",
    "address": "Camino Real 1 la Resolana, Casimiro Castillo, Jal., CP 48930",
    "city": "Casimiro Castillo",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.613664,
    "lng": -104.453221
  },
  {
    "id": "14084",
    "name": "Kiosko Casimiro Castillo Centro",
    "address": "Avmanuel M Dieguez 25 No Especificada, Manzanillo, Col., CP 48930",
    "city": "Manzanillo",
    "state": "Colima",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 19.604177,
    "lng": -104.435391
  },
  {
    "id": "14085",
    "name": "Kiosko Minatitlan",
    "address": "Calle 5 de Mayo 1 Centro, Minatitlan, Col., CP 28750",
    "city": "Minatitlan",
    "state": "Colima",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 19.386599,
    "lng": -104.052061
  },
  {
    "id": "14086",
    "name": "Kiosko Villa Purificacion",
    "address": "Hidalgo 250 Centro, Villa Purificacion, Jal., CP 48800",
    "city": "Villa Purificacion",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 19.719022,
    "lng": -104.607616
  },
  {
    "id": "14088",
    "name": "Kiosko Gas Minatitlan",
    "address": "Carr Km 0 + 200 Minatitlan Villa de Alvarez Sn Otra No Especificada en el Catalogo, Minatitlan, Col., CP 28750",
    "city": "Minatitlan",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 19.396585,
    "lng": -104.056686
  },
  {
    "id": "14092",
    "name": "Kiosko Esmeralda",
    "address": "Calle Esmeralda 25 Calle Coral y Prol. Elias Zamora, Manzanillo, Col., CP 28869",
    "city": "Manzanillo",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.12437,
    "lng": -104.34406
  },
  {
    "id": "14093",
    "name": "Kiosko Miguel de la Madrid",
    "address": "Boulevard Licendiado Miguel de la Madrid Hurtado, Manzanillo, Col., CP 28869",
    "city": "Manzanillo",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 19.108891,
    "lng": -104.33619
  },
  {
    "id": "14094",
    "name": "Kiosko Independencia",
    "address": "Independencia 26 Independencia y Esq. Lazaro Cardenas, Manzanillo, Col., CP 28239",
    "city": "Manzanillo",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.068104,
    "lng": -104.285372
  },
  {
    "id": "14096",
    "name": "Kiosko Mar del Sur",
    "address": "Espatula 470 Res Azul Marino, Manzanillo, Col., CP 28864",
    "city": "Manzanillo",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.129275,
    "lng": -104.334309
  },
  {
    "id": "14097",
    "name": "Kiosko Jaluco",
    "address": "16 de Septiembre 2 ., Cihuatlan, Jal., CP 48985",
    "city": "Cihuatlan",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café",
      "Hot Dogs"
    ],
    "lat": 19.229039,
    "lng": -104.68316
  },
  {
    "id": "14098",
    "name": "Kiosko Residencial la Higuera",
    "address": "Frambollan 2 Centro, Manzanillo, Col., CP 28200",
    "city": "Manzanillo",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.134269,
    "lng": -104.325806
  },
  {
    "id": "14099",
    "name": "Kiosko Residencial Gaviotas",
    "address": "Av Primaveras 396 ., Manzanillo, Col., CP 28219",
    "city": "Manzanillo",
    "state": "Colima",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 19.0971,
    "lng": -104.295558
  },
  {
    "id": "14100",
    "name": "Kiosko Nueva España",
    "address": "Nueva España 176 ., Cihuatlan, Jal., CP 48987",
    "city": "Cihuatlan",
    "state": "Jalisco",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café",
      "Hot Dogs"
    ],
    "lat": 19.210531,
    "lng": -104.68032
  },
  {
    "id": "14101",
    "name": "Kiosko El Aguacate",
    "address": "Barra de Navidad a Manzanillo L-1, Mza-60 ., Cihuatlan, Jal., CP 48990",
    "city": "Cihuatlan",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 19.22429,
    "lng": -104.64339
  },
  {
    "id": "14102",
    "name": "Kiosko Laguna del Tule",
    "address": "Abel Salgado 25 ., Cihuatlan, Jal., CP 48980",
    "city": "Cihuatlan",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 19.222424,
    "lng": -104.700644
  },
  {
    "id": "14103",
    "name": "Kiosko Lazaro Cardenas",
    "address": "Lazaro Cardenas 132 ., Manzanillo, Col., CP 28870",
    "city": "Manzanillo",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.120568,
    "lng": -104.26847
  },
  {
    "id": "14105",
    "name": "Kiosko Reforma",
    "address": "Av. Parotas 87 ., Manzanillo, Col., CP 28219",
    "city": "Manzanillo",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.091391,
    "lng": -104.292364
  },
  {
    "id": "14106",
    "name": "Kiosko Ingenio Casimiro",
    "address": "Alvaro Obregon, Manzanillo, Col., CP 48930",
    "city": "Manzanillo",
    "state": "Colima",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Hot Dogs"
    ],
    "lat": 19.602082,
    "lng": -104.440836
  },
  {
    "id": "14107",
    "name": "Kiosko Vicente Guerrero",
    "address": "Vicente Guerrero S/n Villa Obregon, Cihuatlan, Jal., CP 48980",
    "city": "Cihuatlan",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 19.220198,
    "lng": -104.695307
  },
  {
    "id": "14108",
    "name": "Kiosko Puerta Dorada",
    "address": "Calle Juan Jose Arreola No 440, Manzanillo, Col., CP 28869",
    "city": "Manzanillo",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Hot Dogs"
    ],
    "lat": 19.117163,
    "lng": -104.322003
  },
  {
    "id": "14109",
    "name": "Kiosko Gas la Iguana",
    "address": "Blvd Miguel de la Madrid No. 384, Manzanillo, Col., CP 28239",
    "city": "Manzanillo",
    "state": "Colima",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 19.073775,
    "lng": -104.283712
  },
  {
    "id": "14113",
    "name": "Kiosko Av Primaveras",
    "address": "Av las Primaaveras, Cihuatlan, Jal., CP 48980",
    "city": "Cihuatlan",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 19.22363,
    "lng": -104.713144
  },
  {
    "id": "17005",
    "name": "Kiosko Cafeteria Planta",
    "address": "Av Tecoman Sur 99 el Moralete, Colima, Col., CP 28060",
    "city": "Colima",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.230885,
    "lng": -103.711437
  },
  {
    "id": "19001",
    "name": "Kiosko Merced Cabrera",
    "address": "Av J Merced Cabrera 684 Burocratas del Estado., Villa de Alvarez, Col., CP 28989",
    "city": "Villa de Alvarez",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.271074,
    "lng": -103.747005
  },
  {
    "id": "19002",
    "name": "Kiosko Benito Juarez",
    "address": "Av Benito Juarez 971 la Floresta, Villa de Alvarez, Col., CP 28973",
    "city": "Villa de Alvarez",
    "state": "Colima",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 19.249677,
    "lng": -103.745734
  },
  {
    "id": "19003",
    "name": "Kiosko Genoveva Sanchez",
    "address": "Av Tecnologico 46 Jardines Vista Hermosa, Colima, Col., CP 28017",
    "city": "Colima",
    "state": "Colima",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 19.25748,
    "lng": -103.718
  },
  {
    "id": "19004",
    "name": "Kiosko Gas Diamante",
    "address": "Av Pablo Silva Garcia 104 Villas Diamante, Villa de Alvarez, Col., CP 28979",
    "city": "Villa de Alvarez",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 19.27083,
    "lng": -103.7476
  },
  {
    "id": "19006",
    "name": "Kiosko Centro Medico",
    "address": "Av Maclovio Herrera 150 Jardines de la Corregidora, Colima, Col., CP 28030",
    "city": "Colima",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 19.24913,
    "lng": -103.72705
  },
  {
    "id": "19007",
    "name": "Kiosko Villa Izcalli",
    "address": "3er Anillo Periferico 188 del Angel, Villa de Alvarez, Col., CP 28979",
    "city": "Villa de Alvarez",
    "state": "Colima",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 19.28442,
    "lng": -103.73594
  },
  {
    "id": "19008",
    "name": "Kiosko Bugambilias",
    "address": "3er Anillo Periferico 98 el Angel, Villa de Alvarez, Col., CP 28979",
    "city": "Villa de Alvarez",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 19.2825,
    "lng": -103.73196
  },
  {
    "id": "19009",
    "name": "Kiosko Glorieta del Charro",
    "address": "Av Javier Mina 251 Placetas Estadio, Colima, Col., CP 28050",
    "city": "Colima",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 19.24364,
    "lng": -103.73568
  },
  {
    "id": "19010",
    "name": "Kiosko Comala",
    "address": "Venustiano Carranza 149 Centro, Comala, Col., CP 28450",
    "city": "Comala",
    "state": "Colima",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 19.32102,
    "lng": -103.75889
  },
  {
    "id": "19011",
    "name": "Kiosko Albarrada",
    "address": "Av Anastacio Brizuela 461 J Pimentel Llerenas, Colima, Col., CP 28077",
    "city": "Colima",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 19.23951,
    "lng": -103.73835
  },
  {
    "id": "19012",
    "name": "Kiosko Frontera",
    "address": "Av Maria Ahumada de Gomez 91 la Frontera, Villa de Alvarez, Col., CP 28979",
    "city": "Villa de Alvarez",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Hot Dogs"
    ],
    "lat": 19.27111,
    "lng": -103.73362
  },
  {
    "id": "19013",
    "name": "Kiosko Constitucion",
    "address": "Av Constitucion 1452 Residencial del Country, Colima, Col., CP 28017",
    "city": "Colima",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.25825,
    "lng": -103.71494
  },
  {
    "id": "19014",
    "name": "Kiosko San Fernando",
    "address": "Av San Fernando 49 Guadalajarita, Colima, Col., CP 28030",
    "city": "Colima",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.25091,
    "lng": -103.72057
  },
  {
    "id": "19015",
    "name": "Kiosko Sevilla",
    "address": "Av Felipe Sevilla del Rio 451 Centro, Colima, Col., CP 28000",
    "city": "Colima",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 19.25181,
    "lng": -103.71058
  },
  {
    "id": "19016",
    "name": "Kiosko Rey Coliman",
    "address": "Pedro a Galvan Sur 499 Centro, Colima, Col., CP 28000",
    "city": "Colima",
    "state": "Colima",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 19.23055,
    "lng": -103.7227
  },
  {
    "id": "19017",
    "name": "Kiosko Filomeno Medina",
    "address": "Filomeno Medina 44 Centro, Colima, Col., CP 28000",
    "city": "Colima",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 19.24143,
    "lng": -103.7239
  },
  {
    "id": "19018",
    "name": "Kiosko Gonzalo de Sandoval",
    "address": "Av Gonzalo de Sandoval 1295 Oriental, Colima, Col., CP 28046",
    "city": "Colima",
    "state": "Colima",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 19.24313,
    "lng": -103.69908
  },
  {
    "id": "19019",
    "name": "Kiosko Los Olivos",
    "address": "Av Constitucion 2171 Fracc Residencial los Olivos, Colima, Col., CP 28017",
    "city": "Colima",
    "state": "Colima",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 19.26921,
    "lng": -103.70791
  },
  {
    "id": "19020",
    "name": "Kiosko Pablo Silva",
    "address": "Av Pablo Silva Garcia 580 el Centenario, Villa de Alvarez, Col., CP 28984",
    "city": "Villa de Alvarez",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.2566,
    "lng": -103.75377
  },
  {
    "id": "19021",
    "name": "Kiosko Camino Real",
    "address": "Blvd Camino Real 501 el Diezmo, Colima, Col., CP 28010",
    "city": "Colima",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.25055,
    "lng": -103.70276
  },
  {
    "id": "19022",
    "name": "Kiosko Rancho Blanco",
    "address": "Av el Yaqui 399 el Yaqui, Colima, Col., CP 28075",
    "city": "Colima",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.23857,
    "lng": -103.76178
  },
  {
    "id": "19023",
    "name": "Kiosko Los Maestros",
    "address": "Av de los Maestros 308 Huertas del Sol, Colima, Col., CP 28035",
    "city": "Colima",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.25578,
    "lng": -103.72674
  },
  {
    "id": "19024",
    "name": "Kiosko Gas Coquimatlan",
    "address": "Carretera Colima Coquimatlan Km 8.5 S/n Centro, Coquimatlan, Col., CP 28400",
    "city": "Coquimatlan",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café",
      "Hot Dogs"
    ],
    "lat": 19.21506,
    "lng": -103.80379
  },
  {
    "id": "19025",
    "name": "Kiosko Gas Sauces",
    "address": "Autopista Colima Manzanillo 300 Centro, Colima, Col., CP 28000",
    "city": "Colima",
    "state": "Colima",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 19.21261,
    "lng": -103.74002
  },
  {
    "id": "19026",
    "name": "Kiosko Ignacio Sandoval",
    "address": "Alfonso Reyes 301 Jardines Vista Hermosa, Colima, Col., CP 28017",
    "city": "Colima",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café",
      "Hot Dogs"
    ],
    "lat": 19.25409,
    "lng": -103.71127
  },
  {
    "id": "19027",
    "name": "Kiosko Ayuntamiento",
    "address": "Avenida Ayuntamiento 641 Lomas de la Higuera, Villa de Alvarez, Col., CP 28979",
    "city": "Villa de Alvarez",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.28066,
    "lng": -103.73281
  },
  {
    "id": "19028",
    "name": "Kiosko Loma Hermosa",
    "address": "Avenida Akolliman 893 Villa Izcalli Caxitlan, Villa de Alvarez, Col., CP 28979",
    "city": "Villa de Alvarez",
    "state": "Colima",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 19.28799,
    "lng": -103.73447
  },
  {
    "id": "19029",
    "name": "Kiosko Hospital Regional",
    "address": "Av Tercer Anillo Periferico Esquina Blvd Camino Real S/n el Diezmo, Colima, Col., CP 28010",
    "city": "Colima",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 19.25882,
    "lng": -103.68893
  },
  {
    "id": "19030",
    "name": "Kiosko Angeles",
    "address": "Av Niños Heroes 1354 los Angeles, Colima, Col., CP 28048",
    "city": "Colima",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.23581,
    "lng": -103.69909
  },
  {
    "id": "19031",
    "name": "Kiosko Insurgentes",
    "address": "Av Insurgentes 652 Camino Real, Colima, Col., CP 28040",
    "city": "Colima",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 19.24319,
    "lng": -103.71097
  },
  {
    "id": "19032",
    "name": "Kiosko Gas Libramiento",
    "address": "Libramiento Ejercito Mexicano 552 Nuevo Milenio, Colima, Col., CP 28048",
    "city": "Colima",
    "state": "Colima",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Hot Dogs"
    ],
    "lat": 19.22347,
    "lng": -103.71181
  },
  {
    "id": "19033",
    "name": "Kiosko Hosp Puerta Hierro",
    "address": "Av Ignacio Sandoval 1799 Girasoles, Colima, Col., CP 28018",
    "city": "Colima",
    "state": "Colima",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 19.26068,
    "lng": -103.70624
  },
  {
    "id": "19035",
    "name": "Kiosko Diosa del Agua",
    "address": "Av Enrique Corona Morfin 475 Burocratas del Estado, Villa de Alvarez, Col., CP 28989",
    "city": "Villa de Alvarez",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 19.27381,
    "lng": -103.73991
  },
  {
    "id": "19036",
    "name": "Kiosko Cristobal Colon",
    "address": "Av Niños Heroes 19 Rancho Santo, Villa de Alvarez, Col., CP 28973",
    "city": "Villa de Alvarez",
    "state": "Colima",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Hot Dogs"
    ],
    "lat": 19.25371,
    "lng": -103.74191
  },
  {
    "id": "19037",
    "name": "Kiosko Gas Real Don Juan",
    "address": "Blvd Rodolfo Chavez Carrillo 1001 Real de Don Juan, Colima, Col., CP 28078",
    "city": "Colima",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 19.24024,
    "lng": -103.75674
  },
  {
    "id": "19038",
    "name": "Kiosko Maria Ahumada",
    "address": "Federico Cardenas Barajas 152 Alfredo V Bonfil, Villa de Alvarez, Col., CP 28979",
    "city": "Villa de Alvarez",
    "state": "Colima",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 19.27251,
    "lng": -103.73484
  },
  {
    "id": "19039",
    "name": "Kiosko Josefa Ortiz",
    "address": "Av Benito Juarez 43 Alta Villa, Villa de Alvarez, Col., CP 28987",
    "city": "Villa de Alvarez",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 19.26473,
    "lng": -103.74008
  },
  {
    "id": "19040",
    "name": "Kiosko Gas la Estancia",
    "address": "Av Niños Heroes 289 Burocratas Municipales, Colima, Col., CP 28048",
    "city": "Colima",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Hot Dogs"
    ],
    "lat": 19.23461,
    "lng": -103.68513
  },
  {
    "id": "19041",
    "name": "Kiosko Gas Cortes",
    "address": "Carretera Colima Manzanillo Km 3.5 Centro, Colima, Col., CP 28000",
    "city": "Colima",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Hot Dogs"
    ],
    "lat": 19.20929,
    "lng": -103.74096
  },
  {
    "id": "19043",
    "name": "Kiosko Gas Gasoprim",
    "address": "3er Anillo Periferico 151 Primavera, Colima, Col., CP 28050",
    "city": "Colima",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 19.2685,
    "lng": -103.70282
  },
  {
    "id": "19044",
    "name": "Kiosko Madero Colima",
    "address": "Francisco I Madero 83 Centro, Colima, Col., CP 28000",
    "city": "Colima",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 19.24257,
    "lng": -103.72672
  },
  {
    "id": "19045",
    "name": "Kiosko V Carranza",
    "address": "Av de la Paz 138 Residencial Santa Barbara, Colima, Col., CP 28017",
    "city": "Colima",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café",
      "Hot Dogs"
    ],
    "lat": 19.26741,
    "lng": -103.7171
  },
  {
    "id": "19046",
    "name": "Kiosko Diego Garcia",
    "address": "Av Pablo Silva Garcia 858 Fracc los Olivos, Villa de Alvarez, Col., CP 28982",
    "city": "Villa de Alvarez",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 19.24736,
    "lng": -103.75715
  },
  {
    "id": "19047",
    "name": "Kiosko Gas Ejercito Nacional",
    "address": "Ejercito Mexicano 1075 el Porvenir, Colima, Col., CP 28019",
    "city": "Colima",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.25386,
    "lng": -103.68913
  },
  {
    "id": "19048",
    "name": "Kiosko Ex Hacienda",
    "address": "Prolongacion Hidalgo 907 Real Hacienda, Villa de Alvarez, Col., CP 28978",
    "city": "Villa de Alvarez",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Hot Dogs"
    ],
    "lat": 19.28283,
    "lng": -103.72795
  },
  {
    "id": "19049",
    "name": "Kiosko Prolongacion Hidalgo",
    "address": "Prolongacion Hidalgo 992 Fracc Bugambilias, Villa de Alvarez, Col., CP 28978",
    "city": "Villa de Alvarez",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.28695,
    "lng": -103.72649
  },
  {
    "id": "19050",
    "name": "Kiosko Tabachines",
    "address": "Av Gil Gudiño 1150 los Tabachines, Villa de Alvarez, Col., CP 28983",
    "city": "Villa de Alvarez",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.24293,
    "lng": -103.76599
  },
  {
    "id": "19051",
    "name": "Kiosko Cumbre",
    "address": "Av Lic Carlos Madrid Bejar 1222 Juana de Asbaje, Colima, Col., CP 28085",
    "city": "Colima",
    "state": "Colima",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 19.21229,
    "lng": -103.72179
  },
  {
    "id": "19052",
    "name": "Kiosko Nuevo Milenio",
    "address": "Sonora 1258 Santa Amalia, Colima, Col., CP 28048",
    "city": "Colima",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.23026,
    "lng": -103.70331
  },
  {
    "id": "19053",
    "name": "Kiosko Palma Terra",
    "address": "Av Tecnologico 199 la Armonia, Colima, Col., CP 28020",
    "city": "Colima",
    "state": "Colima",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 19.26035,
    "lng": -103.72268
  },
  {
    "id": "19054",
    "name": "Kiosko Gas Coqui 2",
    "address": "Blvd Coquimatlan 33 Centro, Coquimatlan, Col., CP 28400",
    "city": "Coquimatlan",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 19.215,
    "lng": -103.80464
  },
  {
    "id": "19055",
    "name": "Kiosko Gas Senderos",
    "address": "Av Pablo Silva Garcia 940 los Olivos, Villa de Alvarez, Col., CP 28982",
    "city": "Villa de Alvarez",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.24465,
    "lng": -103.75841
  },
  {
    "id": "19056",
    "name": "Kiosko Linda Vista",
    "address": "Privada Xoloapan 897 Lindavista, Villa de Alvarez, Col., CP 28979",
    "city": "Villa de Alvarez",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.28999,
    "lng": -103.73858
  },
  {
    "id": "19057",
    "name": "Kiosko Ramon Serrano",
    "address": "Av Niños Heroes 304 Juan Jose Rios Iii, Villa de Alvarez, Col., CP 28984",
    "city": "Villa de Alvarez",
    "state": "Colima",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 19.2551,
    "lng": -103.74878
  },
  {
    "id": "19058",
    "name": "Kiosko Cuauhtemoc",
    "address": "Cinco de Mayo 2 Centro, Cuauhtemoc, Col., CP 28500",
    "city": "Cuauhtemoc",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.3297,
    "lng": -103.60325
  },
  {
    "id": "19059",
    "name": "Kiosko Espinal",
    "address": "Av Niños Heroes 1248 Higueras del Espinal, Villa de Alvarez, Col., CP 28984",
    "city": "Villa de Alvarez",
    "state": "Colima",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 19.26656,
    "lng": -103.77105
  },
  {
    "id": "19060",
    "name": "Kiosko Tivoli",
    "address": "21 de Marzo 810 Leonardo B Gutierrez, Colima, Col., CP 28089",
    "city": "Colima",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.22916,
    "lng": -103.73384
  },
  {
    "id": "19061",
    "name": "Kiosko Campesino",
    "address": "Calzada del Campesino 248 el Moralete, Colima, Col., CP 28060",
    "city": "Colima",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.22912,
    "lng": -103.71807
  },
  {
    "id": "19062",
    "name": "Kiosko Colegio Ingles",
    "address": "Av Venustiano Carranza 1816 Jardines de la Hacienda, Colima, Col., CP 28017",
    "city": "Colima",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 19.27963,
    "lng": -103.71297
  },
  {
    "id": "19063",
    "name": "Kiosko Basilio Badillo",
    "address": "Basilio Badillo 9 el Toreo, Cuauhtemoc, Col., CP 28500",
    "city": "Cuauhtemoc",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Hot Dogs"
    ],
    "lat": 19.32516,
    "lng": -103.6019
  },
  {
    "id": "19065",
    "name": "Kiosko Mega Palenque",
    "address": "3er Anillo Periferico Griselda Alvarez Esq Sn Glorieta de los Perritos, Villa de Alvarez, Col., CP 28979",
    "city": "Villa de Alvarez",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.28421,
    "lng": -103.74479
  },
  {
    "id": "19066",
    "name": "Kiosko Gas Trapiche",
    "address": "Carretera Colima Guadalajara Km 4 + 720 Rancho Paraiso, Cuauhtemoc, Col., CP 28550",
    "city": "Cuauhtemoc",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.26884,
    "lng": -103.67455
  },
  {
    "id": "19067",
    "name": "Kiosko Queseria",
    "address": "Cuauhtemoc 41 Centro, Cuauhtemoc, Col., CP 28510",
    "city": "Cuauhtemoc",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 19.38795,
    "lng": -103.57468
  },
  {
    "id": "19068",
    "name": "Kiosko Estadio Colima",
    "address": "Francisco Solorzano Bejar 651 la Albarrada, Colima, Col., CP 28078",
    "city": "Colima",
    "state": "Colima",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Hot Dogs"
    ],
    "lat": 19.23121,
    "lng": -103.73879
  },
  {
    "id": "19069",
    "name": "Kiosko Trapiche Zapata",
    "address": "Av Camino Real Sn Residencial Camino Real, Cuauhtemoc, Col., CP 28550",
    "city": "Cuauhtemoc",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 19.27754,
    "lng": -103.66295
  },
  {
    "id": "19071",
    "name": "Kiosko Gustavo Vazquez",
    "address": "Libelula 1552 Mirador de la Cumbrfe Iii, Colima, Col., CP 28048",
    "city": "Colima",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 19.22276,
    "lng": -103.69499
  },
  {
    "id": "19072",
    "name": "Kiosko Lagunas",
    "address": "Laguna de la Estrella 188 Solidaridad, Villa de Alvarez, Col., CP 28979",
    "city": "Villa de Alvarez",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.29279,
    "lng": -103.7322
  },
  {
    "id": "19073",
    "name": "Kiosko Navarro",
    "address": "Av Gonzalo Sandoval 1366 la Virgencita, Colima, Col., CP 28047",
    "city": "Colima",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.24043,
    "lng": -103.69616
  },
  {
    "id": "19074",
    "name": "Kiosko Las Torres",
    "address": "Republica de Colombia 1555 las Americas, Colima, Col., CP 28047",
    "city": "Colima",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Hot Dogs"
    ],
    "lat": 19.24497,
    "lng": -103.6905
  },
  {
    "id": "19075",
    "name": "Kiosko Aguilar Coqui",
    "address": "5 de Mayo Esq con Av Calzada Aguilar Sur 100 Centro, Coquimatlan, Col., CP 28400",
    "city": "Coquimatlan",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 19.20131,
    "lng": -103.80961
  },
  {
    "id": "19076",
    "name": "Kiosko Alcaraces",
    "address": "Emiliano Zapata 25 Centro, Cuauhtemoc, Col., CP 28520",
    "city": "Cuauhtemoc",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.36441,
    "lng": -103.57788
  },
  {
    "id": "19077",
    "name": "Kiosko Prados del Sur",
    "address": "Av Lic Ricardo Palacios 500 Residencial Prados del Sur, Colima, Col., CP 28078",
    "city": "Colima",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.23671,
    "lng": -103.75144
  },
  {
    "id": "19078",
    "name": "Kiosko Imss Villa de Alvarez",
    "address": "Lapislazuli 232 el Haya, Villa de Alvarez, Col., CP 28983",
    "city": "Villa de Alvarez",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 19.27022,
    "lng": -103.75917
  },
  {
    "id": "19079",
    "name": "Kiosko Villas San Jose",
    "address": "Av Gral Diego Garcia Conde 344 Villas San Jose, Villa de Alvarez, Col., CP 28984",
    "city": "Villa de Alvarez",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 19.2473,
    "lng": -103.75211
  },
  {
    "id": "19080",
    "name": "Kiosko Acapulco",
    "address": "Av Acapulco 524 Nuevo Milenio, Colima, Col., CP 28048",
    "city": "Colima",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Hot Dogs"
    ],
    "lat": 19.22738,
    "lng": -103.70451
  },
  {
    "id": "19081",
    "name": "Kiosko Real Bugambilias",
    "address": "Av Real Bugambilias 501 Real Bugambilias, Villa de Alvarez, Col., CP 28979",
    "city": "Villa de Alvarez",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 19.28119,
    "lng": -103.7381
  },
  {
    "id": "19082",
    "name": "Kiosko Villas de Oro",
    "address": "Av Pablo Silva Garcia 281 Villa de Oro, Villa de Alvarez, Col., CP 28985",
    "city": "Villa de Alvarez",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 19.26334,
    "lng": -103.75051
  },
  {
    "id": "19083",
    "name": "Kiosko Jesus Ponce",
    "address": "Felipe Sevilla del Rio 506 Lomas de Circunvalacion, Colima, Col., CP 28010",
    "city": "Colima",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.25086,
    "lng": -103.71019
  },
  {
    "id": "19084",
    "name": "Kiosko Merida",
    "address": "Merida 244 Cuauhtemoc, Colima, Col., CP 28048",
    "city": "Colima",
    "state": "Colima",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 19.23172,
    "lng": -103.69726
  },
  {
    "id": "19085",
    "name": "Kiosko Panteon Colima",
    "address": "Blvd Camino Real 52 Camino Real, Colima, Col., CP 28040",
    "city": "Colima",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 19.2449,
    "lng": -103.71067
  },
  {
    "id": "19086",
    "name": "Kiosko La Trinidad",
    "address": "Socorro Diaz Palacios 104 la Trinidad, Comala, Col., CP 28450",
    "city": "Comala",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.32939,
    "lng": -103.76093
  },
  {
    "id": "19088",
    "name": "Kiosko Republica",
    "address": "Av Republica 152 Paraiso, Colima, Col., CP 28048",
    "city": "Colima",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.23296,
    "lng": -103.69291
  },
  {
    "id": "19089",
    "name": "Kiosko Montellano",
    "address": "Av la Villita 475 Montellano, Villa de Alvarez, Col., CP 28989",
    "city": "Villa de Alvarez",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.28862,
    "lng": -103.75487
  },
  {
    "id": "19090",
    "name": "Kiosko La Comarca",
    "address": "Av J Merced Cabrera 1220 la Comarca, Villa de Alvarez, Col., CP 28989",
    "city": "Villa de Alvarez",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 19.27794,
    "lng": -103.76338
  },
  {
    "id": "19091",
    "name": "Kiosko Mirador de la Cumbre",
    "address": "Cañaberales 1449 el Mirador de la Cumbre, Colima, Col., CP 28048",
    "city": "Colima",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.22675,
    "lng": -103.6976
  },
  {
    "id": "19092",
    "name": "Kiosko Tulipanes",
    "address": "Av Niños Heroes 967 Tulipanes, Villa de Alvarez, Col., CP 28983",
    "city": "Villa de Alvarez",
    "state": "Colima",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 19.26312,
    "lng": -103.76601
  },
  {
    "id": "19093",
    "name": "Kiosko Valle Dorado",
    "address": "Paseo Miguel de la Madrid Hurtado 708 Valle Dorado, Colima, Col., CP 28018",
    "city": "Colima",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 19.26135,
    "lng": -103.69282
  },
  {
    "id": "19095",
    "name": "Kiosko Lomas Vista Hermosa",
    "address": "Constitucion 769 Lomas de Vista Hermosa, Colima, Col., CP 28016",
    "city": "Colima",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Hot Dogs"
    ],
    "lat": 19.25497,
    "lng": -103.71819
  },
  {
    "id": "19096",
    "name": "Kiosko Manuel Alvarez",
    "address": "Miguel Virgen Morfin 259 Villa de Alvarez Centro, Villa de Alvarez, Col., CP 28970",
    "city": "Villa de Alvarez",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 19.25973,
    "lng": -103.73215
  },
  {
    "id": "19097",
    "name": "Kiosko Villas del Jazmin",
    "address": "Av del Jazmin 551 Rivera del Jazmin, Colima, Col., CP 28047",
    "city": "Colima",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 19.24126,
    "lng": -103.68239
  },
  {
    "id": "19098",
    "name": "Kiosko Solidaridad",
    "address": "Laguna la Maria 390 Solidaridad, Villa de Alvarez, Col., CP 28979",
    "city": "Villa de Alvarez",
    "state": "Colima",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 19.29917,
    "lng": -103.73841
  },
  {
    "id": "19099",
    "name": "Kiosko Altozano",
    "address": "Av Primavera 30 Fraccionamiento Altozano, Cuauhtemoc, Col., CP 28530",
    "city": "Cuauhtemoc",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.31376,
    "lng": -103.67099
  },
  {
    "id": "19101",
    "name": "Kiosko Residencial Esmeralda",
    "address": "Av Venustiano Carranza 1630 Residencial Esmeralda, Colima, Col., CP 28017",
    "city": "Colima",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 19.27075,
    "lng": -103.71646
  },
  {
    "id": "19102",
    "name": "Kiosko Gas Tonila",
    "address": "Carretera Tonila la Esperanza 1012 Centro, Tonila, Jal., CP 49840",
    "city": "Tonila",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.40512,
    "lng": -103.54127
  },
  {
    "id": "19103",
    "name": "Kiosko Glorieta del Dif",
    "address": "Blvd Camino Real 1 Jardines de las Lomas, Colima, Col., CP 28014",
    "city": "Colima",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 19.245088,
    "lng": -103.712925
  },
  {
    "id": "19104",
    "name": "Kiosko Gas Pueblo Juarez",
    "address": "Blvd Pueblo Juarez 500, Coquimatlan, Col., CP 28410",
    "city": "Coquimatlan",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.16754,
    "lng": -103.92251
  },
  {
    "id": "19106",
    "name": "Kiosko Campus Albarrada",
    "address": "Santiago Escoto 540 la Albarrada, Colima, Col., CP 28078",
    "city": "Colima",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café",
      "Hot Dogs"
    ],
    "lat": 19.23356,
    "lng": -103.74387
  },
  {
    "id": "19107",
    "name": "Kiosko Suchitlan",
    "address": "Gorgonio Davalos 157 No Especificada, Comala, Col., CP 28459",
    "city": "Comala",
    "state": "Colima",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 19.37762,
    "lng": -103.71586
  },
  {
    "id": "19108",
    "name": "Kiosko Villas Providencia",
    "address": "Dr Miguel Galindo 766 Villas Providencia, Villa de Alvarez, Col., CP 28987",
    "city": "Villa de Alvarez",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 19.26596,
    "lng": -103.75251
  },
  {
    "id": "19109",
    "name": "Kiosko Palo Alto",
    "address": "Av Bicentenario 351 Palo Alto, Villa de Alvarez, Col., CP 28984",
    "city": "Villa de Alvarez",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 19.2754,
    "lng": -103.78043
  },
  {
    "id": "19110",
    "name": "Kiosko Gas Queseria",
    "address": "Carr Libre Colima-tonila Km 24.5 Centro, Cuauhtemoc, Col., CP 28510",
    "city": "Cuauhtemoc",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Hot Dogs"
    ],
    "lat": 19.38588,
    "lng": -103.56951
  },
  {
    "id": "19111",
    "name": "Kiosko Bosques del Sur",
    "address": "Prol Lic Benito Juarez 202 Residencial Bosques del Sur, Colima, Col., CP 28089",
    "city": "Colima",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 19.22377,
    "lng": -103.73568
  },
  {
    "id": "19113",
    "name": "Kiosko Arboledas de Carmen",
    "address": "Prolongacion Hidalgo 859 Jardines de Bugambilias, Villa de Alvarez, Col., CP 28978",
    "city": "Villa de Alvarez",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.278606,
    "lng": -103.729565
  },
  {
    "id": "19114",
    "name": "Kiosko Residencial Victoria",
    "address": "Av de los Diamantes 9 Residencial Victoria, Colima, Col., CP 28017",
    "city": "Colima",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 19.27488,
    "lng": -103.70309
  },
  {
    "id": "19115",
    "name": "Kiosko Romanza",
    "address": "Primavera del Arce 294 Residencial la Primavera, Colima, Col., CP 28610",
    "city": "Colima",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.28851,
    "lng": -103.70852
  },
  {
    "id": "19116",
    "name": "Kiosko Colinas del Rey",
    "address": "Av Enrique Corona Morfin 452 Colinas del Rey, Villa de Alvarez, Col., CP 28979",
    "city": "Villa de Alvarez",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Hot Dogs"
    ],
    "lat": 19.28682,
    "lng": -103.74568
  },
  {
    "id": "19117",
    "name": "Kiosko Valle de las Huertas",
    "address": "Av 12 de Octubre 291 Valle de las Huertas, Coquimatlan, Col., CP 28400",
    "city": "Coquimatlan",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Hot Dogs"
    ],
    "lat": 19.21161,
    "lng": -103.8079
  },
  {
    "id": "19118",
    "name": "Kiosko Cuauhtemoc Constitucion",
    "address": "Constitucion 89 Griselda Alvarez, Cuauhtemoc, Col., CP 28504",
    "city": "Cuauhtemoc",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.33382,
    "lng": -103.60336
  },
  {
    "id": "19119",
    "name": "Kiosko Lopez Rayon",
    "address": "Calle 5 de Mayo 159 Villa de Alvarez Centro, Villa de Alvarez, Col., CP 28970",
    "city": "Villa de Alvarez",
    "state": "Colima",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 19.265696396,
    "lng": -103.73078862
  },
  {
    "id": "19120",
    "name": "Kiosko Francisco Villa",
    "address": "Av Tecoman 299 Francisco Villa, Colima, Col., CP 28063",
    "city": "Colima",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.22686,
    "lng": -103.71265
  },
  {
    "id": "19121",
    "name": "Kiosko Jose D. Ruiz",
    "address": "Avenida Jose de Ruiz 250 Jardines de la Villa, Villa de Alvarez, Col., CP 28984",
    "city": "Villa de Alvarez",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 19.251775,
    "lng": -103.746537
  },
  {
    "id": "19122",
    "name": "Kiosko Rancho de Villa",
    "address": "Av Hidalgo 110 Lo de Villa, Colima, Col., CP 28620",
    "city": "Colima",
    "state": "Colima",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 19.23401,
    "lng": -103.76753
  },
  {
    "id": "19123",
    "name": "Kiosko Vista Volcanes",
    "address": "Av J Merced Cabrera 2017 Otra No Especificada en el Cataologo, Villa de Alvarez, Col., CP 28984",
    "city": "Villa de Alvarez",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 19.28363,
    "lng": -103.78022
  },
  {
    "id": "19124",
    "name": "Kiosko Glorieta de los Elefantes",
    "address": "Av Tecoman 101 Vicente Guerrero y Leonardo B Gutierrez, Colima, Col., CP 28067",
    "city": "Colima",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 19.23332,
    "lng": -103.70938
  },
  {
    "id": "19125",
    "name": "Kiosko Valle del Sol",
    "address": "Calle Piramide de Soser 1194 Valle del Sol, Villa de Alvarez, Col., CP 28983",
    "city": "Villa de Alvarez",
    "state": "Colima",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Hot Dogs"
    ],
    "lat": 19.242151,
    "lng": -103.770668
  },
  {
    "id": "19126",
    "name": "Kiosko La Reserva",
    "address": "Manzano 1042 la Reserva, Villa de Alvarez, Col., CP 28984",
    "city": "Villa de Alvarez",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.2619,
    "lng": -103.77347
  },
  {
    "id": "19127",
    "name": "Kiosko San Marcos",
    "address": "Juan Spada Grossi 11 Juan Spada Grossi y Melchor Ocampo, Tonila, Jal., CP 49850",
    "city": "Tonila",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café",
      "Hot Dogs"
    ],
    "lat": 19.44432,
    "lng": -103.50612
  },
  {
    "id": "19128",
    "name": "Kiosko Cofradia de Suchitlan",
    "address": "General Jose Juan Ortega 1-a Cofradia de Suchitlan, Comala, Col., CP 28459",
    "city": "Comala",
    "state": "Colima",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Hot Dogs"
    ],
    "lat": 19.4092,
    "lng": -103.69674
  },
  {
    "id": "19130",
    "name": "Kiosko Gas Benito Juarez",
    "address": "Av Benito Juarez 1066 Benito Juarez y Gral. Diego Garcia Conde, Villa de Alvarez, Col., CP 28973",
    "city": "Villa de Alvarez",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café",
      "Hot Dogs"
    ],
    "lat": 19.24654,
    "lng": -103.74753
  },
  {
    "id": "19131",
    "name": "Kiosko Jardines de la Estancia",
    "address": "Av Gonzalo Sandoval 1560 Av Republica y Violeta, Colima, Col., CP 28047",
    "city": "Colima",
    "state": "Colima",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 19.23957,
    "lng": -103.69152
  },
  {
    "id": "19132",
    "name": "Kiosko Los Amiales",
    "address": "Calle Reforma 491 Calle Reforma y Esquina Manzanillo, Coquimatlan, Col., CP 28400",
    "city": "Coquimatlan",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.19558,
    "lng": -103.81256
  },
  {
    "id": "19133",
    "name": "Kiosko Gas Sevilla",
    "address": "Av. Cosntitucion 50 Av Constitucion y Esq. Gabino Barreda, Colima, Col., CP 28016",
    "city": "Colima",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 19.25575,
    "lng": -103.717057
  },
  {
    "id": "19135",
    "name": "Kiosko Hospital de Cancerologia",
    "address": "Av Liceo de Varones 441 ., Colima, Col., CP 28060",
    "city": "Colima",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.221136,
    "lng": -103.727948
  },
  {
    "id": "19136",
    "name": "Kiosko Albaterra",
    "address": "Esmeralda 1310 Albaterra, Colima, Col., CP 28610",
    "city": "Colima",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Hot Dogs"
    ],
    "lat": 19.284913,
    "lng": -103.70615
  },
  {
    "id": "19137",
    "name": "Kiosko Glorieta las Torres",
    "address": "Antorcha Magisterial 1499 ., Colima, Col., CP 28047",
    "city": "Colima",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.250587,
    "lng": -103.686427
  },
  {
    "id": "19138",
    "name": "Kiosko Unidad Deportiva Comala",
    "address": "Miguel Hidalgo 364 Barrio Alto, Comala, Col., CP 28450",
    "city": "Comala",
    "state": "Colima",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Hot Dogs"
    ],
    "lat": 19.32918,
    "lng": -103.75305
  },
  {
    "id": "19139",
    "name": "Kiosko Catedral Colima",
    "address": "Francisco I Madero 1 Colima Centro, Colima, Col., CP 28000",
    "city": "Colima",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 19.243386,
    "lng": -103.727839
  },
  {
    "id": "19140",
    "name": "Kiosko Isenco",
    "address": "Av. Griselda Alvarez 1836 ., Colima, Col., CP 28047",
    "city": "Colima",
    "state": "Colima",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café",
      "Hot Dogs"
    ],
    "lat": 19.2552,
    "lng": -103.6792
  },
  {
    "id": "19141",
    "name": "Kiosko La Villita",
    "address": "Av. la Villita 181 la Comarca, Villa de Alvarez, Col., CP 28989",
    "city": "Villa de Alvarez",
    "state": "Colima",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 19.284224727,
    "lng": -103.761145046
  },
  {
    "id": "19142",
    "name": "Kiosko Punta Norte",
    "address": "Camino Terraceria el Chanal-la Capacha 202 ., Colima, Col., CP 28610",
    "city": "Colima",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Hot Dogs"
    ],
    "lat": 19.288514,
    "lng": -103.701364
  },
  {
    "id": "19143",
    "name": "Kiosko Madero Cuauhtemoc",
    "address": "Francisco I Madero 98 ., Cuauhtemoc, Col., CP 28500",
    "city": "Cuauhtemoc",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Hot Dogs"
    ],
    "lat": 19.327405,
    "lng": -103.607252
  },
  {
    "id": "19144",
    "name": "Kiosko Glorieta la Bicicleta",
    "address": "Av Ignacio Sandoval 1968 la Cantera, Colima, Col., CP 28018",
    "city": "Colima",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Hot Dogs"
    ],
    "lat": 19.264088,
    "lng": -103.702758
  },
  {
    "id": "19145",
    "name": "Kiosko Agua Marina",
    "address": "Av. Niños Heroes 899 Puerta de Hierro, Villa de Alvarez, Col., CP 28989",
    "city": "Villa de Alvarez",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.260385,
    "lng": -103.761085
  },
  {
    "id": "19146",
    "name": "Kiosko Gas Cruz de Mina",
    "address": "Av. J Merced Cabrera 800 ., Villa de Alvarez, Col., CP 28989",
    "city": "Villa de Alvarez",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 19.273464075,
    "lng": -103.751342682
  },
  {
    "id": "19147",
    "name": "Kiosko Real de Cana",
    "address": "Av. Anikara 32 ., Villa de Alvarez, Col., CP 28978",
    "city": "Villa de Alvarez",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.285971,
    "lng": -103.724876
  },
  {
    "id": "19148",
    "name": "Kiosko Loma de Juarez",
    "address": "Lerdo de Tejada 8 ., Colima, Col., CP 28627",
    "city": "Colima",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 19.192786,
    "lng": -103.749218
  },
  {
    "id": "19149",
    "name": "Kiosko Laurel",
    "address": "Av. Niños Heroes 1373 la Reserva, Villa de Alvarez, Col., CP 28984",
    "city": "Villa de Alvarez",
    "state": "Colima",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 19.267814,
    "lng": -103.775203
  },
  {
    "id": "19150",
    "name": "Kiosko Ocotillo",
    "address": "Emiliano Zapata 2 ., Cuauhtemoc, Col., CP 28530",
    "city": "Cuauhtemoc",
    "state": "Colima",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Hot Dogs"
    ],
    "lat": 19.329963,
    "lng": -103.651415
  },
  {
    "id": "19152",
    "name": "Kiosko Libramiento a Nogueras",
    "address": "Libramiento Nogueras Km 0.5 S/n Lindavista Ii, Villa de Alvarez, Col., CP 28979",
    "city": "Villa de Alvarez",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 19.2922,
    "lng": -103.747346
  },
  {
    "id": "19154",
    "name": "Kiosko Clinica 19",
    "address": "Av. Francisco Javier Mina, Colima, Col., CP 28050",
    "city": "Colima",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.240996,
    "lng": -103.736386
  },
  {
    "id": "19156",
    "name": "Kiosko Natura",
    "address": "Av. Desiderio Contreras Tene, Villa de Alvarez, Col., CP 28989",
    "city": "Villa de Alvarez",
    "state": "Colima",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.278715,
    "lng": -103.757652
  },
  {
    "id": "31001",
    "name": "Kiosko Morelos",
    "address": "Morelos, Puerto Vallarta, Jal., CP 48290",
    "city": "Puerto Vallarta",
    "state": "Jalisco",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 20.6075812,
    "lng": -105.2364223
  },
  {
    "id": "31002",
    "name": "Kiosko Bucerias",
    "address": "Av Heroes de Nacozari Norte, Bahia de Banderas, Nay., CP 63732",
    "city": "Bahia de Banderas",
    "state": "Nayarit",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Hot Dogs"
    ],
    "lat": 20.7580355,
    "lng": -105.3414126
  },
  {
    "id": "31004",
    "name": "Kiosko Gas San Jose",
    "address": "Carret el Porvenir-san Jose del Valle Oriente, Bahia de Banderas, Nay., CP 63735",
    "city": "Bahia de Banderas",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 20.75600086,
    "lng": -105.23546545
  },
  {
    "id": "31005",
    "name": "Kiosko Nuevo Vallarta",
    "address": "Blvd Nuevo Vallarta Oriente, Bahia de Banderas, Nay., CP 63735",
    "city": "Bahia de Banderas",
    "state": "Nayarit",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 20.70993791,
    "lng": -105.2811831
  },
  {
    "id": "31007",
    "name": "Kiosko Mojoneras",
    "address": "Av Mexico, Puerto Vallarta, Jal., CP 48290",
    "city": "Puerto Vallarta",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Hot Dogs"
    ],
    "lat": 20.68956721,
    "lng": -105.2257745
  },
  {
    "id": "31008",
    "name": "Kiosko Manguitos",
    "address": "Carretera Mezcales-san Vicente Poniente, Bahia de Banderas, Nay., CP 63738",
    "city": "Bahia de Banderas",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Hot Dogs"
    ],
    "lat": 20.73750825,
    "lng": -105.2696034
  },
  {
    "id": "31009",
    "name": "Kiosko El Porvenir",
    "address": "Carr a San Jose del Valle Poniente, Bahia de Banderas, Nay., CP 63732",
    "city": "Bahia de Banderas",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 20.75245223,
    "lng": -105.244235
  },
  {
    "id": "31010",
    "name": "Kiosko Los Patos",
    "address": "Av Politecnico, Puerto Vallarta, Jal., CP 48280",
    "city": "Puerto Vallarta",
    "state": "Jalisco",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Hot Dogs"
    ],
    "lat": 20.6636233,
    "lng": -105.231999
  },
  {
    "id": "31011",
    "name": "Kiosko Gas Mezcales",
    "address": "Camino a San Vicente Km 0+300, Bahia de Banderas, Nay., CP 63732",
    "city": "Bahia de Banderas",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 20.7317451,
    "lng": -105.2806811
  },
  {
    "id": "31012",
    "name": "Kiosko Gas Flamingos",
    "address": "Carret Puerto Vallarta-tepic Km 145 Sur, Bahia de Banderas, Nay., CP 63732",
    "city": "Bahia de Banderas",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 20.74869817,
    "lng": -105.31601736
  },
  {
    "id": "31013",
    "name": "Kiosko San Juan",
    "address": "Av 20 de Noviembre Poniente, Bahia de Banderas, Nay., CP 63730",
    "city": "Bahia de Banderas",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 20.8070472,
    "lng": -105.19300826
  },
  {
    "id": "31017",
    "name": "Kiosko Tamarindos",
    "address": "Carretera a Ixtapa, Puerto Vallarta, Jal., CP 48282",
    "city": "Puerto Vallarta",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Hot Dogs"
    ],
    "lat": 20.71401097,
    "lng": -105.21800093
  },
  {
    "id": "31018",
    "name": "Kiosko Gas Centro",
    "address": "Av Mexico, Puerto Vallarta, Jal., CP 48350",
    "city": "Puerto Vallarta",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Hot Dogs"
    ],
    "lat": 20.61874261,
    "lng": -105.2307778
  },
  {
    "id": "31019",
    "name": "Kiosko Etziquio Corona",
    "address": "Etziquio Corona, Puerto Vallarta, Jal., CP 48290",
    "city": "Puerto Vallarta",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Hot Dogs"
    ],
    "lat": 20.66138802,
    "lng": -105.2177301
  },
  {
    "id": "31020",
    "name": "Kiosko Jarretaderas",
    "address": "Av de Ingreso a Jarretaderas, Bahia de Banderas, Nay., CP 63735",
    "city": "Bahia de Banderas",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 20.6957256,
    "lng": -105.2708488
  },
  {
    "id": "31021",
    "name": "Kiosko Federacion",
    "address": "Av Mexico, Puerto Vallarta, Jal., CP 48280",
    "city": "Puerto Vallarta",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 20.70562741,
    "lng": -105.21660932
  },
  {
    "id": "31023",
    "name": "Kiosko Gas Puente Ameca",
    "address": "Carretera Tepic-puerto Vallarta, Puerto Vallarta, Jal., CP 48280",
    "city": "Puerto Vallarta",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 20.69048605,
    "lng": -105.25230948
  },
  {
    "id": "31026",
    "name": "Kiosko San Vicente",
    "address": "Lazaro Cardenas, Bahia de Banderas, Nay., CP 63737",
    "city": "Bahia de Banderas",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 20.74789682,
    "lng": -105.25417298
  },
  {
    "id": "31027",
    "name": "Kiosko Amapas",
    "address": "Francisca Rodriguez, Puerto Vallarta, Jal., CP 48380",
    "city": "Puerto Vallarta",
    "state": "Jalisco",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Hot Dogs"
    ],
    "lat": 20.60108985,
    "lng": -105.23436549
  },
  {
    "id": "31029",
    "name": "Kiosko Poetas",
    "address": "Av de los Poetas, Puerto Vallarta, Jal., CP 48290",
    "city": "Puerto Vallarta",
    "state": "Jalisco",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 20.67037485,
    "lng": -105.21062698
  },
  {
    "id": "31031",
    "name": "Kiosko Gas las Juntas",
    "address": "Carretera Puerto Vallarta-las Palmas, Puerto Vallarta, Jal., CP 48280",
    "city": "Puerto Vallarta",
    "state": "Jalisco",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Hot Dogs"
    ],
    "lat": 20.70302033,
    "lng": -105.23233797
  },
  {
    "id": "31032",
    "name": "Kiosko Francisco Villa",
    "address": "Francisco Villa, Puerto Vallarta, Jal., CP 48310",
    "city": "Puerto Vallarta",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 20.6337515,
    "lng": -105.22539588
  },
  {
    "id": "31033",
    "name": "Kiosko Colombia",
    "address": "San Salvador, Puerto Vallarta, Jal., CP 48350",
    "city": "Puerto Vallarta",
    "state": "Jalisco",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 20.62035507,
    "lng": -105.22962761
  },
  {
    "id": "31035",
    "name": "Kiosko Viena",
    "address": "Viena, Puerto Vallarta, Jal., CP 48310",
    "city": "Puerto Vallarta",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Hot Dogs"
    ],
    "lat": 20.63538405,
    "lng": -105.2260454
  },
  {
    "id": "31037",
    "name": "Kiosko Marina Golf",
    "address": "Av Paseo de la Marina, Puerto Vallarta, Jal., CP 48335",
    "city": "Puerto Vallarta",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 20.66601286,
    "lng": -105.25104218
  },
  {
    "id": "31039",
    "name": "Kiosko Golondrina",
    "address": "Calzada de las Torres, Puerto Vallarta, Jal., CP 48328",
    "city": "Puerto Vallarta",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café",
      "Hot Dogs"
    ],
    "lat": 20.64208134,
    "lng": -105.21530286
  },
  {
    "id": "31041",
    "name": "Kiosko Cruz Huanacaxtle",
    "address": "Coral, Bahia de Banderas, Nay., CP 63734",
    "city": "Bahia de Banderas",
    "state": "Nayarit",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 20.75074601,
    "lng": -105.3835971
  },
  {
    "id": "31044",
    "name": "Kiosko Alemania",
    "address": "16 de Septiembre, Puerto Vallarta, Jal., CP 48290",
    "city": "Puerto Vallarta",
    "state": "Jalisco",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 20.65357598,
    "lng": -105.20255132
  },
  {
    "id": "31045",
    "name": "Kiosko Vallarta 500",
    "address": "Av Prisciliano Sanchez, Puerto Vallarta, Jal., CP 48315",
    "city": "Puerto Vallarta",
    "state": "Jalisco",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 20.65572271,
    "lng": -105.22735769
  },
  {
    "id": "31047",
    "name": "Kiosko Ocampo",
    "address": "Paseo de la Vena, Puerto Vallarta, Jal., CP 48320",
    "city": "Puerto Vallarta",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 20.63108091,
    "lng": -105.2201891
  },
  {
    "id": "31048",
    "name": "Kiosko Misiones",
    "address": "Av San Pedro, Bahia de Banderas, Nay., CP 63737",
    "city": "Bahia de Banderas",
    "state": "Nayarit",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 20.76653281,
    "lng": -105.25491194
  },
  {
    "id": "31049",
    "name": "Kiosko Gas los Picos",
    "address": "Av Playa de los Picos, Bahia de Banderas, Nay., CP 63732",
    "city": "Bahia de Banderas",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 20.76201923,
    "lng": -105.34950933
  },
  {
    "id": "31050",
    "name": "Kiosko Valle Banderas",
    "address": "Miguel Hidalgo, Bahia de Banderas, Nay., CP 63730",
    "city": "Bahia de Banderas",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 20.80549841,
    "lng": -105.24684425
  },
  {
    "id": "31051",
    "name": "Kiosko Sayulita",
    "address": "Gaviotas, Bahia de Banderas, Nay., CP 63732",
    "city": "Bahia de Banderas",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 20.87005819,
    "lng": -105.44030707
  },
  {
    "id": "31052",
    "name": "Kiosko San Pancho",
    "address": "Av del Tercer Mundo, Bahia de Banderas, Nay., CP 63732",
    "city": "Bahia de Banderas",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 20.89944575,
    "lng": -105.41285676
  },
  {
    "id": "31054",
    "name": "Kiosko Aurora",
    "address": "Yelapa, Puerto Vallarta, Jal., CP 48315",
    "city": "Puerto Vallarta",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 20.65933038,
    "lng": -105.23488339
  },
  {
    "id": "31055",
    "name": "Kiosko San Jose Valle",
    "address": "Michoacan, Bahia de Banderas, Nay., CP 63737",
    "city": "Bahia de Banderas",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 20.76205686,
    "lng": -105.22703237
  },
  {
    "id": "31057",
    "name": "Kiosko Valle Dorado",
    "address": "Valle de Bravo, Bahia de Banderas, Nay., CP 63735",
    "city": "Bahia de Banderas",
    "state": "Nayarit",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 20.71560257,
    "lng": -105.27418435
  },
  {
    "id": "31063",
    "name": "Kiosko Guayabitos",
    "address": "Av Sol Nuevo, Compostela, Nay., CP 63724",
    "city": "Compostela",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Hot Dogs"
    ],
    "lat": 21.02593,
    "lng": -105.26569
  },
  {
    "id": "31064",
    "name": "Kiosko Guayabitos Tabachines",
    "address": "Sol Nuevo, Compostela, Nay., CP 63724",
    "city": "Compostela",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 21.022524,
    "lng": -105.270611
  },
  {
    "id": "31065",
    "name": "Kiosko Crucero las Juntas",
    "address": "Revolucion, Puerto Vallarta, Jal., CP 48291",
    "city": "Puerto Vallarta",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 20.695322,
    "lng": -105.241409
  },
  {
    "id": "31068",
    "name": "Kiosko Casa Margarita",
    "address": "Av Sol Nuevo y Tabachines, Compostela, Nay., CP 63724",
    "city": "Compostela",
    "state": "Nayarit",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 21.021213,
    "lng": -105.273532
  },
  {
    "id": "31070",
    "name": "Kiosko Las Palmas",
    "address": "Av las Palmas, Puerto Vallarta, Jal., CP 48333",
    "city": "Puerto Vallarta",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 20.686113,
    "lng": -105.228589
  },
  {
    "id": "31072",
    "name": "Kiosko Los Ayala",
    "address": "Av Bahia de Bandera, Compostela, Nay., CP 63724",
    "city": "Compostela",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 21.024442,
    "lng": -105.285322
  },
  {
    "id": "31073",
    "name": "Kiosko Lienzo Piruli",
    "address": "Victor Iturbe, Puerto Vallarta, Jal., CP 48290",
    "city": "Puerto Vallarta",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 20.66562,
    "lng": -105.195522
  },
  {
    "id": "31074",
    "name": "Kiosko Ixtapa Orquidea",
    "address": "Carretera las Palmas, Puerto Vallarta, Jal., CP 48280",
    "city": "Puerto Vallarta",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 20.720714,
    "lng": -105.197639
  },
  {
    "id": "31079",
    "name": "Kiosko Exiquio Revolucion",
    "address": "Exiquio Corona, Puerto Vallarta, Jal., CP 48290",
    "city": "Puerto Vallarta",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 20.655141,
    "lng": -105.22026
  },
  {
    "id": "31080",
    "name": "Kiosko Gas la Peñita",
    "address": "Carr Tepic-puerto Vallarta, Compostela, Nay., CP 63720",
    "city": "Compostela",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 21.055225,
    "lng": -105.235492
  },
  {
    "id": "31081",
    "name": "Kiosko Azul Turquesa",
    "address": "Carretera a San Juan de Abajo, Bahia de Banderas, Nay., CP 63737",
    "city": "Bahia de Banderas",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 20.77429962,
    "lng": -105.21074205
  },
  {
    "id": "31082",
    "name": "Kiosko Gas San Vicente",
    "address": "Francisco Villa, Bahia de Banderas, Nay., CP 63737",
    "city": "Bahia de Banderas",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 20.75096,
    "lng": -105.24698
  },
  {
    "id": "31086",
    "name": "Kiosko Tulipanes",
    "address": "Amoena, Bahia de Banderas, Nay., CP 63737",
    "city": "Bahia de Banderas",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 20.772535,
    "lng": -105.223841
  },
  {
    "id": "31089",
    "name": "Kiosko Gas Indios Banderas",
    "address": "Michoacan, Bahia de Banderas, Nay., CP 63737",
    "city": "Bahia de Banderas",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 20.76626921,
    "lng": -105.22250481
  },
  {
    "id": "31090",
    "name": "Kiosko Reforma San Vicente",
    "address": "Reforma, Bahia de Banderas, Nay., CP 63737",
    "city": "Bahia de Banderas",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 20.744934,
    "lng": -105.249
  },
  {
    "id": "31091",
    "name": "Kiosko De Noviembre",
    "address": "20 de Noviembre, Bahia de Banderas, Nay., CP 63730",
    "city": "Bahia de Banderas",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 20.815432,
    "lng": -105.188243
  },
  {
    "id": "31092",
    "name": "Kiosko Tamaulipas",
    "address": "Av Tamaulipas, Puerto Vallarta, Jal., CP 48290",
    "city": "Puerto Vallarta",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 20.689226,
    "lng": -105.220396
  },
  {
    "id": "31094",
    "name": "Kiosko Hidalgo",
    "address": "Calle Miguel Hidalgo, Bahia de Banderas, Nay., CP 63737",
    "city": "Bahia de Banderas",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Hot Dogs"
    ],
    "lat": 20.75105,
    "lng": -105.25317
  },
  {
    "id": "31101",
    "name": "Kiosko Mexico",
    "address": "Mexico, Bahia de Banderas, Nay., CP 63732",
    "city": "Bahia de Banderas",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café",
      "Hot Dogs"
    ],
    "lat": 20.756876,
    "lng": -105.340433
  },
  {
    "id": "31102",
    "name": "Kiosko Lo de Marcos",
    "address": "Carr Federal 200 Tepic-vallarta, Bahia de Banderas, Nay., CP 63729",
    "city": "Bahia de Banderas",
    "state": "Nayarit",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 20.95081013,
    "lng": -105.34940638
  },
  {
    "id": "31103",
    "name": "Kiosko La Peñita",
    "address": "Bahia de Acapulco, Compostela, Nay., CP 63700",
    "city": "Compostela",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 21.039532,
    "lng": -105.248118
  },
  {
    "id": "31104",
    "name": "Kiosko Revolucion Sayulita",
    "address": "Av Revolucion, Bahia de Banderas, Nay., CP 63734",
    "city": "Bahia de Banderas",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 20.867142,
    "lng": -105.441764
  },
  {
    "id": "31107",
    "name": "Kiosko Bucerias Nicolas Bravo",
    "address": "Nicolas Bravo, Bahia de Banderas, Nay., CP 63732",
    "city": "Bahia de Banderas",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Hot Dogs"
    ],
    "lat": 20.757397,
    "lng": -105.33791
  },
  {
    "id": "31108",
    "name": "Kiosko Zacualpan Nayarit",
    "address": "Alvaro Obregon, Compostela, Nay., CP 63710",
    "city": "Compostela",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 21.245011,
    "lng": -105.164414
  },
  {
    "id": "31110",
    "name": "Kiosko Las Varas",
    "address": "Av Revolucion, Compostela, Nay., CP 63715",
    "city": "Compostela",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Hot Dogs"
    ],
    "lat": 21.182364,
    "lng": -105.139734
  },
  {
    "id": "31111",
    "name": "Kiosko Independencia",
    "address": "Melchor Muzquiz, Puerto Vallarta, Jal., CP 48327",
    "city": "Puerto Vallarta",
    "state": "Jalisco",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Hot Dogs"
    ],
    "lat": 20.644409,
    "lng": -105.202477
  },
  {
    "id": "31112",
    "name": "Kiosko Mar Caribe",
    "address": "Mar Caribe, Bahia de Banderas, Nay., CP 63735",
    "city": "Bahia de Banderas",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Hot Dogs"
    ],
    "lat": 20.746282,
    "lng": -105.27476
  },
  {
    "id": "31113",
    "name": "Kiosko Manantial",
    "address": "Av Manantial, Puerto Vallarta, Jal., CP 48370",
    "city": "Puerto Vallarta",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Hot Dogs"
    ],
    "lat": 20.600411,
    "lng": -105.223446
  },
  {
    "id": "31114",
    "name": "Kiosko Valle Esmeralda",
    "address": "Av San Pablo, Bahia de Banderas, Nay., CP 63737",
    "city": "Bahia de Banderas",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 20.770746,
    "lng": -105.258079
  },
  {
    "id": "31115",
    "name": "Kiosko Letras Vallarta",
    "address": "Carretera a Tepic, Puerto Vallarta, Jal., CP 48291",
    "city": "Puerto Vallarta",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 20.694412,
    "lng": -105.240708
  },
  {
    "id": "31116",
    "name": "Kiosko De Mayo",
    "address": "Calle Ecuador, Puerto Vallarta, Jal., CP 48290",
    "city": "Puerto Vallarta",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 20.656291,
    "lng": -105.208576
  },
  {
    "id": "31120",
    "name": "Kiosko Las Piedras",
    "address": "Carretera a Tepic, Puerto Vallarta, Jal., CP 48291",
    "city": "Puerto Vallarta",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 20.696454,
    "lng": -105.23731
  },
  {
    "id": "31124",
    "name": "Kiosko Golfo de Mexico",
    "address": "Av Golfo de Mexico, Bahia de Banderas, Nay., CP 63735",
    "city": "Bahia de Banderas",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café",
      "Hot Dogs"
    ],
    "lat": 20.7452778,
    "lng": -105.2722139
  },
  {
    "id": "31125",
    "name": "Kiosko Punta Mita",
    "address": "Carretera Punta Mita-cruz de Huanacaxtle, Bahia de Banderas, Nay., CP 63734",
    "city": "Bahia de Banderas",
    "state": "Nayarit",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 20.7742389,
    "lng": -105.5195972
  },
  {
    "id": "31127",
    "name": "Kiosko Ecoterra",
    "address": "Carretera Mascota-puerto Vallarta, Puerto Vallarta, Jal., CP 48300",
    "city": "Puerto Vallarta",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 20.74742,
    "lng": -105.15803
  },
  {
    "id": "31128",
    "name": "Kiosko Bugambilias",
    "address": "Orquidea, Puerto Vallarta, Jal., CP 48340",
    "city": "Puerto Vallarta",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 20.62382,
    "lng": -105.21498
  },
  {
    "id": "31129",
    "name": "Kiosko Sendero de Luna",
    "address": "Universidad del Valle de Atemajac, Puerto Vallarta, Jal., CP 48290",
    "city": "Puerto Vallarta",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 20.67835,
    "lng": -105.22136
  },
  {
    "id": "31131",
    "name": "Kiosko Ingreso Sayulita",
    "address": "Cerr Punta de Mita-sayulita, No.8, Bahia de Banderas, Nay., CP 63731",
    "city": "Bahia de Banderas",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 20.862489,
    "lng": -105.429414
  },
  {
    "id": "31132",
    "name": "Kiosko Crucero Chacala",
    "address": "Carret. Tepic-puerto Vallata Km 73, Compostela, Nay., CP 63715",
    "city": "Compostela",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 21.167003,
    "lng": -105.154218
  },
  {
    "id": "31135",
    "name": "Kiosko Galeana",
    "address": "Centro Tomatlan, Tomatlan, Jal., CP 48450",
    "city": "Tomatlan",
    "state": "Jalisco",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Hot Dogs"
    ],
    "lat": 19.939729,
    "lng": -105.250018
  },
  {
    "id": "31136",
    "name": "Kiosko Pino Suarez",
    "address": "Manzanillo - Puerto Vallarta, Tomatlan, Jal., CP 48495",
    "city": "Tomatlan",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 19.948198,
    "lng": -105.327312
  },
  {
    "id": "31137",
    "name": "Kiosko Isla Mallorca",
    "address": "Isla Mallorca, Bahia de Banderas, Nay., CP 63735",
    "city": "Bahia de Banderas",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Hot Dogs"
    ],
    "lat": 20.749061,
    "lng": -105.283286
  },
  {
    "id": "31140",
    "name": "Kiosko Delfin",
    "address": "Av Independencia, La Huerta, Jal., CP 48869",
    "city": "La Huerta",
    "state": "Jalisco",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Hot Dogs"
    ],
    "lat": 19.589125,
    "lng": -105.127592
  },
  {
    "id": "31145",
    "name": "Kiosko Arboledas",
    "address": "Av. Arboledas, Puerto Vallarta, Jal., CP 48298",
    "city": "Puerto Vallarta",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 20.65725,
    "lng": -105.22388
  },
  {
    "id": "31147",
    "name": "Kiosko Juarez Ixtapa",
    "address": "Juarez, Puerto Vallarta, Jal., CP 48280",
    "city": "Puerto Vallarta",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café",
      "Hot Dogs"
    ],
    "lat": 20.714089,
    "lng": -105.20531
  },
  {
    "id": "31148",
    "name": "Kiosko Costa Careyes",
    "address": "Av. Ecoterra, Puerto Vallarta, Jal., CP 48280",
    "city": "Puerto Vallarta",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 20.749822,
    "lng": -105.161392
  },
  {
    "id": "31150",
    "name": "Kiosko Campo Verde",
    "address": "Av. Guadalajara, Puerto Vallarta, Jal., CP 48290",
    "city": "Puerto Vallarta",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 20.689422,
    "lng": -105.21485
  },
  {
    "id": "31151",
    "name": "Kiosko Verde Vallarta",
    "address": "Av. Verde Vallarta, Puerto Vallarta, Jal., CP 48280",
    "city": "Puerto Vallarta",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 20.712203,
    "lng": -105.232218
  },
  {
    "id": "31152",
    "name": "Kiosko Real Ixtapa",
    "address": "Paseo de las Industrias, Puerto Vallarta, Jal., CP 48280",
    "city": "Puerto Vallarta",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Hot Dogs"
    ],
    "lat": 20.718092,
    "lng": -105.222149
  },
  {
    "id": "31155",
    "name": "Kiosko Valle el Jade",
    "address": "Av. Valle Esmeralda, Bahia de Banderas, Nay., CP 63737",
    "city": "Bahia de Banderas",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 20.775028,
    "lng": -105.258983
  },
  {
    "id": "31156",
    "name": "Kiosko La Desembocada",
    "address": "Rio Mascota, Puerto Vallarta, Jal., CP 48280",
    "city": "Puerto Vallarta",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Hot Dogs"
    ],
    "lat": 20.728395,
    "lng": -105.159335
  },
  {
    "id": "31157",
    "name": "Kiosko Leona Vicario",
    "address": "Circunvalacion, Puerto Vallarta, Jal., CP 48260",
    "city": "Puerto Vallarta",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 20.820167,
    "lng": -105.095631
  },
  {
    "id": "31159",
    "name": "Kiosko Los Venados",
    "address": "Carretera Ameca-mascota, Mascota, Jal., CP 46900",
    "city": "Mascota",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 20.523069,
    "lng": -104.779526
  },
  {
    "id": "31160",
    "name": "Kiosko Talpa Independencia",
    "address": "Independencia, Talpa de Allende, Jal., CP 48200",
    "city": "Talpa de Allende",
    "state": "Jalisco",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 20.387196,
    "lng": -104.823628
  },
  {
    "id": "31161",
    "name": "Kiosko Lopez Cotilla",
    "address": "Lopez Cotilla, Mascota, Jal., CP 46900",
    "city": "Mascota",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Hot Dogs"
    ],
    "lat": 20.53268,
    "lng": -104.79783
  },
  {
    "id": "31162",
    "name": "Kiosko Av Coral",
    "address": "Av. Coral, Compostela, Nay., CP 63724",
    "city": "Compostela",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Hot Dogs"
    ],
    "lat": 21.0246,
    "lng": -105.287384
  },
  {
    "id": "31163",
    "name": "Kiosko Avenida Mexico",
    "address": "Av. Mexico, Puerto Vallarta, Jal., CP 48290",
    "city": "Puerto Vallarta",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 20.669345,
    "lng": -105.22637
  },
  {
    "id": "31164",
    "name": "Kiosko Lomas del Coapinole",
    "address": "Alemania, Puerto Vallarta, Jal., CP 48290",
    "city": "Puerto Vallarta",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 20.657929,
    "lng": -105.200814
  },
  {
    "id": "31165",
    "name": "Kiosko Crucero San Pancho",
    "address": "Carretera Federal 200, Bahia de Banderas, Nay., CP 63729",
    "city": "Bahia de Banderas",
    "state": "Nayarit",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 20.894424,
    "lng": -105.406758
  },
  {
    "id": "31166",
    "name": "Kiosko Josefa Ortiz",
    "address": "Josefa Ortiz de Dominguez, Bahia de Banderas, Nay., CP 63735",
    "city": "Bahia de Banderas",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 20.726948,
    "lng": -105.283662
  },
  {
    "id": "31168",
    "name": "Kiosko Mar de Japon",
    "address": "Cerrada de Proa, Bahia de Banderas, Nay., CP 63735",
    "city": "Bahia de Banderas",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Hot Dogs"
    ],
    "lat": 20.751481,
    "lng": -105.272433
  },
  {
    "id": "31169",
    "name": "Kiosko Las Carboneras",
    "address": "Av. la Carbonera, Puerto Vallarta, Jal., CP 48344",
    "city": "Puerto Vallarta",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 20.672087,
    "lng": -105.186081
  },
  {
    "id": "31170",
    "name": "Kiosko Talpa 23 de Junio",
    "address": "23 de Junio, Talpa de Allende, Jal., CP 48200",
    "city": "Talpa de Allende",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 20.382442,
    "lng": -104.824863
  },
  {
    "id": "31171",
    "name": "Kiosko Tlaxcala",
    "address": "Av. Valle de Tlaxcala, Bahia de Banderas, Nay., CP 63735",
    "city": "Bahia de Banderas",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 20.725817,
    "lng": -105.268021
  },
  {
    "id": "31172",
    "name": "Kiosko Gas Talpa",
    "address": "Prol. 23 de Junio, Talpa de Allende, Jal., CP 48200",
    "city": "Talpa de Allende",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 20.364465,
    "lng": -104.819786
  },
  {
    "id": "31173",
    "name": "Kiosko De Mayo",
    "address": "Blvd. Lopez Mateos, Compostela, Nay., CP 63715",
    "city": "Compostela",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 21.182885,
    "lng": -105.130442
  },
  {
    "id": "31174",
    "name": "Kiosko Mina",
    "address": "Benito Juarez, Puerto Vallarta, Jal., CP 48300",
    "city": "Puerto Vallarta",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café",
      "Hot Dogs"
    ],
    "lat": 20.609306,
    "lng": -105.234547
  },
  {
    "id": "31177",
    "name": "Kiosko Crucero la Cumbre",
    "address": "Carretera Federal 200 Melaque-puerto Vallarta, Tomatlan, Jal., CP 48481",
    "city": "Tomatlan",
    "state": "Jalisco",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 19.873564,
    "lng": -105.333095
  },
  {
    "id": "31178",
    "name": "Kiosko Joaquin Amaro",
    "address": "Aquiles Serdan, Puerto Vallarta, Jal., CP 48291",
    "city": "Puerto Vallarta",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Hot Dogs"
    ],
    "lat": 20.697329,
    "lng": -105.246851
  },
  {
    "id": "31179",
    "name": "Kiosko De Septiembre",
    "address": "16 de Septiembre, Puerto Vallarta, Jal., CP 48290",
    "city": "Puerto Vallarta",
    "state": "Jalisco",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 20.672247,
    "lng": -105.20613
  },
  {
    "id": "31180",
    "name": "Kiosko San Mateo",
    "address": "Carretera Puerto Vallarta-manzanillo Km. 70, La Huerta, Jal., CP 48869",
    "city": "La Huerta",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 19.574985,
    "lng": -105.086418
  },
  {
    "id": "31181",
    "name": "Kiosko Valle de Zircon",
    "address": "Av. Valle Esmeralda, Bahia de Banderas, Nay., CP 63737",
    "city": "Bahia de Banderas",
    "state": "Nayarit",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 20.776546,
    "lng": -105.266104
  },
  {
    "id": "31182",
    "name": "Kiosko Paraiso",
    "address": "Avenida Quetzal, Bahia de Banderas, Nay., CP 63735",
    "city": "Bahia de Banderas",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 20.756224,
    "lng": -105.274124
  },
  {
    "id": "31183",
    "name": "Kiosko Ramon Corona",
    "address": "Ramon Corona, Puerto Vallarta, Jal., CP 48290",
    "city": "Puerto Vallarta",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 20.661091,
    "lng": -105.194426
  },
  {
    "id": "31185",
    "name": "Kiosko Fluvial",
    "address": "Av. Fluvial Vallarta, No. 250, Puerto Vallarta, Jal., CP 48312",
    "city": "Puerto Vallarta",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 20.642469,
    "lng": -105.229591
  },
  {
    "id": "31186",
    "name": "Kiosko Av Oceano Pacifico",
    "address": "Av Oceano Pacifico Norte, Compostela, Nay., CP 63720",
    "city": "Compostela",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 21.040368,
    "lng": -105.245989
  },
  {
    "id": "41001",
    "name": "Kiosko Progreso",
    "address": "Av Genaro Estrada, Mazatlan, Sin., CP 82139",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 23.27196413,
    "lng": -106.3741135
  },
  {
    "id": "41002",
    "name": "Kiosko Las Mañanitas",
    "address": "Av Munich, Mazatlan, Sin., CP 82139",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Hot Dogs"
    ],
    "lat": 23.26588957,
    "lng": -106.38936622
  },
  {
    "id": "41003",
    "name": "Kiosko Libertad Expresion",
    "address": "Alfonso G Calderon, Mazatlan, Sin., CP 82127",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 23.25873704,
    "lng": -106.4381111
  },
  {
    "id": "41004",
    "name": "Kiosko El Walamo",
    "address": "Olas Altas, Mazatlan, Sin., CP 82139",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 23.26680631,
    "lng": -106.38256916
  },
  {
    "id": "41005",
    "name": "Kiosko Acuario",
    "address": "Av de los Deportes, Mazatlan, Sin., CP 82017",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 23.22767551,
    "lng": -106.42837804
  },
  {
    "id": "41006",
    "name": "Kiosko Real del Valle",
    "address": "Av Paseo del Atlantico, Mazatlan, Sin., CP 82133",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Hot Dogs"
    ],
    "lat": 23.28243196,
    "lng": -106.43105041
  },
  {
    "id": "41007",
    "name": "Kiosko Circunvalacion",
    "address": "Av Eje Circunvalacion Playas, Mazatlan, Sin., CP 82120",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 23.25172566,
    "lng": -106.43734265
  },
  {
    "id": "41009",
    "name": "Kiosko Libramiento 3",
    "address": "Av Libramiento Iii, Mazatlan, Sin., CP 82134",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 23.27595427,
    "lng": -106.40330239
  },
  {
    "id": "41010",
    "name": "Kiosko La Joya",
    "address": "Av de las Torres, Mazatlan, Sin., CP 82124",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 23.26289572,
    "lng": -106.4185026
  },
  {
    "id": "41011",
    "name": "Kiosko Oscar Perez",
    "address": "Av Oscar Perez Escoboza, Mazatlan, Sin., CP 82134",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café",
      "Hot Dogs"
    ],
    "lat": 23.27239159,
    "lng": -106.40934792
  },
  {
    "id": "41012",
    "name": "Kiosko Santa Rosa",
    "address": "Av Circunvalacion Ffcc, Mazatlan, Sin., CP 82158",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Hot Dogs"
    ],
    "lat": 23.24881405,
    "lng": -106.41503599
  },
  {
    "id": "41013",
    "name": "Kiosko Doña Chonita",
    "address": "Av Genaro Estrada, Mazatlan, Sin., CP 82199",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 23.26160344,
    "lng": -106.3689344
  },
  {
    "id": "41014",
    "name": "Kiosko Jabalies",
    "address": "Andador Colina, Mazatlan, Sin., CP 82132",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Hot Dogs"
    ],
    "lat": 23.265486,
    "lng": -106.408731
  },
  {
    "id": "41015",
    "name": "Kiosko Alfredo Bonfil",
    "address": "Av Puerto de Veracruz, Mazatlan, Sin., CP 82050",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 23.21534983,
    "lng": -106.40138424
  },
  {
    "id": "41016",
    "name": "Kiosko Las Americas",
    "address": "Av de las Americas, Mazatlan, Sin., CP 82180",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Hot Dogs"
    ],
    "lat": 23.23563362,
    "lng": -106.4017859
  },
  {
    "id": "41017",
    "name": "Kiosko El Cid",
    "address": "Av de la Marina, Mazatlan, Sin., CP 82127",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 23.258425,
    "lng": -106.44185833
  },
  {
    "id": "41018",
    "name": "Kiosko Gabriel Leyva",
    "address": "Av Gabriel Leyva Solano, Mazatlan, Sin., CP 82038",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 23.21279477,
    "lng": -106.4072497
  },
  {
    "id": "41019",
    "name": "Kiosko Insurgentes Mazatlan",
    "address": "Av Insurgentes, Mazatlan, Sin., CP 82140",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 23.23915528,
    "lng": -106.4315402
  },
  {
    "id": "41020",
    "name": "Kiosko Camaron Sabalo",
    "address": "Calzada Camaron Sabalo, Mazatlan, Sin., CP 82110",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Hot Dogs"
    ],
    "lat": 23.24783569,
    "lng": -106.45412402
  },
  {
    "id": "41021",
    "name": "Kiosko Rio Chachalacas",
    "address": "Av Ejercito Mexicano, Mazatlan, Sin., CP 82016",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 23.22814885,
    "lng": -106.4216041
  },
  {
    "id": "41022",
    "name": "Kiosko Del Delfin",
    "address": "1ero de Mayo, Mazatlan, Sin., CP 82127",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 23.25568664,
    "lng": -106.42397376
  },
  {
    "id": "41024",
    "name": "Kiosko Jacarandas",
    "address": "Av Jacarandas, Mazatlan, Sin., CP 82139",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 23.26046534,
    "lng": -106.381887
  },
  {
    "id": "41025",
    "name": "Kiosko Flores Magon",
    "address": "Av Gardenia, Mazatlan, Sin., CP 82190",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 23.24537844,
    "lng": -106.38669272
  },
  {
    "id": "41026",
    "name": "Kiosko San Guillermo",
    "address": "San Guillermo, Mazatlan, Sin., CP 82124",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 23.27569912,
    "lng": -106.42732622
  },
  {
    "id": "41028",
    "name": "Kiosko Villa Galaxia",
    "address": "Sagitario, Mazatlan, Sin., CP 82150",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Hot Dogs"
    ],
    "lat": 23.24212437,
    "lng": -106.41145841
  },
  {
    "id": "41029",
    "name": "Kiosko Gasmaz",
    "address": "Carret Internacional, Mazatlan, Sin., CP 82190",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 23.23230401,
    "lng": -106.3902173
  },
  {
    "id": "41030",
    "name": "Kiosko Gas la Sirena",
    "address": "Carretera Internacional, Mazatlan, Sin., CP 82070",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 23.20870727,
    "lng": -106.3659825
  },
  {
    "id": "41031",
    "name": "Kiosko Central Mazatlan",
    "address": "Benemerito de las Americas, Mazatlan, Sin., CP 82010",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 23.22550735,
    "lng": -106.42099996
  },
  {
    "id": "41033",
    "name": "Kiosko El Marino",
    "address": "Calzada Pedro Infante, Mazatlan, Sin., CP 82188",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 23.230285,
    "lng": -106.396249
  },
  {
    "id": "41034",
    "name": "Kiosko Munich",
    "address": "Munich, Mazatlan, Sin., CP 82136",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Hot Dogs"
    ],
    "lat": 23.260533,
    "lng": -106.395968
  },
  {
    "id": "41035",
    "name": "Kiosko Cerritos",
    "address": "Av Sabalo Cerritos, Mazatlan, Sin., CP 82148",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 23.285829,
    "lng": -106.470724
  },
  {
    "id": "41036",
    "name": "Kiosko Gasmaz Colosio",
    "address": "Av Luis Donaldo Colosio, Mazatlan, Sin., CP 82190",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 23.232375,
    "lng": -106.389344
  },
  {
    "id": "41037",
    "name": "Kiosko Zona Dorada",
    "address": "Camaron Sabalo, Mazatlan, Sin., CP 82110",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 23.243383,
    "lng": -106.449878
  },
  {
    "id": "41038",
    "name": "Kiosko Paseo Claussen",
    "address": "Av Mexico, Mazatlan, Sin., CP 82000",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 23.208545,
    "lng": -106.422845
  },
  {
    "id": "41039",
    "name": "Kiosko Malecon Mazatlan",
    "address": "Av del Mar, Mazatlan, Sin., CP 82010",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 23.22158055,
    "lng": -106.4235889
  },
  {
    "id": "41041",
    "name": "Kiosko Bicentenario",
    "address": "Av Bicentenario Juarez, Mazatlan, Sin., CP 82127",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 23.256015,
    "lng": -106.430456
  },
  {
    "id": "41042",
    "name": "Kiosko Alameda",
    "address": "Av de la Marina, Mazatlan, Sin., CP 82120",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 23.243585,
    "lng": -106.434525
  },
  {
    "id": "41043",
    "name": "Kiosko Juarez",
    "address": "Av Insurgentes, Mazatlan, Sin., CP 82180",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 23.232902,
    "lng": -106.407471
  },
  {
    "id": "41044",
    "name": "Kiosko Pradera Dorada",
    "address": "Av Rio Panuco, Mazatlan, Sin., CP 82139",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 23.274155,
    "lng": -106.367214
  },
  {
    "id": "41045",
    "name": "Kiosko Rafael Buelna",
    "address": "Calzada Rafael Buelna, Mazatlan, Sin., CP 82127",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 23.248155,
    "lng": -106.429175
  },
  {
    "id": "41046",
    "name": "Kiosko Laureles",
    "address": "Av Oscar Perez Escoboza, Mazatlan, Sin., CP 82139",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 23.254383,
    "lng": -106.390404
  },
  {
    "id": "41047",
    "name": "Kiosko Sabalo Country",
    "address": "Av del Tiburon, Mazatlan, Sin., CP 82100",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 23.259118,
    "lng": -106.459343
  },
  {
    "id": "41048",
    "name": "Kiosko Prados del Sol",
    "address": "Av Prados del Sol, Mazatlan, Sin., CP 82124",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Hot Dogs"
    ],
    "lat": 23.262083,
    "lng": -106.422899
  },
  {
    "id": "41049",
    "name": "Kiosko City Express",
    "address": "Av Rafael Buelna, Mazatlan, Sin., CP 82120",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 23.246695,
    "lng": -106.438527
  },
  {
    "id": "41050",
    "name": "Kiosko Cerritos Playa",
    "address": "Av Sabalo Cerritos, Mazatlan, Sin., CP 82148",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 23.29746,
    "lng": -106.480029
  },
  {
    "id": "41051",
    "name": "Kiosko Santa Fe",
    "address": "Av Pasadena, Mazatlan, Sin., CP 82150",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 23.18918,
    "lng": -106.33119
  },
  {
    "id": "41052",
    "name": "Kiosko Valle de Urias",
    "address": "Lazaro Cardenas, Mazatlan, Sin., CP 82090",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 23.22897259,
    "lng": -106.37516494
  },
  {
    "id": "41053",
    "name": "Kiosko Zaragoza",
    "address": "Av Zaragoza, Mazatlan, Sin., CP 82000",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 23.207203,
    "lng": -106.411308
  },
  {
    "id": "41054",
    "name": "Kiosko Madero Villa Union",
    "address": "Francisco I Madero, Mazatlan, Sin., CP 82210",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Hot Dogs"
    ],
    "lat": 23.193589,
    "lng": -106.214504
  },
  {
    "id": "41056",
    "name": "Kiosko Real Pacifico",
    "address": "Artico, Mazatlan, Sin., CP 82124",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 23.275087,
    "lng": -106.434024
  },
  {
    "id": "41057",
    "name": "Kiosko Miguel Aleman",
    "address": "Av Miguel Aleman, Mazatlan, Sin., CP 82000",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café",
      "Hot Dogs"
    ],
    "lat": 23.19574,
    "lng": -106.42204
  },
  {
    "id": "41058",
    "name": "Kiosko Valles del Ejido",
    "address": "Av Francisco I Madero, Mazatlan, Sin., CP 82134",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Hot Dogs"
    ],
    "lat": 23.282178,
    "lng": -106.397396
  },
  {
    "id": "41060",
    "name": "Kiosko Monte Ribereño",
    "address": "Av Santa Rosa, Mazatlan, Sin., CP 82139",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 23.281795,
    "lng": -106.379705
  },
  {
    "id": "41061",
    "name": "Kiosko San Francisco",
    "address": "De los Dominicos, Mazatlan, Sin., CP 82134",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 23.286704,
    "lng": -106.397446
  },
  {
    "id": "41062",
    "name": "Kiosko Urbivillas",
    "address": "Av de los Reyes, Mazatlan, Sin., CP 82090",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 23.224381,
    "lng": -106.37174
  },
  {
    "id": "41063",
    "name": "Kiosko Puente Rio Presidio",
    "address": "Carr Internacional Al Sur, Mazatlan, Sin., CP 82210",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 23.18988,
    "lng": -106.221586
  },
  {
    "id": "41064",
    "name": "Kiosko Universo",
    "address": "Av Dorado, Mazatlan, Sin., CP 82195",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 23.244197,
    "lng": -106.368235
  },
  {
    "id": "41065",
    "name": "Kiosko Paseo Olas Altas",
    "address": "Olas Altas, Mazatlan, Sin., CP 82000",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 23.198139,
    "lng": -106.426963
  },
  {
    "id": "41066",
    "name": "Kiosko Azalea",
    "address": "Av Azalea, Mazatlan, Sin., CP 82190",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 23.245561,
    "lng": -106.381521
  },
  {
    "id": "41067",
    "name": "Kiosko Jaripillo",
    "address": "Av Santa Rosa, Mazatlan, Sin., CP 82136",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 23.264829,
    "lng": -106.401614
  },
  {
    "id": "41068",
    "name": "Kiosko Gas Cardones",
    "address": "Carr Maxipista Mazatlan-culiacan, Mazatlan, Sin., CP 82270",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café",
      "Hot Dogs"
    ],
    "lat": 23.3622,
    "lng": -106.478856
  },
  {
    "id": "41069",
    "name": "Kiosko Gas Habal",
    "address": "Carret Internacional Al Norte, Mazatlan, Sin., CP 82270",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café",
      "Hot Dogs"
    ],
    "lat": 23.351284,
    "lng": -106.413253
  },
  {
    "id": "41070",
    "name": "Kiosko Gas Cerritos",
    "address": "Av Sabalo-cerritos, Mazatlan, Sin., CP 82148",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 23.299391,
    "lng": -106.480679
  },
  {
    "id": "41072",
    "name": "Kiosko Real del Valle 2",
    "address": "Av de las Torres, Mazatlan, Sin., CP 82124",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 23.286593,
    "lng": -106.432187
  },
  {
    "id": "41073",
    "name": "Kiosko Flor de Mayo",
    "address": "Carr Mazatlan-durango, Mazatlan, Sin., CP 82214",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 23.195713,
    "lng": -106.208025
  },
  {
    "id": "41074",
    "name": "Kiosko Rio Tonala",
    "address": "Rio Madeira, Mazatlan, Sin., CP 82139",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 23.27328,
    "lng": -106.363024
  },
  {
    "id": "41075",
    "name": "Kiosko Monte Verde",
    "address": "Calle Madagascar, Mazatlan, Sin., CP 82134",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 23.29607,
    "lng": -106.383995
  },
  {
    "id": "41076",
    "name": "Kiosko Internacional",
    "address": "Carr Internacional del Norte, Mazatlan, Sin., CP 82129",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 23.285102,
    "lng": -106.409746
  },
  {
    "id": "41077",
    "name": "Kiosko Pino Suarez",
    "address": "Av Pino Suarez, Mazatlan, Sin., CP 82060",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 23.225194,
    "lng": -106.393189
  },
  {
    "id": "41078",
    "name": "Kiosko Estadio",
    "address": "Av Munich, Mazatlan, Sin., CP 82139",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 23.273826,
    "lng": -106.380693
  },
  {
    "id": "41079",
    "name": "Kiosko Lomas de Mazatlan",
    "address": "Blvd del Sabalo, Mazatlan, Sin., CP 8210",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 23.25847,
    "lng": -106.461747
  },
  {
    "id": "41080",
    "name": "Kiosko Olimpica",
    "address": "Heraclio Bernal, Mazatlan, Sin., CP 82150",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 23.234435,
    "lng": -106.410618
  },
  {
    "id": "41081",
    "name": "Kiosko Paseo del Pacifico",
    "address": "Av. Jose Luis Peche Rice Garcia, Mazatlan, Sin., CP 82129",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 23.28285261,
    "lng": -106.44524147
  },
  {
    "id": "41083",
    "name": "Kiosko Hacienda del Seminario",
    "address": "Blvd Hacienda del Seminario, Mazatlan, Sin., CP 82129",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Hot Dogs"
    ],
    "lat": 23.287521,
    "lng": -106.4222
  },
  {
    "id": "41085",
    "name": "Kiosko Gas Urias",
    "address": "Carretera Internacional Al Sur, Mazatlan, Sin., CP 82099",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 23.217456,
    "lng": -106.375195
  },
  {
    "id": "41086",
    "name": "Kiosko Juarez Internacional",
    "address": "Privada de la Bateria, Mazatlan, Sin., CP 82180",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 23.229088,
    "lng": -106.402445
  },
  {
    "id": "41087",
    "name": "Kiosko Villas del Sol",
    "address": "Av. de la Luna, Mazatlan, Sin., CP 82198",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 23.255752,
    "lng": -106.371224
  },
  {
    "id": "41088",
    "name": "Kiosko Valle Bonito",
    "address": "Calle Valle Dorado, Mazatlan, Sin., CP 82136",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Hot Dogs"
    ],
    "lat": 23.273183,
    "lng": -106.388548
  },
  {
    "id": "41089",
    "name": "Kiosko Santa Teresa",
    "address": "Av de los Reyes, Mazatlan, Sin., CP 82090",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 23.230294,
    "lng": -106.369076
  },
  {
    "id": "41090",
    "name": "Kiosko Hogar del Pescador",
    "address": "Cooperativa 21 de Agosto, Mazatlan, Sin., CP 82134",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 23.27539,
    "lng": -106.407877
  },
  {
    "id": "41091",
    "name": "Kiosko Salvador Allende",
    "address": "Fidel Velazquez, Mazatlan, Sin., CP 82164",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Hot Dogs"
    ],
    "lat": 23.2479,
    "lng": -106.40426
  },
  {
    "id": "41092",
    "name": "Kiosko De Noviembre",
    "address": "Salvador Robles Quintero, Mazatlan, Sin., CP 82170",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 23.24524,
    "lng": -106.40822
  },
  {
    "id": "41093",
    "name": "Kiosko Lopez Portillo",
    "address": "Jose Lopez Portillo, Rosario, Sin., CP 82802",
    "city": "Rosario",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 22.99582,
    "lng": -105.86035
  },
  {
    "id": "41094",
    "name": "Kiosko Solidaridad",
    "address": "Jose Maria Morelos y Pavon, Escuinapa, Sin., CP 82457",
    "city": "Escuinapa",
    "state": "Sinaloa",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 22.821306,
    "lng": -105.788064
  },
  {
    "id": "41095",
    "name": "Kiosko Occidental",
    "address": "Av. Occidental, Escuinapa, Sin., CP 82400",
    "city": "Escuinapa",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 22.8309,
    "lng": -105.78265
  },
  {
    "id": "41096",
    "name": "Kiosko Colosio",
    "address": "Francisco Gonzalez Boca Negra, Mazatlan, Sin., CP 82134",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 23.282778,
    "lng": -106.392675
  },
  {
    "id": "41097",
    "name": "Kiosko Alarcon",
    "address": "Av de los Delfines, Mazatlan, Sin., CP 82132",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 23.2703,
    "lng": -106.41112
  },
  {
    "id": "41098",
    "name": "Kiosko Presidentes",
    "address": "Av. Luis Donaldo Colosio, Rosario, Sin., CP 82802",
    "city": "Rosario",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 22.99849,
    "lng": -105.8606
  },
  {
    "id": "41099",
    "name": "Kiosko Mutualismo",
    "address": "Mutualismo, Mazatlan, Sin., CP 82198",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 23.25465,
    "lng": -106.38108
  },
  {
    "id": "41100",
    "name": "Kiosko Gas Concordia",
    "address": "Carr. Mazatlan-durango Km 44.5, Concordia, Sin., CP 82600",
    "city": "Concordia",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 23.287725,
    "lng": -106.062472
  },
  {
    "id": "41101",
    "name": "Kiosko Villas del Rey",
    "address": "Calle de las Torres, Mazatlan, Sin., CP 82164",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 23.24785,
    "lng": -106.39713
  },
  {
    "id": "41102",
    "name": "Kiosko Francisco Perez",
    "address": "Francisco Perez, Escuinapa, Sin., CP 82400",
    "city": "Escuinapa",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Hot Dogs"
    ],
    "lat": 22.831721,
    "lng": -105.778175
  },
  {
    "id": "41103",
    "name": "Kiosko Magnolia",
    "address": "Costa Genova, Mazatlan, Sin., CP 82150",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 23.19215,
    "lng": -106.34497
  },
  {
    "id": "41104",
    "name": "Kiosko Miguel Hidalgo",
    "address": "Miguel Hidalgo, Escuinapa, Sin., CP 82400",
    "city": "Escuinapa",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 22.83474,
    "lng": -105.77252
  },
  {
    "id": "41105",
    "name": "Kiosko Emilio Barragan",
    "address": "Blvd. Emilio Barragan, Mazatlan, Sin., CP 82040",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 23.194426,
    "lng": -106.417438
  },
  {
    "id": "41106",
    "name": "Kiosko Gas la Marina",
    "address": "Av. Marina Mazatlan, Mazatlan, Sin., CP 82102",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 23.27003,
    "lng": -106.45129
  },
  {
    "id": "41108",
    "name": "Kiosko Perez Arce",
    "address": "Enrique Perea Arce, Mazatlan, Sin., CP 82180",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Hot Dogs"
    ],
    "lat": 23.230049,
    "lng": -106.409109
  },
  {
    "id": "41109",
    "name": "Kiosko La Cantera",
    "address": "Av. Pradera Dorada, Mazatlan, Sin., CP 82139",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 23.28321,
    "lng": -106.376397
  },
  {
    "id": "41110",
    "name": "Kiosko Laguna el Rosario",
    "address": "Guillermo Elizondo, Rosario, Sin., CP 82807",
    "city": "Rosario",
    "state": "Sinaloa",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 22.989085,
    "lng": -105.861975
  },
  {
    "id": "41112",
    "name": "Kiosko Los Angeles",
    "address": "Av. California, Mazatlan, Sin., CP 82150",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café",
      "Hot Dogs"
    ],
    "lat": 23.188995,
    "lng": -106.325564
  },
  {
    "id": "41114",
    "name": "Kiosko Hacienda de Santa Cecilia",
    "address": "Hacienda de las Flores, Mazatlan, Sin., CP 82129",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 23.285916,
    "lng": -106.417548
  },
  {
    "id": "41115",
    "name": "Kiosko Independencia",
    "address": "Manuel Salazar, Mazatlan, Sin., CP 82180",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 23.229463,
    "lng": -106.399306
  },
  {
    "id": "41116",
    "name": "Kiosko Malecon Escuinapa",
    "address": "Malecon Siglo Xxi, Escuinapa, Sin., CP 82400",
    "city": "Escuinapa",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 22.83711,
    "lng": -105.781583
  },
  {
    "id": "41117",
    "name": "Kiosko Arboledas",
    "address": "Mexicali, Mazatlan, Sin., CP 82136",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 23.259597,
    "lng": -106.401599
  },
  {
    "id": "41118",
    "name": "Kiosko Gas el Pozole",
    "address": "Carretera Internacional Al Sur Km 60, Mazatlan, Sin., CP 82275",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 23.192814,
    "lng": -106.238388
  },
  {
    "id": "41119",
    "name": "Kiosko Leyva Solano",
    "address": "Perez Arce, Mazatlan, Sin., CP 82180",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 23.225479,
    "lng": -106.400528
  },
  {
    "id": "41120",
    "name": "Kiosko Cima Horizonte",
    "address": "Av. Isla Mujeres, Mazatlan, Sin., CP 82134",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 23.291819,
    "lng": -106.389191
  },
  {
    "id": "41121",
    "name": "Kiosko Gardenia",
    "address": "Gardenia, Mazatlan, Sin., CP 82195",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 23.236413,
    "lng": -106.376966
  },
  {
    "id": "41122",
    "name": "Kiosko Francisco Solis",
    "address": "Jose Robles, Mazatlan, Sin., CP 82127",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Hot Dogs"
    ],
    "lat": 23.249065,
    "lng": -106.431574
  },
  {
    "id": "41123",
    "name": "Kiosko Av del Sol",
    "address": "Av. Tabachines, Mazatlan, Sin., CP 82199",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 23.264919,
    "lng": -106.363286
  },
  {
    "id": "41125",
    "name": "Kiosko Puerto de Mazatlan",
    "address": "Av Emilio Barragan No 1201, Mazatlan, Sin., CP 82000",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Hot Dogs"
    ],
    "lat": 23.200245,
    "lng": -106.413588
  },
  {
    "id": "41126",
    "name": "Kiosko Sanchez Celis",
    "address": "Sinaloa, Mazatlan, Sin., CP 82120",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 23.243682,
    "lng": -106.431713
  },
  {
    "id": "41127",
    "name": "Kiosko Pacifico",
    "address": "Blvd Oscar Perez Escobosa, Mazatlan, Sin., CP 82124",
    "city": "Mazatlan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 23.287043,
    "lng": -106.441276
  },
  {
    "id": "42001",
    "name": "Kiosko Gas las Cerezas",
    "address": "Central, Culiacan, Sin., CP 80019",
    "city": "Culiacan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 24.87360154,
    "lng": -107.38147811
  },
  {
    "id": "42002",
    "name": "Kiosko Gas Cedro",
    "address": "Blvd. Alcaparra, Culiacan, Sin., CP 80058",
    "city": "Culiacan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 24.825856,
    "lng": -107.451893
  },
  {
    "id": "42003",
    "name": "Kiosko Lazaro Cardenas",
    "address": "Av. 21 de Marzo, Culiacan, Sin., CP 80290",
    "city": "Culiacan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 24.777687,
    "lng": -107.377857
  },
  {
    "id": "42004",
    "name": "Kiosko Villa del Real",
    "address": "Av. Rey Jorge Vi, Culiacan, Sin., CP 80247",
    "city": "Culiacan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Hot Dogs"
    ],
    "lat": 24.794834,
    "lng": -107.345771
  },
  {
    "id": "42005",
    "name": "Kiosko Juan Ley Fong",
    "address": "Blvd. Juan Ley Fong, Culiacan, Sin., CP 80295",
    "city": "Culiacan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café",
      "Hot Dogs"
    ],
    "lat": 24.763347,
    "lng": -107.353244
  },
  {
    "id": "42006",
    "name": "Kiosko Gas Agricultores",
    "address": "Juan Luis de Alarcon, Culiacan, Sin., CP 80249",
    "city": "Culiacan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 24.794072,
    "lng": -107.354036
  },
  {
    "id": "42007",
    "name": "Kiosko Cañadas",
    "address": "Sierra Madre Occidental, Culiacan, Sin., CP 80178",
    "city": "Culiacan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 24.781226,
    "lng": -107.407517
  },
  {
    "id": "42008",
    "name": "Kiosko Gas Patria",
    "address": "Av. Patria, Culiacan, Sin., CP 80296",
    "city": "Culiacan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 24.758546,
    "lng": -107.370201
  },
  {
    "id": "42009",
    "name": "Kiosko Los Angeles",
    "address": "San Bernardino, Culiacan, Sin., CP 80014",
    "city": "Culiacan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 24.845589,
    "lng": -107.358064
  },
  {
    "id": "42010",
    "name": "Kiosko Francisco Corneta",
    "address": "Boulevard Paseo de los Agricultores, Culiacan, Sin., CP 80295",
    "city": "Culiacan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 24.755058,
    "lng": -107.349458
  },
  {
    "id": "42012",
    "name": "Kiosko Gas Costa Rica",
    "address": "Mocorrito, Culiacan, Sin., CP 80398",
    "city": "Culiacan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 24.5901,
    "lng": -107.40828
  },
  {
    "id": "42013",
    "name": "Kiosko Fresno",
    "address": "Calle del Fresno, Culiacan, Sin., CP 80260",
    "city": "Culiacan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Hot Dogs"
    ],
    "lat": 24.78671,
    "lng": -107.37451
  },
  {
    "id": "42014",
    "name": "Kiosko Chapultepec",
    "address": "Doctores, Culiacan, Sin., CP 80040",
    "city": "Culiacan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 24.821882,
    "lng": -107.391883
  },
  {
    "id": "42015",
    "name": "Kiosko Av México 68",
    "address": "Geranio, Culiacan, Sin., CP 80270",
    "city": "Culiacan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café",
      "Hot Dogs"
    ],
    "lat": 24.780738,
    "lng": -107.383038
  },
  {
    "id": "42016",
    "name": "Kiosko Conquistadores",
    "address": "Juan de O' Donoju, Culiacan, Sin., CP 80058",
    "city": "Culiacan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 24.81431,
    "lng": -107.441042
  },
  {
    "id": "42017",
    "name": "Kiosko Villas del Rio",
    "address": "Blvd. Villas del Rio, Culiacan, Sin., CP 80050",
    "city": "Culiacan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Hot Dogs"
    ],
    "lat": 24.805442,
    "lng": -107.445958
  },
  {
    "id": "42018",
    "name": "Kiosko Universo",
    "address": "Blvd. Universo, Culiacan, Sin., CP 80058",
    "city": "Culiacan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 24.818944,
    "lng": -107.445386
  },
  {
    "id": "42019",
    "name": "Kiosko Fundadores",
    "address": "Blvd. Alcatraz, Culiacan, Sin., CP 80145",
    "city": "Culiacan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 24.762298,
    "lng": -107.455298
  },
  {
    "id": "42020",
    "name": "Kiosko Tarahumaras",
    "address": "Av. Tarahumaras, Culiacan, Sin., CP 80160",
    "city": "Culiacan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 24.7783,
    "lng": -107.42902
  },
  {
    "id": "42021",
    "name": "Kiosko De Marzo",
    "address": "Blvd. Nuevo Horizonte, Culiacan, Sin., CP 80054",
    "city": "Culiacan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Hot Dogs"
    ],
    "lat": 24.814531,
    "lng": -107.429356
  },
  {
    "id": "42022",
    "name": "Kiosko Loma de Rodriguera",
    "address": "Av. Alvaro Obregon, Culiacan, Sin., CP 80019",
    "city": "Culiacan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 24.86755,
    "lng": -107.3932
  },
  {
    "id": "42025",
    "name": "Kiosko Constituyentes Herminio",
    "address": "Emiliano C. Garcia, Culiacan, Sin., CP 80190",
    "city": "Culiacan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 24.771514,
    "lng": -107.407308
  },
  {
    "id": "42026",
    "name": "Kiosko Benjamin Hill",
    "address": "Blvd. General Benjamin Hill, Culiacan, Sin., CP 80189",
    "city": "Culiacan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 24.76207,
    "lng": -107.43106
  },
  {
    "id": "42027",
    "name": "Kiosko Venus",
    "address": "Venus, Culiacan, Sin., CP 80015",
    "city": "Culiacan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 24.83323,
    "lng": -107.37898
  },
  {
    "id": "42028",
    "name": "Kiosko Mont Blanc",
    "address": "Av. de los Empaques, Culiacan, Sin., CP 80184",
    "city": "Culiacan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 24.75922,
    "lng": -107.43575
  },
  {
    "id": "42029",
    "name": "Kiosko Stanza",
    "address": "Blvd. Alvaro del Portillo, Culiacan, Sin., CP 80050",
    "city": "Culiacan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 24.81032,
    "lng": -107.46316
  },
  {
    "id": "42030",
    "name": "Kiosko San Rafael",
    "address": "Cuarta, Culiacan, Sin., CP 80398",
    "city": "Culiacan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 24.59504,
    "lng": -107.39497
  },
  {
    "id": "42031",
    "name": "Kiosko Constituyente Terrones",
    "address": "Alberto Terrones, Culiacan, Sin., CP 80190",
    "city": "Culiacan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café",
      "Hot Dogs"
    ],
    "lat": 24.76586,
    "lng": -107.41566
  },
  {
    "id": "42032",
    "name": "Kiosko Ecuador",
    "address": "Blvd. del Ecuador, Culiacan, Sin., CP 80027",
    "city": "Culiacan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 24.83202,
    "lng": -107.42591
  },
  {
    "id": "42034",
    "name": "Kiosko El Salado",
    "address": "Carretera Internacional, Culiacan, Sin., CP 80440",
    "city": "Culiacan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 24.50901,
    "lng": -107.16182
  },
  {
    "id": "42035",
    "name": "Kiosko Jesus Garcia Morales",
    "address": "Av. Revolucion, Culiacan, Sin., CP 80260",
    "city": "Culiacan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café",
      "Hot Dogs"
    ],
    "lat": 24.78424,
    "lng": -107.36589
  },
  {
    "id": "42036",
    "name": "Kiosko Independencia",
    "address": "Blvd. Veinteava, Culiacan, Sin., CP 80430",
    "city": "Culiacan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 24.59095,
    "lng": -107.38362
  },
  {
    "id": "42037",
    "name": "Kiosko Gas Universitarios",
    "address": "Boulevard Universitarios, Culiacan, Sin., CP 80010",
    "city": "Culiacan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 24.83077,
    "lng": -107.38661
  },
  {
    "id": "42038",
    "name": "Kiosko Imala",
    "address": "Carretera Culiacan-imala, Culiacan, Sin., CP 80014",
    "city": "Culiacan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 24.847972,
    "lng": -107.3535
  },
  {
    "id": "42039",
    "name": "Kiosko Gas Ancona",
    "address": "Antonio Ancona, Culiacan, Sin., CP 80180",
    "city": "Culiacan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 24.7707,
    "lng": -107.42317
  },
  {
    "id": "42040",
    "name": "Kiosko Gas Carrizalejo",
    "address": "Carretera a Sanalona, Culiacan, Sin., CP 80385",
    "city": "Culiacan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 24.80414,
    "lng": -107.30883
  },
  {
    "id": "42041",
    "name": "Kiosko Costera el Diez",
    "address": "Carretera a Eldorado, Culiacan, Sin., CP 80393",
    "city": "Culiacan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Hot Dogs"
    ],
    "lat": 24.72088,
    "lng": -107.45011
  },
  {
    "id": "42043",
    "name": "Kiosko Fernando Cuen",
    "address": "Av. Pablo Macias Valenzuela, Culiacan, Sin., CP 80180",
    "city": "Culiacan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 24.761803,
    "lng": -107.42645
  },
  {
    "id": "42044",
    "name": "Kiosko Roble",
    "address": "Del Roble, Culiacan, Sin., CP 80260",
    "city": "Culiacan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 24.787806,
    "lng": -107.379696
  },
  {
    "id": "42045",
    "name": "Kiosko Los Sabinos",
    "address": "Miguel Hidalgo, Culiacan, Sin., CP 80080",
    "city": "Culiacan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 24.806575,
    "lng": -107.361842
  },
  {
    "id": "42046",
    "name": "Kiosko Vinoramas",
    "address": "Blvd Vinoramas, Culiacan, Sin., CP 80184",
    "city": "Culiacan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 24.747256,
    "lng": -107.431142
  },
  {
    "id": "42047",
    "name": "Kiosko Reynaldo Gonzalez",
    "address": "Av. Alvaro Obregon, Culiacan, Sin., CP 80030",
    "city": "Culiacan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 24.821636,
    "lng": -107.396611
  },
  {
    "id": "42048",
    "name": "Kiosko Gas Santa Rocio",
    "address": "Calzada Aeropuerto, Culiacan, Sin., CP 80135",
    "city": "Culiacan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 24.774455,
    "lng": -107.488317
  },
  {
    "id": "42049",
    "name": "Kiosko Cantabria",
    "address": "Blvd. Cantabria, Culiacan, Sin., CP 80301",
    "city": "Culiacan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 24.826492,
    "lng": -107.458819
  },
  {
    "id": "42050",
    "name": "Kiosko Hilario Medina",
    "address": "Av. Hilario Medina, Culiacan, Sin., CP 80194",
    "city": "Culiacan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 24.75197,
    "lng": -107.42165
  },
  {
    "id": "42051",
    "name": "Kiosko Valle Alto",
    "address": "Boulevard Clemente Vizcarra, Culiacan, Sin., CP 80050",
    "city": "Culiacan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 24.802351,
    "lng": -107.475768
  },
  {
    "id": "42052",
    "name": "Kiosko Cosmos",
    "address": "Av. Cosmos, Culiacan, Sin., CP 80014",
    "city": "Culiacan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 24.841382,
    "lng": -107.374778
  },
  {
    "id": "42053",
    "name": "Kiosko Las Quintas",
    "address": "Estado de Tabasco, Culiacan, Sin., CP 80060",
    "city": "Culiacan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 24.817264,
    "lng": -107.369208
  },
  {
    "id": "42054",
    "name": "Kiosko Nacayama Olea",
    "address": "Hector R. Olea, Culiacan, Sin., CP 80240",
    "city": "Culiacan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 24.798667,
    "lng": -107.360944
  },
  {
    "id": "42055",
    "name": "Kiosko Gas la Palma",
    "address": "Defensa Nacional, Navolato, Sin., CP 80348",
    "city": "Navolato",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 24.817194,
    "lng": -107.65487
  },
  {
    "id": "42056",
    "name": "Kiosko Felix Castro",
    "address": "Boulevard Enrique Felix Castro, Culiacan, Sin., CP 80020",
    "city": "Culiacan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 24.826418,
    "lng": -107.422287
  },
  {
    "id": "42059",
    "name": "Kiosko Flor de Liz",
    "address": "Blvd. de los Azhares, Culiacan, Sin., CP 80145",
    "city": "Culiacan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 24.76925,
    "lng": -107.453722
  },
  {
    "id": "42060",
    "name": "Kiosko Gas Altata",
    "address": "Carretera Altata-navolato, Navolato, Sin., CP 80363",
    "city": "Navolato",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 24.644442,
    "lng": -107.92362
  },
  {
    "id": "42061",
    "name": "Kiosko Campestre",
    "address": "Carretera Culiacan-navolato, Navolato, Sin., CP 80372",
    "city": "Navolato",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Hot Dogs"
    ],
    "lat": 24.762641,
    "lng": -107.623494
  },
  {
    "id": "42062",
    "name": "Kiosko Clouthier",
    "address": "Blvd Manuel J Clouthier, Culiacan, Sin., CP 80190",
    "city": "Culiacan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 24.7759386,
    "lng": -107.40682232
  },
  {
    "id": "42068",
    "name": "Kiosko Plan de Ayala",
    "address": "Av. Joaquin Sanchez, Culiacan, Sin., CP 80260",
    "city": "Culiacan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 24.788556,
    "lng": -107.361278
  },
  {
    "id": "42069",
    "name": "Kiosko Francisco Ramirez",
    "address": "Av. Corneta Francisco Ramirez, Culiacan, Sin., CP 80295",
    "city": "Culiacan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 24.763469,
    "lng": -107.354307
  },
  {
    "id": "42072",
    "name": "Kiosko Camino a la Costera",
    "address": "Av, Geovanny Zamudio, Culiacan, Sin., CP 80160",
    "city": "Culiacan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 24.744758,
    "lng": -107.422914
  },
  {
    "id": "42073",
    "name": "Kiosko Parque Alameda",
    "address": "Paseo de la Alameda, Culiacan, Sin., CP 80019",
    "city": "Culiacan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Hot Dogs"
    ],
    "lat": 24.865907,
    "lng": -107.386177
  },
  {
    "id": "42074",
    "name": "Kiosko Camino Real",
    "address": "Blvd Francisco I Madero, Culiacan, Sin., CP 80247",
    "city": "Culiacan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 24.803644,
    "lng": -107.346931
  },
  {
    "id": "42076",
    "name": "Kiosko Gas San Ramon",
    "address": "Blvd Emiliano Zapata, Culiacan, Sin., CP 80200",
    "city": "Culiacan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 24.796834,
    "lng": -107.402207
  },
  {
    "id": "42077",
    "name": "Kiosko Guadalupe Victoria",
    "address": "Bahia de Agiabampo, Culiacan, Sin., CP 80170",
    "city": "Culiacan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 24.78589,
    "lng": -107.405556
  },
  {
    "id": "42078",
    "name": "Kiosko Lopez Velarde",
    "address": "Chichenitza, Culiacan, Sin., CP 80140",
    "city": "Culiacan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 24.762336,
    "lng": -107.460771
  },
  {
    "id": "42081",
    "name": "Kiosko Chiapas",
    "address": "Imala, Culiacan, Sin., CP 80230",
    "city": "Culiacan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Hot Dogs"
    ],
    "lat": 24.797343,
    "lng": -107.385572
  },
  {
    "id": "42082",
    "name": "Kiosko Alberto Roman",
    "address": "Constituyente Alberto Roman, Culiacan, Sin., CP 80180",
    "city": "Culiacan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Hot Dogs"
    ],
    "lat": 24.763374,
    "lng": -107.423924
  },
  {
    "id": "42083",
    "name": "Kiosko De Octubre",
    "address": "Av 12 de Octubre No 1711, Culiacan, Sin., CP 80270",
    "city": "Culiacan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Hot Dogs"
    ],
    "lat": 24.783247,
    "lng": -107.376905
  },
  {
    "id": "42084",
    "name": "Kiosko Plaza San Juan",
    "address": "Av. Emiliano C. Garcia, Culiacan, Sin., CP 80180",
    "city": "Culiacan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 24.7795,
    "lng": -107.416722
  },
  {
    "id": "42085",
    "name": "Kiosko Niños Heroes",
    "address": "Niños Heroes, Navolato, Sin., CP 80327",
    "city": "Navolato",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 24.766292,
    "lng": -107.70327
  },
  {
    "id": "42086",
    "name": "Kiosko Las Brisas",
    "address": "Blvd. de las Brisas, Culiacan, Sin., CP 80246",
    "city": "Culiacan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 24.781305,
    "lng": -107.356456
  },
  {
    "id": "42089",
    "name": "Kiosko Agricultores Alquenje",
    "address": "Paseo de los Agricultores, Culiacan, Sin., CP 80246",
    "city": "Culiacan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 24.776968,
    "lng": -107.35216
  },
  {
    "id": "42090",
    "name": "Kiosko Garmendia",
    "address": "Gustavo Garmendia, Culiacan, Sin., CP 80090",
    "city": "Culiacan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 24.805155,
    "lng": -107.366252
  },
  {
    "id": "42092",
    "name": "Kiosko Blvd Dr Mora",
    "address": "Blvd. Dr. Mora, Culiacan, Sin., CP 80060",
    "city": "Culiacan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 24.814629,
    "lng": -107.371702
  },
  {
    "id": "42095",
    "name": "Kiosko Perisur",
    "address": "Blvd. Nuevo Mundo, Culiacan, Sin., CP 80197",
    "city": "Culiacan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 24.748884,
    "lng": -107.39826
  },
  {
    "id": "42096",
    "name": "Kiosko Las Americas",
    "address": "Av. de las Americas, Culiacan, Sin., CP 80015",
    "city": "Culiacan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 24.83651,
    "lng": -107.38494
  },
  {
    "id": "42097",
    "name": "Kiosko Plaza Chapultepec",
    "address": "Av. Francisco Marquez, Culiacan, Sin., CP 80040",
    "city": "Culiacan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café",
      "Hot Dogs"
    ],
    "lat": 24.816815,
    "lng": -107.39357
  },
  {
    "id": "42098",
    "name": "Kiosko Plaza Obregon",
    "address": "Mocorito, Culiacan, Sin., CP 80220",
    "city": "Culiacan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 24.795506,
    "lng": -107.393993
  },
  {
    "id": "42099",
    "name": "Kiosko Ignacio Zaragoza",
    "address": "Ignacio Zaragoza, Navolato, Sin., CP 80322",
    "city": "Navolato",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 24.766285,
    "lng": -107.685676
  },
  {
    "id": "42101",
    "name": "Kiosko Prados del Sol",
    "address": "Blvd. Ejercito de Occidente No. 5805, Culiacan, Sin., CP 80197",
    "city": "Culiacan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 24.75327,
    "lng": -107.416302
  },
  {
    "id": "42102",
    "name": "Kiosko Elbert",
    "address": "Blvd. Elbert, Culiacan, Sin., CP 80059",
    "city": "Culiacan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 24.832045,
    "lng": -107.438155
  },
  {
    "id": "42103",
    "name": "Kiosko Cofradia",
    "address": "Carretera Culiacan Navolato, Navolato, Sin., CP 80349",
    "city": "Navolato",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 24.760751,
    "lng": -107.644101
  },
  {
    "id": "42106",
    "name": "Kiosko Altezza",
    "address": "Calle Cerro de las Cumbres No. 306 Poniente, Culiacan, Sin., CP 80177",
    "city": "Culiacan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Hot Dogs"
    ],
    "lat": 24.778384,
    "lng": -107.397188
  },
  {
    "id": "42107",
    "name": "Kiosko Villamoros",
    "address": "Gilberto Concilion, Navolato, Sin., CP 80324",
    "city": "Navolato",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 24.745972,
    "lng": -107.690944
  },
  {
    "id": "42108",
    "name": "Kiosko Plaza Ciudades Hermanas",
    "address": "Blvd. Ciudades Hermanas, Culiacan, Sin., CP 80220",
    "city": "Culiacan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 24.792078,
    "lng": -107.399971
  },
  {
    "id": "42109",
    "name": "Kiosko Plaza Bravo",
    "address": "Av Nicolas Bravo, Culiacan, Sin., CP 80200",
    "city": "Culiacan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 24.797784,
    "lng": -107.401495
  },
  {
    "id": "42110",
    "name": "Kiosko Juarez Navolato",
    "address": "Av Lic Benito Juarez, Navolato, Sin., CP 80320",
    "city": "Navolato",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 24.769104,
    "lng": -107.696843
  },
  {
    "id": "42112",
    "name": "Kiosko Altaria",
    "address": "Blvd Altaria, Culiacan, Sin., CP 80295",
    "city": "Culiacan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 24.755026,
    "lng": -107.364528
  },
  {
    "id": "42113",
    "name": "Kiosko Ruben Marti",
    "address": "Av Ruben Marti, Culiacan, Sin., CP 80197",
    "city": "Culiacan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 24.762706,
    "lng": -107.418923
  },
  {
    "id": "42114",
    "name": "Kiosko Periferico Revolucion",
    "address": "Periferico Revolucion, Navolato, Sin., CP 80322",
    "city": "Navolato",
    "state": "Sinaloa",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 24.757781,
    "lng": -107.685506
  },
  {
    "id": "42115",
    "name": "Kiosko Chulavista",
    "address": "Blvd Culiacan -altata, Navolato, Sin., CP 80323",
    "city": "Navolato",
    "state": "Sinaloa",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Hot Dogs"
    ],
    "lat": 24.755573,
    "lng": -107.688069
  },
  {
    "id": "42118",
    "name": "Kiosko Los Sauces Tres Rios",
    "address": "Blvd. Universitarios, Culiacan, Sin., CP 80010",
    "city": "Culiacan",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 24.833731,
    "lng": -107.396802
  },
  {
    "id": "42120",
    "name": "Kiosko San Pedro",
    "address": "Carretera Culiacan-altata, Navolato, Sin., CP 80374",
    "city": "Navolato",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 24.769387,
    "lng": -107.548024
  },
  {
    "id": "43001",
    "name": "Kiosko Liverpool",
    "address": "Av. Liverpool, Ahome, Sin., CP 81278",
    "city": "Ahome",
    "state": "Sinaloa",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 25.79147,
    "lng": -109.02941
  },
  {
    "id": "43002",
    "name": "Kiosko Urbi Villas del Rey",
    "address": "Santa Mirna, Ahome, Sin., CP 81278",
    "city": "Ahome",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 25.79384,
    "lng": -109.0334
  },
  {
    "id": "43003",
    "name": "Kiosko Jose Maria Morelos",
    "address": "Av. Jose Maria Morelos y Pavon, Ahome, Sin., CP 81257",
    "city": "Ahome",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 25.7807,
    "lng": -108.97311
  },
  {
    "id": "43004",
    "name": "Kiosko Mochicahui",
    "address": "Av, Ignacio Ramirez, Ahome, Sin., CP 81256",
    "city": "Ahome",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 25.78822,
    "lng": -108.97233
  },
  {
    "id": "43005",
    "name": "Kiosko Santa Maria",
    "address": "David Alfaro Siqueiros, Guasave, Sin., CP 81045",
    "city": "Guasave",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 25.54833139,
    "lng": -108.49316642
  },
  {
    "id": "43006",
    "name": "Kiosko Gas Paloma",
    "address": "Carretera Topolobampo-choix, Ahome, Sin., CP 81370",
    "city": "Ahome",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 25.68099,
    "lng": -109.03954
  },
  {
    "id": "43007",
    "name": "Kiosko Sabalo Country",
    "address": "Alamo Country, Ahome, Sin., CP 81271",
    "city": "Ahome",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 25.776495,
    "lng": -109.027933
  },
  {
    "id": "43008",
    "name": "Kiosko Antonio Flores",
    "address": "Antonio Flores, Ahome, Sin., CP 81271",
    "city": "Ahome",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 25.767658,
    "lng": -109.029478
  },
  {
    "id": "43009",
    "name": "Kiosko Gas Francisco I Madero",
    "address": "Av. Francisco I Madero, Ahome, Sin., CP 81235",
    "city": "Ahome",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 25.80253268,
    "lng": -109.01002123
  },
  {
    "id": "43011",
    "name": "Kiosko Praderas del Real",
    "address": "Praderas del Real, Salvador Alvarado, Sin., CP 81475",
    "city": "Salvador Alvarado",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 25.43613,
    "lng": -108.05586
  },
  {
    "id": "43012",
    "name": "Kiosko Aguamarina",
    "address": "Av. Aguamarina, Ahome, Sin., CP 81278",
    "city": "Ahome",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 25.785008,
    "lng": -109.015848
  },
  {
    "id": "43013",
    "name": "Kiosko Enrique Dunant",
    "address": "Av, Enrique Dunant, Salvador Alvarado, Sin., CP 81460",
    "city": "Salvador Alvarado",
    "state": "Sinaloa",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 25.450194,
    "lng": -108.076055
  },
  {
    "id": "43015",
    "name": "Kiosko Playa las Glorias",
    "address": "Boulevard Rosendo G. Castro, Ahome, Sin., CP 81260",
    "city": "Ahome",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 25.773942,
    "lng": -108.973233
  },
  {
    "id": "43016",
    "name": "Kiosko Madero",
    "address": "Av. Francisco I Madero, Ahome, Sin., CP 81260",
    "city": "Ahome",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 25.77807,
    "lng": -108.96618
  },
  {
    "id": "43017",
    "name": "Kiosko Gas Millan",
    "address": "Blvd. Juan S. Millan, Guasave, Sin., CP 81049",
    "city": "Guasave",
    "state": "Sinaloa",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 25.55633,
    "lng": -108.4744
  },
  {
    "id": "43018",
    "name": "Kiosko Benito Juarez",
    "address": "Juan Escutia, Salvador Alvarado, Sin., CP 81490",
    "city": "Salvador Alvarado",
    "state": "Sinaloa",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 25.45582078,
    "lng": -108.0878809
  },
  {
    "id": "43019",
    "name": "Kiosko Blvd Centenario",
    "address": "Blvd. Centenario, Ahome, Sin., CP 81278",
    "city": "Ahome",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 25.791278,
    "lng": -109.015583
  },
  {
    "id": "43020",
    "name": "Kiosko Grafito",
    "address": "Av. Pasadena, Ahome, Sin., CP 81294",
    "city": "Ahome",
    "state": "Sinaloa",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 25.746806,
    "lng": -108.989333
  },
  {
    "id": "43021",
    "name": "Kiosko Justicia Social",
    "address": "Av. Justicia Social, Ahome, Sin., CP 81229",
    "city": "Ahome",
    "state": "Sinaloa",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café",
      "Hot Dogs"
    ],
    "lat": 25.818139,
    "lng": -108.993139
  },
  {
    "id": "43022",
    "name": "Kiosko Bahia San Ignacio",
    "address": "Bahia San Ignacio, Ahome, Sin., CP 81245",
    "city": "Ahome",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 25.794382,
    "lng": -109.00161
  },
  {
    "id": "43023",
    "name": "Kiosko Poseidon",
    "address": "Blvd Poseidon, Ahome, Sin., CP 81245",
    "city": "Ahome",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 25.824232,
    "lng": -108.995864
  },
  {
    "id": "43024",
    "name": "Kiosko Antonio Rosales",
    "address": "Blvd Antonio Rosales, Salvador Alvarado, Sin., CP 81400",
    "city": "Salvador Alvarado",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 25.459247,
    "lng": -108.086637
  },
  {
    "id": "43025",
    "name": "Kiosko Jesus Rodriguez",
    "address": "Jesus Rodriguez, Salvador Alvarado, Sin., CP 81450",
    "city": "Salvador Alvarado",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café",
      "Hot Dogs"
    ],
    "lat": 25.464132,
    "lng": -108.083332
  },
  {
    "id": "43026",
    "name": "Kiosko Nuevo Horizonte",
    "address": "Blvd. Centenario, Ahome, Sin., CP 81233",
    "city": "Ahome",
    "state": "Sinaloa",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Hot Dogs"
    ],
    "lat": 25.800821,
    "lng": -109.031774
  },
  {
    "id": "43027",
    "name": "Kiosko Suecia",
    "address": "Suecia, Ahome, Sin., CP 81254",
    "city": "Ahome",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 25.79685,
    "lng": -108.966695
  },
  {
    "id": "43028",
    "name": "Kiosko Bienestar",
    "address": "Gral. Ignacio Zaragoza, Ahome, Sin., CP 81280",
    "city": "Ahome",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 25.79595206,
    "lng": -108.98908713
  },
  {
    "id": "43029",
    "name": "Kiosko Belisario Dominguez",
    "address": "Belisario Dominguez, Ahome, Sin., CP 81259",
    "city": "Ahome",
    "state": "Sinaloa",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 25.792928,
    "lng": -108.979493
  },
  {
    "id": "43030",
    "name": "Kiosko Macario Gaxiola",
    "address": "Blvd. Macario Gaxiola, Ahome, Sin., CP 81285",
    "city": "Ahome",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 25.7761,
    "lng": -108.986118
  },
  {
    "id": "43031",
    "name": "Kiosko Gas Matamoros",
    "address": "Av. Mariano Matamoros, Salvador Alvarado, Sin., CP 81450",
    "city": "Salvador Alvarado",
    "state": "Sinaloa",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 25.465484,
    "lng": -108.077204
  },
  {
    "id": "43032",
    "name": "Kiosko Ejido Independencia",
    "address": "Av. Independencia, Ahome, Sin., CP 81233",
    "city": "Ahome",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Hot Dogs"
    ],
    "lat": 25.807605,
    "lng": -109.023639
  },
  {
    "id": "43034",
    "name": "Kiosko Jardines del Sol",
    "address": "Av. Granada, Guasave, Sin., CP 81048",
    "city": "Guasave",
    "state": "Sinaloa",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 25.55353618,
    "lng": -108.47884978
  },
  {
    "id": "43035",
    "name": "Kiosko Rio Sinaloa",
    "address": "Rio Sinaloa, Ahome, Sin., CP 81240",
    "city": "Ahome",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 25.798806,
    "lng": -108.997392
  },
  {
    "id": "43036",
    "name": "Kiosko De Mayo",
    "address": "Blvd. 10 de May0, Ahome, Sin., CP 81223",
    "city": "Ahome",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 25.804714,
    "lng": -108.980473
  },
  {
    "id": "43037",
    "name": "Kiosko Reyes Heroles",
    "address": "Jesus Reyes Heroles, Ahome, Sin., CP 81217",
    "city": "Ahome",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 25.814612,
    "lng": -108.968368
  },
  {
    "id": "43039",
    "name": "Kiosko Pedro Anaya",
    "address": "Blvd Alamos, Ahome, Sin., CP 81294",
    "city": "Ahome",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 25.760028,
    "lng": -108.992238
  },
  {
    "id": "43040",
    "name": "Kiosko Emiliano Zapata",
    "address": "General Emiliano Zapata, Ahome, Sin., CP 81200",
    "city": "Ahome",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Hot Dogs"
    ],
    "lat": 25.792538,
    "lng": -108.985306
  },
  {
    "id": "43043",
    "name": "Kiosko Gas Canuto",
    "address": "Blvd. Canuto Ibarra Sur, Ahome, Sin., CP 81278",
    "city": "Ahome",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 25.783704,
    "lng": -109.016271
  },
  {
    "id": "43044",
    "name": "Kiosko Carretera a Culiacan",
    "address": "Carr. Int Culiacan-los Mochis Km 192 Mas 500, Ahome, Sin., CP 81360",
    "city": "Ahome",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 25.782835,
    "lng": -108.876317
  },
  {
    "id": "43045",
    "name": "Kiosko Lopez Mateos",
    "address": "Blvd. Adolfo Lopez Mateos Nte, Ahome, Sin., CP 81210",
    "city": "Ahome",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 25.82422,
    "lng": -108.97068
  },
  {
    "id": "43046",
    "name": "Kiosko Gas Guerrero",
    "address": "Independencia, Ahome, Sin., CP 81200",
    "city": "Ahome",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 25.791394,
    "lng": -108.996277
  },
  {
    "id": "43047",
    "name": "Kiosko Gas Ahome",
    "address": "Olas Altas, Ahome, Sin., CP 81318",
    "city": "Ahome",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café",
      "Hot Dogs"
    ],
    "lat": 25.920625,
    "lng": -109.172306
  },
  {
    "id": "43048",
    "name": "Kiosko Gas las Glorias",
    "address": "Blvd. Juan de Dios Batiz, Guasave, Sin., CP 81049",
    "city": "Guasave",
    "state": "Sinaloa",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 25.543443,
    "lng": -108.482245
  },
  {
    "id": "43050",
    "name": "Kiosko Gas Rosales",
    "address": "Blvd. Jiquilpan Nte, Ahome, Sin., CP 81220",
    "city": "Ahome",
    "state": "Sinaloa",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café",
      "Hot Dogs"
    ],
    "lat": 25.804047,
    "lng": -108.990928
  },
  {
    "id": "43051",
    "name": "Kiosko Gas Leyva",
    "address": "Gabriel Leyva, Ahome, Sin., CP 81280",
    "city": "Ahome",
    "state": "Sinaloa",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 25.779186,
    "lng": -109.002199
  },
  {
    "id": "43052",
    "name": "Kiosko Prados del Sur",
    "address": "Privada Seminario, Ahome, Sin., CP 81285",
    "city": "Ahome",
    "state": "Sinaloa",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Hot Dogs"
    ],
    "lat": 25.770125,
    "lng": -108.974138
  },
  {
    "id": "43053",
    "name": "Kiosko Marina Topolobampo",
    "address": "Carr. Mochis -topolobampo, Ahome, Sin., CP 81374",
    "city": "Ahome",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 25.604838,
    "lng": -109.057565
  },
  {
    "id": "43055",
    "name": "Kiosko Violetas",
    "address": "Av. 20 de Noviembre, Guasave, Sin., CP 81028",
    "city": "Guasave",
    "state": "Sinaloa",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 25.587225,
    "lng": -108.469642
  },
  {
    "id": "43056",
    "name": "Kiosko Chevron Rosales",
    "address": "Blvd. Antonio Rosales, Ahome, Sin., CP 81270",
    "city": "Ahome",
    "state": "Sinaloa",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 25.779883,
    "lng": -109.007089
  },
  {
    "id": "43057",
    "name": "Kiosko Gas las Huertas",
    "address": "Blvd. Macario Gaxioal, Ahome, Sin., CP 81294",
    "city": "Ahome",
    "state": "Sinaloa",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 25.736503,
    "lng": -109.013941
  },
  {
    "id": "43058",
    "name": "Kiosko Angel Flores",
    "address": "Angel Flores, Ahome, Sin., CP 81200",
    "city": "Ahome",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 25.796543,
    "lng": -108.991311
  },
  {
    "id": "43059",
    "name": "Kiosko Monterrey Alamos",
    "address": "Av. Monterrey, Ahome, Sin., CP 81248",
    "city": "Ahome",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 25.76753,
    "lng": -108.983817
  },
  {
    "id": "43060",
    "name": "Kiosko Gas Country",
    "address": "Blvd. Canuto Ibarra, Ahome, Sin., CP 81245",
    "city": "Ahome",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 25.789931,
    "lng": -109.011916
  },
  {
    "id": "43062",
    "name": "Kiosko Cuauhtemoc",
    "address": "Av. Francisco I Madero, Guasave, Sin., CP 81000",
    "city": "Guasave",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 25.563836,
    "lng": -108.46116
  },
  {
    "id": "43064",
    "name": "Kiosko Centro Plaza",
    "address": "Blvd. Cerro de la Memoria, Ahome, Sin., CP 81254",
    "city": "Ahome",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 25.803776,
    "lng": -108.963734
  },
  {
    "id": "43065",
    "name": "Kiosko Blvd Diagonal",
    "address": "Blvd Diagonal Sur, Ahome, Sin., CP 81271",
    "city": "Ahome",
    "state": "Sinaloa",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 25.777877,
    "lng": -109.022577
  },
  {
    "id": "43066",
    "name": "Kiosko Leyva Solano",
    "address": "Calle Independencia, Guasave, Sin., CP 81122",
    "city": "Guasave",
    "state": "Sinaloa",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 25.665989,
    "lng": -108.636939
  },
  {
    "id": "51001",
    "name": "Kiosko Los Cantaros",
    "address": "Av de los Cantaros 476 los Cantaros, Tlajomulco de Zuniga, Jal., CP 45653",
    "city": "Tlajomulco de Zuniga",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 20.512046,
    "lng": -103.336751
  },
  {
    "id": "51002",
    "name": "Kiosko Valle de los Encinos",
    "address": "Av Valle de los Encinos 362 Valle de los Encinos, Tlajomulco de Zuniga, Jal., CP 45650",
    "city": "Tlajomulco de Zuniga",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 20.488782,
    "lng": -103.393531
  },
  {
    "id": "51003",
    "name": "Kiosko Real del Sol",
    "address": "Av Real del Sol 1 Real del Sol, Tlajomulco de Zuniga, Jal., CP 45654",
    "city": "Tlajomulco de Zuniga",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 20.529657,
    "lng": -103.391625
  },
  {
    "id": "51004",
    "name": "Kiosko Cantaros de Marmol",
    "address": "Av Acueducto 1873 los Cantaros, Tlajomulco de Zuniga, Jal., CP 45653",
    "city": "Tlajomulco de Zuniga",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 20.504593,
    "lng": -103.335999
  },
  {
    "id": "51011",
    "name": "Kiosko Gas San Sebastian",
    "address": "Carr San Sebastian 9538 San Sebastian el Grande, Tlajomulco de Zuniga, Jal., CP 45650",
    "city": "Tlajomulco de Zuniga",
    "state": "Jalisco",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Hot Dogs"
    ],
    "lat": 20.542145,
    "lng": -103.421522
  },
  {
    "id": "51013",
    "name": "Kiosko Plaza Senderos",
    "address": "Av Concepcion 6820 Concepcion del Valle, Tlajomulco de Zuniga, Jal., CP 45653",
    "city": "Tlajomulco de Zuniga",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 20.54282,
    "lng": -103.359205
  },
  {
    "id": "51014",
    "name": "Kiosko Los Nogales",
    "address": "Av Nogales 111 Rinconada de los Nogales, Tlajomulco de Zuniga, Jal., CP 45640",
    "city": "Tlajomulco de Zuniga",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café",
      "Hot Dogs"
    ],
    "lat": 20.456584,
    "lng": -103.416425
  },
  {
    "id": "51015",
    "name": "Kiosko Gas Santa Anita",
    "address": "Calle Aldama 70 Santa Anita, San Pedro Tlaquepaque, Jal., CP 45600",
    "city": "San Pedro Tlaquepaque",
    "state": "Jalisco",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 20.551475,
    "lng": -103.4384
  },
  {
    "id": "51019",
    "name": "Kiosko Gas Camino Real",
    "address": "Camino Real de Colima 1992 San Agustin, Tlajomulco de Zuniga, Jal., CP 45640",
    "city": "Tlajomulco de Zuniga",
    "state": "Jalisco",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 20.537114,
    "lng": -103.472008
  },
  {
    "id": "51024",
    "name": "Kiosko Valle de Tejeda",
    "address": "Valle la Huasteca 19 Valle la Huasteca y Esquina Colon, Tlajomulco de Zuniga, Jal., CP 45653",
    "city": "Tlajomulco de Zuniga",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 20.50978,
    "lng": -103.37903
  },
  {
    "id": "51028",
    "name": "Kiosko Plaza Magnolias",
    "address": "Avenida Juan de la Barrera 865 Mision Magnolia, San Pedro Tlaquepaque, Jal., CP 45615",
    "city": "San Pedro Tlaquepaque",
    "state": "Jalisco",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café",
      "Hot Dogs"
    ],
    "lat": 20.55497,
    "lng": -103.33197
  },
  {
    "id": "51030",
    "name": "Kiosko Vista a la Campiña",
    "address": "Vista a la Campana 5011 Mirador del Tesoro, San Pedro Tlaquepaque, Jal., CP 45608",
    "city": "San Pedro Tlaquepaque",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 20.61867,
    "lng": -103.39917
  },
  {
    "id": "51032",
    "name": "Kiosko Gas Adolf Horn",
    "address": "Av Adolph B Horn Jr Lomas del Mirador, Tlajomulco de Zuniga, Jal., CP 45653",
    "city": "Tlajomulco de Zuniga",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 20.499063,
    "lng": -103.340254
  },
  {
    "id": "51035",
    "name": "Kiosko El Palmar San Francisco",
    "address": "Santa Angela 1600 San Gabriel y San Francisco, San Pedro Tlaquepaque, Jal., CP 45618",
    "city": "San Pedro Tlaquepaque",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 20.562782,
    "lng": -103.339755
  },
  {
    "id": "51036",
    "name": "Kiosko Paseo de los Parques",
    "address": "Antiguo Camino a Santa Cruz del Valle 1493 Av. San Blas y la Paz, San Pedro Tlaquepaque, Jal., CP 45615",
    "city": "San Pedro Tlaquepaque",
    "state": "Jalisco",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 20.567171,
    "lng": -103.355176
  },
  {
    "id": "51038",
    "name": "Kiosko Club Bancario",
    "address": "Av. del Deportivo 300 Periferico Sur E Independencia, San Pedro Tlaquepaque, Jal., CP 45601",
    "city": "San Pedro Tlaquepaque",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Hot Dogs"
    ],
    "lat": 20.60242,
    "lng": -103.40602
  },
  {
    "id": "51045",
    "name": "Kiosko Zacoalco",
    "address": "Ruben Ramirez Flores 403 Zacoalco de Torres Centro, Zacoalco de Torres, Jal., CP 45750",
    "city": "Zacoalco de Torres",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Hot Dogs"
    ],
    "lat": 20.23075,
    "lng": -103.57832
  },
  {
    "id": "51046",
    "name": "Kiosko Acatlán",
    "address": "Cuauhtemoc 152 Acatlan de Juarez Centro, Acatlan de Juarez, Jal., CP 45700",
    "city": "Acatlan de Juarez",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 20.42533,
    "lng": -103.59521
  },
  {
    "id": "51047",
    "name": "Kiosko Aquiles Serdán",
    "address": "Francisco I Madero 5 Zacoalco de Torres Centro, Zacoalco de Torres, Jal., CP 45750",
    "city": "Zacoalco de Torres",
    "state": "Jalisco",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 20.22759,
    "lng": -103.56919
  },
  {
    "id": "51048",
    "name": "Kiosko Gas Villa Corona",
    "address": "Av. Lopez Mateos 75 Villa Corona Centro, Villa Corona, Jal., CP 45730",
    "city": "Villa Corona",
    "state": "Jalisco",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 20.41584,
    "lng": -103.66884
  },
  {
    "id": "51049",
    "name": "Kiosko Xochimilco",
    "address": "16 de Septiembre 125 a, San Martin Hidalgo, Jal., CP 46770",
    "city": "San Martin Hidalgo",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 20.4394,
    "lng": -103.93617
  },
  {
    "id": "51050",
    "name": "Kiosko San Martín de Hidalgo",
    "address": "Benito Juarez 108, San Martin Hidalgo, Jal., CP 46770",
    "city": "San Martin Hidalgo",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 20.4346557911,
    "lng": -103.92540327
  },
  {
    "id": "51051",
    "name": "Kiosko Cocula",
    "address": "Ocampo, Cocula, Jal., CP 48500",
    "city": "Cocula",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 20.3719,
    "lng": -103.82057
  },
  {
    "id": "51052",
    "name": "Kiosko San Diego",
    "address": "Rafael Mendez Moreno, Cocula, Jal., CP 48504",
    "city": "Cocula",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Hot Dogs"
    ],
    "lat": 20.35739,
    "lng": -103.82326
  },
  {
    "id": "51053",
    "name": "Kiosko Allende",
    "address": "Allende, Ameca, Jal., CP 46600",
    "city": "Ameca",
    "state": "Jalisco",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 20.5478,
    "lng": -104.05204
  },
  {
    "id": "51054",
    "name": "Kiosko Ameca",
    "address": "Av. Ferrocarril, Ameca, Jal., CP 46620",
    "city": "Ameca",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 20.55024,
    "lng": -104.05501
  },
  {
    "id": "51055",
    "name": "Kiosko Tala",
    "address": "Av. San Pedro, Tala, Jal., CP 45308",
    "city": "Tala",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 20.6638,
    "lng": -103.70101
  },
  {
    "id": "51056",
    "name": "Kiosko Arista",
    "address": "Arista 199 Zacoalco de Torres Centro, Zacoalco de Torres, Jal., CP 45750",
    "city": "Zacoalco de Torres",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 20.23009,
    "lng": -103.5733
  },
  {
    "id": "51057",
    "name": "Kiosko San Javier",
    "address": "5 de Mayo, Tala, Jal., CP 45307",
    "city": "Tala",
    "state": "Jalisco",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 20.66386,
    "lng": -103.71176
  },
  {
    "id": "51058",
    "name": "Kiosko Carretera a Mascota",
    "address": "Av. Patria Poniente, Ameca, Jal., CP 46687",
    "city": "Ameca",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 20.538641,
    "lng": -104.045963
  },
  {
    "id": "51059",
    "name": "Kiosko Solidaridad",
    "address": "Av. Solidaridad, Tala, Jal., CP 45307",
    "city": "Tala",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 20.655521,
    "lng": -103.713011
  },
  {
    "id": "51060",
    "name": "Kiosko Diaz de Leon",
    "address": "Enrique Diaz de Leon, Ameca, Jal., CP 46616",
    "city": "Ameca",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 20.548254,
    "lng": -104.041971
  },
  {
    "id": "51061",
    "name": "Kiosko El Vergel",
    "address": "Fresno, Tala, Jal., CP 45300",
    "city": "Tala",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 20.638367,
    "lng": -103.702281
  },
  {
    "id": "51062",
    "name": "Kiosko Abasolo",
    "address": "Abasolo 79 el Calvario, Zacoalco de Torres, Jal., CP 45754",
    "city": "Zacoalco de Torres",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 20.22118,
    "lng": -103.576017
  },
  {
    "id": "51063",
    "name": "Kiosko San Isidro Mazatepec",
    "address": "Carretera San Isidro Mazatepec-tala 24 ., Tala, Jal., CP 45340",
    "city": "Tala",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Hot Dogs"
    ],
    "lat": 20.517569,
    "lng": -103.612808
  },
  {
    "id": "51064",
    "name": "Kiosko Tequila",
    "address": "Carretera Internacional 553 Centro, Tequila, Jal., CP 46400",
    "city": "Tequila",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 20.880208,
    "lng": -103.827044
  },
  {
    "id": "51065",
    "name": "Kiosko Magdalena",
    "address": "Av. Manuel Avila Camacho 697 Centro, Magdalena, Jal., CP 46470",
    "city": "Magdalena",
    "state": "Jalisco",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 20.908486,
    "lng": -103.955966
  },
  {
    "id": "51066",
    "name": "Kiosko Carretera Ahualulco",
    "address": "Carretera Etzatlan-guadalajara S/n ., Ahualulco de Mercado, Jal., CP 46733",
    "city": "Ahualulco de Mercado",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 20.701533,
    "lng": -103.967443
  },
  {
    "id": "51067",
    "name": "Kiosko Herrera y Cairo",
    "address": "Herrera y Cairo 56 Tala Centro, Tala, Jal., CP 45300",
    "city": "Tala",
    "state": "Jalisco",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 20.649581,
    "lng": -103.704481
  },
  {
    "id": "51068",
    "name": "Kiosko Gas Etzatlan",
    "address": "Carretera San Marcos-el Refugio Km.40 No. 246 -c, Etzatlán, Jal., CP 46500",
    "city": "Etzatlán",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 20.774232,
    "lng": -104.072858
  },
  {
    "id": "51069",
    "name": "Kiosko Tequila Centro",
    "address": "Calle Morelos No 290 a, Tequila, Jal., CP 46400",
    "city": "Tequila",
    "state": "Jalisco",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Hot Dogs"
    ],
    "lat": 20.889378,
    "lng": -103.835859
  },
  {
    "id": "51071",
    "name": "Kiosko Zaragoza",
    "address": "Calle Javier Mina No. 73, Ahualulco de Mercado, Jal., CP 46732",
    "city": "Ahualulco de Mercado",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 20.704332,
    "lng": -103.976718
  },
  {
    "id": "51075",
    "name": "Kiosko Gas las Cuatas",
    "address": "Carr Jiquilpan- Guadalajara, Tlajomulco de Zuniga, Jal., CP 45640",
    "city": "Tlajomulco de Zuniga",
    "state": "Jalisco",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Hot Dogs"
    ],
    "lat": 20.488309,
    "lng": -103.492645
  },
  {
    "id": "51076",
    "name": "Kiosko Gas Cocula",
    "address": "Carr Guadalajara-barra de Navidad, Cocula, Jal., CP 48502",
    "city": "Cocula",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 20.373457,
    "lng": -103.820604
  },
  {
    "id": "51077",
    "name": "Kiosko Carretera a Villa Corona",
    "address": "Carr Guadalajara-barra de Navidad, Cocula, Jal., CP 48503",
    "city": "Cocula",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Hot Dogs"
    ],
    "lat": 20.38097,
    "lng": -103.815692
  },
  {
    "id": "51078",
    "name": "Kiosko Gas Tecolotlan",
    "address": "Carr Guadalajara-barra de Navidad, Tecolotlan, Jal., CP 48540",
    "city": "Tecolotlan",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 20.288073,
    "lng": -103.907779
  },
  {
    "id": "51080",
    "name": "Kiosko Gas Circuito Metropolitano",
    "address": "Av. Pedro Parra Centeno, Tlajomulco de Zuniga, Jal., CP 45640",
    "city": "Tlajomulco de Zuniga",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Hot Dogs"
    ],
    "lat": 20.490538,
    "lng": -103.470271
  },
  {
    "id": "51081",
    "name": "Kiosko Crucero de Santa Maria",
    "address": "C. Avila Camacho No. 65 a, San Martin Hidalgo, Jal., CP 46798",
    "city": "San Martin Hidalgo",
    "state": "Jalisco",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Hot Dogs"
    ],
    "lat": 20.381794,
    "lng": -103.862294
  },
  {
    "id": "51084",
    "name": "Kiosko Crucero Potrerillos",
    "address": "Carretera Guadalajara- Morelia, Jocotepec, Jal., CP 45800",
    "city": "Jocotepec",
    "state": "Jalisco",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 20.301374,
    "lng": -103.46852
  },
  {
    "id": "54001",
    "name": "Kiosko Aguamilpa",
    "address": "Carretera Tepic-aguamilpa, Tepic, Nay., CP 63173",
    "city": "Tepic",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 21.494643,
    "lng": -104.828419
  },
  {
    "id": "54002",
    "name": "Kiosko Riveras de la Laguna",
    "address": "General Alfonso Maldonado Velazco, Tepic, Nay., CP 63039",
    "city": "Tepic",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Hot Dogs"
    ],
    "lat": 21.517658,
    "lng": -104.872256
  },
  {
    "id": "54003",
    "name": "Kiosko Infonavit Solidaridad",
    "address": "Carretera Tepic-miramar, Tepic, Nay., CP 63114",
    "city": "Tepic",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 21.52135,
    "lng": -104.933135
  },
  {
    "id": "54004",
    "name": "Kiosko Gas la Cantera",
    "address": "Blvd Aguamilpa, Tepic, Nay., CP 63173",
    "city": "Tepic",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 21.487299,
    "lng": -104.835992
  },
  {
    "id": "54005",
    "name": "Kiosko Zapopan",
    "address": "Av Zapopan, Tepic, Nay., CP 63059",
    "city": "Tepic",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 21.515853,
    "lng": -104.881792
  },
  {
    "id": "54006",
    "name": "Kiosko Gobernadores",
    "address": "Blvd Gobernadores, Tepic, Nay., CP 63175",
    "city": "Tepic",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 21.487626,
    "lng": -104.872639
  },
  {
    "id": "54007",
    "name": "Kiosko Gas Guadalupe Victoria",
    "address": "Av Guadalupe Victoria, Tepic, Nay., CP 63080",
    "city": "Tepic",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 21.51930339,
    "lng": -104.9009304
  },
  {
    "id": "54008",
    "name": "Kiosko Gas San Cayetano",
    "address": "Carret Federal Mexico-nogales Km 896, Tepic, Nay., CP 63511",
    "city": "Tepic",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 21.45364582,
    "lng": -104.82034185
  },
  {
    "id": "54009",
    "name": "Kiosko Alaska",
    "address": "Av Insurgentes, Tepic, Nay., CP 63062",
    "city": "Tepic",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 21.521972,
    "lng": -104.923694
  },
  {
    "id": "54010",
    "name": "Kiosko Gas Colosio",
    "address": "Av Luis Donaldo Colosio, Tepic, Nay., CP 63175",
    "city": "Tepic",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 21.491575,
    "lng": -104.862389
  },
  {
    "id": "54011",
    "name": "Kiosko Libramiento Nogales",
    "address": "Sabino, Tepic, Nay., CP 63180",
    "city": "Tepic",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 21.487176,
    "lng": -104.903862
  },
  {
    "id": "54012",
    "name": "Kiosko Petunias",
    "address": "Petunias, Tepic, Nay., CP 63035",
    "city": "Tepic",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café",
      "Hot Dogs"
    ],
    "lat": 21.530172,
    "lng": -104.871025
  },
  {
    "id": "54013",
    "name": "Kiosko Lagos del Country",
    "address": "Av Lago Superior, Tepic, Nay., CP 63175",
    "city": "Tepic",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Hot Dogs"
    ],
    "lat": 21.482045,
    "lng": -104.862346
  },
  {
    "id": "54014",
    "name": "Kiosko Mexico Poniente",
    "address": "Carretera Tepic-bellavista, Tepic, Nay., CP 63035",
    "city": "Tepic",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Hot Dogs"
    ],
    "lat": 21.534555,
    "lng": -104.873169
  },
  {
    "id": "54015",
    "name": "Kiosko Cantera",
    "address": "Villa de Ibarguengoitia, Tepic, Nay., CP 63173",
    "city": "Tepic",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café",
      "Hot Dogs"
    ],
    "lat": 21.488473,
    "lng": -104.830107
  },
  {
    "id": "54016",
    "name": "Kiosko Parkinson",
    "address": "Av Ing J F Parkinson, Tepic, Nay., CP 63173",
    "city": "Tepic",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Hot Dogs"
    ],
    "lat": 21.48025,
    "lng": -104.857006
  },
  {
    "id": "54017",
    "name": "Kiosko Rio Suchiate",
    "address": "Rio Suchiate, Tepic, Nay., CP 63197",
    "city": "Tepic",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 21.484529,
    "lng": -104.888708
  },
  {
    "id": "54018",
    "name": "Kiosko Montecarlo",
    "address": "Cristo Rey, Tepic, Nay., CP 63059",
    "city": "Tepic",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 21.514994,
    "lng": -104.867833
  },
  {
    "id": "54019",
    "name": "Kiosko Villa de Leon",
    "address": "Villa de Montalvo, Tepic, Nay., CP 63173",
    "city": "Tepic",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 21.485021,
    "lng": -104.823946
  },
  {
    "id": "54020",
    "name": "Kiosko Jacarandas",
    "address": "Av Jacarandas, Tepic, Nay., CP 63138",
    "city": "Tepic",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 21.503898,
    "lng": -104.908989
  },
  {
    "id": "54021",
    "name": "Kiosko Moctezuma",
    "address": "Libramiento Carretero Tepic-mazatlan, Tepic, Nay., CP 63180",
    "city": "Tepic",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 21.484568,
    "lng": -104.901164
  },
  {
    "id": "54022",
    "name": "Kiosko La Huerta",
    "address": "Av Ignacio Allende, Tepic, Nay., CP 63070",
    "city": "Tepic",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 21.518139,
    "lng": -104.911952
  },
  {
    "id": "54023",
    "name": "Kiosko Ojo de Agua",
    "address": "Av Ricardo Flores Magon, Tepic, Nay., CP 63023",
    "city": "Tepic",
    "state": "Nayarit",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 21.531521,
    "lng": -104.900944
  },
  {
    "id": "54024",
    "name": "Kiosko Los Metates",
    "address": "Martires del 26 de Enero, Tepic, Nay., CP 63174",
    "city": "Tepic",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 21.509554,
    "lng": -104.875696
  },
  {
    "id": "54025",
    "name": "Kiosko Castilla",
    "address": "Av Alicante, Tepic, Nay., CP 63196",
    "city": "Tepic",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café",
      "Hot Dogs"
    ],
    "lat": 21.469137,
    "lng": -104.883088
  },
  {
    "id": "54026",
    "name": "Kiosko Puerta del Sol",
    "address": "Av del Sol Pte, Xalisco, Nay., CP 63783",
    "city": "Xalisco",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 21.458692,
    "lng": -104.888512
  },
  {
    "id": "54027",
    "name": "Kiosko Alborada",
    "address": "Vulcano, Xalisco, Nay., CP 63782",
    "city": "Xalisco",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 21.46037,
    "lng": -104.902481
  },
  {
    "id": "54028",
    "name": "Kiosko Bugambilias Xalisco",
    "address": "Oro, Xalisco, Nay., CP 63787",
    "city": "Xalisco",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 21.45224669,
    "lng": -104.90334405
  },
  {
    "id": "54029",
    "name": "Kiosko El Paraiso",
    "address": "Papayos, Tepic, Nay., CP 63038",
    "city": "Tepic",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 21.536123,
    "lng": -104.875663
  },
  {
    "id": "54030",
    "name": "Kiosko El Roble",
    "address": "Roble, Tepic, Nay., CP 63138",
    "city": "Tepic",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café",
      "Hot Dogs"
    ],
    "lat": 21.504474,
    "lng": -104.911452
  },
  {
    "id": "54031",
    "name": "Kiosko Gas Libramiento",
    "address": "Carr Libramiento Carretero, Tepic, Nay., CP 63194",
    "city": "Tepic",
    "state": "Nayarit",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Hot Dogs"
    ],
    "lat": 21.46852,
    "lng": -104.849319
  },
  {
    "id": "54032",
    "name": "Kiosko Colinas del Valle",
    "address": "Camino Viejo a la Cantera, Tepic, Nay., CP 63173",
    "city": "Tepic",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Hot Dogs"
    ],
    "lat": 21.489187,
    "lng": -104.847305
  },
  {
    "id": "54033",
    "name": "Kiosko Ciudad del Valle",
    "address": "Venecia, Tepic, Nay., CP 63157",
    "city": "Tepic",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 21.489147,
    "lng": -104.883465
  },
  {
    "id": "54034",
    "name": "Kiosko Linda Vista",
    "address": "Rio Mississippi, Tepic, Nay., CP 63110",
    "city": "Tepic",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 21.507869,
    "lng": -104.918602
  },
  {
    "id": "54035",
    "name": "Kiosko Los Suaces",
    "address": "Sauces, Tepic, Nay., CP 63197",
    "city": "Tepic",
    "state": "Nayarit",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 21.468784,
    "lng": -104.874718
  },
  {
    "id": "54036",
    "name": "Kiosko Valle de Matatipac",
    "address": "Av Xalisco, Tepic, Nay., CP 63195",
    "city": "Tepic",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 21.473683,
    "lng": -104.869861
  },
  {
    "id": "54038",
    "name": "Kiosko Membrillo",
    "address": "Membrillo, Tepic, Nay., CP 63175",
    "city": "Tepic",
    "state": "Nayarit",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 21.482,
    "lng": -104.866829
  },
  {
    "id": "54040",
    "name": "Kiosko Juarez Compostela",
    "address": "Juarez, Compostela, Nay., CP 63703",
    "city": "Compostela",
    "state": "Nayarit",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 21.237002,
    "lng": -104.889622
  },
  {
    "id": "54041",
    "name": "Kiosko Crucero Compostela",
    "address": "Carretera 200 Crucero Compostela, Compostela, Nay., CP 63700",
    "city": "Compostela",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 21.23295,
    "lng": -104.92441
  },
  {
    "id": "54043",
    "name": "Kiosko Gas Zapopan Ii",
    "address": "Av Zapopan, Tepic, Nay., CP 63059",
    "city": "Tepic",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 21.516297,
    "lng": -104.879711
  },
  {
    "id": "54044",
    "name": "Kiosko Veracruz Xalisco",
    "address": "Veracruz, Xalisco, Nay., CP 63780",
    "city": "Xalisco",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 21.44211789,
    "lng": -104.89881688
  },
  {
    "id": "54045",
    "name": "Kiosko Wenceslao Sandoval",
    "address": "Magnolia, Compostela, Nay., CP 63703",
    "city": "Compostela",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 21.230206,
    "lng": -104.901204
  },
  {
    "id": "54046",
    "name": "Kiosko Marcos Partida",
    "address": "Calle Revolucion, Tepic, Nay., CP 63150",
    "city": "Tepic",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 21.497931,
    "lng": -104.890008
  },
  {
    "id": "54048",
    "name": "Kiosko Guadalajara",
    "address": "Guadalajara, Tepic, Nay., CP 63058",
    "city": "Tepic",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 21.511241,
    "lng": -104.882888
  },
  {
    "id": "54049",
    "name": "Kiosko Gas Guadalupe",
    "address": "Carretera Tepic- San Blas, Tepic, Nay., CP 63062",
    "city": "Tepic",
    "state": "Nayarit",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 21.52814,
    "lng": -104.929508
  },
  {
    "id": "54050",
    "name": "Kiosko Colinas",
    "address": "Av Vista Mirador, Xalisco, Nay., CP 57787",
    "city": "Xalisco",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 21.4574,
    "lng": -104.904613
  },
  {
    "id": "54051",
    "name": "Kiosko Molino",
    "address": "Av Insurgentes, Tepic, Nay., CP 63199",
    "city": "Tepic",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Hot Dogs"
    ],
    "lat": 21.499889,
    "lng": -104.887885
  },
  {
    "id": "54052",
    "name": "Kiosko Plaza Chapultepec",
    "address": "Parque San Pedro, Tepic, Nay., CP 63173",
    "city": "Tepic",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 21.491979,
    "lng": -104.855662
  },
  {
    "id": "54053",
    "name": "Kiosko Villa Hidalgo",
    "address": "Calle Oaxaca, Santiago Ixcuintla, Nay., CP 63550",
    "city": "Santiago Ixcuintla",
    "state": "Nayarit",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 21.748045,
    "lng": -105.23011
  },
  {
    "id": "54056",
    "name": "Kiosko San Blas",
    "address": "Calle Canalizo, San Blas, Nay., CP 63740",
    "city": "San Blas",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Hot Dogs"
    ],
    "lat": 21.54104,
    "lng": -105.285795
  },
  {
    "id": "54058",
    "name": "Kiosko Puga",
    "address": "Calle Monterrey, Tepic, Nay., CP 63500",
    "city": "Tepic",
    "state": "Nayarit",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 21.582255,
    "lng": -104.823999
  },
  {
    "id": "54059",
    "name": "Kiosko La Presa Ii",
    "address": "Durango, Santiago Ixcuintla, Nay., CP 63555",
    "city": "Santiago Ixcuintla",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 21.801893,
    "lng": -105.203685
  },
  {
    "id": "54060",
    "name": "Kiosko Entrada San Blas",
    "address": "Av Juarez, San Blas, Nay., CP 63743",
    "city": "San Blas",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 21.544246,
    "lng": -105.274662
  },
  {
    "id": "54061",
    "name": "Kiosko Gas Santiago",
    "address": "Carretera Salida Internacional Boulevard Santiago, Santiago Ixcuintla, Nay., CP 63311",
    "city": "Santiago Ixcuintla",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 21.813435,
    "lng": -105.198159
  },
  {
    "id": "54062",
    "name": "Kiosko Libramiento a Xalisco",
    "address": "Calle Jardines, Tepic, Nay., CP 63185",
    "city": "Tepic",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 21.479147,
    "lng": -104.898135
  },
  {
    "id": "54063",
    "name": "Kiosko Santiago Estadio",
    "address": "Av Mexico, Santiago Ixcuintla, Nay., CP 63310",
    "city": "Santiago Ixcuintla",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 21.813282,
    "lng": -105.204533
  },
  {
    "id": "54064",
    "name": "Kiosko Tuxpan",
    "address": "Calle Zaragoza, Tuxpan, Nay., CP 63200",
    "city": "Tuxpan",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 21.943954,
    "lng": -105.298324
  },
  {
    "id": "54065",
    "name": "Kiosko Santiago",
    "address": "Santos Degollado, Santiago Ixcuintla, Nay., CP 63300",
    "city": "Santiago Ixcuintla",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 21.810402,
    "lng": -105.207798
  },
  {
    "id": "54066",
    "name": "Kiosko La Presa",
    "address": "Calle Mexico, Santiago Ixcuintla, Nay., CP 63555",
    "city": "Santiago Ixcuintla",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 21.8011,
    "lng": -105.199372
  },
  {
    "id": "54067",
    "name": "Kiosko Independencia",
    "address": "Av. Independencia, Tepic, Nay., CP 63177",
    "city": "Tepic",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 21.502416,
    "lng": -104.883333
  },
  {
    "id": "54068",
    "name": "Kiosko Estrella de Mar",
    "address": "Calamar, Tepic, Nay., CP 63110",
    "city": "Tepic",
    "state": "Nayarit",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 21.516336,
    "lng": -104.920007
  },
  {
    "id": "54069",
    "name": "Kiosko Camichin",
    "address": "Jose Maria Morelos, Tepic, Nay., CP 63508",
    "city": "Tepic",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 21.466399,
    "lng": -104.800016
  },
  {
    "id": "54070",
    "name": "Kiosko Villas del Nayar",
    "address": "Avenida Principal, Tepic, Nay., CP 63177",
    "city": "Tepic",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 21.49635852,
    "lng": -104.87776467
  },
  {
    "id": "54071",
    "name": "Kiosko Villa Hidalgo Ii",
    "address": "Crispin Duran Zamorano, Santiago Ixcuintla, Nay., CP 63550",
    "city": "Santiago Ixcuintla",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 21.73892,
    "lng": -105.23623
  },
  {
    "id": "54072",
    "name": "Kiosko Tuxpan Oriente",
    "address": "Boulevard Independencia., Tuxpan, Nay., CP 63202",
    "city": "Tuxpan",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 21.941747,
    "lng": -105.288833
  },
  {
    "id": "54073",
    "name": "Kiosko Gas Puga",
    "address": "Av Mexico, Tepic, Nay., CP 63500",
    "city": "Tepic",
    "state": "Nayarit",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 21.586144,
    "lng": -104.839014
  },
  {
    "id": "54074",
    "name": "Kiosko Morelos",
    "address": "Prolongacion Morelos, Tepic, Nay., CP 63060",
    "city": "Tepic",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 21.522217,
    "lng": -104.915781
  },
  {
    "id": "54075",
    "name": "Kiosko Pantanal",
    "address": "Av 20 de Noviembre, Xalisco, Nay., CP 63792",
    "city": "Xalisco",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 21.427961,
    "lng": -104.859966
  },
  {
    "id": "54076",
    "name": "Kiosko Juan Escutia",
    "address": "Jose Maria Morelos, Tepic, Nay., CP 63080",
    "city": "Tepic",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 21.512414,
    "lng": -104.900628
  },
  {
    "id": "54077",
    "name": "Kiosko Nicolas Echeverria",
    "address": "Nicolas Echeverria, Santiago Ixcuintla, Nay., CP 63320",
    "city": "Santiago Ixcuintla",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 21.814326,
    "lng": -105.21137
  },
  {
    "id": "54078",
    "name": "Kiosko San Vicente",
    "address": "Carretera Nayarit el Tamarindo Santa Cruz, Rosamorada, Nay., CP 63645",
    "city": "Rosamorada",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 21.954211,
    "lng": -105.294956
  },
  {
    "id": "54079",
    "name": "Kiosko Samao",
    "address": "Calle Benito Juarez No 201, Tepic, Nay., CP 63830",
    "city": "Tepic",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 21.329435,
    "lng": -104.588658
  },
  {
    "id": "54080",
    "name": "Kiosko Villas del Roble",
    "address": "Av Paseo del Geranio No 18, Tepic, Nay., CP 63173",
    "city": "Tepic",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Hot Dogs"
    ],
    "lat": 21.495489,
    "lng": -104.823114
  },
  {
    "id": "54081",
    "name": "Kiosko Ixtlán del Rio",
    "address": "Av. Miguel Hidalgo, Ixtlan del Rio, Nay., CP 63958",
    "city": "Ixtlan del Rio",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Hot Dogs"
    ],
    "lat": 21.037475,
    "lng": -104.381314
  },
  {
    "id": "54082",
    "name": "Kiosko Ruiz",
    "address": "Blvd Tijuanita, Ruiz, Nay., CP 63625",
    "city": "Ruiz",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 21.954169,
    "lng": -105.132228
  },
  {
    "id": "54083",
    "name": "Kiosko La Virocha",
    "address": "Av. Insurgentes, San Blas, Nay., CP 63758",
    "city": "San Blas",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 21.676175,
    "lng": -105.328231
  },
  {
    "id": "54084",
    "name": "Kiosko America",
    "address": "Av. America, Tepic, Nay., CP 63194",
    "city": "Tepic",
    "state": "Nayarit",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café",
      "Hot Dogs"
    ],
    "lat": 21.467689,
    "lng": -104.858969
  },
  {
    "id": "54086",
    "name": "Kiosko Armadillo",
    "address": "Av. Palomas, Tepic, Nay., CP 63194",
    "city": "Tepic",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 21.46047,
    "lng": -104.8553
  },
  {
    "id": "54089",
    "name": "Kiosko Nuevo Mexico",
    "address": "Amado Nervo, Santiago Ixcuintla, Nay., CP 63340",
    "city": "Santiago Ixcuintla",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 21.813167,
    "lng": -105.217114
  },
  {
    "id": "54090",
    "name": "Kiosko Lerdo de Tejada",
    "address": "Sebastian Lerdio de Tejada, Tepic, Nay., CP 63080",
    "city": "Tepic",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 21.51762,
    "lng": -104.9048
  },
  {
    "id": "54091",
    "name": "Kiosko Tecuala",
    "address": "Allende, Tecuala, Nay., CP 63453",
    "city": "Tecuala",
    "state": "Nayarit",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 22.39671,
    "lng": -105.46406
  },
  {
    "id": "54092",
    "name": "Kiosko Plaza Ruiz",
    "address": "Amado Nervo, Ruiz, Nay., CP 63620",
    "city": "Ruiz",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Hot Dogs"
    ],
    "lat": 21.950842,
    "lng": -105.145706
  },
  {
    "id": "54093",
    "name": "Kiosko Gas Acaponeta",
    "address": "Av, Prisciliano Sanchez, Acaponeta, Nay., CP 63435",
    "city": "Acaponeta",
    "state": "Nayarit",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 22.49069,
    "lng": -105.37041
  },
  {
    "id": "54095",
    "name": "Kiosko Mololoa",
    "address": "Tenochtitlan, Tepic, Nay., CP 63050",
    "city": "Tepic",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 21.518264,
    "lng": -104.886753
  },
  {
    "id": "54096",
    "name": "Kiosko Querétaro",
    "address": "Allende, Acaponeta, Nay., CP 63430",
    "city": "Acaponeta",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 22.492644,
    "lng": -105.362881
  },
  {
    "id": "54097",
    "name": "Kiosko Iturbide",
    "address": "Cuitlahuac, Tepic, Nay., CP 63180",
    "city": "Tepic",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 21.490076,
    "lng": -104.89792
  },
  {
    "id": "54098",
    "name": "Kiosko Ixtlan Hidalgo",
    "address": "Hidalgo, Ixtlan del Rio, Nay., CP 63954",
    "city": "Ixtlan del Rio",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 21.033888,
    "lng": -104.36238
  },
  {
    "id": "54101",
    "name": "Kiosko Las Vias",
    "address": "Prolongacion 21 de Febrero, Tepic, Nay., CP 63177",
    "city": "Tepic",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café"
    ],
    "lat": 21.506479,
    "lng": -104.876482
  },
  {
    "id": "54102",
    "name": "Kiosko Marina",
    "address": "Moctezuma, Ixtlan del Rio, Nay., CP 63954",
    "city": "Ixtlan del Rio",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 23:00",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 21.037976,
    "lng": -104.366592
  },
  {
    "id": "54103",
    "name": "Kiosko Ruinas Jauja",
    "address": "Ixtapalapa, Tepic, Nay., CP 63083",
    "city": "Tepic",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 21.526475,
    "lng": -104.892947
  },
  {
    "id": "54104",
    "name": "Kiosko Santiago Zaragoza",
    "address": "Zaragoza, Santiago Ixcuintla, Nay., CP 63360",
    "city": "Santiago Ixcuintla",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA",
      "Café",
      "Hot Dogs"
    ],
    "lat": 21.807478,
    "lng": -105.203808
  },
  {
    "id": "54105",
    "name": "Kiosko Emiliano Zapata",
    "address": "Emiliano Zapata, San Blas, Nay., CP 63743",
    "city": "San Blas",
    "state": "Nayarit",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios",
      "Café"
    ],
    "lat": 21.537783,
    "lng": -105.280412
  },
  {
    "id": "54109",
    "name": "Kiosko Mexico Norte",
    "address": "Av Mexico No. 2 B, Tepic, Nay., CP 63038",
    "city": "Tepic",
    "state": "Nayarit",
    "distance": "",
    "hours": "24 horas",
    "services": [
      "Recargas",
      "YAYA",
      "Pago de servicios"
    ],
    "lat": 21.537357,
    "lng": -104.871018
  },
  {
    "id": "54111",
    "name": "Kiosko Insurgentes",
    "address": "Calle Insurgentes, No.1, Rosamorada, Nay., CP 63630",
    "city": "Rosamorada",
    "state": "Nayarit",
    "distance": "",
    "hours": "6:00 - 00:00",
    "services": [
      "Recargas",
      "YAYA"
    ],
    "lat": 22.120702,
    "lng": -105.207465
  }
];
