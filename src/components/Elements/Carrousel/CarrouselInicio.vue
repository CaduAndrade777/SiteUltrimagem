<template>
  <div class="row">
    <div class="col-12" v-if="enable">
      <div id="carrousel" class="q-gutter-md">
        <q-carousel
          swipeable
          animated
          v-model="slide"
          navigation
          infinite
          arrows
          transition-prev="slide-right"
          transition-next="slide-left"
          @mouseenter="autoplay = false"
          @mouseleave="autoplay = true"
          control-color="white"
          padding
          height="42em"
          class="bg-primary text-white"
        >
          <q-carousel-slide
            :name="item.id"
            v-for="(item, index) in carousel"
            :key="index"
            :img-src="item.image"
          >
            <!-- Botão 'Resultado de Exames' apenas na primeira imagem e no desktop -->
            <q-btn
              v-if="(!isMobile && slide === 1) || (isMobile && slide === 1)"  
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
                  Resultado de Exames
                </span>
              </a>
            </q-btn>
          </q-carousel-slide>
        </q-carousel>
      </div>
    </div>
  </div>
</template>

<script>
import { Notify } from "quasar";

export default {
  data() {
    return {
      slide: 1,  // Posição inicial do slide
      autoplay: true,
      carousel: [],
      enable: false,
      socialButtonsEnable: true,
      isMobile: false,  // Verifica se é mobile
    };
  },
  mounted() {
    this.loadCarousel();
    this.checkHasMobile();
  },
  methods: {
    loadCarousel() {
      this.$axios
        .get("banners")
        .then(res => {
          this.checkPlataform(res.data);
        })
        .catch(e => {
          this.$q.notify({
            position: "top",
            color: "red",
            message: "Erro ao carregar os banners, por favor tente novamente!"
          });
        });
    },
    checkPlataform(banners) {
      var mobile = [];
      var desktop = [];
      var idMobile = 1;
      var idDesktop = 1;

      for (let index = 0; index < banners.length; index++) {
        const element = banners[index];
        if (element.mobile == 1) {
          if (mobile.length == 0) {
            element.id = idMobile;
          } else {
            var countMob = idMobile++;
            element.id = countMob + 1;
          }
          mobile.push(element);
        } else if (element.mobile == 0) {
          if (desktop.length == 0) {
            element.id = idDesktop;
          } else {
            var count = idDesktop++;
            element.id = count + 1;
          }
          desktop.push(element);
        }
      }

      if (this.$q.platform.is.mobile) {
        this.carousel = mobile;
        this.socialButtonsEnable = false;
      } else {
        this.socialButtonsEnable = true;
        this.carousel = desktop;
      }
      this.enable = true;
    },
    checkHasMobile() {
      this.isMobile = this.$q.platform.is.mobile;  // Verifica se é mobile
    }
  }
};
</script>

<style scoped>
.resultado-exames-btn {
  position: absolute; 
  bottom: 60px; 
  left: 70%; 
  transform: translateX(-50%); 
  z-index: 10; 
  font-weight: bold;  /* Negrito no texto */
  font-size: 18px;    /* Tamanho maior no desktop */
  padding: 10px 20px; /* Botão mais largo */
  min-width: 200px;   /* Garantir que o botão tenha largura mínima */
}

/* Estilos específicos para mobile */
@media only screen and (max-width: 768px) {
  .resultado-exames-btn {
    bottom: 305px; /* Distância da parte inferior para dispositivos móveis */
    font-size: 14px; /* Ajusta o tamanho da fonte no mobile */
    width: 90%; /* Faz o botão ocupar mais espaço na tela do mobile */
    left: 50%;
  }
}

@media only screen and (max-width: 425px) {
  .resultado-exames-btn {
    bottom: 5px; /* Distância menor na tela muito pequena */
    font-size: 12px; /* Ajusta ainda mais o tamanho do texto */
    width: 100%; /* Faz o botão ocupar 100% da largura da tela */
  }
}
</style>