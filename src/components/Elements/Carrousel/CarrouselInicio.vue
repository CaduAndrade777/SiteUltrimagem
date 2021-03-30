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
            <SocialButtons />
          </q-carousel-slide>
        </q-carousel>
      </div>
    </div>
  </div>
</template>

<script>
import SocialButtons from "../../../components/Elements/Buttons/SocialButtons.vue";
import { Notify } from "quasar";

export default {
  components: {
    SocialButtons
  },
  data() {
    return {
      slide: 1,
      autoplay: true,
      carousel: [],
      enable: false
    };
  },
  mounted() {
    this.loadCarousel();
  },
  methods: {
    loadCarousel() {
      this.$axios
        .get("banners")
        .then(res => {
          this.checkPlataform(res.data);
          //this.carousel = res.data;
        })
        .catch(e => {
          this.$q.notify({
            position: "top",
            color: "red",
            message:
              "Ooops Houve um Problema em tentar carregar os Banners, por favor tente novamente!"
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
      } else {
        this.carousel = desktop;
      }
      this.enable = true;
    }
  }
};
</script>
