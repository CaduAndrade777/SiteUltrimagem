<template>
  <section id="equipeMedica" class="bg-warning q-pb-lg" v-if="doctor">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h1 class="text-weight-regular">
            <span class="text-weight-regular grey-text"> Equipe médica </span>
          </h1>
          <p class="grey-text">
            Todos os médicos radiologistas têm o título de especialista em
            Radiologia e diagnóstico por imagens pelo Colégio Brasileiro de
            Radiologia e Associação Médica Brasileira. Saiba mais sobre esses
            profissionais!
          </p>
        </div>
      </div>
    </div>

    <q-virtual-scroll
      :items="doctor"
      virtual-scroll-horizontal
      class="q-py-md doctor-mobile"
    >
      <template v-slot="{ item, index }">
        <div class="text-center column" @click="card = true">
          <q-avatar size="200px" class="q-mx-md">
            <img
              alt="Medicos Ultrimagem"
              :src="
                require(`../../assets/img/components/equipeMedica/${item.img}`)
              "
            />
          </q-avatar>
          <h3 class="grey-text" v-if="item.name">
            {{ item.name | truncate(18) }}
          </h3>
        </div>
      </template>
    </q-virtual-scroll>

    <div class="row doctor-desktop">
      <div class="col-md-12 q-py-lg">
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
          height="530px"
          class="bg-warning"
        >
          <q-carousel-slide name="style" class="column no-wrap flex-center">
            <div class="row">
              <div
                class="col-md-6 card"
                v-for="(item, index) in doctor.slice(0, 2)"
                :key="index"
              >
                <q-card class="my-card full-width border-round">
                  <CardMedico :item="item" />
                </q-card>
              </div>
            </div>
          </q-carousel-slide>

          <q-carousel-slide name="pag2" class="column no-wrap flex-center">
            <div class="row">
              <div
                class="col-md-6 card"
                v-for="(item, index) in doctor.slice(2, 4)"
                :key="index"
              >
                <q-card class="my-card full-width border-round">
                  <CardMedico :item="item" />
                </q-card>
              </div>
            </div>
          </q-carousel-slide>
          <q-carousel-slide name="pag3" class="column no-wrap flex-center">
            <div class="row items-center justify-center">
              <div
                class="col-md-6 card"
                v-for="(item, index) in doctor.slice(4, 5)"
                :key="index"
              >
                <q-card class="my-card full-width border-round">
                  <CardMedico :item="item" />
                </q-card>
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

// const maxSize = 5;
const heavyList = doctor;

// for (let i = 0; i < maxSize; i++) {
//   heavyList.push({
//     img: heavyList[i].img
//   });
// }
// Object.freeze(heavyList);

export default {
  components: { CardMedico },

  data() {
    return {
      titleEquipe: " ",
      doctor: [],
      heavyList,
      slide: "style"
    };
  },

  filters: {
    truncate(value, limit) {
      if (value.length > limit) {
        value = value.substring(0, limit - 3) + "(...)";
      }
      return value;
    }
  },

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

.doctor-mobile {
  display: none;
}

.formation {
  font-family: Poppins, Roboto, sans-serif;
  font-size: 1em;
  padding-left: 3px;
}

.card {
  padding-right: 25px;
}

@media only screen and (max-width: 768px) {
  .doctor-mobile {
    display: block;
  }
  .doctor-desktop {
    display: none;
  }
}
</style>
