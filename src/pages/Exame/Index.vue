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

            <div style="position: absolute; top: 26em; right: 33em;">
              <q-btn
                round
                flat
                class="q-pa-lg full-width card-exames-img-bd"
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

    <section class="text-center">
      <div class="container">
        <div class="row justify-center">
          <div class="col-md-7">
            <h2>Entenda a importância</h2>
            <p>
              A ultrassonografia auxilia na detecção de doenças e/ou variações
              anatômicas com base na forma, tamanho e textura das estruturas
              (órgãos) que são avaliados.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-secondary">
      <div class="container">
        <CardExames />
      </div>
    </section>
  </div>
</template>

<script>
import CardExames from "../../components/Cards/CardExames.vue";

export default {
  data() {
    return {
      slug: "",
      currentExam: false,
      exam: [
        {
          key: "ultrassonografia",
          name: "Ultrassonografia",
          description:
            "A ultrassonografia constitui uma modalidade de exame de imagem sem a utilização da radiação, constituindo um exame inócuo para os pacientes e praticamente sem contraindicações.",
          important:
            "A ultrassonografia auxilia na detecção de doenças e/ou variações anatômicas com base na forma, tamanho e textura das estruturas (órgãos) que são avaliados. ",
          class: "bg-green-3",
          icon: "ultrassonografia.svg"
        }
      ]
    };
  },
  components: { CardExames },
  mounted() {
    this.slug = this.$route.params.slug;
    this.filterExam();

    console.log(this.$route.params.slug);
  },
  methods: {
    filterExam() {
      this.currentExam = this.exam.find(ex => ex.key == this.slug);
    }
  }
};
</script>
<style scoped></style>
