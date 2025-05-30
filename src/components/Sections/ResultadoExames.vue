<template>
  <section id="results">
    <div class="container">
      <div class="row items-center" style="align-items: stretch;">
        <div class="col-md-6 col-sm-9 col-xs-7 text-white" id="results-text">
          <h2 class="title-tight">
            <span class="font-hp-bold">Acesse </span>
            <span class="font-hp-regular">seus</span>
            <span class="font-hp-regular break-mobile"> resultados online</span>
          </h2>

          <p class="font-roboto-regular">
            Uma forma rápida e segura para você checar seus exames de onde estiver
          </p>

          <q-btn
            class="q-mt-sm q-mb-md button-primary btn-resultados text-primary"
            href="https://pixeon.clickvita.com.br/#/instituicao/ULTRIMAGEMUBA"
            target="_blank"
          >
            <span class="font-hp-bold">Clique aqui</span>
          </q-btn>
        </div>

        <div class="col-md-5 col-sm-3 col-xs-5 text-center" id="results-image-container">
          <img
            alt="Resultado Exame"
            src="../../assets/img/components/ResultadoExame/BannerResultados.png"
            id="results-image"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ResultsSection"
}
</script>

<style scoped>
#results {
  background-color: #2262c6;
  padding: 0 !important;
  margin: 0 !important;
  overflow: visible;
}

.container,
.row {
  margin-top: 0 !important;
  margin-bottom: 0 !important;
  height: auto !important;
  position: relative;
}

#results-text {
  padding-top: 20px;
  padding-left: 100px;
  margin-top: -40px;
}

.title-tight {
  margin-bottom: 0.5rem !important;
  padding: 0 !important;
  line-height: 1.1 !important;
}

.title-tight span {
  display: inline;
  margin: 0;
  padding: 0;
  font-size: 29.4px;
}

p.font-roboto-regular {
  margin-top: -10px !important;
  margin-bottom: 0.5rem !important;
  font-size: 19.4px;
  line-height: 1.1;
}

#results-image-container {
  display: flex;
  overflow: visible;
  position: relative;
  max-width: auto;
  width: 150px;
  margin-left: 220px;
  z-index: 0;
}

#results-image {
  max-width: none;
  width: 100%;
  position: static;
  right: 0;
  height: auto;
  display: block;
  margin: 0;
  padding: 0;
}

.btn-resultados {
  font-family: 'HP', sans-serif !important;
  font-weight: 700 !important;
  background-color: white !important;
  color: #2262c6 !important;
  border-radius: 10px !important;

  font-size: 28px !important;
  height: 45px !important;
  line-height: 50px !important;

  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  margin-left: 20px;
  cursor: pointer;

  width: 200px;
  text-align: center;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

::v-deep(.btn-resultados .q-btn__content span.font-hp-bold) {
  position: relative;
  top: -13px;
  display: inline-block;
}

.btn-resultados:hover {
  background-color: #e6e6e6 !important;
}

@media (min-width: 769px) {
  #results-text h2.title-tight span {
    font-size: 44px;
    white-space: nowrap;
    word-break: keep-all;
  }

  #results-text p.font-roboto-regular {
    font-size: 18.9px;
    white-space: nowrap;
    word-break: keep-all;
  }

  #results-text h2.title-tight {
    margin-top: 34px;
    margin-left: 20px;
  }

  #results-text p.font-roboto-regular {
    margin-top: -18px !important;
    margin-left: 20px;
  }

  #results-image-container {
    margin-top: -30px;
    z-index: 1;
  }

  #results-image {
    width: 125%;
    position: relative;
    right: -40px;
  }
}

@media (max-width: 768px) {
  #results {
    overflow-x: hidden; 
  }
.row {
  display: flex !important;
  flex-wrap: nowrap;
  align-items: stretch;
}

#results-text {
  flex: 1 1 55%;
  padding-left: 0 !important;
  margin-top: 0 !important;
}

#results-image-container {
  flex: 0 0 40%;
  margin-left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  align-items: flex-end;
}

#results-image {
  width: 120%; 
  max-width: none;
  height: auto;
  display: block;
  margin: 0 auto;
  position: relative;
  right: -15px; 
  align-self: flex-end;
  transform: translateX(-10px);
}
.title-tight {
  margin-bottom: 1rem !important;
  padding: 0 !important;
  line-height: 0.5 !important;
  margin-top: 0px;
}

.title-tight span {
  display: inline;
  margin: 0;
  padding: 0;
  font-size: 29.4px;
  line-height: 1 !important;
}

p.font-roboto-regular {
  margin-top: 0 !important;
  margin-bottom: 0.5rem !important;
  font-size: 14.4px;
  line-height: 1.3;
}

.btn-resultados {
  font-size: 25px !important;
  padding: 5px 30px !important;
  width: 160px !important;
  margin-left: 0;
  text-align: center;
}
::v-deep(.btn-resultados .q-btn__content span.font-hp-bold) {
  position: relative;
  top: -16px;
  display: inline-block;
}

.break-mobile {
  display: block;
}
}
</style>
