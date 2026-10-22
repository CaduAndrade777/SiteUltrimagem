<template>
  <section id="units" class="q-my-xl">
    <div class="container">
      <div class="row q-col-gutter-xl items-center">
        <!-- Imagem da recepção -->
        <div class="col-md-6 col-xs-12">
          <div class="units-image-wrapper">
            <q-img
              src="../../assets/img/components/oquesomos/recepcao.png"
              alt="Recepção da unidade de Ubá"
              class="units-image"
              loading="lazy"
            />
          </div>
        </div>

        <!-- Informações das unidades -->
        <div class="col-md-6 col-xs-12">
          <div class="units-content">
            <h1 class="text-h5 text-weight-bold text-primary q-mb-lg">
              Nossas Unidades
            </h1>

            <!-- Unidade de Ubá -->
            <div class="units-main-card bg-primary text-white q-pa-lg q-mb-lg">
              <h2 class="text-h6 text-weight-bold q-mb-md">
                Ubá
              </h2>

              <p class="unit-detail">
                <i
                  class="mdi mdi-map-marker-outline"
                  aria-hidden="true"
                ></i>
                <span>Praça Mercês, 88 - Centro, Ubá - MG</span>
              </p>

              <p class="unit-detail q-mb-none">
                <i
                  class="mdi mdi-phone-outline"
                  aria-hidden="true"
                ></i>
                <span>(32) 3531-5783</span>
              </p>
            </div>

            <!-- Unidades de Juiz de Fora -->
            <div class="units-timeline">
              <q-timeline color="info">
                <!-- NOVO: prop icon para colocar um ícone dentro da bolinha -->
                <q-timeline-entry
                  v-for="(item, index) in units"
                  :key="index"
                  :title="item.name"
                  icon="mdi-hospital-building"
                  class="unit-timeline-entry"
                >
                  <p class="unit-detail">
                    <i
                      class="mdi mdi-map-marker-outline"
                      aria-hidden="true"
                    ></i>
                    <span>{{ item.address }}</span>
                  </p>

                  <p class="unit-detail q-mb-none">
                    <i
                      class="mdi mdi-phone-outline"
                      aria-hidden="true"
                    ></i>
                    <span>{{ item.phone }}</span>
                  </p>
                </q-timeline-entry>
              </q-timeline>
            </div>

            <!-- Link para mais informações -->
            <p class="units-footer q-mt-lg q-mb-none">
              Acesse
              <a
                href="https://juizdefora.ultrimagem.com.br/"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.juizdefora.ultrimagem.com.br/
              </a>
              para mais informações sobre as unidades em Juiz de Fora.
            </p>
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
      units: [
        {
          name: "Castelinho",
          address:
            "Av. Barão do Rio Branco, 3029, Centro - Juiz de Fora (MG)",
          phone: "(32) 3257-4000"
        },
        {
          name: "Centro Médico Rio Branco",
          address:
            "Av. Barão do Rio Branco, 1034, Centro - Juiz de Fora (MG)",
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
          address:
            "Av. Barão do Rio Branco, 3353, Centro - Juiz de Fora (MG)",
          phone: "(32) 3212-9404 | (32) 3218-6670"
        }
      ]
    };
  }
};
</script>


