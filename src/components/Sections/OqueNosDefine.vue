<template>
  <section id="defines">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h1 class="text-weight-regular grey-text">
            Nossa missão
          </h1>
          <p class="grey-text">
            Prestar serviços de diagnóstico por imagem com excelência técnica, 
            cuidado humano&nbsp;e&nbsp;responsabilidade social, promovendo o bem-estar dos pacientes 
            e&nbsp;a&nbsp;confiança&nbsp;dos&nbsp;profissionais&nbsp;da&nbsp;saúde.
          </p>
          <h1 class="text-weight-regular grey-text">
            Visão de futuro
          </h1>
          <p class="grey-text">
            Ser reconhecida como clínica de referência em exames de imagem pela qualidade no atendimento,&nbsp;profissionalismo e investimento contínuo em tecnologia.
          </p>
          <h1 class="text-weight-regular grey-text">
            Nossos valores:
          </h1>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div
          class="col-md-3 col-sm-6 q-mt-lg text-center"
          v-for="(item, index) in mission"
          :key="index"
        >
          <q-img
            alt="Ilustração"
            :src="getImage(item.img)"
            :class="{
              'ajuste-img-item3': index === 2,
              'ajuste-img-item4': index === 3
            }"
            style="max-width: 250px; margin: auto"
          />
          <h3 class="grey-text">{{ item.title }}</h3>
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
          img: "item1.svg",
          title: "Humanização e acolhimento",
          description:
            "Cuidar de cada paciente com empatia, escuta ativa e profissionalismo."
        },
        {
          id: 2,
          img: "item2.svg",
          title: "Qualidade e precisão",
          description:
            "Oferecer exames confiáveis e laudos seguros."
        },
        {
          id: 3,
          img: "item5.svg",
          title: "Ética e integridade",
          description:
            "Atuar com responsabilidade em todas as relações."
        },
        {
          id: 4,
          img: "item6.svg",
          title: "Transparência",
          description:
            "Manter uma comunicação clara e verdadeira com pacientes, médicos e equipes."
        }
      ]
    };
  },
  methods: {
    getImage(fileName) {
      try {
        return require(`../../assets/img/components/oferecemosHome/${fileName}`);
      } catch (e) {
        return ""; 
      }
    }
  }
};
</script>

<style scoped>
.ajuste-img-item3 {
  max-width: 184px !important;
}

.ajuste-img-item4 {
  max-width: 188px !important;
}
</style>
