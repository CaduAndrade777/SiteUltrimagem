<template>
  <div id="exam" v-if="currentExam">
    <div class="banner bg-primary text-secondary q-py-md">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <q-breadcrumbs class="q-pt-md">
              <q-breadcrumbs-el
                label="O que oferecemos"
                class="text-secondary"
                to="/exames-e-convenios"
              />
              <q-breadcrumbs-el :label="currentExam.name" />
            </q-breadcrumbs>

            <h1 class="text-weight-bolder">
              {{ currentExam.name }}
            </h1>
            <h2 class="display-2">{{ currentExam.description }}</h2>

            <q-btn
              color="secondary"
              label="Agendar exame"
              text-color="primary"
              no-caps
              class="q-mb-md"
              unelevated
              @click="open()"
            />

            <div class="exam-ilustation">
              <q-btn
                round
                flat
                class="q-pa-lg full-width no-pointer-events"
                :class="currentExam.class"
              >
                <q-avatar size="120px">
                  <img
                    alt="Exame Ultrimagem"
                    class="q-mr-sm"
                    :src="
                      require(`../../assets/img/components/cards/cardExame/${currentExam.icon}`)
                    "
                  />
                </q-avatar>
              </q-btn>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section class="text-center">
      <div class="container">
        <div class="row justify-center">
          <div class="col-md-7">
            <div class="q-mx-auto exam-ilustation-mobile">
              <q-btn
                round
                flat
                class="q-pa-lg full-width "
                :class="currentExam.class"
              >
                <q-avatar size="120px">
                  <img
                    alt="Exame Ultrimagem"
                    class="q-mr-sm"
                    :src="
                      require(`../../assets/img/components/cards/cardExame/${currentExam.icon}`)
                    "
                  />
                </q-avatar>
              </q-btn>
            </div>

            <h2 class="grey-text">Entenda a importância</h2>
            <p class="grey-text">
              {{ currentExam.entenda }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-secondary">
      <div class="container">
        <CardExames :exames="currentExam" :woman="false" />
      </div>
    </section>
  </div>
</template>

<script>
import CardExames from "../../components/Cards/CardExames.vue";
import exam from "../../util/exam.js";

export default {
  data() {
    return {
      slug: "",
      currentExam: false,
      exam: []
    };
  },

  components: {
    CardExames
  },

  mounted() {
    this.slug = this.$route.params.slug;
    this.exam = exam;
    this.filterExam();
  },

  methods: {
    filterExam() {
      this.currentExam = this.exam.find(ex => ex.key == this.slug);
    },
    open() {
      window.open("https://api.whatsapp.com/send?phone=5532984020650");
    }
  }
};
</script>

<style scoped>
.exam-ilustation {
  position: absolute;
  top: 24em;
  right: 20em;
}

.exam-ilustation-mobile {
  max-width: 170px;

  display: none;
}

@media only screen and (max-width: 425px) {
  .exam-ilustation {
    top: 33em;
    right: 1em;
  }
}

@media only screen and (max-width: 375px) {
  .exam-ilustation {
    display: none;
  }

  .exam-ilustation-mobile {
    display: block;
  }
}
</style>
