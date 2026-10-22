<template>
  <section class="nosso-time bg-warning q-pt-xl q-pb-xs">
    <div class="container">
      <div class="row items-center">
        <!-- Texto à esquerda -->
        <div class="col-md-6 col-12">
          <h1 class="text-weight-regular grey-text q-mb-sm">Nosso time faz a diferença</h1>
          <h3 class="grey-text q-mb-md">Compromisso com quem cuida e com quem é cuidado</h3>
          <ul class="grey-text text-body1">
            <li>Valorizar o trabalho e estimular o protagonismo profissional;</li>
            <li>Incentivar a colaboração e o bom relacionamento;</li>
            <li>Promover saúde, segurança e bem-estar no ambiente de trabalho;</li>
            <li>Investir em comunicação clara e objetivos compartilhados;</li>
            <li>Reconhecer e valorizar o desempenho profissional com justiça, transparência&nbsp;e&nbsp;equidade;</li>
            <li>Apoiar o desenvolvimento técnico e comportamental;</li>
            <li>Garantir igualdade de oportunidades, sem distinções;</li>
            <li>Reconhecer resultados por meio de remuneração justa e variável;</li>
            <li>Atuar com ética, respeito à diversidade e dignidade humana.</li>
          </ul>
        </div>

        <!-- Imagem à direita -->
        <div class="col-md-6 col-12 q-mt-md-md">
          <img
            :src="imagemEquipe"
            alt="Equipe Ultrimagem"
            class="img-fluid rounded"
            style="max-width: 100%; height: auto; border-radius: 1px;"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import imagemEquipe from 'src/assets/img/components/banner/interna-quem-somos.svg';

export default {
  name: "NossoTime",
  data() {
    return {
      imagemEquipe
    };
  }
};
</script>

<style scoped>
.nosso-time ul {
  padding-left: 1.2rem;
  list-style-type: disc;
  padding-bottom: 0;
}
</style>
