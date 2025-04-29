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
          >
            <template v-slot="{ item, index }">
              <!-- As imagens do mobile -->
              <img
                v-if="$q.screen.lt.md" 
                width="200"
                height="120"
                alt="Convênios Ultrimagem"
                :src="
                  require(`../../assets/img/section/convenios/conveniado-${item.numberImg}`)
                "
                :key="index"
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
                    v-if="$q.screen.gt.sm" 
                    alt="Convênios Ultrimagem"
                    v-for="(item, index) in conveniados.slice(0, 6)"
                    :key="index + 'conveniados-1'"
                    :src=" 
                      require(`../../assets/img/section/convenios/conveniado-${item.numberImg}`)
                    "
                  />
                </div>
              </q-carousel-slide>

              <q-carousel-slide name="map" class="column no-wrap flex-center">
                <div class="q-mt-md">
                  <img
                    v-if="$q.screen.gt.sm" 
                    width="200"
                    height="120"
                    v-for="(item, index) in conveniados.slice(7, 13)"
                    :key="index + 'conveniados-3'"
                    alt="Convênios Ultrimagem"
                    :src="
                      require(`../../assets/img/section/convenios/conveniado-${item.numberImg}`)
                    "
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
// Remover as imagens 1.svg e 13.svg
const heavyList = [];
const maxSize = 13;

for (let i = 1; i <= maxSize; i++) {
  if (i !== 1 && i !== 13) {  // Remover imagens 1.svg e 13.svg
    heavyList.push({
      numberImg: i + ".svg"
    });
  }
}

Object.freeze(heavyList);

export default {
  data() {
    return {
      slide: "style",
      heavyList,
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
    // Computed para fornecer a lista de conveniados filtrada
    filteredHeavyList() {
      return this.heavyList;
    }
  }
};
</script>

<style>
.q-carousel--arrows-horizontal.q-carousel--with-padding .q-carousel__slide {
  padding-right: 0px !important;
  padding-left: 0px !important;
}
</style>