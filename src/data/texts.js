// src/data/texts.js

const texts = {
  // Textos del componente Home.jsx
  welcomeMessage: "Bienvenidos a",
  title: "El Rincón del Sabor",
  description: "Un lugar donde cada creación dulce cuenta una historia. Con más de tres años de experiencia en el arte de la repostería, en Dulce Inspiración nos esforzamos por hacer de cada bocado una experiencia única y memorable. Nuestra pasión por los detalles se refleja en cada uno de nuestros pasteles, postres y dulces personalizados, todos hechos con amor y dedicación para nuestros clientes.",

  // Textos del componente Especialidad.jsx
  especialidadesTitle: "Los más pedidos",
  especialidadesDescription: "Nuestros clientes no pueden resistirse a nuestros productos estrella como la Torta de Vainilla con Frutas, el Brownie de Triple Chocolate y los Cupcakes Decorados.",

  especialidadesList: [
    {
      name: "Torta de Vainilla con Frutas",
      description: "Nuestra Torta de Vainilla con Frutas es una combinación perfecta de suavidad y frescura. Con capas esponjosas de bizcocho de vainilla, rellenas de crema pastelera y una variedad de frutas frescas, esta torta es ideal para cualquier celebración o para disfrutar en cualquier momento del día.",
      precio: "$1500",
      img: "/plantillaPasteleria/esp/tortaDeVainillaConFrutas2.png"
    },
    {
      name: "Brownie de Triple Chocolate",
      description: "El Brownie de Triple Chocolate es un sueño hecho realidad para los amantes del chocolate. Este delicioso postre combina tres tipos de chocolate (negro, con leche y blanco) en una textura húmeda y fundente, perfecta para los paladares más exigentes.",
      precio: "$850",
      img: "/plantillaPasteleria/esp/browniedeTripleChocolate5.png"
    },
    {
      name: "Cupcakes Decorados",
      description: "Nuestros Cupcakes Decorados no solo son deliciosos, sino también una verdadera obra de arte. Disponibles en una variedad de sabores, desde vainilla y fresa hasta red velvet, están decorados a mano con fondant y buttercream para cualquier ocasión.",
      precio: "$600",
      img: "/plantillaPasteleria/esp/CupcakesDecorados2.png"
    }
  ],

  // Textos del componente PreguntasFrecuentes.jsx (se mantienen igual)
  preguntasFrecuentesTitle: "Preguntas Frecuentes",
  preguntasFrecuentesList: [
    {
      id: 1,
      pregunta: "¿Realizan tortas personalizadas para eventos especiales?",
      respuesta: "Sí,ofrecemos tortas personalizadas para bodas, cumpleaños, aniversarios y otros eventos. Puedes elegir el diseño, sabor y tamaño según tus preferencias. Contáctanos con al menos una semana de anticipación para asegurarte de que podamos cumplir con tu pedido."
    },
    // {
    //   id: 2,
    //   pregunta: "¿Ofrecen opciones sin gluten o para personas con alergias?",
    //   respuesta: "Sí, contamos con una selección de productos sin gluten, sin lácteos y sin frutos secos para personas con alergias alimentarias. Por favor, indícanos tus necesidades al realizar el pedido para garantizar que podamos prepararlo de manera segura."
    // },
    {
      id: 3,
      pregunta: "¿Cómo puedo hacer un pedido?",
      respuesta: "Puedes hacer tu pedido directamente en nuestra tienda, a través de nuestra página web, o llamando al [Número de Teléfono]. También ofrecemos la opción de pedir a través de nuestras redes sociales."
    },
    {
      id: 4,
      pregunta: "¿Cuánto tiempo antes debo hacer mi pedido?",
      respuesta: "Para pedidos de productos regulares, te recomendamos hacer tu pedido con al menos 48 horas de anticipación. Para tortas personalizadas o grandes cantidades, es mejor realizar el pedido con al menos una semana de anticipación."
    },
    {
      id: 5,
      pregunta: "¿Tienen servicio de delivery?",
      respuesta: "Sí, ofrecemos servicio de delivery a domicilio. Puedes solicitarlo al hacer tu pedido. El costo del delivery varía según la ubicación y se confirmará al momento del pedido."
    },
    {
      id: 6,
      pregunta: "¿Dónde están ubicados?",
      respuesta: "Estamos ubicados en [Dirección del Negocio]. Visítanos en nuestra tienda para disfrutar de nuestras delicias recién horneadas."
    },
    // {
    //   id: 7,
    //   pregunta: "¿Puedo encontrar sus productos en otros puntos de venta?",
    //   respuesta: "Sí, además de nuestra tienda, también puedes encontrar algunos de nuestros productos en cafeterías seleccionadas en [Ciudad/Zona]. Consulta nuestras redes sociales para conocer los puntos de venta actualizados."
    // }
    // ...otros textos de preguntas frecuentes no cambian
  ],

  // Textos del componente About
  aboutTitle: "Sobre Nosotros",
  aboutp1: "Creemos que cada plato cuenta una historia única. Nuestra pasión por la cocina nació de momentos compartidos alrededor de la mesa, donde se unen la tradición y la creatividad para ofrecer experiencias culinarias inolvidables. Inspirados por el amor a la gastronomía y el deseo de brindar un espacio acogedor, creamos un lugar donde cada ingrediente y receta tienen un propósito especial: hacer sentir a nuestros comensales como en casa.",
  aboutp2: "Cada plato es elaborado con dedicación y esmero. Nos enorgullece utilizar ingredientes frescos y de alta calidad, seleccionados cuidadosamente para resaltar los sabores auténticos de nuestra cocina. Ya sea un plato tradicional o una creación innovadora, nuestra misión es ofrecer comida que no solo sea deliciosa, sino que también capture la esencia de nuestra pasión por la gastronomía.",
  aboutp3: "El nombre representa nuestro compromiso de ser un lugar donde se encuentren los sabores más auténticos y donde cada cliente pueda disfrutar de un momento especial. Nos esforzamos por ser parte de tus celebraciones y momentos importantes, brindando un servicio cálido y personalizado que te haga sentir parte de nuestra familia.",
  aboutp4: "Mirando hacia el futuro, aspiramos a seguir innovando y expandiendo nuestras propuestas culinarias, siempre fieles a nuestros valores de calidad, hospitalidad y pasión por la cocina. Nos enorgullece ser un restaurante que valora el buen sabor, el servicio al cliente, y la alegría de compartir una buena comida. El Rincón del Sabor es más que un restaurante; es un lugar donde los momentos y los sabores se encuentran para crear recuerdos inolvidables.",

  // textos del componente servicios (se mantienen igual)
  serviciosTitle: "Servicio de Decoración para Eventos",
  serviciosList: [
    { 
      name: "",
      p1: "En Dulce Inspiración, no solo nos especializamos en crear postres deliciosos, sino que también llevamos el arte de la repostería al siguiente nivel con nuestro servicio de decoración para eventos...",
      // Los textos de servicios continúan sin cambios...
    }
  ]
};

export default texts;
