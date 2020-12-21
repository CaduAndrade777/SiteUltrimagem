<template>
  <div class="row">
    <div
      class="col-md-4 col-lg-4 col-sm-6 col-xs-12"
      v-for="(item, index) in exames"
      :key="item.id"
    >
      <q-card class="my-card q-py-xl text-center bg-warning" flat>
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
            :to="`/o-que-oferecemos/${item.slug}`"
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
          slug: "biopsia",
          class: "bg-green-1"
        },
        {
          name: "Densitometria óssea",
          description:
            "Uma biópsia guiada por imagem tem como objetivo fornecer informações de diagnóstico através da obtenção de uma amostra de tecido usando imagens para navegar até o local de interesse.",
          icon: "densitometria.svg",
          slug: "densitometria-ossea",
          class: "bg-green-2"
        },
        {
          name: "Ecocardiografia",
          description:
            "Uma biópsia guiada por imagem tem como objetivo fornecer informações de diagnóstico através da obtenção de uma amostra de tecido usando imagens para navegar até o local de interesse.",
          icon: "ecocardiografia.svg",
          slug: "ecocardiografia",
          class: "bg-green-3"
        },
        {
          name: "Eletrocardiograma",
          description:
            "Uma biópsia guiada por imagem tem como objetivo fornecer informações de diagnóstico através da obtenção de uma amostra de tecido usando imagens para navegar até o local de interesse.",
          icon: "eletrocardiograma.svg",
          slug: "eletrocardiografia",
          class: "bg-blue-1"
        },
        {
          name: "Mamografia",
          description:
            "Uma biópsia guiada por imagem tem como objetivo fornecer informações de diagnóstico através da obtenção de uma amostra de tecido usando imagens para navegar até o local de interesse.",
          icon: "mamografia.svg",
          slug: "mamografia",
          class: "bg-blue-2"
        },
        {
          name: "Raio x",
          description:
            "Uma biópsia guiada por imagem tem como objetivo fornecer informações de diagnóstico através da obtenção de uma amostra de tecido usando imagens para navegar até o local de interesse.",
          icon: "raiox.svg",
          slug: "raio-x",
          class: "bg-blue-3"
        },
        {
          name: "Ressonância",
          description:
            "Uma biópsia guiada por imagem tem como objetivo fornecer informações de diagnóstico através da obtenção de uma amostra de tecido usando imagens para navegar até o local de interesse.",
          icon: "ressonancia.svg",
          slug: "ressonancia",
          class: "bg-green-1"
        },
        {
          name: "Tomografia",
          description:
            "Uma biópsia guiada por imagem tem como objetivo fornecer informações de diagnóstico através da obtenção de uma amostra de tecido usando imagens para navegar até o local de interesse.",
          icon: "tomografia.svg",
          slug: "tomografia",
          class: "bg-green-2"
        },
        {
          name: "Ultrassonografia",
          description:
            "Uma biópsia guiada por imagem tem como objetivo fornecer informações de diagnóstico através da obtenção de uma amostra de tecido usando imagens para navegar até o local de interesse.",
          icon: "ultrassonografia.svg",
          slug: "ultrassonografia",
          class: "bg-green-3"
        }
      ]
    };
  },
  componentes: {}
};
</script>
<style scoped lang="scss"></style>
