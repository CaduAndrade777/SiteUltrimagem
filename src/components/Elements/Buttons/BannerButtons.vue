<template>
  <div class="banner-buttons q-ml-md" id="bannerButtons">
    <!-- Botão Agendar Exame (Exibe em todas as telas) -->
    <q-btn
      unelevated
      color="primary"
      class="q-mr-md q-mb-md button-primary justify-center agendar-exame-btn"
    >
      <i style="font-size: 1.2em;" class="fab fa-whatsapp q-mr-sm"></i>
      <a @click="open()" class="flex">
        <span style="font-size: 14px" class="text-secondary text-bold">
          {{ textBtnAgendar }}
        </span>
      </a>
    </q-btn>

    <!-- Botão Resultado de Exames (Exibe apenas na primeira imagem no mobile) -->
    <q-btn
      v-if="isMobile && slide === 1" 
      unelevated
      color="primary"
      class="q-mr-md q-mb-md button-primary justify-center resultado-exames-btn"
    >
      <a
        href="https://pixeon.clickvita.com.br/#/instituicao/ULTRI"
        target="_blank"
        class="flex"
      >
        <span style="font-size: 14px" class="text-secondary">
          {{ textBtnResultados }}
        </span>
      </a>
    </q-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttonsBanner: [
        {
          name: "Agendar"
        },
        {
          name: "Resultado"
        }
      ],
      textBtnAgendar: "Agendar",
      textBtnResultados: "Resultados",
      isMobile: false, // Verifica se é mobile
      slide: 1, // Posição inicial do slide (primeira imagem)
    };
  },
  mounted() {
    var btnAgendar = window.matchMedia("(max-width: 370px)");
    var btnResultados = window.matchMedia("(max-width: 410px)");

    if (btnAgendar.matches) {
      this.textBtnAgendar = "Agendar";
    } else {
      this.textBtnAgendar = "Agendar Exames";
    }

    if (btnResultados.matches) {
      this.textBtnResultados = "Resultado";
    } else {
      this.textBtnResultados = "Resultado de Exames";
    }

    // Verifica se a plataforma é mobile
    this.isMobile = this.$q.platform.is.mobile;
  },
  methods: {
    open() {
      window.open("https://api.whatsapp.com/send?phone=5532984020650");
    }
  }
};
</script>

<!-- Estilos do botão -->
<style scoped>
.resultado-exames-btn {
  position: absolute; /* Permite posicionamento livre */
  bottom: 20px; /* Distância da parte inferior para o desktop */
  left: 50%; /* Centraliza horizontalmente */
  transform: translateX(-50%); /* Ajuste para centralização exata */
  z-index: 10; /* Garante que o botão fique acima de outros elementos */
  font-weight: bold;
  font-size: 16px; /* Ajuste do tamanho de fonte para desktop */
}

/* Estilos específicos para mobile */
@media only screen and (max-width: 768px) {
  .resultado-exames-btn {
    bottom: 305px; /* Distância da parte inferior para dispositivos móveis */
    font-size: 14px; /* Ajusta o tamanho da fonte no mobile */
    width: 90%; /* Faz o botão ocupar mais espaço na tela do mobile */
   
  }

  .agendar-exame-btn {
    display: none; /* Remove o botão Agendar Exame no mobile */
  }
}

@media only screen and (max-width: 425px) {
  .resultado-exames-btn {
    bottom: 5px; /* Distância menor na tela muito pequena */
    font-size: 12px; /* Ajusta ainda mais o tamanho do texto */
    width: 100%; /* Faz o botão ocupar 100% da largura da tela */
  }

  .agendar-exame-btn {
    display: none; /* Remove o botão Agendar Exame em telas muito pequenas */
  }
}
</style>