<style lang="scss">
#units {
  width: 100%;
  padding: 16px 0;

  .container {
    width: 100%;
    margin-right: auto;
    margin-left: auto;
  }

  /* Alinhamento das duas colunas */
  .row {
    align-items: center;
  }

  .row > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 0;
  }

  /* Imagem da recepção */
  .units-image-wrapper {
    width: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
    border-radius: 18px;
    line-height: 0;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.10);
  }

  .units-image {
    display: block;
    width: 100%;
    overflow: hidden;
    border-radius: 18px;
  }

  .units-image,
  .units-image .q-img__container,
  .units-image .q-img__image,
  .units-image .q-img__content {
    border-radius: 18px;
  }

  /* Conteúdo da coluna direita */
  .units-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    max-width: 620px;
    margin: 0 auto;
    padding: 0;
    box-sizing: border-box;
  }

  .units-content h1 {
    margin-top: 0;
    margin-bottom: 24px;
    line-height: 1.3;
  }

  /* Cartão da unidade de Ubá */
  .units-main-card {
    width: 100%;
    margin-bottom: 24px;
    padding: 24px;
    border-radius: 14px;
    box-sizing: border-box;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.10);
  }

  .units-main-card h2 {
    margin-top: 0;
    line-height: 1.3;
  }

  /* Endereços e telefones */
  .unit-detail {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    margin-bottom: 12px;
    line-height: 1.6;
    overflow-wrap: anywhere;
  }

  .unit-detail i {
    display: inline-flex;
    flex: 0 0 20px;
    align-items: center;
    justify-content: center;
    width: 20px;
    margin-top: 3px;
    font-size: 18px;
    line-height: 1.3;
  }

  .unit-detail span {
    flex: 1;
    min-width: 0;
  }

  /* Timeline das unidades */
  .units-timeline {
    width: 100%;
    min-width: 0;
  }

  .units-timeline .q-timeline {
    padding: 0;
  }

  .units-timeline .q-timeline__entry {
    min-width: 0;
  }

  .units-timeline .q-timeline__title {
    margin-top: 0;
    margin-bottom: 8px;
    font-size: 1.05rem;
    font-weight: 700;
    line-height: 1.4;
  }

  .unit-timeline-entry {
    margin-bottom: 12px;
  }

  /* NOVO: card claro em volta do conteúdo de cada unidade */
  .units-timeline .q-timeline__content {
    padding: 16px 20px;
    background: #f5f8fb;
    border: 1px solid rgba(0, 0, 0, 0.08);
    border-radius: 14px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    transition: box-shadow 0.2s ease, transform 0.2s ease;

   
  }

  /* O último telefone do card não precisa de margem extra */
  .units-timeline .q-timeline__content .unit-detail:last-child {
    margin-bottom: 0;
  }

  /*
   * CORREÇÃO: a barra vertical da timeline é o ::after do .q-timeline__dot.
   * O Quasar a remove na última entrada (content: none); aqui ela é
   * restaurada, e o padding-bottom garante altura para a barra aparecer.
   */
  .units-timeline .q-timeline__entry:last-child {
    padding-bottom: 24px;
  }

  .units-timeline .q-timeline__entry:last-child .q-timeline__dot:after {
    content: "" !important;
    display: block !important;
  }

  /* Link informativo */
  .units-footer {
    margin-top: 20px;
    line-height: 1.7;
  }

  .units-footer a {
    color: $primary;
    font-weight: 600;
    text-decoration: underline;
    text-underline-offset: 3px;
    overflow-wrap: anywhere;

  }
}

/* Tablets e telas menores */
@media (max-width: 1023px) {
  #units {
    .units-content {
      max-width: 100%;
    }

    .units-main-card {
      padding: 20px;
    }
  }
}

/* Celulares */
@media (max-width: 599px) {
  #units {
    padding: 0;

    /* Oculta completamente a coluna da imagem */
    .row > div:first-child {
      display: none !important;
    }

    /* Faz o conteúdo ocupar toda a largura disponível */
    .row > div:last-child {
      display: block;
      width: 100%;
    }

    .units-content {
      width: 100%;
      max-width: 100%;
      margin: 0;
      padding: 0;
    }

    .units-content h1 {
      margin-top: 0;
      margin-bottom: 20px;
    }

    .units-main-card {
      width: 100%;
      margin-bottom: 24px;
      padding: 20px;
    }

    /* NOVO: card um pouco mais compacto no celular */
    .units-timeline .q-timeline__content {
      padding: 14px 16px;
    }

    .units-footer {
      font-size: 0.95rem;
    }
  }
}
</style>