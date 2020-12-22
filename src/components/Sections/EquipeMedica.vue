<template>
  <section id="equipeMedica">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h1><span> Equipe médica </span></h1>
          <p>
            Cras mattis vestibulum quam missão mattis euismod. Ut posuere dolor
            neque, et vehicula ipsum blandit vel. Integer sed posuere lorem. Sed
            viverra, felis nec tincidunt pretium, ipsum ante scelerisque massa,
            visão sed semper purus augue eget diam.
          </p>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
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
          height="501px"
          class=""
        >
          <q-carousel-slide name="style" class="column no-wrap flex-center">
            <div class="row">
              <div
                class="col-md-6 card"
                v-for="(item, index) in doctor.slice(0, 2)"
                :key="item.id"
              >
                <CardMedico :item="item" />
              </div>
            </div>
          </q-carousel-slide>

          <q-carousel-slide name="pag2" class="column no-wrap flex-center">
            <div class="row">
              <div
                class="col-md-6 card"
                v-for="(item, index) in doctor.slice(2, 4)"
                :key="item.id"
              >
                <CardMedico :item="item" />
              </div>
            </div>
          </q-carousel-slide>

          <q-carousel-slide name="pag3" class="column no-wrap flex-center">
            <div class="row">
              <div
                class="col-md-6 card"
                v-for="(item, index) in doctor.slice(4, 6)"
                :key="item.id"
              >
                <CardMedico :item="item" />
              </div>
            </div>
          </q-carousel-slide>

          <q-carousel-slide name="pag4" class="column no-wrap flex-center">
            <div class="row">
              <div
                class="col-md-6 card"
                v-for="(item, index) in doctor.slice(6, 8)"
                :key="item.id"
              >
                <CardMedico :item="item" />
              </div>
            </div>
          </q-carousel-slide>

          <q-carousel-slide name="pag5" class="column no-wrap flex-center">
            <div class="row">
              <div
                class="col-md-6 card"
                v-for="(item, index) in doctor.slice(8, 10)"
                :key="item.id"
              >
                <CardMedico :item="item" />
              </div>
            </div>
          </q-carousel-slide>

          <q-carousel-slide name="pag6" class="column no-wrap flex-center">
            <div class="row">
              <div
                class="col-md-6 card"
                v-for="(item, index) in doctor.slice(10, 12)"
                :key="item.id"
              >
                <CardMedico :item="item" />
              </div>
            </div>
          </q-carousel-slide>

          <q-carousel-slide name="pag7" class="column no-wrap flex-center">
            <div class="row">
              <div
                class="col-md-6 card"
                v-for="(item, index) in doctor.slice(12, 14)"
                :key="item.id"
              >
                <CardMedico :item="item" />
              </div>
            </div>
          </q-carousel-slide>

          <q-carousel-slide name="pag8" class="column no-wrap flex-center">
            <div class="row">
              <div
                class="col-md-6 card"
                v-for="(item, index) in doctor.slice(14, 16)"
                :key="item.id"
              >
                <CardMedico :item="item" />
              </div>
            </div>
          </q-carousel-slide>
        </q-carousel>
      </div>
    </div>
  </section>
</template>

<script>
import CardMedico from "../Cards/CardMedico.vue";
import doctor from "../../util/doctor.js";

export default {
  data() {
    return {
      titleEquipe: " ",
      doctor: [],
      slide: "style",
      lorem:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo."
    };
  },
  components: { CardMedico },
  mounted() {
    this.doctor = doctor;
  }
};
</script>
<style scoped lang="scss">
#equipeMedica {
  img {
    max-width: 300px;
  }
}

.my-card {
  i {
    font-size: 1.2em;
    color: #ddd;
  }
}

.formation {
  font-family: Poppins, Roboto, sans-serif;
  font-size: 1em;
  padding-left: 3px;
}

.card {
  padding-right: 25px;
}
</style>
