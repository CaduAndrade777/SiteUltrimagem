const exam = [
  {
    id: 1,
    name: "Biópsia",
    key: "biopsia",
    description:
      "Uma biópsia guiada por imagem tem como objetivo fornecer informações de diagnóstico através da obtenção de uma amostra de tecido usando imagens para  navegar até o local de interesse.",
    icon: "biopsia.svg",
    slug: "biopsia",
    class: "bg-green-1",
    preparacao: "Abdomen",
    duracao: "Abdomen",
    image: "biopsia.jpeg",
    oque:
      "A biópsia é um procedimento cirúrgico no qual se colhe uma amostra de tecidos ou células para posterior estudo em laboratório, tal como a evolução de determinada doença crônica. Uma biópsia é frequentemente usada para diagnosticar se um tumor é benigno ou maligno. Existem dois tipos de biópsias de agulha: punção aspirativa por agulha fina (PAAF) e biópsia de fragmento com agulha (BFA). Ambos os procedimentos são realizados sob anestesia geral.",

    variacoes: [
      {
        id: 1,
        name: "Biópsia",
        key: "biopsia",
        description:
          "Uma biópsia guiada por imagem tem como objetivo fornecer informações de diagnóstico através da obtenção de uma amostra de tecido usando imagens para  navegar até o local de interesse.",
        icon: "biopsia.svg",
        slug: "biopsia",
        class: "bg-green-1",
        preparacao: "4 horas de jejum.",
        duracao: "20 minutos (em média)",
        image: "biopsia.jpeg",
        oque:
          "A biópsia é um procedimento cirúrgico no qual se colhe uma amostra de tecidos ou células para posterior estudo em laboratório, tal como a evolução de determinada doença crônica. Uma biópsia é frequentemente usada para diagnosticar se um tumor é benigno ou maligno. Existem dois tipos de biópsias de agulha: punção aspirativa por agulha fina (PAAF) e biópsia de fragmento com agulha (BFA). Ambos os procedimentos são realizados sob anestesia geral."
      },
      {
        id: 2,
        name: "Core Biópsia de Mama",
        key: "core-biópsia-de-mama",
        description:
          "Uma biópsia guiada por imagem tem como objetivo fornecer informações de diagnóstico através da obtenção de uma amostra de tecido usando imagens para navegar até o local de interesse.",
        icon: "",
        preparacao: "4 horas de jejum.",
        duracao: "20 minutos (em média).",
        image: "core_biopsia_de_mama.jpeg",
        oque:
          "A biópsia de fragmento com agulha (BFA) ou core biopsy de mama é utilizada para tirar amostras de nódulos que foram diagnosticados no exame clínico ou em exames por imagem. Ela é feita com anestesia local, portanto a paciente não sente dor durante o procedimento. É realizado com o auxílio de ultrassom, pois assim é possível localizar o nódulo para realizar o exame."
      },
      {
        id: 3,
        name: "Biópsia de Mama Guiada por Ultrassom",
        key: "biopsia-de-mama-guiada-por-ultrasson",
        description:
          "Uma biópsia guiada por imagem tem como objetivo fornecer informações de diagnóstico através da obtenção de uma amostra de tecido usando imagens para navegar até o local de interesse.",
        preparacao:
          "Restrição de alguns tipos de medicamentos antes do procedimento. Consulte um médico.",
        duracao: "20 minutos (em média).",
        image: "biopsia-de-mama-guiada-por-ultrassom.jpeg",
        oque:
          "Consiste na remoção de uma amostra de uma pequena quantidade de fluído e algumas células a partir da massa tumoral. A PAAF (Punção Aspirativa por Agulha Fina) é um procedimento rápido e pode ser realizado com anestésico local, embora normalmente não seja necessário. O posicionamento da agulha é comumente guiado por ultrassom. A coleta do material é realizada com movimentos de vai-e-vem da seringa. O material obtido é submetido à análise citológica."
      },
      {
        id: 4,
        name: "Biópsia de próstata",
        key: "biopsia-de-prostata",
        description:
          "Uma biópsia guiada por imagem tem como objetivo fornecer informações de diagnóstico através da obtenção de uma amostra de tecido usando imagens para navegar até o local de interesse.",
        preparacao:
          "Tomar o antibiótico receitado pelo médico durante cerca de 3 dias antes do exame; fazer jejum completo de 6 horas antes do exame; fazer uma limpeza do intestino antes do exame; urinar alguns minutos antes do procedimento; levar acompanhante para ajudar no retorno a casa.",

        duracao: "10 minutos (em média).",
        image: "biopsia-de-prostata.jpeg",
        oque:
          "A biópsia de próstata é capaz de confirmar a presença de câncer na próstata e envolve a remoção de pequenos pedaços da glândula para que sejam analisados no laboratório, a fim de identificar a presença, ou não, de células malignas."
      },
      {
        id: 5,
        name: "Biópsia de Tireóide",
        key: "biopsia-de-tireóide",
        description:
          "Uma biópsia guiada por imagem tem como objetivo fornecer informações de diagnóstico através da obtenção de uma amostra de tecido usando imagens para navegar até o local de interesse.",
        preparacao:
          "Restrição de alguns tipos de medicamentos antes do procedimento. Consulte um médico.",
        duracao: "25 minutos (em média).",
        image: "biopsia-de-tireoide.jpeg",
        oque:
          "É o procedimento no qual o médico remove uma amostra de tecido para análise. A maneira mais simples de descobrir se um nódulo de tireoide é maligno é a aspiração com agulha fina do nódulo tireoidiano."
      }
    ],
    entenda:
      "A biópsia vai permitir descobrir se existe alguma alteração da forma e do tamanho das células, e é muito útil para identificar a presença de células cancerígenas e outros problemas de saúde."
  },
  {
    id: 2,
    name: "Densitometria óssea",
    key: "densitometria-ossea",
    description:
      "A densitometria óssea é usada para analisar possíveis perdas de massa óssea que podem indicar osteopenia ou osteoporose.",

    icon: "densitometria.svg",
    slug: "densitometria-ossea",
    class: "bg-green-2",
    preparacao:
      "Não é indicado o uso de colares, joias, pulseiras ou itens de ferro.",
    duracao: "15 minutos (em média).",
    variacoes: [],
    image: "densitometria.png",
    entenda:
      "A densitometria óssea é usada para analisar possíveis perdas de massa óssea que podem indicar osteopenia ou osteoporose.",
    oque:
      "Utilizado para avaliar se o paciente tem osteopenia (perda de massa óssea que pode indicar predisposição à osteoporose) ou então osteoporose (doença caracterizada pela diminuição progressiva da densidade óssea e aumento do risco de fraturas). A grande vantagem do exame é a capacidade de detectar a perda mineral em um estágio inicial, quando ainda não pode ser visualizada pelo raio-x."
  },
  {
    id: 3,
    name: "Ecocardiografia",
    key: "ecocardiografia",
    entenda:
      "Ecocardiografia usa ondas sonoras para formar imagens do coração, suas válvulas e outras estruturas. Conheça o preparo e como é realizado.",
    icon: "ecocardiografia.svg",
    slug: "ecocardiografia",
    class: "bg-green-3",
    preparacao: "Tirar objetos metálicos",
    duracao: "20 minutos (em média).",
    variacoes: [
      {
        id: 1,
        name: "Ecocardiografia",
        key: "ecocardiografia",
        description:
        "A ecocardiografia é um estudo anatômico dinâmico do coração, incluindo suas válvulas, padrão de contração, dimensões, inferindo diversos dados hemodinâmicos.",
        icon: "",
        preparacao: "Tirar objetos metálicos.",
        duracao: "20 minutos (em média)",
        image: "eletrocardiografia-final.png",
        oque:
        "A ecocardiografia ou ecocardiograma é um exame de ultrassonografia do coração que fornece imagens obtidas através do som. Através dessas imagens, o médico especialista pode analisar se o órgão está batendo normalmente, se o fluxo sanguíneo está adequado, diagnosticar doenças que afetam sua anatomia e fisiologia, como insuficiências e malformações cardíacas. Esse exame não oferece risco para o paciente e é uma ferramenta essencial para a cardiologia moderna. Este procedimento pode ser realizado em pacientes recém nascidos até a fase adulta."
      },
      {
        id: 2,
        name: "Ecocardiografia Fetal",
        key: "ecocardiografia-fetal",
        description:
        "Este exame é fundamental para analisar o desenvolvimento, tamanho e funcionamento do coração do bebê.",
        icon: "",
        preparacao: "Ideal realizar entre 24 a 28 semanas.",
        duracao: "20 minutos (em média)",
        image: "ultrassom-doppler.jpeg",
        oque:
        "Este exame é fundamental para analisar o desenvolvimento, tamanho e funcionamento do coração do bebê."
      }

    ],
    oque:
      "A ecocardiografia ou ecocardiograma é um exame de ultrassonografia do coração que fornece imagens obtidas através do som. Através dessas imagens, o médico especialista pode analisar se o órgão está batendo normalmente, se o fluxo sanguíneo está adequado, diagnosticar doenças que afetam sua anatomia e fisiologia, como insuficiências e malformações cardíacas. Esse exame não oferece risco para o paciente e é uma ferramenta essencial para a cardiologia moderna.",
    image: "eletrocardiografia-final.png",
    description:
      "A ecocardiografia é um estudo anatômico dinâmico do coração, incluindo suas válvulas, padrão de contração, dimensões, inferindo diversos dados hemodinâmicos."
  },
  {
    id: 4,
    name: "Elastografia Hepática",
    key: "elastografia-hepatica",
    description:
      "A elastografia hepática é um método de imagem não invasivo e indolor que permite avaliar o grau de fibrose do fígado, um tecido que se desenvolve quando o órgão é lesionado continuamente. Saiba mais.",
    icon: "elastografia_svg.svg",
    slug: "elastografia-hepatica",
    class: "bg-green-2",
    preparacao: "Não ingerir bebida alcoólica até 7 dias antes do dia exame |" +
      "Não tomar cafeína (café/chá) 24 horas antes do exame |" +
      "Jejum 4 horas (absoluto, inclusive de água) |" +
      "Não realizar atividade física até 30 minutos antes do exame",
    duracao: "5 a 15 minutos (em média).",
    oque:
      "Realizado através de ultrassom, é um exame rápido, prático e indolor, que pode ser feito em poucos minutos, não envolvendo perfurações ou cortes no corpo.\n" +
      "É indicado para diagnosticar uma série de doenças que acometem o fígado, como hepatites, cirrose e excesso de gordura.\n",
    variacoes: [],
    image: "elastografia.jpeg",
    entenda:
      "A sua principal função é detectar a fibrose hepática, condição caracterizada por danos e incapacidade de regeneração desse órgão."
  }
,  {
    id: 5,
    name: "Eletrocardiograma",
    key: "eletrocardiograma",
    description:
      "O eletrocardiograma é um exame simples e não invasivo que ajuda o cardiologista a avaliar como está o nosso coração.",
    icon: "eletrocardiograma.svg",
    slug: "eletrocardiograma",
    class: "bg-blue-1",
    preparacao: "Não é necessário preparo prévio.",
    duracao: "após a colocação dos eletrodos, dura cerca de 5 minutos.",
    variacoes: [],
    oque:
      "O exame fornece a representação gráfica da atividade elétrica do coração. Por meio dele, é possível observar principalmente se o ritmo de batimentos cardíacos está normal ou não e se as câmaras do coração estão se movimentando como deveriam. Assim, ele é muito útil para identificar arritmias, possíveis obstruções no fluxo sanguíneo e avaliar se o paciente está em boas condições para praticar exercícios físicos.",

    image: "eletrocardiograma.jpeg",
    entenda:
      "Saiba como é feito o eletrocardiograma, exame que auxilia na avaliação cardíaca do paciente."
  },
  {
    id: 6,
    name: "Mamografia",
    key: "mamografia",
    description:
      "A mamografia é uma espécie de raio-x das mamas. É um exame simples, mas muito importante para ajudar no diagnóstico precoce do câncer de mama.",
    icon: "mamografia.svg",
    slug: "mamografia",
    class: "bg-blue-2",
    preparacao:
      "Não utilizar desodorantes ou produtos na região ou próxima dela.",
    duracao: "15 minutos (em média).",
    variacoes: [],
    image: "mamografia-final.jpeg",
    entenda:
      "Exame principal e mais indicado para detecção do câncer de mama. Pode colaborar no diagnóstico precoce e tratamento eficaz. Saiba mais.",
    oque:
      "Seu objetivo principal é rastrear o câncer de mama. O exame é capaz de detectar nódulos nos seios antes mesmo de eles serem palpáveis. Geralmente, para confirmar o diagnóstico, é preciso realizar uma biópsia, que identifica se o tumor é maligno ou benigno e outras características mais específicas. Mulheres a partir dos 40 anos são indicadas a realizar o exame anualmente. Consulte um médico."
  },
  {
    id: 7,
    name: "Radiografia",
    key: "raio-x",
    description:
      "O exame de raio-x ou radiografia é um exame solicitado frequentemente para investigar fraturas, problemas pulmonares e outras condições. Conheça os cuidados.",

    icon: "raiox.svg",
    slug: "raio-x",
    class: "bg-blue-3",
    preparacao: "Varia de acordo com a área a ser analisada.",
    duracao: "10 minutos (em média).",
    oque:
      "O exame de raio-x ou radiografia é um exame de imagem não invasivo muito popular, que ajuda no diagnóstico de fraturas e doenças. Com o uso de radiação, atravessa órgãos e tecidos e cria imagens da região de interesse.",
    variacoes: [],
    image: "raiox-final.png",
    entenda:
      "É frequentemente requisitado em casos de quedas, para mostrar se houve alguma fratura, ou para investigar doenças diversas, principalmente gástricas e pulmonares."
  },
  {
    id: 8,
    name: "Ressonância Magnética de Alto Campo",
    key: "ressonancia",
    description:
      "Exame de alta tecnologia captura imagens em alta definição de órgãos e tecidos. Saiba mais...",
    oque:
      "A ressonância é um exame com múltiplas utilidades. Por capturar imagens com detalhes e em alta definição, pode ser usado para analisar suspeitas e condições muito diversas, como esclerose múltipla, tumor cerebral, tumor nas mamas, coágulos, hérnia de disco, lesões nas articulações, tendinites, alterações no fígado, acidente vascular cerebral (AVC) em estágio inicial, traumas, entre outras.",

    icon: "ressonancia.svg",
    slug: "ressonancia",
    class: "bg-green-1",
    preparacao:
      "Jejum absoluto de 4 horas, dependendo da área a ser analisada.",
    duracao: "15 a 40 minutos (em média).",
    variacoes: [],
    image: "ressonancia.png",
    entenda:
      "A Ressonância Magnética é um exame indolor, que reproduz imagens de alta resolução e clareza, em três dimensões (3D), de qualquer parte do corpo."
  },
  {
    id: 9,
    name: "Tomografia Computadorizada Multslice",
    key: "tomografia",
    description:
      "Exame de tomografia computadorizada gera imagens com alto nível de detalhes e é muito usado para identificar nódulos e tumores.",

    icon: "tomografia.svg",
    slug: "tomografia",
    class: "bg-green-2",
    preparacao: "Varia de acordo com o tipo e a região que será examinada.",
    duracao: "15 minutos (em média).",
    variacoes: [
      {
        id: 1,
        name: "Tomografia Computadorizada",
        key: "tomografia-computadorizada",
        description:
        "Exame de tomografia computadorizada gera imagens com alto nível de detalhes e é muito usado para identificar nódulos e tumores.",
        icon: "",
        preparacao: "Varia de acordo com o tipo e a região que será examinada.",
        duracao: "15 minutos (em média)",
        image: "tomografia-final.jpeg",
        oque:
        "Exame de tomografia computadorizada gera imagens com alto nível de detalhes e é muito usado para identificar nódulos e tumores."
      },
      {
        id: 2,
        name: "Angiotomografia",
        key: "angiotomografia",
        description:
        "Exame de tomografia computadorizada gera imagens com alto nível de detalhes e é muito usado para identificar nódulos e tumores.",
        icon: "",
        preparacao: "Varia de acordo com o tipo e a região que será examinada.",
        duracao: "15 minutos (em média)",
        image: "tomografia-final.jpeg",
        oque:
        "A angiotomografia ajuda a investigar e identificar alterações na estrutura e no funcionamento dos vasos sanguíneos, de forma não invasiva. Com ela, é possível diagnosticar doenças e outras condições que afetam o sistema circulatório, como obstruções de veias e artérias, ou aneurismas."
      },
      {
        id: 3,
        name: "Enterotomografia",
        key: "enterotomografia",
        description:
        "Exame de tomografia computadorizada gera imagens com alto nível de detalhes e é muito usado para identificar nódulos e tumores.",
        icon: "",
        preparacao: "Varia de acordo com o tipo e a região que será examinada.",
        duracao: "15 minutos (em média)",
        image: "tomografia-final.jpeg",
        oque:
        "A enterotomografia ou enterografia por Tomografia Computadorizada, é um exame que estuda o intestino delgado, permitindo diagnóstico de diversas doenças que afetam este órgão, como a Doença de Crohn. Ela se assemelha-se à tomografia computadorizada tradicional com contraste."
      }

    ],
    oque:
      "A tomografia pode focalizar especificamente na parte do corpo que precisa ser investigada, como cérebro, ossos, fígado, etc. Um dos usos mais frequentes é na identificação de tumores, já que o detalhamento das imagens permite detectar mesmo nódulos bem pequenos. Também auxilia na detecção de problemas graves como acidente vascular cerebral (AVC), aneurismas, embolia pulmonar, edema cerebral, derrame pleural, peritoneal ou cardíaco, além de ser utilizada em casos de traumas, podendo identificar ferimentos, fraturas ou hemorragias.",
    image: "tomografia-final.jpeg",
    entenda:
      "Exame não invasivo de diagnóstico que, com imagens geradas via radiação e produzidas por computador, permite a visualização de órgãos, estruturas e tecidos de forma detalhada."
  },
  {
    id: 10,
    name: "Ultrassonografia",
    key: "ultrassonografia",
    description:
      "A ultrassonografia constitui uma modalidade de exame de imagem sem a utilização da radiação, constituindo um exame inócuo para os pacientes e praticamente sem contraindicações.",
    icon: "ultrassonografia.svg",
    slug: "ultrassonografia",
    class: "bg-green-3",
    preparacao: "Conforme a região do corpo. Consulte com antecedência",
    duracao: "15 minutos (em média)",
    oque:
      "A ultrassonografia é um exame por imagem sem a utilização de radiação, constituindo um exame não prejudicial para os pacientes e não possui contraindicações. Com isso, podemos perceber que a ultrassonografia é o principal meio de visualização interna e por isso, um dos exames por imagem mais solicitados por médicos.",
    variacoes: [
      {
        id: 1,
        name: "Ultrassonografia Geral",
        key: "ultrassonografica-geral",
        description:
          "A ultrassonografia é um exame por imagem sem a utilização de radiação,constituindo um exame não prejudicial para os pacientes e não possui contraindicações. Com isso, podemos perceber que a ultrassonografia é o principal meio de visualização interna e por isso, um dos exames por imagem maissolicitados por médicos.",
        icon: "",
        preparacao: "Conforme a região do corpo. Consulte com antecedência",
        duracao: "15 minutos (em média)",
        image: "ultrassom.png",
        oque:
          "A ultrassonografia é um exame por imagem sem a utilização de radiação, constituindo um exame não prejudicial para os pacientes e não possui contraindicações. Com isso, podemos perceber que a ultrassonografia é o principal meio de visualização interna e por isso, um dos exames por imagem mais solicitados por médicos."
      },
      {
        id: 2,
        name: "Ultrassonografia com Doppler",
        key: "ultrassonografica-com-doppler",
        description:
          "O ultrassom com Doppler, ecografia com Doppler ou ecodoppler colorido, é muito similar ao ultrassom comum: ondas sonoras são emitidas diretamente nos órgãos e tecidos internos do corpo e os ecos produzidos nesse encontro geram imagens em tempo real, que podem ser acompanhadas pelo profissional e paciente. Ao permitir a visualização dessas imagens em movimento, o efeito Doppler é capaz de avaliar o fluxo sanguíneo em áreas e órgãos específicos do corpo.",
        preparacao: "Conforme a região do corpo. Consulte com antecedência",
        duracao: "15 minutos (em média)",
        image: "ultrassom.png",
        oque:
          "O ultrassom com Doppler, ecografia com Doppler ou ecodoppler colorido, é muito similar ao ultrassom comum: ondas sonoras são emitidas diretamente nos órgãos e tecidos internos do corpo e os ecos produzidos nesse encontro geram imagens em tempo real, que podem ser acompanhadas pelo profissional e paciente. Ao permitir a visualização dessas imagens em movimento, o efeito Doppler é capaz de avaliar o fluxo sanguíneo em áreas e órgãos específicos do corpo."
      },
      {
        id: 3,
        name: "Ultrassonografia da Face",
        key: "ultrassonografica-da-face",
        description:
          "O ultrassom com Doppler, ecografia com Doppler ou ecodoppler colorido, é muito similar ao ultrassom comum: ondas sonoras são emitidas diretamente nos órgãos e tecidos internos do corpo e os ecos produzidos nesse encontro geram imagens em tempo real, que podem ser acompanhadas pelo profissional e paciente. Ao permitir a visualização dessas imagens em movimento, o efeito Doppler é capaz de avaliar o fluxo sanguíneo em áreas e órgãos específicos do corpo.",
        preparacao: "Não é necessário preparo prévio.",
        duracao: "15 minutos (em média)",
        image: "ultrassom.png",
        oque:
          "O ultrassom da face pode auxiliar em procedimentos odontológicos, assim como estéticos, para localização de materiais preenchedores."
      }
    ],
    image: "ultrassom.png",
    entenda:
      "A ultrassonografia auxilia na detecção de doenças e/ou variações anatômicas com base na forma, tamanho e textura das estruturas (órgãos) que são avaliados."
  },

  // {
  //   id: 10,
  //   name: "Ultrassonografia endovaginal",
  //   key: "ultrassonografia-endovaginal",
  //   icon: "",
  //   slug: "ultrassonografia-endovaginal",
  //   class: "bg-green-3",
  //   preparacao: "a paciente deve estar com bexiga vazia.",
  //   duracao: "15 a 20 minutos",
  //   decription: "A ultrassonografia <b>endovaginal</b> ou <b>transvaginal</b> é um exame diagnóstico muito utilizado por ginecologistas e obstetras, que consiste na inserção de um aparelho chamado transdutor na vagina, que vai gerar imagens dos órgãos internos daquela",
  //   oque: "A ultrassonografia <b>endovaginal</b> ou <b>transvaginal</b> é um exame diagnóstico muito utilizado por ginecologistas e obstetras, que consiste na inserção de um aparelho chamado transdutor na vagina, que vai gerar imagens dos órgãos internos daquela"
  // }
];

export default exam;
