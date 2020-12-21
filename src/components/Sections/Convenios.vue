<template>
  <section>
    <div class="container">
      <h2>Convênios atendidos</h2>
      <div class="q-gutter-md">
        <q-carousel
          v-model="slide"
          transition-prev="scale"
          transition-next="scale"
          swipeable
          animated
          control-color="primary"
          navigation
          padding
          arrows
          height="200px"
          class="text-primary"
        >
          <q-carousel-slide name="style" class="column no-wrap flex-center">
            <div class="q-mt-md">
              <img src="../../assets/img/section/convenios/conveniado-1.svg" />
              <img src="../../assets/img/section/convenios/conveniado-2.svg" />
              <img src="../../assets/img/section/convenios/conveniado-3.svg" />
              <img src="../../assets/img/section/convenios/conveniado-4.svg" />
              <img src="../../assets/img/section/convenios/conveniado-5.svg" />
              <img src="../../assets/img/section/convenios/conveniado-6.svg" />
            </div>
          </q-carousel-slide>

          <q-carousel-slide name="tv" class="column no-wrap flex-center">
            <div class="q-mt-md text-center">
              teste 2
            </div>
          </q-carousel-slide>

          <q-carousel-slide name="map" class="column no-wrap flex-center">
            <div class="q-mt-md text-center">
              teste 3
            </div>
          </q-carousel-slide>
        </q-carousel>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      slide: "style"
    };
  },
  components: {}
};
</script>
<style scoped>
.q-carousel--arrows-horizontal.q-carousel--with-padding .q-carousel__slide {
  padding-right: 0px !important;
}
.q-carousel--arrows-horizontal.q-carousel--with-padding .q-carousel__slide {
  padding-left: 0px !important;
}
</style>
