<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 4
      h1 Requerimientos para el funcionamiento de los almacenes

    p.mb-4 Los almacenes constituyen un eslabón fundamental en los flujos físicos de mercancías desde un origen a un destino y junto a la gestión de pedidos y compra, la producción, la gestión de inventarios, el transporte, la distribución e incluso el reciclaje e integran un sistema logístico que es vital para el funcionamiento de la economía.

    #t_4_1.titulo-segundo
      .h2 4.1 Talento humano

    p.mb-4 La mayor parte de las empresas o industrias de tamaño grande o mediano realizan una actividad de almacenaje, pero cada empresa es distinta por lo que no hay uniformidad en el lugar en el que están ubicados los puestos relacionados con el almacenamiento en la organización de la empresa. Las funciones de cada puesto varían en función de las empresas; a pesar de esto hay determinados “puestos tipo” en el almacén que normalmente cuentan con unas funciones básicas comunes como se muestra a continuación:

    .row.justify-content-center.mb-4
      TabsA.color-acento-contenido.mb-0
        //- .tarjeta debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta.color-custom.p-4(titulo='Responsable de almacén')
          .row
            .col-lg-2.align-self-center
              figure
                img(src='@/assets/curso/tema4/avt1.svg', alt='Responsable de almacén', style='width:124px;').mx-auto
            .col-lg-6.align-self-center.my-5
              .h4 Responsable de almacén
              p Se encarga de la planificación y organización de las actividades que se llevan a cabo en el almacén y garantiza su correcta ejecución.

        .tarjeta.color-custom.p-4(titulo='Responsable de recepción')
          .row
            .col-lg-2.align-self-center
              figure
                img(src='@/assets/curso/tema4/avt2.svg', alt='Responsable de recepción', style='width:124px;').mx-auto
            .col-lg-6.align-self-center.my-5
              .h4 Responsable de recepción
              p Su misión es la recepción, identificación y mantenimiento de las mercancías hasta que son trasladadas a la zona de almacenamiento estable.

        .tarjeta.color-custom.p-4(titulo='Responsable de almacenamiento')
          .row
            .col-lg-2.align-self-center
              figure
                img(src='@/assets/curso/tema4/avt3.svg', alt='Responsable de almacenamiento', style='width:124px;').mx-auto
            .col-lg-6.align-self-center.my-5
              .h4 Responsable de almacenamiento
              p Se encarga de ubicar las mercancías en las zonas adecuadas y garantiza que están en las mejores condiciones de conservación.

        .tarjeta.color-custom.p-4(
          titulo='Responsable de expedición (movimiento)'
        )
          .row
            .col-lg-2.align-self-center
              figure
                img(src='@/assets/curso/tema4/avt4.svg', alt='Responsable de expedición (movimiento)', style='width:124px;').mx-auto
            .col-lg-6.align-self-center.my-5
              .h4 Responsable de expedición (movimiento)
              p Garantiza que los movimientos de mercancía internos (entre zonas del almacén) y externos (con clientes, otros centros de trabajo) se llevan a cabo siguiendo la normativa y los procedimientos pautados.

        .tarjeta.color-custom.p-4(
          titulo='Responsable de información y administración'
        )
          .row
            .col-lg-2.align-self-center
              figure
                img(src='@/assets/curso/tema4/avt5.svg', alt='Responsable de información y administración', style='width:124px;').mx-auto
            .col-lg-6.align-self-center.my-5
              .h4 Responsable de información y administración
              p Lleva a cabo los procesos administrativos del almacén y da respuesta a las necesidades de información.

        .tarjeta.color-custom.p-4(
          titulo='Auxiliar de almacén / repartidor / reponedor / carretillero'
        )
          .row
            .col-lg-2.align-self-center
              figure
                img(src='@/assets/curso/tema4/avt6.svg', alt='Auxiliar de almacén', style='width:124px;').mx-auto
            .col-lg-7.align-self-center.my-5
              .h4 Auxiliar de almacén / repartidor / reponedor / carretillero
              p Estos puestos se encargan de las mercancías una vez recepcionadas y antes de ser expedidas: las transportan y ubican, las distribuyen, las recuentan, las clasifican, etc
    .separador-custom

    #t_4_2.titulo-segundo
      .h2 4.2 Maquinaria y equipo según tipo y productos

    p.mb-4 En un almacén las manipulaciones de bienes almacenados son muchos, y por eso aumentan los riesgos, de daños, costos en el tiempo y mano de obra, por eso se hacen importantes los equipos de manejo entre otros tenemos:

    SlyderB.mb-5(:datos='datosSlyder')
    .separador-custom

    #t_4_3.titulo-segundo
      .h2 4.3 Tecnologías de información y comunicación (TIC)

    p.mb-4 Las TIC se han convertido en un medio para agilizar, flexibilizar y mejorar el intercambio de información y operaciones utilizadas en la gestión de almacenes. Existe una diversidad de sistemas de almacenamiento, lo que implica que, para garantizar su adecuada operación, se recomienda evaluar las características de los productos, la unidad de almacenamiento, los elementos y/o equipos de manipulación, los costos de operación y las TIC disponibles para la identificación y ubicación de los productos en dichos sistemas dentro del proceso de selección.
    p.mb-4 Los beneficios potenciales al utilizar TIC son:
    .row.justify-content-center.mb-4
      .col-lg-6.mb-2
        ol.fa-ol.lista-ol.lista-ol--separador
          li #[span.li--clr.fa-lo #[i.fas.fa-chevron-right]] Optimizar los procesos logísticos.
          li #[span.li--clr.fa-lo #[i.fas.fa-chevron-right]] Cumplimiento de pedidos a tiempo y sin errores.
          li #[span.li--clr.fa-lo #[i.fas.fa-chevron-right]] Visibilidad del estado del pedido a través de la cadena.
          p
      .col-lg-6.mb-2
        ol.fa-ol.lista-ol.lista-ol--separador
          li #[span.li--clr.fa-lo #[i.fas.fa-chevron-right]] Uso óptimo del inventario disponible.
          li #[span.li--clr.fa-lo #[i.fas.fa-chevron-right]] Busca mejorar el uso de los recursos de la empresa.
          li #[span.li--clr.fa-lo #[i.fas.fa-chevron-right]] Reducción de actividades en el centro de distribución.
          p

    p.mb-5 Mientras que algunas de sus desventajas son:
    .row.mb-4
      .col-lg-6
        ol.fa-ol.lista-ol.lista-ol--separador
          li #[span.li--clr.fa-lo #[i.fas.fa-chevron-right]] Proceso de implementación largo, costoso y complejo, además cuando es mal instalado puede causar estragos operacionales y económicos.
          p

    p.mb-4 Las TIC son identificadas como transversales a los procesos de la gestión de almacenes desde su proceso de recepción y control hasta el despacho, contribuyendo a funciones de identificación y trazabilidad como el código de barras y el RFID. Por otro lado, existen algunas TIC que son específicas de procesos como el picking to light y voice, el cual se aplica al proceso de preparación de pedido. Para ser más específico se presenta el siguiente recurso que debe explorar en cada uno de los conceptos que destacan por qué las empresas deben estar apoyadas en las TIC:
    .titulo-quinto.color-acento-contenido
      h4 Mapa de TIC en la gestión de almacenes

    //IMAGEN
    .row.justify-content-center.mb-4
      .col-lg-8
        figure.mb-4
          img(
            src='@/assets/curso/tema4/img7.svg',
            alt='Mapa de TIC en la gestión de almacenes'
          )

    .row.mb-5.justify-content-center
      .col-md-6.mb-5.mb-md-0
        //- LineaTiempoD debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        LineaTiempoD.color-acento-contenido

          p.text-small(numero="a" titulo="WMS (Warehouse Management System)") Sistema de información que ayuda en la administración del flujo del producto e información dentro del proceso de almacenamiento, a través de funciones tales como: a) recepción; b) almacenamiento; c) administración de inventarios; d) procesamiento de órdenes y cobros; y e) preparación de pedidos.
          p.text-small(numero="b" titulo="LMS (Labor Management System)") Sistema de control de las actividades de los operadores del almacén, por lo cual se convierte en un complemento para el WMS. Una ventaja generada por su utilización es el aumento casi inmediato de la productividad del almacén casi al 100%, ya que se logra el mejoramiento del desempeño de los trabajadores y el aprovechamiento de los recursos en el almacén, a través del control y seguimiento sobre estos. La principal desventaja para que una empresa lo implemente como práctica para mejorar las operaciones del almacén, son las modificaciones necesarias a la estructura operacional y las altas inversiones que significan su puesta en marcha. Los sistemas LMS en su mayoría traen incluidas buenas prácticas para la realización de tareas en el almacén e indicadores para medir su rendimiento.
          p.text-small(numero="c" titulo="Picking To Voice y Picking To Light") Sistemas de señalización sin papeles, que se basan en redes luminosas y sistemas de voz. El Pick to Light se compone de un conjunto de luces que indican al operario las ubicaciones y las cantidades a recoger de los productos y suelen tener conexión con el sistema de inventarios para que se actualice en tiempo real una vez realizada la operación. En el Pick to Voice, el operario del almacén lleva un equipo de comunicación que permite recibir y enviar mensajes acerca de las operaciones de recogida de productos a realizar.
          p.text-small(numero="d" titulo="YMS (Yard Management System)") Sistema de administración de patios que permite controlar los muelles de recepción y despacho, y rastrear y seguir el movimiento de los trailers a través de tecnología de localización en tiempo real.
          p.text-small(numero="e" titulo="Código de Barras") Tecnología de codificación que permite capturar información relacionada con los números de identificación de artículos, unidades logísticas y localizaciones de manera automática e inequívoca en cualquier punto de la red de valor. Se alcanza una eficiencia considerable cuando se maneja un solo código del producto, a través de la cadena de suministro.
          p.text-small(numero="f" titulo="SCE (Supply Chain Execution)") Es una tecnología que se enfoca a la optimización de movimiento de materiales entre el centro de distribución y los otros agentes de la cadena de suministro. Este sistema es la integración de otras herramientas de ejecución y visibilidad de la cadena de suministro, tales como: TMS (Transportación Management System), LMS y WMS, entre otros.


    #t_4_4.titulo-segundo.mt-5
      .h2 4.4 Normatividad aplicada a la operación de almacenes

    p.mb-4 La normativa de seguridad es fundamental entendiendo que en la mayoría de los procesos operativos de los almacenes se cuenta con personal humano que a su vez es un desarrollador, por eso se deben mantener alejados y visibles, para eso se exponen unas normas en grupos así:

    AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="Normas generales")
        .col-lg-12.mb-4
          p Incluye puntos comunes que afectan a todos los departamentos. El cumplimiento de estas normas se extiende a toda la organización.
      
      .row(titulo="Normas específicas")
        .col-lg-12.mb-4
          p Son las que están relacionadas con actividades de alto riesgo. Estas normas complementan, sin sustituir, el procedimiento de operaciones y tareas críticas.
      
      .row(titulo="Norma para procedimiento de trabajo")
        .col-lg-12.mb-4
          p Se adoptan para ciertas operaciones que por su naturaleza se clasifican de alto riesgo; por ejemplo: permiso de entradas en áreas limitadas, vestuario adecuado para el desarrollo de determinadas labores. La prevención de riesgos se basa en el conocimiento de las causas que motivan accidentes, enfermedades, incidentes, etc., y casi siempre existen posibilidades a nuestro alcance para prevenirlos o atenuar los problemas que pueden ocasionar; de esta forma se pueden evitar las consecuencias negativas y conseguir un perfecto desarrollo de la vida laboral.
    
    .separador-custom

    #t_4_5.titulo-segundo
      .h2 4.5 Factores de riesgo en un almacén
    
    p.mb-4 Las actividades del almacén, generalmente, se realizan en unas condiciones especiales de temperatura, iluminación, humedad, ventilación y ruido; producidas por máquinas, herramientas, vehículos, etc. El trabajo que se realiza dentro del almacén también supone mover constantemente cargas pesadas, apilar en el suelo o en estanterías volúmenes considerables de mercancías y coordinar el desplazamiento de los medios o en vehículos de transporte interno con el tránsito de las personas, que a veces tiene lugar en los mismos pasillos o zonas de acceso.
    p.mb-4 Los siguientes son factores que dependiendo de su manejo representan riesgos para el trabajador:
    
    .row.justify-content-center.mb-4
      .col-lg-12.mb-2
        ol.fa-ol.lista-ol.lista-ol--separador
          li #[span.li--clr.fa-lo #[i.fas.fa-chevron-right]] Los equipos de trabajo son necesarios para realizar las operaciones de almacenaje y manipulación de materiales.
          li #[span.li--clr.fa-lo #[i.fas.fa-chevron-right]] Las condiciones ambientales hacen referencia a todo aquello que ocasione daños en la salud del trabajador, producto del ambiente local, como exceso de ruido, vapores, vibraciones, etc.
          li #[span.li--clr.fa-lo #[i.fas.fa-chevron-right]] La carga de trabajo se caracteriza por esfuerzos físicos que ocasionan lesiones en la espalda y las articulaciones.
          li #[span.li--clr.fa-lo #[i.fas.fa-chevron-right]] La organización del trabajo son aspectos relacionados con la distribución de las actividades que se realizan en el almacén.
          p




