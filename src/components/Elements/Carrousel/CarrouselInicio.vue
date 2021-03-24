<template>
  <div class="row">
    <div class="col-12">
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
      carousel: []
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
          this.carousel = res.data;
        })
        .catch(e => {
          this.$q.notify({
            position: "top",
            color: "red",
            message: e.response.data.error
          });
        });
    }
  }
};
</script>
