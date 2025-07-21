<template>
  <div class="type-bubble-inverted">
    <div class="bubble-container">
      <img class="vector" alt="Vector" src="../../assets/img/components/promocional/logo.svg" />
    </div>
  </div>
</template>

<script>
import vector from "../../assets/img/components/promocional/logo.svg";

export default {
  name: "TypeBubbleInverted",
  data() {
    return {
      vector,
    };
  },
};
</script>

<style>
.type-bubble-inverted {
  width: 100vw;             /* usa toda a largura da viewport */
  display: flex;
  justify-content: center;  /* centraliza o conteúdo */
  padding: 8px 0;
  box-sizing: border-box;
  background-color: transparent;
  position: relative;       /* caso precise posicionar algo absoluto */
  left: 0;                  /* evita deslocamentos inesperados */
  margin: 0;                /* remove margens externas */
}

.bubble-container {
  background-color: #0a32a3;
  width: 100%;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  box-sizing: border-box;
}

.vector {
  height: 31px;
  width: 140px;
}

</style>
