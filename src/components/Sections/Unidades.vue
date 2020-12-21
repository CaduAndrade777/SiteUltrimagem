<template>
  <section id="oferecemos">
    <div class="container">
      <div class="row">
        <div class="col-md-6 esquerdo">
          <img
            class="q-mr-sm"
            src="../../assets/img/components/oquesomos/imageSomos.svg"
          />
        </div>
        <div class="col-md-6 direito">
          <h2>{{ title }}</h2>
          <div class="q-px-lg q-pb-md">
            <q-timeline color="secondary">
              <q-timeline-entry title="" class="box" subtitle="Ubá">
                <div class="box-entry">
                  <i class="mdi mdi-map-marker-outline" aria-hidden="true"></i>
                  <p>Praça Mercês, 88 - Centro, Ubá - MG</p>
                  <i class="mdi mdi-phone" aria-hidden="true"></i>
                  <p>(32 3532-5783)</p>
                </div>
              </q-timeline-entry>

              <q-timeline-entry title="" subtitle="Castelinho">
                <div>
                  <i class="mdi mdi-map-marker-outline" aria-hidden="true"></i>
                  <p>
                    Avenida Barão do Rio Branco, 3029, Centro - Juiz de Fora
                    (MG)
                  </p>
                  <i class="mdi mdi-phone" aria-hidden="true"></i>
                  <p>(32) 3351-2031</p>
                </div>
              </q-timeline-entry>
            </q-timeline>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: "Nossas Unidades",
      subtitle:
        "Acolhimento através de um atendimento especializado e alta qualidade nos exames para proporcionar cuidado, bem-estar e qualidade de vida. Saiba mais."
    };
  },
  componentes: {}
};
</script>
<style scoped lang="scss">
.box {
  widows: 694px;
  height: 153px;
  background: $primary;
  color: #fff;
  font-family: Poppins, Roboto, sans-serif;
  border-radius: 10px;
}
.box-entry {
  font-family: Poppins, Roboto, sans-serif;
  font-size: 1.5em !important;
  color: #fff;
}
</style>
