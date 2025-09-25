<template>
  <div class="row">
    <div class="col-12" v-if="enable">
      <div id="carrousel" class="q-gutter-md">
        <q-carousel
          ref="carouselRef"
          v-model="slide"
          swipeable
          animated
          navigation
          infinite
          arrows
          transition-prev="slide-right"
          transition-next="slide-left"
          control-color="white"
          padding
          height="42em"
          class="bg-primary text-white carousel-custom"
          role="region"
          aria-label="Carrossel de banners"
          @mouseenter="pauseAutoplay"
          @mouseleave="resumeAutoplay"
          @touchstart="pauseAutoplay"
          @touchend="resumeAutoplay"
        >
          <q-carousel-slide
            v-for="item in carousel"
            :key="item.id"
            :name="item.id"
            :img-src="item.image"
          />
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
      slide: 1,
      carousel: [],
      enable: false,
      carouselInterval: null,
    };
  },
  mounted() {
    this.loadCarousel();
    this.startAutoplay();
  },
  beforeUnmount() {
    this.clearAutoplay();
  },
  methods: {
    loadCarousel() {
      this.$axios
        .get("banners")
        .then((res) => {
          const mobile = [];
          const desktop = [];
          let idMobile = 1;
          let idDesktop = 1;

          res.data.forEach((item) => {
            if (item.mobile == 1) {
              item.id = idMobile++;
              mobile.push(item);
            } else {
              item.id = idDesktop++;
              desktop.push(item);
            }
          });

          this.carousel = this.$q.platform.is.mobile ? mobile : desktop;
          this.enable = true;
        })
        .catch(() => {
          Notify.create({
            position: "top",
            color: "red",
            message: "Erro ao carregar os banners, por favor tente novamente!",
          });
        });
    },
    startAutoplay() {
      this.clearAutoplay();
      this.carouselInterval = setInterval(() => {
        if (this.$refs.carouselRef) {
          this.$refs.carouselRef.next();
        }
      }, 5000);
    },
    clearAutoplay() {
      if (this.carouselInterval) {
        clearInterval(this.carouselInterval);
        this.carouselInterval = null;
      }
    },
    pauseAutoplay() {
      this.clearAutoplay();
    },
    resumeAutoplay() {
      this.startAutoplay();
    },
  },
};
</script>

<style scoped>
#carrousel {
  max-height: 672px;
}

.carousel-custom .q-carousel__slide {
  transition-duration: 0.8s !important;
}
</style>
