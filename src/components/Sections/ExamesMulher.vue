<template>
  <section class="bg-secondary">
    <div class="container">
      <!-- <h2 class="text-center grey-text">Detalhes de Exames</h2> -->
      <div class="row justify-center">
        <div class="col-12 text-center">
          <h1 class="text-weight-regular">
            <span class="text-weight-regular grey-text">
              Detalhes de exames
            </span>
          </h1>
        </div>

        <div class="col-md-8 q-mb-xl">
          <p class="grey-text">
            Essa é uma área dedicada à mulher, que já sabe que os cuidados
            preventivos são as melhores formas de se cuidar. E para diversas
            fases da vida, a Ultrimagem – Ubá oferece apoio, acolhimento e uma
            equipe pronta para lhe auxiliar em todos os seus momentos. E
            dedicada a fase de gestação, convidamos as futuras mamães a
            conhecerem nossa área de
            <a
              class="grey-text"
              style="text-decoration:underline"
              href="#/medicina-fetal"
              >Medicina Fetal.
            </a>
          </p>
        </div>

        <div class="container">
          <div class="row">
            <div class="col-12">
              <CardExames :exames="exames" :woman="true" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CardExames from "../../components/Cards/CardExames.vue";
import examMulher from "../../util/examSaudeMulher.js";

export default {
  components: {
    CardExames
  },

  data() {
    return {
      exames: {}
    };
  },

  created() {
    this.exames = examMulher;
  }
};
</script>
