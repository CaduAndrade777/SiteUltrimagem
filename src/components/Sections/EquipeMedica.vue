<template>
  <section id="team-doctors" class="bg-warning q-pb-lg" v-if="doctor">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-12">
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

      <!-- MOBILE -->
      <div class="row">
        <div class="col-12">
          <q-virtual-scroll
            :items="doctor"
            virtual-scroll-horizontal
            class="q-py-md doctor-mobile"
          >
            <template v-slot="{ item, index }">
              <div class="text-center column q-ml-xl" @click="card = true">
                <q-avatar size="150px" class="q-mx-lg">
                  <q-img
                    alt="Medicos Ultrimagem"
                    :src="
                      require(`../../assets/img/components/equipeMedica/${item.img}`)
                    "
                  />
                </q-avatar>

                <h3 class="grey-text doctor-mobile-name" v-if="item.name">
                  {{ item.name | truncate(30) }}
                </h3>

                <div
                  :class="
                    doctor.length == item.id ? 'invisible' : 'doctor-arrow'
                  "
                >
                  >>
                </div>
              </div>
            </template>
          </q-virtual-scroll>
        </div>
      </div>

      <!-- DESKTOP -->
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
            height="600px"
            class="bg-warning"
          >
            <q-carousel-slide name="style" class="column no-wrap flex-center">
              <div class="row">
                <div
                  class="col-md-6 card"
                  v-for="(item, index) in doctor.slice(0, 2)"
                  :key="index"
                >
                  <q-card
                    class="my-card card-doctor full-width border-round full-height"
                  >
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
                  <q-card
                    class="my-card card-doctor full-width border-round full-height"
                  >
                    <CardMedico :item="item" />
                  </q-card>
                </div>
              </div>
            </q-carousel-slide>

            <q-carousel-slide name="pag3" class="column no-wrap flex-center">
              <div class="row items-center justify-center">
                <div
                  class="col-md-6 card"
                  v-for="(item, index) in doctor.slice(4, 6)"
                  :key="index"
                >
                  <q-card
                    class="my-card card-doctor full-width border-round full-height"
                  >
                    <CardMedico :item="item" />
                  </q-card>
                </div>
              </div>
            </q-carousel-slide>

            <q-carousel-slide name="pag4" class="column no-wrap flex-center">
              <div class="row items-center justify-center">
                <div
                  class="col-md-6 card"
                  v-for="(item, index) in doctor.slice(6, 9)"
                  :key="index"
                >
                  <q-card
                    class="my-card card-doctor full-width border-round full-height"
                  >
                    <CardMedico :item="item" />
                  </q-card>
                </div>
              </div>
            </q-carousel-slide>
          </q-carousel>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CardMedico from "../Cards/CardMedico.vue";
import doctor from "../../util/doctor.js";

const heavyList = doctor;

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
    console.log(this.doctor);
  }
};
</script>
<style scoped lang="scss">
#team-doctors {
  img {
    max-width: 300px;
  }
}

#team-doctors .doctor-mobile-name {
  font-size: 1em;
}

#team-doctors .doctor-mobile-name .doctor-arrow {
  font-size: 1.5em;
  color: #4444447a;
}

.card-doctor {
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
