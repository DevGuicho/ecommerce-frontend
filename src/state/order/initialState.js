const initialState = {
  orders: [
    {
      id: 1,
      fecha: Date.now(),
      userId: 1,
      totalPago: 1599,
      totalProductos: 5,
      estado: 'pagado'
    },
    {
      id: 2,
      fecha: Date.now(),
      userId: 1,
      totalPago: 1599,
      totalProductos: 5,
      estado: 'pagado'
    },
    {
      id: 3,
      fecha: Date.now(),
      userId: 1,
      totalPago: 1599,
      totalProductos: 5,
      estado: 'pagado'
    },
    {
      id: 4,
      fecha: Date.now(),
      userId: 1,
      totalPago: 1599,
      totalProductos: 5,
      estado: 'pagado'
    }
  ],
  order: null,
  items: []
}

export const items = [
  {
    id: 10,
    name: 'PLAYERA POLO TIRO 21 - Adidas',
    description:
      'Nacida en la cancha de fútbol. Perfecta para todo momento y lugar. Tiro debutó como una línea de prendas para entrenar, pero sus diseños definidos lograron llegar más allá de la cancha. Esta playera adidas tiene la textura de una polo tradicional. Incorpora tecnología de absorción AEROREADY que se encarga de mantenerte cómodo después del partido y el cuello henley le confiere un toque de sofisticación.',
    price: 664.3,
    imgUrl:
      'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9b1b85f84c224f53910cac8000f4424d_9366/Playera_Polo_Tiro_21_Negro_GM7367_21_model.jpg',
    stock: true,
    categoryId: 1,
    cantidad: 2
  }
]

export default initialState
