<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Gestión de almacenes - conceptos generales


    
    p.mb-4 La gestión de almacenes es el proceso de la función logística que recibe, almacena, controla y mueve las diferentes mercancías dentro del almacén; permite controlar unitariamente los productos y ubicarlos correctamente para reducir al máximo las operaciones de manutención, los errores y el tiempo de dedicación. En la práctica es el conjunto de procesos que optimizan la logística, permitiendo tener la información confiable y oportuna, maximizando el tiempo de respuesta mediante la mejora continua de las técnicas de operaciones de manipulación, almacenamiento y transporte de mercadería, rapidez en entregas y con ello reducción de costos.
    p.mb-4 Por ende, teniendo en cuenta el concepto de Flamarique (2019), los procesos necesarios para llevar la gestión de almacenamiento se soportan en 5 características que se presentan a continuación:
  


    .row.justify-content-center
      .col-lg-12.align-self-center
        .tarjeta-avatar-b
          img(src='@/assets/curso/tema1/num1.svg', alt='AvatarNum')
          .tarjeta.transparent1(style="border-bottom: 1px solid #afafaf")
            .p-4
              p #[strong Maximizar el espacio:] el espacio de almacenamiento tiene un costo para la organización, normalmente elevado, por lo que hay que aprovecharlo al máximo. El objetivo es almacenar la mayor cantidad de mercancía en el mínimo espacio posible, buscando el equilibrio entre las necesidades del mercado, el tiempo de reposición del producto y la calidad del servicio. 

    .row.justify-content-center
      .col-lg-12.align-self-center
        .tarjeta-avatar-b
          img(src='@/assets/curso/tema1/num2.svg' alt='AvatarNum')
          .tarjeta.transparent2
            .p-4
              p  #[strong Minimizar la manutención del producto:] se trata de reducir al máximo los movimientos de las mercancías, asegurando siempre la accesibilidad a las mismas. Al limitar los movimientos al mínimo se reduce la posibilidad de accidentes y el deterioro o las roturas de los productos.

    .row.justify-content-center
      .col-lg-12.align-self-center
        .tarjeta-avatar-b
          img(src='@/assets/curso/tema1/num3.svg' alt='AvatarNum')
          .tarjeta.transparent2
            .p-4
              p #[strong Adecuación a la rotación de las existencias:] se ha de ajustar la cantidad de producto disponible a la demanda del mercado y a los tiempos de aprovisionamiento. De este modo, se reduce la cantidad de mercancía almacenada y la inversión económica necesaria, con el consiguiente ahorro financiero. La adecuación a la rotación de las existencias también requiere menor espacio de almacenamiento, reduce la cantidad de productos obsoletos o caducados y exige dedicar un menor tiempo a la manutención.

    .row.justify-content-center
      .col-lg-12.align-self-center
        .tarjeta-avatar-b
          img(src='@/assets/curso/tema1/num4.svg' alt='AvatarNum')
          .tarjeta.transparent2
            .p-4
              p #[strong Fácil acceso a las existencias:] se trata de acceder directamente a la mercancía almacenada, de modo que la manutención sea mínima. Facilitar el acceso a las existencias reduce los tiempos de entrada y salida, así como los de preparación de pedidos, y evita accidentes que pueden afectar a las personas y las mercancías. Como resultado de ello, aumenta la productividad global en el almacén.

    .row.justify-content-center
      .col-lg-12.align-self-center
        .tarjeta-avatar-b.mb-5
          img(src='@/assets/curso/tema1/num5.svg' alt='AvatarNum')
          .tarjeta.transparent2
            .p-4
              p #[strong Flexibilidad de la ubicación:] se han de evitar las ubicaciones vacías para evitar incurrir en un costo innecesario. Al reducir las ubicaciones vacías, se consigue aprovechar mejor el espacio, a la vez que se reducen los tiempos de desplazamiento.

    p.mb-4 Todo lo anterior, sumado a un buen diseño del layout del almacén debe favorecer la distribución de materiales y productos para poder localizar y obtener lo que se necesite de la forma más eficiente. Un almacén debe contar con un diseño en el que se proyecten el número de plantas, instalaciones principales, acceso a servicios, salidas de seguridad, entradas y salidas, entre otros elementos.
    .separador-custom


    #t_1_1.titulo-segundo
      .h2 1.1 Introducción general a la gestión de almacenes

    p.mb-4 El almacén es un lugar especialmente estructurado y planificado para custodiar, proteger y controlar los bienes de la empresa, mientras no sean requeridos para la administración, la producción o la venta de artículos, mercancías o servicios.
    p.mb-5 Pueden ser recintos especialmente proyectados y construidos para dicho fin, pero en muchas ocasiones el almacenaje, su planificación y los flujos que genera, se han de adaptar a edificios o recintos diseñados para otras funciones; en otros casos, la finalidad para la que ha sido ideado el recinto donde se emplaza el almacén se ha de modificar en función del producto almacenado, ya sea de su naturaleza, de su forma o de los requerimientos que exige su conservación.

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="Motivos para almacenar")
        .col-md-3.mb-4
          figure(style="text-align: -webkit-center;")
            img(src='@/assets/curso/tema1/img1.svg',  alt='Motivos paraalmacenar', style="width:250px;")

        .col-md-9.mb-4.mb-md-0
          
          ol.fa-ol.lista-ol.lista-ol--separador
                  li.mb-2 #[span.li--clr.fa-lo #[i.fas.fa-chevron-right]] Apoyo a los procesos de producción. Es necesario el almacenamiento de materias primas para tenerlas en el momento de producir.
                  li.mb-2 #[span.li--clr.fa-lo #[i.fas.fa-chevron-right]] Especulación. Se almacena esperando un alza de precios, se da por ejemplo en la venta de licor, que generalmente aumenta en temporadas de descanso o fin de año.
                  li.mb-2 #[span.li--clr.fa-lo #[i.fas.fa-chevron-right]] Aprovechar precios por mayor.
                  li.mb-2 #[span.li--clr.fa-lo #[i.fas.fa-chevron-right]] Desequilibrios entre oferta y demanda. Son pocos los productos cuya demanda coincide en tiempo y cantidad con su oferta.
                  li.mb-2 #[span.li--clr.fa-lo #[i.fas.fa-chevron-right]] Mejora de la calidad del servicio al cliente. Se reducen las demandas insatisfechas (roturas de stock) y se optimizan los tiempos de entrega.
                  li.mb-2 #[span.li--clr.fa-lo #[i.fas.fa-chevron-right]] Reducción de costes logísticos. A pesar de necesitar un mayor espacio de almacenamiento, puede ser más rentable realizar aprovisionamientos en grandes cantidades, ya que se consiguen rappels (descuentos por volumen de compra) y tarifas más competitivas por el transporte de cargas completas.
                  li.mb-2 #[span.li--clr.fa-lo #[i.fas.fa-chevron-right]] Complemento al proceso productivo de empresas industriales a causa de los controles de calidad obligatorios y la necesidad de mantener un stock de materias primas para no paralizar los procesos productivos.
                  li.mb-2 #[span.li--clr.fa-lo #[i.fas.fa-chevron-right]] Facilitar la rapidez de las entregas controlando las existencias.
                  li.mb-2 #[span.li--clr.fa-lo #[i.fas.fa-chevron-right]] Almacenamiento de los productos terminados mientras se venden.
      

      .row(titulo="Motivos para no almacenar")
        .col-md-3.mb-4
          figure(style="text-align: -webkit-center;")
            img(src='@/assets/curso/tema1/img2.svg', alt='Motivos para no almacenar', style="width:250px; text-align: -webkit-center;")

        .col-md-9.mb-4.mb-md-0.align-self-center
          
          ol.fa-ol.lista-ol.lista-ol--separador
                  li.mb-2 #[span.li--clr.fa-lo #[i.fas.fa-chevron-right]] Costos.
                  li.mb-2 #[span.li--clr.fa-lo #[i.fas.fa-chevron-right]] Obsolescencia de los productos almacenados.
                  li.mb-2 #[span.li--clr.fa-lo #[i.fas.fa-chevron-right]] Deterioro o daños de los productos por su manipulación.
                  li.mb-2 #[span.li--clr.fa-lo #[i.fas.fa-chevron-right]] Robos, plagas y pérdidas.

    .separador-custom

    #t_1_2.titulo-segundo
      .h2 1.2 Evolución de los almacenes

    p.mb-4 Los almacenes avanzan con el tiempo en bloques notorios como se evidencia en la siguiente imagen:

    .tarjeta.tarjeta--gris.p-4.mb-5
      //- LineaTiempoC debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      LineaTiempoC.color-primario
        .row(titulo="1940 Carga manual")
          .col-md-3.mb-4
            figure(style="text-align: -webkit-center;")
              img(src='@/assets/curso/tema1/img3.svg', alt='Carga manual', style="width:250px; text-align: -webkit-center;")
          .col-md-9.mb-4.mb-md-0.align-self-center
            p Según Garavito (2008) “los primeros almacenes se basaban casi en su totalidad en la fuerza del personal para el almacenaje y movimiento de los productos”, la primera modificación importante es precisamente respecto a la mano de obra, ya que se crearon cargas unitarias basadas en el concepto de pallet.
        

        .row(titulo="1950 Y 1960 Pallet")
          .col-md-3.mb-4
            figure(style="text-align: -webkit-center;")
              img(src='@/assets/curso/tema1/img4.svg', alt='Pallet', style="width:250px; text-align: -webkit-center;")
          .col-md-9.mb-4.mb-md-0.align-self-center
            p En las décadas de los cincuenta y sesenta, con la subida de los precios aparecieron varios sistemas mecánicos para reducir aún más la utilización de la mano de obra y mejorar la circulación de los productos en el interior del almacén. Para la mayor parte de los almacenes esta función pasó a ser más operada por maquinaria que por mano de obra logrando apropiar el poder de los pallets.
        


        .row(titulo="1970 Pila simple")
          .col-md-3.mb-4
            figure(style="text-align: -webkit-center;")
              img(src='@/assets/curso/tema1/img5.svg', alt='Pila simple', style="width:250px; text-align: -webkit-center;")

          .col-md-9.mb-4.mb-md-0.align-self-center
            p Posteriormente se desarrollaron sistemas por grupos llamados pila simple, este tipo de disposición tiene una doble ventaja: en primer lugar, ser económico de instalar, ya que solo requiere el uso de un equipo muy elemental y conocimientos básicos; y, en segundo lugar, un uso eficiente del espacio destinado a almacenar.
        

        .row(titulo="2000 Mecanización")
          .col-md-3.mb-4
            figure(style="text-align: -webkit-center;")
              img(src='@/assets/curso/tema1/img6.svg', alt='Mecanización', style="width:250px; text-align: -webkit-center;")
          .col-md-9.mb-4.mb-md-0.align-self-center
            p Llega el equipo mecánico, incluyendo la implementación de cintas transportadoras y métodos para sujetar automáticamente las cargas a los pallets. Cada uno de estos métodos produjo un aumento en la eficiencia de los almacenes; generalmente, los almacenes más eficientes son los que logran albergar la mayor cantidad de producto por metro cuadrado de espacio disponible, con esto se reducen costos como los de calefacción, mantenimiento y administración.
        

    p.mb-5 La evolución es buena pero cada sistema tiene sus cosas a tener en cuenta, por ejemplo, las pilas simples presentan dificultad porque al producirse el mayor peso sobre las existencias ubicadas en la parte más baja, puede dañar esa parte y no es fácil llegar a esas cajas sin bajar las que están sobre ella; para que lo entienda mejor, imagínese una pila de monedas en la que haya por lo menos 10 monedas una sobre otra y usted quiere quitar la de abajo sin que se caigan las otras. En este modelo también se debe tener en cuenta que la altura de cada pila tiene un límite que por lo general es de hasta 7 metros, de esta manera se puede mantener un sistema que no tenga tanto riesgo de caída por inestabilidad, por estas razones, la mayoría de las empresas comerciales invierten en algún tipo de sistemas de estanterías que reduzca el riesgo.

    .titulo-quinto.color-acento-contenido
      h4.mb-4 Estante
    
    .row.justify-content-center.mb-4
      .col-lg-10.align-self-center
        figure
          img(src='@/assets/curso/tema1/img7.svg', alt='Estante')

    .separador-custom



    #t_1_3.titulo-segundo
      .h2 1.3 Características de los almacenes

    p.mb-4 En ocasiones, la actividad económica de una empresa puede exigir de uno o varios tipos de almacenes entre los que se tienen: de materias primas, de productos semielaborados, de productos terminados, etc. Todos ellos han de estar ubicados en función de las necesidades específicas de su funcionamiento y de acuerdo con las restricciones o las posibilidades de cada localización y su entorno.
    p.mb-5 La mejor manera de clasificar los distintos tipos de bodegas que se pueden dar en la actualidad es agrupándolas según sus características comunes:

    SlyderB.mb-5(:datos="datosSlyder")

    .separador-custom

    #t_1_4.titulo-segundo
      .h2 1.4 Función de los almacenes
    //- .cajon debe ir acompañado de una de una de estas clases => 
    //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
    .row.mb-4.justify-content-center 
      .col-lg-10.align-self-center
        .cajon.color-acento-contenido.p-4.mb-4
          p El almacén hace parte fundamental de la cadena logística y su función general es la de regular el flujo de mercancías dentro de la red logística.

    p.mb-5 Las funciones se caracterizan independientemente por la actividad a la que se dedique la empresa, como se observa en la siguiente figura, donde se puede ver un comportamiento logístico aproximado a un almacén.
    
    .titulo-quinto.color-acento-contenido
      h4.mb-4 Funciones logísticas del almacén

    .row.justify-content-center.mb-4
      .col-lg-12.align-self-center
        figure
          img.mb-2(src='@/assets/curso/tema1/img13.svg', alt='Estante')
          figcaption.text-center(style='background-color: #f2f6fe;') Nota. Modificado de Riveros (2015)

    p.mb-4 Las funciones del almacén más relevantes son la recepción de las mercancías, su almacenamiento, cuidado, control, conteo y envío; como se muestra en el siguiente video:

    figure.mb-5
      .video
        iframe(width="853" height="480" src="https://www.youtube.com/embed/jTFqJAc0SRA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      
    .separador-custom

    #t_1_5.titulo-segundo
      .h2 1.5 Ubicación de los almacenes

    p.mb-4 Determinar la ubicación de un almacén es uno de los aspectos primordiales que hay que considerar antes de su instalación. La localización de la bodega es un factor que influye no sólo en el aspecto constructivo, sino, sobre todo, en el estratégico, y puede ser decisivo en el éxito o el fracaso del negocio; para Pérez (2017), “el estudio de la ubicación de un almacén deberá realizarse mediante el examen de cuatro factores básicos: la producción, los costos, la demanda y la competencia” (párr.2), todos estos aspectos se relacionan entre sí y por separado como se evidencia en el siguiente gráfico:

    figure.mb-4 
      img.mb-2(src='@/assets/curso/tema1/img14.svg', alt='Ubicacion de los almacenes')

    p.mb-4 En una correcta distribución y comercialización de los productos con relación a la ubicación se deben tener en cuenta el análisis de los siguientes parámetros:

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="Características del producto")
        .col-md-3.mb-4
          figure(style="text-align: -webkit-center;")
            img(src='@/assets/curso/tema1/img5.svg',  alt='Características del producto', style="width:250px;")

        .col-md-9.mb-4.mb-md-0
          
          ol.fa-ol.lista-ol.lista-ol--separador
                  li.mb-2 
                    p.mb-0 Para realizar el análisis de las características del producto que pueden influir en la ubicación del almacén, se tienen en cuenta tres aspectos: #[strong su durabilidad, su estabilidad intrínseca y su manejabilidad.]
                  li.mb-2 #[span.li--clr.fa-ol #[i.fas.fa-chevron-right]]
                    p.mb-0 #[strong Durabilidad:] esta característica determina cuánto más o menos próximos han de estar ubicados los almacenes de distribución respecto de los puntos de consumo.
                  li.mb-2 #[span.li--clr.fa-ol #[i.fas.fa-chevron-right]]  
                    p.mb-0 #[strong Estabilidad intrínseca:] si el producto es muy inestable intrínsecamente, necesitará instalaciones especiales de almacenaje ya que esa condición puede afectar a la seguridad física del lugar e incluso a la salud de la población.
                  li.mb-2 #[span.li--clr.fa-ol #[i.fas.fa-chevron-right]]  
                    p.mb-0 #[strong Manejabilidad:] las alternativas y facilidad que ofrece un producto para ser manejado puede suponer una característica restrictiva del número de movimientos que se puedan realizar con el artículo.
      

      .row(titulo="Capacidad de fabricación de la industria")
        .col-md-3.mb-4
          figure(style="text-align: -webkit-center;")
            img(src='@/assets/curso/tema1/img16.svg', alt='Capacidad de fabricación de la industria', style="width:250px; text-align: -webkit-center;")

        .col-md-9.mb-4.mb-md-0.align-self-center
          p La capacidad de fabricación de la industria a la que dé servicio el almacén determina la cantidad de mercancía que se necesita albergar.


      .row(titulo="Características de la red de distribución necesaria")
        .col-md-3.mb-4
          figure(style="text-align: -webkit-center;")
            img(src='@/assets/curso/tema1/img17.svg', alt='Características de la red de distribución necesaria', style="width:250px; text-align: -webkit-center;")

        .col-md-9.mb-4.mb-md-0.align-self-center
          p La composición y disposición de la red necesaria para la comercialización de un artículo influirá en la localización, en el número y en el tipo de bodegas que se necesitarán para cubrirla.

    .separador-custom

    #t_1_6.titulo-segundo
      .h2 1.6 Distribución física y layout

    //- .cajon debe ir acompañado de una de una de estas clases => 
    //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
    .row.mb-4.justify-content-center 
      .col-lg-10.align-self-center
        .cajon.color-acento-contenido.p-4.mb-4
          p El layout de una empresa es la distribución planimétrica de sus distintas dependencias e instalaciones y la relación de esta distribución con los distintos flujos de materiales, productos en proceso y con los desplazamientos de personas y vehículos. Es la relación de los espacios físicos con las actividades y movimientos totales de la empresa.

    p.mb-4 La distribución general de una instalación debe ser acorde con un buen sistema de almacenamiento que cubra estas necesidades:


    .row.justify-content-center.mb-4
      .col-md-8.mb-4.mb-md-0.align-self-center
          
          ol.fa-ol.lista-ol.lista-ol--separador
              
                  li.mb-2 #[span.li--clr.fa-ol #[i.fas.fa-chevron-right]]
                    p.mb-0 El mejor aprovechamiento del espacio
                  li.mb-2 #[span.li--clr.fa-ol #[i.fas.fa-chevron-right]]  
                    p.mb-0 La reducción al mínimo de la manipulación de las mercancías
                  li.mb-2 #[span.li--clr.fa-ol #[i.fas.fa-chevron-right]]  
                    p.mb-0 La facilidad de acceso al producto almacenado
                  li.mb-2 #[span.li--clr.fa-ol #[i.fas.fa-chevron-right]]
                    p.mb-0 El máximo índice de rotación posible
                  li.mb-2 #[span.li--clr.fa-ol #[i.fas.fa-chevron-right]]  
                    p.mb-0 La flexibilidad máxima para la colocación del producto
                  li.mb-2 #[span.li--clr.fa-ol #[i.fas.fa-chevron-right]]  
                    p.mb-0 La facilidad de control de las cantidades almacenadas.
                  li.mb-2 #[span.li--clr.fa-ol #[i.fas.fa-chevron-right]]  
                    p.mb-0 Para conseguir esos objetivos, primero se ha de efectuar una distribución planimétrica, lo que se conoce más habitualmente con el término inglés layout, es decir, el diseño de un almacén plasmado en un plano.
                  
    .titulo-quinto.color-acento-contenido
      h4.mb-4 Layout almacén

    figure(style="text-align: -webkit-center;")
      img.mb-1(src='@/assets/curso/tema1/img18.svg',  alt='Layout almacén')
      figcaption(style='background-color: #f2f6fe;') Nota. Modificado de Castellanos (2015)








  
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        titulo: 'Según la naturaleza del producto',
        texto:
          ' Se pueden encontrar bodegas especializadas en bobinas, productos inflamables, perfiles, pequeño material, recambios, productos perecederos e incluso bodegas que son de uso general, entre otras posibilidades.',
        imagen: require('@/assets/curso/tema1/img8.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'El edificio',
        texto:
          ' También puede ser un criterio de clasificación y así se habla de bodegas al aire libre, naves, sótanos, bodegas de gran altura o depósitos, cámaras frigoríficas, bodegas autoportantes (las estanterías conforman el armazón del propio edificio), etc.',
        imagen: require('@/assets/curso/tema1/img9.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Dependiendo del flujo de materiales',
        texto:
          ' Las instalaciones pueden agruparse en aquellas destinadas a materias primas, componentes o productos semielaborados, productos acabados, bodegas intermedias, de depósito, para distribución, etc.',
        imagen: require('@/assets/curso/tema1/img10.svg'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'En cuanto a su localización',
        texto: ' Se habla de bodegas centrales, regionales y de tránsito.',
        imagen: require('@/assets/curso/tema1/img11.svg'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'En cuanto a su mecanización',
        texto: 'Pueden ser manuales, convencionales o automatizadas.',
        imagen: require('@/assets/curso/tema1/img12.svg'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
    ],
  }),
}
</script>

<style lang="sass" scoped></style>
