<template>
  <div class="banner-buttons q-ml-md" id="bannerButtons">
    <!-- Botão Agendar Exame -->
    <q-btn
      unelevated
      color="primary"
      class="q-mr-md q-mb-md button-primary justify-center agendar-exame-btn"
      @click="openWhatsApp"
      no-caps
    >
      <i class="fab fa-whatsapp q-mr-sm" style="font-size: 1.2em" aria-hidden="true"></i>
      <span style="font-size: 14px" class="text-secondary text-bold">
        {{ textBtnAgendar }}
      </span>
    </q-btn>

    <!-- Botão Resultado de Exames (somente mobile na primeira imagem) -->
    <q-btn
      v-if="isMobile && slide === 1"
      unelevated
      color="primary"
      class="q-mr-md q-mb-md button-primary justify-center resultado-exames-btn"
      href="https://pixeon.clickvita.com.br/#/instituicao/ULTRI"
      target="_blank"
      rel="noopener"
      no-caps
    >
      <span style="font-size: 14px" class="text-secondary text-bold">
        {{ textBtnResultados }}
      </span>
    </q-btn>
  </div>
</template>

<script>
export default {
  name: "BannerButtons",
  props: {
    slide: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      textBtnAgendar: "Agendar Exames",
      textBtnResultados: "Resultado de Exames",
      isMobile: false
    };
  },
  mounted() {
    this.isMobile = this.$q.platform.is.mobile;

    const agendarMedia = window.matchMedia("(max-width: 370px)");
    const resultadoMedia = window.matchMedia("(max-width: 410px)");

    this.textBtnAgendar = agendarMedia.matches ? "Agendar" : "Agendar Exames";
    this.textBtnResultados = resultadoMedia.matches ? "Resultado" : "Resultado de Exames";
  },
  methods: {
    openWhatsApp() {
      window.open("https://api.whatsapp.com/send?phone=5532984020650", "_blank", "noopener");
    }
  }
};
</script>

<style scoped>
.resultado-exames-btn {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  font-weight: bold;
  font-size: 16px;
}

/* Responsividade */
@media (max-width: 768px) {
  .resultado-exames-btn {
    bottom: 305px;
    font-size: 14px;
    width: 90%;
  }

  .agendar-exame-btn {
    display: none;
  }
}

@media (max-width: 425px) {
  .resultado-exames-btn {
    bottom: 5px;
    font-size: 12px;
    width: 100%;
  }

  .agendar-exame-btn {
    display: none;
  }
}
</style>