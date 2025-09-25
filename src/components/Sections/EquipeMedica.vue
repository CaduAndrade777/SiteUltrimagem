<template>
  <section id="team-doctors" class="bg-warning q-pb-lg" v-if="doctor.length">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-12">
          <h1 class="text-weight-regular grey-text">Equipe médica</h1>
          <p class="grey-text">
            Profissionais atualizados, experientes e comprometidos com diagnósticos precisos e o cuidado com cada paciente.
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
            <template v-slot="{ item }">
              <div class="text-center column q-ml-xl" @click="card = true">
                <q-avatar size="150px" class="q-mx-lg">
                  <q-img
                    :src="getImageSrc(item.img)"
                    :alt="'Médico ' + item.name"
                  />
                </q-avatar>

                <h3 class="grey-text doctor-mobile-name" v-if="item.name">
                  {{ truncate(item.name, 30) }}
                </h3>

                <div v-if="doctor.length !== item.id" class="doctor-arrow">
                  &gt;&gt;
                </div>
              </div>
            </template>
          </q-virtual-scroll>
        </div>
      </div>

      <!-- DESKTOP -->
      <div class="row doctor-desktop no-gap">
        <div class="col-md-12 no-gap">
          <q-carousel
            v-model="slide"
            transition-prev="scale"
            transition-next="scale"
            swipeable
            animated
            control-color="primary"
            navigation
            arrows
            height="500px"
            class="bg-warning no-gap"
          >
            <q-carousel-slide
              v-for="(group, pageIndex) in doctorChunks"
              :key="pageIndex"
              :name="'page-' + pageIndex"
              class="column no-wrap slide-no-gap"
            >
              <div class="row">
                <div
                  class="col-md-6 card"
                  v-for="item in group"
                  :key="item.id"
                >
                  <q-card class="my-card card-doctor full-width full-height">
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

export default {
  name: "TeamDoctors",
  components: { CardMedico },

  data() {
    return {
      doctor: [],
      slide: "page-0",
    };
  },

  computed: {
    doctorChunks() {
      const chunkSize = 2;
      const chunks = [];
      for (let i = 0; i < this.doctor.length; i += chunkSize) {
        chunks.push(this.doctor.slice(i, i + chunkSize));
      }
      return chunks;
    },
  },

  mounted() {
    this.doctor = doctor;
  },

  methods: {
    getImageSrc(imgName) {
      try {
        return require(`../../assets/img/components/equipeMedica/${imgName}`);
      } catch (e) {
        return ""; 
      }
    },

    truncate(value, limit) {
      if (!value) return "";
      return value.length > limit
        ? value.substring(0, limit - 3) + "(...)"
        : value;
    },
  },
};
</script>

<style scoped>
#team-doctors img {
  max-width: 300px;
}

.doctor-mobile-name {
  font-size: 1em;
}

.doctor-arrow {
  font-size: 1.5em;
  color: #4444447a;
}

.card-doctor i {
  font-size: 1.2em;
  color: #ddd;
}

.doctor-mobile {
  display: none;
}

.card {
  padding-right: 25px;
}

.no-gap {
  margin: 0 !important;
  padding: 0 !important;
}

.slide-no-gap {
  padding: 0 !important;
  margin: 0 !important;
  align-items: flex-start !important;
  justify-content: flex-start !important;
}

.q-carousel {
  padding: 0 !important;
  margin: 0 !important;
  border-radius: 0 !important;
  box-shadow: none !important;
}

.q-carousel-slide {
  padding: 0 !important;
  margin: 0 !important;
}

@media only screen and (max-width: 768px) {
  .doctor-mobile {
    display: flex;
  }

  .doctor-desktop {
    display: none;
  }
}
</style>
