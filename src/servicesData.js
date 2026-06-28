export const servicesData = [
  {
    id: 'tabiques',
    title: 'Tabiques',
    description: 'Sistemas de construcción en seco ideales para crear y dividir espacios interiores de forma rápida y limpia. Gracias a su diseño versátil, ofrecen soluciones eficientes y de alta calidad tanto en viviendas como en espacios comerciales.',
    image: '/image/service_tabiques.jpg',
    intro: 'Los tabiques de Placa de Yeso Laminado (PYL), también conocidos como Pladur, son sistemas ligeros no portantes. Están formados por una estructura de perfiles de acero galvanizado (canales y montantes) y placas atornilladas a ambos lados.',
    sections: [
      {
        type: 'plaques',
        title: 'Clasificación según el tipo de placa',
        description: 'Su clasificación principal depende del tipo de placa utilizada, que determina el rendimiento técnico del tabique:',
        items: [
          {
            name: 'Estándar (Tipo A)',
            desc: 'Placa básica de yeso y cartón. Ideal para zonas secas (dormitorios, pasillos, salones).',
            badge: 'Estándar',
            icon: 'FileText',
            color: 'blue'
          },
          {
            name: 'Hidrófuga (Tipo H)',
            desc: 'Tratada con silicona para repeler el agua. Es la recomendada para zonas húmedas como baños y cocinas.',
            badge: 'Resistente al agua',
            icon: 'Droplets',
            color: 'teal'
          },
          {
            name: 'Ignífuga (Tipo F)',
            desc: 'Incorpora fibra de vidrio para ofrecer mayor resistencia al fuego. Ideal para cocinas, zonas de calderas o vías de evacuación.',
            badge: 'Resistente al fuego',
            icon: 'Flame',
            color: 'rose'
          },
          {
            name: 'Alta Dureza / Alta Resistencia al Impacto (Tipo I)',
            desc: 'Tienen una densidad mayor, perfectas para zonas de mucho tránsito (pasillos, colegios, hospitales).',
            badge: 'Alta Dureza',
            icon: 'Shield',
            color: 'indigo'
          },
          {
            name: 'Alto Aislamiento Acústico (Tipo D)',
            desc: 'Cuentan con un núcleo modificado de alta densidad que reduce significativamente la transmisión de ruido.',
            badge: 'Acústico',
            icon: 'Volume2',
            color: 'purple'
          }
        ]
      },
      {
        type: 'structures',
        title: 'Tipos de estructuras y perfiles',
        description: 'Aparte del tipo de placa, los tabiques varían según el número y tipo de estructuras metálicas, así como el ancho del perfil:',
        items: [
          {
            name: 'Tabique simple',
            desc: 'Una estructura de perfiles metálicos con una o varias placas atornilladas a cada lado. En su interior se suele colocar material aislante (lana mineral).'
          },
          {
            name: 'Tabique doble',
            desc: 'Dos estructuras metálicas independientes (a veces separadas por una pequeña cámara de aire). Se utiliza para requerimientos de aislamiento acústico muy elevados entre habitaciones diferentes.'
          },
          {
            name: 'Sistemas especiales (Shaftwall)',
            desc: 'Tabiques específicos para el cerramiento de huecos de ascensor o patinillos de instalaciones. Ofrecen alta resistencia al fuego y se instalan desde una sola cara.'
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
    intro: 'Los trasdosados de Placa de Yeso Laminado (PYL) son revestimientos interiores de muros diseñados para mejorar el aislamiento térmico/acústico y ocultar instalaciones. Se dividen en tres tipos principales según su método de instalación:',
    sections: [
      {
        type: 'installation_methods',
        title: 'Métodos de instalación principales',
        items: [
          {
            name: 'Trasdosado Directo',
            how: 'Las placas se pegan directamente al muro soporte mediante pelladas de pasta de agarre.',
            advantages: 'Es la opción más económica, rápida de instalar y que menos espacio resta a la estancia.',
            when: 'Exclusivamente en paredes muy planas, en buen estado y sin problemas de humedad. Permite utilizar placas que ya llevan el aislante adherido (EPS o lana mineral).'
          },
          {
            name: 'Trasdosado Semidirecto (Maestra Omega)',
            how: 'Las placas se atornillan a unos perfiles metálicos en forma de "omega" o sombrero. Estos perfiles se fijan y nivelan directamente sobre el muro existente.',
            advantages: 'Permite corregir desniveles y desplomes en paredes viejas o irregulares y facilita el paso de pequeñas instalaciones por detrás de la placa.',
            when: 'En reformas donde el muro está deteriorado pero es estable y no presenta problemas de humedad directa.'
          },
          {
            name: 'Trasdosado Autoportante',
            how: 'Se construye una estructura metálica independiente (con canales arriba/abajo y montantes verticales) separada del muro. Las placas PYL se atornillan a esta estructura.',
            advantages: 'Otorga el máximo aislamiento térmico y acústico al crear una cámara de aire rellena de lana mineral. Además, permite ocultar grandes instalaciones (tuberías, electricidad) sin picar el muro original.',
            when: 'Ideal en obra nueva o reformas integrales. Es perfecto para paredes con humedades, ya que deja una cámara ventilada, y para insonorizar habitaciones.'
          }
        ]
      },
      {
        type: 'plaques_simple',
        title: 'Tipos de Placas PYL para Trasdosados',
        description: 'Las prestaciones de tu trasdosado dependerán también de la placa elegida, pudiendo combinar estos sistemas con:',
        items: [
          { name: 'Estándar (Tipo A)', desc: 'Para usos habituales.', color: 'blue' },
          { name: 'Hidrófuga (Tipo H)', desc: 'Con tratamiento antihumedad, ideal para baños y cocinas.', color: 'teal' },
          { name: 'Ignífuga (Tipo F)', desc: 'Mayor resistencia al fuego.', color: 'rose' },
          { name: 'Alta Densidad / Acústicas', desc: 'Para bloquear ruidos molestos.', color: 'purple' }
        ]
      }
    ]
  },
  {
    id: 'techos-continuos',
    title: 'Techos continuos',
    description: 'Falsos techos formados por placas con juntas tratadas para conseguir una superficie lisa y uniforme. Se instalan suspendidos mediante perfilería oculta, permiten ocultar instalaciones y lograr acabados limpios y minimalistas.',
    image: '/image/service_techos_continuos.jpg',
    intro: 'Los techos continuos de Placa de Yeso Laminado (PYL) son sistemas de falso techo formados por una estructura metálica oculta sobre la que se atornillan las placas, logrando una superficie lisa y uniforme sin juntas visibles.',
    sections: [
      {
        type: 'structures_detail',
        title: '1. Según la Estructura de Soporte',
        items: [
          { name: 'Techos Directos', desc: 'Las placas se atornillan a perfiles metálicos tipo Omega fijados directamente al forjado. Son ideales para techos que ya están nivelados, ya que apenas restan altura a la estancia.' },
          { name: 'Techos Suspendidos Simples (TC)', desc: 'La estructura se cuelga del forjado mediante varillas y horquillas, creando un espacio o plénum para ocultar instalaciones. Utilizan una sola retícula de perfiles metálicos.' },
          { name: 'Techos Suspendidos Dobles', desc: 'Cuentan con una doble estructura metálica (maestras primarias y secundarias), lo que permite salvar grandes luces, soportar mayor peso y lograr una nivelación milimétrica.' },
          { name: 'Techos Biapoyados (Autoportantes)', desc: 'Sistemas donde el techo se apoya perimetralmente en las paredes sin necesidad de colgar varillas del forjado.' }
        ]
      },
      {
        type: 'plaques',
        title: '2. Según el Tipo de Placa (Prestaciones)',
        description: 'Las ventajas finales del techo continuo dependen de la placa PYL seleccionada:',
        items: [
          {
            name: 'Estándar (Tipo A)',
            desc: 'La más común para interiores sin requerimientos especiales.',
            badge: 'Estándar',
            icon: 'FileText',
            color: 'blue'
          },
          {
            name: 'Hidrófuga / Antihumedad (Tipo H)',
            desc: 'Tratada para absorber menos agua; ideal para baños, cocinas o zonas expuestas a condensación.',
            badge: 'Antihumedad',
            icon: 'Droplets',
            color: 'teal'
          },
          {
            name: 'Ignífuga / Resistente al Fuego (Tipo F o PP)',
            desc: 'Compuesta con fibra de vidrio para retardar la acción del fuego, ideal para garajes o locales comerciales.',
            badge: 'Cortafuegos',
            icon: 'Flame',
            color: 'rose'
          },
          {
            name: 'Acústica (Tipo D)',
            desc: 'Perforada y con velo acústico, diseñada para reducir la reverberación y mejorar el confort sonoro en oficinas o restaurantes.',
            badge: 'Absorción acústica',
            icon: 'Volume2',
            color: 'purple'
          },
          {
            name: 'Alta Dureza / Impacto',
            desc: 'Placas de mayor densidad y resistencia para soportar golpes o cargas pesadas.',
            badge: 'Resistencia',
            icon: 'Shield',
            color: 'indigo'
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
    intro: 'Los techos registrables (o desmontables) son sistemas modulares suspendidos de la estructura original que permiten ocultar instalaciones y acceder fácilmente a ellas.',
    sections: [
      {
        type: 'materials',
        title: '1. Tipos de techos según el material de sus placas',
        description: 'Ofrecen distintas prestaciones estéticas y funcionales según el material elegido:',
        items: [
          { name: 'Placa de yeso laminado (Pladur)', desc: 'Son los más populares por su excelente relación calidad-precio y versatilidad. Pueden ser lisas, vinílicas (lavables para cocinas o sanatorios) o perforadas (mejoran la acústica).' },
          { name: 'Fibra mineral o de vidrio', desc: 'Muy ligeros y excelentes para la absorción acústica y el aislamiento térmico. Son ideales para oficinas y centros educativos.' },
          { name: 'Metal (Aluminio o acero)', desc: 'Destacan por su gran durabilidad, resistencia a la humedad y estética moderna. Son habituales en zonas de paso, aeropuertos y espacios exteriores cubiertos.' },
          { name: 'Escayola', desc: 'Una opción tradicional y económica. Ofrece acabados clásicos o decorativos y se recomienda especialmente para el diseño interior de locales comerciales u hogares.' }
        ]
      },
      {
        type: 'structures_detail',
        title: '2. Tipos según el sistema de perfilería',
        description: 'La perfilería metálica (oculta o visible) determina el acabado visual final:',
        items: [
          { name: 'Borde visto (A)', desc: 'La perfilería forma una cuadrícula visible sobre la que apoyan directamente las placas. Es la opción más rápida y económica.' },
          { name: 'Borde semivisto (E)', desc: 'Las placas tienen un rebaje que oculta parcialmente la perfilería, creando un ligero efecto de relieve.' },
          { name: 'Borde oculto (D)', desc: 'La estructura queda totalmente escondida, logrando una superficie continua muy limpia y estética.' }
        ]
      }
    ]
  },
  {
    id: 'aislamientos',
    title: 'Aislamientos',
    description: 'Materiales que se instalan en el interior de los diferentes sistemas PYL ( tabiques, trasdosados, falsos techos…) dentro de sus estructuras y cámaras de aire. Aunque la placa de yeso aporta rigidez y acabado, estos aislamientos son los que garantizan un mayor rendimiento térmico y acústico, mejorando notablemente el confort del espacio. Reduce drásticamente el gasto energético de la vivienda o comercio.',
    image: '/image/service_aislamientos.jpg',
    intro: 'El aislamiento en sistemas de Placa de Yeso Laminado (PYL), conocido comúnmente como Pladur, combina placas especializadas y materiales de relleno. Se dividen en función de si el objetivo es térmico, acústico o cortafuegos.',
    sections: [
      {
        type: 'plaques_simple',
        title: '1. Tipos de Placas PYL (Según su uso)',
        description: 'Las placas se clasifican por letras según la normativa europea:',
        items: [
          { name: 'Estándar (Tipo A)', desc: 'Para uso general en interiores secos.', color: 'blue' },
          { name: 'Hidrófuga (Tipo H)', desc: 'Tratada con aditivos para absorber menos agua y evitar el moho. Ideal para cocinas y baños.', color: 'teal' },
          { name: 'Acústica (Tipo D)', desc: 'Mayor densidad en su núcleo para reducir la transmisión de ruido aéreo.', color: 'purple' },
          { name: 'Ignífuga / Alta Resistencia al Fuego (Tipo F)', desc: 'Contiene fibra de vidrio y arcilla para retrasar la combustión.', color: 'rose' },
          { name: 'Alta Dureza / Impacto (Tipo I)', desc: 'Núcleo más denso y cartón reforzado para soportar golpes accidentales en zonas transitadas.', color: 'indigo' }
        ]
      },
      {
        type: 'insulators',
        title: '2. Aislantes (Materiales de relleno)',
        description: 'Se colocan en la cámara de aire interior para bloquear el ruido o la temperatura:',
        items: [
          { name: 'Lanas Minerales (Lana de roca o de vidrio)', desc: 'Excelente aislante térmico y acústico. Muy transpirables y resistentes al fuego.', badge: 'Térmico y Acústico' },
          { name: 'Espumas (Poliuretano)', desc: 'Muy buen aislante térmico. Se puede colocar en paneles o inyectado.', badge: 'Térmico' },
          { name: 'Aislantes Reflexivos', desc: 'Capas finas de aluminio y guata que repelen la radiación térmica. Ideal si el espacio es muy reducido.', badge: 'Espacios mínimos' }
        ]
      }
    ]
  },
  {
    id: 'foseados',
    title: 'Foseados / Candilejas',
    description: 'Los foseados y candilejas de Pladur (Placa de Yeso Laminado - PYL) son rebajes en techos o paredes diseñados para ocultar tiras LED y lograr una luz indirecta y elegante. Se diferencian principalmente por su ubicación y la dirección en la que proyectan la luz.',
    image: '/image/service_foseados.jpg',
    intro: 'Los foseados y candilejas de Pladur (Placa de Yeso Laminado - PYL) son rebajes en techos o paredes diseñados para ocultar tiras LED y lograr una luz indirecta y elegante.',
    sections: [
      {
        type: 'foseados_list',
        title: 'Tipos de Foseados y Candilejas PYL',
        items: [
          { name: 'Foseado perimetral (Fosa)', desc: 'Es el más común. Consiste en separar el falso techo de la pared dejando un foso o canal. La luz LED se instala en el interior y se proyecta hacia abajo o hacia la pared, creando un efecto de "techo flotante".' },
          { name: 'Candileja clásica', desc: 'A diferencia del foseado perimetral, la candileja suele ser una fosa independiente o moldura dentro del propio techo (a modo de cajón o casetón cuadrado/rectangular). La luz queda completamente oculta en una bandeja y se proyecta difuminada de forma indirecta.' },
          { name: 'Foseado en "C" (Luz oculta directa)', desc: 'El perfil se monta de tal manera que crea un rebaje con forma de "C". La tira de LED queda oculta tras un pequeño faldón y la luz baña la pared hacia abajo o se dirige hacia el centro del techo.' },
          { name: 'Foseado en "U" (Luz bañadora simétrica)', desc: 'El perfil crea un cajón cerrado con una apertura hacia arriba y otra hacia abajo. Permite bañar de luz tanto el techo como la pared, creando una franja luminosa uniforme en el paramento.' },
          { name: 'Preformados PYL (Prefabricados de fábrica)', desc: 'Actualmente, la opción más eficiente y rápida. En lugar de cortar y armar las estructuras con perfiles y placas en la obra, se utilizan piezas preformadas (ya listas en "L" o "U") que se instalan directamente, garantizando acabados rectos perfectos y reduciendo el tiempo de mano de obra.' }
        ]
      }
    ]
  },
  {
    id: 'muebles',
    title: 'Muebles',
    description: 'Elemento constructivo de PYL realizado a medida e integrado en la propia arquitectura de la vivienda, como si formara parte de la pared. Se ejecuta mediante una estructura metálica recubierta con placas, que posteriormente se sellan, lijan y pintan, logrando un acabado uniforme, limpio y totalmente integrado en el espacio.',
    image: '/image/service_muebles.jpg',
    intro: 'Los muebles de PYL (Placas de Yeso Laminado) o pladur son estructuras de obra seca hechas a medida. Se dividen en varias tipologías dependiendo de su función y fabricación:',
    sections: [
      {
        type: 'structures_detail',
        title: 'Según su Función',
        items: [
          { name: 'Librerías y estanterías', desc: 'Estructuras modulares adosadas a la pared ideales para salones o despachos. Permiten integrar iluminación LED.' },
          { name: 'Muebles de TV', desc: 'Muebles bajos o paredes de fondo diseñadas para colgar la televisión, ocultando todos los cables en su interior.' },
          { name: 'Muebles de obra para cocina o baño', desc: 'Barras americanas, encimeras o estructuras para lavabos. En estos espacios se utiliza PYL especial hidrófugo (resistente a la humedad).' },
          { name: 'Armarios empotrados y vestidores', desc: 'Aprovechamiento total del espacio de suelo a techo, usando el propio mueble para crear los compartimentos.' },
          { name: 'Cabeceros de cama', desc: 'Elementos decorativos integrados en la pared, a menudo combinados con hornacinas o mesitas de noche flotantes.' }
        ]
      },
      {
        type: 'structures_detail',
        title: 'Según su Fabricación',
        items: [
          { name: 'Muebles modulares de trillaje', desc: 'Formados por paneles con un alma interior de cartón en forma de nido de abeja y dos placas exteriores. Son muy ligeros y rápidos de instalar.' },
          { name: 'Muebles sobre estructura metálica', desc: 'Utilizan perfilería de acero galvanizado (canales y montantes) y una o más capas de placa de yeso. Son más sólidos y soportan más peso.' }
        ]
      }
    ]
  },
  {
    id: 'acabados',
    title: 'Acabados',
    description: 'Los acabados de pladur (placa de yeso laminado) se clasifican oficialmente en cuatro niveles de calidad (de Q1 a Q4), definidos por la normativa europea. El nivel que elijas determina el tipo de revestimiento final que puedes aplicar, como pintura, papel pintado o azulejos.',
    image: '/image/service_acabados.jpg',
    intro: 'Los acabados de pladur (placa de yeso laminado) se clasifican oficialmente en cuatro niveles de calidad (de Q1 a Q4), definidos por la normativa europea. El nivel que elijas determina el tipo de revestimiento final que puedes aplicar.',
    sections: [
      {
        type: 'finishes_levels',
        title: 'Los 4 Niveles de Acabado (Q1 a Q4)',
        items: [
          {
            name: 'Q1: Acabado Básico',
            how: 'Se aplica pasta de juntas, se asienta la cinta y se cubren las cabezas de los tornillos.',
            looks: 'Se permiten estrías, marcas de herramientas y desniveles.',
            use: 'Ideal para superficies ocultas o zonas que van a ser alicatadas con azulejos.',
            color: 'slate'
          },
          {
            name: 'Q2: Acabado Estándar',
            how: 'Incluye el nivel Q1 más una segunda mano de pasta de juntas más ancha para difuminar los bordes.',
            looks: 'Transición continua entre placas, aunque pueden quedar marcas leves de herramientas bajo luces fuertes.',
            use: 'Perfecto para revestimientos con textura gruesa, gotelé o papeles pintados rugosos.',
            color: 'teal'
          },
          {
            name: 'Q3: Acabado Especial',
            how: 'Incluye el Q2 más un enlucido ancho de las juntas y una capa fina de masilla (nivel cero) en toda la placa para sellar el poro del cartón.',
            looks: 'Superficie muy lisa donde no se aprecian rebabas ni huellas de espátula.',
            use: 'Obligatorio para pinturas mates lisas o papeles pintados finos.',
            color: 'indigo'
          },
          {
            name: 'Q4: Acabado Óptimo (Premium)',
            how: 'Se realiza un tendido completo de masilla especial de terminación sobre toda la superficie (espesor mínimo de 1 mm).',
            looks: 'Uniformidad absoluta, liso perfecto y sin sombras, incluso con luz rasante indirecta.',
            use: 'Diseñado para pinturas satinadas, brillantes, estucados o vinilos exigentes.',
            color: 'green'
          }
        ]
      },
      {
        type: 'plaques_simple',
        title: 'Tipos de Decoración Final',
        description: 'Una vez alcanzado el nivel "Q" necesario, puedes aplicar los siguientes revestimientos sobre el pladur:',
        items: [
          { name: 'Pintura', desc: 'Requiere una mano previa de imprimación fijadora para pladur para homogeneizar la absorción de la pintura entre la junta y el cartón.', color: 'blue' },
          { name: 'Papel Pintado', desc: 'Se aplica directamente tras sellar la pared. Protege la placa para que el papel pueda retirarse en el futuro sin romper el cartón.', color: 'indigo' },
          { name: 'Alicatados', desc: 'Se utiliza cemento cola específico (tipo flexible) para fijar azulejos directamente sobre las placas de pladur Q1 o placas hidrófugas (verdes).', color: 'teal' }
        ]
      }
    ]
  }
];
