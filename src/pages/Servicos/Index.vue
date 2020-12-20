<template>
  <div>
    <Banner
      title="<strong>Exames</strong> para você <strong>cuidar</strong> de sua saúde "
      subtitle="Prevenção e cuidado através de exames por imagem de alta qualidade. "
    >
    </Banner>

    <div class="container">
      <section>
        <div class="row">
          <div class="col-md-6">
            <h2>Tipos de exames oferecidos</h2>
            <p>
              Importância da ressonância mágnetíca. Ut posuere dolor neque, et
              vehicula ipsum blandit vel. Cras mattis vestibulum quam mattis
              euismod. Ut posuere dolor neque.
            </p>
          </div>
        </div>

        <div class="row">
          <div class="col-md-4">
            <q-card class="my-card" flat>
              <q-btn
                color="teal"
                round
                class="q-pa-md full-width"
                style="max-width:200px"
              >
                <q-avatar size="100">
                  <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
                </q-avatar>
              </q-btn>

              <q-card-section>
                <div class="text-h6">Biópsia</div>
                <div class="text-subtitle2">
                  Uma biópsia guiada por imagem tem como objetivo fornecer
                  informações de diagnóstico através da obtenção de uma amostra
                  de tecido usando imagens para navegar até o local de
                  interesse.
                </div>
              </q-card-section>

              <q-card-section class="q-pt-none">
                <q-btn color="primary" label="Ver exames" />
              </q-card-section>
            </q-card>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Banner from "../../components/Sections/Banner.vue";
export default {
  data() {
    return {};
  },
  components: { Banner }
};
</script>
<style scoped></style>
