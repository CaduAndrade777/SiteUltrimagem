<template>
    <div id="radiologia-odontologica">
      <Banner
        title="<strong> Veja além do sorriso!  </strong>"
        subtitle="Alta tecnologia em Radiologia Odontológica, agora na Ultrimagem. Conheça os exames oferecidos."
        page="radiologia-odontologica"
      />
  
      <RadiologiaOdontologica />
  
      <div class="row">
        <div class="col-12">
          <ExamesOdontologia />
        </div>
      </div>
  
      <SectionRecebaConteudo />
    </div>
  </template>
  
  <script>
  import Banner from "../../components/Sections/Banner";
  import RadiologiaOdontologica from "../../components/Sections/Odontologia";
  import ExamesOdontologia from "../../components/Sections/ExamesOdontologia";
  import SectionRecebaConteudo from "../../components/Sections/RecebaConteudo.vue";
  
  export default {
    components: {
      Banner,
      RadiologiaOdontologica,
      ExamesOdontologia,
      //SaudeMaeNenem,
      SectionRecebaConteudo
    },
    data() {
      return {};
    }
  };
  </script>
  