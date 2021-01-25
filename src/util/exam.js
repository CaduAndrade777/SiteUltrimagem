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
    image: "biopsia.png",
    oque: "",
    variacoes: [
      {
        id: 1,
        name: "Core biópsia de mama",
        key: "core-biópsia-de-mama",
        description: "Uma biópsia guiada por imagem tem como objetivo fornecer informações de diagnóstico através da obtenção de uma amostra de tecido usando imagens para navegar até o local de interesse.",
        icon: "",
        preparacao: "Abdomen",
        duracao: "Abdomen",
        image: "biopsia.png",
        oque: "",
      },
      {
        id: 2,
        name: "Biópsia de mama guiada por Ultrasson",
        key: "biopsia-de-mama-guiada-por-ultrasson",
        description: "Uma biópsia guiada por imagem tem como objetivo fornecer informações de diagnóstico através da obtenção de uma amostra de tecido usando imagens para navegar até o local de interesse.",
        image: "",
        preparacao: "Abdomen",
        duracao: "Abdomen",
        image: "biopsia.png",
        oque: "",
      },
      {
        id: 3,
        name: "Biópsia de tireóide",
        key: "biopsia-de-tireóide",
        description: "Uma biópsia guiada por imagem tem como objetivo fornecer informações de diagnóstico através da obtenção de uma amostra de tecido usando imagens para navegar até o local de interesse.",
        image: "",
        preparacao: "Abdomen",
        duracao: "Abdomen",
        image: "biopsia.png",
        oque: "",
      },
    ],
    entenda: "A ultrassonografia auxilia na detecção de doenças e/ou variações anatômicas com base na forma, tamanho e textura das estruturas (órgãos) que são avaliados.",
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
    preparacao: "não é indicado o uso de colares, jóias, pulseiras ou itens de ferro.",
    duracao: "15 minutos (em média).",
    variacoes: [],
    image: "densitometria.png",
    entenda: "A densitometria óssea é usada para analisar possíveis perdas de massa óssea que podem indicar osteopenia ou osteoporose.",
    oque: "Utilizado para avaliar se o paciente tem osteopenia (perda de massa óssea que pode indicar predisposição à osteoporose) ou então osteoporose (doença caracterizada pela diminuição progressiva da densidade óssea e aumento do risco de fraturas). A grande vantagem do exame é a capacidade de detectar a perdamineral em um estágio inicial, quando ainda não pode ser visualizada pelo raio X."
    
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
    preparacao: "tirar objetos metálicos",
    duracao: "20 minutos (em média).",
    variacoes: [],
    oque: "A ecocardiografia ou ecocardiograma é um exame de ultrassonografia do coração que fornece imagens obtidas através do som. Através dessas imagens, o médico especialista pode analisar se o órgão está batendo normalmente, se o fluxo sanguíneo está adequado, diagnosticar doenças que afetam sua anatomia e fisiologia, como insuficiências e malformações cardíacas. Esse exame não oferece risco para o paciente e é uma ferramenta essencial para a cardiologia moderna.",
    image: "ecocardiograma.png",
    description: "A ecocardiografia é um estudo anatômico dinâmico do coração, incluindo suas válvulas, padrão de contração, dimensões, inferindo diversos dados hemodinâmicos.",
    
  },
  {
    id: 4,
    name: "Eletrocardiograma",
    key: "eletrocardiograma",
    description:
      "O eletrocardiograma é um exame simples e não invasivo que ajuda o cardiologista a avaliar como está o nosso coração.",
    icon: "eletrocardiograma.svg",
    slug: "eletrocardiografia",
    class: "bg-blue-1",
    preparacao: "não é necessário preparo prévio.",
    duracao: "após a colocação dos eletrodos, dura cerca de 5 minutos.",
    variacoes: [],
    oque: "O exame fornece a representação gráfica da atividade elétrica do coração. Por meio dele, é possível observar principalmente se o ritmo de batimentos cardíacos está normal ou não e se as câmaras do coração estão se movimentando como deveriam. Assim, ele é muito útil para identificar arritmias, possíveis obstruções no fluxo sanguíneo e avaliar se o paciente está em boas condições para praticar exercícios físicos.",
    
  
    image: "eletrocardiograma.png",
    entenda: "O eletrocardiograma é um exame simples e não invasivo que ajuda o cardiologista a avaliar como está o nosso coração.",
  },
  {
    id: 5,
    name: "Mamografia",
    key: "mamografia",
    description:
      "A mamografia é uma espécie de raios X das mamas. É um exame simples, mas muito importante para ajudar no diagnóstico precoce do câncer de mama.",
    icon: "mamografia.svg",
    slug: "mamografia",
    class: "bg-blue-2",
    preparacao: "não utilizar desodorantes ou produtos na região ou próxima dela.",
    duracao: "15 minutos (em média).",
    variacoes: [],
    image: "mamografia.png",
    entenda: "Exame principal e mais indicado para detecção do câncer de mama. Pode colaborar no diagnóstico precoce e tratamento eficaz. Saiba mais.",
    oque: "Seu objetivo principal é rastrear o câncer de mama. O exame é capaz de detectar nódulos nos seios antes mesmo de eles serem palpáveis. Geralmente, para confirmar o diagnóstico, é preciso realizar uma biópsia, que identifica se o tumor é maligno ou benigno e outras características mais específicas. Mulheres a partir dos 40 anos são indicadas a realizar o exame anualmente. Consulte um médico."
    
  
  },
  {
    id: 6,
    name: "Radiografia",
    key: "raio-x",
    description:
      "O exame de raio X ou radiografia é um exame solicitado frequentemente para investigar fraturas, problemas pulmonares e outras condições. Conheça os cuidados.",
      
    icon: "raiox.svg",
    slug: "raio-x",
    class: "bg-blue-3",
    preparacao: "varia de acordo com a área a ser analisada.",
    duracao: "10 minutos (em média).",
    oque: "O exame de raio X ou radiografia é um exame de imagem não invasivo muito popular, que ajuda no diagnóstico de fraturas e doenças. Com o uso de radiação, atravessa órgãos e tecidos e cria imagens da região de interesse.",
    variacoes: [],
    image: "raiox.png",
    entenda: "É frequentemente requisitado em casos de quedas, para mostrar se houve alguma fratura, ou para investigar doenças diversas, principalmente gástricas e pulmonares.",
    
  },
  {
    id: 7,
    name: "Ressonância Magnética de Alto Campo",
    key: "ressonancia",
    description:
      "A Ressonância Magnética é um exame que reproduz imagens de alta resolução e clareza, em três dimensões (3D), de qualquer parte do corpo. O exame é totalmente indolor.",  
    oque: "A ressonância é um exame com múltiplas utilidades. Por capturar imagens com detalhes e em alta definição, pode ser usado para analisar suspeitas e condições muito diversas, como esclerose múltipla, tumor cerebral, tumor nas mamas, coágulos, hérnia de disco, lesões nas articulações, tendinites, alterações no fígado, acidente vascular cerebral (AVC) em estágio inicial, traumas, entre outras.",  
    
    icon: "ressonancia.svg",
    slug: "ressonancia",
    class: "bg-green-1",
    preparacao: "jejum absoluto de 4 horas, dependendo da área a ser analisada.",
    duracao: "15 a 40 minutos (em média).",
    variacoes: [],
    image: "ressonancia.png",
    entenda: "A ultrassonografia auxilia na detecção de doenças e/ou variações anatômicas com base na forma, tamanho e textura das estruturas (órgãos) que são avaliados.",
  },
  {
    id: 8,
    name: "Tomografia Computadorizada Multslice",
    key: "tomografia",
    description:
      "Exame de tomografia computadorizada gera imagens com alto nível de detalhes e é muito usado para identificar nódulos e tumores.",
      
    icon: "tomografia.svg",
    slug: "tomografia",
    class: "bg-green-2",
    preparacao: "varia de acordo com o tipo e a região que será examinada.",
    duracao: "15 minutos (em média).",
    variacoes: [],
    oque: "A tomografia pode focalizar especificamente na parte do corpo que precisa ser investigada, como cérebro, ossos, fígado, etc. Um dos usos mais frequentes é na identificação de tumores, já que o detalhamento das imagens permite detectar mesmo nódulos bem pequenos. Também auxilia na detecção de problemas graves como acidente vascular cerebral (AVC), aneurismas, embolia pulmonar, edema cerebral, derrame pleural, peritoneal ou cardíaco, além de ser utilizada em casos de traumas, podendo identificar ferimentos, fraturas ou hemorragias.",
    image: "tomografia.png",
    entenda: "Exame não invasivo de diagnóstico que, com imagens geradas via radiação e produzidas por computador, permite a visualização de órgãos, estruturas e tecidos de forma detalhada.",
    
  },
  {
    id: 9,
    name: "Ultrassonografia",
    key: "ultrassonografia",
    description:
      "A ultrassonografia constitui uma modalidade de exame de imagem sem a utilização da radiação, constituindo um exame inócuo para os pacientes e praticamente sem contraindicações.",
    icon: "ultrassonografia.svg",
    slug: "ultrassonografia",
    class: "bg-green-3",
    preparacao: "conforme a região do corpo. Consulte com antecedência",
    duracao: "15 minutos (em média)",
    oque: "A ultrassonografia é um exame por imagem sem a utilização de radiação, constituindo um exame não prejudicial para os pacientes e não possui contraindicações. Com isso, podemos perceber que a ultrassonografia é o principal meio de visualização interna e por isso, um dos exames por imagem mais solicitados por médicos.",
    variacoes: [
      {
        id: 1,
        name: "Ultrassonografia Geral",
        key: "ultrassonografica-geral",
        description: "A ultrassonografia é um exame por imagem sem a utilização de radiação,constituindo um exame não prejudicial para os pacientes e não possui contraindicações. Com isso, podemos perceber que a ultrassonografia é o principal meio de visualização interna e por isso, um dos exames por imagem maissolicitados por médicos.",
        icon: "",
        preparacao: "conforme a região do corpo. Consulte com antecedência",
        duracao: "15 minutos (em média)",
        image: "ultrassom.png",
        oque: "A ultrassonografia é um exame por imagem sem a utilização de radiação, constituindo um exame não prejudicial para os pacientes e não possui contraindicações. Com isso, podemos perceber que a ultrassonografia é o principal meio de visualização interna e por isso, um dos exames por imagem mais solicitados por médicos.",
      },
      {
        id: 2,
        name: "Ultrassonografia com Doppler",
        key: "ultrassonografica-com-doppler",
        description: "O ultrassom com Doppler, ecografia com Doppler ou ecodoppler colorido, é muito similar ao ultrassom comum: ondas sonoras são emitidas diretamente nos órgãos e tecidos internos do corpo e os ecos produzidos nesse encontro geram imagens em tempo real, que podem ser acompanhadas pelo profissional e paciente. Ao permitir a visualização dessas imagens em movimento, o efeito Doppler é capaz de avaliar o fluxo sanguíneo em áreas e órgãos específicos do corpo.",
        preparacao: "conforme a região do corpo. Consulte com antecedência",
        duracao: "15 minutos (em média)",
        image: "ultrassom.png",
        oque: "O ultrassom com Doppler, ecografia com Doppler ou ecodoppler colorido, é muito similar ao ultrassom comum: ondas sonoras são emitidas diretamente nos órgãos e tecidos internos do corpo e os ecos produzidos nesse encontro geram imagens em tempo real, que podem ser acompanhadas pelo profissional e paciente. Ao permitir a visualização dessas imagens em movimento, o efeito Doppler é capaz de avaliar o fluxo sanguíneo em áreas e órgãos específicos do corpo.",
      
      }
    ],
    image: "ultrassom.png",
    entenda: "A ultrassonografia auxilia na detecção de doenças e/ou variações anatômicas com base na forma, tamanho e textura das estruturas (órgãos) que são avaliados.",
  }
];

export default exam;
