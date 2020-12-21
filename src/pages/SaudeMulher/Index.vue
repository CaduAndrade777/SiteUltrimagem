<template>
  <div>
    <Banner
      title="<strong> Saúde da mulher e medicina fetal  </strong>"
      subtitle="Cras mattis vestibulum quam mattis euismod. Ut posuere dolor neque, et vehicula ipsum blandit vel."
    >
    </Banner>

    <MedicinaFetal></MedicinaFetal>
    <RecebaConteudo></RecebaConteudo></RecebaConteudo>
  </div>
</template>

<script>
import Banner from "../../components/Sections/Banner.vue";
import MedicinaFetal from "../../components/Sections/MedicinaFetal.vue";
import RecebaConteudo from "../../components/Sections/RecebaConteudo.vue";

export default {
  data() {
    return {};
  },
  components: {
    Banner,
    MedicinaFetal,
    RecebaConteudo
  }
};
</script>

<style scoped lang="scss">
/* Accent */
</style>
