<template>
  <div class="row">
    <div
      class="col-md-4 col-lg-4 col-sm-6 col-xs-12"
      v-for="(item, index) in exames"
      :key="item.id"
    >
      <q-card class="my-card q-my-md text-center bg-warning" flat>
        <q-btn
          round
          flat
          class="q-pa-md full-width card-exames-img-bd"
          :class="item.class"
        >
          <q-avatar size="120px">
            <img
              class="q-mr-sm"
              :src="
                require(`../../assets/img/components/cards/cardExame/${item.icon}`)
              "
            />
          </q-avatar>
        </q-btn>

        <q-card-section>
          <div class="text-h6">
            <h3>{{ item.name }}</h3>
          </div>
          <div>
            <p>{{ item.description }}</p>
          </div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-btn
            color="primary"
            label="Ver exames"
            class="button-secondary-blue"
            unelevated
          />
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      exames: [
        {
          name: "Biópsia",
          description:
            "Uma biópsia guiada por imagem tem como objetivo fornecer informações de diagnóstico através da obtenção de uma amostra de tecido usando imagens para navegar até o local de interesse.",
          icon: "biopsia.svg",
          link: "",
          class: "bg-green-1"
        },
        {
          name: "Densitometria óssea",
          description:
            "Uma biópsia guiada por imagem tem como objetivo fornecer informações de diagnóstico através da obtenção de uma amostra de tecido usando imagens para navegar até o local de interesse.",
          icon: "densitometria.svg",
          link: "",
          class: "bg-green-2"
        },
        {
          name: "Ecocardiografia",
          description:
            "Uma biópsia guiada por imagem tem como objetivo fornecer informações de diagnóstico através da obtenção de uma amostra de tecido usando imagens para navegar até o local de interesse.",
          icon: "ecocardiografia.svg",
          link: "",
          class: "bg-green-3"
        },
        {
          name: "Eletrocardiograma",
          description:
            "Uma biópsia guiada por imagem tem como objetivo fornecer informações de diagnóstico através da obtenção de uma amostra de tecido usando imagens para navegar até o local de interesse.",
          icon: "eletrocardiograma.svg",
          link: "",
          class: "bg-blue-1"
        },
        {
          name: "Mamografia",
          description:
            "Uma biópsia guiada por imagem tem como objetivo fornecer informações de diagnóstico através da obtenção de uma amostra de tecido usando imagens para navegar até o local de interesse.",
          icon: "mamografia.svg",
          link: "",
          class: "bg-blue-2"
        },
        {
          name: "Raio x",
          description:
            "Uma biópsia guiada por imagem tem como objetivo fornecer informações de diagnóstico através da obtenção de uma amostra de tecido usando imagens para navegar até o local de interesse.",
          icon: "raiox.svg",
          link: "",
          class: "bg-blue-3"
        },
        {
          name: "Ressonância",
          description:
            "Uma biópsia guiada por imagem tem como objetivo fornecer informações de diagnóstico através da obtenção de uma amostra de tecido usando imagens para navegar até o local de interesse.",
          icon: "ressonancia.svg",
          link: "",
          class: "bg-green-1"
        },
        {
          name: "Tomografia",
          description:
            "Uma biópsia guiada por imagem tem como objetivo fornecer informações de diagnóstico através da obtenção de uma amostra de tecido usando imagens para navegar até o local de interesse.",
          icon: "tomografia.svg",
          link: "",
          class: "bg-green-2"
        },
        {
          name: "Ultrassonografia",
          description:
            "Uma biópsia guiada por imagem tem como objetivo fornecer informações de diagnóstico através da obtenção de uma amostra de tecido usando imagens para navegar até o local de interesse.",
          icon: "ultrassonografia.svg",
          link: "",
          class: "bg-green-3"
        }
      ]
    };
  },
  componentes: {}
};
</script>
<style scoped lang="scss">
$green-1: #81dcdb !important;
$green-2: #a2e6e5 !important;
$green-3: #bcebeb !important;

$blue-1: #6dccec !important;
$blue-2: #8dd1e8 !important;
$blue-ul-3: #91d9f1 !important;

.card-exames-img-bd {
  max-width: 200px;
  height: 200px;
}

.bg-green-1 {
  background-color: $green-1;
}
.bg-green-2 {
  background-color: $green-2;
}
.bg-green-3 {
  background-color: $green-3;
}
.bg-blue-1 {
  background-color: $blue-1;
}
.bg-blue-2 {
  background-color: $blue-2;
}
.bg-blue-3 {
  background-color: $blue-3;
}
</style>
