```vue
<template>
  <div>
    <!-- CARROSSEL PRINCIPAL: SOMENTE IMAGENS -->
    <section
      v-if="isHomeCarousel"
      id="home-banner-carousel"
      class="home-banner-carousel"
      aria-label="Campanhas e novidades da Ultrimagem"
      @mouseenter="pauseCarousel"
      @mouseleave="resumeCarousel"
    >
      <transition name="banner-slide" mode="out-in">
        <div
          :key="slides[activeSlide].id"
          class="home-banner-slide"
        >
          <picture class="home-banner-picture">
            <source
              media="(max-width: 768px)"
              :srcset="slides[activeSlide].mobile"
            />

            <img
              :src="slides[activeSlide].desktop"
              :alt="slides[activeSlide].alt"
              class="home-banner-image"
              :fetchpriority="activeSlide === 0 ? 'high' : 'auto'"
            />
          </picture>
        </div>
      </transition>
    </section>

    <!-- BANNERS DAS PÁGINAS INTERNAS -->
    <section
      v-else
      id="banner"
      class="text-secondary"
      :class="getBannerClass"
    >
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-12">
            <h1
              class="banner-title font-hp-regular q-mb-sm"
              v-html="title"
            ></h1>

            <h2
              class="banner-subtitle"
              v-html="subtitle"
            ></h2>

            <SocialButtons />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import SocialButtons from "../../components/Elements/Buttons/SocialButtons.vue";

import outubroRosaDesktop from "../../assets/img/components/banner/carrossel/outubro-rosa-desktop.png";
import outubroRosaMobile from "../../assets/img/components/banner/carrossel/outubro-rosa-mobile.png";
import expansaoDesktop from "../../assets/img/components/banner/carrossel/expansao-desktop.png";
import expansaoMobile from "../../assets/img/components/banner/carrossel/expansao-mobile.png";

export default {
  name: "Banner",

  props: ["title", "subtitle", "page"],

  components: {
    SocialButtons,
  },

  data() {
    return {
      activeSlide: 0,
      carouselTimer: null,
      carouselPaused: false,

      slides: [
        {
          id: "outubro-rosa",
          desktop: outubroRosaDesktop,
          mobile: outubroRosaMobile,
          alt: "Banner da campanha Outubro Rosa da Ultrimagem",
        },
        {
          id: "expansao",
          desktop: expansaoDesktop,
          mobile: expansaoMobile,
          alt: "Banner da expansão da Ultrimagem",
        },
      ],
    };
  },

  computed: {
    isHomeCarousel() {
      return (
        !this.page ||
        this.page === "home" ||
        this.page === "inicio"
      );
    },

    getBannerClass() {
      switch (this.page) {
        case "servico":
          return "img-servico";

        case "quem-somos":
          return "img-quem-somos";

        case "saude-da-mulher":
          return "img-saude-mulher";

        case "medicina-fetal":
          return "img-medicina-fetal";

        case "blog":
          return "img-blog";

        case "contato":
          return "img-contato";

        default:
          return "";
      }
    },
  },

  mounted() {
    if (this.isHomeCarousel) {
      this.startCarousel();
    }
  },

  beforeDestroy() {
    this.stopCarousel();
  },

  methods: {
    startCarousel() {
      this.stopCarousel();

      this.carouselTimer = setInterval(() => {
        if (!this.carouselPaused) {
          this.activeSlide =
            (this.activeSlide + 1) % this.slides.length;
        }
      }, 7000);
    },

    stopCarousel() {
      if (this.carouselTimer) {
        clearInterval(this.carouselTimer);
        this.carouselTimer = null;
      }
    },

    pauseCarousel() {
      this.carouselPaused = true;
    },

    resumeCarousel() {
      this.carouselPaused = false;
    },
  },
};
</script>

<style>
/* =========================================
   TIPOGRAFIA DOS BANNERS INTERNOS
========================================= */

#banner .banner-title {
  font-family: "HP", sans-serif !important;
  font-weight: 400;
  font-size: 30px;
  line-height: 1.2;
}

#banner .banner-subtitle {
  font-family: "Google Sans", "Roboto", sans-serif !important;
  font-weight: 400;
  font-size: 21px;
  line-height: 1.5;
  margin-top: 0.5em;
}

/* =========================================
   BANNERS DAS PÁGINAS INTERNAS
========================================= */

#banner {
  background-color: #299dd5;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 4em 0 4.5em;
  width: 100%;
  height: 100%;
}

.img-servico {
  background-image: url("../../assets/img/components/banner/servicos.svg");
}

.img-quem-somos {
  background-image: url("../../assets/img/components/banner/quem-somos.png");
}

.img-saude-mulher {
  background-image: url("../../assets/img/components/banner/saude-mulher.svg");
}

.img-medicina-fetal {
  background-image: url("../../assets/img/components/banner/medicina-fetal.svg");
}

.img-blog {
  background-image: url("../../assets/img/components/banner/blog.svg");
}

.img-contato {
  background-image: url("../../assets/img/components/banner/contato.svg");
}

/* =========================================
   CARROSSEL: SOMENTE OS BANNERS
========================================= */

#home-banner-carousel {
  position: relative;
  display: block;
  width: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;

  background: transparent !important;
  box-shadow: none !important;
  filter: none !important;
  text-shadow: none !important;

  isolation: isolate;
}

#home-banner-carousel::before,
#home-banner-carousel::after,
#home-banner-carousel .home-banner-slide::before,
#home-banner-carousel .home-banner-slide::after,
#home-banner-carousel .home-banner-picture::before,
#home-banner-carousel .home-banner-picture::after,
#home-banner-carousel .home-banner-image::before,
#home-banner-carousel .home-banner-image::after {
  content: none !important;
  display: none !important;
}

.home-banner-slide {
  position: relative;
  display: block;
  width: 100%;
  height: clamp(320px, 31.25vw, 600px);
  margin: 0;
  padding: 0;
  overflow: hidden;

  background: transparent !important;
  box-shadow: none !important;
  filter: none !important;
}

.home-banner-picture {
  position: absolute;
  inset: 0;

  display: block;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;

  background: transparent !important;
  box-shadow: none !important;
  filter: none !important;
}

.home-banner-image {
  display: block !important;

  width: 100% !important;
  height: 100% !important;
  max-width: none !important;
  margin: 0 !important;
  padding: 0 !important;

  object-fit: cover;
  object-position: center;

  border: 0 !important;
  border-radius: 0 !important;
  outline: none !important;

  background: transparent !important;
  box-shadow: none !important;
  filter: none !important;
  text-shadow: none !important;
}

/* =========================================
   REMOVE ELEMENTOS SOBREPOSTOS
========================================= */

#home-banner-carousel .home-banner-shade,
#home-banner-carousel .home-banner-content,
#home-banner-carousel .home-banner-button,
#home-banner-carousel .home-banner-indicators {
  display: none !important;
}

/* =========================================
   TRANSIÇÃO ENTRE IMAGENS
========================================= */

.banner-slide-enter-active,
.banner-slide-leave-active {
  transition: opacity 0.4s ease;
}

.banner-slide-enter,
.banner-slide-leave-to {
  opacity: 0;
}

/* =========================================
   TELAS GRANDES: BANNERS INTERNOS
========================================= */

@media (min-width: 1450px) {
  #banner {
    display: flex;
  }

  .img-servico {
    background-image: url("../../assets/img/components/banner/servicos-lg.svg");
    height: 33em;
  }

  .img-quem-somos {
    background-image: url("../../assets/img/components/banner/quem-somos.png");
  }

  .img-saude-mulher {
    background-image: url("../../assets/img/components/banner/saude-mulher-lg.svg");
  }

  .img-medicina-fetal {
    background-image: url("../../assets/img/components/banner/medicina-fetal-lg.svg");
  }

  .img-blog {
    background-image: url("../../assets/img/components/banner/blog-lg.svg");
  }

  .img-contato {
    background-image: url("../../assets/img/components/banner/contato-lg.svg");
  }
}

/* =========================================
   TABLETS E CELULARES
========================================= */

@media (max-width: 768px) {
  #banner .banner-title {
    font-size: 24px;
  }

  #banner .banner-subtitle {
    font-size: 16px;
  }

  .home-banner-slide {
    height: min(150vw, 780px);
    min-height: 500px;
    max-height: 780px;
  }

  .home-banner-image {
    object-fit: cover;
    object-position: center top;
  }
}

/* =========================================
   CELULARES MENORES
========================================= */

@media (max-width: 425px) {
  #banner {
    background-image: none;
  }

  .home-banner-slide {
    height: 155vw;
    min-height: 520px;
    max-height: 760px;
  }

  .home-banner-image {
    object-fit: cover;
    object-position: center top;
  }
}

/* =========================================
   ACESSIBILIDADE
========================================= */

@media (prefers-reduced-motion: reduce) {
  .banner-slide-enter-active,
  .banner-slide-leave-active {
    transition: none !important;
  }
}
</style>
