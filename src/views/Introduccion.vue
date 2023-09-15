<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p.mb-5(data-aos="fade-right") A través del siguiente video se da la bienvenida al componente formativo en gestión por medio de una voz amiga que le recuerda que somos personas quienes estamos detrás de cada pantalla.
    
    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="853" height="480" src="https://www.youtube.com/embed/t1z6CgtSRq8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
