<template>
  <div class="row">
    <div class="col-12">
      <div id="carrousel" class="home-carousel">
        <q-carousel
          ref="carouselRef"
          v-model="slide"
          swipeable
          animated
          navigation
          navigation-position="right"
          infinite
          transition-prev="slide-down"
          transition-next="slide-up"
          control-color="white"
          height="100%"
          class="carousel-custom bg-primary text-white"
          role="region"
          aria-label="Campanhas e novidades da Ultrimagem"
          @mouseenter="pauseAutoplay"
          @mouseleave="resumeAutoplay"
          @touchstart="pauseAutoplay"
          @touchend="resumeAutoplay"
        >
          <q-carousel-slide
            v-for="item in carousel"
            :key="item.id"
            :name="item.id"
            class="home-carousel-slide q-pa-none"
          >
            <picture class="home-carousel-picture">
              <source media="(max-width: 768px)" :srcset="item.mobile" />
              <img :src="item.image" :alt="item.alt" class="home-carousel-image" />
            </picture>
          </q-carousel-slide>

          <template v-slot:control>
            <q-carousel-control
              position="top"
              :offset="[0, 16]"
              class="home-carousel-top-control"
            >
              <q-btn
                round
                dense
                flat
                color="white"
                icon="keyboard_arrow_up"
                aria-label="Banner anterior"
                @click="$refs.carouselRef.previous()"
              />
            </q-carousel-control>

            <q-carousel-control
              position="bottom"
              :offset="[0, 16]"
              class="home-carousel-bottom-control"
            >
              <q-btn
                round
                dense
                flat
                color="white"
                icon="keyboard_arrow_down"
                aria-label="Próximo banner"
                @click="$refs.carouselRef.next()"
              />
            </q-carousel-control>
          </template>
        </q-carousel>
      </div>
    </div>
  </div>
</template>

<script>
import outubroRosaDesktop from "../../../assets/img/components/banner/carrossel/outubro-rosa-desktop.png";
import outubroRosaMobile from "../../../assets/img/components/banner/carrossel/outubro-rosa-mobile.png";
import whatsappMedicosDesktop from "../../../assets/img/components/banner/carrossel/whatsappMedicos.png";
import whatsappMedicosMobile from "../../../assets/img/components/banner/carrossel/whatsappMedicos-Mobile.png";
import novidadesDesktop from "../../../assets/img/components/banner/carrossel/novidades-desktop.png";
import novidadesMobile from "../../../assets/img/components/banner/carrossel/novidades-mobile.png";
import expansaoDesktop from "../../../assets/img/components/banner/carrossel/expansao-desktop.png";
import expansaoMobile from "../../../assets/img/components/banner/carrossel/expansao-mobile.png";

export default {
  name: "CarrouselInicio",

  data() {
    return {
      slide: "outubro-rosa",
      carouselInterval: null,
      autoplayPaused: false,

      carousel: [
        {
          id: "outubro-rosa",
          image: outubroRosaDesktop,
          mobile: outubroRosaMobile,
          alt: "Campanha Outubro Rosa da Ultrimagem"
        },
        {
          id: "whatsapp-medicos",
          image: whatsappMedicosDesktop,
          mobile: whatsappMedicosMobile,
          alt: "Banner sobre o WhatsApp dos médicos"
        },
        {
          id: "novidades",
          image: novidadesDesktop,
          mobile: novidadesMobile,
          alt: "Novidades da Ultrimagem"
        },
        {
          id: "expansao",
          image: expansaoDesktop,
          mobile: expansaoMobile,
          alt: "Nova expansão da Ultrimagem"
        }
      ]
    };
  },

  mounted() {
    this.startAutoplay();
  },

  beforeDestroy() {
    this.clearAutoplay();
  },

  methods: {
    startAutoplay() {
      this.clearAutoplay();

      this.carouselInterval = setInterval(() => {
        if (!this.autoplayPaused && this.$refs.carouselRef) {
          this.$refs.carouselRef.next();
        }
      }, 7000);
    },

    clearAutoplay() {
      if (this.carouselInterval) {
        clearInterval(this.carouselInterval);
        this.carouselInterval = null;
      }
    },

    pauseAutoplay() {
      this.autoplayPaused = true;
    },

    resumeAutoplay() {
      this.autoplayPaused = false;
    }
  }
};
</script>

<style>
#carrousel {
  width: 100%;
  overflow: hidden;
}

.home-carousel {
  width: 100%;
  height: clamp(480px, 42vw, 680px);
}

.home-carousel .q-carousel {
  width: 100%;
  height: 100%;
  min-height: 0;
}

.home-carousel .q-carousel__slide {
  position: relative;
  height: 100%;
  padding: 0 !important;
  overflow: hidden;
}

.home-carousel-slide {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 480px;
  overflow: hidden;
  background: #222;
}

.home-carousel-picture {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
}

.home-carousel-image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

/* Indicadores de navegação na lateral direita */
.home-carousel .q-carousel__navigation {
  z-index: 3;
  right: 18px !important;
  left: auto !important;
  top: 50% !important;
  bottom: auto !important;
  transform: translateY(-50%);
  flex-direction: column;
  gap: 8px;
}

.home-carousel .q-carousel__navigation .q-btn {
  margin: 4px 0;
}

/* Esconde as setas padrão do Quasar */
.home-carousel .q-carousel__prev-arrow,
.home-carousel .q-carousel__next-arrow {
  display: none !important;
}

/* Posicionamento dos controles personalizados */
.home-carousel .q-carousel__control {
  z-index: 4;
}

.home-carousel .home-carousel-top-control {
  top: 0;
  left: 50%;
  right: auto;
  transform: translateX(-50%);
}

.home-carousel .home-carousel-bottom-control {
  bottom: 0;
  left: 50%;
  right: auto;
  transform: translateX(-50%);
}

/* Somente as setas: sem círculo, fundo ou sombra */
.home-carousel-top-control .q-btn,
.home-carousel-bottom-control .q-btn {
  min-width: 36px;
  min-height: 36px;
  padding: 0;
  background: transparent !important;
  box-shadow: none !important;
  border: none !important;
  border-radius: 0 !important;
  color: rgba(255, 255, 255, 0.78) !important;
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}

.home-carousel-top-control .q-btn:hover,
.home-carousel-bottom-control .q-btn:hover {
  background: transparent !important;
  box-shadow: none !important;
  color: #fff !important;
  opacity: 1;
}

.home-carousel-top-control .q-btn .q-focus-helper,
.home-carousel-bottom-control .q-btn .q-focus-helper {
  display: none !important;
}

.home-carousel-top-control .q-icon,
.home-carousel-bottom-control .q-icon {
  font-size: 32px !important;
}

/* Responsividade */
@media (max-width: 768px) {
  .home-carousel {
    height: 560px;
  }

  .home-carousel-slide {
    height: 100%;
    min-height: 560px;
  }

  .home-carousel-image {
    object-position: center top;
  }

  .home-carousel .q-carousel__navigation {
    right: 8px !important;
  }
}

@media (max-width: 425px) {
  .home-carousel {
    height: 560px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .home-carousel-top-control .q-btn,
  .home-carousel-bottom-control .q-btn {
    transition: none;
  }
}
</style>