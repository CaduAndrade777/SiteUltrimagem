<template>
  <div>
    <div class="q-gutter-md">
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
          :key="item.id"
          :img-src="item.image"
        >
          <div class="q-mt-md">
            <div class="container ">
              <div class="row">
                <div class="col-md-6 q-pt-lg">
                  <!-- <h1 v-html="item.name"></h1> -->
                  <!-- <h2 class="display-2">
                    {{ item.description }}
                  </h2> -->
                </div>
              </div>
            </div>
          </div>
          <SocialButtons />
        </q-carousel-slide>
      </q-carousel>
    </div>

    <SectionPreviaOqueSomos></SectionPreviaOqueSomos>
    <SectionSaudeMulher></SectionSaudeMulher>
    <SectionOqueOferecemos></SectionOqueOferecemos>
    <SectionRecebaConteudo></SectionRecebaConteudo>
    <Convenios></Convenios>

    <div class="row">
      <div class="col-md-6  esquerdo">
        <section>
          <div class="container-2 text-secondary">
            <h2>{{ infos }}</h2>
            <p>{{ infosSub }}</p>
          </div>
        </section>
      </div>
      <div class="col-md-6 direito">
        <section>
          <div class="container-2 text-secondary">
            <h2>Últimas Notícias</h2>

            <a class="card-new-slim">
              <img
                class="card-image"
                src="http://plataformadeformacao.lantec.ufsc.br/noticia/230"
              />

              <div class="card-body">
                <div class="card-title" ellipsis>
                  <h3>Aumenta o número de contaminados por covid</h3>
                </div>

                <p class="card-text" ellipsis>
                  Prefeitura de Ubá çança nota pedindo a diminuição de
                  frequência a bares...
                </p>
              </div>
            </a>

            <a class="card-new-slim">
              <img
                class="card-image"
                src="http://plataformadeformacao.lantec.ufsc.br/noticia/230"
              />

              <div class="card-body">
                <div class="card-title" ellipsis>
                  <h3>Aumenta o número de contaminados por covid</h3>
                </div>

                <p class="card-text" ellipsis>
                  Prefeitura de Ubá çança nota pedindo a diminuição de
                  frequência a bares...
                </p>
              </div>
            </a>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
<script>
import SectionPreviaOqueSomos from "../../components/Sections/PreviaQuemSomos.vue";
import SectionSaudeMulher from "../../components/Sections/SaudeMulher.vue";
import SectionOqueOferecemos from "../../components/Sections/OqueOferecemosHome.vue";
import SectionRecebaConteudo from "../../components/Sections/RecebaConteudo.vue";
import SocialButtons from "../../components/Elements/Buttons/SocialButtons.vue";
import Convenios from "../../components/Sections/Convenios.vue";

export default {
  name: "HomeIndex",
  data() {
    return {
      slide: 1,
      autoplay: true,
      carousel: [],

      infos: "Informações sobre saúde",
      infosSub:
        "No blog de saúde da Ultrimagem – Ubá você confere dicas e informações interessantes sobre as campanhas da clínica, novidades em equipamentos, exames e muito mais. Confira!"
    };
  },
  components: {
    SectionPreviaOqueSomos,
    SectionSaudeMulher,
    SectionOqueOferecemos,
    SectionRecebaConteudo,
    SocialButtons,
    Convenios
  },
  mounted() {
    this.loadCarousel();
  },
  methods: {
    loadCarousel() {
      this.$axios
        .get("banners", {}, {})
        .then(res => {
          console.log(res);
          this.carousel = res.data;
          console.log(this.carousel);
        })
        .catch(e => {
          this.$q.notify({
            position: "top",
            color: "red",
            message: e.response.data.error
          });
        })
        .finally(() => {});
    }
  }
};
</script>

<style scoped lang="scss">
.container-2 {
  max-width: 620px;
  width: 100%;

  margin: auto;
  padding: 0px 15px;
}

.esquerdo {
  background-color: #0e9dd0;
}

.direito {
  background-color: #b8def0;
}

.card-new-slim {
  display: flex;

  border-bottom: 2px solid #ccc;
}
</style>
