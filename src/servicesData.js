export const servicesData = [
  {
    id: 'tabiques',
    title: 'Tabiques',
    description: 'Sistemas de construcción en seco ideales para crear y dividir espacios interiores de forma rápida y limpia. Gracias a su diseño versátil, ofrecen soluciones eficientes y de alta calidad tanto en viviendas como en espacios comerciales.',
    image: '/image/service_tabiques.jpg',
    intro: 'Los tabiques de Placa de Yeso Laminado (PYL) son paredes interiores ligeras y no portantes. Están formados por una estructura de perfiles de acero galvanizado (canales y montantes) con placas atornilladas a ambos lados.',
    sections: [
      {
        type: 'structures',
        title: 'Tipos',
        description: 'Los tabiques varían según el número de estructuras metálicas, el tipo y el ancho del perfil utilizado:',
        items: [
          {
            name: 'Tabique simple',
            desc: 'Una estructura de perfiles metálicos con una o varias placas a cada lado. En su interior se coloca habitualmente lana mineral como aislante.'
          },
          {
            name: 'Tabique doble',
            desc: 'Dos estructuras metálicas independientes, a veces separadas por una cámara de aire. Se utiliza cuando se requiere un aislamiento acústico muy elevado entre estancias.'
          },
          {
            name: 'Sistemas especiales (Shaftwall)',
            desc: 'Tabiques diseñados para el cerramiento de huecos de ascensor o patinillos de instalaciones. Ofrecen alta resistencia al fuego y se instalan desde una sola cara.'
          }
        ]
      },
      {
        type: 'plaques',
        title: 'Clasificación',
        description: 'Su clasificación principal depende del tipo de placa utilizada, que determina sus prestaciones técnicas. Cada tipo de placa se identifica por un color:',
        items: [
          {
            name: 'Estándar (Blanco/Gris)',
            desc: 'Placa básica de yeso y cartón. Ideal para zonas secas (dormitorios, pasillos, salones).',
            badge: 'Zonas secas',
            icon: 'FileText',
            color: 'blue'
          },
          {
            name: 'Hidrófuga (Verde)',
            desc: 'Placa tratada con silicona para repeler el agua. Recomendada para zonas húmedas como baños y cocinas.',
            badge: 'Resistente al agua',
            icon: 'Droplets',
            color: 'teal'
          },
          {
            name: 'Ignífuga (Rosa)',
            desc: 'Placa con fibra de vidrio para ofrecer mayor resistencia al fuego. Ideal para cocinas, zonas de calderas o vías de evacuación.',
            badge: 'Resistente al fuego',
            icon: 'Flame',
            color: 'rose'
          },
          {
            name: 'Alta dureza (Amarilla)',
            desc: 'Placa con mayor densidad y resistencia al impacto. Perfecta para zonas de mucho tránsito (pasillos, colegios, hospitales).',
            badge: 'Alta Dureza',
            icon: 'Shield',
            color: 'indigo'
          },
          {
            name: 'Acústica (Morada)',
            desc: 'Placa con núcleo de alta densidad que reduce significativamente la transmisión de ruido entre estancias.',
            badge: 'Aislamiento Acústico',
            icon: 'Volume2',
            color: 'purple'
          }
        ]
      }
    ]
  },
  {
    id: 'trasdosados',
    title: 'Trasdosados',
    description: 'Sistema eficaz para renovar y mejorar paredes existentes. Son ideales tanto para proyectos de rehabilitación como en obra nueva, gracias a su versatilidad, rapidez de instalación y alto rendimiento.',
    image: '/image/service_trasdosados.jpg',
    intro: 'Los trasdosados de Placa de Yeso Laminado (PYL) son revestimientos interiores que se aplican sobre un muro existente para mejorar el aislamiento térmico y acústico u ocultar instalaciones.',
    sections: [
      {
        type: 'installation_methods',
        title: 'Tipos',
        description: 'Existen tres sistemas principales según su método de instalación:',
        items: [
          {
            name: 'Trasdosado Directo',
            how: 'Las placas se pegan directamente al muro mediante pelladas de pasta de agarre.',
            advantages: 'La opción más económica, rápida de instalar y que menos espacio resta a la estancia.',
            when: 'Solo en paredes muy planas, en buen estado y sin problemas de humedad. Admite placas con aislante ya adherido (EPS o lana mineral).'
          },
          {
            name: 'Trasdosado Semidirecto (Maestra Omega)',
            how: 'Las placas se atornillan a perfiles metálicos en forma de "omega" fijados y nivelados sobre el muro existente.',
            advantages: 'Corrige desniveles en paredes irregulares y facilita el paso de pequeñas instalaciones por detrás de la placa.',
            when: 'En reformas donde el muro está deteriorado pero es estable y sin humedad directa.'
          },
          {
            name: 'Trasdosado Autoportante',
            how: 'Se construye una estructura metálica independiente separada del muro, a la que se atornillan las placas PYL.',
            advantages: 'Máximo aislamiento térmico y acústico gracias a la cámara de aire rellena de lana mineral. Permite ocultar grandes instalaciones (tuberías, electricidad) sin picar el muro.',
            when: 'Ideal en obra nueva, reformas integrales, paredes con humedad o cuando se busca máxima insonorización.'
          }
        ]
      },
      {
        type: 'plaques',
        title: 'Clasificación',
        description: 'Su clasificación principal depende del tipo de placa utilizada, que determina sus prestaciones técnicas. Cada tipo de placa se identifica por un color:',
        items: [
          {
            name: 'Estándar (Blanca)',
            desc: 'Placa básica de yeso y cartón. Ideal para zonas secas (dormitorios, pasillos, salones).',
            badge: 'Zonas secas',
            icon: 'FileText',
            color: 'blue'
          },
          {
            name: 'Hidrófuga (Verde)',
            desc: 'Placa tratada con silicona para repeler el agua. Recomendada para zonas húmedas como baños y cocinas.',
            badge: 'Resistente al agua',
            icon: 'Droplets',
            color: 'teal'
          },
          {
            name: 'Ignífuga (Rosa)',
            desc: 'Placa con fibra de vidrio para ofrecer mayor resistencia al fuego. Ideal para cocinas, zonas de calderas o vías de evacuación.',
            badge: 'Resistente al fuego',
            icon: 'Flame',
            color: 'rose'
          },
          {
            name: 'Alta dureza (Amarilla)',
            desc: 'Placa con mayor densidad y resistencia al impacto. Perfecta para zonas de mucho tránsito (pasillos, colegios, hospitales).',
            badge: 'Alta Dureza',
            icon: 'Shield',
            color: 'indigo'
          },
          {
            name: 'Acústica (Morada)',
            desc: 'Placa con núcleo de alta densidad que reduce significativamente la transmisión de ruido entre estancias.',
            badge: 'Aislamiento Acústico',
            icon: 'Volume2',
            color: 'purple'
          }
        ]
      }
    ]
  },
  {
    id: 'techos-continuos',
    title: 'Techos continuos',
    description: 'Falsos techos formados por placas con juntas tratadas para conseguir una superficie lisa y uniforme. Se instalan suspendidos mediante perfilería oculta, permiten ocultar instalaciones y lograr acabados limpios y minimalistas.',
    image: '/image/service_techos_continuos.jpg',
    intro: 'Los techos continuos de Placa de Yeso Laminado (PYL) son falsos techos formados por una estructura metálica oculta sobre la que se atornillan las placas, consiguiendo una superficie lisa y uniforme sin juntas visibles.',
    sections: [
      {
        type: 'structures_detail',
        title: 'Tipos',
        items: [
          { name: 'Techos Directos', desc: 'Las placas se atornillan a perfiles Omega fijados directamente al forjado. Ideales cuando el techo ya está nivelado, ya que apenas restan altura a la estancia.' },
          { name: 'Techos Suspendidos Simples', desc: 'La estructura se cuelga del forjado mediante varillas y horquillas, creando un espacio interior (plénum) para ocultar instalaciones o instalar aislantes.' },
          { name: 'Techos Suspendidos Dobles', desc: 'Doble estructura metálica con maestras primarias y secundarias. Permite salvar grandes luces, soportar mayor peso y lograr una nivelación milimétrica.' },
          { name: 'Techos Biapoyados', desc: 'El techo se apoya perimetralmente en las paredes sin necesidad de usar sistemas de anclaje.' }
        ]
      },
      {
        type: 'plaques',
        title: 'Clasificación',
        description: 'Su clasificación principal depende del tipo de placa utilizada, que determina sus prestaciones técnicas. Cada tipo de placa se identifica por un color:',
        items: [
          {
            name: 'Estándar (Blanca)',
            desc: 'Placa básica de yeso y cartón. Ideal para zonas secas (dormitorios, pasillos, salones).',
            badge: 'Zonas secas',
            icon: 'FileText',
            color: 'blue'
          },
          {
            name: 'Hidrófuga (Verde)',
            desc: 'Placa tratada con silicona para repeler el agua. Recomendada para zonas húmedas como baños y cocinas.',
            badge: 'Resistente al agua',
            icon: 'Droplets',
            color: 'teal'
          },
          {
            name: 'Ignífuga (Rosa)',
            desc: 'Placa con fibra de vidrio para ofrecer mayor resistencia al fuego. Ideal para cocinas, zonas de calderas o vías de evacuación.',
            badge: 'Resistente al fuego',
            icon: 'Flame',
            color: 'rose'
          },
          {
            name: 'Alta dureza (Amarilla)',
            desc: 'Placa con mayor densidad y resistencia al impacto. Perfecta para zonas de mucho tránsito (pasillos, colegios, hospitales).',
            badge: 'Alta Dureza',
            icon: 'Shield',
            color: 'indigo'
          },
          {
            name: 'Acústica (Morada)',
            desc: 'Placa con núcleo de alta densidad que reduce significativamente la transmisión de ruido entre estancias.',
            badge: 'Aislamiento Acústico',
            icon: 'Volume2',
            color: 'purple'
          }
        ]
      }
    ]
  },
  {
    id: 'techos-registrables',
    title: 'Techos registrables o desmontables',
    description: 'Falsos techos formados por una estructura de perfiles vistos en forma de cuadrícula, sobre la que se colocan placas desmontables. Su principal ventaja es que permiten acceder fácilmente al espacio superior para instalaciones, mantenimiento o reparaciones sin necesidad de obra posterior.',
    image: '/image/service_techos_registrables.jpg',
    intro: 'Los techos registrables (o desmontables) son sistemas modulares suspendidos que permiten ocultar instalaciones y acceder fácilmente a ellas fácilmente cuando sea necesario, simplemente retirando las placas.',
    sections: [
      {
        type: 'materials',
        title: 'Tipos según el material',
        description: 'Ofrecen distintas prestaciones estéticas y funcionales según el material elegido:',
        items: [
          { name: 'Placa de Yeso Laminado', desc: 'Los más populares por su relación calidad-precio y versatilidad. Disponibles en acabado liso, vinílico (lavable, para cocinas o sanitarios) o perforado (mejora la acústica).' },
          { name: 'Fibra mineral o de vidrio', desc: 'Muy ligeros y con excelente absorción acústica y aislamiento térmico. Ideales para oficinas y centros educativos.' },
          { name: 'Metal (Aluminio o acero)', desc: 'Destacan por su gran durabilidad, resistencia a la humedad y estética moderna. Habituales en zonas de paso, aeropuertos y espacios exteriores cubiertos.' },
          { name: 'Escayola', desc: 'Opción clásica y económica con acabados decorativos. Especialmente recomendada para locales comerciales y hogares.' }
        ]
      },
      {
        type: 'structures_detail',
        title: 'Tipos según la perfilería',
        description: 'La perfilería metálica (oculta o visible) determina el acabado visual final:',
        items: [
          { name: 'Borde visto (A)', desc: 'La perfilería forma una cuadrícula visible sobre la que apoyan las placas. La opción más rápida y económica.' },
          { name: 'Borde semivisto (E)', desc: 'Las placas tienen un rebaje que oculta parcialmente la perfilería, creando un ligero efecto de relieve.' },
          { name: 'Borde oculto (D)', desc: 'La estructura queda totalmente escondida, logrando una superficie limpia y continua.' }
        ]
      }
    ]
  },
  {
    id: 'aislamientos',
    title: 'Aislamientos',
    description: 'Materiales que se instalan en el interior de los diferentes sistemas PYL ( tabiques, trasdosados, falsos techos…) dentro de sus estructuras y cámaras de aire. Aunque la placa de yeso aporta rigidez y acabado, estos aislamientos son los que garantizan un mayor rendimiento térmico y acústico, mejorando notablemente el confort del espacio. Reduce drácticamente el gasto energético de la vivienda o comercio.',
    image: '/image/service_aislamientos.jpg',
    intro: 'El aislamiento en sistemas de Placa de Yeso Laminado (PYL) combina placas especializadas y materiales de relleno para mejorar el comportamiento térmico, acústico o de resistencia al fuego de paredes y techos.',
    sections: [
      {
        type: 'insulators_simple',
        title: 'Tipos',
        items: [
          { name: 'Aislamiento térmico', desc: 'Reduce la transmisión de calor entre el interior y el exterior, mejorando la eficiencia energética del inmueble.' },
          { name: 'Aislamiento acústico', desc: 'Disminuye la transmisión de ruido entre estancias o desde el exterior, mejorando el confort sonoro.' },
          { name: 'Aislamiento cortafuegos', desc: 'Incrementa la resistencia al fuego de los sistemas constructivos, retrasando la propagación de las llamas.' }
        ]
      },
      {
        type: 'insulators',
        title: 'Clasificación',
        description: 'Según los materiales y soluciones empleadas en el sistema:',
        items: [
          { name: 'Lanas Minerales (Lana de roca o de vidrio)', desc: 'Excelente aislante térmico y acústico. Muy transpirables y resistentes al fuego.', badge: 'Térmico y Acústico' },
          { name: 'Espumas (Poliuretano)', desc: 'Muy buen aislante térmico. Se coloca en paneles rígidos.', badge: 'Térmico' },
          { name: 'Aislantes Reflexivos', desc: 'Capas finas de aluminio y guata que repelen la radiación térmica. Ideal cuando el espacio disponible es muy reducido.', badge: 'Espacios mínimos' }
        ]
      }
    ]
  },
  {
    id: 'foseados',
    title: 'Foseados / Candilejas',
    description: 'Los foseados y candilejas de Pladur (Placa de Yeso Laminado - PYL) son rebajes en techos o paredes diseñados para ocultar tiras LED y lograr una luz indirecta y elegante. Se diferencian principalmente por su ubicación y la dirección en la que proyectan la luz.',
    image: '/image/service_foseados.jpg',
    intro: 'Los foseados y candilejas de Placa de Yeso Laminado (PYL) son rebajes en techos o paredes diseñados para ocultar tiras LED y conseguir una iluminación indirecta y elegante.',
    sections: [
      {
        type: 'foseados_list',
        title: 'Tipos',
        items: [
          { name: 'Foseado perimetral (Fosa)', desc: 'El más común. Se crea un espacio entre el falso techo y la pared donde se instala la tira LED. La luz se proyecta hacia abajo o hacia la pared, generando el efecto de "techo flotante".' },
          { name: 'Candileja clásica', desc: 'Fosa o bandeja independiente dentro del techo, de forma cuadrada o rectangular. La luz queda completamente oculta y se proyecta difuminada de forma indirecta.' },
          { name: 'Foseado en "U" (Luz bañadora simétrica)', desc: 'Se crea un cajón cerrado con una apertura hacia arriba y otra hacia abajo. Permite bañar de luz tanto el techo como la pared con una franja luminosa uniforme.' }
        ]
      }
    ]
  },
  {
    id: 'muebles',
    title: 'Muebles',
    description: 'Elemento constructivo de PYL realizado a medida e integrado en la propia arquitectura de la vivienda, como si formara parte de la pared. Se ejecuta mediante una estructura metálica recubierta con placas, que posteriormente se sellan, lijan y pintan, logrando un acabado uniforme, limpio y totalmente integrado en el espacio.',
    image: '/image/service_muebles.jpg',
    intro: 'Los muebles de Placas de Yeso Laminado (PYL) son estructuras de obra seca hechas a medida.',
    sections: [
      {
        type: 'furniture_types',
        title: 'Tipos',
        items: [
          { name: 'Librerías y estanterías', desc: 'Estructuras modulares adosadas a la pared, ideales para salones o despachos. Permiten integrar iluminación LED.' },
          { name: 'Muebles de TV', desc: 'Muebles bajos o paredes de fondo para colgar la televisión, permitiendo ocultar todos los cables en su interior.' },
          { name: 'Muebles para cocina o baño', desc: 'Barras americanas, encimeras o estructuras para lavabos. Se utiliza PYL hidrófugo en estos espacios por su resistencia a la humedad.' },
          { name: 'Armarios empotrados y vestidores', desc: 'Solución de suelo a techo que aprovecha al máximo el espacio disponible.' },
          { name: 'Cabeceros de cama', desc: 'Elementos decorativos integrados en la pared, habitualmente combinados con hornacinas o mesitas de noche flotantes.' }
        ]
      },
      {
        type: 'structures_detail',
        title: 'Clasificación',
        items: [
          { name: 'Muebles modulares de trillaje', desc: 'Paneles con alma de cartón en forma de nido de abeja y dos placas exteriores. Muy ligeros y rápidos de instalar.' },
          { name: 'Muebles sobre estructura metálica', desc: 'Utilizan perfilería de acero galvanizado con una o más capas de PYL. Más sólidos y con mayor capacidad de carga.' }
        ]
      }
    ]
  },
  {
    id: 'acabados',
    title: 'Acabados',
    description: 'Los acabados de pladur (placa de yeso laminado) se clasifican oficialmente en cuatro niveles de calidad (de Q1 a Q4), definidos por la normativa europea. El nivel que elijas determina el tipo de revestimiento final que puedes aplicar, como pintura, papel pintado o azulejos.',
    image: '/image/service_acabados.jpg',
    intro: 'Los acabados de Placa de Yeso Laminado (PYL) se clasifican en cuatro niveles de calidad (Q1 a Q4), definidos por normativa europea. El nivel elegido determina qué tipo de revestimiento final se puede aplicar sobre la superficie.',
    sections: [
      {
        type: 'finishes_levels',
        title: 'Niveles',
        items: [
          {
            name: 'Q1: Acabado Básico',
            how: 'Se aplica pasta de juntas, se asienta la cinta y se cubren las cabezas de los tornillos.',
            looks: 'Se permiten estrías, marcas de herramientas y pequeños desniveles.',
            use: 'Ideal para superficies que van a ser alicatadas o quedarán ocultas.',
            color: 'slate'
          },
          {
            name: 'Q2: Acabado Estándar',
            how: 'Incluye el nivel Q1 más una segunda mano de pasta más ancha para difuminar los bordes.',
            looks: 'Transición continua entre placas, aunque pueden apreciarse marcas leves bajo luz directa intensa.',
            use: 'Perfecto para revestimientos con textura, gotelé o papeles pintados rugosos.',
            color: 'teal'
          },
          {
            name: 'Q3: Acabado Especial',
            how: 'Incluye el Q2 más enlucido de juntas y una capa fina de masilla sobre toda la placa.',
            looks: 'Superficie muy lisa, sin rebabas ni huellas de espátula.',
            use: 'Obligatorio para pinturas mates lisas o papeles pintados finos.',
            color: 'indigo'
          },
          {
            name: 'Q4: Acabado Óptimo (Premium)',
            how: 'Se realiza un tendido completo de masilla de terminación sobre toda la superficie (mínimo 1 mm de espesor).',
            looks: 'Liso perfecto y sin sombras, incluso bajo luz rasante indirecta.',
            use: 'Diseñado para pinturas satinadas o brillantes, estucados y vinilos exigentes.',
            color: 'green'
          }
        ]
      },
      {
        type: 'plaques_simple',
        title: 'Revestimientos',
        description: 'Una vez alcanzado el nivel "Q" necesario, puedes aplicar los siguientes revestimientos sobre la PYL:',
        items: [
          { name: 'Pintura', desc: 'Requiere una mano previa de imprimación fijadora específica para PYL.', color: 'blue' },
          { name: 'Papel Pintado', desc: 'Se aplica sellando previamente la pared para poder retirar el papel en el futuro sin dañar el cartón.', color: 'indigo' },
          { name: 'Alicatados', desc: 'Se usa cemento cola flexible para fijar los azulejos directamente sobre las placas Q1 o placas hidrófugas.', color: 'teal' }
        ]
      }
    ]
  }
];
