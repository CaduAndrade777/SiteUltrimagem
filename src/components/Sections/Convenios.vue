<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2 class="grey-text">Convênios atendidos</h2>

          <q-virtual-scroll
            :items="heavyList"
            virtual-scroll-horizontal
            class="mobile lt-md"
          >
            <template v-slot="{ item, index }">
              <img
                width="200"
                height="120"
                alt="Convênios Ultrtimagem"
                :src="
                  require(`../../assets/img/section/convenios/conveniado-${item.numberImg}`)
                "
                :key="index"
              />
            </template>
          </q-virtual-scroll>

          <div class="q-gutter-md gt-sm">
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
                    alt="Convênios Ultrimagem"
                    v-for="(item, index) in conveniados.slice(0, 6)"
                    :key="index + 'conveniados-1'"
                    :src="
                      require(`../../assets/img/section/convenios/conveniado-${item.numberImg}`)
                    "
                  />
                </div>
              </q-carousel-slide>

              <q-carousel-slide name="tv" class="column no-wrap flex-center">
                <div class="q-mt-md">
                  <img
                    v-for="(item, index) in conveniados.slice(7, 12)"
                    :key="index + 'conveniados-2'"
                    alt="Convênios Ultrimagem"
                    :src="
                      require(`../../assets/img/section/convenios/conveniado-${item.numberImg}`)
                    "
                  />
                </div>
              </q-carousel-slide>

              <q-carousel-slide name="map" class="column no-wrap flex-center">
                <div class="q-mt-md">
                  <img
                    width="200"
                    height="120"
                    v-for="(item, index) in conveniados.slice(13, 19)"
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
const maxSize = 19;
const heavyList = [];

for (let i = 0; i < maxSize; i++) {
  heavyList.push({
    numberImg: i + 1 + ".svg"
  });
}

Object.freeze(heavyList);

export default {
  data() {
    return {
      slide: "style",
      heavyList,
      conveniados: [
        { numberImg: "1.svg" },
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
        { numberImg: "13.svg" },
        { numberImg: "14.svg" },
        { numberImg: "15.svg" },
        { numberImg: "16.svg" },
        { numberImg: "17.svg" },
        { numberImg: "18.svg" },
        { numberImg: "19.svg" }
      ]
    };
  },

  components: {}
};
</script>
<style>
.q-carousel--arrows-horizontal.q-carousel--with-padding .q-carousel__slide {
  padding-right: 0px !important;
}
.q-carousel--arrows-horizontal.q-carousel--with-padding .q-carousel__slide {
  padding-left: 0px !important;
}
</style>
