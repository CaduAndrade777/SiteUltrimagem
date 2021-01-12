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
    regioes: "Abdomen",
    variacoes: [
      {
        id: 1,
        name: "Core biópsia de mama",
        key: "core-biópsia-de-mama",
        description: "Uma biópsia guiada por imagem tem como objetivo fornecer informações de diagnóstico através da obtenção de uma amostra de tecido usando imagens para navegar até o local de interesse.",
        icon: "",
        preparacao: "Abdomen",
        regioes: "Abdomen",
      },
      {
        id: 2,
        name: "Biópsia de mama guiada por Ultrasson",
        key: "biopsia-de-mama-guiada-por-ultrasson",
        description: "Uma biópsia guiada por imagem tem como objetivo fornecer informações de diagnóstico através da obtenção de uma amostra de tecido usando imagens para navegar até o local de interesse.",
        image: "",
        preparacao: "Abdomen",
        regioes: "Abdomen",
      },
      {
        id: 3,
        name: "Biópsia de tireóide",
        key: "biopsia-de-tireóide",
        description: "Uma biópsia guiada por imagem tem como objetivo fornecer informações de diagnóstico através da obtenção de uma amostra de tecido usando imagens para navegar até o local de interesse.",
        image: "",
        preparacao: "Abdomen",
        regioes: "Abdomen",
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
    preparacao: "Abdomen",
    regioes: "Abdomen",
    variacoes: [],
    entenda: "A ultrassonografia auxilia na detecção de doenças e/ou variações anatômicas com base na forma, tamanho e textura das estruturas (órgãos) que são avaliados.",
  },
  {
    id: 3,
    name: "Ecocardiografia",
    key: "ecocardiografia",
    description:
      "Ecocardiografia usa ondas sonoras para formar imagens do coração, suas válvulas e outras estruturas. Conheça o preparo e como é realizado.", 
    icon: "ecocardiografia.svg",
    slug: "ecocardiografia",
    class: "bg-green-3",
    preparacao: "Abdomen",
    regioes: "Abdomen",
    variacoes: [],
    entenda: "A ultrassonografia auxilia na detecção de doenças e/ou variações anatômicas com base na forma, tamanho e textura das estruturas (órgãos) que são avaliados.",
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
    preparacao: "Abdomen",
    regioes: "Abdomen",
    variacoes: [],
    entenda: "A ultrassonografia auxilia na detecção de doenças e/ou variações anatômicas com base na forma, tamanho e textura das estruturas (órgãos) que são avaliados.",
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
    preparacao: "Abdomen",
    regioes: "Abdomen",
    variacoes: [],
    entenda: "A ultrassonografia auxilia na detecção de doenças e/ou variações anatômicas com base na forma, tamanho e textura das estruturas (órgãos) que são avaliados.",
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
    preparacao: "Abdomen",
    regioes: "Abdomen",
    variacoes: [],
    entenda: "A ultrassonografia auxilia na detecção de doenças e/ou variações anatômicas com base na forma, tamanho e textura das estruturas (órgãos) que são avaliados.",
  },
  {
    id: 7,
    name: "Ressonância Magnética de Alto Campo",
    key: "ressonancia",
    description:
      "A Ressonância Magnética é um exame que reproduz imagens de alta resolução e clareza, em três dimensões (3D), de qualquer parte do corpo. O exame é totalmente indolor.",
      
      
    icon: "ressonancia.svg",
    slug: "ressonancia",
    class: "bg-green-1",
    preparacao: "Abdomen",
    regioes: "Abdomen",
    variacoes: [],
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
    preparacao: "Abdomen",
    regioes: "Abdomen",
    variacoes: [],
    entenda: "A ultrassonografia auxilia na detecção de doenças e/ou variações anatômicas com base na forma, tamanho e textura das estruturas (órgãos) que são avaliados.",
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
    preparacao: "Abdomen",
    regioes: "Abdomen",
    variacoes: [
      {
        id: 1,
        name: "Ultrassonografia Geral",
        key: "ultrassonografica-geral",
        description: "Uma biópsia guiada por imagem tem como objetivo fornecer informações de diagnóstico através da obtenção de uma amostra de tecido usando imagens para navegar até o local de interesse.",
        icon: "",
        preparacao: "Abdomen",
        regioes: "Abdomen",
      },
      {
        id: 2,
        name: "Ultrassonografia com Doppler",
        key: "ultrassonografica-com-doppler",
        description: "Uma biópsia guiada por imagem tem como objetivo fornecer informações de diagnóstico através da obtenção de uma amostra de tecido usando imagens para navegar até o local de interesse.",
        image: "",
        preparacao: "Abdomen",
        regioes: "Abdomen",
      }
    ],
    entenda: "A ultrassonografia auxilia na detecção de doenças e/ou variações anatômicas com base na forma, tamanho e textura das estruturas (órgãos) que são avaliados.",
  }
];

export default exam;
