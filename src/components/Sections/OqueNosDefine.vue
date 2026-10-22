
<template>
  <section id="defines">
    <div class="container">
      <div class="row mission-vision-row">
        <!-- Nossa missão -->
        <div class="col-md-6 col-12 mission-vision-block">
          <h2 class="font-hp-regular grey-text">
            Nossa missão
          </h2>

          <p class="grey-text">
            Prestar serviços de diagnóstico por imagem com excelência técnica,
            cuidado humano e responsabilidade social, promovendo o bem-estar
            dos pacientes e a confiança dos profissionais da saúde.
          </p>
        </div>

        <!-- Visão de futuro -->
        <div class="col-md-6 col-12 mission-vision-block vision-block">
          <h2 class="font-hp-regular grey-text">
            Visão de futuro
          </h2>

          <p class="grey-text">
            Ser reconhecida como clínica de referência em exames de imagem pela
            qualidade no atendimento, profissionalismo e investimento contínuo
            em tecnologia.
          </p>
        </div>
      </div>

      <!-- Nossos valores -->
      <div class="row">
        <div class="col-12 values-title">
          <h2 class="font-hp-regular grey-text">
            Nossos valores:
          </h2>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div
          class="col-md-3 col-sm-6 col-12 q-mt-lg text-center"
          v-for="(item, index) in mission"
          :key="item.id"
        >
          <q-img
            alt="Ilustração"
            :src="getImage(item.img)"
            :class="{
              'ajuste-img-item3': index === 2,
              'ajuste-img-item4': index === 3
            }"
            class="value-image"
          />

          <h3 class="font-hp-regular grey-text">
            {{ item.title }}
          </h3>

          <p class="grey-text q-px-md">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'DefinesSection',

  data() {
    return {
      mission: [
        {
          id: 1,
          img: 'item1.svg',
          title: 'Humanização e acolhimento',
          description:
            'Cuidar de cada paciente com empatia, escuta ativa e profissionalismo.'
        },
        {
          id: 2,
          img: 'item2.svg',
          title: 'Qualidade e precisão',
          description:
            'Oferecer exames confiáveis e laudos seguros.'
        },
        {
          id: 3,
          img: 'item5.svg',
          title: 'Ética e integridade',
          description:
            'Atuar com responsabilidade em todas as relações.'
        },
        {
          id: 4,
          img: 'item6.svg',
          title: 'Transparência',
          description:
            'Manter uma comunicação clara e verdadeira com pacientes, médicos e equipes.'
        }
      ]
    };
  },

  methods: {
    getImage(fileName) {
      try {
        return require(
          `../../assets/img/components/oferecemosHome/${fileName}`
        );
      } catch (e) {
        return '';
      }
    }
  }
};
</script>

<style scoped>
/* Missão e visão lado a lado */
.mission-vision-row {
  margin-top: 20px;
  margin-bottom: 36px;
}

.mission-vision-block {
  padding: 12px 32px;
}

.mission-vision-block h2 {
  margin-top: 0;
  margin-bottom: 16px;
}

.mission-vision-block p {
  line-height: 1.8;
  margin-bottom: 0;
}

/* Divisor vertical sutil */
.vision-block {
  border-left: 1px solid rgba(109, 204, 236, 0.35);
}

/* Título dos valores */
.values-title {
  margin-top: 8px;
}

.values-title h2 {
  margin-bottom: 0;
}

/* Ilustrações originais */
.value-image {
  max-width: 250px;
  height: 175px;
  margin: 0 auto;
}

.ajuste-img-item3 {
  max-width: 184px !important;
}

.ajuste-img-item4 {
  max-width: 188px !important;
}

/* Layout responsivo */
@media (max-width: 767px) {
  .mission-vision-row {
    margin-top: 12px;
    margin-bottom: 28px;
  }

  .mission-vision-block {
    padding: 12px 20px;
  }

  .vision-block {
    border-left: none;
    border-top: 1px solid rgba(109, 204, 236, 0.35);
    margin-top: 16px;
    padding-top: 24px;
  }

  .mission-vision-block p {
    line-height: 1.7;
  }

  .values-title {
    margin-top: 0;
  }
}
</style>
