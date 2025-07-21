<template>
  <div class="type-small-cards">
    <div class="feature-grid">
      <div class="feature">
        <p class="feature-title">
          <span class="text-wrapper">
            1<br />
          </span>
          <span class="span">30 anos de experiência</span>
        </p>
        <p class="feature-description">
          Tradição e confiança em exames por imagem, agora com ainda mais
          estrutura <br />
          em Ubá.
        </p>
        <img class="icon-stroke" alt="Icon stroke" :src="iconStroke" />
      </div>
      <div class="feature">
        <p class="feature-title">
          <span class="text-wrapper">
            2<br />
          </span>
          <span class="span">Laudos com olhar especializado</span>
        </p>
        <p class="feature-description">
          Profissionais experientes, com foco <br />
          em odontologia.
        </p>
        <img class="icon-stroke" alt="Icon stroke" :src="iconStroke" />
      </div>
      <div class="feature">
        <p class="feature-title">
          <span class="text-wrapper">
            3<br />
          </span>
          <span class="span">Tecnologia de ponta</span>
        </p>
        <p class="feature-description">
          Equipamentos modernos que garantem imagens de alta definição para um
          diagnóstico preciso.
        </p>
        <img class="icon-stroke" alt="Icon stroke" :src="iconStroke" />
      </div>
      <div class="feature">
        <p class="feature-title">
          <span class="text-wrapper">
            4<br />
          </span>
          <span class="span">Estrutura nova e acessível</span>
        </p>
        <p class="feature-description">
          Ambiente ampliado e pensado para seu conforto, com localização
          central.
        </p>
        <img class="icon-stroke" alt="Icon stroke" :src="iconStroke" />
      </div>
      <div class="feature">
        <p class="feature-title">
          <span class="text-wrapper">
            5<br />
          </span>
          <span class="span">Agilidade no atendimento</span>
        </p>
        <p class="feature-description">
          Rapidez desde o agendamento até a entrega do resultado.
        </p>
        <img class="icon-stroke" alt="Icon stroke" :src="iconStroke" />
      </div>
    </div>
  </div>
</template>

<script>
import iconStroke from "../../assets/img/components/promocional/estrelaMotivos.svg";

export default {
  name: "TypeSmallCards",
  data() {
    return {
      iconStroke,
    };
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap');

.type-small-cards {
  align-items: center;
  background-color: #0a32a3;
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  padding: 58px 16px;
  position: relative;
}

.type-small-cards .feature-grid {
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  flex-wrap: wrap;
  gap: 40px 40px;
  justify-content: center;
  max-width: 1200px;
  position: relative;
  width: 100%;
}

.type-small-cards .feature {
  align-items: center;
  background-color: #ffffff;
  border-radius: 30px;
  display: flex;
  flex: 1;
  flex-direction: column;
  flex-grow: 1;
  gap: 8px;
  justify-content: center;
  max-width: 400px;
  min-width: 272px;
  padding: 32px;
  position: relative;
}

.type-small-cards .feature-title {
  align-self: stretch;
  color: #0a32a3;
  font-family: "Ubuntu", Helvetica, sans-serif;
  font-weight: 700;
  font-size: 34px;
  height: auto;
  letter-spacing: 0;
  line-height: 40px;
  margin-top: 0;
  position: relative;
  text-align: center;
}

.type-small-cards .text-wrapper {
  color: #0a32a3;
  font-family: "Ubuntu", Helvetica, sans-serif;
  font-weight: 700;
  font-size: 48px; 
  display: block;
  line-height: 1;
}

.type-small-cards .span {
  color: #319ff4;
  font-family: "Ubuntu", Helvetica, sans-serif;
  font-weight: 400;
  font-size: 24px;
  line-height: 33.6px;
  display: block;
  margin-top: 4px;
}

.type-small-cards .feature-description {
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  align-self: stretch;
  color: #4e5050;
  display: -webkit-box;
  font-family: "Poppins-Regular", Helvetica, sans-serif;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 21px;
  overflow: hidden;
  position: relative;
  text-align: center;
  text-overflow: ellipsis;
}

.type-small-cards .icon-stroke {
  height: 29.36px;
  width: 30.67px;
  position: relative;
}

/* Remova os estilos .div e .p que não são necessários ou estão incorretos */
</style>
