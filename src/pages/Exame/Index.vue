<template>
  <div>
    <div id="exam" v-if="currentExam">
      <div class="banner bg-primary text-secondary q-py-md">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-12">
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

              <h2 class="display-2">
                {{ currentExam.description }}
              </h2>

              <q-btn
                color="secondary"
                label="Agendar exame"
                text-color="primary"
                no-caps
                class="q-mb-md button-secondary-blue"
                unelevated
                @click="open"
              />

              <!-- Ícone para desktop -->
              <div class="exam-illustration">
                <div class="exam-hero-icon" aria-hidden="true">
                  <span class="exam-hero-icon-circle"></span>

                  <img
                    v-if="iconSrc"
                    :src="iconSrc"
                    :alt="`Ícone de ${currentExam.name}`"
                  />

                  <q-icon
                    v-else
                    name="medical_services"
                    class="exam-hero-icon-fallback"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section class="text-center">
        <div class="container">
          <div class="row justify-center">
            <div class="col-md-7 col-12">
              <!-- Ícone para dispositivos móveis -->
              <div class="exam-illustration-mobile">
                <div class="exam-hero-icon" aria-hidden="true">
                  <span class="exam-hero-icon-circle"></span>

                  <img
                    v-if="iconSrc"
                    :src="iconSrc"
                    :alt="`Ícone de ${currentExam.name}`"
                  />

                  <q-icon
                    v-else
                    name="medical_services"
                    class="exam-hero-icon-fallback"
                  />
                </div>
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
          <div class="row">
            <div class="col-12">
              <CardExames
                :exames="currentExam"
                :woman="false"
              />
            </div>
          </div>
        </div>
      </section>
    </div>

    <div
      v-else-if="loading"
      class="container q-py-xl text-center"
    >
      <q-spinner color="primary" size="40px" />

      <p class="grey-text q-mt-md">
        Carregando informações do exame...
      </p>
    </div>

    <div
      v-else-if="examNotFound"
      class="container q-py-xl text-center"
    >
      <h2 class="grey-text">Exame não encontrado</h2>

      <p class="grey-text">
        Não foi possível encontrar o exame solicitado.
      </p>

      <q-btn
        color="primary"
        text-color="white"
        label="Ver exames oferecidos"
        no-caps
        unelevated
        to="/exames-e-convenios"
      />
    </div>
  </div>
</template>

<script>
import CardExames from "../../components/Cards/CardExames.vue";
import exam from "../../util/exam.js";

import biopsiaIcon from "../../assets/img/components/cards/cardExame/biopsia.svg";
import densitometriaIcon from "../../assets/img/components/cards/cardExame/densitometria.svg";
import ecocardiografiaIcon from "../../assets/img/components/cards/cardExame/ecocardiografia.svg";
import elastografiaIcon from "../../assets/img/components/cards/cardExame/elastografia_svg.svg";
import eletrocardiogramaIcon from "../../assets/img/components/cards/cardExame/eletrocardiograma.svg";
import mamografiaIcon from "../../assets/img/components/cards/cardExame/mamografia.svg";
import raioxIcon from "../../assets/img/components/cards/cardExame/raiox.svg";
import ressonanciaIcon from "../../assets/img/components/cards/cardExame/ressonancia.svg";
import tomografiaIcon from "../../assets/img/components/cards/cardExame/tomografia.svg";
import ultrassonografiaIcon from "../../assets/img/components/cards/cardExame/ultrassonografia.svg";

const icons = {
  "biopsia.svg": biopsiaIcon,
  "densitometria.svg": densitometriaIcon,
  "ecocardiografia.svg": ecocardiografiaIcon,
  "elastografia_svg.svg": elastografiaIcon,
  "eletrocardiograma.svg": eletrocardiogramaIcon,
  "mamografia.svg": mamografiaIcon,
  "raiox.svg": raioxIcon,
  "ressonancia.svg": ressonanciaIcon,
  "tomografia.svg": tomografiaIcon,
  "ultrassonografia.svg": ultrassonografiaIcon
};

