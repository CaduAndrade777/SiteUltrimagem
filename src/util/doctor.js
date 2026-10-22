const doctor =
[
  {
    id: 1,
    img: "angela.jpg",
    name: "Dra. Angela Lopardi Nicolato",
    specialty: "• Médica pela Universidade Federal de Juiz de Fora (UFJF). \n• ⁠Cirurgiã geral pelo Hospital Júlia Kubistchek (FHEMIG). \n • Mastologista pela Santa Casa de Misericórdia de Belo Horizonte. \n • ⁠Membro Titular da Sociedade Brasileira de Mastologia.",
  },
  {
    id: 2,
    img: "bianca.jpg",
    name: "Dra. Bianca Lacerda Demuner",
    specialty: "• Pediatria (HEINSG) Vitória-ES. \n• Especialista em Pediatria - SBP. \n• Cardiologia Pediátrica (Biocor Instituto -BH). \n• Ecocardiografia Pediátrica (Biocor Instituto - BH). \n• Ecocardiografia Fetal (Instituto Ecokids - Lilian Lopes - SP)."
  },
  { id: 3,
    img: "camila (2).jpg",
    name: "Dra. Camila Ribeiro Mota Reskalla",
    specialty: "• Residência Médica em Ginecologia e Obstetrícia, com título de especialista pelo Hospital Sofia Feldman. \n• Residência Médica em Ultrassom em Ginecologia e Obstetrícia, com título de especialista pelo Hospital das Clínicas da UFMG. \n• Pós-graduação em Medicina Fetal, CETRUS-SP. \n • Pós-graduanda em Ecocardiografia Fetal, Instituto Dra. Lílian Lopes."
  },
  {
    id: 4,
    img: "caroline.jpg",
    name: "Dra. Caroline Laurita Batista Couto Villela",
    specialty: "• Medicina - Faculdade de Medicina de Barbacena (MG).\n• Residência em Clínica Médica - Hospital Universitário São José, FELUMA (Belo Horizonte).\n• Especialização em Radiologia e Diagnóstico por Imagem - Santa Casa de Misericórdia do Rio de Janeiro, PUC-Rio. \n• Subespecialização em Ressonância Magnética - Hospital Materdei, FELUMA (Belo Horizonte)."

  },
  {
    id: 5,
    img: "celio.jpg",
    name: "Dr. Célio Corrêa Mendonça",
    specialty: "• Medicina pela Universidade Federal de Juiz de Fora.\n• Residência Médica em Radiologia e Diagnóstico por Imagem."

  },
  {
    id: 6,
    img: "flavia.jpg",
    name: "Dra. Flavia De Battisti Vidigal",
    specialty: "• Medicina pela UNIG - Itaperuna.\n• Especialização em Cardiologia no Hospital Mater Dei de Belo Horizonte. \n • Especialização em Ecocardiograma pelo Instituto Hermes Pardini em Belo Horizonte. "
  },
  {
    id: 7,
    img: "kessia.jpg",
    name: "Dra. Késsia Mendes dos Santos",
    specialty: "• Medicina pela Faculdade de Ciências Médicas e da Saúde de Juiz de Fora (Suprema). \n • Residência de cirurgia geral pelo Hospital Santa Isabel. \n •Especialização pelo centro de Medicina Nuclear da Guanabara (Hermes Pardini) no Rio de Janeiro. \n • Especialização R4 pelo Bronstein/DASA no Rio de Janeiro. "
  },
  {
    id: 8,
    img: "marcella.jpg",
    name: "Dra. Marcella de Lucca Carneiro",
    specialty: "• Faculdade de Medicina de Petrópolis – RJ. \n • Residência em Radiologia e Diagnóstico por Imagem no Hospital Federal Cardoso Fontes. \n • R3 em Tomografia no Hospital Quinta D’Or. \n • R4 em Ressonância Magnética no CDPI MDX. \n• Título de especialista pelo Colégio Brasileiro de Radiologia."

  },
  {
    id: 9,
    img: "marcio.jpg",
    name: "Dr. Márcio Luiz Rinaldi",
    specialty: "• Medicina pela Universidade Federal de Juiz de Fora. \n • Residência pelo Instituto Estadual de Radiologia – RJ (IERMN).\n • Pós-graduação pela Universidade de São Paulo (USP).\n • Membro titular do Colégio Brasileiro de Radiologia. \n • Médico Radiologista e ultrassonografista geral. \n•  Professor de Medicina na área de Radiologia do Centro Universitário UNIFAGOC."

  },
  {
    id: 10,
    img: "matheus.jpg",
    name: "Dr. Matheus Costa Cabral",
    specialty: "• Medicina pelo Centro Universitário Governador Ozanam Coelho. \n • Residência em Radiologia e Diagnóstico por imagem pelo Hospital do Câncer de Muriaé - Fundação Cristiano Varella. \n • Membro Titular do Colégio Brasileiro de Radiologia."
  },
   {
    id: 11,
    img: "priscilla.png",
    name: "Dra. Priscilla Pinho Coelho",
    specialty: "• Medicina pela Faculdade de Medicina de Petrópolis. \n • Especialista em Radiologia e Diagnóstico por Imagem pela Associação Médica Brasileira e Colégio Brasileiro de Radiologia. \n • R4 - Clínica de Diagnóstico por Imagem (CDPI), no Rio de Janeiro.\n • Radiologia Mamária pelo Instituto Nacional do Câncer (INCA)."
  },

  {
    id: 12,
    img: "rafael.jpg",
    name: "Dr. Rafael Couto Marques",
    specialty: "• Medicina pela Universidade Federal de Juiz de Fora - UFJF \n • ⁠Residência em Radiologia e Diagnóstico por Imagem no Hospital Geral de Bonsucesso - SUS - RJ. \n • R4 em RM pelo Centro de Diagnósticos Avançados Renaud Scan (CDA). \n • Título de Especialista em Radiologia e Diagnóstico por Imagem pelo Colégio Brasileiro de Radiologia - CBR."
  },
  
  {
    id: 13,
    img: "thais.png",
    name: "Dra. Thais Parma Teixeira",
    specialty: "• Medicina pela Faculdade de Medicina de Barbacena. \n • Ginecologista e Obstetra pelo hospital e maternidade Therezinha de Jesus de Juiz de Fora. \n • Mastologista pelo hospital Vila Nova Cachoeirinha de São Paulo. \n • Pós-graduada em imagem de mama pela Cetrus São Paulo"
  },
  {
    id: 14,
    img: "vinicius.jpg",
    name: "Dr. Vinícius Magaton Lima",
    specialty: "• Medicina pela Universidade Federal de Juiz de Fora (UFJF). \n • Residência de Clínica Médica pela Santa Casa de Misericórdia de Juiz de Fora. \n • Residência de Cardiologia e Ecocardiografia pela Universidade Federal de São Paulo (UNIFESP). \n • Residência em Cardiologia, Ecocardiografia e Imagem Cardíaca pela Universidade Federal de São Paulo (Unifesp) \n • Mestre em Cardiologia pela Universidade Federal de São Paulo (Unifesp)."
  },
  {
    id: 15,
    img: "yasmine.jpg",
    name: "Dra. Yasmine Zopelar Montanha",
    specialty: "• Formada em Medicina pela UNiGRANRIO - RJ. \n • Especialização em Ultrassonografia Geral pela CETRUS - Centro de Ensino Médico - SP."

  }


];

export default doctor;
