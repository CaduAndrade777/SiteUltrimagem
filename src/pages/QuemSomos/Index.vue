<template>
  <div>
    <Banner
      title="<span> Ultrimagem Ubá:  </span> pioneirismo, qualidade e&nbsp;acolhimento "
      subtitle=" Pioneira em diagnóstico por imagem na cidade, a Ultrimagem Ubá&nbsp;une&nbsp;tecnologia de ponta, atendimento humanizado e corpo&nbsp;médico&nbsp;especializado para oferecer um serviço de excelência&nbsp;à&nbsp;população&nbsp;da&nbsp;região. "
      page="quem-somos"
    />

    <SectionOqueDefine />
    <NossoTime /> <!-- AQUI ENTRA A NOVA ABA -->
    <EquipeMedica />
    <Unidades />
    <RecebaConteudos />
  </div>
</template>

<script>
import Banner from "../../components/Sections/Banner.vue";
import SectionOqueDefine from "../../components/Sections/OqueNosDefine.vue";
import RecebaConteudos from "../../components/Sections/RecebaConteudo.vue";
import EquipeMedica from "../../components/Sections/EquipeMedica.vue";
import Unidades from "../../components/Sections/Unidades.vue";
import NossoTime from "../../components/Sections/NossoTime.vue"; 

export default {
  components: {
    Banner,
    SectionOqueDefine,
    RecebaConteudos,
    EquipeMedica,
    Unidades,
    NossoTime 
  }
};
</script>
<style scoped lang="scss"></style>
