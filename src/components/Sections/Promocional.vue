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
  gap: 40px;
  max-width: 720px;
  min-width: 280px;
  flex-grow: 1;
  box-sizing: border-box;
  padding: 0 10px;
}

.type-horizontal-alt .heading-text {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
}

.type-horizontal-alt .heading-horizontal {
  color: #319ff4;
  font-family: 'Ubuntu', sans-serif;
  font-size: 96px;
  font-weight: 700;
  letter-spacing: -1.92px;
  line-height: 70px;
  max-width: 100%;
  word-wrap: break-word;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.type-horizontal-alt .line-1 {
  display: flex;
  align-items: baseline;
  gap: 4px;
  margin: 0;
  padding: 0;
}

.type-horizontal-alt .text-wrapper,
.type-horizontal-alt .span,
.type-horizontal-alt .text-wrapper-2,
.type-horizontal-alt .text-wrapper-3 {
  margin: 0;
  padding: 0;
  display: block;
  line-height: 70px;
}

.type-horizontal-alt .number {
  display: inline-block;
  width: auto;
  margin-right: 0;
  padding-right: 0;
}

.type-horizontal-alt .span {
  font-size: 67px;
  font-weight: 700;
  letter-spacing: -0.90px;
  line-height: 70px;
}

.type-horizontal-alt .text-wrapper-2 {
  font-size: 64px;
  font-weight: 700;
  letter-spacing: -0.82px;
  font-family: 'Ubuntu', sans-serif;
}

.type-horizontal-alt .text-wrapper-3 {
  font-family: 'Ubuntu', sans-serif;
  font-size: 64px;
  font-weight: 400;
  letter-spacing: -0.82px;
  line-height: 70px;
}

/* Responsividade */
@media (max-width: 1024px) {
  .type-horizontal-alt .wrapper {
    gap: 32px;
  }

  .type-horizontal-alt .image-container {
    height: auto;
    max-height: 704px;
    width: 100%;
  }

  .type-horizontal-alt .heading-horizontal {
    font-size: 72px;
    line-height: 60px;
    gap: 8px;
  }

  .type-horizontal-alt .text-wrapper-2,
  .type-horizontal-alt .text-wrapper-3,
  .type-horizontal-alt .span {
    font-size: 56px;
    line-height: 60px;
  }
}

@media (max-width: 768px) {
  .type-horizontal-alt .heading-horizontal {
    gap: 8px;
  }
}

@media (max-width: 430px) and (min-height: 900px) {
  .type-horizontal-alt .wrapper {
    flex-direction: column;
    gap: 32px;
  }

  .type-horizontal-alt .image-container {
    width: 100%;
    height: auto;
  }

  .type-horizontal-alt .heading-horizontal {
    font-size: 64px;
    line-height: 52px;
    gap: 6px;
  }

  .type-horizontal-alt .text-wrapper-2,
  .type-horizontal-alt .text-wrapper-3,
  .type-horizontal-alt .span {
    font-size: 48px;
    line-height: 52px;
  }
}

@media (max-width: 424px) and (max-height: 899px) {
  .type-horizontal-alt .wrapper {
    flex-direction: column;
    gap: 24px;
  }

  .type-horizontal-alt .image-container {
    width: 100%;
    height: auto;
  }

  .type-horizontal-alt .heading-horizontal {
    font-size: 48px;
    line-height: 42px;
    gap: 5px;
  }

  .type-horizontal-alt .text-wrapper-2,
  .type-horizontal-alt .text-wrapper-3,
  .type-horizontal-alt .span {
    font-size: 36px;
    line-height: 42px;
  }
}
</style>
