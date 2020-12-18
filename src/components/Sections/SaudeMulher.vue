<template> 
  <section id="saudeMulher">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <span style="font-size: 24px" class="text-secondary">{{title}}</span>
          
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

</style>