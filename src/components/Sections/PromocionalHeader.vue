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
  width: 100vw;             
  display: flex;
  justify-content: center; 
  padding: 0px 0;
  box-sizing: border-box;
  background-color: transparent;
  position: relative;       
  left: 0;                  
  margin: 0;               
}

.bubble-container {
  background-color: #0a32a3;
  width: 100%;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px;
  box-sizing: border-box;
}

.vector {
  height: 31px;
  width: 140px;
}

</style>
