<template> 
  <section id="saudeMulher">
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <h3 class="text-secondary">{{title}}</h3>
           <p class="text-secondary">Conheça soluções e exames para cuidado com as mulheres em todas as fases da sua vida.</p>
        </div>
        <div class="col-md-2" style="display: flex; align-items: center;">
          <q-btn flat color="primary" class="button-mulher">
              <span> Ir para saúde da Mulher </span>
              <i class="mdi mdi-chevron-right" aria-hidden="true" ></i>
          </q-btn>
        </div>
        <div class="col-md-2">
            <img
            src="../../assets/img/components/saudeMulher/mulher.svg"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: "Saúde da Mulher",
    };
  },
  componentes: {}
};
</script>
<style scoped lang="scss">

#saudeMulher {
    height: 201px;
    background: linear-gradient(270.06deg, #A3CAFF 17.03%, #8090DD 40.38%);
}

.button-mulher {
    font-size: 16px;
    border-radius: 10px;
    width: 200px!important;
    background: #F4F7F9 !important;
    color: $primary !important;
    height: 40px !important;
    text-transform: capitalize;
    font-family: Montserrat, sans-serif;
    font-size: 0.875em;    
}

img {
    max-width: 50px;
}

</style>