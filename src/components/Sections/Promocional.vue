<template>
  <div class="type-horizontal-alt">
    <div class="wrapper">
      <picture>
        <source
          media="(max-width: 425px)"
          srcset="../../assets/img/components/promocional/banner3.svg"
        />
        <source
          media="(max-width: 768px)"
          srcset="../../assets/img/components/promocional/banner2.svg"
        />
        <img
          class="image-container"
          alt="Imagem promocional"
          src="../../assets/img/components/promocional/banner1.svg"
        />
      </picture>

      <div class="copy-component">
        <div class="heading-text">
          <p class="heading-horizontal">
            <span class="line-1">
              <span class="text-wrapper number">5</span>
              <span class="span">&nbsp;</span>
              <span class="text-wrapper-2">Motivos</span>
            </span>
            <span class="line-2 text-wrapper-3">para fazer seu</span>
            <span class="line-3 text-wrapper-2">exame odontológico</span>
            <span class="line-4 text-wrapper-3">na Ultrimagem</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TypeHorizontalAlt",
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap');

.type-horizontal-alt {
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  padding: 25px 24px 40px;
}

.type-horizontal-alt .wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  max-width: 1200px;
  width: 100%;
  flex-wrap: nowrap;
  flex-direction: row;
  box-sizing: border-box;
}

.type-horizontal-alt .image-container {
  height: 704px;
  width: auto;
  max-width: 100%;
  border-radius: 40px;
  object-fit: cover;
  flex-shrink: 1;
  transition: all 0.3s ease;
  background-color: #fff;
  display: block;
}

.type-horizontal-alt .copy-component {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0;
  max-width: 720px;
  min-width: 280px;
  flex-grow: 1;
  box-sizing: border-box;
  padding: 0 10px;
}

.type-horizontal-alt .heading-text {
  display: flex;
  flex-direction: column;
  gap: 0;
  width: 100%;
}

.type-horizontal-alt .heading-horizontal {
  color: #319ff4;
  font-family: 'Ubuntu', sans-serif;
  font-weight: 700;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0;
}

.type-horizontal-alt .line-1,
.type-horizontal-alt .line-2,
.type-horizontal-alt .line-3,
.type-horizontal-alt .line-4 {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin: 0;
  padding: 0;
  font-family: 'Ubuntu', sans-serif;
}

/* Texto com tamanho e peso distintos, aplicando font Ubuntu sempre */
.type-horizontal-alt .text-wrapper,
.type-horizontal-alt .span,
.type-horizontal-alt .text-wrapper-2,
.type-horizontal-alt .text-wrapper-3,
.type-horizontal-alt .number {
  margin: 0;
  padding: 0;
  font-family: 'Ubuntu', sans-serif;
  display: inline;
}

/* Fonte e tamanho originais para desktop com line-height compacto */
.type-horizontal-alt .number {
  font-size: 96px;
  font-weight: 700;
  letter-spacing: -1.92px;
  line-height: 80px;
}

.type-horizontal-alt .span {
  font-size: 67px;
  font-weight: 700;
  letter-spacing: -0.90px;
  line-height: 80px;
}

.type-horizontal-alt .text-wrapper-2 {
  font-size: 64px;
  font-weight: 700;
  letter-spacing: -0.82px;
  line-height: 80px;
}

.type-horizontal-alt .text-wrapper-3 {
  font-size: 64px;
  font-weight: 400;
  letter-spacing: -0.82px;
  line-height: 80px;
}

/* Tablet */
@media (max-width: 1024px) {
  .type-horizontal-alt .wrapper {
    gap: 32px;
  }

  .type-horizontal-alt .image-container {
    height: auto;
    max-height: 704px;
    width: 100%;
  }

  .type-horizontal-alt .number {
    font-size: 56px;
    line-height: 60px;
  }

  .type-horizontal-alt .span,
  .type-horizontal-alt .text-wrapper-2,
  .type-horizontal-alt .text-wrapper-3 {
    font-size: 56px;
    line-height: 60px;
  }
}

/* Tablet pequeno */
@media (max-width: 768px) {
  .type-horizontal-alt .wrapper {
    gap: 20px;
    flex-direction: row; /* lado a lado */
  }

  .type-horizontal-alt .number {
    font-size: 48px;
    line-height: 52px;
  }

  .type-horizontal-alt .span,
  .type-horizontal-alt .text-wrapper-2,
  .type-horizontal-alt .text-wrapper-3 {
    font-size: 48px;
    line-height: 52px;
  }
}

/* Mobile GRANDE */
@media (max-width: 430px) and (min-height: 900px) {
  .type-horizontal-alt .wrapper {
    flex-direction: column; /* coluna */
    gap: 32px;
  }

  .type-horizontal-alt .image-container {
    width: 100%;
    height: auto;
  }

  .type-horizontal-alt .heading-horizontal {
    font-size: 48px;
    line-height: 48px;
  }

  .type-horizontal-alt .text-wrapper-2,
  .type-horizontal-alt .text-wrapper-3,
  .type-horizontal-alt .span,
  .type-horizontal-alt .number {
    font-size: 40px;
    line-height: 48px;
  }
}

/* Mobile PEQUENO */
@media (max-width: 424px) {
  .type-horizontal-alt {
    padding: 16px 12px 24px !important;
  }

  .type-horizontal-alt .wrapper {
    flex-direction: column !important; /* coluna */
    gap: 12px !important;
  }

  .type-horizontal-alt .image-container {
    width: 100% !important;
    height: auto !important;
    border-radius: 20px !important;
  }

  .type-horizontal-alt .copy-component {
    padding: 0 !important;
  }

  .type-horizontal-alt .number {
    font-size: 34px !important;
    line-height: 38px !important;
  }

  .type-horizontal-alt .span,
  .type-horizontal-alt .text-wrapper-2,
  .type-horizontal-alt .text-wrapper-3 {
    font-size: 34px !important;
    line-height: 38px !important;
  }
}

</style>
