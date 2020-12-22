<template>
  <div>
    <Banner
      title="<strong> Saúde da mulher e medicina fetal  </strong>"
      subtitle="Cras mattis vestibulum quam mattis euismod. Ut posuere dolor neque, et vehicula ipsum blandit vel."
    >
    </Banner>

    <section class="bg-secondary">
      <div class="container">
        <h2 class="text-center">Detalhes de Exames</h2>
        <div class="row justify-center">
          <div class="col-md-8 q-mb-xl">
            Cras mattins ut posuere dolor neque, et vehicula ipsum blandit vel.
            Cras mattis vestibulum quam mattis euismod. Ut posuere dolor neque.
            Ut posuere dolor neque, et vehicula ipsum blandit vel. Cras mattis
            vestibulum quam mattis euismod. Ut posuere dolor neque. Ut posuere
            dolor neque, et vehicula ipsum blandit vel. Cras mattis vestibulum
            quam mattis euismod. Ut posuere dolor neque.
          </div>
          <CardExames />
        </div>
      </div>
    </section>

    <MedicinaFetal></MedicinaFetal>
    <RecebaConteudo></RecebaConteudo>
  </div>
</template>

<script>
import Banner from "../../components/Sections/Banner.vue";
import CardExames from "../../components/Cards/CardExames.vue";
import MedicinaFetal from "../../components/Sections/MedicinaFetal.vue";
import RecebaConteudo from "../../components/Sections/RecebaConteudo.vue";

export default {
  data() {
    return {};
  },
  components: {
    Banner,
    CardExames,
    MedicinaFetal,
    RecebaConteudo
  }
};
</script>

<style scoped lang="scss">
/* Accent */
</style>