</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        titulo: 'Sistemas de transporte por rodillos',
        texto:
          ' Son bandas de transporte a base de rodillos articulados que llevan la carga en una dirección uniforme a velocidad constante.',
        imagen: require('@/assets/curso/tema4/img1.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Grúas',
        texto:
          ' Para cargar mercancías en contenedor se emplean básicamente grúas móviles, grúas pórticos o puente grúas.',
        imagen: require('@/assets/curso/tema4/img2.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Transpallets',
        texto:
          ' Son equipos dotados de dos palas alargadas que, al introducirse debajo de la carga (normalmente dispuestas sobre estibas), permite elevarlas y transportarlas. Son utilizados para el manejo por una persona de cargas de mediano peso, existen de varios tipos manuales, eléctricas, de gasolina a gas, entre otras.',
        imagen: require('@/assets/curso/tema4/img3.svg'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Apiladoras',
        texto:
          ' Es el resultado de dotar a un estibador de un elemento de elevación. Los patines inferiores se introducen por debajo de las estibas, por lo que las tablas inferiores de estos deben ir siempre en el sentido de penetración y nunca en sentido transversal ya que se romperían al elevarlas. <br><br> Los apiladores son eléctricos y en el mercado se pueden encontrar tanto modelos que se manejan a pie, como otros en los que el operario va montado en ellos, ya sea de pie sobre una plataforma, o sentado.',
        imagen: require('@/assets/curso/tema4/img4.svg'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Carretillas manuales',
        texto:
          'Las carretillas de almacén son responsables del movimiento interno de la mercancía, desde los muelles a las ubicaciones de las estanterías, o desde las áreas de producción al almacén. <br><br> -> Estilo no inclinado <br><br> -> Estilo inclinado con cuatro ruedas<br><br>-> Estilo con marco en A <br><br> -> Estilo estante ',
        imagen: require('@/assets/curso/tema4/img5.svg'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Montacargas',
        texto:
          'Tienen una influencia directa sobre las soluciones de almacenaje ya que determinan la anchura mínima de los pasillos y, como consecuencia, la cantidad de estanterías que se puedan instalar y la capacidad de almacenaje. A su vez, los montacargas también inciden en la altura máxima de las estanterías, pudiendo ser mayor o menor según los casos. <br><br> Los montacargas de almacén son responsables del movimiento interno de la mercancía, desde los muelles a las ubicaciones de las estanterías, o desde las áreas de producción al almacén.',
        imagen: require('@/assets/curso/tema4/img6.svg'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
    ],
  }),
}
</script>

<style lang="sass" scoped></style>
