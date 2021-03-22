<template>
  <section id="oqueosDefine">
    <div class="container">
      <div class="row justify-center">
        <div class="col-md-6">
          <h1 class="text-weight-regular grey-text text-center">
            O que nos define
          </h1>
          <p class="grey-text text-center">
            A missão da Ultrimagem é promover a saúde através de cuidados
            preventivos de alta qualidade. Preocupação e comprometimento,
            priorizando sempre o bem-estar dos pacientes durante cada etapa e
            oferecendo elevado padrão em seus serviços.
          </p>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div
          class="col-md-3 col-sm-6 q-mt-lg  text-center"
          v-for="(item, index) in mission"
          :key="index"
        >
          <img
            alt="Ilustração"
            :src="
              require(`../../assets/img/components/oferecemosHome/${item.img}`)
            "
          />
          <h3 class="grey-text">{{ item.title }}</h3>
          <p class="grey-text q-px-md">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      mission: [
        {
          id: 1,
          img: "item1.svg",
          title: "Humanismo",
          description:
            "Na Ultrimagem você encontra acolhimento. O espaço é organizado pensando no conforto e necessidades dos pacientes."
        },
        {
          id: 2,
          img: "item2.svg",
          title: "Informação",
          description:
            "Canais de comunicação e atendimentos facilitados para você se cuidar de onde estiver."
        },
        {
          id: 3,
          img: "item3.svg",
          title: "Dedicação",
          description:
            "Todos os médicos radiologistas são membros do Colégio Brasileiro de Radiologia e equipe de atendimento constantemente qualificada."
        },
        {
          id: 4,
          img: "item4.svg",
          title: "Imagens de qualidade",
          description:
            "Busca contínua por conhecimento e inovação, através de novos protocolos, exames e investimentos em tecnologia."
        }
      ]
    };
  }
};
</script>
