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
                to="/o-que-oferecemos"
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
              class="q-mb-md"
              unelevated
            />

            <div class="exam-ilustation">
              <q-btn
                round
                flat
                class="q-pa-lg full-width "
                :class="currentExam.class"
              >
                <q-avatar size="120px">
                  <img
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

    <!-- <section class="text-center">
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
                    class="q-mr-sm"
                    :src="
                      require(`../../assets/img/components/cards/cardExame/${currentExam.icon}`)
                    "
                  />
                </q-avatar>
              </q-btn>
            </div>

            <h2>Entenda a importância</h2>
            <p>
              A ultrassonografia auxilia na detecção de doenças e/ou variações
              anatômicas com base na forma, tamanho e textura das estruturas
              (órgãos) que são avaliados.
            </p>
          </div>
        </div>
      </div>
    </section> -->

    <section class="bg-secondary">
      <div class="container">
        <CardExames :exames="currentExam" />
      </div>
    </section>

    <!-- <SectionRecebaConteudo></SectionRecebaConteudo> -->
  </div>
</template>

<script>
import CardExames from "../../components/Cards/CardExames.vue";
import SectionRecebaConteudo from "../../components/Sections/RecebaConteudo.vue";
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
    CardExames,
    SectionRecebaConteudo
  },

  mounted() {
    this.slug = this.$route.params.slug;
    this.exam = exam;
    this.filterExam();
  },

  methods: {
    filterExam() {
      this.currentExam = this.exam.find(ex => ex.key == this.slug);
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
