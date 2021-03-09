<template>
  <div>
    <Banner
      title="<strong> Saúde da mulher   </strong>"
      subtitle="Encontre abaixo soluções em exames por imagem para o autocuidado e prevenção da saúde da mulher. Conheça mais sobre suas necessidades e previna-se com a qualidade que você merece."
      page="saude-da-mulher"
    />

    <ExamesMulher />
    <RecebaConteudo />
  </div>
</template>

<script>
import Banner from "../../components/Sections/Banner.vue";
import ExamesMulher from "../../components/Sections/ExamesMulher.vue";
import RecebaConteudo from "../../components/Sections/RecebaConteudo.vue";

export default {
  components: {
    Banner,
    ExamesMulher,
    RecebaConteudo
  },
  data() {
    return {};
  }
};
</script>
