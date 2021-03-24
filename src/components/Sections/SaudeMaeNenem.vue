<template>
  <section id="mother-and-baby">
    <div class="container">
      <div class="text-center text-secondary">
        <h2 class="text-white">
          Saúde da mãe e do neném
        </h2>
        <div class="row justify-center">
          <div class="col-md-6">
            <p>
              Seja bem-vinda, mamãe! Confira informações sobre o desenvolvimento
              do seu bebê e mantenha sempre o calendário de exames atualizado
              para a sua saúde e do seu neném.
            </p>
          </div>
        </div>
      </div>

      <div class="row justify-center">
        <div class="col-md-10 q-py-md" style="border-bottom: solid 1px white">
          <div class="row justify-center">
            <div class="col-md-2">
              <img
                src="../../assets/img/components/medicinaFetal/ilustra.svg"
                alt="Mulher gravida"
                class="mother-and-baby-item-img"
              />
            </div>
            <div class="col-md-4 q-pt-md text-secondary">
              <div class="q-pr-md">
                <h3>1) Entre 0-13 semanas</h3>
                <p>- Você vai perceber o aumento dos seios;</p>
                <p>- Com 6 semanas ele é do tamanho de um grão de arroz;</p>
                <p>
                  - De 9 a 12 semanas, seu rosto já está quase todo formado;
                </p>
                <p>
                  - Ao final do 3º mês, o coração já pode ser ouvido durante a
                  consulta de pré-natal.
                </p>
              </div>
            </div>

            <div
              class="col-md-4 q-pt-xl text-secondary"
              style="margin-left:10px;"
            >
              <p class="text-weight-bold">Exames por imagem necessários:</p>
              <p>- Ultrassom obstétrico com translucência nucal;</p>
              <p>- Ultrassom obstétrico endovaginal;</p>
              <q-btn
                color="secondary"
                text-color="primary"
                unelevated
                class="q-mr-md button-secondary q-mb-md"
                @click="open()"
                style="text-transform:initial"
              >
                Agendar
              </q-btn>
              <q-btn
                outline
                color="secondary"
                class="q-mr-md button-secondary q-mb-md"
                @click="clickVita()"
                style="text-transform:initial"
              >
                Ver resultado
              </q-btn>
            </div>
          </div>
        </div>
      </div>

      <div class="row justify-center">
        <div class="col-md-10 q-py-md" style="border-bottom: solid 1px white">
          <div class="row justify-center">
            <div class="col-md-2">
              <img
                src="../../assets/img/components/medicinaFetal/ilustragravida2.png"
                alt="Mulher gravida"
                class="mother-and-baby-item-img"
              />
            </div>
            <div class="col-md-4 q-pt-md text-secondary">
              <div class="q-pr-md">
                <p class="mother-and-baby-item-title text-white">
                  2) Entre 14-27 semanas
                </p>
                <p class="items">
                  - Você começa a perceber os primeiros movimentos do bebê;
                </p>
                <p class="items">
                  - Iniciam-se os movimentos respiratórios e das mãozinhas;
                </p>
                <p class="items">
                  - O bebê já tem cílios e sobrancelhas;
                </p>
                <p class="items">- Já consegue sugar, engolir e piscar.</p>
              </div>
            </div>

            <div class="col-md-4 q-pt-xl text-secondary">
              <p class="text-weight-bold">Exames por imagem necessários:</p>
              <p>- Ultrassom obstétrico morfológico.</p>
              <p>- Ultrassom com Doppler obstétrico.</p>
              <q-btn
                color="secondary"
                text-color="primary"
                unelevated
                class="q-mr-md button-secondary q-mb-md"
                @click="open()"
                style="text-transform:initial"
              >
                Agendar
              </q-btn>
              <q-btn
                outline
                color="secondary"
                class="q-mr-md button-secondary q-mb-md"
                @click="clickVita()"
                style="text-transform:initial"
              >
                Ver resultado
              </q-btn>
            </div>
          </div>
        </div>
      </div>

      <div class="row justify-center">
        <div class="col-md-10 q-py-md">
          <div class="row justify-center">
            <div class="col-md-2">
              <img
                src="../../assets/img/components/medicinaFetal/ilustragravida3.png"
                alt="Mulher gravida"
                class="mother-and-baby-item-img"
              />
            </div>
            <div class="col-md-4 q-pt-md text-secondary">
              <div class="q-pr-md">
                <p class="mother-and-baby-item-title text-white">
                  3) Entre 28-40 semanas
                </p>
                <p class="items">
                  - Seu corpo está se preparando para o parto e para acolher
                  quem vai chegar;
                </p>
                <p class="items">
                  - Poderá sair de seu peito um líquido amarelado, chamado
                  colostro;
                </p>
                <p class="items">
                  - Seu útero pode ficar durinho por instantes, mas você não
                  sentirá dor;
                </p>
                <p class="items">
                  - Seu bebê já percebe a luz fora do útero, abre e fecha os
                  olhos.
                </p>
                <p class="items">
                  - Escuta e identifica vários sons, como vozes e músicas
                </p>
              </div>
            </div>

            <div class="col-md-4 q-pt-xl text-secondary">
              <p class="text-weight-bold">Exames por imagem necessários:</p>
              <p>- Ultrassom com Doppler obstétrico.</p>
              <q-btn
                color="secondary"
                text-color="primary"
                unelevated
                class="q-mr-md button-secondary"
                @click="open()"
                style="text-transform:initial"
              >
                Agendar
              </q-btn>
              <q-btn
                outline
                color="secondary"
                class="q-mr-md button-secondary "
                @click="clickVita()"
                style="text-transform:initial"
              >
                Ver resultado
              </q-btn>
            </div>
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
      title: "Saúde da Mulher"
    };
  },
  componentes: {},
  methods: {
    open() {
      window.open("https://api.whatsapp.com/send?phone=5532984020650");
    },
    clickVita() {
      window.open("https://www.clickvita.com.br/code/ULTRI");
    }
  }
};
</script>
<style>
#mother-and-baby {
  background: linear-gradient(180deg, #9cc2f5 -13.57%, #8599e2 115.44%);
}

.mother-and-baby-item-title {
  font-size: 1.5em;
  font-family: Poppins, Roboto, sans-serif;
}

.mother-and-baby-item-img {
  max-width: 150px;
}
</style>
