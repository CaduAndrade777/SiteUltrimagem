<template>
  <div>
    <div class="q-gutter-md">
      <q-carousel
        v-model="slide"
        transition-prev="scale"
        transition-next="scale"
        swipeable
        animated
        control-color="white"
        navigation
        padding
        arrows
        height="744px"
        class="bg-primary text-white shadow-1 rounded-borders"
      >
        <q-carousel-slide name="style" class="column no-wrap flex-center">
          <q-icon name="style" size="56px" />
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="tv" class="column no-wrap flex-center">
          <q-icon name="live_tv" size="56px" />
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="layers" class="column no-wrap flex-center">
          <q-icon name="layers" size="56px" />
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="map" class="column no-wrap flex-center">
          <q-icon name="terrain" size="56px" />
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
      <SectionPreviaOqueSomos></SectionPreviaOqueSomos>
      <SectionSaudeMulher></SectionSaudeMulher>
      <SectionOqueOferecemos></SectionOqueOferecemos>
      <SectionRecebaConteudo></SectionRecebaConteudo>
      
      <div class="row">
          <div class="col-md-6 esquerdo">
            <h2 class="text-secondary text-center">{{infos}}</h2>
            <p class="text-secondary text-center">{{infosSub}}</p>
        </div>
        <div class="col-md-6 direito">
            <h2 class="text-secondary text-center">{{blogInfoTitle}}</h2>
        </div>
      </div>
  </div>
  
</template>
<script>

import SectionPreviaOqueSomos from "../../components/Sections/PreviaQuemSomos.vue"
import SectionSaudeMulher from "../../components/Sections/SaudeMulher.vue"
import SectionOqueOferecemos from "../../components/Sections/OqueOferecemosHome.vue"
import SectionRecebaConteudo from "../../components/Sections/RecebaConteudo.vue"

export default {
  name: "HomeIndex",
  data() {
    return {
      slide: 'style',
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.',
      infos: "Informações sobre saúde",
      infosSub: "No blog de saúde da Ultrimagem – Ubá você confere dicas, informações e dados interessantes sobre as campanhas da clínica, novidades em equipamentos, exames e muito mais. Confira!",
      blogInfoTitle: "Últimas Notícias",
    }
  },
   components: {
    SectionPreviaOqueSomos,
    SectionSaudeMulher,
    SectionOqueOferecemos,
    SectionRecebaConteudo,
  },
};
</script>

<style scoped lang="scss">

.esquerdo {
  background-color: #0E9DD0;
  height: 675px;
}

.direito {
  background-color: #B8DEF0;
  height: 675px;
}


</style>
