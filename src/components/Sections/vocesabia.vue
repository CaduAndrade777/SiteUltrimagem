<template>
  <div class="type-giant-cards">
    <div class="content">
      <div class="copy-component">
        <div class="heading-text">
          <p class="heading">
            <span class="text-wrapper">
              Você sabia
              <br />
            </span>
            <span class="span">
              que pode escolher onde realizar seus exames odontológicos?
            </span>
          </p>
          <p class="subheading">
            Mesmo quando o dentista sugere um local, você tem liberdade para
            optar pelo serviço que preferir. Na Ultrimagem, garantimos
            qualidade, conforto e profissionais especializados para cuidar de
            você nesse momento.
          </p>
        </div>
      </div>
    </div>

    <!-- Imagens por breakpoint -->
    <picture>
      <source
        media="(max-width: 425px)"
        srcset="../../assets/img/components/promocional/VoceSabiaBanner3.svg"
      />
      <source
        media="(max-width: 768px)"
        srcset="../../assets/img/components/promocional/VoceSabiaBanner2.svg"
      />
      <img
        class="image-lummi"
        src="../../assets/img/components/promocional/VoceSabiaBanner.svg"
        alt="Imagem ilustrativa você sabia"
      />
    </picture>
  </div>
</template>

<script>
export default {
  name: "TypeGiantCards",
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;700&family=Poppins:wght@300;400;500&display=swap");

.type-giant-cards {
  align-items: center;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  padding: 65px 16px 120px;
  font-family: "Ubuntu", sans-serif;
}

.type-giant-cards .content {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
}

.type-giant-cards .copy-component {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  width: 100%;
  max-width: 800px;
}

.type-giant-cards .heading-text {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 23px;
  justify-content: center;
  text-align: center;
}

.type-giant-cards .heading {
  color: #064e3b;
  font-size: 72px;
  font-weight: 400;
  line-height: 70px;
  letter-spacing: -1.28px;
  text-align: center;
}

.type-giant-cards .text-wrapper {
  color: #0a32a3;
  font-weight: 700;
  font-size: 76px;
  line-height: 50px;
}

.type-giant-cards .span {
  color: #0a32a3;
  font-weight: 300;
  font-size: 40px;
  line-height: 20px;
}

.type-giant-cards .subheading {
  color: #4e5050;
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
  text-align: center;
}

.type-giant-cards .image-lummi {
  height: auto;
  width: 100%;
  max-width: 1184px;
  display: block;
}

/* Responsividade */
@media (max-width: 768px) {
  .type-giant-cards .heading {
    font-size: 50px;
    line-height: 58px;
  }

  .type-giant-cards .text-wrapper {
    font-size: 52px;
    line-height: 60px;
  }

  .type-giant-cards .span {
    font-size: 36px;
    line-height: 42px;
  }
}

@media (max-width: 425px) {
  .type-giant-cards .heading {
    font-size: 36px;
    line-height: 44px;
  }

  .type-giant-cards .text-wrapper {
    font-size: 40px;
    line-height: 48px;
  }

  .type-giant-cards .span {
    font-size: 28px;
    line-height: 36px;
  }

  .type-giant-cards .subheading {
    font-size: 16px;
    line-height: 24px;
  }
}
</style>
