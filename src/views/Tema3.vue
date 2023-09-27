<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Clases de almacenes

    p.mb-4(data-aos="fade-right") A veces la actividad económica de una empresa puede exigir uno o varios tipos de almacén, todos han de estar diseñados en función de las necesidades específicas, en su función operativa y de acuerdo a las restricciones o posibilidades de cada situación y entorno.
    
    p.mb-4(data-aos="fade-right") Para la Revista de Logística Legis (2016) los tipos de almacenes se clasifican en:

    .row.justify-content-center.mb-5
      .col-xl.col-md-3.col-6.mb-xl-0.mb-4(style="padding:4px;" data-aos="fade-right")
        .arrow-crd
          .arrow-crd__header
            p 1
          .arrow-crd__body
            p Tipos de almacenes en función de la naturaleza de las mercancias almacenadas
      .col-xl.col-md-3.col-6.mb-xl-0.mb-4(style="padding:4px;" data-aos="fade-left")
        .arrow-crd.arrow-crd_oddCl
          .arrow-crd__header--azul
            p 2
          .arrow-crd__body
            p Almacenamiento respecto al grado de protección
      .col-xl.col-md-3.col-6.mb-xl-0.mb-4(style="padding:4px;" data-aos="flip-up")
        .arrow-crd
          .arrow-crd__header
            p 3
          .arrow-crd__body
            p Almacenamiento según la función logística
      .col-xl.col-md-3.col-6.mb-xl-0.mb-4(style="padding:4px;" data-aos="flip-up")
        .arrow-crd.arrow-crd_oddCl
          .arrow-crd__header--azul
            p 4
          .arrow-crd__body
            p Almacenamiento de mercancías según disposición
      .col-xl.col-md-3.col-6.mb-md-0.mb-4(style="padding:4px;" data-aos="flip-up")
        .arrow-crd
          .arrow-crd__header
            p 5
          .arrow-crd__body
            p Según el régimen jurídico
      .col-xl.col-md-3.col-6.mb-md-0.mb-4(style="padding:4px;" data-aos="fade-right")
        .arrow-crd.arrow-crd_oddCl
          .arrow-crd__header--azul
            p 6
          .arrow-crd__body
            p Zonas reglamentarias de los almacenes
      .col-xl.col-md-3.col-6(style="padding:4px;" data-aos="fade-left")
        .arrow-crd
          .arrow-crd__header
            p 7
          .arrow-crd__body
            p Capacidad de almacenamiento
    
    .row.justify-content-center.mb-4
      .col-lg-12.align-self-center(data-aos="fade-right")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/num1.svg', alt='Imagen decorativa', style='align-self: flex-start; margin-top: 25px')
          .tarjeta.transparent1(style="border-bottom: none;")
            .p-4
              .h4 Tipos de almacenes en función de la naturaleza de las mercancías almacenadas
              p.mb-4 Es aquel tipo de mercancía que se fija en el tipo de producto a almacenar. Dentro de esta categoría se encuentran: 
    
    .row.justify-content-center.mb-4
      .col-lg-4.col-sm-8.mb-lg-0.mb-4(data-aos="fade-right")
        figure.mb-4
          img(src='@/assets/curso/tema3/img1.svg', alt='Imagen decorativa')
        .h4.mb-4 Almacenamiento de materias primas
        p Es el almacenamiento primario dentro de la cadena de producción y generalmente está situado lo más cerca posible a la planta de producción o lugar de transformación.
      .col-lg-4.col-sm-8.mb-lg-0.mb-4(data-aos="flip-up")
        figure.mb-4
          img(src='@/assets/curso/tema3/img2.svg', alt='Imagen decorativa')
        .h4.mb-4 Almacenamiento de productos intermedios
        p  También llamados semielaborados, es donde se guardan aquellos elementos que ya han sufrido un proceso de ensamble o fabricación, pero que aún se encuentran en una etapa intermedia del mismo, sirviendo como enlace entre las distintas fases de la línea de producción. Deben estar situados al interior de la fábrica, ya que manejan tiempos de espera muy cortos para su uso. Deben estar siempre disponibles.
      .col-lg-4.col-sm-8(data-aos="fade-left")
        figure.mb-4
          img(src='@/assets/curso/tema3/img3.svg', alt='Imagen decorativa')
        .h4.mb-4 Almacenamiento de productos terminados
        p Es el más común y el que tiene mayor valor para la compañía, puesto que custodia el producto de su actividad económica. La cantidad de productos almacenados allí es directamente proporcional a los lineamientos, proyecciones de la empresa y demanda de los mismos por parte de los consumidores; por lo tanto, debe garantizar una disponibilidad constante y una alta rotación de inventario.

    .row.justify-content-center.mb-4
      .col-lg-12.align-self-center(data-aos="fade-right")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/num2.svg', alt='Imagen decorativa', style='align-self: flex-start; margin-top: 25px')
          .tarjeta.transparent1(style="border-bottom: none;")
            .p-4
              .h4 Almacenamiento respecto al grado de protección
              p.mb-4 Teniendo en cuenta el producto y sus características se puede determinar el grado de protección ambiental que requiere, ya sea en un recinto controlado, cubierto o descubierto.
    
    .row.justify-content-center.mb-4
      .col-lg-6.col-sm-10.mb-lg-0.mb-4(data-aos="fade-right")
        figure.mb-4
          img(src='@/assets/curso/tema3/img4.svg', alt='Imagen decorativa')
        .h4.mb-4 Almacenamiento al aire libre
        p.mb-0 Como su nombre lo indica, son aquellos que se encuentran al aire libre y sin ningún control especial fuera de la seguridad, pues allí se almacenan productos que por su naturaleza no se ven altamente afectados por las condiciones climáticas o ambientales: automóviles, algunos materiales de construcción y por norma general productos no perecederos. Generalmente, estos depósitos se encuentran demarcados con cintas reflectivas y delimitados por cercas, vallas, rejas y lonas, ubicados a la intemperie. En algunos casos suele utilizarse protección adicional directamente en el embalaje de los productos, como plásticos, lonas especiales y cualquier elemento de propiedades anticorrosivas.
      .col-lg-6.col-sm-10(data-aos="fade-left")
        figure.mb-4
          img(src='@/assets/curso/tema3/img5.svg', alt='Imagen decorativa')
        .h4.mb-4 Almacenamiento cubierto
        p.mb-0 Es el que ofrece mayor protección a los elementos y materiales que allí se almacenan, ya que es posible controlar diversas variables tales como humedad, temperatura, iluminación y muchas otras que influyen directamente en la preservación y vida útil de los productos. Los hay de ladrillo, cemento, lonas especializadas, paneles metálicos e incluso en materiales que ayudan a preservar la temperatura, como las resinas y el icopor.
    
    .row.justify-content-center.mb-4
      .col-lg-12.align-self-center(data-aos="fade-right")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema2/num3.svg', alt='Imagen decorativa', style='align-self: flex-start; margin-top: 25px')
          .tarjeta.transparent1(style="border-bottom: none;")
            .p-4
              .h4 Almacenamiento según la función logística
              p.mb-4 El proceso de elaboración de un producto hasta que se pone en venta, conlleva una serie de pasos que conforman lo que se conoce como cadena logística. Los tipos de almacenamiento de mercancías también pueden dividirse según el papel que tengan en esta cadena:

    .row.justify-content-center.mb-4
      .col-lg-7(data-aos="fade-right")
        .h4 Almacén central
        p.mb-4 Es el que se encuentra más cerca de la planta de producción. Sus objetivos son reducir los costos de transporte y manipulación, ser el poseedor del stock principal y distribuir a los almacenes regionales.
        .h4 Almacén regional
        p.mb-4 Está dispuesto por zonas en lugares estratégicos para lograr la distribución del producto en menos de un día; en promedio, el almacén debe tener la capacidad técnica para recibir mercancía desde las plantas de producción en camiones grandes, de gran tonelaje y, eventualmente, distribuir a los almacenes más pequeños, de venta directa o minoristas.
        .h4 Almacén de tránsito
        p.mb-5 Estos almacenes se encuentran situados en lugares estratégicos y su particularidad consiste en estar preparados para las entradas y salidas rápidas de mercancías, de forma que el índice de rotación de los productos sea lo más alto posible.
      .col-lg-5.col-10.align-self-center(data-aos="fade-left")
        figure.mb-4
          img(src='@/assets/curso/tema3/img6.svg', alt='Imagen decorativa').mx-auto

    .row.justify-content-center.mb-4
      .col-lg-12.align-self-center(data-aos="fade-right")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img( src='@/assets/curso/tema2/num4.svg', alt='Imagen decorativa', style='align-self: flex-start; margin-top: 25px' )
          .tarjeta.transparent1(style="border-bottom: none;")
            .p-4
              .h4  Almacenamiento de mercancías según disposición
              p.mb-4 dentro de este tipo de almacenamiento se debe tener en cuenta que debe existir una adecuada disposición de las mercancías y se pueden encontrar los siguientes:
    
    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/tema3/img7.svg', alt='Imagen decorativa').mx-auto

    .row.justify-content-center.mb-4
      .col-lg-6.mb-lg-0.mb-4(data-aos="fade-right")
        .h4 Almacén por bloque
        p Para este tipo de almacenamiento debe tenerse en cuenta la resistencia de la mercancía a apilar, ya que se forman columnas por referencias. Debe aplicarse un coeficiente de 1.5 con relación a la resistencia de la base para garantizar la estabilidad de la columna. Se recomienda para productos que manejen pocas referencias, pero muchas cantidades, por ejemplo, cubetas de leche, detergentes, ladrillos o bloques de construcción, entre otros.
      .col-lg-6(data-aos="fade-left")
        .h4 Almacén convencional
        p Son aquellos en los que se cuenta con carretillas elevadoras de mástil retráctil para el almacenamiento de la mercancía, nunca superando una altura de 8 metros en su punto más alto. El último de los factores decisivos para elegir el almacén más adecuado para su compañía tiene que ver con el régimen jurídico del lugar como tal, ya que dependiendo de la elección que se haga se derivaran gastos mayores o la exención de ellos.

    .row.justify-content-center.mb-0
      .col-lg-12.align-self-center(data-aos="fade-right")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img( src='@/assets/curso/tema2/num5.svg', alt='Imagen decorativa', style='align-self: flex-start; margin-top: 25px' )
          .tarjeta.transparent1(style="border-bottom: none;")
            .p-4
              .h4  Según el régimen jurídico
              p A la hora de escoger un sistema de almacenamiento de mercancías, se debe prestar atención al régimen jurídico por el que se gestionará dicho almacén. De ello dependerán importantes gastos derivados del almacenaje de productos.
    
    .h4(data-aos="fade-left") Almacén propio
    
    p.mb-4(data-aos="fade-right") Es el más tradicional de todos, pero ha venido decayendo frente a otras opciones más rentables en cuanto a explotación del inmueble, puesto que implica hacer parte del negocio el complejo físico y el terreno, asumiendo gastos que no necesariamente están relacionados con la actividad económica de la compañía.
    .h4(data-aos="fade-left") Almacén alquilado y renting
    p.mb-4(data-aos="fade-right") Estas dos son las opciones más utilizadas porque no necesitan de una inversión inicial y sus costos varían en relación con las necesidades del negocio. El renting por su parte, asume servicios de mantenimiento y contempla tiempos de uso más prolongados.
    .h4(data-aos="fade-left") Almacén en leasing
    p.mb-4(data-aos="fade-right") El leasing es otra clase de arrendamiento en el que se alquila el inmueble para terminar comprándolo al final del contrato por un valor que se estipula por ambas partes al momento de firmarlo.

    .row.justify-content-center.mb-0
      .col-lg-12.align-self-center(data-aos="fade-right")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img( src='@/assets/curso/tema2/num6.svg', alt='Imagen decorativa', style='align-self: flex-start; margin-top: 25px' )
          .tarjeta.transparent1(style="border-bottom: none;")
            .p-4
              .h4 Zonas reglamentarias de los almacenes
              p.mb-4 Si analizamos el almacén como el espacio físico en donde realizamos las operaciones de recepción, almacenaje, preparación de pedidos y expedición, tenemos que dotarlo de unas zonas en los que podamos realizar dichas operaciones con eficiencia y seguridad al menor coste integral posible.
              p.mb-5 Dichas zonas en las que podemos dividir un almacén son las siguientes: 
              .row.justify-content-center
                .col-lg-6
                  ul.lista-ul--color.lista-ul--separador
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #FE7062;")
                      p.mb-0 #[strong Zona de recepción o descargue] <br>Área destinada al desarrollo de todas las actividades relacionadas con el recibo de las mercancías.
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #FE7062;")
                      p.mb-0 #[strong  Zona de almacenamiento] <br>Área destinada a los productos que van a ser almacenados
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #FE7062;")
                      p.mb-0 #[strong Zona de picking (preparación de pedidos)] <br>Espacio en el cual serán trasladadas las mercancías para su preparación, y posterior despacho.
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #FE7062;")
                      p.mb-0 #[strong Zona de cross cocking] <br>Área destinada a recibir la mercancía que entra y sale inmediatamente, sin pasar por la zona de almacenamiento.
                .col-lg-6
                  ul.lista-ul--color.lista-ul--separador
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #FE7062;")
                      p.mb-0 #[strong Zona de despacho] <br>Lugar donde se lleva a cabo la expedición y revisión final de las mercancías.
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #FE7062;")
                      p.mb-0 #[strong Zona de maniobras] <br>Sitio donde transitan tanto maquinarias como personas.
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #FE7062;")
                      p.mb-0 #[strong Zona de administración] <br>Espacio destinado a la ubicación de las oficinas desde donde se coordina la operación logística del producto.
                    
    .row.justify-content-center.mb-0
      .col-lg-12.align-self-center(data-aos="fade-right")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img( src='@/assets/curso/tema2/num7.svg', alt='Imagen decorativa', style='align-self: flex-start; margin-top: 25px' )
          .tarjeta.transparent1(style="border-bottom: none;")
            .p-4
              .h4 Capacidad de almacenamiento
              p.mb-4 Hay muchas empresas de logística con un diseño de almacén que solo tiene en cuenta el tamaño de su establecimiento y no se tiene en cuenta otros elementos que pueden ser esenciales, así pues, si se requiere ampliar o aprovechar la capacidad de almacenaje, se debe evaluar:
              .row.justify-content-center.mb-4
                .col-lg-6.mb-2
                  ul.lista-ul--color.lista-ul--separador
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #FE7062;")
                      p.mb-0 El tipo de estanterías o sistemas utilizados: asegúrate de utilizar la solución de almacenaje correcta.
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #FE7062;")
                      p.mb-0 Los tipos de bienes almacenados: líquidos, productos sueltos, etc.
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #FE7062;")
                      p.mb-0 El número de referencias.
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #FE7062;")
                      p.mb-0 La forma en que se almacenan tus mercancías: sigue nuestros consejos para organizar tus productos.
                .col-lg-6.mb-2
                  ul.lista-ul--color.lista-ul--separador
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #FE7062;")
                      p.mb-0 El tipo de estibas: madera, plástico, europea, americana,<br> etc.
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #FE7062;")
                      p.mb-0 Las normas de almacenamiento.
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #FE7062;")
                      p.mb-0 El diseño de tu almacén.
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #FE7062;")
                      p.mb-0 El proceso de preparación de pedidos: no siempre es rentable priorizar el espacio en detrimento de los procesos de preparación de pedidos.
              p.mb-4 Se trabaja entonces en los cálculos de capacidades que se muestran a continuación:
              .h4 Cálculo de la capacidad de almacenaje de tu bodega
              .row.justify-content-center.mb-4
                .col-lg-12.mb-2
                  ul.lista-ul--color.lista-ul--separador
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #FE7062;")
                      p.mb-0 Calcular la superficie total de tu almacén en metros cuadrados. Este dato se obtiene al adquirir el edificio, pero no dudes en confirmar su exactitud. Restar los espacios no dedicados al almacenaje de mercancías: baños, vestuarios, oficinas, etc.
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #FE7062;")
                      p.mb-0 Determinar la altura máxima de almacenaje. Esto se obtiene restando elementos, como los sistemas de ventilación, iluminación u otros, a la altura del techo de la bodega.<br> Capacidad de almacenaje: (superficie del almacén - zonas no dedicadas al almacenaje) x Altura máxima de almacenaje.
              .h4 Calcular el espacio de almacenaje utilizado
              .row.justify-content-center.mb-4
                .col-lg-12.mb-2
                  ul.lista-ul--color.lista-ul--separador
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #FE7062;")
                      p.mb-0 Para saber si se está utilizando la capacidad del almacén con criterio, se determina el espacio no utilizado, también conocido como espacio vacío, que representa una pérdida de dinero para la organización.
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #FE7062;")
                      p.mb-0  Se resta el espacio no utilizado de cada uno de los sistemas de almacenaje a la capacidad de almacenaje del almacén.
                    li(style="margin-bottom: 2px")
                      i.fas.fa-check-circle(style="color: #FE7062;")
                      p.mb-0 Cuanto mayor sea el porcentaje, mejor se aprovechará el espacio disponible. De lo contrario, se tendrá que tomar las medidas necesarias para ajustar este resultado.<br> Espacio de almacenaje utilizado: (capacidad de almacenaje - Espacios vacíos) x 100.

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
