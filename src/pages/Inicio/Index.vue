<template>
  <div id="inicio">
    <CarrouselInicio />
    <SectionPreviaOqueSomos />
    <SectionSaudeMulher />
    <SectionOqueOferecemos />
    <SectionRecebaConteudo />
    <Convenios />
    <SectionBlog />
  </div>
</template>

<script>
import CarrouselInicio from "../../components/Elements/Carrousel/CarrouselInicio.vue";
import SectionPreviaOqueSomos from "../../components/Sections/PreviaQuemSomos.vue";
import SectionSaudeMulher from "../../components/Sections/SaudeMulher.vue";
import SectionOqueOferecemos from "../../components/Sections/OqueOferecemosHome.vue";
import SectionRecebaConteudo from "../../components/Sections/RecebaConteudo.vue";
import Convenios from "../../components/Sections/Convenios.vue";
import SectionBlog from "../../components/Sections/Blog.vue";
export default {
  name: "HomeIndex",
  data() {
    return {
    };
  },
  components: {
    CarrouselInicio,
    SectionPreviaOqueSomos,
    SectionSaudeMulher,
    SectionOqueOferecemos,
    SectionRecebaConteudo,
    Convenios,
    SectionBlog
  }
};

</script>
