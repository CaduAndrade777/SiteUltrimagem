<template>
  <section id="mother-and-baby" class="q-py-xl">
    <div class="container">
      <div class="text-center text-secondary">
        <h2 class="text-white">Saúde da mãe e do neném</h2>
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

      <div
        v-for="(fase, index) in fases"
        :key="index"
        class="row justify-center"
      >
        <div
          class="col-md-10 q-py-md"
          :style="index < fases.length - 1 ? 'border-bottom: solid 1px white' : ''"
        >
          <div class="row justify-center">
            <div class="col-md-2">
              <img
                :src="fase.imagem"
                :alt="fase.alt"
                class="mother-and-baby-item-img"
              />
            </div>
            <div class="col-md-4 q-pt-md text-secondary">
              <div class="q-pr-md">
                <h3 v-if="fase.titulo" class="text-white">{{ fase.titulo }}</h3>
                <p v-for="(item, i) in fase.itens" :key="i">{{ item }}</p>
              </div>
            </div>
            <div
              class="col-md-4 q-pt-xl text-secondary"
              style="margin-left: 10px"
            >
              <p class="text-weight-bold">Exames por imagem necessários:</p>
              <p v-for="(exame, i) in fase.exames" :key="'ex-' + i">{{ exame }}</p>
              <q-btn
                color="secondary"
                text-color="primary"
                unelevated
                class="q-mr-md button-secondary q-mb-md"
                @click="open()"
                style="text-transform: initial"
              >
                Agendar
              </q-btn>
              <q-btn
                outline
                color="secondary"
                class="q-mr-md button-secondary q-mb-md"
                @click="clickVita()"
                style="text-transform: initial"
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
      fases: [
        {
          titulo: "1) Entre 0-13 semanas",
          imagem: require("../../assets/img/components/medicinaFetal/ilustra.svg"),
          alt: "Mulher grávida - 0 a 13 semanas",
          itens: [
            "- Você vai perceber o aumento dos seios;",
            "- Com 6 semanas ele é do tamanho de um grão de arroz;",
            "- De 9 a 12 semanas, seu rosto já está quase todo formado;",
            "- Ao final do 3º mês, o coração já pode ser ouvido durante a consulta de pré-natal."
          ],
          exames: [
            "- Ultrassom obstétrico com translucência nucal;",
            "- Ultrassom obstétrico endovaginal;"
          ]
        },
        {
          titulo: "2) Entre 14-27 semanas",
          imagem: require("../../assets/img/components/medicinaFetal/ilustragravida2.png"),
          alt: "Mulher grávida - 14 a 27 semanas",
          itens: [
            "- Você começa a perceber os primeiros movimentos do bebê;",
            "- Iniciam-se os movimentos respiratórios e das mãozinhas;",
            "- O bebê já tem cílios e sobrancelhas;",
            "- Já consegue sugar, engolir e piscar."
          ],
          exames: [
            "- Ultrassom obstétrico morfológico.",
            "- Ultrassom com Doppler obstétrico."
          ]
        },
        {
          titulo: "3) Entre 28-40 semanas",
          imagem: require("../../assets/img/components/medicinaFetal/ilustragravida3.png"),
          alt: "Mulher grávida - 28 a 40 semanas",
          itens: [
            "- Seu corpo está se preparando para o parto e para acolher quem vai chegar;",
            "- Poderá sair de seu peito um líquido amarelado, chamado colostro;",
            "- Seu útero pode ficar durinho por instantes, mas você não sentirá dor;",
            "- Seu bebê já percebe a luz fora do útero, abre e fecha os olhos.",
            "- Escuta e identifica vários sons, como vozes e músicas"
          ],
          exames: ["- Ultrassom com Doppler obstétrico."]
        }
      ]
    };
  },
  methods: {
    open() {
      window.open("https://api.whatsapp.com/send?phone=5532984020650");
    },
    clickVita() {
      window.open("https://pixeon.clickvita.com.br/#/instituicao/ULTRI");
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
