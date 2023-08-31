<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Procesos logísticos en la gestión de almacenes

    p.mb-5 En el desarrollo de una bodega donde se realizan procesos de almacenamiento, se desarrollan cuatro subprocesos claramente identificados:
    .row.justify-content-center.mb-5
      .col-lg-4(data-aos="fade-right")
        figure 
          img(src='@/assets/curso/tema5/img1.svg', alt='Imagen decorativa', style='width:350px;').mx-auto
      .col-lg-4.align-self-center(data-aos="fade-left")
        ul.lista-ul--color.lista-ul--separador
          li(style="margin-bottom: 2px")
            i.fas.fa-check-circle(style="color: #FE7062;")
            p.mb-0 Producción
          li(style="margin-bottom: 2px")
            i.fas.fa-check-circle(style="color: #FE7062;")
            p.mb-0 Recepción y almacenamiento.
          li(style="margin-bottom: 2px")
            i.fas.fa-check-circle(style="color: #FE7062;")
            p.mb-0 Separación, alistamiento y despacho.
          li(style="margin-bottom: 2px")
            i.fas.fa-check-circle(style="color: #FE7062;")
            p.mb-0 Cross Docking.

    .row.justify-content-center.mb-5
      .col-lg-12
        .titulo-sexto.color-acento-botones(data-aos="fade-right")
          h5 Figura 9.
          span Subprocesos de almacenamiento
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema5/img2.svg', alt='Imagen decorativa', style='width:500px;').mx-auto

    separador
    #t_5_1.titulo-segundo.color-acento-botones(data-aos="fade-right")
      .h2 5.1 Producción y/o logística interna

    p.mb-4 Son todos aquellos procesos de la cadena de suministro que tienen lugar dentro de la propia empresa, comprende entonces, actividades de logística dentro de los muros de una organización, por ejemplo, transportes internos, manejo de materiales, almacenaje y embalaje; es decir, desde que la compañía recibe la mercancía en sus instalaciones hasta que ésta sale, ya sea hacia un colaborador logístico o rumbo a su destino final.
    p.mb-5 El objetivo de crear eficiencia y minimizando la subutilización dentro de la empresa como un todo, además, los abastecedores y los clientes son componentes externos en el ambiente del sistema de logística interna, una vez que pueden influir en el sistema de logística, pero no pueden controlarlo. El sistema interno se basa en condiciones internas y metas que dictan como los recursos del sistema son utilizados para buscar los mejores resultados.


    .row.justify-content-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-botones(data-aos="fade-right")
          h5 Figura 10.
          span Componentes de la logística interna
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema5/img3.svg', alt='Imagen decorativa')

    separador
    #t_5_2.titulo-segundo.color-acento-botones(data-aos="fade-right")
      .h2 5.2 Recibo y almacenamiento

    p.mb-5 En muchas industrias la llegada de la mercancía es la parte básica en la gestión de almacenes, este recibo debe ser supervisado y cargado por fases conforme se muestra a continuación. Para la realización de la recepción y el ingreso a bodega de los productos se requiere una logística y materiales claves que deben tener una forma especial en búsqueda del cumplimiento del objetivo de ingreso con rapidez y orden; estos son los detalles que puede destacar dentro de este trabajo.

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta BG01" data-aos="fade-right")
      .row.justify-content-center(titulo="Muelles")
        .col-lg-11.mb-4
          p.mb-0 Son sistemas de logística fundamentales ya que en ellos se produce la operación de carga y descarga de materias primas, mercancías y productos elaborados para cualquier industria o almacén. Estos garantizan en todo tipo de operación la protección de la mercancía. 
        .col-lg-12.mb-5
          .titulo-sexto.color-acento-botones
            h5 Figura 11.
            span Recepción e ingreso en los muelles
          figure
            img(src='@/assets/curso/tema5/img4.svg', alt='Imagen decorativa')
        .col-lg-11.mb-4
          p La zona donde se producen estos movimientos debe ser fácilmente accesible para los vehículos, manteniendo un equilibrio en los movimientos de carga y descarga.
          p En un CEDI, el diseño de los muelles debe responder a decisiones sobre:
          ul.lista-ul--color.lista-ul--separador
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #FE7062;")
              | Si es posible y adecuado que el recibo y el despacho de mercancías estén separados. (En teoría, esto sería lo mejor por control y logística)
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #FE7062;")
              | Si los muelles están bien localizados en la relación con la estantería de bodega, para que se minimicen los recorridos al almacenar y despachar.
      .row.justify-content-center(titulo="Verificación de recepción")
        .col-lg-11
          p La actividad fundamental en la recepción de vienes es la verificación de lo recibido, contra lo teóricamente enviado. La forma de verificar lo que va a recibirse, depende de la clase de bienes que van a ingresar, del volumen, del empaque, de su estado físico (solido, liquido, gaseoso) etc.
          p Existen dos formas de verificación posibles:
          ul.lista-ul--color.lista-ul--separador
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #FE7062;")
              p.mb-0 #[strong Recepción ciega:]  cuando se chequean o aceptan unos bienes sin saber lo que debe recibirse.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #FE7062;")
              p.mb-0 #[strong Recepción con notificación:] cuando se confronta lo recibido frente a lo solicitado.
      .row.justify-content-center(titulo="Entrega certificada")
        .col-lg-11
          p.mb-0 Se produce como fruto de un convenio entre el proveedor y el cliente, y se suprimen las verificaciones ordinarias de los envíos del proveedor y se agilizan las recepciones, lo que se traduce en un significativo ahorro.

    separador
    #t_5_3.titulo-segundo.color-acento-botones(data-aos="fade-right")
      .h2 5.3 Separación, alistamiento y despacho

    p.mb-4 Con el recibido de la mercancía inicia el siguiente proceso que es la preparación para el despacho, pero antes de eso se requiere definir el espacio para cada producto por separado debido a sus condiciones especiales o de trabajo unitarias, atención a los siguientes elementos que se refieren a ese trabajo.

    .row.mb-5(data-aos="zoom-in")
      AcordionA(tipo="a" clase-tarjeta="tarjeta BG01")
        .row.justify-content-center(titulo="Manejo del espacio")
          .col-lg-11
            p.mb-4 El almacenamiento está condicionado tridimensionalmente. Su unidad de medida son los metros cúbicos (m³), ya que es la única unidad de medida que expresa magnitud en la bodega.
            p.mb-0 El espacio de bodega destinado a los bienes en custodia tiene dos utilizaciones: espacio para bienes depositados y área de circulación. Lo ideal es maximizar el espacio para depositar los bienes y minimizar las áreas de circulación, sin ningún perjuicio de la agilidad y seguridad.
        .row.justify-content-center(titulo="Preparación de pedidos o picking")
          .col-lg-11
            p.mb-4 Es la actividad de preparación de pedidos, consiste en la recogida y combinación de cargas no unitarias para conformar el pedido de un cliente, puede llevarse a cabo en casi cualquier tipo de almacén y se produce siempre que se necesite juntar paquetes, piezas, productos o materiales para, una vez reunidos, proceder a su traslado.
            p.mb-0 Esta actividad puede llevarse a cabo de muchas maneras: desde la más sencilla, en la que un operario recorre la instalación recopilando las unidades; a las más sofisticadas, como es, por ejemplo, la que se basa en un sistema completamente automatizado con preparación mecanizada. Cada uno de estos métodos es ideal para una o más aplicaciones.
        .row.justify-content-center(titulo="Remisión de despacho")
          .col-lg-11
            p.mb-4 Una vez separados los bienes que deben ser despachados e individualizados, se configura el pedido total y se procede al embalaje y la marcación o etiquetado.

    separador
    #t_5_4.titulo-segundo.color-acento-botones(data-aos="fade-right")
      .h2 5.4 Cubicaje

    p.mb-4 Se refiere a la acción de acomodar las mercancías en un soporte de manipulación (pallets) o medio de transporte (camión, contenedor). Cubicar y usar mejor su volumen, es el aprovechamiento máximo de espacios a llenar por una carga y/o mercancía, igualmente define los pesos brutos, jugando con las dimensiones internas y externas de estos espacios para trabajar con tranquilidad las resistencias dinámicas y estáticas de embalajes, contenedores, pallets o tarimas, lo mismo que anaqueles o estanterías.

    .row.justify-content-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-botones(data-aos="fade-right")
          h5 Figura 12.
          span Cubicaje y volumetría
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema5/img5.svg', alt='Imagen decorativa', style='width:750px;').mx-auto

    p.mb-5 Todas las unidades de carga (incluyendo el producto embalado y unitarizado) tienen determinado su peso y volumen, esta relación la obtenemos de dividir el volumen (cubicaje) de la carga por su peso bruto.

    .row.justify-content-center
      .col-lg-10(data-aos="flip-up")
        .cajon.color-acento-contenido.p-4.mb-4
          p.mb-4 Es  decir:
          p #[strong FE: #[u Volumen]] (Largo x Ancho x Alto(m<sup>3</sup>))  
          p.mb-5 #[strong Peso  ]  (Peso de la carga + peso del empaque + peso de la estiba)
          p El resultado será expresado en Ton/m<sup>3</sup> - Tonelada metro cúbico

    separador
    #t_5_5.titulo-segundo.color-acento-botones(data-aos="fade-right")
      .h2 5.5 Cross docking

    p.mb-4 Cross Docking o muelle de paso, es la recepción de los bienes enviados por un proveedor, los cuales no van a ser almacenados, sino que se reciben y deben, en un lapso no mayor de 24 horas, ser despachados a un destino final; es el movimiento de una mercancía a través del centro de distribución (o plataforma logística) desde el muelle de recibo hasta el de embarque, sin que se requiera un almacenamiento intermedio prolongado.

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta BG01" data-aos="zoom-in")
      .row(titulo="Beneficios")
        .row.justify-content-center
          .col-lg-11
            ul.lista-ul--color.lista-ul--separador
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #FE7062;")
                p.mb-0 Manejo dinámico de inventarios
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #FE7062;")
                p.mb-0 Ahorro en fletes.
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #FE7062;")
                p.mb-0 Liberación de capital inmovilizado.
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #FE7062;")
                p.mb-0 Reducción de costos operacionales.

      .row(titulo="Formas de generarlo")
        .row.justify-content-center
          .col-lg-11
            p.mb-4 Existen dos formas de generar un Cross docking:
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta
                  span 1
                | Cuando un proveedor envía al CEDI (centro de distribución) un pedido consolidado que va a ser subdividido para reenviar a varios destinatarios.
              li 
                .lista-ol--cuadro__vineta
                  span 2
                | Cuando al proveedor se le solicita un pedido indicando como subdividirlo, este llega al CEDI, se le adecua un espacio en el muelle y se genera un despacho para el destinatario.
    
    separador
    #t_5_6.titulo-segundo.color-acento-botones(data-aos="fade-right")
      .h2 5.6  Sistemas de gestión de calidad

    p.mb-4 De acuerdo con la Organización Internacional de Normalización - ISO, (2020) La calidad total es uno de los objetivos más ansiados por la logística, aunque también uno de los más esquivos. Los costes y la presión de la competencia hacen muy difícil encontrar la serenidad y el clima idóneo necesarios para el desarrollo de un programa de calidad adecuado, mientras que los problemas operativos se multiplican día a día, precisando sin pausa, más recursos para resolverlos y dando pie a un círculo vicioso que pone en dificultades a no pocas empresas. En consecuencia, implementar un sistema de calidad, en especial en el área logística, supone un importante esfuerzo por conocer perfectamente todos y cada uno de los procesos que se realizan, hasta el punto de poderlos describir con propiedad y exactitud; si alguno no es fácil de definir, casi siempre significa que en él influyen todo tipo de casuísticas, incluyendo el azar, con las previsibles consecuencias de no calidad.
    p.mb-5 De entre todos los procedimientos que componen la estructura de un sistema de calidad en los procesos de almacenamiento, cabe destacar los que hacen referencia al control de temperaturas en el almacén y en el transporte.

    .row.justify-content-center
      .col-lg-6.col-sm-10.mb-lg-0.mb-4(data-aos="fade-right")
        figure.mb-4
          img(src='@/assets/curso/tema5/img6.svg', alt='Imagen decorativa').mx-auto
        .h4 El control de la temperatura en el almacén
        p.mb-4 Desde el punto de vista de las condiciones de almacenamiento, los productos se dividen principalmente en tres grandes categorías: almacenaje a temperatura ambiente, refrigerados a temperatura controlada, entre 2 y 8ºC, y congelados a diferentes temperaturas, habitualmente en torno a los -20ºC
        p Desde el punto de vista de ISO (2020) se dice que se debe garantizar que, en el primer tipo, el de temperatura ambiente, los materiales se mantienen entre los 25 y 30ºC en todos los casos, que es el máximo que se establece para la gran mayoría de estos productos, pero se debe tener en cuenta el sitio geográfico desde donde se está trabajando porque hay poblaciones con temperaturas por fuera de estos rangos de temperatura.
      .col-lg-6.col-sm-10(data-aos="fade-left")
        figure.mb-4
            img(src='@/assets/curso/tema5/img7.svg', alt='Imagen decorativa').mx-auto
        .h4 El control en el transporte
        p Se pretende garantizar que los productos hayan permanecido en todo momento dentro de unos márgenes aceptables en relación a la temperatura del producto desde su almacenamiento, en su caso, que el tiempo que han estado en dicha situación ha sido lo suficientemente corto como para considerarlo aceptable, en función de las especificaciones aportadas por el fabricante.
        

    separador
    #t_5_7.titulo-segundo.color-acento-botones(data-aos="fade-right")
      .h2 5.7 Manejo de residuos en los almacenes y CEDI (centros de distribución)

    p.mb-4 El manejo integral de los residuos comprende un esfuerzo en común entre los almacenes (gestión interna) y el departamento de gestión ambiental (gestión externa) realizando mejoras en la prevención, el almacenamiento, la recolección, el transporte, el aprovechamiento, el tratamiento y la disposición final.
    p.mb-4 Según estudios realizados en este tema se entiende que la prevención de la generación de residuos sólidos peligrosos y no peligrosos desde su origen, es la forma más eficaz de reducir la cantidad de residuos a manejar, el costo asociado a su manipulación y los impactos a la salud y al ambiente, esta actividad implica:

    .row.justify-content-center
      .col-lg-12
        ul.lista-ul--color.lista-ul--separador
          li(style="margin-bottom: 2px" data-aos="fade-right")
            i.fas.fa-check-circle(style="color: #FE7062;")
            p.mb-0 La adopción de buenas prácticas, la optimización de los procesos, el cambio a tecnologías limpias, la sustitución de materias primas y la modificación de productos.
          li(style="margin-bottom: 2px" data-aos="fade-right")
            i.fas.fa-check-circle(style="color: #FE7062;")
            p.mb-0 La utilización de una menor cantidad de empaques, solicitando al proveedor la entrega de productos sin envolturas innecesarias, y el empleo de empaques que sean susceptibles de aprovechamiento.
          li(style="margin-bottom: 2px" data-aos="fade-right")
            i.fas.fa-check-circle(style="color: #FE7062;")
            p.mb-0 La reutilización de elementos que se generan en las organizaciones. Igualmente, el reciclaje de materiales, y el aprovechamiento de subproductos utilizándolos como materias primas.
          li(style="margin-bottom: 2px" data-aos="fade-right")
            i.fas.fa-check-circle(style="color: #FE7062;")
            p.mb-0 Sustitución de materias primas: por ejemplo, utilizar colorantes de bajo impacto ambiental, sustituir lacas solubles en disolventes por lacas solubles en agua o sustituir solventes orgánicos por productos a base de agua.
          li(style="margin-bottom: 2px" data-aos="fade-right")
            i.fas.fa-check-circle(style="color: #FE7062;")
            p.mb-0 Modificación del proceso productivo, como, por ejemplo, mejorar los métodos de aplicación de tintes, curtido sin cromo.
          li(style="margin-bottom: 2px" data-aos="fade-right")
            i.fas.fa-check-circle(style="color: #FE7062;")
            p.mb-0 Buenas prácticas operacionales, como el control de inventarios de materias primas utilizadas con el fin de establecer la cantidad de residuos a generar, buscando su reducción, implementando la optimización de los procesos productivos.

    p.mb-4 El manejo integral de los residuos comprende un esfuerzo en común entre los almacenes (gestión interna) y el departamento de gestión ambiental (gestión externa) realizando mejoras en la prevención, el almacenamiento, la recolección, el transporte, el aprovechamiento, el tratamiento y la disposición final.
    p.mb-4 En torno a estos procesos la organización debe establecer un término concordante con los resultados esperados y plantear una serie de objetivos y metas cuantitativas que permitan su medición. Estas pueden estar asociadas con actividades de reutilización de materiales que lo permitan, cambio en los insumos empleados en los procesos desarrollados y que generan impactos ambientales negativos por otros de menor impacto, reducción en la cantidad de residuos generados, incremento en la destinación adecuada de los residuos, establecimiento de acuerdos con proveedores de insumos o productos para la devolución de elementos vencidos, deteriorados o remanentes, entre otras metas que la organización considere necesarias.
    p.mb-4 El diagnóstico, permite definir el tipo y cantidad de recipientes existentes y cuáles son los que se requieren para la adecuada separación de los residuos en todas las áreas de la organización. Algunos recipientes son desechables y otros reutilizables, pero todos deben cumplir con el color correspondiente a la clase de residuos que se va a depositar en ellos, como se ilustra en la siguiente figura a lo cual se le denomina código de colores, aspecto que no es obligatorio, pero sí importante y poco a poco la legislación va acercando este concepto a una obligatoriedad.
    p.mb-4 Para facilitar el proceso de separación en la fuente es conveniente que los recipientes estén rotulados teniendo en cuenta los siguientes aspectos:

    .row.justify-content-center.mb-5
      .col-lg-12
        ul.lista-ul--color.lista-ul--separador
          li(style="margin-bottom: 2px" data-aos="fade-right")
            i.fas.fa-check-circle(style="color: #FE7062;")
            p.mb-0 Tipo de residuo a disponer y su listado correspondiente.
          li(style="margin-bottom: 2px" data-aos="fade-right")
            i.fas.fa-check-circle(style="color: #FE7062;")
            p.mb-0 Símbolo asociado, en caso de tener uno establecido.
          li(style="margin-bottom: 2px" data-aos="fade-right")
            i.fas.fa-check-circle(style="color: #FE7062;")
            p.mb-0 Los recipientes deben ser visibles y estar ubicados estratégicamente en las instalaciones de la organización.
          li(style="margin-bottom: 2px" data-aos="fade-right")
            i.fas.fa-check-circle(style="color: #FE7062;")
            p.mb-0 No se requiere de bolsas del mismo color, estas pueden ser reemplazadas por bolsas transparentes, lo importante es que se haga una adecuada recolección.
    
    .titulo-sexto.color-acento-botones(data-aos="fade-right")
      h5 Figura 13.
      span Código de colores para la separación de residuos
    figure(data-aos="zoom-in" style='margin-bottom:90px;')
      img(src='@/assets/curso/tema5/img8.svg', alt='Imagen decorativa').mx-auto
    
    .row.justify-content-center
      .col-lg-10(data-aos="fade-right")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema5/avatar.svg' alt='Imagen decorativa')
          .tarjeta.tarjeta--azul
            .p-4
              p Es muy importante tener en cuenta que también son considerados residuos o desechos peligrosos los envases, empaques y embalajes que hayan estado en contacto con algún residuo que se identifica como peligroso; la ubicación de los recipientes debe obedecer a los aspectos identificados durante el diagnóstico y debe quedar consignado en el manejo integral de residuos, de manera que propicie la separación en cada uno de los puntos de generación.

    p.mb-4 El envasado, embalado, rotulado y etiquetado debe estar conforme a la normatividad vigente, principalmente cuando se trate de residuos peligrosos, en Colombia es la Ley 55 de 1993 que se recomienda revisar por su parte de manera independiente.
    
    separador
    #t_5_8.titulo-segundo.color-acento-botones(data-aos="fade-right")
      .h2 5.8  Automatización y robótica, las nuevas tendencias

    p.mb-4 La tendencia tecnológica avanza no solo en computación sino en todas las áreas de trabajo humano y la logística desde la operación de carga y su almacenamiento no se queda atrás, estos son los temas más relevantes para tener en cuenta en este elemento: 
    p.mb-4 Según la revista Stock Logistic, (2019) el control automático o automatización en logística se refiere al uso de sistemas de control, maquinaria o software para mejorar la eficiencia de las operaciones, este control normalmente se aplica a los procesos que se deben realizar en un almacén o centro de distribución y cuyo resultado es optimizar los procesos, porque, además de operaciones mecánicas, intervienen cierto manejo de información y elementos de control operativo que ayudan a mejorar la calidad. 
    p.mb-5 Para dar más profundidad al tema se trabajan a continuación algunas ventajas y desventajas de la automatización junto con los conceptos de mecanización y robotización que se deben tener en cuenta por ser tendencia:

    TabsC.color-acento-botones.mb-5(data-aos="zoom-in")
      .p-1.p-md-2(titulo="Ventajas de la automatización").tarjeta--azul
        .row.justify-content-center
          .col-lg-7.order-lg-1.order-2
            p Las principales ventajas que conlleva la logística de automatización son:
            ul.lista-ul--color.lista-ul--separador
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #FE7062;")
                p.mb-0 El acceso en tiempo real de carga y análisis de datos. Cuando se tiene acceso a los datos de la carga y a la capacidad de ejecutar informes, se tiene la posibilidad de tomar mejores decisiones de gestión.
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #FE7062;")
                p.mb-0 Disminución de errores que ocasionan un gran coste. En la introducción manual de datos pueden darse una cantidad de errores que den lugar a un aumento de los gastos de movilidad y almacenamiento.
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #FE7062;")
                p.mb-0 Control de la organización. Los sistemas suelen ser lo suficientemente flexibles como para adaptarse a las reglas de negocio de la compañía y, a la vez, potentes como para obligar a todos los usuarios, tanto internos como externos, para seguir las políticas que aseguren el envío eficiente y rentable.
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #FE7062;")
                p.mb-0 Mejora del servicio al cliente ya que se puede hacer un seguimiento en tiempo real de carga, auto pick-up, el seguro adecuado y la contabilidad de carga incorporando a sus especificaciones de encargo.
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #FE7062;")
                p.mb-0 Escalabilidad y velocidad. El software proporciona la facilidad de entrada en el sistema y gestionar con una mayor agilidad, por ejemplo, un almacén. Además, todas las facturas de transporte se pueden consolidar en una sola factura semanal, no importa cuántos envíos tiene en cada lugar.
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema5/img9.svg', alt='Imagen decorativa', style='width:430px;').mx-auto     
      .p-1.p-md-2(titulo="Desventajas de la automatización").tarjeta--azul.tarjeta--azul
        .row.justify-content-center
          .col-lg-7.order-lg-1.order-2
            p Las principales ventajas que conlleva la logística de automatización son:
            ul.lista-ul--color.lista-ul--separador
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #FE7062;")
                p.mb-0 Menor flexibilidad, tanto en los procesos como en los cambios de los mismos; es decir, se duda de que se pueda lograr estandarizar algunos procesos de forma que sean ejecutables de manera más eficiente en un sistema automatizado.
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #FE7062;")
                p.mb-0 Tener en cuenta la gran cantidad de actores presentes en una cadena de suministro: proveedores, fabricantes, clientes, distribuidores… Todos ellos pueden suponer escollos y ser reacios a incluir las soluciones tecnológicas necesarias y obligatorias para la automatización.
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #FE7062;")
                p.mb-0 El tiempo es otro elemento que suele citarse en su contra. Un sistema automatizado puede durar unos 10 años de media en aplicarlo, lo que enfrentado al importe que cuesta ponerlo en funcionamiento, a veces da retornos sobre la inversión que las empresas consideran demasiado bajos.
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema5/img10.svg', alt='Imagen decorativa', style='width:430px;').mx-auto
      .p-1.p-md-2(titulo="Mecanización").tarjeta--azul
        .row.justify-content-center
          .col-lg-7.order-lg-1.order-2
            p.mb-4 Pensar en mecanización es pensar en artefactos que realizan tareas bajo la conducción de un operador, tales como taladro, o infinidad de aparatos que simplifican y perfeccionan las actividades de una empresa.
            p.mb-4 La mecanización se instaló en la industria para quedarse. Hoy teóricamente, no es aceptable que un operario tenga que levantar rutinariamente más de 30 kilos por esfuerzo y este principio es aplicable a todo requerimiento de fuerza física que pueda ser realizado por algún artefacto ideado a propósito. En la mecanización, el operador comanda la máquina reduciendo el esfuerzo y el riesgo de lesiones.
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema5/img11.svg', alt='Imagen decorativa', style='width:430px;').mx-auto 
      .p-1.p-md-2(titulo="Robotización").tarjeta--azul
        .row.justify-content-center
          .col-lg-7.order-lg-1.order-2
            p.mb-4 La noción popular de robot hace referencia a un dispositivo humanoide con cierto grado de inteligencia, que substituye a las personas en la realización de tareas útiles. Para los temas de almacenamiento se puede definir como:
            p.mb-4 Apoyo funcional reprogramable, con capacidad para mover material o cargas en diferentes formas de manera única o repetitiva que ayuda con una tarea específica.
            p En los procesos logísticos, su campo de acción es ilimitado, se realiza desde operaciones de ensamble hasta procesos de estibado picking, control de calidad, transporte de piezas, etc. El funcionamiento de un robot depende del computador mediante un lenguaje de programación adecuado, se precisan los movimientos de las acciones a ejecutar, así como el procesamiento de nuevas acciones, y sus principales características son:
            .row.justify-content-center
              .col-lg-11
                ul.lista-ul--color.lista-ul--separador
                  li(style="margin-bottom: 2px")
                    i.fas.fa-check-circle(style="color: #FE7062;")
                    p.mb-0 #[strong Multifuncionalidad: ] versatilidad para llevar a cabo distintas tareas, incluso aquéllas no previstas en principio por los diseñadores, lo cual implica una considerable auto-adaptabilidad al entorno.
                  li(style="margin-bottom: 2px")
                    i.fas.fa-check-circle(style="color: #FE7062;")
                    p.mb-0 #[strong Programabilidad: ] capacidad para modificar la tarea mediante el cambio de programa, que propicia su adaptación rápida y económica a diferentes aplicaciones.
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/tema5/img12.svg', alt='Imagen decorativa', style='width:430px;').mx-auto
              
    separador
    #t_5_9.titulo-segundo.color-acento-botones(data-aos="fade-right")
      .h2 5.9 Gestión de inventarios

    p.mb-4 El manejo de materiales puede llegar a ser el problema más importante de la producción, el agregar poco valor al producto y consumir una parte del presupuesto de manufactura. Cada operación del proceso requiere materiales y suministros, a tiempo, en un punto particular. Con el eficaz manejo de materiales se asegura que serán entregados en el momento y lugar adecuados.
    p.mb-4 #[strong El inventario] es el resultado del recuento físico, real, de las existencias en un almacén. Es una cantidad exacta, real en un momento dado. La actividad diaria de las empresas y las organizaciones conlleva movimientos de entrada y salida de mercancías que hacen variar la cantidad de existencias en los almacenes. Otro factor a tener en cuenta en la variación de las existencias es su tipología o naturaleza. Algunas de sus características pueden hacer variar su estatus dentro del almacén. Esto sucede, por ejemplo, con los productos perecederos, con fecha de caducidad, fecha de consumo preferente, o los obsoletos.
    .h5(data-aos="fade-right") Tipos de inventarios
    p.mb-5 Hay inventarios de varios tipos de inventarios con relación a sus funciones, sus materiales y los productos, siempre todo va en función del producto a ser inventariado y el tiempo o espacio para hacerlo. A continuación, se detalla una primera clasificación en función de diferentes características:

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta BG01" data-aos="zoom-in")
      .row.justify-content-center(titulo="Según el momento")  
        .col-lg-6.col-sm-8.col-10.mb-lg-0.mb-4
          figure
            img(src='@/assets/curso/tema5/img13.svg', alt='Imagen decorativa', style='width:400px').mx-auto
        .col-lg-6
          ul.lista-ul--color.lista-ul--separador
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #FE7062;")
              p.mb-0 #[strong Inventario inicial: ] la base con la cual se comparará el inventario actual. Se estudian las diferencias existentes entre ambos, ya sean a nivel global, por familias, por almacenes, por subfamilias o por productos, pero siempre a nivel de cantidades físicas.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #FE7062;")
              p.mb-0 #[strong Inventario final: ] el inventario final es aquel que se registra al terminar un ejercicio contable, previo control de entradas y salidas de existencias. En otras palabras, se trata del inventario que se calcula al finalizar el ejercicio.
      .row.justify-content-center(titulo="Según la periodicidad")  
        .col-lg-6.col-sm-8.col-10.mb-lg-0.mb-4
          figure
            img(src='@/assets/curso/tema5/img14.svg', alt='Imagen decorativa', style='width:400px').mx-auto
        .col-lg-6
          ul.lista-ul--color.lista-ul--separador
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #FE7062;")
              p.mb-0 #[strong Inventario intermitente: ] es un inventario que se efectúa varias veces al año. Se recurre a él por razones diversas, no se puede introducir en la contabilidad del inventario contable permanente, al que se trata de suplir en parte.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #FE7062;")
              p.mb-0 #[strong Inventario perpetuo: ] es el que se lleva en continuo acuerdo con las existencias en el almacén, por medio de un registro detallado que puede servir también como mayor auxiliar, donde se llevan los importes en unidades monetarias y las cantidades físicas.
      .row.justify-content-center(titulo="Según la forma")  
        .col-lg-6.col-sm-8.col-10.mb-lg-0.mb-4
          figure
            img(src='@/assets/curso/tema5/img15.svg', alt='Imagen decorativa', style='width:400px').mx-auto
        .col-lg-6
          ul.lista-ul--color.lista-ul--separador
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #FE7062;")
              p.mb-0 #[strong Inventario de materias primas: ] elementos que se incorporan al proceso productivo para la obtención del producto final de la empresa objeto de su actividad; es decir, son aquellos elementos que, mediante elaboración o transformación se destinan a formar parte de los productos fabricados.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #FE7062;")
              p.mb-0 #[strong Inventario de productos en fabricación o en curso: ]  materiales que una vez han salido del almacén, se incorporan al ciclo de producción incrementando su valor. Se encuentran en fase de formación o transformación, una vez terminado el ejercicio.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #FE7062;")
              p.mb-0 #[strong Inventario de productos terminados: ] producto final del proceso productivo, por lo tanto, son fabricados por la propia empresa y están destinados al consumo final o a la utilización por otras empresas. 
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #FE7062;")
              p.mb-0 #[strong Inventario de mercancías: ] lo constituyen todos aquellos bienes que le pertenecen a la empresa bien sea comercial o mercantil, los cuales los compran para luego venderlos sin ser modificados.
      .row.justify-content-center(titulo="Según la función")  
        .col-lg-6.col-sm-8.col-10.mb-lg-0.mb-4
          figure
            img(src='@/assets/curso/tema5/img16.svg', alt='Imagen decorativa', style='width:400px').mx-auto
        .col-lg-6
          ul.lista-ul--color.lista-ul--separador
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #FE7062;")
              p.mb-0 #[strong Inventario de tránsito: ] se utilizan con el fin de sostener las operaciones para abastecer los conductos que ligan a la compañía con sus proveedores y sus clientes, respectivamente.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #FE7062;")
              p.mb-0 #[strong Inventario de ciclo: ] son inventarios que se requieren para apoyar la decisión de operar según tamaños de lotes. Esto se presenta cuando en lugar de comprar, producir o transportar inventarios de una unidad a la vez, se puede decidir trabajar por lotes, de esta manera, los inventarios tienden a acumularse en diferentes lugares dentro del sistema.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #FE7062;")
              p.mb-0 #[strong Inventario de seguridad: ] se trata de la cantidad de stock extra que se debe mantener en almacén, para hacer frente a situaciones diversas e imprevistos.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #FE7062;")
              p.mb-0 #[strong Inventario de previsión: ] se tienen con el fin de cubrir una necesidad futura perfectamente definida. Se diferencia con el respecto a los de seguridad, en que los de previsión se tienen a la luz de una necesidad que se conoce con certeza razonable y por lo tanto, involucra un menor riesgo.
      .row.justify-content-center(titulo="Otros tipos")  
        .col-lg-6.col-sm-8.col-10.mb-lg-0.mb-4
          figure
            img(src='@/assets/curso/tema5/img17.svg', alt='Imagen decorativa', style='width:400px').mx-auto
        .col-lg-6
          ul.lista-ul--color.lista-ul--separador
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #FE7062;")
              p.mb-0 #[strong Inventario físico: ] es el inventario real. Es contar, pesar o medir y anotar todas y cada una de las diferentes clases de bienes (mercancías), que se hallen en existencia en la fecha del inventario, y evaluar cada una de dichas partidas.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #FE7062;")
              p.mb-0 #[strong Inventario mínimo: ] es la cantidad mínima de inventario a ser mantenidas en el almacén.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #FE7062;")
              p.mb-0 #[strong Inventario máximo: ] es el inventario utilizado para pronosticar la demanda en la producción.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #FE7062;")
              p.mb-0 #[strong Inventario disponible: ] es aquel que se encuentra disponible para la producción o venta.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #FE7062;")
              p.mb-0 #[strong Inventario en línea: ] es aquel inventario que aguarda a ser procesado en la línea de producción.

</template>
<script>
export default {
  name: 'Tema5',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
