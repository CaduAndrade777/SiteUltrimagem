<template>
  <div>
    <Banner
      title="<span> Somos  </span> a Ultrimagem <span>Ubá</span>"
      subtitle="Pioneira na cidade, a Ultrimagem - Ubá oferece exames por imagem de alta qualidade,
      atendimento humanizado e corpo médico especializado, proporcionando um serviço
      de excelência na região."
    >
    </Banner>
    <SectionOqueDefine></SectionOqueDefine>
    <!-- <RecebaConteudos></RecebaConteudos> -->
    <EquipeMedica></EquipeMedica>
    <Unidades></Unidades>
    <RecebaConteudos></RecebaConteudos>
  </div>
</template>

<script>
import Banner from "../../components/Sections/Banner.vue";
import SectionOqueDefine from "../../components/Sections/OqueNosDefine.vue";
import RecebaConteudos from "../../components/Sections/RecebaConteudo.vue";
import EquipeMedica from "../../components/Sections/EquipeMedica.vue";
import Unidades from "../../components/Sections/Unidades.vue";

export default {
  data() {
    return {};
  },
  components: {
    Banner,
    SectionOqueDefine,
    RecebaConteudos,
    EquipeMedica,
    Unidades
  },

  mounted() {}
};
</script>

<style scoped lang="scss"></style>
