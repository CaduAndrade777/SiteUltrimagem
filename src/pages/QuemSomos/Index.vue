<template>
  <div>
    <Banner
      title="<strong> Somos  </strong> a Ultrimagem <strong>Ubá</strong>"
      subtitle="Cras mattis vestibulum quam mattis euismod. Ut posuere dolor neque, et vehicula ipsum blandit vel. Integer sed posuere lorem. Sed viverra, felis nec."
    >
    </Banner>
    <SectionOqueDefine></SectionOqueDefine>
    <RecebaConteudos></RecebaConteudos>
    <EquipeMedica></EquipeMedica>
  </div>
  
</template>

<script>
import Banner from "../../components/Sections/Banner.vue";
import SectionOqueDefine from "../../components/Sections/OqueNosDefine.vue";
import RecebaConteudos from "../../components/Sections/RecebaConteudo.vue";
import EquipeMedica from "../../components/Sections/EquipeMedica.vue"

export default {
  data() {
    return {
    };
  },
  components: {
    Banner,
    SectionOqueDefine,
    RecebaConteudos,
    EquipeMedica
  },

  mounted() {
    
  }
};
</script>

<style scoped lang="scss">
</style>