export default {
  name: "DetalheExame",

  components: {
    CardExames
  },

  data() {
    return {
      exam: Array.isArray(exam) ? exam : [],
      currentExam: null,
      examNotFound: false,
      loading: true
    };
  },

  computed: {
    iconSrc() {
      if (!this.currentExam || !this.currentExam.icon) {
        return "";
      }

      return icons[this.currentExam.icon] || "";
    }
  },

  watch: {
    "$route.params.slug": {
      immediate: true,
      handler() {
        this.filterExam();
      }
    }
  },

  methods: {
    filterExam() {
      this.loading = true;
      this.examNotFound = false;
      this.currentExam = null;

      const slug = this.$route.params.slug;

      if (!slug || !this.exam.length) {
        this.examNotFound = true;
        this.loading = false;
        return;
      }

      const normalizedSlug = String(slug)
        .trim()
        .toLowerCase();

      this.currentExam =
        this.exam.find(item => {
          const key = String(item.key || "")
            .trim()
            .toLowerCase();

          const itemSlug = String(item.slug || "")
            .trim()
            .toLowerCase();

          return (
            key === normalizedSlug ||
            itemSlug === normalizedSlug
          );
        }) || null;

      this.examNotFound = !this.currentExam;
      this.loading = false;

      if (this.examNotFound) {
        console.error(
          "Exame não encontrado:",
          normalizedSlug
        );
      }
    },

    open() {
      if (!this.currentExam) {
        return;
      }

      const phone = "5532984020650";

      const message =
        `Olá! Gostaria de agendar o exame ${this.currentExam.name}.`;

      const whatsappUrl =
        `https://api.whatsapp.com/send?phone=${phone}` +
        `&text=${encodeURIComponent(message)}`;

      window.open(
        whatsappUrl,
        "_blank",
        "noopener,noreferrer"
      );
    }
  }
};
</script>

<style>
#exam .banner {
  position: relative;
}

/* Fica sempre centralizado na divisa entre o banner e o corpo
   da página, qualquer que seja a altura do banner. */
#exam .exam-illustration {
  position: absolute;
  right: 20em;
  bottom: 0;
  z-index: 2;
  transform: translateY(50%);
}

#exam .exam-illustration-mobile {
  display: none;
  width: 160px;
  margin: 0 auto 24px;
}

/* Círculo igual ao da lista "Exames oferecidos"
   (CardExameIcone): anel azul-claro uniforme e miolo claro. */
#exam .exam-hero-icon {
  position: relative;
  isolation: isolate;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 160px;
  height: 160px;
  min-width: 160px;
  min-height: 160px;
  flex: 0 0 160px;

  box-sizing: border-box;
}

#exam .exam-hero-icon-circle {
  position: absolute;
  z-index: 0;
  inset: 0;

  display: block;
  box-sizing: border-box;

  width: 100%;
  height: 100%;
  border: 9px solid #8dd1e8;
  border-radius: 50%;

  background: #f1f9fd;
  pointer-events: none;
}

#exam .exam-hero-icon img {
  position: relative;
  z-index: 1;

  display: block;
  width: 112px;
  height: 112px;
  max-width: none;
  max-height: none;

  object-fit: contain;
}

#exam .exam-hero-icon-fallback {
  position: relative;
  z-index: 1;

  font-size: 62px;
  color: #6a9bb8;
}

/* Celulares */
@media only screen and (max-width: 767px) {
  #exam .exam-illustration {
    display: none;
  }

  #exam .exam-illustration-mobile {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 24px auto;
  }

  #exam .exam-hero-icon {
    width: 116px;
    height: 116px;
    min-width: 116px;
    min-height: 116px;
    flex: 0 0 116px;
  }

  #exam .exam-hero-icon-circle {
    border-width: 7px;
  }

  #exam .exam-hero-icon img {
    width: 82px;
    height: 82px;
  }

  #exam .exam-hero-icon-fallback {
    font-size: 46px;
  }
}
</style>