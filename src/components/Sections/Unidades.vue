<template>
  <section id="units" class="q-my-xl">
    <div class="container">
      <div class="row q-col-gutter-xl items-start">
        <div class="col-md-6 col-xs-12">
          <q-img
            src="../../assets/img/components/oquesomos/recepcao.jpeg"
            alt="Recepção da unidade de Ubá"
            class="q-mb-md"
            loading="lazy"
          />
        </div>

        <div class="col-md-6 col-xs-12">
          <h1 class="text-h5 text-weight-bold q-mb-md text-primary">
            Nossas Unidades
          </h1>

          <div
            class="bg-primary text-white q-pa-md rounded-borders q-mb-lg"
            style="max-width: 100%;"
          >
            <h2 class="text-h6 q-mb-sm">Ubá</h2>
            <p class="q-mb-xs">
              <i class="mdi mdi-map-marker-outline" aria-hidden="true"></i>
              Praça Mercês, 88 - Centro, Ubá - MG
            </p>
            <p class="q-mb-none">
              <i class="mdi mdi-phone-outline" aria-hidden="true"></i>
              (32) 3531-5783
            </p>
          </div>

          <q-timeline color="info">
            <q-timeline-entry
              v-for="(item, index) in units"
              :key="index"
              :title="item.name"
              class="q-mb-md"
            >
              <p class="q-mb-xs">
                <i class="mdi mdi-map-marker-outline" aria-hidden="true"></i>
                {{ item.address }}
              </p>
              <p class="q-mb-none">
                <i class="mdi mdi-phone-outline" aria-hidden="true"></i>
                {{ item.phone }}
              </p>
            </q-timeline-entry>
          </q-timeline>

          <p class="q-mt-md">
            Acesse
            <a
              href="https://www.ultrimagemjf.com.br"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.ultrimagemjf.com.br
            </a>
            para mais informações sobre as unidades em Juiz de Fora.
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
      units: [
        {
          name: "Castelinho",
          address: "Av. Barão do Rio Branco, 3029, Centro - Juiz de Fora (MG)",
          phone: "(32) 3257-4000"
        },
        {
          name: "Centro Médico Rio Branco",
          address: "Av. Barão do Rio Branco, 1034, Centro - Juiz de Fora (MG)",
          phone: "(32) 3213-2349"
        },
        {
          name: "Sabin",
          address:
            "Rua Doutor Edgard Carlos Pereira, 600, Santa Teresa - Juiz de Fora (MG)",
          phone: "(32) 3218-3418 | (32) 3211-3979"
        },
        {
          name: "Santa Casa",
          address: "Av. Barão do Rio Branco, 3353, Centro - Juiz de Fora (MG)",
          phone: "(32) 3212-9404 | (32) 3218-6670"
        }
      ]
    };
  }
};
</script>

<style>
#units .q-timeline__title {
  margin-bottom: 8px;
}

@media (max-width: 768px) {
  #units .q-img {
    margin-bottom: 20px;
  }
}
</style>
