export default {
  global: {
    componenteFormativo: 'Diseño y gestión de almacenes',
    descripcionCurso:
      'La gestión de los almacenes es un elemento clave para lograr el uso óptimo de los recursos y capacidades del almacén dependiendo de las características y el volumen de los productos a almacenar',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-logistica.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Gestión de almacenes - conceptos generales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Introducción general a la gestión de almacenes',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Evolución de los almacenes',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Características de los almacenes',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Función de los almacenes',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Ubicación de los almacenes',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Distribución física y <em>layout</em>',
            hash: 't_1_6',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Naturaleza de los productos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Empaques y embalajes',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Unidad de carga o unitarización',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Clases de almacenes',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Requerimientos para el funcionamiento de los almacenes',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Talento humano',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Maquinaria y equipo según tipo y productos',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Tecnologías de información y comunicación (TIC)',
            hash: 't_4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo: 'Normatividad aplicada a la operación de almacenes',
            hash: 't_4_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.5',
            titulo: 'Factores de riesgo en un almacén',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Procesos logísticos en la gestión de almacenes',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Producción y/o logística interna',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Recibo y almacenamiento',
            hash: 't_5_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.3',
            titulo: 'Separación, alistamiento y despacho',
            hash: 't_5_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.4',
            titulo: 'Cubicaje',
            hash: 't_5_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.5',
            titulo: 'Cross docking',
            hash: 't_5_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.6',
            titulo: 'Sistemas de gestión de calidad',
            hash: 't_5_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.7',
            titulo:
              'Manejo de residuos en los almacenes y CEDI (centros de distribución)',
            hash: 't_5_7',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.8',
            titulo: 'Automatización y robótica, las nuevas tendencias',
            hash: 't_5_8',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.9',
            titulo: 'Gestión de inventarios',
            hash: 't_5_9',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      } /*
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },*/,
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/121523_CF02_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Campo V., A.; Hervás E., A. & Revilla R., M. (2013). Operaciones de Almacenaje. Madrid: McGraw-Hill.',
    },
    {
      referencia:
        'Castellanos R., A. (2015). Logística Comercial Internacional. Barranquilla: Ecoe Ediciones.',
    },
    {
      referencia:
        'Fernández S., F. (2016). Estiba y trincaje de mercancias en contenedor. Barcelona: Alfaomega.',
    },
    {
      referencia:
        'Flamarique, S. (2019). Manual de gestión de almacenes. Barcelona: Marge Books.',
    },
    {
      referencia:
        'Garavito, E. (2008). Sistemas de almacenamiento. Escuela de Estudios Industriales y Empresariales, 1 - 2.',
    },
    {
      referencia:
        'Mira, J. & Soler, D. (2010). Manual del transporte de mercancias (3a. ed.).. Marge Books. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/43754',
    },
    {
      referencia:
        'Pérez H., M. (2017). Almacenamiento de materiales. Barcelona: Marge Books.',
    },
    {
      referencia:
        'Revista de logística legis. (2016). Tipos de almacenamiento. Revista de logística legis.',
    },
    {
      referencia:
        'Revista Stock Logistic. (2019). La automatización en el sector logístico.',
      link:
        'https://www.stocklogistic.com/la-automatizacion-en-el-sector-logistico/',
    },
    {
      referencia:
        'Riveros P., G. (2015). Marketing Logístico. Bogotá: Ecoe Ediciones.',
    },
    {
      referencia:
        'ISO. (2020). ISO 9000:2015(es) Sistemas de gestión de la calidad — Fundamentos y vocabulario. ',
      link: 'https://www.iso.org/obp/ui/es/#iso:std:iso:9000:ed-4:v1:es',
    },
  ],
  glosario: [
    {
      termino: 'Almacén',
      significado:
        'es un lugar o espacio físico para el almacenaje de bienes dentro de la cadena de suministro. Los almacenes son una infraestructura imprescindible para la actividad de todo tipo de agentes económicos (agricultores, ganaderos, mineros, industriales, transportistas, importadores, exportadores, comerciantes, intermediarios, consumidores finales, etc.)',
    },
    {
      termino: 'Apiladores',
      significado:
        'son herramienta de ayuda en cualquier empresa que son muy eficaces para elevar, bajar y transportar cargas.',
    },
    {
      termino: 'Canal de distribución',
      significado:
        'es el conducto que define la compañía por el cual se movilizan los productos desde el lugar donde se producen hasta los consumidores finales.',
    },
    {
      termino: 'Distribución',
      significado:
        'en logística se define este proceso como la acción de poner a disposición los productos para su consumo, en la cantidad demandada, el momento en que lo necesite y en el lugar acordado.',
    },
    {
      termino: 'Embalajes',
      significado:
        'prepara la carga en la forma más adecuada para su transporte en los modos elegidos para su despacho al exterior y para las distintas operaciones a que se someta durante el viaje entre el Exportador y el importador.',
    },
    {
      termino: 'Ergonomía',
      significado:
        'es la disciplina tecnológica que trata del diseño de lugares de trabajo, herramientas y tareas que coinciden con las características fisiológicas, anatómicas, psicológicas y las capacidades del trabajador. Busca la optimización de los tres elementos del sistema (humano-máquina-ambiente), para lo cual elabora métodos de estudio de la persona, de la técnica y de la organización.',
    },
    {
      termino: 'Etiquetado',
      significado:
        'el etiquetado garantiza a los consumidores la información completa sobre el contenido y la composición de un producto, a fin de proteger su salud y sus intereses. La etiqueta puede contener también información relativa a una característica determinada, como el origen del producto o el método de producción. Algunos alimentos son, además, objeto de una normativa específica, como los organismos modificados genéticamente, los alimentos alergénicos, los alimentos para bebés o determinadas bebidas.',
    },
    {
      termino: 'Gestión logística',
      significado:
        'es el proceso de planificación, implementación y control del flujo y almacenamiento eficiente y económico de la materia prima, productos semi - terminados y acabados, así como la información asociada.',
    },
    {
      termino: 'Just in time',
      significado:
        'entrega de insumos desde el proveedor directamente a los procesos productivos en el preciso momento preciso en que se los necesitan, obviando almacenamiento en planta.',
    },
    {
      termino: 'Packing',
      significado:
        'es el proceso de alistamiento y preparación de la carga referente a empaque y embalaje necesario para la expedición.',
    },
    {
      termino: 'Picking',
      significado:
        'es el proceso de recogida de material extrayendo unidades o conjuntos empaquetados de una unidad de empaquetado superior que contiene más unidades que las extraídas.',
    },
    {
      termino: 'Plataforma logística',
      significado:
        'áreas o zonas con una infraestructura que permiten realizar las actividades inherentes a la logística, el transporte y la distribución de mercancías.',
    },
    {
      termino: 'Señalización',
      significado:
        'es el lenguaje de comunicación destinado a transmitir al usuario de la vía las advertencias, prohibiciones, obligaciones, informaciones, orientaciones y fundamentalmente las prioridades de paso, de acceso y de uso de las distintas partes de la vía.',
    },
    {
      termino: 'Transpaleta',
      significado:
        'es un aparato utilizado en almacenes para realizar diversas tareas relacionadas con la mercancía almacenada, tales como carga, descarga, traslado de una zona a otras del almacén y operaciones de picking.',
    },
    {
      termino: 'Tratado de Libre Comercio (TLC)',
      significado:
        'acuerdo entre dos o más países después de varias negociaciones, que permite que el mercado nacional ofrezca bienes y/o servicios en el exterior.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizábal Gutiérrez',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Rafael Rodríguez Cuellar',
          cargo: 'Instructor - Experto temático',
          centro:
            'Centro de la Industria, la Empresa y los Servicios - Regional Huila',
        },
        {
          nombre: 'Luis Fernando Botero Mendoza',
          cargo: 'Diseñador instruccional',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Revisor metodológico y pedagógico',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Sandra Patricia Hoyos Sepúlveda',
          cargo: 'Corrección de estilo',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'Gloria Lida Alzáte Suarez',
          cargo: 'Adecuación instruccional',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yuly Andrea Rey Quiñonez',
          cargo: 'Diseño web',
          centro: 'Centro Industrial del Diseño y la Manufactura',
          regional: 'Regional Santander',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollo Fullstack',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Zuleidy Maria Ruiz Torres',
          cargo: 'Producción audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Wilson Andres Arenales Caceres',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Gilberto Junior Rodriguez Rodriguez',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Lina Marcela Perez',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Víctor Cardenas',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Ricardo Vasquez Arrovaye',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Leyson Fabian Castaño Pérez',
          cargo: 'Validación y vinculación LMS',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
