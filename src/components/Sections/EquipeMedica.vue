<template> 
  <section id="equipeMedica">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h1 v-html="titleEquipe"></h1>
          <p>
              Cras mattis vestibulum quam missão mattis euismod. Ut posuere dolor neque, et vehicula ipsum blandit vel. Integer sed posuere lorem. Sed viverra, felis nec tincidunt pretium, ipsum ante scelerisque massa, visão sed semper purus augue eget diam.
          </p>
        </div>
      </div>
    </div>
    <div class="row">
        <div class="col-md-12">

        <q-carousel
        v-model="slide"
        transition-prev="scale"
        transition-next="scale"
        swipeable
        animated
        control-color="primary"
        navigation
        padding
        arrows
        height="501px"
        class=""
        
      >

      <q-carousel-slide name="style" class="column no-wrap flex-center">
          <div class="row">
            <div class="col-md-6 card">
                <q-card class="my-card full-width" >
                    <q-card-section horizontal>
                        <img src="../../assets/img/components/equipeMedica/bruno.jpg">
                        <q-card-section>
                        <h3>DR. BRUNO LEITE</h3>
                        <p class="formation"><i class="mdi mdi-stethoscope" aria-hidden="true" ></i> Neurologia pela Universidade Estacio de Sa – Rio de Janeiro - RJ</p>
                        
                        </q-card-section>
                    </q-card-section>
                </q-card>
            </div>
            <div class="col-md-6">
                <q-card class="my-card full-width" >
                    <q-card-section horizontal>
                        <img src="../../assets/img/components/equipeMedica/camila.jpg">
                        <q-card-section>
                        <h3>DRA. CAMILA DE MORAES SARMENTO CONDÉ</h3>
                        <p class="formation"><i class="mdi mdi-stethoscope" aria-hidden="true" ></i> Radiologia pela Faculdade de Medicina de Campos – Rio de Janeiro</p>
                        
                        </q-card-section>
                    </q-card-section>
                </q-card>
            </div>
          </div>
        </q-carousel-slide>

        <q-carousel-slide name="pag2" class="column no-wrap flex-center">
          <div class="row">
            <div class="col-md-6 card">
                <q-card class="my-card full-width" >
                    <q-card-section horizontal>
                        <img src="../../assets/img/components/equipeMedica/carlos.jpg">
                        <q-card-section>
                        <h3>DR. CARLOS DADALTO ELIAS</h3>
                        <p class="formation"><i class="mdi mdi-stethoscope" aria-hidden="true" ></i> Radiologia pela Graduação em Medicina pelo Centro Universitário Serra dos Órgãos / UNIFESO.</p>
                        
                        </q-card-section>
                    </q-card-section>
                </q-card>
            </div>
            <div class="col-md-6">
                <q-card class="my-card full-width" >
                    <q-card-section horizontal>
                        <img src="../../assets/img/components/equipeMedica/caroline.jpg">
                        <q-card-section>
                        <h3>DRA. CAROLINE LAURITA BATISTA COUTO VILLELA</h3>
                        <p class="formation"><i class="mdi mdi-stethoscope" aria-hidden="true" ></i> Radiologia pela Faculdade de Medicina de Barbacena - MG</p>
                        
                        </q-card-section>
                    </q-card-section>
                </q-card>
            </div>
          </div>
        </q-carousel-slide>

        <q-carousel-slide name="pag3" class="column no-wrap flex-center">
          <div class="row">
            <div class="col-md-6 card">
                <q-card class="my-card full-width" >
                    <q-card-section horizontal>
                        <img src="../../assets/img/components/equipeMedica/celio.jpg">
                        <q-card-section>
                        <h3>DR. CÉLIO MENDONÇA</h3>
                        <p class="formation"><i class="mdi mdi-stethoscope" aria-hidden="true" ></i> Pediatria pela Universidade Federal de Juiz de Fora (UFJF) 1981 - 1986</p>
                        
                        </q-card-section>
                    </q-card-section>
                </q-card>
            </div>
            <div class="col-md-6">
                <q-card class="my-card full-width" >
                    <q-card-section horizontal>
                        <img src="../../assets/img/components/equipeMedica/helena.jpg">
                        <q-card-section>
                        <h3>DRA. HELENA CASTILHOS DE OLIVEIRA FREITAS</h3>
                        <p class="formation"><i class="mdi mdi-stethoscope" aria-hidden="true" ></i> Ginecologia e Obstetrícia - Hospital Regional da Asa Norte HRAN- Brasília/ DF</p>
                        
                        </q-card-section>
                    </q-card-section>
                </q-card>
            </div>
          </div>
        </q-carousel-slide>


        <q-carousel-slide name="pag4" class="column no-wrap flex-center">
          <div class="row">
            <div class="col-md-6 card">
                <q-card class="my-card full-width" >
                    <q-card-section horizontal>
                        <img src="../../assets/img/components/equipeMedica/juliana.jpg">
                        <q-card-section>
                        <h3>DRA. JULIANA SOUZA DA SILVA</h3>
                        <p class="formation"><i class="mdi mdi-stethoscope" aria-hidden="true" ></i> Radiologia e Diagnóstico por Imagem pelo MEC no Hospital Beneficência Portuguesa de São Paulo (Med Imagem) </p>
                        
                        </q-card-section>
                    </q-card-section>
                </q-card>
            </div>
            <div class="col-md-6">
                <q-card class="my-card full-width" >
                    <q-card-section horizontal>
                        <img src="../../assets/img/components/equipeMedica/leonardo.jpg">
                        <q-card-section>
                        <h3>DR. LEONARDO LOBO PONCINELLI</h3>
                        <p class="formation"><i class="mdi mdi-stethoscope" aria-hidden="true" ></i> Universidade Federal de Juiz de Fora (UFJF)</p>
                        
                        </q-card-section>
                    </q-card-section>
                </q-card>
            </div>
          </div>
        </q-carousel-slide>


        <q-carousel-slide name="pag5" class="column no-wrap flex-center">
          <div class="row">
            <div class="col-md-6 card">
                <q-card class="my-card full-width" >
                    <q-card-section horizontal>
                        <img src="../../assets/img/components/equipeMedica/luiza.jpg">
                        <q-card-section>
                        <h3>DRA. LUIZA LOURENÇO CAMPOS DE SOUSA</h3>
                        <p class="formation"><i class="mdi mdi-stethoscope" aria-hidden="true" ></i> Residência em Radiologia e Diagnóstico por Imagem no Hospital e Maternidade Therezinha de Jesus .</p>
                        
                        </q-card-section>
                    </q-card-section>
                </q-card>
            </div>
            <div class="col-md-6">
                <q-card class="my-card full-width" >
                    <q-card-section horizontal>
                        <img src="../../assets/img/components/equipeMedica/marcela.jpg">
                        <q-card-section>
                        <h3>DRA. MARCELLA DE LUCCA CARNEIRO</h3>
                        <p class="formation"><i class="mdi mdi-stethoscope" aria-hidden="true" ></i> Residência Médica em Radiologia e Diagnóstico por Imagem: Hospital Federal Cardoso Fontes - Rio de Janeiro-RJ</p>
                        
                        </q-card-section>
                    </q-card-section>
                </q-card>
            </div>
          </div>
        </q-carousel-slide>

        <q-carousel-slide name="pag6" class="column no-wrap flex-center">
          <div class="row">
            <div class="col-md-6 card">
                <q-card class="my-card full-width" >
                    <q-card-section horizontal>
                        <img src="../../assets/img/components/equipeMedica/marcio.jpg">
                        <q-card-section>
                        <h3>DR. MÁRCIO LUIZ RINALDI</h3>
                        <p class="formation"><i class="mdi mdi-stethoscope" aria-hidden="true" ></i> Instituto Estadual de Radiologia – RJ (IERMN)</p>
                        
                        </q-card-section>
                    </q-card-section>
                </q-card>
            </div>
            <div class="col-md-6">
                <q-card class="my-card full-width" >
                    <q-card-section horizontal>
                        <img src="../../assets/img/components/equipeMedica/mariana.jpg">
                        <q-card-section>
                        <h3>DRA. MARIANA LEITE PEREIRA</h3>
                        <p class="formation"><i class="mdi mdi-stethoscope" aria-hidden="true" ></i> Hospital Clementino Fraga Filho - Universidade Federal do Rio de Janeiro- UFRJ</p>
                        
                        </q-card-section>
                    </q-card-section>
                </q-card>
            </div>
          </div>
        </q-carousel-slide>

        <q-carousel-slide name="pag7" class="column no-wrap flex-center">
          <div class="row">
            <div class="col-md-6 card">
                <q-card class="my-card full-width" >
                    <q-card-section horizontal>
                        <img src="../../assets/img/components/equipeMedica/paula.png">
                        <q-card-section>
                        <h3>DRA. PAULA MARTINS ALMEIDA SLAIBI</h3>
                        <p class="formation"><i class="mdi mdi-stethoscope" aria-hidden="true" ></i> Residência em Radiologia e Diagnóstico por Imagem pelo Hospital Márcio Cunha</p>
                        
                        </q-card-section>
                    </q-card-section>
                </q-card>
            </div>
            <div class="col-md-6">
                <q-card class="my-card full-width" >
                    <q-card-section horizontal>
                        <img src="../../assets/img/components/equipeMedica/rafael.jpg">
                        <q-card-section>
                        <h3>DR. RAFAEL COUTO MARQUES</h3>
                        <p class="formation"><i class="mdi mdi-stethoscope" aria-hidden="true" ></i> Hospital Geral de Bonsucesso – SUS – RJ</p>
                        
                        </q-card-section>
                    </q-card-section>
                </q-card>
            </div>
          </div>
        </q-carousel-slide>


        <q-carousel-slide name="pag8" class="column no-wrap flex-center">
          <div class="row">
            <div class="col-md-6 card">
                <q-card class="my-card full-width" >
                    <q-card-section horizontal>
                        <img src="../../assets/img/components/equipeMedica/ramiro.jpg">
                        <q-card-section>
                        <h3>DR. RAMYRO COUTO MARQUES</h3>
                        <p class="formation"><i class="mdi mdi-stethoscope" aria-hidden="true" ></i> Residência em Radiologia e Diagnóstico por Imagem pelo Hospital Federal de Bonsucesso</p>
                        
                        </q-card-section>
                    </q-card-section>
                </q-card>
            </div>
            <div class="col-md-6">
                <q-card class="my-card full-width" >
                    <q-card-section horizontal>
                        <img src="../../assets/img/components/equipeMedica/ricardo.jpg">
                        <q-card-section>
                        <h3>DR. RICARDO OLIVEIRA GOMES</h3>
                        <p class="formation"><i class="mdi mdi-stethoscope" aria-hidden="true" ></i> Pós-graduação em Radiologia na Pontifícia Universidade Católica do Rio de Janeiro – PUC / RJ</p>
                        
                        </q-card-section>
                    </q-card-section>
                </q-card>
            </div>
          </div>
        </q-carousel-slide>

        </q-carousel>
        </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      titleEquipe: " <strong> Equipe médica  </strong>",
      slide: 'style',
      "lorem": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo."
    };
  },
  componentes: {}
};
</script>
<style scoped lang="scss">
#equipeMedica {
    img {
        max-width: 300px;;
    }
}

.my-card {
    i {
        font-size: 1.2em;
        color: #DDD;
    }
}

.formation {
    font-family: Poppins, Roboto, sans-serif;
    font-size: 1em;
    padding-left: 3px;

}

.card {
    padding-right: 25px;
}
</style>
