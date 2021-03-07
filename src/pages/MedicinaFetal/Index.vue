<template>
  <div id="medicina-fetal">
    <Banner
      title="<strong> Gravidez assistida  </strong>"
      subtitle="Saiba mais sobre o desenvolvimento do seu bebê e com quais exames você pode acompanha-lo. Ajudamos você a amparar sua gestação."
    />

    <MedicinaFetal />
    <ExamesMedicinaFetal />
    <SaudeMaeNenem />
    <SectionRecebaConteudo />
  </div>
</template>

<script>
import Banner from "../../components/Sections/Banner";
import MedicinaFetal from "../../components/Sections/MedicinaFetal";
import ExamesMedicinaFetal from "../../components/Sections/ExamesMedicinaFetal";
import SaudeMaeNenem from "../../components/Sections/SaudeMaeNenem";
import SectionRecebaConteudo from "../../components/Sections/RecebaConteudo.vue";

export default {
  components: {
    Banner,
    MedicinaFetal,
    ExamesMedicinaFetal,
    SaudeMaeNenem,
    SectionRecebaConteudo
  },
  data() {
    return {};
  }
};
</script>
