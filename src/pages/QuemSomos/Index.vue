<template>
  <div>
    <Banner
      title="<span> Somos  </span> a Ultrimagem <span>Ubá</span>"
      subtitle="Cras mattis vestibulum quam mattis euismod. Ut posuere dolor neque, et vehicula ipsum blandit vel. Integer sed posuere lorem. Sed viverra, felis nec."
    >
    </Banner>
    <SectionOqueDefine></SectionOqueDefine>
    <RecebaConteudos></RecebaConteudos>
    <EquipeMedica></EquipeMedica>
    <Unidades></Unidades>
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
