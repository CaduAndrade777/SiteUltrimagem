<template>
  <div class="property-steps">
    <div class="heading-wrapper">
      <div class="heading-container">
        <img class="image-lummi" alt="Image lummi" 
          src="../../assets/img/components/promocional/exames.svg"/>

        <div class="copy-component">
          <div class="heading-text">
            <div class="heading">Exames realizados</div>
          </div>
        </div>
      </div>
    </div>

    <div class="steps-wrapper">
      <div class="how-it-works-grid">
        <div class="step">
          <ul class="step-title">
            <li>Telerradiografia</li>
            <li>Radiografia panorâmica</li>
            <li>Radiografia interproximal</li>
            <li class="last-step-title">Radiografia de ATM</li>
          </ul>
        </div>

        <div class="step">
          <ul class="text-wrapper">
            <li class="first-text-wrapper">Radiografia periapical</li>
            <li>Tomografia Odontológica</li>
            <li>RM da face</li>
            <li>Ultrassom da face</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import imageLummi from "../../assets/img/components/promocional/exames.svg"

export default {
  name: "PropertySteps",
  data() {
    return {
      imageLummi,
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Ubuntu&display=swap");

.property-steps {
  align-items: center;
  background-color: #319ff4;
  display: flex;
  flex-wrap: wrap;
  gap: 0;
  justify-content: center;
  position: relative;
  font-family: 'Ubuntu', sans-serif;
}

.property-steps .heading-wrapper {
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  flex-grow: 1;
  gap: 12px;
  height: 323px;
  justify-content: center;
  min-width: 280px;
  padding: 16px;
  position: relative;
}

.property-steps .heading-container {
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 12px;
  justify-content: center;
  max-width: 480px;
  position: relative;
  width: 100%;
}

.property-steps .image-lummi {
  height: 140px;
  object-fit: cover;
  position: relative;
  width: 140px;
}

.property-steps .copy-component {
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  max-width: 720px;
  min-width: 304px;
  position: relative;
  width: 100%;
}

.property-steps .heading-text {
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  position: relative;
  width: 100%;
}

.property-steps .heading {
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  align-self: stretch;
  color: #ecfdf5;
  display: -webkit-box;
  font-family: 'Ubuntu', sans-serif;
  font-size: 48px;
  font-weight: 400;
  letter-spacing: -0.96px;
  line-height: 62px;
  margin-top: -1px;
  overflow: hidden;
  position: relative;
  text-align: center;
  text-overflow: ellipsis;
}

.property-steps .steps-wrapper {
  align-items: center;
  background-color: #0a32a3;
  display: flex;
  flex: 1;
  flex-grow: 1;
  flex-wrap: wrap;
  gap: 40px 40px;
  height: 640px;
  justify-content: center;
  min-width: 280px;
  padding: 24px;
  position: relative;
}

.property-steps .how-it-works-grid {
  display: flex;
  flex: 1;
  flex-grow: 1;
  flex-wrap: wrap;
  gap: 0 0; /* gap horizontal e vertical zerado para máxima proximidade */
  justify-content: center;
  max-width: 640px;
  position: relative;
}

.property-steps .step {
  align-items: flex-start;
  border-radius: 32px;
  display: flex;
  flex: 1;
  flex-direction: column;
  flex-grow: 1;
  gap: 4px;
  min-width: 264px;
  padding: 16px 24px;
  position: relative;
}

/* Listas com bullets, fonte Ubuntu e cor branca */
.property-steps ul.step-title,
.property-steps ul.text-wrapper {
  list-style-type: disc;
  list-style-position: outside;
  padding-left: 50px; /* padding reduzido para aproximar */
  margin: -10px;
  font-family: 'Ubuntu', sans-serif;
  font-size: 25px;
  font-weight: 400;
  line-height: 36.4px;
  color: #ecfdf5;
}

.property-steps ul.step-title li,
.property-steps ul.text-wrapper li {
  margin-bottom: 8px;
  white-space: normal;
  overflow-wrap: break-word;
  font-family: 'Ubuntu', sans-serif;
  color: #ecfdf5;
}

/* Remover margens dos itens críticos para reduzir espaço entre listas */
.property-steps ul.step-title li.last-step-title {
  margin-bottom: 0 !important;
}

.property-steps ul.text-wrapper li.first-text-wrapper {
  margin-top: 0 !important;
}

/* Ajustes para telas menores */
@media (max-width: 768px) {
  .property-steps .how-it-works-grid {
    gap: 0 0;
  }
  .property-steps ul.step-title li.last-step-title {
    margin-bottom: 0 !important;
  }
  .property-steps ul.text-wrapper li.first-text-wrapper {
    margin-top: 0 !important;
  }
}

@media (max-width: 425px) {
  .property-steps .how-it-works-grid {
    gap: 0 0;
    flex-direction: column; /* empilha as listas no mobile */
  }
  .property-steps ul.step-title li.last-step-title {
    margin-bottom: 0 !important;
  }
  .property-steps ul.text-wrapper li.first-text-wrapper {
    margin-top: 0 !important;
  }
}


</style>
