const initialState = {
  isLoading: false,
  product: null,
  products: []
}
/* const initialState = {
  isLoading: false,
  product: null,
  products: [
    {
      id: 1,
      name: 'CHAMARRA DEPORTIVA ESSENTIALS - Adidas',
      description:
        'Protégete del frío con estilo al terminar el entrenamiento. Esta chamarra luce las clásicas 3 Franjas en contraste de los hombros a los puños y un discreto logo de adidas en el pecho. Está confeccionada en felpa suave de algodón y poliéster reciclado para una sensación de máxima comodidad.',
      price: 1499,
      imgUrl:
        'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/4f33ca7b6a5d44908ba1a92200ca0e54_9366/Chamarra_Deportiva_Essentials_3_Franjas_Azul_DU0471_01_laydown.jpg',
      stock: true,
      categoryId: 1
    },
    {
      id: 2,
      name: 'CHAMARRA DEPORTIVA ESSENTIALS - Adidas',
      description:
        'Protégete del frío con estilo al terminar el entrenamiento. Esta chamarra luce las clásicas 3 Franjas en contraste de los hombros a los puños y un discreto logo de adidas en el pecho. Está confeccionada en felpa suave de algodón y poliéster reciclado para una sensación de máxima comodidad.',
      price: 1499.0,
      imgUrl:
        'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/44780bebe5fd41109f60abc700b9457f_9366/Chamarra_Deportiva_Essentials_3_Franjas_Rojo_GD5237_21_model.jpg',
      stock: true,
      categoryId: 1
    },
    {
      id: 3,
      name: 'M MT FZ HD - Adidas',
      description:
        'M Mt Fz Hd es un nuevo producto para Hombre de adidas. Te invitamos a ver las imágenes para apreciar más detalles desde diferentes ángulos. Si ya conoces M Mt Fz Hd puedes dejar una reseña abajo; siempre nos encanta conocer tu opinión.',
      price: 1599,
      imgUrl:
        'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/82119615f5e848ee9b06aca000abf820_9366/M_MT_FZ_HD_Azul_GM3213_21_model.jpg',
      stock: true,
      categoryId: 1
    },
    {
      id: 4,
      name: 'SUDADERA ESSENTIALS - Adidas',
      description:
        'Eres una persona muy activa, por eso, necesitas una sudadera de color sólido que te acompañe durante el día. Desde tu sesión de running matutina hasta el café con amigos o la rutina nocturna en el gimnasio, esta sudadera adidas te acompaña de inicio a fin. Está confeccionada en un suave tejido de felpa francesa que te mantiene siempre listo para la acción.',
      price: 999.0,
      imgUrl:
        'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/bd9261baac384d3f965fac8000e63103_9366/Sudadera_Essentials_3_Franjas_Felpa_Francesa_Azul_GK9079_21_model.jpg',
      stock: true,
      categoryId: 1
    },
    {
      id: 5,
      name: 'PLAYERA POLO PRIMEBLUE DESIGNED - Adidas',
      description:
        'Cuando estás siempre en movimiento, necesitas una polo que pueda seguirte el ritmo. Esta playera polo de manga corta tiene el estilo clásico de una polo y la tecnología moderna de ropa deportiva con tecnología de absorción AEROREADY para mantener tu piel seca, tu cuerpo cómodo y tu mente listo para todo.',
      price: 799.0,
      imgUrl:
        'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f22e2a15b6ad433ca95ead5600eda6dc_9366/Playera_Polo_Primeblue_Designed_To_Move_Sport_3_Franjas_Azul_H13873_21_model.jpg',
      stock: true,
      categoryId: 1
    },
    {
      id: 6,
      name: 'Sudadera - Adidas',
      description:
        'Protégete del frío con estilo al terminar el entrenamiento. Esta chamarra luce las clásicas 3 Franjas en contraste de los hombros a los puños y un discreto logo de adidas en el pecho. Está confeccionada en felpa suave de algodón y poliéster reciclado para una sensación de máxima comodidad.',
      price: 999.0,
      imgUrl:
        'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/36dfb9af9c2f4f45bde9adbf010605fa_9366/Sudadera_con_Gorro_Essentials_3_Franjas_Felpa_Francesa_Azul_HE4427_21_model.jpg',
      stock: true,
      categoryId: 1
    },
    {
      id: 7,
      name: 'PLAYERA POLO DRIVE HEATHER - Adidas',
      description:
        'Golpea la bola con un estilo clásico y cómodo. Esta playera polo de golf adidas se ha confeccionado en un tejido ligero con tecnología transpirable AEROREADY que mantiene la piel seca durante todo el recorrido. El diseño jaspeado aporta un toque informal a tu look.',
      price: 1199.0,
      imgUrl:
        'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f8d1be6292044f638abfade401467238_9366/Playera_Polo_Drive_Heather_Gris_H56774_21_model.jpg',
      stock: true,
      categoryId: 1
    },
    {
      id: 8,
      name: 'CHAMARRA SST PRIMEBLUE- Adidas',
      description:
        'Una chamarra sin precedentes. Puede que se vea solo como una prenda icónica clásica de adidas, pero esta chamarra SST Primeblue simboliza el cambio. Su diseño está confeccionado con Parley Ocean Plastic, hecho con residuos plásticos recuperados de las costas. Esta chamarra es elegante y buena para el planeta. Úsala y únete al compromiso de adidas para ayudar a erradicar los residuos plásticos.',
      price: 1279,
      imgUrl:
        'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/6483c4ee46f846b7a369ad6a012bc8da_9366/Chamarra_SST_Primeblue_Granate_H34594_21_model.jpg',
      stock: true,
      categoryId: 1
    },
    {
      id: 9,
      name: 'SUDADERA HOLGADA ESSENTIALS- Adidas',
      description:
        'No subestimes el poder de una buena sudadera. Esta de adidas se puede combinar con varios atuendos, además de proporcionar una gran comodidad y reflejar tu confianza en ti mismo con el logo Badge of Sport impreso en la parte delantera. Póntela y disfruta.',
      price: 899,
      imgUrl:
        'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5421d41d40be453cb690ada000c3f944_9366/Sudadera_Holgada_Essentials_Logo_Azul_HH8834_21_model.jpg',
      stock: true,
      categoryId: 1
    },
    {
      id: 10,
      name: 'PLAYERA POLO TIRO 21 - Adidas',
      description:
        'Nacida en la cancha de fútbol. Perfecta para todo momento y lugar. Tiro debutó como una línea de prendas para entrenar, pero sus diseños definidos lograron llegar más allá de la cancha. Esta playera adidas tiene la textura de una polo tradicional. Incorpora tecnología de absorción AEROREADY que se encarga de mantenerte cómodo después del partido y el cuello henley le confiere un toque de sofisticación.',
      price: 664.3,
      imgUrl:
        'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/9b1b85f84c224f53910cac8000f4424d_9366/Playera_Polo_Tiro_21_Negro_GM7367_21_model.jpg',
      stock: true,
      categoryId: 1
    },
    {
      id: 11,
      name: 'PLAYERA POLO 3 FRANJAS - Adidas',
      description:
        'Muestra tu amor por adidas cada vez que pisas el campo de golf. El tejido texturizado de esta polo para jóvenes es muy suave al tacto para que puedas jugar con total comodidad. Ofrece protección contra los rayos UV para que puedas jugar con tranquilidad en los días con sol.',
      price: 699,
      imgUrl:
        'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/68325572c71d4ed2b52dac75013b59cd_9366/Playera_Polo_3_Franjas_Azul_GR1286_01_laydown.jpg',
      stock: true,
      categoryId: 1
    },
    {
      id: 12,
      name: 'NVLTY CORE POLO - Adidas',
      description:
        'Nvlty Core Polo es un nuevo producto para Hombre de adidas. Te invitamos a ver las imágenes para apreciar más detalles desde diferentes ángulos. Si ya conoces Nvlty Core Polo puedes dejar una reseña abajo; siempre nos encanta conocer tu opinión.',
      price: 1199,
      imgUrl:
        'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a86082c192a74cd78c9eadde018831d8_9366/NVLTY_CORE_POLO_Azul_HF8490_21_model.jpg',
      stock: true,
      categoryId: 1
    }
  ]
} */

export default initialState
