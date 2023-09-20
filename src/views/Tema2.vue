<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Naturaleza de los productos

    p.mb-5(data-aos="fade-right") La naturaleza de los productos hace de la logística un trabajo diferenciador, casi que individualizado, un producto hace que exista un eslabón, y éste, dependiendo de su naturaleza, medidas físicas o sus propiedades, las precauciones para su manejo y el tipo de presentación, debe ser adecuado a una tipología de carga, un embalaje y una distribución; tal como se menciona a continuación.
      
    .row.justify-content-center.mb-5
      .col-xl.col-md-3.col-6.mb-xl-0.mb-4(style="padding:4px;" data-aos="fade-right")
        .arrow-crd.h-100
          .arrow-crd__header
            p 1
          .arrow-crd__body
            p Carga General
            figure
              img(src='@/assets/curso/tema2/icon2.svg',alt='Imagen decorativa')
      .col-xl.col-md-3.col-6.mb-xl-0.mb-4(style="padding:4px;" data-aos="fade-left")
        .arrow-crd.arrow-crd_oddCl.h-100
          .arrow-crd__header--azul
            p 2
          .arrow-crd__body
            p Carga <br> Granel
            figure
              img(src='@/assets/curso/tema2/icon1.svg',alt='Imagen decorativa')
      .col-xl.col-md-3.col-6.mb-xl-0.mb-4(style="padding:4px;" data-aos="fade-right")
        .arrow-crd.h-100
          .arrow-crd__header
            p 3
          .arrow-crd__body(style="padding-left: 0; padding-right: 0;")
            p Carga <br> sobredimensionada
            figure
              img(src='@/assets/curso/tema2/icon2.svg',alt='Imagen decorativa' style="width:100px").mx-auto
      .col-xl.col-md-3.col-6.mb-xl-0.mb-4(style="padding:4px;" data-aos="flip-up")
        .arrow-crd.arrow-crd_oddCl.h-100
          .arrow-crd__header--azul
            p 4
          .arrow-crd__body
            p.mb-0 Carga a<br> temperatura<br>controlada
            figure
              img(src='@/assets/curso/tema2/icon1.svg',alt='Imagen decorativa')
      .col-xl.col-md-3.col-6.mb-md-0.mb-4(style="padding:4px;" data-aos="flip-up")
        .arrow-crd.h-100
          .arrow-crd__header
            p 5
          .arrow-crd__body
            p Carga perecedera
            figure
              img(src='@/assets/curso/tema2/icon2.svg',alt='Imagen decorativa')
      .col-xl.col-md-3.col-6.mb-md-0.mb-4(style="padding:4px;" data-aos="flip-up")
        .arrow-crd.arrow-crd_oddCl.h-100
          .arrow-crd__header--azul
            p 6
          .arrow-crd__body
            p Carga<br> frágil
            figure
              img(src='@/assets/curso/tema2/icon1.svg',alt='Imagen decorativa')
      .col-xl.col-md-3.col-6.mb-md-0.mb-4(style="padding:4px;" data-aos="fade-right")
        .arrow-crd.h-100
          .arrow-crd__header
            p 7
          .arrow-crd__body
            p Mercancías peligrosas
            figure
              img(src='@/assets/curso/tema2/icon2.svg',alt='Imagen decorativa')
      .col-xl.col-md-3.col-6(style="padding:4px;" data-aos="fade-left")
        .arrow-crd.h-100
          .arrow-crd__header--azul
            p 8
          .arrow-crd__body
            p Otros <br>tipos
            figure
              img(src='@/assets/curso/tema2/icon1.svg',alt='Imagen decorativa')

    .row.justify-content-center
      .col.align-self-center(data-aos="fade-right")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/num1.svg', alt='Imagen decorativa', style='align-self: flex-start; margin-top: 25px')
          .tarjeta.transparent1
            .p-4
              .h4 Carga general
              p.mb-4 Son aquellas mercancías cuya naturaleza es diversa en relación a su estado (sólido, líquido o gaseoso) se transportan como unidades individuales de carga y pueden contabilizarse en unidades sueltas por bultos (cajas, paquetes, barriles, etc.) o agrupado con otros.
              p.mb-4 La carga general que no precisa condiciones especiales para su transporte se denomina carga seca. Por el contrario, la mercancía que contiene líquidos o que por su naturaleza puede destilar o emitir considerables cantidades de humedad, se denomina carga húmeda.
              .row.justify-content-center
                .col-lg-6
                  ul.lista-ul
                    li 
                      i.fas.fa-check-circle(style="color: #FE7062;")
                      strong Carga embalada y sin embalar
                    li 
                      p La carga general se suele transportar en embalajes cuya forma, capacidad y resistencia se ajustan a las características de la mercancía. No obstante, en ocasiones la carga se transporta sin ningún tipo de embalaje que lo proteja, ya que sus características permiten un transporte seguro aun careciendo de él.
                    li 
                      i.fas.fa-check-circle(style="color: #FE7062;")
                      strong Carga fraccionada y unitarizada
                    li 
                      p Cuando la mercancía se presenta de forma suelta o individual como paquetes, sacos y cajas, entre otros. Si dichas formas sueltas se agrupan en unidades superiores de carga, se considera unitarizada o agrupada.
                .col-lg-6.align-self-center
                  figure(style='text-align: -webkit-center')
                    img(src='@/assets/curso/tema2/img3.svg', alt='Imagen decorativa', style='max-width: 290px')

    .row.justify-content-center
      .col.align-self-center(data-aos="fade-right")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/num2.svg', alt='Imagen decorativa', style='align-self: flex-start; margin-top: 25px')
          .tarjeta.transparent1
            .p-4
              .h4 Carga granel
              p.mb-4 Es el conjunto de productos que son transportados a grandes cantidades, cuyo único recipiente es el vehículo de transporte.
              .row.justify-content-center
                .col-lg-5
                  figure(style='text-align: -webkit-center')
                    img.mb-4(src='@/assets/curso/tema2/img4.svg', alt='Imagen decorativa', style='max-width: 100%')
                  ul.lista-ul
                    li 
                      i.fas.fa-check-circle(style="color: #FE7062;")
                      strong Granel sólido
                    li 
                      p En esta clasificación entran los granos, el carbón, el mineral de hierro, la madera, el cemento, la sal, etc.
                .col-lg-7
                  figure(style='text-align: -webkit-center')
                    img.mb-4(src='@/assets/curso/tema2/img5.svg', alt='Imagen decorativa', style='max-width: 84%')
                  .row.justify-content-center
                    .col-lg-10
                      ul.lista-ul
                        li 
                          i.fas.fa-check-circle(style="color: #FE7062;")
                          strong Granel líquido
                        li 
                          p Es la carga que se encuentra en estado líquido o gaseoso, dicha condición hace que su transporte sea, en vehículos de tipo tanque de por lo menos 1000 galones; ej.: petróleo, gas natural licuado, gasolina, químicos y alimentos líquidos como aceite vegetal, aceite de cocina, etc.
                        li 
                          p.mb-0 Según su naturaleza también se trabajan las cargas y son aquellas mercancías que por su estructura física o química requiere condiciones especiales para su manipulación, transporte y almacenamiento.

    .row.justify-content-center
      .col.align-self-center(data-aos="fade-right")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/num3.svg', alt='Imagen decorativa', style='align-self: flex-start; margin-top: 25px')
          .tarjeta.transparent1
            .p-4
              .h4 Carga sobredimensionada
              .row.justify-content-center
                .col-lg-6
                  p Mercancía cuya geometría, dimensiones o peso requieren unas condiciones especiales de manipulación o transporte. Toda carga que supere los límites legales establecidos para el transporte, necesita autorización para su circulación.
                .col-lg-6
                  figure(style='text-align: -webkit-center')
                    img(src='@/assets/curso/tema2/img6.svg', alt='Imagen decorativa', style='max-width: 80%')

    .row.justify-content-center
      .col.align-self-center(data-aos="fade-right")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/num4.svg', alt='Imagen decorativa', style='align-self: flex-start; margin-top: 25px')
          .tarjeta.transparent1
            .p-4
              .h4 Carga a temperatura controlada
              .row.justify-content-center
                .col-lg-6
                  p.mb-4 La constituyen mercancías cuya temperatura debe ser controlada durante la manipulación, transporte y almacenamiento para la correcta conservación de su calidad y propiedades. Estas mercancías se constituyen en:
                  figure(style='text-align: -webkit-center')
                    img.mb-4(src='@/assets/curso/tema2/img7.svg', alt='Imagen decorativa', style='max-width: 85%')
                .col-lg-6
                  ul.lista-ul
                    li 
                      i.fas.fa-check-circle(style="color: #FE7062;")
                      strong Mercancías refrigeradas
                    li 
                      p Se enfrían por encima de la temperatura óptima del transporte o almacenamiento, siempre por encima del punto de congelación (1 – 8°C) por ejemplo, verduras, productos lácteos, mantequilla, flores, etc.
                    li 
                      i.fas.fa-check-circle(style="color: #FE7062;")
                      strong Mercancías congeladas y ultracongeladas
                    li 
                      p Se enfrían por encima de la temperatura óptima del transporte o almacenamiento, siempre por debajo del punto de congelación, con el fin de preservar su integridad y cualidades. (-18°C) por ejemplo, pescado ultracongelado, helados.
                    li 
                      i.fas.fa-check-circle(style="color: #FE7062;")
                      strong Mercancías calientes
                    li 
                      p Son mercancías que necesitan un aporte calorífico para mantener sus condiciones óptimas de conservación durante su manipulación, transporte o almacenamiento alrededor de los 150°C.

    .row.justify-content-center
      .col.align-self-center(data-aos="fade-right")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/num5.svg', alt='Imagen decorativa', style='align-self: flex-start; margin-top: 25px')
          .tarjeta.transparent1
            .p-4
              .h4 Carga perecedera
              .row.justify-content-center
                .col-lg-5
                  figure(style='text-align: -webkit-center')
                    img.mb-4(src='@/assets/curso/tema2/img8.svg', alt='Imagen decorativa', style='max-width: 450px')
                  ul.lista-ul
                    //li 
                      i.fas.fa-check-circle(style="color: #FE7062;")
                      strong Carga perecedera
                    li 
                      p Son los alimentos frescos que tienen que ser consumidos en un corto plazo y cuya vida útil, calidad y seguridad dependen del estricto control de la temperatura de transporte y condiciones de manipulación y almacenamiento; poseen una fecha de vencimiento y en su manejo de inventarios hay que dar salida primero a los más antiguos.
                .col-lg-7
                  figure(style='text-align: -webkit-center')
                    img.mb-4( src='@/assets/curso/tema2/img9.svg',alt='Imagen decorativa',style='max-width: 450px')
                  .row.justify-content-center
                    .col-lg-10
                      ul.lista-ul
                        li 
                          i.fas.fa-check-circle(style="color: #FE7062;")
                          strong Temperatura ambiente
                        li 
                          p Se manejan bajo condiciones de temperatura sin ningún tipo de alteración. Por ejemplo, aceites, granos, cereales, aseo personal, cosméticos, vestuario, etc.

    .row.justify-content-center
      .col.align-self-center(data-aos="fade-right")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/num6.svg', alt='Imagen decorativa', style='align-self: flex-start; margin-top: 25px')
          .tarjeta.transparent1
            .p-4
              .h4 Carga frágil
              .row.justify-content-center
                .col-lg-6
                  p Esta carga requiere un manejo especializado durante su transporte, ya que las características así lo exigen. Los 3 puntos críticos de esta manipulación son: cargue y descargue; movimiento del vehículo; almacenamiento y bodegaje; por ejemplo, vidrio, obras de arte, etc.
                .col-lg-6
                  figure(style='text-align: -webkit-center')
                    img(src='@/assets/curso/tema2/img10.svg', alt='Imagen decorativa', style='max-width: 80%')

    .row.justify-content-center
      .col.align-self-center(data-aos="fade-right")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/num7.svg', alt='Imagen decorativa', style='align-self: flex-start; margin-top: 25px')
          .tarjeta.transparent1
            .p-4
              .h4 Mercancías peligrosas
              p.mb-4 Sustancia química, mezcla o artículo, que por sus características requiere un tratamiento especial y representa un riesgo para la salud, la seguridad o el medio ambiente.
              p.mb-4 Fortaleciendo su formación es necesario leer el siguiente libro que lo relaciona de frente con las sustancias químicas y peligrosas con las que trabajan los operadores logísticos.
              .tarjeta.g1.p-md-5.mb-5(style='padding:26px !important;')
                .row.justify-content-center.align-items-center
                  .col-3.col-md-2
                    img(src='@/assets/curso/tema2/img11.svg', alt='Imagen decorativa', style='max-width:100px;').mx-auto
                  .col
                    .row.justify-content-between.align-items-center
                      .col.mb-3.mb-sm-0
                        .text-white 
                          p.mb-0 #[strong Libro:] Sustancias químicas y peligrosas. 
                          p.mb-0 #[strong Autor:] Ministerio de Educación Superior.
                          p.mb-0 Editorial Universitaria.
                          p.mb-0 #[strong Año:] 2015.
                          p.mb-0 #[strong Base de datos SENA:] e-libro.
                      .col-sm-auto
                        a.boton.color-acento-bonotes.mx-auto(href='https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/71609?page=1', target='_blank')
                          span Ir al sitio
                          i.fas.fa-file-download

    .row.justify-content-center
      .col.align-self-center(data-aos="fade-right")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/num8.svg', alt='Imagen decorativa', style='align-self: flex-start; margin-top: 25px')
          .tarjeta.transparent1(style='border-bottom: 2px solid #afafaf;')
            .p-4
              .h4 Otros tipos
              p.mb-4 En esta clasificación entran los granos, el carbón, el mineral de hierro, la madera, el cemento, la sal, etc.
              .row.justify-content-center
                .col-lg-4
                  figure(style='text-align: -webkit-center')
                    img.mb-4(src='@/assets/curso/tema2/img12.svg', alt='Imagen decorativa', style='max-width: 350px;')
                  ul.lista-ul
                    li 
                      i.fas.fa-check-circle(style="color: #FE7062;")
                      strong Animales vivos
                    li 
                      p Conforme lo dice la Convención sobre el Comercio Internacional de Especies Amenazadas de Fauna y Flora Silvestres - CITES - es un acuerdo internacional concertado entre los gobiernos, cuya finalidad es velar por que el comercio internacional de especímenes de animales y plantas silvestres que no constituyan una amenaza para su supervivencia de las especies.
                .col-lg-4
                  figure(style='text-align: -webkit-center')
                    img.mb-4(src='@/assets/curso/tema2/img13.svg', alt='Imagen decorativa', style='max-width: 350px;')
                  .row.justify-content-center
                    .col-10
                      ul.lista-ul
                        li 
                          i.fas.fa-check-circle(style="color: #FE7062;")
                          strong Mensajería postal  
                        li 
                          p Regido por la Unión Postal Universal - UPU - es un organismo especializado de las Naciones Unidas, y tiene como objetivo afianzar la organización y mejorar los servicios postales a nivel del mundo.
                .col-lg-4
                  figure(style='text-align: -webkit-center')
                    img.mb-4(src='@/assets/curso/tema2/img14.svg', alt='Imagen decorativa', style='max-width: 350px;')
                  .row.justify-content-center
                    .col-10
                      ul.lista-ul
                        li 
                          i.fas.fa-check-circle(style="color: #FE7062;")
                          strong Mensajería internacional o courier   
                        li 
                          p.mb-0 Empresa que ofrece el servicio de llevar, de un lugar a otro, correspondencia, cartas o paquetes, entre otras cosas.
    
    separador
    #t_2_1.titulo-segundo.color-acento-botones(data-aos="fade-right")
      .h2 2.1 Empaques y embalajes

    p.mb-4(data-aos="fade-right") Los productos llegan al mundo desnudos y se deben vestir para la ocasión, cada uno de los productos debe ser defendido de muchos factores que voluntaria o involuntariamente lo atacan cada momento además de mostrarlos de manera llamativa y es por eso que se debe plantear toda una logística desde el vestido del producto hasta saber si se envía solo o acompañado, por eso es fundamental conocer los siguientes conceptos.

    .h4.mb-5 <i class="fas fa-crosshairs fa-spin" style="color: #57DBD8; margin-left: 8px; font-size: larger" data-aos="fade-right"></i> Definiciones
    p.mb-5(data-aos="fade-right") Para dar un mejor concepto de lo que se va a revisar se deben dar definiciones de los conceptos para iniciar.

    .row.justify-content-center.mb-4
      .col-lg-9
        TabsA.color-acento-contenido.mb-5(data-aos="zoom-in")
          .tarjeta.color-custom.p-4(titulo="<em>Packaging</em>")
            .row
              p.mb-0 Ciencia y arte de presentar un producto en las mejores condiciones para su protección, venta, uso, almacenamiento y distribución. Incluye el envase primario, secundario o empaque, terciario o embalaje.
          .tarjeta.color-custom.p-4(titulo="Envase")
            .row
              p.mb-0 Es un envoltorio que tiene contacto directo con el contenido de un producto, tiene la función de ofrecer una adecuada presentación, facilitando su manejo, transporte, almacenaje, manipulación y distribución
          .tarjeta.color-custom.p-4(titulo="Empaque")
            p.mb-0 Presentación comercial de la mercancía, contribuyendo a la seguridad de ésta durante sus desplazamientos y lográndola vender dándole una buena imagen visual y distinguiéndola de los productos de la competencia.
          .tarjeta.color-custom.p-4(titulo="Embalaje")
            p.mb-0 Prepara la carga en la forma más adecuada para su transporte en los modos elegidos para su despacho al exterior y para las distintas operaciones a que se someta durante el viaje.

    .h4.mb-5 <i class="fas fa-crosshairs fa-spin" style="color: #57DBD8; margin-left: 8px; font-size: larger" data-aos="fade-right"></i> Tipos de empaque

    .row.justify-content-center.mb-5
      .col-lg-4.col-sm-8.mb-lg-0.mb-4
        .titulo-sexto.color-acento-botones(data-aos="fade-right")
          h5 Figura 4.
          span Empaque primario
        figure(data-aos="zoom-in")
          img.mb-4(src='@/assets/curso/tema2/img15.svg',alt='Imagen decorativa',style='max-width: 350px;')
        .row.justify-content-center
          .col-lg-10
            p.mb-0 Es aquel recipiente o envase que contiene el producto.
      .col-lg-4.col-sm-8.mb-lg-0.mb-4
        .titulo-sexto.color-acento-botones(data-aos="fade-down")
          h5 Figura 5.
          span Empaque secundario
        figure(data-aos="zoom-in")
          img.mb-4(src='@/assets/curso/tema2/img16.svg', alt='Imagen decorativa', style='max-width: 350px;')
        .row.justify-content-center
          .col-lg-10
            p.mb-0 Es aquel que contiene al empaque primario y tiene como finalidad brindarle protección, servir como medio de presentación y facilitar la manipulación del producto para su aprovisionamiento en los estantes o anaqueles en el punto de venta.
      .col-lg-4.col-sm-8
        .titulo-sexto.color-acento-botones(data-aos="fade-left")
          h5 Figura 6.
          span Empaque terciario
        figure(data-aos="zoom-in")
          img.mb-4(src='@/assets/curso/tema2/img17.svg', alt='Imagen decorativa', style='max-width: 350px;')
        .row.justify-content-center
          .col-lg-10
            p.mb-0 Es aquel que puede agrupar varios empaques primarios o secundarios y tiene como finalidad facilitar la manipulación y el transporte de los productos.

    .h3.mb-4(data-aos="fade-left") Tipos de embalaje
    p.mb-5(data-aos="fade-right") El embalaje se encarga de la apropiación y conservación de la carga y se hace en varios niveles de optimización, dentro de esta optimización hay varios elementos que se deben tener en cuenta y por eso se hacen varios tipos de embalaje como se describe a continuación:
    
    .row.justify-content-center
      .col-lg-10(data-aos="zoom-in")
        SlyderB.mb-5(:datos='datosSlyder')
            
    .row.justify-content-center.mb-4
      .col-lg-4.col-sm-8(data-aos="fade-right")
        a.anexo(:href="obtenerLink('downloads/Otros_tipos_embalaje.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Otros tipos de embalaje

    .h4.mb-5 <i class="fas fa-crosshairs fa-spin" style="color: #57DBD8; margin-left: 8px; font-size: larger" data-aos="fade-right"></i> Funciones
    p.mb-5(data-aos="fade-right") En general las funciones de los empaques y los embalajes están dadas por la función que se cumple con el producto y para cada uno de los productos son diferentes, a continuación, se presenta una tabla de funciones básicas basados en el conocimiento de Castellanos (2015):

    .tabla-a.color-acento-contenido.mb-5(data-aos="zoom-in")
      table
        caption Nota. Modificado de Castellanos (2015)
        thead
          tr
            th.h3(style='width: 30%; background-color: rgb(236 242 255);') Función
            th.h3(style=' background-color: rgb(236 242 255);') Descripción    
        tbody
          tr
            th.h3 Contener
            td 
              |Separa el producto del entorno.
              br
              br
              |Fija el producto a un volumen determinado.
              br
              br
              |Contiene cualquier estado de la materia del producto, sólido, líquido o gaseoso.
          tr
            th.h3 Proteger
            td 
              | Aísla el producto de su entorno para garantizar sus propiedades, como son los riesgos físicos, mecánicos y las influencias del medio ambiente como lluvia, gases, vapor de agua y olores.
              br
              br
              | Los agentes externos como los roedores o insectos.
              br
              br 
              | Al consumidor o entorno del mismo producto, por ejemplo, los productos corrosivos.
          tr
            th.h3 Conservar
            td 
              | Preserva la calidad del producto de cambios químicos y biológicos.
              br
              br
              | Para los productos perecederos se debe definir el tiempo de la vida útil, para establecer el tipo de material a ser utilizado en combinación con las tecnologías de envasado. 
          tr
            th.h3 Almacenar y transportar
            td 
              | Facilita la manipulación de un producto.
              br
              br
              | Se debe definir si el producto va paletizado o en carga suelta.
              br
              br
              | El tipo de almacenamiento y transporte también define los materiales a ser utilizados. (No es lo mismo transportar un producto a temperatura ambiente que refrigerado o congelado).
              br
              br
              | Se deben analizar las condiciones particulares de cada tipo de transporte (terrestre, aéreo o marítimo), para garantizar la calidad de los productos.

    .h3.text-center.mb-5(data-aos="fade-right") Riesgos

    .row.justify-content-center
      .col-lg-8(data-aos="fade-right")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/letra1.svg' alt='Imagen decorativa')
          .tarjeta.tarjeta--azul
            .p-4
              .h4 Mecánicos
              p  Vibración, trepidación, rotura, oscilación, derrame y colisión.

    .row.justify-content-center
      .col-lg-8(data-aos="fade-right")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/letra2.svg' alt='Imagen decorativa')
          .tarjeta.tarjeta--azul
            .p-4
              .h4 Físicos
              p  Manejo, apilamiento, almacenamiento.

    .row.justify-content-center
      .col-lg-8(data-aos="fade-right")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/letra3.svg' alt='Imagen decorativa')
          .tarjeta.tarjeta--azul
            .p-4
              .h4 Térmicos y climáticos
              p Calor, frío, condensación, bruma, moho, humedad, rocío, higroscopia, corrosión.

    .row.justify-content-center
      .col-lg-8(data-aos="fade-right")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/letra4.svg' alt='Imagen decorativa')
          .tarjeta.tarjeta--azul
            .p-4
              .h4 Robo
              p Saqueo.

    .row.justify-content-center
      .col-lg-8(data-aos="fade-right")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/letra5.svg' alt='Imagen decorativa')
          .tarjeta.tarjeta--azul
            .p-4
              .h4 Manipulación en terminales
              p Aceleraciones y desaceleraciones indebidas, ladeamiento, caídas. 

    .row.justify-content-center
      .col-lg-8(data-aos="fade-right")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/letra6.svg' alt='Imagen decorativa')
          .tarjeta.tarjeta--azul
            .p-4
              .h4 Almacenamiento
              p Deterioro.

    .row.justify-content-center
      .col-lg-8(data-aos="fade-right")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/letra7.svg' alt='Imagen decorativa')
          .tarjeta.tarjeta--azul
            .p-4
              .h4 Combustión espontánea
              p Carbón, harina de pescado, paja, algodón, fósforo.

    .row.justify-content-center
      .col-lg-8(data-aos="fade-right")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/letra8.svg' alt='Imagen decorativa')
          .tarjeta.tarjeta--azul
            .p-4
              .h4 Contaminación
              p  Materiales residuales, olores, cargas incompatibles.

    .h4.mb-5 <i class="fas fa-crosshairs fa-spin" style="color: #57DBD8; margin-left: 8px; font-size: larger" data-aos="fade-right"></i> Materiales
    p.mb-4(data-aos="fade-right") Materiales de envases, empaques y embalajes utilizados en el proceso logístico con sus ventajas y desventajas.

    .titulo-sexto.color-acento-botones(data-aos="fade-right")
      h5 Tabla 1.
      span Clasificación de los productos 
    .tabla-b.color-acento-contenido.mb-5(data-aos="zoom-in")
      table
        thead
          tr.text-center
            th.h4(style='width: 20%; background-color: #57DBD8;') Material 
            th.h4(style='width: 20%; background-color: #57DBD8;') Presentación 
            th.h4(style='width: 20%; background-color: #57DBD8;') Ejemplo
            th.h4(style='width: 20%; background-color: #57DBD8;') Ventajas 
            th.h4(style='width: 20%; background-color: #57DBD8;') Desventajas
        tbody
          tr.tabla-custom
            th.h4.text-center Madera
            td.text-center(style="border-right: 1px solid #e8e8e8;") Madera en bruto, aglomerada, contrachapada, etc.
            td.text-center(style="border-right: 1px solid #e8e8e8;") Cajas, palleta, canastas.
            td.text.center(style="border-right: 1px solid #e8e8e8;") Fácil de manipular, acomodar y estibar.
            td.text-center Altos costos, fácil descomposición, contaminable, sensible a plagas, voluminoso, pesado, inflamable, sensible a la humeda.
          tr.tabla-custom
            th.h4.text-center Metal
            td.text-center(style="border-right: 1px solid #e8e8e8;") Láminas de aliminio, acero, recubiertas de estaño,  etc.
            td.text-center(style="border-right: 1px solid #e8e8e8;") Contenedores, recipientes, cajas metálicas, etc.
            td.text-center(style="border-right: 1px solid #e8e8e8;") Fácil de estibar, reutilizables, es un producto sólido.
            td.text-center Altos costos, corrosión, difícil eliminación, pesado, voluminoso, sensible al sol.
          tr.tabla-custom
            th.h4.text-center Vidrio
            td.text-center(style="border-right: 1px solid #e8e8e8;") Boro silicato, tratado, calizo, no parenteral.
            td.text-center(style="border-right: 1px solid #e8e8e8;") Botellas, frascos, botellones, recipientes
            td.text-center(style="border-right: 1px solid #e8e8e8;") Visibilidad del contenido reciclable, fácil eliminación y descomposición, higiénico, reutilizable.
            td.text-center Frágil a los golpes, pesado.
          tr.tabla-custom
            th.h4.text-center Cárton
            td.text-center(style="border-right: 1px solid #e8e8e8;") Plano, ondulado, corrugado.
            td.text-center(style="border-right: 1px solid #e8e8e8;") Cajas
            td.text-center(style="border-right: 1px solid #e8e8e8;") Ecónomico, reciclable, fácil manipulación.
            td.text-center Muy frágil, sensible a la humeda y al calor, poco sólido no reutilizable.
          tr.tabla-custom
            th.h4.text-center Plástico
            td.text-center(style="border-right: 1px solid #e8e8e8;") Polietileno, poli estireno, PVC, etc.
            td.text-center(style="border-right: 1px solid #e8e8e8;") Cajas, contenedores, rigidos, semirigidos, bolas, etc.
            td.text-center(style="border-right: 1px solid #e8e8e8;") Impermeabilidad, reutilizable, gran variedad.
            td.text-center Inflamable, costoso, difícil, eliminación.
          tr.tabla-custom
            th.h4.text-center Papel
            td.text-center(style="border-right: 1px solid #e8e8e8;") Periódico, estraza de cocina, celofán, etc.
            td.text-center(style="border-right: 1px solid #e8e8e8;") Bolsas, envoltorios, etc.
            td.text-center(style="border-right: 1px solid #e8e8e8;") Bajos costos, fácil eliminación, reciclable.
            td.text-center Muy frágil, sensible a la humedad y al calor.
          
    .h4.mb-5 <i class="fas fa-crosshairs fa-spin" style="color: #57DBD8; margin-left: 8px; font-size: larger" data-aos="fade-right"></i> Pictografía
    p.mb-5(data-aos="fade-right") La simbología en los embalajes, algo muy importante teniendo en cuenta que la mayoría de los daños en mercancías se producen durante su transporte, especialmente cuando se realiza la carga o descarga. Estos pictogramas universales, colocados debidamente en las cajas, sirven de orientación para la perfecta manipulación de la carga, ya que no van acompañados de palabras escritas y son entendibles en cualquier parte del mundo. Además, están estandarizados según la norma ISO 780:1997.

    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-botones(data-aos="fade-right")
          h5 Figura 7.
          span Pictografía Internacional ISO
        .row.justify-content-center
          .col-lg-6(data-aos="fade-right")
            figure.mb-5
              img(src='@/assets/curso/tema2/pictografia/picto1.svg', alt='Imagen decorativa')
          .col-lg-6(data-aos="fade-left")
            figure.mb-5
              img(src='@/assets/curso/tema2/pictografia/picto2.svg', alt='Imagen decorativa')

    .h4.mb-5 <i class="fas fa-crosshairs fa-spin" style="color: #57DBD8; margin-left: 8px; font-size: larger" data-aos="fade-right"></i> Marcado y etiquetado
    p.mb-5(data-aos="fade-right") Es el conjunto de marcas o símbolos especiales que se deben colocar a las unidades de carga tales como cajas, contenedores o barriles, para ser identificados como carga.

    .row.justify-content-center
      .col-lg-8(data-aos="fade-right")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/letra1.svg' alt='Imagen decorativa')
          .tarjeta.tarjeta--azul
            .p-4
              .h4 Marcas estándar o de expedición
              p Contienen información sobre el importador, destino dirección, número de referencia, unidades, etc.

    .row.justify-content-center
      .col-lg-8(data-aos="fade-right")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/letra2.svg' alt='Imagen decorativa')
          .tarjeta.tarjeta--azul
            .p-4
              .h4 Marcas informativas
              p Es la información adicional que aparece en el empaque o embalaje. Ej.: país de origen, puerto de salida, puerto de entrada, peso bruto, peso neto, dimensiones de la caja.

    .row.justify-content-center
      .col-lg-8(data-aos="fade-right")
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/letra3.svg' alt='Imagen decorativa')
          .tarjeta.tarjeta--azul
            .p-4
              .h4 Marcas de manipulación
              p Es la información sobre el manejo y advertencias en el momento de manipular o transportar la carga, en este caso se utilizan símbolos pictóricos internacionalmente aceptados.

    p.mb-4(data-aos="fade-right") Las cajas son parte importante en el proceso de embalaje y envío, por eso se da la necesidad de marcarlas de una forma adecuada para que integren el sistema logístico sin contratiempos. A continuación, se presentan las partes de dicha marcación:

    .row.justify-content-center
      .col-lg-10
        figure.mb-5(data-aos="zoom-in")
          img(src='@/assets/curso/tema2/img18.svg', alt='Imagen decorativa')
    
    separador
    #t_2_2.titulo-segundo.color-acento-botones(data-aos="fade-right")
      .h2 2.2 Unidad de carga o unitarización

    p.mb-4(data-aos="fade-right") Según la definición de Mira & Soler (2010) una unidad de carga puede estar formada por un único bulto o por un conjunto de bultos de menores dimensiones, agrupados para formar un solo módulo, compacto e individual, que permita un fácil manejo y conservación, que incremente la seguridad de la mercancía y contribuya a una manutención eficiente, esto da pie para agrupar las mercancías en unidades de carga no solo para facilitar su manejo, sino que trabaja positivamente en la gestión de su transporte y, por tanto, en la gestión y eficiencia general del proceso logístico.

    .h4.mb-5 <i class="fas fa-crosshairs fa-spin" style="color: #57DBD8; margin-left: 8px; font-size: larger" data-aos="fade-right"></i> Cualidades de las unidades de carga
    
    p.mb-4(data-aos="fade-right") Conviene precisar que la configuración y las características físicas de los elementos que componen la unidad de carga han de conseguir dotarla de dos cualidades fundamentales:

    .row.justify-content-center
      .col-lg-10
        .tarjeta--container.row.mb-5
          .col-md.tarjeta.color-secundario.p-5(data-aos="fade-right")
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src='@/assets/curso/tema2/img19.svg', alt='Imagen decorativa', style="width:200px").mx-auto
            .h2.text-center Resistencia
            p Para lo cual es conveniente envolverla, haciendo de los elementos que la integran un solo cuerpo, ciñéndose de tela, papel, cartón, u otros materiales análogos.
          .col-md.tarjeta.color-acento-contenido.p-5(data-aos="fade-left")
            .row.justify-content-center.mb-4
              .col-6
                figure
                  img(src='@/assets/curso/tema2/img20.svg', alt='Imagen decorativa', style="width:200px").mx-auto
            .h2.text-center Estabilidad
            p Para lo que es preciso apilar correctamente los productos o las unidades que contiene. La estabilidad se puede incrementar sujetando entre sí las unidades mediante cinta adhesiva o flejes de metal, goma o plástico, o el conjunto de ellas sobre un palé u otro tipo de plataforma.

    .h4.mb-5 <i class="fas fa-crosshairs fa-spin" style="color: #57DBD8; margin-left: 8px; font-size: larger" data-aos="fade-right"></i> Estibas o pallets
    p.mb-4(data-aos="fade-right") Plataforma construida de 1 o 2 pisos unidos por listones sobre los que se agrupan las mercancías. Es un elemento logístico clave en la cadena de suministro, ya que, al terminar el proceso de producción, las mercancías se agrupan frecuentemente mediante procedimientos manuales o estandarizados.

    .row.justify-content-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 8.
          span Estiba
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema2/img21.svg', alt='Imagen decorativa')

    p.mb-4(data-aos="fade-right") Los dos tipos de pallets más utilizados actualmente son los llamados #[strong europeos (1200x800mm)] y #[strong americano (1200x1000mm)] que deben su nombre a las zonas en las que predomina cada uno. Ambas dimensiones se encuentran entre las seis medidas estandarizadas que recoge la Organización Internacional para la Estandarización (ISO) para el manejo internacional de mercancías.

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        titulo: 'Embalaje combinado',
        texto:
          ' Es la combinación de diversos envases dispuestos en un mismo embalaje para su manipulación y transporte.',
        imagen: require('@/assets/curso/tema2/slyder/slyder1.svg'),
      },
      {
        titulo: 'Embalaje compuesto',
        texto:
          'Es un embalaje constituido por un recipiente interior formando un conjunto indisociable',
        imagen: require('@/assets/curso/tema2/slyder/slyder2.svg'),
      },
      {
        titulo: 'Embalaje exterior',
        texto:
          ' Es la protección externa de un embalaje compuesto por materiales absorbentes, materiales de relleno cualquier otro tipo de material necesario para contener y proteger los recipientes interiores o los envases interiores.',
        imagen: require('@/assets/curso/tema2/slyder/slyder3.svg'),
      },
      {
        titulo: 'Embalaje intermedio',
        texto:
          ' Es un embalaje que contiene envases interiores u objetos y, a su vez, está contenido en un embalaje exterior.',
        imagen: require('@/assets/curso/tema2/slyder/slyder4.svg'),
      },
      {
        titulo: 'Sobre embalaje',
        texto:
          'Recipiente o envoltura utilizada para contener varios bultos y conseguir una unidad de carga de más fácil manipulación y estiba.',
        imagen: require('@/assets/curso/tema2/slyder/slyder5.svg'),
      },
      {
        titulo: 'Embalaje listo para la venta',
        texto:
          'Es el embalaje secundario que agrupa a varios empaques primarios y está listo para la venta.',
        imagen: require('@/assets/curso/tema2/slyder/slyder6.svg'),
      },
      {
        titulo: 'Embalaje de estanco a los pulverulentos',
        texto:
          'Es aquel envase que impide la entrada de contenidos sólidos y secos, incluidas las que se producen o pueden estar presentes durante el transporte.',
        imagen: require('@/assets/curso/tema2/slyder/slyder7.svg'),
      },
      {
        titulo: 'Otros tipos de embalaje',
        texto:
          'Es aquel envase que impide la entrada de contenidos sólidos y secos, incluidas las que se producen o pueden estar presentes durante el transporte.',
        imagen: require('@/assets/curso/tema2/slyder/slyder8.svg'),
      },
    ],
  }),
}
</script>

<style lang="sass" scoped></style>
