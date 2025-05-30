<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2 class="grey-text">Convênios atendidos</h2>

          <!-- SOMENTE MOBILE -->
          <q-virtual-scroll
            v-if="$q.screen.lt.md" 
            :items="filteredHeavyList"
            virtual-scroll-horizontal
            class="mobile"
            :key="item => item.numberImg"
          >
            <template v-slot="{ item }">
              <!-- Imagens do mobile -->
              <img
                :width="200"
                :height="120"
                alt="Convênios Ultrimagem"
                :src="getImageSrc(item.numberImg)"
              />
            </template>
          </q-virtual-scroll>

          <!-- SOMENTE DESKTOP -->
          <div v-if="$q.screen.gt.sm" class="q-gutter-md">
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
              height="250px"
              class="text-primary"
            >
              <q-carousel-slide name="style" class="column no-wrap flex-center">
                <div class="q-mt-md">
                  <img
                    v-for="(item, index) in conveniados.slice(0, 6)"
                    :key="`conveniados-${index}`"
                    :alt="`Convênio ${index + 1}`"
                    :src="getImageSrc(item.numberImg)"
                    :width="200"
                    :height="120"
                  />
                </div>
              </q-carousel-slide>

              <q-carousel-slide name="map" class="column no-wrap flex-center">
                <div class="q-mt-md">
                  <img
                    v-for="(item, index) in conveniados.slice(7, 13)"
                    :key="`conveniados-${index + 6}`"
                    :alt="`Convênio ${index + 8}`"
                    :src="getImageSrc(item.numberImg)"
                    :width="200"
                    :height="120"
                  />
                </div>
              </q-carousel-slide>
            </q-carousel>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      slide: "style",
      conveniados: [
        { numberImg: "2.svg" },
        { numberImg: "3.svg" },
        { numberImg: "4.svg" },
        { numberImg: "5.svg" },
        { numberImg: "6.svg" },
        { numberImg: "7.svg" },
        { numberImg: "8.svg" },
        { numberImg: "9.svg" },
        { numberImg: "10.svg" },
        { numberImg: "11.svg" },
        { numberImg: "12.svg" },
      ]
    };
  },
  computed: {
    filteredHeavyList() {
      return this.conveniados.filter(item => item.numberImg !== "1.svg" && item.numberImg !== "13.svg");
    }
  },
  methods: {
    getImageSrc(imgName) {
      return require(`../../assets/img/section/convenios/conveniado-${imgName}`);
    }
  }
};
</script>

<style scoped>
.q-carousel--arrows-horizontal.q-carousel--with-padding .q-carousel__slide {
  padding-right: 0px !important;
  padding-left: 0px !important;
}
</style>
