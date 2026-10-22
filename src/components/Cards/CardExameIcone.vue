<template>
  <q-card
    flat
    class="exam-icon-card cursor-pointer"
    tabindex="0"
    role="link"
    :aria-label="`Conhecer exame: ${item.name}`"
    @click="openExam"
    @keyup.enter="openExam"
    @keyup.space.prevent="openExam"
  >
    <div class="exam-icon-card-image">
      <span class="exam-icon-circle" aria-hidden="true"></span>

      <img
        v-if="iconSrc"
        :src="iconSrc"
        :alt="`Ícone de ${item.name}`"
        loading="lazy"
      />

      <q-icon
        v-else
        name="medical_services"
        class="exam-icon-fallback"
      />
    </div>

    <h3 class="exam-icon-card-title">
      {{ item.name }}
    </h3>
  </q-card>
</template>

<script>
import biopsiaIcon from "../../assets/img/components/cards/cardExame/biopsia.svg";
import densitometriaIcon from "../../assets/img/components/cards/cardExame/densitometria.svg";
import ecocardiografiaIcon from "../../assets/img/components/cards/cardExame/ecocardiografia.svg";
import elastografiaIcon from "../../assets/img/components/cards/cardExame/elastografia_svg.svg";
import eletrocardiogramaIcon from "../../assets/img/components/cards/cardExame/eletrocardiograma.svg";
import mamografiaIcon from "../../assets/img/components/cards/cardExame/mamografia.svg";
import raioxIcon from "../../assets/img/components/cards/cardExame/raiox.svg";
import ressonanciaIcon from "../../assets/img/components/cards/cardExame/ressonancia.svg";
import tomografiaIcon from "../../assets/img/components/cards/cardExame/tomografia.svg";
import ultrassonografiaIcon from "../../assets/img/components/cards/cardExame/ultrassonografia.svg";

const icons = {
  "biopsia.svg": biopsiaIcon,
  "densitometria.svg": densitometriaIcon,
  "ecocardiografia.svg": ecocardiografiaIcon,
  "elastografia_svg.svg": elastografiaIcon,
  "eletrocardiograma.svg": eletrocardiogramaIcon,
  "mamografia.svg": mamografiaIcon,
  "raiox.svg": raioxIcon,
  "ressonancia.svg": ressonanciaIcon,
  "tomografia.svg": tomografiaIcon,
  "ultrassonografia.svg": ultrassonografiaIcon
};

export default {
  name: "CardExameIcone",

  props: {
    item: {
      type: Object,
      required: true
    }
  },

  computed: {
    iconSrc() {
      return icons[this.item.icon] || null;
    }
  },

  methods: {
    openExam() {
      this.$emit("select", this.item);
    }
  }
};
</script>

<style scoped>
/* Card externo: imóvel, transparente e sem sombra */
.exam-icon-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  min-height: 230px;
  padding: 12px 8px 20px;

  background: transparent !important;
  border: none;
  border-radius: 0;
  box-shadow: none !important;

  text-align: center;
  cursor: pointer;
  transform: none !important;
}

.exam-icon-card:hover {
  background: transparent !important;
  box-shadow: none !important;
  transform: none !important;
}

.exam-icon-card:focus-visible {
  outline: 2px solid #6dccec;
  outline-offset: 3px;
}

/* Área circular */
.exam-icon-card-image {
  position: relative;
  isolation: isolate;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 160px;
  height: 160px;
  min-width: 160px;
  min-height: 160px;
  flex: 0 0 160px;

  box-sizing: border-box;
  margin: 0 auto 18px;
}

/* Contorno independente: espessura uniforme em toda a circunferência */
.exam-icon-circle {
  position: absolute;
  z-index: 0;
  inset: 0;

  display: block;
  box-sizing: border-box;

  width: 100%;
  height: 100%;
  border: 9px solid #8dd1e8;
  border-radius: 50%;

  background: #f1f9fd;
  pointer-events: none;

  transition: border-color 0.4s ease;
}

/* Hover altera somente a cor do contorno */
.exam-icon-card:hover .exam-icon-circle {
  border-color: #168fc0;
}

/* SVG centralizado, maior e acima do fundo circular */
.exam-icon-card-image img {
  position: relative;
  z-index: 1;

  display: block;
  width: 112px;
  height: 112px;
  max-width: none;
  max-height: none;

  object-fit: contain;
}

/* Ícone alternativo */
.exam-icon-fallback {
  position: relative;
  z-index: 1;

  font-size: 62px;
  color: #6a9bb8;
}

/* Nome do exame */
.exam-icon-card-title {
  display: block;
  width: 100%;
  max-width: 210px;
  min-height: 44px;

  margin: 0;
  padding: 0;

  color: #48566a;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.45;
  text-align: center;
}

/* Celulares */
@media (max-width: 599px) {
  .exam-icon-card {
    min-height: 175px;
    padding: 8px 4px 14px;
  }

  .exam-icon-card-image {
    width: 116px;
    height: 116px;
    min-width: 116px;
    min-height: 116px;
    flex: 0 0 116px;

    margin-bottom: 12px;
  }

  .exam-icon-circle {
    border-width: 7px;
  }

  .exam-icon-card-image img {
    width: 82px;
    height: 82px;
  }

  .exam-icon-fallback {
    font-size: 46px;
  }

  .exam-icon-card-title {
    max-width: 155px;
    min-height: 38px;
    font-size: 0.9rem;
  }
}

/* Acessibilidade */
@media (prefers-reduced-motion: reduce) {
  .exam-icon-circle {
    transition: none;
  }
}
</style>
