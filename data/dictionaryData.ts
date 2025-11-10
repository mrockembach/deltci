import React from 'react';
import { DictionaryEntry } from '../types.ts';

// FIX: Converted JSX to React.createElement calls to be compatible with a .ts file.
// The ideal solution is to rename this file to .tsx, but this change is made
// to adhere to the project constraints.
export const dictionaryData: DictionaryEntry[] = [
  {
    term: 'Amnésia digital',
    definition: React.createElement(React.Fragment, null,
      React.createElement("p", null, "A amnésia digital, entendida como \"demência\", pode ser analisada dentro da Ciência da Informação sob várias perspectivas, especialmente relacionadas ao armazenamento, recuperação e processamento da informação. A amnésia digital, que ocorre quando as pessoas confiam em dispositivos eletrônicos em vez de memorizar informações, pode ser vista como um problema de externalização da memória (Kanbay et al., 2025). Isso impacta o comportamento informacional, pois a forma como os dados são armazenados digitalmente pode influenciar a maneira como os usuários recuperam e processam conhecimentos."),
      React.createElement("p", { className: "mt-4" }, "Se as pessoas confiam cada vez mais em dispositivos para armazenar informações (e não na memória biológica), surge um novo desafio na Ciência da Informação: como garantir a preservação desses dados de forma confiável e a longo prazo? Isso envolve questões de arquivamento digital, obsolescência tecnológica e gestão de dados pessoais."),
      React.createElement("p", { className: "mt-4" }, "A facilidade de acesso a dados online pode levar à superficialidade na aprendizagem, pois os usuários tendem a memorizar menos e depender mais de buscas rápidas. No campo da Ciência da Informação, isso está ligado à literacia informacional, ou seja, à capacidade de avaliar criticamente a informação disponível na internet e utilizá-la de maneira eficaz."),
      React.createElement("p", { className: "mt-4" }, "A sobrecarga informacional (information overload) também está relacionada à amnésia digital, pois com acesso ilimitado a dados, muitas pessoas enfrentam dificuldades para filtrar, organizar e reter informações relevantes, o que pode impactar a tomada de decisões, o aprendizado contínuo e risco de doenças degenerativas (Manwell, et al, 2022). O termo \"brain rot\", que foi nomeado a palavra do ano pelo dicionário Oxford em 2024, se relaciona ao consumo de conteúdo de baixa qualidade e efeitos cognitivos negativos advindos deste consumo excessivo."),
      React.createElement("p", { className: "mt-4" }, "A Ciência da Informação também estuda como algoritmos e inteligência artificial personalizam o acesso à informação, deste modo a amnésia digital pode ser agravada quando as pessoas confiam excessivamente em mecanismos de recomendação e deixam de desenvolver habilidades de busca ativa e pensamento crítico.")
    ),
    seeAlso: React.createElement("p", null, "Hipermnésia, Comportamento informacional, Literacia da Informação e Infocomunicação"),
    references: React.createElement(React.Fragment, null,
      React.createElement("p", null,
        "Kanbay, Y., Babaoğlu, E., Yalçıntürk, A. A., & Akçam, A. Digital Amnesia: The Erosion of Memory. ",
        React.createElement("i", { className: "font-serif" }, "Psikiyatride Güncel Yaklaşımlar"),
        ", ",
        React.createElement("i", { className: "font-serif" }, "17"),
        "(3), 544-553."
      ),
      React.createElement("p", null,
        "Manwell, L. A., Tadros, M., Ciccarelli, T. M., & Eikelboom, R. (2022). Digital dementia in the internet generation: excessive screen time during brain development will increase the risk of Alzheimer's disease and related dementias in adulthood. ",
        React.createElement("i", { className: "font-serif" }, "Journal of integrative neuroscience"),
        ", ",
        React.createElement("i", { className: "font-serif" }, "21"),
        "(1), 28."
      ),
      React.createElement("p", null, "Oxford University Press. (2024.). Word of the year. Recuperado em 11 de março de 2025, de https://corp.oup.com/word-of-the-year/")
    ),
  },
  {
    term: 'Análise de Domínio',
    definition: React.createElement(React.Fragment, null,
      React.createElement("p", null,
        "Conceito usado na área da engenharia de ",
        React.createElement("i", { className: "font-serif" }, "software"),
        ", desde os anos 80, para designar ",
        React.createElement("i", { className: "font-serif" }, "um processo pelo qual a informação utilizada no desenvolvimento de sistemas de software é identificada, capturada e organizada com o objetivo de torná-la reutilizável na criação de novos sistemas"),
        " (Prieto-Díaz, 1990, p. 47). Na Ciência da Informação, o conceito foi introduzido com outro significado em 1995, por Birger Hjørland e Hanne Albrechtsen (Hjørland & Albrechtsen, 1995), sendo que, na perspetiva de Rafael Capurro, constitui o quarto paradigma da Ciência da Informação, resultando da fusão do paradigma cognitivo com o social (Capurro, 2003)."
      ),
      React.createElement("p", { className: "mt-4" },
        "Embora haja reservas sobre a consistência epistemológica desta perspetiva, é consensual considerar que a análise de domínio é uma contribuição para a já óbvia associação do ",
        React.createElement("i", { className: "font-serif" }, "conceito de informação a uma fenomenalidade simultaneamente humana (individual) e social (coletiva)"),
        " (Silva, 2006, p. 58). Através deste conceito, Hjørland e Albrechtsen põem em relevo a natureza social da informação, em contraponto a uma visão exclusivamente cognitiva, defendendo que a melhor forma de compreender a informação dentro da Ciência da Informação é através do estudo de ",
        React.createElement("i", { className: "font-serif" }, "domínios de conhecimento como comunidades discursivas ou de pensamento que são partes da divisão do trabalho na sociedade"),
        " (Hjørland & Albrechtsen, 1995, p. 400)."
      ),
      React.createElement("p", { className: "mt-4" },
        "Em 2002, Hjørland sugeriu onze maneiras pelas quais a Ciência da Informação pode abordar um determinado domínio, sendo elas: (1) a produção de guias de literatura e de ",
        React.createElement("i", { className: "font-serif" }, "subject gateways"),
        "; (2) a construção de classificações especializadas e ",
        React.createElement("i", { className: "font-serif" }, "thesauri"),
        "; (3) a indexação e recuperação especializadas; (4) os estudos empíricos de utilizadores; (5) os estudos bibliométricos; (6) os estudos históricos; (7) os estudos de gênero e tipologias documentais (estruturas de informação, arquitetura da informação); (8) os estudos epistemológicos e críticos; (9) os estudos terminológicos e linguagens para propósitos específicos, semântica de base de dados e estudos de discurso; (10) as estruturas e instituições em comunicação científica; e (11) a cognição, conhecimento especializado e Inteligência Artificial (Hjørland, 2002)."
      )
    ),
    seeAlso: React.createElement("p", null, "Ciência da Informação, Organização e representação da informação e Comportamento Informacional"),
    references: React.createElement(React.Fragment, null,
      React.createElement("p", null,
        "Capurro, R. (2003). ",
        React.createElement("i", { className: "font-serif" }, "Epistemologia e ciência da informação"),
        ". Recuperado de ",
        React.createElement("a", { href: "http://www.capurro.de/enancib_p.htm", target: "_blank", rel: "noopener noreferrer", className: "text-blue-600 hover:underline" }, "http://www.capurro.de/enancib_p.htm")
      ),
      React.createElement("p", null,
        "Hjørland, B. (2002). Domain analysis in information science: Eleven approaches—traditional as well as innovative. ",
        React.createElement("i", { className: "font-serif" }, "Journal of Documentation, 58"),
        "(4), 422–462. ",
        React.createElement("a", { href: "https://doi.org/10.1108/00220410210431136", target: "_blank", rel: "noopener noreferrer", className: "text-blue-600 hover:underline" }, "https://doi.org/10.1108/00220410210431136")
      ),
      React.createElement("p", null,
        "Hjørland, B., & Albrechtsen, H. (1995). Toward a new horizon in information science: Domain analysis. ",
        React.createElement("i", { className: "font-serif" }, "Journal of the American Society for Information Science, 46"),
        ", 400–425."
      ),
      React.createElement("p", null,
        "Silva, A. M. da. (2006). ",
        React.createElement("i", { className: "font-serif" }, "A informação: da compreensão do fenômeno e construção do objeto científico"),
        ". Edições Afrontamento."
      )
    ),
  },
  {
    term: 'Arquitetura da Informação',
    definition: React.createElement(React.Fragment, null,
      React.createElement("p", null,
        "No já clássico ",
        React.createElement("i", { className: "font-serif" }, "Dicionário de Informática"),
        " da autoria de Pierre Morvan aparece uma entrada sobre arquitetura e outra sobre \"arquitetura de computadores\" para significar o projeto ou a organização geral de um computador. Porém, se nos focarmos na arquitetura da informação temos de destacar a obra ",
        React.createElement("i", { className: "font-serif" }, "Information Architecture for the World Wide Web"),
        " (1998) dos bibliotecários Rosenfeld e Morville, que conceberam um modelo onde se nota claramente a matriz profissional dos Autores e que apresenta a Arquitetura da Informação na interseção de três esferas: o contexto, o conteúdo e os usuários (Silva e Paletta, 2022: 37)."
      ),
      React.createElement("p", { className: "mt-4" }, "Em Ciência da Informação (trans e interdisciplinar) o \"arranjo de espaços\" (Arquitetura da Informação) e o \"projeto/configuração do artefato\" (Design da Informação), plasmados na construção e funcionalização mediadora das interfaces digitais, convocam obrigatoriamente os princípios \"clássicos\" da Lógica, da Linguística e, em especial, da Organização e Representação da Informação (ou Organização do Conhecimento), ou seja, o processo de descrição de ordenação, de classificação e de recuperação plena do conteúdo.")
    ),
    seeAlso: React.createElement("p", null, "Organização e Representação da Informação/Conhecimento e Comportamento Informacional"),
    references: React.createElement(React.Fragment, null,
      React.createElement("p", null,
        "Camargo, L. S. A. de A., & Vidotti, S. A. B. G. (2011). ",
        React.createElement("i", { className: "font-serif" }, "Arquitetura da informação: Uma abordagem prática para o tratamento de conteúdo e interface em ambientes informacionais digitais"),
        ". LTC."
      ),
      React.createElement("p", null,
        "Rocha, C. C., Pinto, V. B., & David, P. B. (2020). Arquitetura da informação: Revisão integrativa em bases de dados de ciência da informação. ",
        React.createElement("i", { className: "font-serif" }, "Informação & Informação, 25"),
        "(2), 49–73. https://doi.org/10.5433/1981-8920.2020v25n2p49"
      ),
      React.createElement("p", null,
        "Silva, A. M. da, & Paletta, F. C. (2022). ",
        React.createElement("i", { className: "font-serif" }, "Ciência da informação: Estudos de epistemologia e de ética"),
        " (p. 60). Atena Editora."
      )
    ),
  },
  {
    term: 'Arquivística / Arquivologia',
    definition: React.createElement(React.Fragment, null,
      React.createElement("p", null, "O termo Arquivística foi-se impondo ao longo do séc. XX em países como a Itália, a França, Portugal e Espanha, enquanto a Arquivologia se mantém na América do Sul e nos países anglófonos generalizou-se Archival Science. Numa acepção tradicional e simplista é entendida como \"ciência dos Arquivos\", mas a impossibilidade lógica de se produzir ciência sobre o \"instrumental\" levou os Autores da especialidade a deslocar o objeto científico para o \"fundo\", ou seja, para os documentos incorporados no Arquivo."),
      React.createElement("p", { className: "mt-4" },
        "Esta emenda importante abriu caminho a uma abordagem mais radical e profunda, que aqui se assume: disciplina prática ou profissional integrada na Ciência da Informação (trans e interdisciplinar) que incide sobre a produção, organização, fluxo, recuperação e uso, armazenamento e preservação da informação de diferentes tipos (e não apenas administrativa) feita e recebida por organizações públicas e privadas. O seu cariz profissional tem impedido que seus praticantes (docentes e arquivistas) aceitem abrir-se a uma dinâmica transdisciplinar, mantendo-se o mais que podem e usando argumentos epistemológicos o melhor que é possível, num nível de interdisciplinaridade com disciplinas afins – Biblioteconomia, Museologia, Documentação e ",
        React.createElement("i", { className: "font-serif" }, "Information Science"),
        " (de origem norte-americana)."
      )
    ),
    seeAlso: React.createElement("p", null, "Documento de arquivo, Proveniência, Ciência da Informação e Infocomunicação"),
    references: React.createElement(React.Fragment, null,
      React.createElement("p", null,
        "Faria, M. I., & Pericão, M. G. (2008). ",
        React.createElement("i", { className: "font-serif" }, "Dicionário do livro: Da escrita ao livro eletrônico"),
        ". Coimbra: Edições Almedina."
      ),
      React.createElement("p", null,
        "Silva, A. M. da, Ribeiro, F., Ramos, J., & Real, M. L. (1999). ",
        React.createElement("i", { className: "font-serif" }, "Arquivística: Teoria e prática de uma ciência da informação"),
        ". Porto: Edições Afrontamento."
      )
    ),
  },
  {
    term: 'Arquivo',
    definition: React.createElement(React.Fragment, null,
      React.createElement("p", null, "São apenas duas as acepções em que utilmente deve empregar-se: (1) serviço criado organicamente numa determinada entidade e/ou uma instituição cultural (Arquivo de âmbito nacional, distrital ou municipal, público ou privado) destinada a incorporar e tornar acessível informação produzida/recebida por terceiros; e (2) sistema (semi-fechado) de informação produzida/recebida por uma entidade ativa (ou desativada) no decurso da sua atividade em cumprimento dos seus objetivos gerais e específicos, isto é, toda a informação/documentação, nos seus diferentes tipos e registada em diversos suportes, criada, recebida e acumulada por uma pessoa, grupo, instituição ou organização."),
      React.createElement("p", { className: "mt-4" }, "Há outros sentidos associados a este termo, como pasta para guardar documentos ou armário ou ainda depósito onde se coloca a respectiva documentação. Este acúmulo de acepções complica o uso do termo, pelo que deve recomendar-se seu uso apenas quando nos pretendemos referir ao Serviço ou à Instituição Cultural específica mencionada acima.")
    ),
    seeAlso: React.createElement("p", null, "Arquivo Digital, Preservação, Sistema de Informação, Serviços e Recursos de Informação e Repositório"),
    references: React.createElement(React.Fragment, null,
      React.createElement("p", null,
        "Faria, M. I., & Pericão, M. G. (2008). ",
        React.createElement("i", { className: "font-serif" }, "Dicionário do livro: Da escrita ao livro eletrônico"),
        ". Coimbra: Edições Almedina."
      ),
      React.createElement("p", null,
        "López-Yepes, J. (2004). ",
        React.createElement("i", { className: "font-serif" }, "Diccionario enciclopédico de ciencias de la documentación"),
        " (Vol. 1, p. 89). Madrid: Editorial Síntesis."
      )
    ),
  },
  {
    term: 'Arquivo Digital',
    definition: React.createElement(React.Fragment, null,
      React.createElement("p", null,
        "Considerado sinónimo de documento electrónico de arquivo (López Yepes, 2004: 1-89), ou seja, aquele que é gerado, transferido, armazenado e comunicado através de um meio eletrónico e que se materializa como consequência de um determinado processo administrativo sujeito às normas jurídicas em vigor. Há, também, a perspetiva, indelevelmente patrimonialista, em que a par da instituição ou serviço de Arquivo tradicional é aceite a existência de uma instituição ou serviço dotado de orçamento e de recursos tecnológicos e humanos próprios com a vocação de custodiar e de disponibilizar o acesso ",
        React.createElement("i", { className: "font-serif" }, "online"),
        " aos conteúdos digitalizados na íntegra. Em Ciência da Informação é preciso evitar equívocos terminológicos e não cabe confundir arquivo digital com documento/informação administrativa ou técnica produzida por uma entidade, confinando-o à presença digital, através de website ou plataforma das instituições ou serviços arquivísticos existentes. Cabe nesta designação o Arquivo da web (Rockembach & Pavão, 2024), ou seja, o espaço digital de preservação de todos os websites que foram sendo criados e que importa preservar apesar de desativados."
      )
    ),
    seeAlso: React.createElement("p", null, "Sistema de Informação, Repositório, Preservação, Plataforma Digital"),
    references: React.createElement(React.Fragment, null,
      React.createElement("p", null, "López-Yepes, José. Diccionario enciclopédico de ciencias de la documentacion, vol. 1. Madrid: Editorial Síntesis, 2004. ISBN: 84-9756-258-5. P. 89."),
      React.createElement("p", null,
        "Rockembach, M., & Pavão, C. G. (2024). ",
        React.createElement("i", { className: "font-serif" }, "Arquivamento da web e preservação digital"),
        ". Pimenta Cultural. ",
        React.createElement("a", { href: "https://doi.org/10.31560/pimentacultural/2024.98119", target: "_blank", rel: "noopener noreferrer", className: "text-blue-600 hover:underline" }, "https://doi.org/10.31560/pimentacultural/2024.98119")
      ),
      React.createElement("p", null, "Silva, Armando Malheiro da. A Informação: da compreensão do fenómeno à construção do objeto, Porto; Edições Afrontamento; CETAC.COM, 2006, pp.137-167")
    )
  },
  {
    term: 'Artefacto',
    definition: React.createElement(React.Fragment, null,
      React.createElement("p", null, "Dicionarizado como produto da indústria, pode significar, por extensão, todo o produto tridimensional concebido e manufaturado pelo ser humano antes e depois da revolução industrial. Usa-se em Ciência da Informação como sinônimo de documento (em sentido amplo) e complemento de Mentefacto.")
    ),
    seeAlso: React.createElement("p", null, "Património, Documento, Mentefacto, e Docmídia"),
    references: React.createElement(React.Fragment, null,
      React.createElement("p", null, "Silva, Armando Malheiro da. A Informação: da compreensão do fenómeno à construção do objeto, Porto; Edições Afrontamento; CETAC.COM, 2006")
    )
  },
  {
    term: 'Avaliação',
    definition: React.createElement(React.Fragment, null,
      React.createElement("p", null,
        "Em Ciência da Informação é uma das operações do pólo técnico do Método Quadripolar e abarca as várias \"espécies\" de avaliação desenvolvidas quer por arquivistas (concebida para escolher, diante das \"massas documentais acumuladas\", as séries documentais com interesse \"histórico\" e/ou com \"valor probatório\" e eliminar as restantes), quer por documentalistas e bibliotecários interessados e empenhados em determinar o desempenho conseguido pelos instrumentos de recuperação de informação (classificação, ",
        React.createElement("i", { className: "font-serif" }, "thesaurus"),
        ", etc.) e em verificar e controlar os quesitos de qualidade funcional de uma Biblioteca ou de um Centro de Documentação. Estas duas modalidades de avaliação estão bastante bem matrizadas e há um volume considerável de estudos teórico-práticos que constituem referenciais obrigatórios, mas no que toca à avaliação do fluxo informacional, ignorada pelos bibliotecários e documentalistas e só vital para os arquivistas predominou e ainda prevalece uma perspetiva instrumental e historicista influenciada pelo arquivista norte-americano Theodor Schellenberg. Baseia-se nos valores primário e secundário da documentação a triar/selecionar (toda a documentação sem valor secundário ou histórico, depois de vencidos os prazos de guarda prescricional ou precaucional pode e deve ser eliminada). Os arquivistas canadianos, australianos e seguidores com Terry Cook à cabeça avançaram com a proposta da macroavaliação, que está eivada de pós-modernismo historiográfico, coincidindo, em parte, com a proposta dos Autores portugueses, mas também distanciando-se dela por esta pretender ser cientifica, mas anti-positivista. (Silva; Ribeiro, 2000: 57-108 e Silva; Ribeiro, 2004:7-37) que consiste em determinar através de uma grelha cruzada de critérios orgânico-funcionais a informação que deve permanecer constituindo a Memória orgânica de determinada entidade e a que pode ser eliminada, de modo a assegurar sempre um fluxo rápido e eficaz."
      )
    ),
    seeAlso: React.createElement("p", null, "Valor da informação, Valor Probatório, Gestão da Informação, Memória Orgânica e Método Quadripolar"),
    references: React.createElement(React.Fragment, null,
      React.createElement("p", null, "Silva, Armando Malheiro da; RIBEIRO, Fernanda A Avaliação em arquivística: reformulação teórico-prática de uma operação metodológica. Páginas A & B: Arquivos & Bibliotecas. Lisboa 16 (2000) 57-113. Silva, Armando Malheiro da. A Informação: da compreensão do fenómeno à construção do objeto, Porto; Edições Afrontamento; CETAC.COM, 2006, pp.137-167 Silva, Armando Malheiro da; RIBEIRO, Fernanda - A Avaliação de informação: uma operação metodológica. Páginas A & B: Arquivos & Bibliotecas. Lisboa 16 (2004) 7-37.")
    )
  },
  {
    term: 'Biblioteca',
    definition: React.createElement(React.Fragment, null,
      React.createElement("p", null, "Em Ciência da Informação deve ser tomado em dois sentidos: (1) serviço criado organicamente numa determinada entidade e/ou uma instituição cultural (Biblioteca de âmbito nacional, distrital ou municipal, pública ou privada) destinada a incorporar e tornar acessível informação editada e posta a circular pelo mercado editorial-livreiro, bem como publicada e distribuída por entidades com objetivos e atividades específicas (Laboratórios científicos e farmacêuticos, Unidades Industriais dos mais diversos ramos, Instituições Culturais, Associações Políticas, Cívicas e Humanitárias, etc.); e (2) sistema (semi-fechado ou semi-aberto) de informação produzida e recebida por uma entidade ativa criada e vocacionada para promover o acesso e difusão desses conteúdos criados e acumulados. Neste segundo sentido Biblioteca não é a instituição, nem o serviço, não é o continente, mas o conteúdo (conjunto de livros, revistas, jornais, filmes, documentários, relatórios, projetos, etc.), consistindo, assim, num sistema de informação organizado, cuja estrutura (entidade que o cria) produz ou não a informação destinada a acesso e difusão, podendo colhê-la nas mais diversas latitudes e, em concreto, no mercado editorial e informacional, no espaço de circulação global de \"conteúdos\". Subjacente a esta segunda acepção há uma relativa desmaterialização do conceito de Biblioteca com contornos desenhados atualmente pela tecnologia digital.")
    ),
    seeAlso: React.createElement("p", null, "Biblioteca Digital, Leitura pública, Sistema de Informação e Plataforma Digital"),
    references: React.createElement(React.Fragment, null,
      React.createElement("p", null, "e-Infopcomunicação: estratégias e aplicações. Org. Brasilina Passarelli, Armando Malheiro da Silva e Fernando Ramos. São Paulo: Senac-SP; Escola do Futuro, 2014, pp. PP-PP"),
      React.createElement("p", null, "Faria, Maria Isabel; Pericão, Maria da Graça. Dicionário do livro: da escrita ao livro eletrônico. Coimbra: Edições Almedina, 2008 (ver Biblioteca e sucedâneos)."),
      React.createElement("p", null, "Silva, Armando Malheiro da. A Informação: da compreensão do fenómeno à construção do objeto, Porto; Edições Afrontamento; CETAC.COM, 2006, pp.137-167")
    )
  },
  {
    term: 'Biblioteca Digital',
    definition: React.createElement(React.Fragment, null,
      React.createElement("p", null,
        "A mesma fonte (López Yepes, 2004: 1) poderia considerar esta expressão sinônima de documento eletrônico como no caso do Arquivo Digital (= documento eletrônico de arquivo), mas esta sinonímia, ainda que implicitamente reconhecida, não aparece claramente explicitada. É, por isso, outro o modo de defini-la: ",
        React.createElement("i", { className: "font-serif" }, "sistema de informação que mantém e proporciona acesso remoto a uma ou várias coleções de publicações digitais, Ainda que tais coleções sejam o seu aspeto mais visível, a biblioteca digital é constituída por um conjunto de elementos e processos (humanos, tecnológicos, normativos, econômicos e materiais) que tornam possível a sua existência"),
        " (López Yepes, 2004: 1-183). Nesta definição sobressai como elemento determinante o sistema tecnológico de informação (ou informático) que torna possível o acesso remoto a textos digitalizados, o que implica uma alteração física do espaço para as funções de guarda/armazenamento e de acesso. De um edifício com pisos, salas, estantes, mesas e cadeiras passa-se para uma infraestrutura complexa de ",
        React.createElement("i", { className: "font-serif" }, "hardware"),
        " e de ",
        React.createElement("i", { className: "font-serif" }, "software"),
        " servida por uma rede telemática indispensável para o acesso à Internet que permite distribuir a informação até onde o utilizador/cliente se encontre e se conecte. Esta metamorfose não é, em rigor, uma desmaterialização, mas uma deslocalização radical das condições de custódia e de acesso à informação (o conteúdo das publicações em papel e/ou digitalizadas), que, não obstante, se mantém inalterável tanto num local, como em outro."
      )
    ),
    seeAlso: React.createElement("p", null, "Sistema de Informação, Plataforma Digital, Inclusão Digital"),
    references: React.createElement(React.Fragment, null,
      React.createElement("p", null,
        "López-Yepes, J. (2004). ",
        React.createElement("i", { className: "font-serif" }, "Diccionario enciclopédico de ciencias de la documentación"),
        " (Vol. 1, p. 183). Madrid: Editorial Síntesis."
      ),
      React.createElement("p", null,
        "Silva, A. M. da. (2006). ",
        React.createElement("i", { className: "font-serif" }, "A informação: Da compreensão do fenómeno à construção do objeto"),
        " (pp. 137–167). Porto: Edições Afrontamento; CETAC.COM."
      )
    )
  },
  {
    term: 'Bibliotecologia',
    definition: React.createElement(React.Fragment, null,
      React.createElement("p", null,
        "Termo equivalente a ",
        React.createElement("i", { className: "font-serif" }, "Library Science"),
        " vigente no universo anglo-americano e que persiste na América Latina, nomeadamente no México. Tal como a Arquivologia, decorre da tendência positivista e cientista do séc. XIX que afetou todo o espectro científico (das naturais e exatas às sociais e humanidades). É a ciência que tem por objeto o estudo da formação e do funcionamento das bibliotecas (Faria; Pericão, 1988: 42). Uma ciência das Bibliotecas faz tanto ou nenhum sentido como uma ciência dos Hospitais, dos Tribunais, das Esquadras de Polícia e por aí fora, mas com isto não se nega que tais estabelecimentos convoquem áreas do saber (científico, técnico e estético) diversas como a Arquitetura e as Engenharias para a fase de conceção e construção, o Direito Administrativo, a Economia e a Gestão para o processo multifatorial de funcionamento. Na perspetiva evolutiva esta suposta ciência integra-se num campo transdisciplinar junto com outras disciplinas técnicas surgidas como ela no séc. XIX."
      )
    ),
    seeAlso: React.createElement("p", null, "Organização e representação da informação, Literacia da informação, Ciência da Informação"),
    references: React.createElement(React.Fragment, null,
      React.createElement("p", null,
        "Faria, M. I., & Pericão, M. G. (2008). ",
        React.createElement("i", { className: "font-serif" }, "Dicionário do livro: Da escrita ao livro eletrônico"),
        ". Coimbra: Edições Almedina."
      ),
      React.createElement("p", null,
        "Silva, A. B. M. da. (2002). Arquivística, biblioteconomia e museologia: Do empirismo patrimonialista ao paradigma emergente da ciência da informação. In ",
        React.createElement("i", { className: "font-serif" }, "Integrar: 1º Congresso Internacional de Arquivos, Bibliotecas, Centros de Documentação e Museus"),
        " (pp. 573–608). São Paulo: FEBAB – Federação Brasileira de Associações de Bibliotecas, Centros de Documentação e Instituições; Arquivo de São Paulo."
      ),
      React.createElement("p", null,
        "Silva, A. M. da. (2006). ",
        React.createElement("i", { className: "font-serif" }, "A informação: Da compreensão do fenómeno à construção do objeto"),
        " (pp. 137–167). Porto: Edições Afrontamento; CETAC.COM."
      )
    )
  },
  {
    term: 'Biblioteconomia',
    definition: React.createElement(React.Fragment, null,
      React.createElement("p", null,
        "Termo mais comum em Portugal e, também, no Brasil. É difícil descortinar substanciais diferenças com o conceito anterior: ",
        React.createElement("i", { className: "font-serif" }, "Teoria, atividades e técnicas relativas à organização e gestão de bibliotecas, assim como à aplicação de legislação sobre as mesmas"),
        " (Faria; Pericão, 1988: 42). Pela composição do termo seria mais lógico associá-lo às políticas, técnicas e atividades de organização e gestão das bibliotecas, enquanto Bibliotecologia seria, à letra, a Ciência das Bibliotecas que abrangeria necessariamente aquela. Considera-se, aqui, a Biblioteconomia sinônimo de Bibliotecologia e integrada na Ciência da Informação (trans e interdisciplinar), com interfaces com o Direito Administrativo e a Economia e Gestão."
      )
    ),
    seeAlso: React.createElement("p", null, "Ciência da Informação, Perspetiva Cumulativa e Perspetiva Evolutiva"),
    references: React.createElement(React.Fragment, null,
      React.createElement("p", null,
        "Faria, M. I., & Pericão, M. G. (2008). ",
        React.createElement("i", { className: "font-serif" }, "Dicionário do livro: Da escrita ao livro eletrônico"),
        ". Coimbra: Edições Almedina."
      ),
      React.createElement("p", null,
        "Silva, A. B. M. da. (2002). Arquivística, biblioteconomia e museologia: Do empirismo patrimonialista ao paradigma emergente da ciência da informação. In ",
        React.createElement("i", { className: "font-serif" }, "Integrar: 1º Congresso Internacional de Arquivos, Bibliotecas, Centros de Documentação e Museus"),
        " (pp. 573–608). São Paulo: FEBAB – Federação Brasileira de Associações de Bibliotecas, Centros de Documentação e Instituições; Arquivo de São Paulo."
      ),
      React.createElement("p", null,
        "Silva, A. M. da. (2006). ",
        React.createElement("i", { className: "font-serif" }, "A informação: Da compreensão do fenómeno à construção do objeto"),
        " (pp. 137–167). Porto: Edições Afrontamento; CETAC.COM."
      )
    )
  },
  {
    term: 'Campo',
    definition: React.createElement(React.Fragment, null,
      React.createElement("p", null, "Na dimensão científica geral é a totalidade de problemas, situações e casos que emergem de uma fenomenalidade específica e constituem o objeto de estudo de uma determinada ciência. Em Sociologia tornou-se chave a noção de campo social, facilmente adotada, com ou sem ajustes, por outras Ciências Sociais, nomeadamente a Comunicação e Informação: \"Espaço onde se travam disputas objetivas, com regras mutáveis conforme as relações estabelecidas entre agentes, munidos de capitais específicos (...) campo social é juntamente com o conceito de habitus e a reflexão sobre o poder simbólico, parte da tríade montada pelo sociólogo Pierre Bourdieu para ultrapassar tanto teorias que apreendem os fenômenos sociais enfocando um sujeito repleto de livre-arbítrio, quanto teorias que resumem as explicações dos fenômenos ao poder estruturante da sociedade\" (Dicionário da comunicação, 2009. 63). Em Ciência da Informação os autores vinculados ao paradigma dialético sentem-se mais propensos ao uso do conceito de campo social para explicar as tensões e a dinâmica informacional, sendo que paradigma pós-custodial e científico a noção de campo ajuda a delimitar o objeto e a afinar a assunção do método.")
    ),
    seeAlso: React.createElement("p", null, "Ciência, Interdisciplinaridade, Macroparadigma"),
    references: React.createElement(React.Fragment, null,
      React.createElement("p", null, "Dicionário da comunicação, 3ª ed. revisto e ampliado. Org. Ciro Marcondes Filho. São Paulo: Paulus, 2009-"),
      React.createElement("p", null, "Silva, A. M. da. A Informação: da compreensão do fenómeno à construção do objeto, Porto; Edições Afrontamento; CETAC.COM, 2006, pp.137-167")
    )
  },
  {
    term: 'Centro de Documentação',
    definition: React.createElement(React.Fragment, null,
      React.createElement("p", null, "Instituiu-se, sobretudo, a partir de meados do séc. XX, após o contributo do belga Paul Otlet, condensado, no seu Traité de la Documentation (1934). e justificou a profissão de documentalista, baseada por uma estratégia de confronto e de separação meramente procedimental face ao bibliotecário e à Bibliotecologia/Biblioteconomia, Apesar de ser procedimental ou meramente técnica a distinção tomou, artificialmente, cariz epistemológico, conferindo ao documentalista uma dimensão cientifica inexistente porquanto o seu foco ou objeto continuava sendo a documentação/informação e os modos de organizá-la, ordená-la e disponibilizá-la eficazmente para quem necessitava dela.")
    ),
    seeAlso: React.createElement("p", null, "Biblioteca e Sistema de Informação"),
    references: React.createElement(React.Fragment, null,
      React.createElement("p", null,
        "Faria, M. I., & Pericão, M. G. (2008). ",
        React.createElement("i", { className: "font-serif" }, "Dicionário do livro: Da escrita ao livro eletrônico"),
        ". Coimbra: Edições Almedina."
      ),
      React.createElement("p", null,
        "Silva, A. M. da. (2006). ",
        React.createElement("i", { className: "font-serif" }, "A informação: Da compreensão do fenómeno à construção do objeto"),
        " (pp. 137–167). Porto: Edições Afrontamento; CETAC.COM."
      )
    )
  },
  {
    term: 'Cibermetria',
    definition: React.createElement(React.Fragment, null,
      React.createElement("p", null, "Medição e padronização através de leis estatísticas da produção e uso da informação que circula e se acumula na Internet, Ciberespaço, Espaço de Fluxos ou Infoesfera. Esta atividade mensuradora está a evoluir de forma vertiginosa no seio da tecnologia digital e com o desenvolvimento da Inteligência Artificial (IA) há ainda limites a ultrapassar.")
    ),
    seeAlso: React.createElement("p", null, "Informetria e Ciência da Informação"),
    references: React.createElement(React.Fragment, null,
      React.createElement("p", null, "Silva, Armando Malheiro da. A Informação: da compreensão do fenómeno à construção do objeto, Porto; Edições Afrontamento; CETAC.COM, 2006, pp.137-167")
    )
  },
  {
    term: 'Ciclo da Informação',
    definition: React.createElement(React.Fragment, null,
      React.createElement("p", null, "Expressão que pressupõe uma sequência lógica de acontecimentos que envolvem informação. Por outras palavras, são os estágios (ou áreas do objeto da Ciência da Informação - produção, organização e comportamento informacional - numa elipse contínua) que qualquer tipo de informação atravessa e pelos quais deve ser estudada e gerida. Em Ciência de Informação, retrata-se este termo como sendo o objeto de estudo da mesma, além de simplesmente \"informação\" propriamente dita, podendo até o próprio termo ser expansível para \"ciclo contínuo de vida infocomunicacional\". Este ciclo da informação torna-se relevante na medida de permitir melhorar a forma como a informação é utilizada na tomada de decisões (Marchand et al, 2001). À luz do estudo do ciclo informacional, o mesmo, sendo também o seu precedente direto, é na mesma medida imprescindível da comunicação, dado que a informação depende, para todo o sentido de produção e em qualquer contexto, de um emissor e de um receptor. O próprio conceito de gestão da informação já se encontra diretamente ligado com o ciclo de vida da informação, cujo este já compreende \"uma vasta problemática ligada à produção de informação (...) em contexto orgânico institucional e informal\" (Silva, 2009). O ciclo propriamente dito apresenta diferenças mediante diversos autores: aponta-se como exemplos Marteleto (1998), pondo em foco a tríade informação-conhecimento-comunicação, indicando uma sequência natural entre os três termos. Por sua vez, Barreto (1998) apresenta um ciclo ligeiramente diferente, seguido de informação-conhecimento-desenvolvimento. Não existindo um modelo padrão para o próprio ciclo, refere-se de primeira instância, em todo e qualquer caso, que a coleta/produção de informação produzida pela ação (integração dinâmica) é o primeiro passo para a realização deste ciclo, tendo sempre em conta a comunicação e recuperação da mesma para o estabelecimento do ciclo.")
    ),
    seeAlso: React.createElement("p", null, "Ciência da Informação e Gestão da Informação"),
    references: React.createElement(React.Fragment, null,
      React.createElement("p", null, "Barreto, A. d. A. (1998). Mudança Estrutural no Fluxo do Conhecimento: a comunicação eletrônica."),
      React.createElement("p", null, "Marchand et al. (2001). What Key Behaviors and Values Lead to Effective Information Use. Marteleto, R. M. (1998). Informação e Sociedade: novos parâmetros teórico-práticos de gestão e transferência informacional. (Vol. 12)."),
      React.createElement("p", null,
        "Silva, A. M. d. (2009). Arquivologia e Gestão da Informação/Conhecimento. ",
        React.createElement("a", { href: "https://repositorio-aberto.up.pt/handle/10216/26548", target: "_blank", rel: "noopener noreferrer", className: "text-blue-600 hover:underline" }, "https://repositorio-aberto.up.pt/handle/10216/26548")
      )
    )
  },
  {
    term: 'Ciência',
    definition: React.createElement(React.Fragment, null,
      React.createElement("p", null,
        "Uma definição curta e sintética, mas densa de sentido e de implicações epistemológicas é a que nos oferece La ",
        React.createElement("i", { className: "font-serif" }, "Nuova Enciclopedia della Scienze"),
        " Gazanti (2000): \"termo com o qual se indica o conjunto de conhecimentos organizados que busca atingir a verdade universal e incondicionalmente válida (1281). Uma definição ampla que pode parecer, no entanto, ajustada apenas às disciplinas \"duras\", conhecidas por \"ciências exatas e naturais\". Esse enviesamento é, obviamente, inaceitável, porque a construção racional da ciência visou ou teve por objeto o todo em que o sujeito humano cognoscente estava inserido, não se excluindo a ele próprio como organismo vivo, pessoa e o conjunto de semelhantes de que necessita para nascer, crescer e desenvolver-se até ao fim. E é nesta perspetiva mais abrangente que o filósofo Fernando Gil discorre a propósito da ciência disciplinar ou das disciplinas científicas (espectro amplo): \"As disciplinas estabelecem a mediação entre a produção e a transmissão do conhecimento. Ordenando os objetos da investigação, os problemas com os seus operadores e as suas soluções, elas constituem os ‘corpos de conhecimentos’, gradualmente acumulados e sistematizados. No que toca à produção, fornecem também um modelo do próprio conhecimento, o qual se opõe principalmente a um outro saber, de estilo categorial. Trata-se de dois enfoques condicionando a definição dos objetos e as modalidades do conhecimento e que por isso relevam de uma proto ou uma pré-epistemologia (Gil, 2002: 289)."
      ),
      React.createElement("p", { className: "mt-4" }, "Em síntese e tendo em conta este posicionamento global, as Ciências Sociais, muito flageladas pelo relativismo e por derivas ideológicas dogmáticas, cabem, tendo no seu seio as Ciência da Informação e da Comunicação, no quadro amplo da ciência e para esta inclusão não é indiferente certa opção metodológica.")
    ),
    seeAlso: React.createElement("p", null, "Epistemologia, Ciências da Comunicação e da Informação, Método Quadripolar, Paradigma e Macro-Paradigma"),
    references: React.createElement(React.Fragment, null,
      React.createElement("p", null, "La Nuova Enciclopedia della Scienze Garzanti. Gernusco: Garzanti Libri, 2000.")
    )
  },
  {
    term: 'Ciência de Dados',
    definition: React.createElement(React.Fragment, null,
      React.createElement("p", null,
        "O singular empregue nesta expressão (Ciência em vez de Ciências) levanta, de imediato, um questionamento de ordem epistemológica básica: estamos perante uma disciplina científica unificada ou perante uma interdisciplina? Pode dar-se o caso de podermos estar perante uma transdisciplina, como sucede, por exemplo, com a Ecologia e os Sistemas de Informação. No entanto, do que se vai lendo e ouvindo sobre CD não ajuda a um efetivo esclarecimento sobre este tópico. Sabe-se que a CD surgiu através da convergência da Estatística e das Ciências da Computação e da existência de um certo mal estar inicial entre estes campos sobre a verdadeira primazia na natureza desta emergente disciplina. No entanto, tal disputa coloca estranhamente (ou não…) na sombra a Ciência da Informação que não pode ser retirada da discussão sobretudo por dois óbvios motivos: dado (em sentido 2) é informação; e os dados não são apenas cruzados, estatística e informaticamente, mas organizados, preservados e recuperados, o que constitui funções e objeto da CI. Aceite esta perspetiva o debate sério que deve fazer-se é sobre estamos perante uma interdisciplina (Ciências de Dados) ou uma transdisciplina ou interciência (Ciência de Dados), sendo fortes os indícios que podem apontar nesta última direção. De qualquer maneira, a CD tem na sua génese a CI e esta apesar vida a e esse campo cientifico não se dilui nele, porquanto o objeto -infocomunicação - vai muito para lá do processamento, armazenamento e acesso otimizado dos ",
        React.createElement("i", { className: "font-serif" }, "big data"),
        "."
      )
    ),
    seeAlso: React.createElement("p", null, "Dado (1), Dado (2), Informação e Ciência da Informação"),
    references: React.createElement(React.Fragment, null,
      React.createElement("p", null, "Silva, Armando Malheiro da. Informação: da compreensão do fenómeno à construção do objecto. Porto: CETAC.COM; Edições Afrontamento, 2006."),
      React.createElement("p", null, "Silva, Armando Malheiro da. Ciência da Informação: estudos de epistemologia e de ética. Ponta Grossa, PR: Atena, 2022.")
    )
  },
  {
    term: 'Ciência da Documentação',
    definition: React.createElement(React.Fragment, null,
      React.createElement("p", null, "Expressão consagrada em Espanha com raiz directa no legado teórico de Paul Otlet e Henri La Fontaine e através da forte intermediação de Lasso de la Vega. Impôs-se, académica e corporativamente, sobretudo em Espanha, pelo facto do termo/conceito informação ter aí o seu uso confiscado pelos jornalistas e pelos estudiosos da comunicação social (sendo informação sinônimo apenas de notícia). Atualização desta disciplina técnica encontramo-la na expressão Ciências Documentais, que designou os cursos de especialização profissional na área, em Portugal, a partir de 1982 com a extinção do Curso de Bibliotecário-Arquivista, ministrado em Coimbra no ano de 1935 ou \"Documentation Studies\" (Estudos sobre Documentação) defendida epistemologicamente por Niels Windfeld Lund.")
    ),
    seeAlso: React.createElement("p", null, "Documentação, Ciências Documentais"),
    references: React.createElement(React.Fragment, null,
      React.createElement("p", null,
        "Lund, N. W. (2024). ",
        React.createElement("i", { className: "font-serif" }, "Introduction to documentation studies"),
        ". London: Facet Publishing."
      ),
      React.createElement("p", null,
        "Silva, A. M. da. (2006). ",
        React.createElement("i", { className: "font-serif" }, "A informação: Da compreensão do fenómeno à construção do objeto"),
        " (pp. 137–167). Porto: Edições Afrontamento; CETAC.COM."
      ),
      React.createElement("p", null,
        "Silva, A. M. da, & Ribeiro, F. (2002). ",
        React.createElement("i", { className: "font-serif" }, "Das \"Ciências Documentais\" à Ciência da Informação: Ensaio epistemológico para um modelo formativo"),
        ". Porto: Edições Afrontamento"
      )
    )
  },
  {
    term: "Ciência da Informação",
    definition: React.createElement(React.Fragment, null,
      React.createElement("p", null,
        "A definição surgida nas conferências do ",
        React.createElement("i", { className: "font-serif" }, "Georgia Institute of Thecnology"),
        ", EUA, realizadas em Outubro de 1961 e Abril de 1962, retomada e republicada por Harold Borko em 1968, continua a ser um marco programático: ",
        React.createElement("i", { className: "font-serif" }, "‘É a disciplina que investiga as propriedades e o comportamento da "),
        "informação",
        React.createElement("i", { className: "font-serif" }, ", as forças que regem o fluxo informacional e os meios de processamento da informação para a otimização do acesso e uso. Está relacionada com um corpo de "),
        "conhecimento ",
        React.createElement("i", { className: "font-serif" }, "que abrange a origem, coleta, organização, armazenamento, recuperação, interpretação, transmissão, transformação e utilização da informação. Isto inclui a investigação, as representações da informação tanto no sistema natural, como no artificial, o uso de códigos para uma eficiente transmissão de mensagens e o estudo dos serviços e técnicas de processamento da informação e seus sistemas de programação"),
        ". Pode e deve ser, porém, revista e liberta de algumas contradições, como a aceitação sem crítica da natureza interdisciplinar ",
        React.createElement("i", { className: "font-serif" }, "derivada e relacionada com vários campos como a matemática, a lógica, a linguística, a psicologia, a tecnologia computacional, as operações de pesquisa, as artes gráficas, as comunicações, a biblioteconomia, a gestão e outros campos similares"),
        " ou como o postulado de ",
        React.createElement("i", { className: "font-serif" }, "uma componente de ciência pura, que indaga o assunto sem ter em conta a sua aplicação, como uma componente de ciência aplicada, que desenvolve serviços e produtos"),
        ". A assunção da natureza interdisciplinar contradiz a necessidade patente, no início da definição, de dar contornos específicos e claros ao respetivo objeto de estudo. Defendemos, por isso, que ",
        React.createElement("b", null, "a Ciência da Informação é uma ciência social aplicada que investiga os problemas, os temas e os casos relacionados com o fenómeno info-comunicacional perceptível e cognoscível através da confirmação ou não das propriedades inerentes à génese do fluxo, organização e comportamento informacionais"),
        " (",
        React.createElement("i", { className: "font-serif" }, "origem, coleta, organização, armazenamento, recuperação, interpretação, transmissão, transformação e utilização da informação"),
        "). Ela é trans e interdisciplinar, o que significa estar dotada de um corpo teórico-metodológico próprio construído, dentro do paradigma emergente pós-custodial, infocomunicacional e transdisciplinar pelo contributo e simbiose da Arquivística, da Biblioteconomia, da Documentação, da #Information Science’ (EUA) e da Museologia. A C.I. intervém ativamente no seio da interdisciplina Ciências da Comunicação. E desenvolve, por força da natureza transversal do seu objeto científico (a Informação ",
        React.createElement("i", { className: "font-serif" }, "in stricto sensu"),
        "; a infocomunicação ",
        React.createElement("i", { className: "font-serif" }, "in lato sensu"),
        ") à condição e vida humanas, um amplo arco de interdisciplinaridade que privilegia as Ciências Sociais e Humanas (História, Sociologia, Antropologia, a Psicologia Cognitiva e Social, as Ciências da Educação, etc.), mas inclui também a Matemática e algumas Ciências Naturais e Engenharias. Tem como dispositivo metodológico geral o Método Quadripolar e o seu campo de estudo e intervenção compreende três áreas interligadas a ponto de se interpenetrarem: a Produção ou Génese do Fluxo, a Organização e Representação da Informação e o Comportamento Informacional. Em cada uma delas ou nas suas diversas intersecções desenvolvem-se os ramos aplicacionais quer envolvendo os construtos convencionais (Arquivo, Biblioteca, Centro de Documentação),, quer a implementação e desenvolvimento de sistema de informação (sistemas tecnológicos de informação) ou plataformas digitais na óptica dos utilizadores. A definição aqui apresentada e defendida contrapõe-se frontalmente a outras, das quais vale a pena destacar duas. A de David Bawden e Lyn Robinson: ‘é um campo de estudo multidisciplinar, que envolve várias formas de conhecimento e que dá coerência através do foco no conceito central da informação humana registada (BAWDEN; ROBINSON, 2012; 3). E a de Wolfgang G. Stock e Metchild Stock: estuda a representação, armazenamento e difusão tanto quanto a pesquisa e a recuperação de documentos relevantes (predominantemente digitais) e conhecimento (incluindo o contexto da informação) (STOCK; STOCK, 2015; 3). Esta última definição insere-se numa obra ou tratado representativo das iSchools ou Information Schools, movimento académico de escolas, faculdades e cursos em CI surgido nos EUA e que tem alastrado pelo Mundo, fortemente vinculado ao debate seminal realizado nas Georgia Institute of Technology, embora fosse evoluindo para um cariz mais tecnológico ainda que interdisciplinar. Trata-se de uma deriva empobrecedora que é preciso enfrentar com diálogo fecundo. A CI trans e interdisciplinar que defendemos propõe-se alimentar esse diálogo e dar contexto social e humano aos procedimentos digitais. Concretiza isto assumindo a dupla condição de ciência pura e aplicada, sendo que o domínio aplicacional é o profissional em que emerge o perfil do gestor da informação. Neste sentido, a Gestão da Informação é a faceta prática e aplicada da CI."
      )
    ),
    seeAlso: React.createElement("p", null, "Informação, Infocomunicação, Documentação, Gestão da Informação, Organização e representação da informação"),
    references: React.createElement(React.Fragment, null,
      React.createElement("p", null,
        "Bawden, D., & Robinson, L. (2012). ",
        React.createElement("i", { className: "font-serif" }, "Introduction to information science"),
        ". London: Facet Publishing."
      ),
      React.createElement("p", null,
        "Silva, A. M. da. (2006). ",
        React.createElement("i", { className: "font-serif" }, "A informação: Da compreensão do fenómeno à construção do objeto"),
        " (pp. 137–167). Porto: Edições Afrontamento; CETAC.COM."
      ),
      React.createElement("p", null,
        "Silva, A. M. da, & Paletta, F. C. (2022). ",
        React.createElement("i", { className: "font-serif" }, "Ciência da informação: Estudos de epistemologia e de ética"),
        ". Ponta Grossa, PR: Atena Editora. Recuperado de ",
        React.createElement("a", { href: "https://www.academia.edu/83211427/Ci%C3%AAncia_da_informa%C3%A7%C3%A3o_Estudos_de_epistemologia_e_de_%C3%A9tica_Atena_Editora", target: "_blank", rel: "noopener noreferrer", className: "text-blue-600 hover:underline" }, "link")
      ),
      React.createElement("p", null,
        "Silva, A. M. da, & Ribeiro, F. (2002). ",
        React.createElement("i", { className: "font-serif" }, "Das \"Ciências Documentais\" à Ciência da Informação: Ensaio epistemológico para um novo modelo curricular"),
        ". Porto: Edições Afrontamento."
      ),
      React.createElement("p", null,
        "Stock, W. G., & Stock, M. (2015). ",
        React.createElement("i", { className: "font-serif" }, "Handbook of information science"),
        ". Berlin: Walter de Gruyter GmbH."
      )
    )
  },
  {
    term: "Ciências da Comunicação",
    definition: React.createElement(React.Fragment, null,
      React.createElement("p", null,
        "O seu núcleo central não é consensual, mas é compreensível que nele entrem disciplinas científicas que exploram o seu objeto a partir, entre outros, do fenómeno info-comunicacional, com ênfase na vertente da comunicação. E entre elas destacam-se a Sociologia, a Semiótica, a Ciência da Informação, a Psicologia, as Ciências da Computação, a Multimédia e ainda a Histórias, a Linguística, os Estudos Literários, as Ciências da Educação e a Antropologia. A convergência específica destas ciências e disciplinas tende a constituir uma interdisciplina interessante do ponto de vista epistemológico se tivermos em conta o ",
        React.createElement("i", { className: "font-serif" }, "programa de trabalho para as ciências da informação e da comunicação"),
        " gizado, por exemplo, por Bernard Miège (MIÈGE, 2000: 123-125). O Jornalismo reclama, naturalmente, presença forte nesta constelação disciplinar, sendo admitida como tal pelos epistemólogos franceses do campo SIC (Sciences de Information et de la Communication), ainda que o debate epistemológico sobre a natureza científica da atividade científica está longe de ser conclusivo e validado, havendo neste debate o mesmo tipo de entraves que existem quando se analisa a pretensa cientificidade de disciplinas como a Arquivística, a Biblioteconomia, a Documentação a Museologia, todas elas surgidas como modos procedimentais no apoio à investigação historiográfica, sociológica e de outras mais abordagens possíveis. A evolução e consolidação deste ‘corpo’ interdisciplinar apontam, hoje, para a configuração e aprofundamento de um campo de estudo claramente identificado como infocomunicacional, através do conceito operatório de infocomunicação."
      )
    ),
    seeAlso: React.createElement("p", null, "Infocomunicação, Documentação.e Ciência da Informação"),
    references: React.createElement(React.Fragment, null,
      React.createElement("p", null,
        "Miège, B. (2000). ",
        React.createElement("i", { className: "font-serif" }, "O pensamento comunicacional"),
        ". Petrópolis: Vozes."
      ),
      React.createElement("p", null,
        "Silva, A. M. da. (2006). ",
        React.createElement("i", { className: "font-serif" }, "A informação: Da compreensão do fenómeno à construção do objeto"),
        " (pp. 137–167). Porto: Edições Afrontamento; CETAC.COM."
      ),
      React.createElement("p", null,
        "Silva, A. M. da, & Gouveia, L. B. (2020). A infocomunicação ou a convergência das ciências da informação e da comunicação para um objeto comum. ",
        React.createElement("i", { className: "font-serif" }, "Páginas A&B, S. 3"),
        " (número especial), 15–33. Recuperado de ",
        React.createElement("a", { href: "https://ojs.letras.up.pt/index.php/paginasaeb/article/view/7814/7171", target: "_blank", rel: "noopener noreferrer", className: "text-blue-600 hover:underline" }, "link")
      ),
      React.createElement("p", null,
        "Silva, A. M. da, & Ramos, F. (2014). As ciências da comunicação e da informação: Casos e desafios de uma interdisciplina. In B. Passarelli, A. M. da Silva, & F. Ramos (Orgs.), ",
        React.createElement("i", { className: "font-serif" }, "e-Infocomunicação: Estratégias e aplicações"),
        " (pp. 49–77). São Paulo: Senac-SP; Escola do Futuro-USP."
      )
    )
  },
  {
    term: "Ciências Documentais",
    definition: React.createElement(React.Fragment, null,
      React.createElement("p", null, "Expressão introduzida e vulgarizada em Portugal no início dos anos oitenta do séc. XX para atender, consensualmente e sem ferir suscetibilidades académicas, a hegemonia da História e o concurso de antigas disciplinas auxiliares, como a Paleografia, a Diplomática, a Sigilografia, a Numismática e a Epigrafia, desejosas, também, de efetiva autonomização. A Biblioteconomia e a Arquivística entravam, assim, nesse rol em alegada paridade com as demais. A expressão serviu de rótulo a uma formação especializada que habilitam o exercício da profissão de arquivista, de bibliotecário e de documentalista a quem já possuísse uma licenciatura em qualquer domínio. Este modelo de formação inscreve-se na fase mais agónica do paradigma custodial, historicista, patrimonialista e tecnicista e, consequentemente, entrou em crise no final do séc. XX devido à acelerada expansão global do informacionalismo ou macro paradigma tecnológico (Castells, 2002-2003) associado, inevitavelmente, ao macro paradigma da complexidade (Santos, 2014: 25-47). Posteriormente, a entrada em vigor do Acordo de Bolonha, uniformizador do Ensino Superior na União Europeia, deu a este tipo de formação o golpe final.")
    ),
    seeAlso: React.createElement("p", null, "Arquivística, Biblioteconomia e Ciência da Documentação"),
    references: React.createElement(React.Fragment, null,
      React.createElement("p", null,
        "Santos, H. (2014). Complexidade e informacionalismo: As contribuições de Edgar Morin e Manuel Castells. In B. Passarelli, A. M. da Silva, & F. Ramos (Orgs.), ",
        React.createElement("i", { className: "font-serif" }, "e-Infocomunicação: Estratégias e aplicações"),
        " (pp. 25–47). São Paulo: Senac-SP; Escola do Futuro-USP."
      ),
      React.createElement("p", null,
        "Silva, A. M. da. (2006). ",
        React.createElement("i", { className: "font-serif" }, "A informação: Da compreensão do fenómeno à construção do objeto"),
        " (pp. 137–167). Porto: Edições Afrontamento; CETAC.COM."
      ),
      React.createElement("p", null,
        "Silva, A. M. da, & Ribeiro, F. (2002). ",
        React.createElement("i", { className: "font-serif" }, "Das \"Ciências\" documentais à ciência da informação: Ensaio epistemológico para um novo modelo curricular"),
        ". Porto: Edições Afrontamento."
      )
    )
  },
  {
    term: "Ciências e Técnicas do Património",
    definition: React.createElement(React.Fragment, null,
      React.createElement("p", null, "Formam um rótulo académico e, em potência, uma interdisciplina construída, essencialmente, pela História Local, pela História de Arte, pela Arqueologia e pela Museologia, com expressão institucional na designação de um departamento existente na Faculdade de Letras da Universidade do Porto. Arquivistas, bibliotecários e documentalistas formados de acordo com o paradigma custodial, historicista, patrimonialista e tecnicista sentem óbvias afinidades com este campo disciplinar, ao contrário dos profissionais modelados pelo emergente paradigma pós-custodial, informacional e científico, em que se enquadra a Ciência da Informação e à luz do qual o constructo ideológico Património/Patrimonialismo só tem valor epistémico como traço de conduta analisável nos estudos de comportamento infocomunicacional. Não é tanto o estudo, mas a defesa ideológica e a política do Património que aproximam as quatro disciplinas científicas atrás referidas. Do ponto de vista epistemológico é preciso aprofundar bastante o modo como elas podem elaborar um programa consistente e fecundo de problemas a pesquisar interdisciplinarmente. Se isso não for feito o desiderato em foco esgota-se, lamentavelmente, no rótulo e nos interesses imediatos de eventual corporativismo académico ou universitária.")
    ),
    seeAlso: React.createElement("p", null, "Ciências Documentais, Museologia e Património"),
    references: React.createElement(React.Fragment, null,
      React.createElement("p", null,
        "Brigola, J. (2003). As ciências e técnicas do património cultural: Entre a concorrência e a cumplicidade. ",
        React.createElement("i", { className: "font-serif" }, "Pedra & Cal. Revista do Grémio das Empresas de Conservação e Restauro do Património Arquitectónico, Ano V"),
        " (19), 20–21. Recuperado de ",
        React.createElement("a", { href: "http://dspace.uevora.pt/rdpc/bitstream/10174/24093/1/Ci%C3%AAncias%20e%20t%C3%A9cnicas%20do%20Patrim%C3%B3nio%20Cultural%20%28...%29.pdf", target: "_blank", rel: "noopener noreferrer", className: "text-blue-600 hover:underline" }, "link")
      ),
      React.createElement("p", null,
        "Silva, A. M. da. (2006). ",
        React.createElement("i", { className: "font-serif" }, "A informação: Da compreensão do fenómeno à construção do objeto"),
        " (pp. 137–167). Porto: Edições Afrontamento; CETAC.COM."
      )
    )
  },
  {
    term: "Coleção",
    definition: React.createElement(React.Fragment, null,
      React.createElement("p", null,
        "Há, pelo menos, três sentidos ou acepções em que mais se emprega: (1) um conjunto de obras de arte (pintura e/ou escultura) reunido por um colecionador que é também perito no tipo de arte colecionada ou ajudado por peritos; (2) um conjunto de livros, grande ou pequeno, mas de preferência raros e/ou consagrados a temas específicos; e (3) uma sequência de publicações distintas, ligadas entre si por um título comum, um responsável e uma Casa Editora que a promove e gere. Tornou-se em Arte e para a Biblioteconomia/Biblioteconomia um conceito nuclear que caracteriza a totalidade ou parcelas do respetivo conjunto bibliográfico e documental. Há arquivistas que, embora com relutância, usam o conceito, opondo-o radicalmente ao de fundo para referirem ‘documentos híbridos’ (fotografias, desenhos, mapas, postais-ilustrados, etc.). Insistem muito na ideia de que coleção corresponde a um (re)agrupamento voluntário de documentos, a um ato acidental ou criativo, enquanto um grupo de ofícios ou cartas produzidas/recebidas por alguém ou alguma entidade é ‘automático’, ‘natural’ e não depende da vontade livre de um sujeito. Separar Coleção de Fundo pelo grau ou tipo de intencionalidade é, no mínimo, um exercício equivocado. Separar entre atos conscientes e inconscientes sempre poderia ter maior interesse filosófico, antropológico e psicológico, mas ainda assim é arriscado. Walter Benjamin deu à temática do coleccionismo, da coleção e do colecionador, nos anos trinta do séc. XX, uma leitura inovadora e fecunda: os livros, os papeis, os quadros, as fotografias reunidos por um sujeito ou por uma entidade resultam da dinâmica da respetiva ação e, portanto, não são acidentalmente acumulados, mas derivam sempre de um propósito e uma necessidade (Silva, 2’222: 1095-1106). O conceito de Sistema de Informação (organizado) substitui Coleção, com vantagens no ",
        React.createElement("i", { className: "font-serif" }, "corpus"),
        " teórico da Ciência da Informação."
      )
    ),
    seeAlso: React.createElement("p", null, "Sistema de Informação."),
    references: React.createElement(React.Fragment, null,
      React.createElement("p", null,
        "Faria, M. I., & Pericão, M. G. (2008). ",
        React.createElement("i", { className: "font-serif" }, "Dicionário do livro: Da escrita ao livro eletrônico"),
        ". Coimbra: Edições Almedina."
      ),
      React.createElement("p", null,
        "Silva, A. M. da. (2006). ",
        React.createElement("i", { className: "font-serif" }, "A informação: da compreens'e3o do fen'f3meno 'e0 constru'e7'e3o do objeto"),
        " (pp. 137–167). Porto: Edições Afrontamento; CETAC.COM."
      ),
      React.createElement("p", null,
        "Silva, A. M. da. (2022). O colecionador segundo Walter Benjamin ou um texto protosistémico. In Z. Duarte, A. M. da Silva, & F. Ribeiro (Orgs.), ",
        React.createElement("i", { className: "font-serif" }, "A informação e a medicina em tempos de pandemia: Impactos humanos e sociais"),
        " (Vol. 3, pp. 1095–1106). Salvador: EDUFBA; Porto: FLUP-CITCEM."
      )
    )
  },
  {
    term: "Colégio invisível",
    definition: React.createElement(React.Fragment, null,
      React.createElement("p", null, "Expressão introduzida por Derek John Solla Price e David Beaver em 1966 para designar um conjunto informal de especialistas que desenvolvem pesquisas dentro de uma mesma especialidade, trocando entre si informação e exercendo o seu controlo/influência sobre a atividade de todos e cada um. Em Ciência da Informação e mais precisamente nos estudos de comportamento informacional é associado a contexto orgânico não institucional, ou seja, corresponde a uma atividade complementar do trabalho orgânico e organizado em laboratório. E integra a subárea de estudo da comunicação científica no âmbito da qual este conceito, procedente da Sociologia da Ciência, teve uso generalizado.")
    ),
    seeAlso: React.createElement("p", null, "Comunicação Científica, Contexto e Cienciometria"),
    references: React.createElement(React.Fragment, null,
      React.createElement("p", null,
        "Price, D. J. de S. (1963). ",
        React.createElement("i", { className: "font-serif" }, "Little science, big science"),
        ". New York: Columbia University Press."
      ),
      React.createElement("p", null,
        "Silva, A. M. da. (2006). ",
        React.createElement("i", { className: "font-serif" }, "A informação: Da compreens'e3o do fen'f3meno 'e0 constru'e7'e3o do objeto"),
        " (pp. 137–167). Porto: Edições Afrontamento; CETAC.COM."
      )
    )
  },
  {
    term: "Competências (digitais e críticas)",
    definition: React.createElement(React.Fragment, null,
      React.createElement("p", null,
        "Etimologicamente a palavra competência vem do latim ",
        React.createElement("i", { className: "font-serif" }, "competentis"),
        " com o significado original de ‘proporção, relação, semelhança justa, disposição respectiva dos astros’, enquanto o adjetivo competente (do latim ",
        React.createElement("i", { className: "font-serif" }, "competente"),
        ") significou ‘que convém para, apropriação’/Machado, s.d.: 194). O sentido primevo da palavra foi-se ajustando a necessidades novas e na Modernidade aperfeiçoou a ideia de apropriado para o plano da execução intelectual, laboral e profissional, ajustamento que possibilitou conotação com habilidade (etimologicamente aptidão) e capacidade (etimologicamente ‘aptidão para’), É, pois, o significado moderno de apto (hábil e capaz) que tem uso no campo da Ciência da Informação para qualificar as pessoas aptas a usar a informação em pleno, ou seja, decodificando-lhe o significando de determinado conjunto estruturado de representações racionais e emocionais codificadas e modeladas socialmente). Ocupa, assim, espaço discursivo que recorre a conceitos como literacia ou letramento (usado no Brasil) No Brasil tornou-se útil fugir a uma escolha entre estas últimas palavras e competências críticas tornou-se opção cómoda. Uma facilidade que leva a adicionar o adjetivo prática (isto é, socialmente enquadrada) ao substantivo competências em ou da informação, que importa conceituar: ‘Constitui-se em processo contínuo da interação e internalização de fundamentos conceituais atitudinais e de habilidades específicas como referenciais à compreensão da informação e de sua abrangência, em busca da fluência e das capacidades necessárias à geração de conhecimento novo e sua aplicabilidade ao cotidiano das pessoas e das comunidades ao longo da vida (BELLUZZO, 2003)’ (Belluzzo; Regina e Feres, 2016: 142). Esta conceituação traz à colação e ao uso pleno do conceito de literacia da informação, sendo certo que a expressão competências digitais cabe dentro do conceito inclusão (e alfabetização) digital."
      )
    ),
    seeAlso: React.createElement("p", null, "Comportamento Informacional, Literacia da Informação e Inclusão digital"),
    references: React.createElement(React.Fragment, null,
      React.createElement("p", null,
        "Belluzzo, R. C. B., & Feres, G. G. (2016). Inteligência, criatividade e competência em informação: Uma articulação necessária no contexto social contemporâneo. In F. M. M. Alves, E. C. D. Corrêa, & E. R. de O. Lucas (Orgs.), ",
        React.createElement("i", { className: "font-serif" }, "Competências em informação"),
        " (pp. 425–453). Salvador: EDUFBA."
      ),
      React.createElement("p", null,
        "Machado, J. P. (s.d.). ",
        React.createElement("i", { className: "font-serif" }, "Dicionário etimológico da língua portuguesa com a mais antiga documentação escrita e conhecida de muitos dos vocábulos estudados"),
        " (5 vols.). Lisboa: Livros Horizonte."
      ),
      React.createElement("p", null,
        "Silva, A. M. da, & Paletta, F. C. (2022). ",
        React.createElement("i", { className: "font-serif" }, "Ciências da informação: Estudos em epistemologia e da ética"),
        ". Ponta Grossa, PR: Atena Editora"
      )
    )
  },
  {
    term: "Comportamento informacional",
    definition: React.createElement(React.Fragment, null,
      React.createElement("p", null,
        "Define-se comportamento, em Psicologia, como o modo de ser ou de reagir de uma pessoa",
        React.createElement("b", null, " , "),
        "quer na vida corrente, quer perante circunstâncias particulares. Em Psicologia social e Sociologia o comportamento social ou coletivo é por sua vez simultaneamente a maneira de ser e os modos de agir deste ou daquele conjunto social (classe, grupo, meio, idade, sexo, etc.). Acresce a isto dois aspetos significativos: ",
        React.createElement("i", { className: "font-serif" }, "O comportamento social ter certa homogeneidade e certa constância em todos os indivíduos pertencentes a determinado conjunto. Há comportamento social quando os mesmos modelos de conduta, os mesmos esquemas, provocam entre os indivíduos maneiras de ser e atitudes similares, baseadas em motivações semelhantes ou aproximadas"),
        " (BIROU, 1982: 74). Aspetos que não podem ser negligenciados quando falamos de comportamento informacional, versão em português do ",
        React.createElement("i", { className: "font-serif" }, "information behaviour"),
        " surgido no último quartel do séc. XX nos Estados Unidos da América. Surgiu em resposta ao intuito de superar a estreiteza dos estudos de utilizador ou usuário, implementados após a II Guerra Mundial por bibliotecários e, sobretudo, por documentalistas em suas Bibliotecas Especializadas e Centros de Documentação a fim de determinarem melhor os interesses de pesquisa de seus utilizadores e quais as publicações em que importava mais investir. Podemos, pois, definir comportamento informacional como o modo de ser ou de reagir de uma pessoa ou de um grupo numa determinada situação e contexto, impelido por necessidades induzidas ou espontâneas, no que toca essencialmente à busca, receção, memorização/guarda, reprodução e difusão de informação. Neste sentido é uma das três áreas axiais de estudo e de intervenção da Ciência e da Gestão da Informação. As outras duas são: a Produção/Génese do fluxo da Informação e a Organização e representação da Informação."
      )
    ),
    seeAlso: React.createElement("p", null, "Ciência da Informação, Situação, Contexto, Meio Ambiente e Necessidade"),
    references: React.createElement(React.Fragment, null,
      React.createElement("p", null,
        "Birou, A. (1982). ",
        React.createElement("i", { className: "font-serif" }, "Dicionário de ciências sociais"),
        ". Lisboa: Publicações Dom Quixote."
      ),
      React.createElement("p", null,
        "Silva, A. M. da. (2006). ",
        React.createElement("i", { className: "font-serif" }, "A informação: Da compreensão do fenómeno à construção do objeto"),
        " (pp. 137–167). Porto: Edições Afrontamento; CETAC.COM."
      ),
      React.createElement("p", null,
        "Silva, A. M. da, & Paletta, F. C. (2022). ",
        React.createElement("i", { className: "font-serif" }, "Ciência da informação: Estudos de epistemologia e de ética"),
        ". Ponta Grossa, PR: Atena Editora. Recuperado de ",
        React.createElement("a", { href: "https://www.academia.edu/83211427/Ci%C3%AAncia_da_informa%C3%A7%C3%A3o_Estudos_de_epistemologia_e_de_%C3%A9tica_Atena_Editora", target: "_blank", rel: "noopener noreferrer", className: "text-blue-600 hover:underline" }, "link")
      )
    )
  },
  {
    term: "Comunicação",
    definition: React.createElement(React.Fragment, null,
      React.createElement("p", null,
        "Este termo surge mesclado, desde meados do séc. XX, com o jornalismo de massas, nomeadamente o radiofónico, o televisivo e, mais recentemente, os multimédia, embora não falte na literatura disponível boa nota do amplo espectro de uso de um conceito tão plástico e rico. É sinônimo de interação humana e social e pressupõe, necessariamente, informação sob a forma de mensagens ou conteúdos transmitidos, partilhados, em suma, comunicados. Entre várias definições possíveis aceita-se está inscrita no Dictionnaire de Bernard Lamizet e Ahmed Silem ‘a ação de estabelecer uma relação com alguém, ou alguma coisa em comum com uma outra pessoa ou um grupo de pessoas, e o resultado dessa ação; etimologicamente comunicar é pôr em comum, partilhar’ (p. 120). No mesmo Dicionário inclui-se um segundo sentido:‘a coisa que se comunica: anúncio, aviso, nota, mensagem, notícia...’, ou seja, comunicação sinônimo de informação, perspetiva que deriva de uma ressignificação que esta palavra teve no séc. XIX (equivalente a notícia ou texto noticioso - TERROU, 1995 8ª ED.) e extravasou para o século seguinte em vários países como a França e, muito especialmente, Espanha, onde se confunde totalmente ou se reduz o significado de informação a periodismo ou jornalismo. Este equívoco conceitual tem contaminado e prejudicado do ponto de vista epistemológico o discurso dos comunicólogos. No livro de bolso de José Rodrigues dos Santos, !O que é Comunicação=’, esquece-se que só pode haver comunicação se houver informação ou subentende-se que ela existe, apresentando-se a comunicação como transporte de ideias ou sua transmissão. Ora o sentido etimológico da palavra remete-nos para o termo latino ",
        React.createElement("i", { className: "font-serif" }, "comunio"),
        ", que significa partilha, comunhão a transmissão é um meio para se atingir este fim).. E este sentido continua não só válido, como obrigatório na conceituação da palavra: só há comunicação quando há entendimento mútuo da mensagem."
      )
    ),
    seeAlso: React.createElement("p", null, "Informação, Infocomunicação, Interação e Interatividade"),
    references: React.createElement(React.Fragment, null,
      React.createElement("p", null,
        React.createElement("i", { className: "font-serif" }, "Dictionnaire encyclopédique des sciences de l’information et de la communication"),
        ". (1997). B. Lamizet & A. Silem (Dirs.), Dictionnaire encyclopédique des sciences de l’information et de la communication (pp. 120–123). Paris: Ellipses Éditions."
      ),
      React.createElement("p", null, "Santos, J. R. (n.d.). [Sem título completo fornecido]."),
      React.createElement("p", null, "Silva, A. M. da. (2006). A informação: Da compreensão do fenómeno à construção do objeto (pp. 137–167). Porto: Edições Afrontamento; CETAC.COM."),
      React.createElement("p", null, "Terrou, F. (1995). L’information (8ª ed., col. ‘Que sais-je?’; 1ª ed. 1962). Paris: PUF."),
      React.createElement("p", null, "Wilden, A. (2001). Comunicação. In Enciclopédia Einaudi: Volume 34 Comunicação. Cognição (pp. 108–204). Lisboa: Imprensa Nacional-Casa da Moeda")
    )
  },
  {
    term: "Conhecimento",
    definition: React.createElement(React.Fragment, null,
      React.createElement("p", null,
        "Em Filosofia e desde os gregos, os problemas do conhecimento ganharam relevo e acuidade, mas só a partir de Kant é que se admitiu que o estudo do conhecimento fosse capaz de dar impulso a uma ‘disciplina filosófica especial’ através da constituição e consagração progressiva da ‘teoria do conhecimento’. À luz da teorização acumulada é possível identificar vários núcleos essenciais, a saber: a fenomenologia do conhecimento ou a descrição do fenómeno do conhecimento; a questão da possibilidade do conhecimento; a questão do fundamento do conhecimento; e a questão das formas do conhecimento. Destes núcleos o primeiro é que parece estimular mais a generalizada e simplificada distinção entre conhecimento e informação, criando um fosso intransponível entre ambos, mas permite, também, que alguns, ainda muito poucos, ousem ressignificar informação de maneira a torná-la sinônimo de conhecimento válido e falso (Floridi, 2010). Sendo um mentefacto a informação mescla-se com a capacidade humana de conhecer (descobrir, compreender, dar forma a raciocínios, impressões, interrogações, etc) através do conceito crucial de representação mental e emocional. À Ciência da Informação não interessa especialmente o debate sobre as condições do conhecimento verdadeiro, mas sim uma dupla e decisiva análise sobre a produção de conhecimento/informação, elaborados mental e emocionalmente, antes mesmo de se externalizar e materializar fora do sujeito cognoscente, ou seja, antes de se tornar documento (no sentido estrito do termo); e sobre o êxito ou o insucesso da receção do conteúdo registado em ou através de qualquer suporte. É por este ponto, com múltiplas e complexas pontas, que adquire relevância a distinção entre conhecimento (ou informação) e documento, considerada uma viragem crucial para a Ciência da Informação que defendemos e propomos com interessantes implicações. Uma delas é a revisão crítica da célebre afirmação de George Steiner: ",
        React.createElement("i", { className: "font-serif" }, "Nunca como agora, tivemos tanta informação e tão pouco conhecimento"),
        ". Talvez um outro aforismo seja mais apropriado e exacto: ",
        React.createElement("i", { className: "font-serif" }, "Nunca como agora, tanta documentação correspondeu, inversamente, a tão pouca informação nova e melhorada"),
        ". Com efeito, multiplica-se por força, entre outros fatores, do mimetismo psicossocial e do stress concorrencial dos media, a reprodução do conteúdo (informação) registado nos suportes sem pausas, nem crítica capazes de provocarem a separação do conteúdo do continente e a maturação interna com vista a uma (re)criação informacional fecundadora. Não se chega a assimilar e a transformar essa informação/conhecimento veiculado pelo documento, caindo-se, assim, numa disfunção grave que designaremos de ",
        React.createElement("i", { className: "font-serif" }, "documentopatia"),
        " (com equivalência à infodermia) disfunção já não confinada ao papel, mas patente noutras técnicas de registo e difusão, como a radiofonia, a televisão e a impactante e atualíssima Internet. Note-se, por fim, que é bem visível em obras, como a Enciclopédia Einaudi em seu volume sobre conhecimento, que este é conotado diretamente com atividade científica e nesta acepção conhecimento aparece como um tipo ou variante de informação."
      )
    ),
    seeAlso: React.createElement("p", null, "Ciência da Informação, Documento, Documentação, Documentopatia, Informação, Infodemia e Mentefacto"),
    references: React.createElement(React.Fragment, null,
      React.createElement("p", null,
        "Floridi, L. (2010). ",
        React.createElement("i", { className: "font-serif" }, "Information: A very short introduction"),
        ". Oxford: Oxford University Press."
      ),
      React.createElement("p", null,
        "Gil, F. (2000). Conhecer. In ",
        React.createElement("i", { className: "font-serif" }, "Enciclopédia Einaudi: Volume 41 Conhecimento"),
        " (pp. 253–287). Lisboa: Imprensa Nacional-Casa da Moeda."
      ),
      React.createElement("p", null,
        "Silva, A. M. da. (2006). ",
        React.createElement("i", { className: "font-serif" }, "A informação: Da compreensão do fenómeno e construção do objeto"),
        " (pp. 67–79, 137–167). Porto: Edições Afrontamento/CETAC Media."
      )
    )
  },
  {
    term: "Conjuntura",
    definition: React.createElement(React.Fragment, null,
      React.createElement("p", null,
        "No sentido fixado por historiadores como Pierre Vilar é ",
        React.createElement("i", { className: "font-serif" }, "o conjunto das condições articuladas entre si que caracterizam um dado momento no movimento global da matéria histórica. Neste sentido, trata-se de todas as condições; tanto das condições psicológicas, políticas e sociais, como das económicas ou das meterológicas"),
        " (VILAR, 1985: 77). Este sentido de uso historiográfico compagina-se com abordagens sociológicas, nomeadamente pautadas pelo paradigma dialético. Um sentido que em Ciência da Informação mescla-se com o de meio ambiente, tornando-se utilíssimo nos estudos de comportamento informacional e, também, de produção ou génese do fluxo informacional."
      )
    ),
    seeAlso: React.createElement("p", null, "Contexto, situação, Estrutura e Meio Ambiente"),
    references: React.createElement(React.Fragment, null,
      React.createElement("p", null,
        "Silva, A. M. da. (2006). ",
        React.createElement("i", { className: "font-serif" }, "A informação: Da compreensão do fenómeno à construção do objeto"),
        " (pp. 137–167). Porto: Edições Afrontamento; CETAC.COM."
      ),
      React.createElement("p", null,
        "Vilar, P. (1985). ",
        React.createElement("i", { className: "font-serif" }, "Iniciação ao vocabulário da análise histórica"),
        ". Lisboa: Edições João Sá da Costa"
      )
    )
  },
  {
    term: "Contexto",
    definition: React.createElement(React.Fragment, null,
      React.createElement("p", null,
        "Termo comum a várias línguas (português, espanhol, francês, italiano, inglês, etc) dicionarizado como a inter-relação de circunstâncias que acompanham um facto ou uma situação ou como a composição e o que envolve e condiciona um elemento que aí se destaca, dentro, porém, do campo literário e linguístico: ",
        React.createElement("i", { className: "font-serif" }, "encadeamento das ideias de um escrito ou ainda o que constitui um texto no seu conjunto"),
        ". Em Ciência da Informação, mais precisamente nos estudos de comportamento informacional, é um conceito operatório oportuno, a par do meio ambiente, embora possa ser dispensado por quem use de forma extensiva e intensiva a teoria sistémica. Há, porém, óbvias vantagens de usá-lo estritamente no âmbito das atitudes humanas e sociais emergentes do fenómeno infocomunicacional. Neste sentido, define-se como uma unidade agregadora de elementos materiais (um edifício, um ou mais aposentos quaisquer que constitui cenário para a ação infocomunicacional), tecnológicos (mobiliário, material de escritório, computadores com ou sem ligação à Internet, etc.) e simbólicos (o estatuto e os papéis desempenhados pelas pessoas ou atores sociais) que envolvem o(s) sujeito(s) de ação infocomunicacional através de momentos circunstanciais delimitados cronologicamente (situação). Engloba dois tipos essenciais: orgânico e efémero. O contexto orgânico pode ainda ser institucional (em que a unidade agregadora é determinada estruturalmente por uma instituição pública ou privada, mas com aparelho político-administrativo) e informal (em que a unidade agregadora é determinada estruturalmente por entidades individuais e coletivas, sem ou com reduzido aparato burocrático e de génese e extinção rápidas). O contexto efémero possui uma variedade de graus que vão do mais acidental e volátil, como é o caso de um grupo de pessoas conhecidas que se encontram na rua a conversar (emitir e receber informação), o caso dos comícios, das manifestações espontâneas e organizadas, etc., podendo confundir-se com situação, até ao mais perene e regulado, como é o caso das tertúlias de amigos que se reúnem periodicamente. Este tipo concreto de contexto efémero pode converter-se em contexto orgânico informal. A linha divisória é ténue, mas existe. Quando os contextos se cruzam, sobrepõem ou coexistem estamos perante uma relação contextual de complexidade variável."
      )
    ),
    seeAlso: React.createElement("p", null, "Comportamento Informacional, Necessidade, Meio Ambiente, Contexto e Situação"),
    references: React.createElement(React.Fragment, null,
      React.createElement("p", null,
        "Passarelli, B., Silva, A. M. da, & Ramos, F. (Orgs.). (2014). ",
        React.createElement("i", { className: "font-serif" }, "e-Infocomunicação: Estratégias e aplicações"),
        " (pp. 91–92). São Paulo: Editora Senac São Paulo."
      ),
      React.createElement("p", null,
        "Silva, A. M. da. (2006). ",
        React.createElement("i", { className: "font-serif" }, "A informação: Da compreensão do fenómeno à construção do objeto"),
        " (pp. 137–167). Porto: Edições Afrontamento; CETAC.COM."
      )
    )
  },
  {
    term: "Cultura",
    definition: React.createElement(React.Fragment, null, React.createElement("p", null, "Etimologicamente o termo procede do latim cultura (acção de cultivar a terra’ , porém em sentido figurado passou a designar a ação de cultivar o espírito (Corroy; Gonnet, 2008: 75-79). Entende-se, a partir deste sentido figurado, cultura como uma dimensão humana e social compreendendo dois capitais: um capital cognitivo, mitológico e ritual (saberes, crenças, normas, proibições, valores) e um capital técnico (saber-fazer, práticas, regras) (Silva, 2006: 16-41). Deparamos uma amplitude conceitual que se consolidou de tal modo que filósofos, artistas, escritores e cientistas não primam pela unanimidade em torno de uma acepção comum, sendo normal que cada grupo ou conjunto de especialistas, se aproprie de cultura como conceito operatório útil às finalidades do respetivo campo ou área.A antropologia, por exemplo, e a sociologia, inevitavelmente, não podem prescindir deste conceito. Percebe-se a sua utilidade extensa nomeadamente na caracterização do homem na relação com os seus semelhantes e em contraponto à natureza. No entanto, esta dicotomia homem - natureza, forçou em tempos mais recentes a uma reformulação no quadro do pensamento complexo postulado por Edgar Morin. O esforço feito neste sentido está patente no modo como o sentido de património deixou de se cingir apenas ao cultural, incluindo, também, o natural.. A abrangência omnipotente do conceito cultura é, assim, consagrado para abarcar o material e o imaterial, mas também por se plasmar numa expressão de inegável transcendência: o ‘saber reflexivo com que Dietrich Schwanitz o seu enciclopédico trabalho ", React.createElement("i", { className: "font-serif" }, "Cultura: tudo o que é preciso saber"), " (2009: 512-515). Schwanitz consagra a amplitude semântica da cultura, mas ao mesmo tempo introduz implicitamente a informação ao explicar que a cultura convoca a comunicação e ao mostrar que a cultura se estrutura com múltiplas linguagens, desde a corporal à verbal e outras (Silva, 2019: 128-133). Assumindo isto, Schwanitz ajuda-nos a elucidar como o conceito operatório de cultura, já tão profundamente radicado nos diversos vocabulários das Ciências Sociais, é imprescindível também no campo da Ciência da Informação, na medida em que ajuda a marcar os limites objetivos da informação e da comunicação como campo de estudo, limites que se fixam nas representações racionais e emocionais codificadas - o que estiver na vivência e sensibilidade do ser humano, porém não possui ainda ‘ideias/emoções codificadas’ na mente, logo não é informação, cabendo, no entanto, no âmbito conceitual amplo de cultura. Pode-se, portanto, afirmar que a cultura abarca informação e comunicação, remetendo para dimensões que ultrapassam o estritamente humano e social. Por isso é que a Ciência da Informação aborda parcialmente o extenso e ambíguo ‘campo’ cultural, acentuando a natureza infocomunicacional das expressões culturais, como, por exemplo, as Artes Visuais e Música. Em relação a esta a Ciência da Informação não investiga o impacto emocional causado pela produção musical (toda ela), a estética e as particularidades internas das peças musicais, não contempla privilegia as origens, evolução, protagonistas (compositores, intérpretes, orquestras, etc.), ensino, entidades privadas e públicas, os instrumentos, os estilos, as diferentes escolas e tendências, porque tudo isto pode caber no âmbito da História e da Sociologia; para a Ciência da Informação interessa recensear as partituras e todos os documentos (de todo o tipo e de qualquer suporte) produzidos/recebidos pelo músico/compositor e pela entidade musical. não apenas para dar seguimento aos procedimentos descritivos e organizativos ou mediadores que possibilitam o acesso generalizado, mas para registar diversos elementos orgânicos e contextuais que envolvem o processo de produção e que vão interessar e muito a historiadores e outros especialistas/utilizadores (Silva, 2019: 139-140)."))
    ),
    seeAlso: React.createElement("p", null, "Informação, Comunicação e Infocomunicação"),
    references: React.createElement(React.Fragment, null,
      React.createElement("p", null,
        "Corroy, L., & Gonnet, J. (2008). ",
        React.createElement("i", { className: "font-serif" }, "Dictionnaire d’initiation à l’info-com"),
        " (2ème éd.). Paris: Magnard-Vuibert."
      ),
      React.createElement("p", null,
        "Schwanitz, D. (2009). ",
        React.createElement("i", { className: "font-serif" }, "Cultura: Tudo o que é preciso saber"),
        ". Lisboa: Livros d’Hoje; Publicações Dom Quixote."
      ),
      React.createElement("p", null,
        "Silva, A. M. da. (2006). ",
        React.createElement("i", { className: "font-serif" }, "A informação: Da compreensão do fenómeno e construção do objeto"),
        " (pp. 15–41, 137–167). Porto: Edições Afrontamento/CETAC Media."
      ),
      React.createElement("p", null,
        "Silva, A. M. da. (2019). Informação, cultura e música: Notas exploratórias para um aprofundamento interdisciplinar. In A. D. Guerreiro (Dir. Científico), ",
        React.createElement("i", { className: "font-serif" }, "Musicografia Braille e equidade na CPLP"),
        " (pp. 125–151). Lisboa: Edições Universitárias Lusófonas"
      )
    )
  },
  {
    term: "Cultura Digital",
    definition: React.createElement(React.Fragment, null,
      React.createElement("p", null, "Trata-se de um conceito ligado ao surgimento e impacto das TICs: Tecnologias de Informação e Comunicação na sociedade e cultura humana. Carla Borges define-a ‘como o conjunto de práticas, costumes e formas de interação social as quais são realizadas a partir dos recursos da tecnologia digital, como a internet e as TICs’. E acrescenta: ‘A cultura digital se refere a toda mudança ocasionada pela tecnologia e pela internet, que, em poucos anos, transformou o mundo e a maneira como interagimos nele. Em uma sociedade que permanece em constante crescimento e transformação, a cultura digital emerge com práticas sociais inovadoras que reconfiguram a maioria dos aspetos de nossas vidas (Borges, 2019). Por sua vez Luis Borges Gouveia escalpelizar as características ou dimensões da cultura digital, focando a sua atenção nas organizações ou empresas: (a) viabilidade que consiste na confiabilidade das infraestruturas e processos para garantir a continuidade dos negócios e manter a confiança dos clientes, funcionários e outras partes interessadas; (b) abertura que é a capacidade de gerir e de fazer bom uso de diferentes tipos de informação, disponíveis em grandes quantidades, dentro e fora da Organização; é conhecimento, ou seja, desenvolvimento da inteligência coletiva e partilha de conhecimento estruturado ou informal através ou além das fronteiras usuais dentro e fora da Empresa, e ainda capacidade de criar valor usando a informação disponível; (d) agilidade que é a capacidade de transformar e experimentar constantemente, o que implica, por sua vez, permitir a iniciativa individual e a aprendizagem por tentativa e erro; (e) confiança que gera envolvimento com base na autenticidade e na exemplaridade dentro e fora da Organização, implicando uma busca por significado, a fim de reunir homens e mulheres em torno de metas e valores partilhados; (f) interdependência que consiste em projetar modelos de negócio inovadores e soluções mutuamente satisfatórias entre as várias partes interessadas, novas parcerias e alianças que precisam ser criadas, operando de maneira mais transversal e cooperativa; e (g) responsabilidade enquanto capacidade para controlar o consumo de energia digital e levar em conta a diversidade para que todos na empresa entendam as questões em jogo e sintam que ela tem algo a contribuir para a comunidade e para o mundo do futuro (Gouveia, 2020). O mesmo autor observa que o conceito cultura digital relaciona-se profundamente e abarcados conceitos de inclusão digital e de literacia da informação, mostrando como este forte elo se observa no universo empresarial. Entretanto, podemos passar para uma escala mais ampla, social e estrutural, e não é forçado estabelecer uma afinidade conceitual com a expressão informação líquida, inspirada na obra do sociólogo polaco, naturalizado britânico, Zygmunt Bauman (1925-2017), nomeadamente no livro Modernidade Líquida (1999). Richele Gringer Vignoli defendeu recentemente a tese de doutoramento sobre a informação líquida e daí extraiu, pelo menos, dois artigos (Richele, 2021, 2022 e 2025). O conceito proposto é definido do seguinte modo: ‘A informação líquida é disforme, atemporal e desmaterializada. É híbrida, ubíqua, aberta, rizomática e incomensurável. A informação líquida é de produção e de interesse de todo indivíduo e sujeito da informação, pós-humano e líquido. Em sua organização, fechamentos ou restrições classistas, físicos e semânticos são inadmissíveis. A informação líquida visa representar o conhecimento e a informação nos movimentos e fluxos da sociedade em todo espaço, lugar e não lugar que possa ocupar, tem elevada capilaridade e penetração social. Sua condição é temporária, instável, flexível e fugidia. Está essencialmente no polo virtual, é uma entidade sem corpo, maquinicamente hibridizada, desterritorializada e desmaterializada (Vignoli, 2021, p. 425). A sua caracterização compreende vários atributos que a Autora elenca e desenvolve: híbrida (‘é sustentada na multiplicidade de formas, formatos, suportes, mídias, por linguagens, tecnologias e em suas manifestações entre espaços, lugares e não lugares’ (Vignoli, 2021, p. 428). Uma vez que o que é híbrido indica que duas espécies distintas foram cruzadas e que algo está fora da normalidade, o que está hibridizado responde a um tipo de entroncamento que pode ser natural ou artificial); ubíqua (‘visa potencializar as formas de acesso à informação em sua localização atemporal, integral, entre espaços, lugares e não lugares, a todo sujeito da informação e na capacidade de produção de informação e conhecimento com e por dispositivos diversos (Vignoli, 2021); aberta (‘indica o movimento da informação e do conhecimento com ilimitada disponibilidade considerando o sujeito da informação como autor do conhecimento’ (Vignoli, 2021, p. 471). A informação se justifica como aberta em suas possibilidades de disponibilidade, de produção para além do escrutínio técnico-científico e nos movimentos de abertura da ciência’); rizomática (‘é conectiva, heterogénea, acontece na multiplicidade, está apta a rupturas, é contra o decalque, dicotomias e estruturas fechadas, está em movimento cartográfico, desmaterializada e no polo virtual’ (Vignoli, 2021, p. 492). A informação líquida não se fecha em sistemas, hierarquias ou estruturas, tal como é um rizoma. A informação líquida e rizomática é baseada em contexto filosófico que instiga o pesquisador e profissional da informação a visualizarem a informação em contexto totalmente virtual e na teoria plástica de Deleuze e Guattari (1995)’; e incomensurável (‘O foco das discussões da informação líquida como incomensurável está voltado às questões de controle da informação nos espaços analógicos e virtuais, em fenómenos informacionais que afetam a proporcionalidade e a qualidade da informação’ (Vignoli, 2021, p. 506, Vignolli, 2025: 1-15). Com esta caracterização pode dizer-se que a informação líquida é facilmente absorvida pelo conceito cultura digital e, por isso mesmo, é aqui exposta, dado o seu cariz sociológico e pós-moderno, ou seja, esta conceituação da informação posiciona a Ciência da Informação como uma disciplina sociológica e não como uma ciência social aplicada, defendida neste Dicionário. Neste sentido, o conceito proposto por Richele Vignoli pode ser usado pela Ciência da Informação para se compreender a Era da Informação ou Digital e para se explorar melhor o sentido difuso de Cultura Digital, mas esse conceito não permite caracterizar epistemologicamente, com exatidão, o objeto de estudo da Ciência da Informação [trans e interdisciplinar]. Por outro lado, como parte da cultura digital e no contexto da Ciência da Informação, a servidão voluntária é observada quando até o tempo livre é cada vez mais capturado por lógicas de capitalização simbólica e informacional. Como exemplo, a leitura, o passeio, uma refeição, momentos outrora associados ao lazer, passam a ser transformados voluntariamente em conteúdos, dados ou autoimagem nas redes sociais. Impulsionados pelo medo de \"desperdiçar\" tempo não produtivo, os indivíduos submetem-se a uma servidão voluntária, na qual o descanso é instrumentalizado como estratégia de visibilidade ou valor informacional, esvaziando sua função regeneradora.")
    ),
    seeAlso: React.createElement("p", null, "Cultura, Infocomunicação, Informação, Comunicação e Paradigma Dialético"),
    references: React.createElement(React.Fragment, null,
      React.createElement("p", null,
        "Borges, C. (n.d.). ",
        React.createElement("i", { className: "font-serif" }, "Cultura digital: Quais são as suas características e influências na sociedade?")
      ),
      React.createElement("p", null,
        "Gouveia, L. B. (2022). ",
        React.createElement("i", { className: "font-serif" }, "Cultura digital, definição e dimensões constitutivas: Uma proposta para mapear e diagnosticar as condições de uso do digital nas organizações"),
        " [Apresentação em PowerPoint]. Congresso Internacional de Altos Estudos (CAED). Consulta facilitada pelo autor."
      ),
      React.createElement("p", null,
        "Vignoli, R. G. (2021a). ",
        React.createElement("i", { className: "font-serif" }, "A informação líquida: Breve contextualização"),
        ". Ciência da Informação Express, 3, 1–6. Recuperado de ",
        React.createElement("a", { href: "https://cienciadainformacaoexpress.ufla.br/index.php/revista/article/view/60/34", target: "_blank", rel: "noopener noreferrer", className: "text-blue-600 hover:underline" }, "link")
      ),
      React.createElement("p", null,
        "Vignoli, R. G. (2021b). ",
        React.createElement("i", { className: "font-serif" }, "Informação líquida: Contribuições teóricas à ciência da informação e à organização do conhecimento"),
        " [Tese de doutoramento, Universidade Estadual Paulista Campus de Marília]. Recuperado de ",
        React.createElement("a", { href: "https://www.marilia.unesp.br/Home/Pos-Graduacao/CienciadaInformacao/Dissertacoes/vignoli_rg_dr_mar.pdf", target: "_blank", rel: "noopener noreferrer", className: "text-blue-600 hover:underline" }, "link")
      ),
      React.createElement("p", null,
        "Vignoli, R. G. (2025). ",
        React.createElement("i", { className: "font-serif" }, "A informação líquida: Um conceito para reflexão na ciência da informação"),
        ". Transinformação, 37, 1–17. https://doi.org/10.1590/2318-0889202525"
      )
    )
  },
  {
    term: "Curadoria informacional",
    definition: React.createElement(React.Fragment, null,
      React.createElement("p", null, "Etimologicamente vem do latim ", React.createElement("i", { className: "font-serif" }, "curatoriae"), ", cuidar, zelar por algo, vigiar. O termo curado, considerado o âmbito museológico e na língua inglês, tornou-se sinônimo de conservador: ", React.createElement("b", null, "‘"), "No entanto, há, no Brasil, diferentes concepções de curadoria e, consequentemente, de curador. Uma delas entende curadoria como pesquisa de coleção e curador como o pesquisador de coleção e, em consequência, aquele que define o conteúdo da exposição. Outra, mais recente, considera curadoria como o processo que integra todas as ações em torno da coleção ou do objeto museológico: aquisição, pesquisa, conservação, documentação, comunicação (exposição e educação). Nesse sentido, todos aqueles inseridos nesse processo são curadores. No ", React.createElement("i", { className: "font-serif" }, "Dictionnaire encyclopédique de muséologie"), " (Paris: Armand Colin), 2011, p. 581, André Desvallées e François Mairesse apresentam o termo ‘curador’ (", React.createElement("i", { className: "font-serif" }, "Curator"), " com o verbete conservateur) como o pesquisador de coleção que poderá assumir posição diretiva na instituição’ (Conceitos-chave de museologia, 2013: 24). No Direito significa quem está juridicamente obrigado de cuidar dos interesses e bens dos que sejam incapazes de assumir essa função, como órfãos menores, doentes mentais, toxicômanos ou inválidos, trata-se de um tutor. Na Informática a curadoria algorítmica usa soluções baseadas em algoritmos como aplicativos ou ferramentas para coletar conteúdos, organizá-los e distribui-los. Na Comunicação fazer curadoria é selecionar, organizar, apresentar e aumentar da informação, visto que há uma contínua agregação de valor qualitativo aos dados iniciais", React.createElement("b", null, "  "), "(Dicionário da Comunicação, 2009: 124)", React.createElement("b", null, " . "), "E dentro deste campo comunicacional é incluída a curadoria associada ao jornalismo é a mediação, ou seja, a agregação de valor pessoal para dar mais sentido e contexto e a distribuição: ‘O curador encontra os dados, seleciona-os, edita-os contextualizando-os, formata-os e escolhe plataformas de divulgação e formas de expressão, isto é, organiza, compartilha e, até, monitora a receção (Dicionário da comunicação, 2009: 124). E é incluída, também, a curadoria informacional que ‘surge no cenário da hipertela e fluxo exagerado de informações. A função de curadoria não deve ser confundida com uma simples mediação, mas como uma atividade de agregação qualitativa e de distribuição de algo que não é inédito mas que ganhou elementos novos a partir do trabalho de curador. curador não cria, mas dá sentido ao conteúdo criado por outrem. Publicar dados brutos não é curadoria.. No entanto, organizar esses dados de forma atraente é um formato curatorial. Pode ser curador o jornalista um blogueiro, um ativista seja qual for sua bandeira de luta. O curador certifica a informação num mundo onde todos publicam, ou seja, dá o endosso de qualidade num cenário de hipertelia# (Dicionário da comunicação, 2009: 124). A conexão entre informação e comunicação persiste na literatura especializada relativa a estra temática e é fundamental combatê-la. É incorrecto usar a expressão curadoria informacional no âmbito da comunicação e do jornalismo e o próprio termo curadoria anda a ser ressignificado de forma assaz abusiva e muito distante do sentido etimológico. Curar é cuidar, zelar e vigiar e na Ciência da Informação (trans e interdisciplinar) remete para o paradigma custodial objetivamente anacrônico. Não há, nem se justifica que haja, curadoria da informação, nem dos dados, mas sim gestão da informação (e dos dados), conceito suficientemente fundamentado e aplicado. E nos Museus o museólogo é um gestor da informação contida nos artefactos conservados e expostos e o criador e organizador de uma exposição temporária faz muito mais que cuidar, zelar e vigiar. Nesse universo profissional foi considerado anacrônico o termo conservador, mas curador acentua o mesmo anacronismo’")
    ),
    seeAlso: React.createElement("p", null, "Gestão da Informação e Mediação"),
    references: React.createElement(React.Fragment, null,
      React.createElement("p", null,
        "Desvalées, A., & Mairesse, F. (Dirs.). (2013). ",
        React.createElement("i", { className: "font-serif" }, "Conceitos-chave de museologia"),
        ". São Paulo: Comitê Brasileiro do Conselho Internacional de Museus; Conselho Internacional de Museus; Pinacoteca do Estado de São Paulo; Secretaria de Estado da Cultura."
      ),
      React.createElement("p", null,
        "Marcondes Filho, C. (Org.). (2009). ",
        React.createElement("i", { className: "font-serif" }, "Dicionário da comunicação"),
        " (2ª ed.). São Paulo: Paulus."
      )
    )
  },
  {
    term: "Dado (1)",
    definition: React.createElement(React.Fragment, null,
      React.createElement("p", null,
        "Em Informática dado corresponde ao inglês data, enquanto factos, noções ou instruções representados de uma forma conveniente para um processo de comunicação (Matos, 2009: 103). De forma mais desenvolvida, é a representação convencional, através de codificação de uma informação de modo a permitir o tratamento eletrónico (Silva, 2006: 145). Dado seria, assim, o código numérico correspondente a cada palavra das línguas naturais. Aceite esta acepção, em Ciência da Informação dado e informação são sinônimos, pelo que as Ciências dos Dados e o ",
        React.createElement("i", { className: "font-serif" }, "Big Data"),
        " implicam o estudo e o trabalho com uma massa gigantesca de sentido passível de cruzamentos semânticos, potenciadores de conhecimento estratégico e científico.."
      )
    ),
    seeAlso: React.createElement("p", null, "Dado (1), Documento Eletrónico e Informação"),
    references: React.createElement(React.Fragment, null,
      React.createElement("p", null,
        "Silva, A. M. da. (2006). ",
        React.createElement("i", { className: "font-serif" }, "A informação: Da compreensão do fenómeno à construção do objeto"),
        ". Porto: Edições Afrontamento; CETAC.COM."
      )
    )
  },
  {
    term: "Dado (2)",
    definition: React.createElement(React.Fragment, null,
      React.createElement("p", null, "Serve para significar o impulso ou vibração física, cerebral, electro-magnética, sísmica, etc. que através de dispositivos tecnológicos específicos são convertidos em representações gráficas (dado 1 e informação). Em Ciência da Informação esta acepção diferencia claramente dado de informação e de conhecimento.")
    ),
    seeAlso: React.createElement("p", null, "Dado (1) e Semióforo."),
    references: React.createElement(React.Fragment, null,
      React.createElement("p", null, "Silva, A. M. da. (2006). ", React.createElement("i", { className: "font-serif" }, "A informação: Da compreensão do fenómeno à construção do objeto"), ". Porto: Edições Afrontamento; CETAC.COM, pp.137-167.")
    )
  },
  {
    term: "Desinfocomunicação",
    definition: React.createElement(React.Fragment, null,
      React.createElement("p", null,
        "O termo comum é desinformação (Bezerra, 2024 e Silva & Gouveia, 2023: 39-58), que no universo linguístico anglosaxão apresenta duas variantes: (dis)information e (mis)information, respectivamente com intenção de desinformar e sem a intenção de desinformar (Floridi, 2011), relacionando-se ainda com ",
        React.createElement("i", { className: "font-serif" }, "information warfare"),
        " ou infowar, que pode ser traduzido por guerra de informação, que é o uso estratégico da informação (ou da desinformação) como arma para influenciar, manipular, desestabilizar ou controlar indivíduos, grupos ou nações. Uma análise mais rica do ponto de vista conceitual permite perceber que o referente, ou seja, o fenómeno que se pretende designar e caracterizar não contém apenas uma representação falsa ou manipuladora de factos, acontecimentos ou situações, mas inclui, também, a intenção de que essa representação seja partilhada e assimilada por outros, ou seja, comunicada. Temos, assim, a articulação natural de informação com comunicação, porém de forma negativa: o propósito é distorcer a realidade, mentir ou levar ao engano ou à ‘servidão voluntária’ um número indeterminado de pessoas."
      )
    ),
    seeAlso: React.createElement("p", null, "Infocomunicação,Infodemia e Infoxicação"),
    references: React.createElement(React.Fragment, null,
      React.createElement("p", null,
        "Bezerra, A. C. (2024). ",
        React.createElement("i", { className: "font-serif" }, "Miséria da informação: Dilemas éticos da era digital"),
        ". Rio de Janeiro: Garamond."
      ),
      React.createElement("p", null,
        "Floridi, L. (2011). ",
        React.createElement("i", { className: "font-serif" }, "The philosophy of information"),
        ". Oxford: Oxford University Press."
      ),
      React.createElement("p", null,
        "Silva, A. M. da, & Gouveia, L. B. (2023). (Des)infocomunicar ou a busca do sentido original. In M. dos S. Lopes (Coord.), ",
        React.createElement("i", { className: "font-serif" }, "A história na era da (Des)informação"),
        " (pp. 39–58). Lisboa: CEPCEP – Centro de Estudos dos Povos e Culturas de Expressão Portuguesa e Universidade Católica Portuguesa."
      )
    )
  },
  {
    term: "Discurso",
    definition: React.createElement(React.Fragment, null,
      React.createElement("p", null,
        "Semiólogos, linguistas, estudiosos de Literatura e sociólogos usam e modelam o termo/conceito dentro dos seus campos específicos de abordagem, sendo que no ",
        React.createElement("i", { className: "font-serif" }, "Dictionnaire encyclopédique des sciences de l’information et de la communication"),
        " estão fixadas três acepções: (1) exposição oral ou escrita (o discurso em público de um político ou de um protagonista em determinado contexto público); (2) exposição oral ou escrita do ponto de vista linguístico (análise do discurso); (3) conjunto de expressões sob todas as formas de significativas de uma crença, de uma crença ou de representações sociais. Em Ciência da Informação todas estas acepções são absorvidas pelo conceito operatório de Infocomunicação."
      )
    ),
    seeAlso: React.createElement("p", null, "Informação, Comunicação, Imaginário (e informação)"),
    references: React.createElement(React.Fragment, null,
      React.createElement("p", null,
        React.createElement("i", { className: "font-serif" }, "Dictionnaire encyclopédique des sciences de l’information et de la communication"),
        ". (1997). B. Lamizet & A. Silem (Dirs.), Dictionnaire encyclopédique des sciences de l’information et de la communication (p. 192). Paris: Éllipses Éditions."
      ),
      React.createElement("p", null, "Silva, A. M. da. (2006). A informação: Da compreensão do fenómeno à construção do objeto (pp. 137–167). Porto: Edições Afrontamento; CETAC.COM.")
    )
  },
  {
    term: "Docmedia",
    definition: React.createElement(React.Fragment, null,
      React.createElement("p", null,
        "Em 2013, Peter Wintonick sugeriu ‘Docmedia’ (2013) como uma nova palavra para substituir a expressão ‘",
        React.createElement("i", { className: "font-serif" }, "documentary cinema"),
        "‘ . Porém, em 2011 e 2013, Armando Malheiro da Silva já tinha promovido o significado de ‘Docmedia’ no contexto das Tecnologias de Informação e Comunicação, num artigo científico publicado na Prisma.com dividido em duas partes, respetivamente, na edição nº 16 e nº 18. Docmedia resulta da aglutinação da abreviação ‘Doc’ (abreviatura de Documento) com a palavra meio/media. Documento provém do latim ",
        React.createElement("i", { className: "font-serif" }, "documentum"),
        " [",
        React.createElement("i", { className: "font-serif" }, "docere"),
        " + ",
        React.createElement("i", { className: "font-serif" }, "mentem"),
        " \"ensinar a mente\") ou ",
        React.createElement("i", { className: "font-serif" }, "doctus"),
        " + ",
        React.createElement("i", { className: "font-serif" }, "mentem"),
        " \"mente treinada\"], sendo a palavra ",
        React.createElement("i", { className: "font-serif" }, "media"),
        " o feminino da palavra ‘médio’, derivada do latim ",
        React.createElement("i", { className: "font-serif" }, "mediu"),
        ", que significa meio. Na dinâmica de investigação da Ciência da Informação, Docmedia diz respeito ao documento que ganha a capacidade de ser inscrito, registado e passível de ser transmitido. Atualmente a ",
        React.createElement("i", { className: "font-serif" }, "box"),
        " de TV permite o registo e gravação de programas para serem vistos mais tarde. Por outro lado, um antônimo de Docmedia é o livro, em suporte de papel, já que depois de publicado e impresso não pode ser alterado (ou seja, é estático). Outro exemplo de Docmedia é um ",
        React.createElement("i", { className: "font-serif" }, "site"),
        ", uma vez que pode ser atualizado (ou seja, é dinâmico). Atualmente, o documento é cada vez menos estático e cada vez mais dinâmico, tendo em conta a necessidade de atualizar conteúdos constantemente. De facto, Malheiro da Silva já tinha identificado esta necessidade: ‘",
        React.createElement("i", { className: "font-serif" }, "O docmedia resulta da possibilidade tecnológica de criar dispositivos ajustáveis a plataformas, que disponibilizem e combinem, ou articulem, entre si, as funções inscritiva e transmissora"),
        "‘ . De seguida, o mesmo Autor destaca o Skype como Docmedia, sendo que outras plataformas como o Microsoft Teams e o Zoom seguem a mesma lógica: permitindo o registo de conversações escritas, ou seja, servem para ‘",
        React.createElement("i", { className: "font-serif" }, "o exercício pleno da função transmissora e "),
        "(...) ",
        React.createElement("i", { className: "font-serif" }, "inscritiva, o que mostra como um meio ou media "),
        "(...) ",
        React.createElement("i", { className: "font-serif" }, "é "),
        "(...) ",
        React.createElement("i", { className: "font-serif" }, "um docmedia"),
        "‘ ."
      )
    ),
    seeAlso: React.createElement("p", null, "Documento e Infocomunicação"),
    references: React.createElement(React.Fragment, null,
      React.createElement("p", null,
        "Silva, A. M. da. (2011). O impacto do uso generalizado das TIC (Tecnologias da Informação e da Comunicação) no conceito de documento: Ensaio analítico (I). ",
        React.createElement("i", { className: "font-serif" }, "Prisma.Com, 16"),
        ". Porto. Recuperado de ",
        React.createElement("a", { href: "https://ojs.letras.up.pt/index.php/prismacom/article/view/1974/3286", target: "_blank", rel: "noopener noreferrer", className: "text-blue-600 hover:underline" }, "link")
      ),
      React.createElement("p", null,
        "Silva, A. M. da. (2012). O impacto do uso generalizado das TIC (Tecnologias da Informação e da Comunicação) no conceito de documento: Ensaio analítico (II). ",
        React.createElement("i", { className: "font-serif" }, "Prisma.Com, 18"),
        ". Porto. Recuperado de ",
        React.createElement("a", { href: "https://ojs.letras.up.pt/index.php/prismacom/article/view/1955/3298", target: "_blank", rel: "noopener noreferrer", className: "text-blue-600 hover:underline" }, "link")
      ),
      React.createElement("p", null,
        "Wintonick, P. (2013). New platforms for docmedia: ‘Varient of a manifesto’. In ",
        React.createElement("i", { className: "font-serif" }, "The documentary film book"),
        " (pp. 376–382). Recuperado de ",
        React.createElement("a", { href: "https://www.researchgate.net/publication/309447061_New_Platforms_for_Docmedia_'Varient_of_a_Manifesto", target: "_blank", rel: "noopener noreferrer", className: "text-blue-600 hover:underline" }, "link")
      )
    )
  },
  {
    term: "Documentação",
    definition: React.createElement(React.Fragment, null,
      React.createElement("p", null, "Conjunto de documentos. Perante o impacto crescente das Tecnologias da Informação e Comunicação (TIC) há a tendência para adaptar o seu uso aos novos termos, tomando-o como sinônimo de informação registada. Este exercício semântico está correto e é similar ao que associa documentação a informação documental, que é atualmente muito adotada em Espanha e no espaço ibero-americano onde se fala o espanhol e que designa os conteúdos produzidos por uma entidade e preparados (ordenados, classificados, catalogados e indexados) para serem usados, com a ênfase na ideia de que esses conteúdos só são tratados porque surgem materializados num suporte (documento). No entanto, é preciso não esquecer que as chamadas ‘técnicas documentais’ (classificação, descrição, indexação,,,) são intelectuais e negligenciam o suporte, valorizando o mentefacto. A informação não é objeto de estudo da Ciência da Documentação, posição epistemológica defendida claramente por José Lopez-Yepes (2004: 1, 453-455) com o argumento de que só é possível tratar a informação a partir do suporte (documento) em que ela é inscrita. Daí a insistência no objeto informação documental, abordado no verbete Informação.")
    ),
    seeAlso: React.createElement("p", null, "Ciência da Informação, Informação e Documento"),
    references: React.createElement(React.Fragment, null,
      React.createElement("p", null,
        "López-Yepes, J. (2004). ",
        React.createElement("i", { className: "font-serif" }, "Diccionario enciclopédico de ciencias de la documentación"),
        " (Vol. 1, pp. 453–455). Madrid: Editorial Síntesis."
      ),
      React.createElement("p", null,
        "Silva, A. M. da. (2006). ",
        React.createElement("i", { className: "font-serif" }, "A informação: Da compreensão do fenómeno à construção do objeto"),
        " (pp. 137–167). Porto: Edições Afrontamento; CETAC.COM."
      )
    )
  },
  {
    term: "Documento",
    definition: React.createElement(React.Fragment, null,
      React.createElement("p", null, "Informação materializada num suporte (orgânico, inorgânico e tecnológico). É condição necessária, mas não suficiente para que ocorra em pleno o fenómeno infocomunicacional., embora fique garantida a externalização e a partilha social de conteúdos mentais. Esta materialização ou externalização conferiu, desde o aparecimento da escrita, o cariz estático ou imóvel ao documento em suporte rígido. Na Era Digital, em que estamos, o documento permanece, mas perdeu já a rigidez da inscrição ou até da modelagem e ganhou, também, a fluidez da transmissão (o Docmedia). Toda a informação que o ser humano cria, recebe e guarda na sua memória tem como fonte e suporte o próprio corpo. Ter materializada em algo ou conter informação é completamente distinto de suscitar informação. Uma lâmina de microscópio com substância analisável não contém informação humana e social, mas pode suscitar uma ou mais representações mentais e emocionais. A alegoria do antílope de Suzanne Brier insere-se na releitura da noção de documentação lançada no tratado de Paul Otlet (1934) e segundo a qual esse simpático herbívoro em estado selvagem na savana não é um documento, mas se for levado para um Jardim Zoológico ou para um Laboratório de Zoologia vira um documento porque vai ser estudado, isto é, torna-se objeto de estudo científico e, consequentemente, é um documento. Adotar esta perspetiva é distorcer o sentido etimológico da palavra em foco: do latim documentum ‘demonstração, prova, lição’ e mais tarde ‘instrumento oficial escrito’ e do latim docere ‘ensinar, mostrar’ Nesta acepção originária o documento tem de ‘portar’ algo, de mostrar algo, de transmitir uma lição, pelo que o antílope só pode ser documento se tiver em si informação humana e social. O antílope tomado em si mesmo, como ela admitiu, não nasce documento e mesmo no Laboratório não se torna documento; o que sucede é que ele ao ser estudado suscita muita informação/conhecimento e gera vários tipos de documentos. O documento tem sempre um produtor e, potencialmente, um destinatário ou usuário e ambos são importantes, com relevância para o primeiro, sem o qual nada acontece. Quando um investigador estuda um minério ou um animal em laboratório vai produzir informação registrada em suporte para ser comunicada. Porém, essa atividade infocomunicacional não consegue, de modo algum, transformar não-documentos em documentos. Por fim, retoma-se a definição exposta no início para enfatizar as suas implicações radicais: documento só existe se tiver em si informação e assim sendo cabe dentro do conceito desde um livro, um periódico em papel ou digital, um contrato notarial, um desenho, uma pintura, uma maquete, uma mesa, um edifício e até, além de muitos mais exemplos cabíveis, um organismo vivo manipulado geneticamente (o antílope evocado por Suzanne Briet, mas gerado laboratorialmente, como foi o caso da ovelha Dolly, com base em conhecimento/informação genética, torna-se documento humano e social).")
    ),
    seeAlso: React.createElement("p", null, "Docmídia, Documentação, Informação e Infocomunicação"),
    references: React.createElement(React.Fragment, null,
      React.createElement("p", null,
        "Briet, S. (1951). ",
        React.createElement("i", { className: "font-serif" }, "Qu’est-ce que la documentation?"),
        " Paris: EDIT-Éditions Documentaires, Industrielles et Techniques."
      ),
      React.createElement("p", null,
        "Otlet, P. (2018). ",
        React.createElement("i", { className: "font-serif" }, "Tratado de documentação: O livro sobre o livro: teoria e pr'e1tica"),
        " (Edição em português) [PDF]. Brasília, DF: Briquet de Lemos Livros."
      ),
      React.createElement("p", null,
        "Silva, A. M. da. (2006). ",
        React.createElement("i", { className: "font-serif" }, "A informação: Da compreensão do fenómeno e construção do objeto"),
        " (pp. 43–66, 137–167). Porto: Edições Afrontamento/CETAC Media."
      ),
      React.createElement("p", null,
        "Silva, A. M. da. (2011). O impacto do uso generalizado das TIC (Tecnologias da Informação e da Comunicação) no conceito de documento: Ensaio analítico (I). ",
        React.createElement("i", { className: "font-serif" }, "Prisma.Com, 16"),
        ". Porto. Recuperado de ",
        React.createElement("a", { href: "https://ojs.letras.up.pt/index.php/prismacom/article/view/1974/3286", target: "_blank", rel: "noopener noreferrer", className: "text-blue-600 hover:underline" }, "link")
      ),
      React.createElement("p", null,
        "Silva, A. M. da. (2012). O impacto do uso generalizado das TIC (Tecnologias da Informação e da Comunicação) no conceito de documento: Ensaio analítico (II). ",
        React.createElement("i", { className: "font-serif" }, "Prisma.Com, 18"),
        ". Porto. Recuperado de ",
        React.createElement("a", { href: "https://ojs.letras.up.pt/index.php/prismacom/article/view/1955/3298", target: "_blank", rel: "noopener noreferrer", className: "text-blue-600 hover:underline" }, "link")
      )
    )
  },
  {
    term: "Documento cartográfico",
    definition: React.createElement(React.Fragment, null,
      React.createElement("p", null,
        "É a representação veiculada por um ",
        React.createElement("i", { className: "font-serif" }, "código de imagens que, sob a forma gráfica ou fotogramétrica, representa a superfície terrestre ou um corpo celeste. Por exemplo: mapa, planta, globo"),
        " (Alves et al., 1993: 37;; Faria e Pericão, 2008; 409). Em Ciência da Informação deve prevalecer mais a tipologia do conteúdo que o aspecto do suporte e, neste sentido, mapas ou cartografia(s) que está em mudança do papel para o digital, o que implica substituir o termo documento pela representação codificada, ou seja, o mapa ou a cartografia."
      )
    ),
    seeAlso: React.createElement("p", null, "Imagem e Informação"),
    references: React.createElement(React.Fragment, null,
      React.createElement("p", null,
        "Alves, I., et al. (1993). ",
        React.createElement("i", { className: "font-serif" }, "Dicionário de terminologia arquivística"),
        ". Lisboa: Instituto de Biblioteca Nacional e do Livro; Organismo de Normalização Sectorial para a Informação e Documentação."
      ),
      React.createElement("p", null,
        "Faria, M. I., & Pericão, M. da G. (2008). ",
        React.createElement("i", { className: "font-serif" }, "Dicionário do livro: Da escrita ao livro eletrônico"),
        ". Coimbra: Edições Almedina."
      ),
      React.createElement("p", null,
        "Silva, A. M. da. (2006). ",
        React.createElement("i", { className: "font-serif" }, "A informação: Da compreensão do fenómeno à construção do objeto"),
        " (pp. 137–167). Porto: Edições Afrontamento; CETAC.COM."
      )
    )
  },
  {
    term: "Documento de arquivo",
    definition: React.createElement(React.Fragment, null,
      React.createElement("p", null,
        "Expressão crucial para os arquivistas que insistem na autonomia científica da Arquivística e docentes da especialidade. Tomado à letra significa aquele e só aquele documento com pertença e/ou origem no Arquivo, instituição pública ou privada, com estatuto cultural, destinada a custodiar documentação que serve para a pesquisa histórica, fins jurídicos e probatórios, além de outros. Os arquivistas que aceitam, sem crítica, esta acepção confundem documento de arquivo com documento administrativo ",
        React.createElement("i", { className: "font-serif" }, "termo genérico usado para designar todo o documento produzido pelos serviços administrativos, nomeadamente públicos"),
        " (",
        React.createElement("i", { className: "font-serif" }, "Dictionnaire des archives"),
        ", 1991: 86). Mais subtis foram as autoras do Dicionário do Livro (Faria; Pericão, 1988: 101) ao definirem documento de arquivo como o ",
        React.createElement("i", { className: "font-serif" }, "documento de qualquer natureza ou sobre qualquer suporte"),
        " ",
        React.createElement("i", { className: "font-serif" }, "material que uma pessoa, entidade ou organismo criou ou recebeu e conservou em virtude das suas funções ou das suas atividades, para assegurar a prova de um facto ou ação, ou simplesmente a título de informação"),
        ". Não caíram na restrição administrativa, mas penderam para uma abrangência tão ampla que o documento que define tanto pode ser de Arquivo, como de Biblioteca. De qualquer forma há uma inflexão semântica importante: o documento deixa de ser caracterizado pelo ",
        React.createElement("i", { className: "font-serif" }, "locus"),
        " onde está ou é guardado, para ser considerado pela tipologia de ações e de assuntos próprios de um contexto burocrático público e privado. O primado da custódia ou guarda cede, assim, ao primado da produção, só que este levanta outras e complexas implicações de cariz epistemológico pertinentes para o debate sobre a autonomia científica da Arquivística. Epistemologicamente o que ajuda a caracterizar a natureza do documento não é o lugar onde é guardado, a não ser que este seja também o lugar e contexto onde é produzido, e como os documentos não são produzidos no arquivo, mas nos órgãos ou serviços da instituição onde existe esse serviço de arquivo, é claramente inadequada a expressão ‘documento de arquivo."
      )
    ),
    seeAlso: React.createElement("p", null, "Arquivística/Arquivologia, Informação, Infocomunicação, Proveniência"),
    references: React.createElement(React.Fragment, null,
      React.createElement("p", null,
        "Faria, M. I., & Pericão, M. da G. (2008). ",
        React.createElement("i", { className: "font-serif" }, "Dicionário do livro: Da escrita ao livro eletrônico"),
        ". Coimbra: Edições Almedina."
      ),
      React.createElement("p", null,
        "López-Yepes, J. (2004). ",
        React.createElement("i", { className: "font-serif" }, "Diccionario enciclopédico de ciencias de la documentación"),
        ", Vol. 1, Madrid: Editorial Síntesis."
      ),
      React.createElement("p", null,
        "Silva, A. M. da. (2006). ",
        React.createElement("i", { className: "font-serif" }, "A informação: Da compreensão do fenómeno à construção do objeto"),
        " (pp. 137–167). Porto: Edições Afrontamento; CETAC.COM."
      )
    )
  },
  {
    term: "Documento electrónico",
// FIX: Corrected misplaced `seeAlso` and `references` content and fixed syntax error.
    definition: React.createElement(React.Fragment, null,
      React.createElement("p", null, "Se documento consiste em conteúdo num suporte, o atributo eletrônico qualifica o suporte e não o conteúdo. Há, assim, redundância e perda de sentido. A confusão advém do facto de a tecnologia eletrónica e digital possuir uma complexidade inaudita que turva a linha separadora entre mentefacto e artefacto. Esta linha passa agora pela subtil diferença entre ‘linguagem natural’ (signos ditos e escritos, ouvidos e lidos pelos seres humanos) e ‘linguagem-máquina’ (códigos feitos pelos seres humanos para os transístores e demais componentes dos computadores). Entram ambas no conceito humano e social de Informação, mas a ‘linguagem-máquina’ acaba diluindo-se num determinado artefacto tecnológico (computadores e sistemas tecnológicos de informação) e este processo coisifica-a, torna-a componente de um produto tridimensional, de uma ‘ferramenta’, de um utensílio externo... Os ‘metadados’ produzidos automaticamente pelos sistemas tecnológicos de informação, mas apresentados em ‘linguagem-natural’ (português, inglês, francês, etc.) são informação ‘embebida’ desde o início no ", React.createElement("i", { className: "font-serif" }, "software"), ", assim como são indiscutivelmente informação os textos em ", React.createElement("i", { className: "font-serif" }, "Word"), ", os conteúdos dos ficheiros ", React.createElement("i", { className: "font-serif" }, "Excel"), " ou as bases de dados.")
    ),
    seeAlso: React.createElement("p", null, "Documento, Informação e Infocouminicação"),
    references: React.createElement(React.Fragment, null,
      React.createElement("p", null, "Faria, M. I., & Pericão, M. da G. (2008). ", React.createElement("i", { className: "font-serif" }, "Dicionário do livro: Da escrita ao livro eletrônico"), ". Coimbra: Edições Almedina."),
      React.createElement("p", null, "López-Yepes, J. (2004). ", React.createElement("i", { className: "font-serif" }, "Diccionario enciclopédico de ciencias de la documentación"), ", Vol. 1, Madrid: Editorial Síntesis."),
      React.createElement("p", null, "Silva, A. M. da. (2006). ", React.createElement("i", { className: "font-serif" }, "A informação: Da compreensão do fenómeno à construção do objeto"), " (pp. 137–167). Porto: Edições Afrontamento; CETAC.COM.")
    )
  },
  {
    term: "Documento iconográfico",
// FIX: Changed comma to colon for property definition.
    definition: React.createElement(React.Fragment, null,
      React.createElement("p", null, "É a representação mental (informação) através de um código de imagens a duas ou a três dimensões, como o desenho, a pintura, a gravura, a fotografia, etc. A expressão informação imagética, pictórica ou fotográfica explicita melhor o que realmente é o foco da Ciência da Informação, centrada no modo de tornar acessível (com metadados e metainformação) o conteúdo buscado pelo usuário, qualquer que ele seja.")
    ),
// FIX: Changed comma to colon for property definition.
    seeAlso: React.createElement("p", null, "Imagem, Informação e Infocomunicação"),
// FIX: Changed comma to colon for property definition.
    references: React.createElement(React.Fragment, null,
      React.createElement("p", null,
        "Faria, M. I., & Pericão, M. da G. (2008). ",
        React.createElement("i", { className: "font-serif" }, "Dicionário do livro: Da escrita ao livro eletrônico"),
        ". Coimbra: Edições Almedina."
      ),
      React.createElement("p", null,
        "López-Yepes, J. (2004). ",
        React.createElement("i", { className: "font-serif" }, "Diccionario enciclopédico de ciencias de la documentación"),
        ", Vol. 1. Madrid: Editorial Síntesis."
      ),
      React.createElement("p", null,
        "Silva, A. M. da. (2006). ",
        React.createElement("i", { className: "font-serif" }, "A informação: Da compreensão do fenómeno à construção do objeto"),
        " (pp. 137–167). Porto: Edições Afrontamento; CETAC.COM"
      )
    )
  },
  {
    term: "Documento sonoro",
// FIX: Changed comma to colon for property definition.
    definition: React.createElement(React.Fragment, null,
      React.createElement("p", null,
        "Aparece dicionarizado como registo sonoro: ",
        React.createElement("i", { className: "font-serif" }, "informação veiculada através de um código de sons, que necessita de equipamento apropriado para ser ouvido"),
        " (",
        React.createElement("i", { className: "font-serif" }, "Dicionário de terminologia arquivística"),
        ", 1993: 84). Equivale a documento áudio e anda associado ao audiovisual que é documento em que se articula som e imagem estática ou animada. A informação neste tipo de documento, sobretudo com o advento do digital, está amarrada a uma base tecnológica (suporte) específica e sofisticada, porém não é esta e sim aquela a prioridade da Ciência da Informação."
      )
    ),
// FIX: Changed comma to colon for property definition.
    seeAlso: React.createElement("p", null, "Informação e Infocomunicação"),
// FIX: Changed comma to colon for property definition.
    references: React.createElement(React.Fragment, null,
      React.createElement("p", null,
        "Faria, M. I., & Pericão, M. da G. (2008). ",
        React.createElement("i", { className: "font-serif" }, "Dicionário do livro: Da escrita ao livro eletrônico"),
        " (p. …). Coimbra: Edições Almedina."
      ),
      React.createElement("p", null,
        "López-Yepes, J. (2004). ",
        React.createElement("i", { className: "font-serif" }, "Diccionario enciclopédico de ciencias de la documentación"),
        ", Vol. 1, Madrid: Editorial Síntesis."
      ),
      React.createElement("p", null,
        "Silva, A. M. da. (2006). ",
        React.createElement("i", { className: "font-serif" }, "A informação: Da compreensão do fenómeno à construção do objeto"),
        " (pp. 137–167). Porto: Edições Afrontamento; CETAC.COM"
      )
    )
  },
  {
    term: "Epistemologia (da Ciência da Informação)",
// FIX: Changed comma to colon for property definition.
    definition: React.createElement(React.Fragment, null,
      React.createElement("p", null,
        "No ",
        React.createElement("i", { className: "font-serif" }, "Dicionário Temático Larousse - Filosofia"),
        " é claramente expresso que a Epistemologia ‘é, por conseguinte, apenas uma reflexão sobre as ciências, das quais se esforça por isolar um método universalmente válido unificaria e simplificaria todas as operações nas ciências’ (1992: 72). E a Enciclopedia Garzanti di Filosofia reforça esta significação: ‘ocupa-se dos problemas e fundamentos, natureza.os limites e as condições de validade do saber científico, tanto da ciência considerada exata (lógica e matemática), quanto das ciências consideradas empíricas (física, química, biologia, etc.)’ (1981: 256). Não refere as sociais e humanas, mas não as exclui.Trata-se, pois, de um ramo da Filosofia que se ocupa da natureza interna (elementos teórico-metodológicos do conhecimento) e externa (as condições históricas e a singularidade concreta dos cientistas) de todas as ciências, não se devendo, portanto, deturpar esta semântica original com apropriações de cariz sociologista ou ideológico ou ainda subjugar a Epistemologia à concepção pós-moderna e construtivista da ciência (Boghosian, 2015) que tem como consequência óbvia negar-lhe a existência plena. Seguindo esta perspetiva questiona-se muita da literatura acumulada, sobretudo no Brasil no espaço iberoamericano, sobre epistemologia da Ciência da Informação, sendo interessante notar que no espaço norte americano, europeu e asiático, onde florescem as ",
        React.createElement("i", { className: "font-serif" }, "iSchools ou Information Schools"),
        ", a reflexão epistemológica é de pendor mais positivista e tecnológico, convergindo, porém, para a ideia de que a Ciência da Informação não é uma ciência unificada, mas uma interdisciplina. Perspetiva cumulativa ou fragmentária que se opõe à perspetiva evolutiva. Uma epistemologia da Ciência da Informação ocupa-se sobre as condições internas e externas da sua cientificidade, sobre a consistência dos conceitos operatórios, teorias e método aplicável; ocupa-se da dinâmica transdisciplinar (Rendon Rojas, ; Silva, 2006; Silva e Ribeiro, 2002; Silva e Paletta, 2022) que conduziu as disciplinas prático-profissionais, surgidas no séc XIX e XX (Arquivística, Bibliotecologia/Biblioteconomia, Documentação, Museologia e",
        React.createElement("i", { className: "font-serif" }, "  Information Science"),
        " norte-americana) a uma integração geradora de um campo científico novo, unificado e, ao mesmo tempo, aberto a relações interdisciplinares fecundas com as Ciências Sociais e Humanas e com as Exatas (Matemáticas Aplicadas e Computação)."
      )
    ),
// FIX: Changed comma to colon for property definition.
    seeAlso: React.createElement("p", null, "Ciência da Informação, Perspetiva Cumulativa ou Fragmentária, Perspetiva Evolutiva, Interdisciplinaridade, Transdisciplinaridade, Ciclo da Informação, Paradigma Custodial, Paradigma Pós-Custodial, Paradigma Dialética, Método Quadripolar"),
// FIX: Changed comma to colon for property definition.
    references: React.createElement(React.Fragment, null,
      React.createElement("p", null,
        "Boghossian, P. (2015). ",
        React.createElement("i", { className: "font-serif" }, "O medo do conhecimento: Contra o relativismo e o construtivismo"),
        ". Lisboa: Gradiva."
      ),
      React.createElement("p", null, "Enciclopedia Garzanti di Filosofia. (1981). Milano: Garzanti Editora."),
      React.createElement("p", null,
        "Julia, D. (1992). ",
        React.createElement("i", { className: "font-serif" }, "Dicionário temático Larousse - Filosofia"),
        ". Lisboa: Círculo de Leitores."
      ),
      React.createElement("p", null,
        "Rendon Rojas, M. A. (2020). La ciencia de la información documental: Una disciplina transdisciplinar. In M. B. Marques & L. E. Gomes (Coords.), ",
        React.createElement("i", { className: "font-serif" }, "Ciência da informação: Visões e tendências"),
        " (pp. 59–88). Coimbra: Imprensa da Universidade."
      ),
      React.createElement("p", null,
        "Silva, A. M. da. (2002). ",
        React.createElement("i", { className: "font-serif" }, "Das \"Ciências\" Documentais à Ciência da Informação: Ensaio epistemológico para um novo modelo formativo"),
        ". Porto: Edições Afrontamento."
      ),
      React.createElement("p", null,
        "Silva, A. M. da. (2006). ",
        React.createElement("i", { className: "font-serif" }, "Informação: Da compreensão do fenómeno e construção do objeto científico"),
        ". Porto: CETAC.COM; Edições Afrontamento."
      ),
      React.createElement("p", null,
        "Silva, A. M. da, & Paletta, F. C. (2022). ",
        React.createElement("i", { className: "font-serif" }, "Ciência da Informação: Estudos de epistemologia e de ética"),
        ". Ponta Grossa, PR: Atena."
      )
    )
  },
  {
    term: "Era da Informação",
// FIX: Changed comma to colon for property definition.
    definition: React.createElement(React.Fragment, null,
      React.createElement("p", null, "Expressão contida no título da obra em três volumes do sociólogo Manuel Castells (2002-2003). Tendo em conta a conotação do primeiro termo com a longa duração é legítimo considerá-la uma nova época, que se segue à Contemporânea ou à Modernidade (sécs. XVIII-XX). É possível associá-la à Pós-Modernidade, mas sabemos que não existe consenso entre filósofos, sociólogos, politólogos e historiadores acerca da validade de tais conceitos. Teve início numa revolução de matriz tecnológica (meados do séc. XX), com um acelerado e generalizado impacto na vida e sociedade humanas, e poderá estender-se por mais de um século. Esta durabilidade multissecular confere-lhe densidade e complexidade estruturais, englobando várias conjunturas.")
    ),
// FIX: Changed comma to colon for property definition.
    seeAlso: React.createElement("p", null, "Sociedade Pós-Industrial, Sociedade da Informação e Era Digital"),
// FIX: Changed comma to colon for property definition.
    references: React.createElement(React.Fragment, null,
      React.createElement("p", null,
        "Castells, M. (2002–2003). ",
        React.createElement("i", { className: "font-serif" }, "A era da informação: Economia, sociedade e cultura"),
        " (3 vols.). Lisboa: Fundação Calouste Gulbenkian."
      ),
      React.createElement("p", null,
        "Silva, A. M. da. (2006). ",
        React.createElement("i", { className: "font-serif" }, "A informação: Da compreensão do fenómeno à construção do objeto"),
        " (pp. 137–167). Porto: Edições Afrontamento; CETAC.COM."
      )
    )
  },
  {
    term: "Era Digital",
// FIX: Changed comma to colon for property definition.
    definition: React.createElement(React.Fragment, null,
      React.createElement("p", null, "Equivale à expressão Era da Informação, porém acentuando mais a nova tecnologia que torna possível a criação, armazenamento, disseminação, partilha e recriação em grande escala e em cascata da informação/conhecimento. Designa um tempo longo (estrutura) que se iniciou na segunda metade do séc. XX e se prolonga no futuro com contornos e duração indefinidas. No Glossário da Sociedade da Informação da APDSI é designação dada à era que atravessamos devido à disseminação das novas tecnologias digitais e ao seu grande impacto em termos sócio-culturais’ (Glossário da Sociedade da Informação).")
    ),
// FIX: Changed comma to colon for property definition.
    seeAlso: React.createElement("p", null, "Era da Informação, Informação, Conhecimento e Estrutura"),
// FIX: Changed comma to colon for property definition.
    references: React.createElement(React.Fragment, null,
      React.createElement("p", null,
        "APDSI. (2019). ",
        React.createElement("i", { className: "font-serif" }, "Glossário da Sociedade da Informação"),
        ". Associação para a Promoção e Desenvolvimento da Sociedade da Informação. Disponível em ",
        React.createElement("a", { href: "https://apdsi.pt/glossario/wp-content/uploads/sites/4/2019/07/GLOSS%CC%81RIO-DA-SOC-INFORMACAO_v2019-APDSI.pdf?utm_source=chatgpt.com", target: "_blank", rel: "noopener noreferrer", className: "text-blue-600 hover:underline" }, "link")
      )
    )
  },
  {
    term: "Estrutura",
// FIX: Changed comma to colon for property definition.
    definition: React.createElement(React.Fragment, null,
      React.createElement("p", null,
        "Na perspectiva historiográfica, a partir da apropriação do conceito por Fernand Braudel, as sociedades devem ser estudadas, mas para isso torna-se necessário exprimir as respectivas relações internas através de um esquema de estrutura e longa duração. E Pierre Vilar acrescenta: ",
        React.createElement("i", { className: "font-serif" }, "A história ocupa-se de sociedades, mas de sociedades em movimento. Dito de outro modo, a história deve construir esquemas estruturais de funcionamento (e não apenas de relações estáticas), e deve dar conta não só das principais estruturas teóricas existentes no mundo em tal ou tal momento, mas também das contradições, das tensões, que provocam as mudanças de estruturas, aquilo que poderíamos denominar desestruturações e reestruturações"),
        " (Vilar, 1985: 62). Esta acepção eminentemente historiográfica e, por extensão, sociológica, partilhada em larga medida com os economistas, é aceite em Ciência da Informação quando se impõe a análise da produção e do fluxo informacionais no respetivo processo histórico. Mas há também um outro sentido, assaz diverso do anterior, com que o termo é usado em Ciência da Informação e que consiste na tessitura organizacional de uma qualquer entidade pública ou privada, singular ou coletiva como se define em Direito Administrativo. Exemplificando, refere-se numa Organização (instituição ou empresa) à estrutura orgânico-funcional quando se pretende designar os órgãos e serviços dessa entidade e respectivas funções ou atividades/tarefas. E esta estrutura compõe o Sistema de Informação em sentido lato."
      )
    ),
// FIX: Changed comma to colon for property definition.
    seeAlso: React.createElement("p", null, "Conjuntura, Meio Ambiente e Sistema de Informação"),
// FIX: Changed comma to colon for property definition.
    references: React.createElement(React.Fragment, null,
      React.createElement("p", null,
        "Silva, A. M. da. (2006). ",
        React.createElement("i", { className: "font-serif" }, "A informação: Da compreensão do fenómeno à construção do objeto"),
        " (pp. 137–167). Porto: Edições Afrontamento; CETAC.COM."
      ),
      React.createElement("p", null,
        "Vilar, P. (1985). ",
        React.createElement("i", { className: "font-serif" }, "Iniciação ao vocabulário da an'e1lise hist'f3rica"),
        ". Lisboa: Edições João Sá da Costa."
      )
    )
  },
  {
    term: "Ética da Informação",
// FIX: Changed comma to colon for property definition.
    definition: React.createElement(React.Fragment, null,
      React.createElement("p", null,
        "A Ética da Informação, ao derivar da Ética, inscreve-se por inteiro na Filosofia e, sendo assim, percebe-se o entendimento de Ludwig Wittgenstein, para quem ‘A ética, na medida em que provém do desejo de dizer algo sobre o sentido último da vida, o bem absoluto, o valor absoluto, não pode ser ciência’ (Silva; Paletta, 2022: 147-162). Um posicionamento que se replica na literatura especializada disponível. E se começarmos pelo verbete Ética do volume 37 – Conceito Filosofia/Filosofias da incontornável ",
        React.createElement("i", { className: "font-serif" }, "Enciclopédia Einaudi"),
        ", logo no primeiro parágrafo se lê que ‘Na filosofia anglo-saxónica, a ética é habitualmente concebida como análise racional dos conceitos e juízos de valor, incluindo o modo como se pode determinar a validade dessas asserções’ (Kolakowski,, 1997: 300). E na síntese final é, claramente, afirmado que a Ética como a Lógica e a Metafísica são ramos da Filosofia: ‘intimamente ligada à religião e ao direito, ela ocupa-se das normas que regem ou devem reger as relações de cada indivíduo com os outros e dos valores que cada indivíduo deve realizar no seu comportamento’ (Kolakowski, 1997: 339). Se com este perfil ou caracterização quisermos entendê-la como disciplina, terá ainda assim de ser como disciplina filosófica. É o que decorre, aliás, da consulta de outras obras, como a da filósofa e eticista espanhola Adela Cortina ou de quem sobre ela se tem debruçado. No primeiro capítulo da parte I - ‘O âmbito da Ética - da sua Ética Mínima, Adela Cortina debruça-se sobre ‘o que não compete à ética fazer’ e afirma: ‘Certamente, não devemos permitir que nos confundam com moralistas, porque não é tarefa da ética indicar aos homens o que devem fazer de modo imediato. Mas, por outro lado, não podemos permitir que nos identifiquem com o historiador (mesmo que façamos a história da ética), com o narrador descomprometido com o pensamento alheio, com o asséptico analista da linguagem ou com o cientista. Mesmo que não possa, de modo algum, prescindir da moral, a história, a análise linguística ou os resultados das ciências, a ética tem sua tarefa própria, que só pode levar a cabo como filosofia: e apenas como filosofia moral (Cortina, 2009: 37). Para Adela Cortina são dois os pilares sobre os quais assenta a Ética, sem os quais perde o seu objetivo: ‘o interesse moral e a fé na missão da Filosofia’ (Cortina, 2009: 40). Não anda longe deste posicionamento epistemológico Luís de Araújo em sua Ética (2010) perspectivando-a ‘como uma reflexão sobre os valores que no âmbito da ação real e concreta suscitam a adesão da vontade humana a fim de proporcionarem livremente o aperfeiçoamento da existência individual e social, conduzindo assim a um combate permanente em prol da Dignidade’ (Araújo, 2010: 34). Postura, no entanto, diferente é a do filósofo espanhol exilado no México desde 1939 até sua morte em 2011, Adolfo Sánchez Vázquez, que concebe a Ética como ‘a teoria ou ciência do comportamento moral dos homens em sociedade\". Ou seja, é ciência de uma forma específica do comportamento humano’ (Sánchez Vázquez, 2017: 23). E acrescenta: ‘Como ciência, a ética parte de certo tipo de fatos visando descobrir-lhes os princípios gerais. Nesse sentido, embora parta de dados empíricos, isto é, da existência de um comportamento moral efetivo, não pode permanecer no nível de uma simples descrição ou registo dos mesmos, mas os transcende com os seus conceitos, hipóteses e teorias. Enquanto conhecimento científico, a ética deve aspirar à racionalidade e objetividade mais completas e, ao mesmo tempo, deve proporcionar conhecimentos sistemáticos, metódicos e, no limite do possível, comprováveis (Sánchez Vázquez, 2017: 23). Sánchez Vázquez rejeita claramente a conexão que ele apelida de ‘tradicional’ e segundo a qual a Ética é reduzida a um capítulo da Filosofia, em geral, especulativa. Enformado pelo materialismo histórico-dialético percebe-se a intenção do filósofo espanhol de associar a Ética a um processo político de intervenção e de transformação positiva da sociedade. Este tópico da distinção ou não entre Ética e Ciência coloca-se com pertinência ao tratarmos da Ética da Informação, como se verá mais adiante. Mas antes disso importa ainda focar outra distinção entre Ética e Moral. Elas confundem-se em nível semântico, mas também não tem faltado quem as ouse distinguir. E entre várias distinções possíveis trazemos, pela sua razoabilidade, uma à colação: a Ética trata/estuda o que é bom para o indivíduo e para a sociedade, tendo em vista qual a natureza dos deveres na interação pessoa e sociedade; a Moral é o conjunto de normas, princípios, preceitos, costumes e valores que guiam a conduta do indivíduo dentro do seu grupo social. A Moral é normativa, enquanto a Ética é teórica, procurando explicar e justificar os costumes de uma sociedade, bem como ajudar na resolução dos seus dilemas mais comuns. E, se é possível distinguir Ética de Moral, mais fácil e necessário se torna distingui-la da lei, embora esta tenha por base, natural e frequentemente, princípios éticos. Decorre, dessa distinção, outra, que é subsequente: Ética não é deontologia e muito menos código deontológico, mas este será tanto melhor e oportuno, quanto mais e fundas raízes tiver na Ética. Fernando Savater, na sua ",
        React.createElement("i", { className: "font-serif" }, "Ética para um jovem"),
        " (",
        React.createElement("i", { className: "font-serif" }, "Ética para Amador"),
        ", na versão espanhola e original), quase a finalizar o capítulo cinco, sintetiza bem o que, aqui, importa deixar claro: ‘Creio que a primeira e indispensável condição ética é a de estarmos decididos a não viver de qualquer maneira: estarmos convencidos de que nem tudo vem a dar no mesmo, embora, mais tarde ou mais cedo, tenhamos que morrer. Quando se fala de ‘moral’ pensa-se habitualmente nas ordens e costumes que é hábito respeitar, pelo menos na aparência e muitas vezes sem que se saiba bem porquê. Mas talvez o busílis da questão não esteja em submetemo-nos a um código ou em contrariar o estabelecido (o que é também submetemo-nos a um código, só que às ",
        React.createElement("i", { className: "font-serif" }, "avessas"),
        ") mas em tentar ",
        React.createElement("i", { className: "font-serif" }, "compreender"),
        ". Compreender porque é que certos comportamentos nos convêm e outros não, compreender o que é a vida e o que é que pode fazê-la ‘boa’ para nós, seres humanos (Savater, 1998: 68). O popular filósofo e especialista espanhol em Ética, através deste extracto, ajuda-nos a esclarecer que não nos preocupa discutir a deontologia do profissional da informação, assunto, sem dúvida, importante, tanto mais que um código deontológico pode e deve ser uma extensão bem conseguida de um sério debate ético, mas como estamos a abrir caminho por terreno que até agora não ousaram explorar, o que realmente nos interessa é compreender as implicações éticas do processo de pesquisa e dos modos como as aplicações práticas são percebidas e assimiladas nos contextos a que se destinam. E isto faz-nos entrar, pelos escritos de Rafael Capurro. No âmago da Ética da Informação. Sem resvalar para tal plano, o cientista e eticista da informação, heideggeriano em termos filosóficos, Rafael Capurro tende a colocar a Ética da Informação como uma disciplina que parece ocupar o papel e a missão própria da Ciência da Informação. A sua proposta de Ética intercultural tem o mérito de chamar a atenção de que a indagação ética não pode ficar alheia às especificidades culturais dos povos e das pessoas (Capurro, 2010), apresentando-se com uma dupla faceta: teoria descritiva e teoria emancipatória. A primeira visa explorar as estruturas de Poder que influenciam as atitudes informacionais e as tradições em diferentes culturas e épocas; a segunda desenvolve criticismos das atitudes morais e das tradições no campo informacional em um nível individual e coletivo, incluindo aspetos normativos. Mesmo que não seja admitido explicitamente, a faceta descritiva confere à Ética da Informação um estatuto sociológico e científico, que, em nossa opinião não lhe cabe, precisamente porque tanto a Sociologia e a Ciência da Informação desempenham esse papel e vão mais além que o mero registo descritivo, avançando para o plano compreensivo, explicativo e aplicacional. Defende-se, assim, uma distinção operativa entre Ciência e Ética da Informação, não por conformismo com a ‘concepção tradicional da Ética’, cunhada por Adolfo Sánchez Vásquez, mas por imperativo de bom senso e racionalidade crítica. E aceita-se, com Rafael Capurro, que a Ética da Informação seja uma teoria emancipatória em diálogo com as Ciências Sociais e, dentro destas, com as Ciências da Comunicação e da Informação, bem como com a Tecnologia Digital. Um diálogo indispensável através do qual a Ética pode ajudar o ser humano a refletir sobre si mesmo, sobre a condição humana numa época de riscos vários, nomeadamente a ameaça da ‘singularidade’, ou seja, novos ‘seres inteligentes’ criados a partir da Inteligência Artificial e da Robótica (Ganascia, 2018; Floridi, 2025). Neste sentido, torna-se necessário subdividir a Ética da Informação em um tópico específico reservado à Ética que deve ser convocada, complementarmente, pelo estudo científico do processo info-comunicacional, que traz consigo questões adequadas à agenda da Ética da Informação: a propriedade intelectual, a privacidade, a liberdade de expressão e controle social da informação, o aumento do controle da informação baseado em tecnologia (Moor; Unsworth, 2005: 11). , a indistinção entre verdade e mentira nomeadamente nas chamadas ‘redes sociais’, a servidão voluntária imposta pelos media digitais, a exorbitante influência que os donos das ",
        React.createElement("i", { className: "font-serif" }, "Big Tech"),
        " detêm sobre o futuro da Humanidade (Kerdellant, 2025; Frenkel;Kang, 2022; Loveluck, 2028), entre muitas outras que constituem ampla matéria de análise e de reflexão em busca de soluções/escolhas, sendo certo que a Ética (seja a Teocêntrica cujo fundamento último é Deus ou a Androcêntrica, cuja centralidade é ocupada pelo Homem, no Ocidente, a partir do séc, XVIII e muito plasmada na Declaração Universal dos Direitos do Homem, 1948) é dilemática, ou seja, os seus princípios conflituam entre si na vida humana e social, exigindo equilíbrios sempre difíceis, assegurados pelo Direito e pela MORAL."
      )
    ),
// FIX: Changed comma to colon for property definition.
    seeAlso: React.createElement("p", null, "Era da Informação, Era Digital, Sociedade da Informação Ciência da Informação"),
// FIX: Changed comma to colon for property definition.
    references: React.createElement(React.Fragment, null,
      React.createElement("p", null,
        "Araújo, L. (2010). ",
        React.createElement("i", { className: "font-serif" }, "Ética"),
        ". Lisboa: Imprensa Nacional-Casa da Moeda."
      ),
      React.createElement("p", null,
        "Capurro, R. (s.d.). Desafíos teóricos y prácticos de la Ética Intercultural de la Información. In ",
        React.createElement("i", { className: "font-serif" }, "Simpósio de ética de informação: conceitos, abordagens, aplicações"),
        " (1. Anais). João Pessoa, PB: Ideia [CD-ROM]."
      ),
      React.createElement("p", null,
        "Cortina, A. (2009). ",
        React.createElement("i", { className: "font-serif" }, "Ética mínima: Introdução à filosofia prática"),
        ". São Paulo: Martins Fontes."
      ),
      React.createElement("p", null,
        "Floridi, L. (2015). ",
        React.createElement("i", { className: "font-serif" }, "The ethics of information"),
        ". Oxford: Oxford University Press."
      ),
      React.createElement("p", null,
        "Frenkel, S., & Kang, C. (2022). ",
        React.createElement("i", { className: "font-serif" }, "Manipulados: A verdade sobre a guerra do Facebook pelo poder absoluto"),
        ". Lisboa: Objetiva/Penguin Random House Grupo Editorial."
      ),
      React.createElement("p", null,
        "Ganascia, J. G. (1994). ",
        React.createElement("i", { className: "font-serif" }, "Inteligência artificial"),
        ". Lisboa: Instituto Piaget."
      ),
      React.createElement("p", null,
        "Kerdellant, C. (2025). ",
        React.createElement("i", { className: "font-serif" }, "Mais poderosos do que os Estados"),
        ". Coimbra: Edições 20."
      ),
      React.createElement("p", null,
        "Kolakowski, L. (1997). Ética. In ",
        React.createElement("i", { className: "font-serif" }, "Enciclopédia Einaudi"),
        " (Vol. 37 – Conceito Filosofia/Filosofias). Lisboa: Imprensa Nacional-Casa da Moeda."
      ),
      React.createElement("p", null,
        "Loveluck, B. (2018). ",
        React.createElement("i", { className: "font-serif" }, "Redes, liberdades e controle: Uma genealogia política da internet"),
        ". Petrópolis, RJ: Editorial Vozes."
      ),
      React.createElement("p", null,
        "Moore, A. D., & Unsworth, K. (2005). ",
        React.createElement("i", { className: "font-serif" }, "Information ethics: Privacy, property and power"),
        ". University of Washington Press."
      ),
      React.createElement("p", null,
        "Sánchez Vázquez, A. (2017). ",
        React.createElement("i", { className: "font-serif" }, "Ética"),
        " (37ª ed.). Rio de Janeiro: Civilização Brasileira."
      ),
      React.createElement("p", null,
        "Savater, F. (1998). ",
        React.createElement("i", { className: "font-serif" }, "Ética para um jovem"),
        " (5ª ed.). Lisboa: Editorial Presença."
      ),
      React.createElement("p", null,
        "Silva, A. M. da, & Paletta, F. C. (2022). ",
        React.createElement("i", { className: "font-serif" }, "Ciência da Informação: Estudos de epistemologia e de ética"),
        ". Ponta Grossa, PR: Atena."
      ),
      React.createElement("p", null,
        "Sinnreich, A., & Gilbert, J. (2024). ",
        React.createElement("i", { className: "font-serif" }, "The secret life of data: Navigating hype and uncertainty in the age of algorithmic surveillance"),
        ". Cambridge, EUA; London, UK: The MIT Press."
      )
    )
  },
  {
    term: "Excesso de Informação",
// FIX: Changed comma to colon for property definition.
    definition: React.createElement(React.Fragment, null,
      React.createElement("p", null,
        "O conceito ",
        React.createElement("i", { className: "font-serif" }, "information overload"),
        " (Wikipedia) foi criado por Bertram Gross, professor de Ciências Políticas na Universidade de Hunter (",
        React.createElement("i", { className: "font-serif" }, "Hunter College"),
        "), na sua obra, ",
        React.createElement("i", { className: "font-serif" }, "The Managing of Organizations,"),
        " (1964) no ano de 1964. Contudo, foi popularizado por Alvin Toffler, escritor americano, no livro de sua autoria Choque do Futuro (2001), publicado em 1970. Em períodos remotos da História já se ouvira falar deste conceito como, por exemplo, no período do Renascimento ou na Revolução Industrial. É, porém, na Era da Informação que se dá a expansão e a mediatização desta expressão. Neste novo ciclo estrutural observamos (e vivenciamos) uma quantidade inédita e incomensurável de informação, devendo-se, particularmente, ao incremento exponencial do consumo de ",
        React.createElement("b", null, " "),
        React.createElement("i", { className: "font-serif" }, "media"),
        " e digitais e os demais derivados das TIC. O excesso de informação",
        React.createElement("i", { className: "font-serif" }, " "),
        " ocorre quando a quantidade de ",
        React.createElement("i", { className: "font-serif" }, "input"),
        " de informação excede a capacidade de processamento da mesma. Este problema pode colocar em causa a inclusão digital e a literacia da informação do recetor, uma vez que este perde a capacidade de produzir informação e conhecimento de qualidade. Esta perda de assimilação pode, por sua vez, conduzir a um estado de ansiedade informacional geradora do impulso busca incessante por adquiri-la na sua integridade que, dada a quantidade exorbitante, se torna uma função inalcançável e frustrante. No Glossário de Conceitos Infocomunicacionais",
        React.createElement("i", { className: "font-serif" }, ", "),
        "‘‘A sociedade pós-moderna trouxe consigo a ansiedade de informação, ou seja, o sofrimento causado pelo fato de não se estar ",
        React.createElement("b", null, " "),
        "consumindo toda a informação.’ (Grupo de Pesquisa, 2020, p. 131)’. Para além disso, ‘O excesso de informação está associado à perda de controle sobre a informação e à inabilidade em usar efetivamente a informação.’ (Bawden; Robinson, 2009, p.4). Roetzel (2019) também afirma que essa inabilidade está relacionada à quantidade, à complexidade e aos níveis de redundância, contradição e inconsistência da informação. Como tal, os profissionais de informação devem cumprir um trabalho minucioso de seleção, avaliação, organização e disseminação de informação: ‘faz-se necessário selecionar fontes de informação confiáveis, detetar informações relevantes, claras, consistentes, ter autonomia intelectual – aprender a pensar por si mesmo –, ressaltando-se a responsabilidade social na formação de cidadãos letrados, capazes não só de ler como também de compreender o que lêem, de modo a poder usar ativamente as informações/conhecimento adquiridos e refletir criticamente. Foi e ainda é atribuído aos bibliotecários e aos educadores este papel de promoção da literacia da informação, missão que Ortega y Gasset (2006) na conferência proferida em 1935 lhes atribuia de forma muito radical: urgia, já nesse tempo, separar o trigo do joio, pôr de lado os livros maus, os textos publicados em catadupa de fraca qualidade ou pernicioso efeito. Bruno Patino assume, na atual Era Digital, a preocupação do filósofo espanhol e lança um apelo: Trata-se de substituir, sem arrependimentos, a ficção transumanista por um novo humanismo. Tudo isto é ainda possível. E, no que me diz respeito, não é uma questão de abandono. Pôr termo ao domínio de uma economia descontrolada da atenção não constitui, em si, a refundação da esperança digital e a construção de um modelo novo. É, contudo, uma etapa necessária e indispensável. O fim da servidão antes da construção da emancipação’ (Patino, 2019: 108). E o mesmo autor apela, em obra mais recente, à construção do discernimento (Patino, 2023: 7678). Como cumprir este desiderato bem intencionado sem cair em atos censórios? E como hoje no labirinto informacional em que se converteu a infosfera agir de forma eficaz e profilática? Eis um desafio que a Ciência da Informação em estreita dinâmica interdisciplinar tem de enfrentar e responder."
      )
    ),
// FIX: Changed comma to colon for property definition.
    seeAlso: React.createElement("p", null, "infoxicação e Infodemia"),
// FIX: Changed comma to colon for property definition.
    references: React.createElement(React.Fragment, null,
      React.createElement("p", null,
        "Bawden, D., & Robinson, L. (2009). The dark side of information: Overload, anxiety and other paradoxes and pathologies. ",
        React.createElement("i", { className: "font-serif" }, "Journal of Information Science, 35"),
        "(2), 180–191. Acesso a 12 de janeiro de 2023."
      ),
      React.createElement("p", null,
        "Gross, B. (1964). ",
        React.createElement("i", { className: "font-serif" }, "The managing of organizations"),
        " (2 vols.). New York: The Free Press of Glencoe."
      ),
      React.createElement("p", null, "Grupo de Pesquisa em Comportamento e Competências InfoComunicacionais. (2020). ", React.createElement("i", { className: "font-serif" }, "Glossário de infocomunicacionais"), ". InInfoCom. https://www.ufrgs.br/infocom/wp-content/uploads/2020/11/Glossario-Final-conceitos-Glossario2Revisado.pdf. Acesso a 12 de janeiro de 2023."),
      React.createElement("p", null,
        "Information overload. (2023, January 12). In ",
        React.createElement("i", { className: "font-serif" }, "Wikipedia, The Free Encyclopedia"),
        ". https://en.wikipedia.org/w/index.php?title=Information_overload&oldid=1130866846"
      ),
      React.createElement("p", null,
        "Ortega y Gasset, J. (2006). ",
        React.createElement("i", { className: "font-serif" }, "MiBrasília"),
        ". SF: Briquet de Lemos Livros."
      ),
      React.createElement("p", null,
        "Patino, B. (2019). ",
        React.createElement("i", { className: "font-serif" }, "A civilização do peixe-vermelho"),
        ". Lisboa: Gradiva. Acesso a 12 de janeiro de 2023."
      ),
      React.createElement("p", null,
        "Patino, N. (2023). ",
        React.createElement("i", { className: "font-serif" }, "Submersos: Como recuperar a liberdade num mundo demasiado cheio?"),
        ". Lisboa: Gradiva Publicações."
      ),
      React.createElement("p", null, "Roetzel, R. G. (2019). Information overload in the information age: A review of the literature from business administration, business psychology, and related disciplines with a bibliometric approach and framework development. ", React.createElement("i", { className: "font-serif" }, "Business Research, 12"), ", 479–522. https://doi.org/10.1007/s40685-018-0069-z"),
      React.createElement("p", null,
        "Toffler, A. (2001). ",
        React.createElement("i", { className: "font-serif" }, "Choque do futuro: Do apocalipse à esperança"),
        ". Lisboa: Livros do Brasil."
      )
    )
  },
  {
    term: "Fluxo de informação",
// FIX: Changed comma to colon for property definition.
    definition: React.createElement(React.Fragment, null,
      React.createElement("p", null, "Etimologicamente Fluxo vem do latin fluxu que significa fluido, que corre, que deixa correr, sentido original distinto de ciclo, do grego circulo, qualquer objeto circular ou movimento circular, evolução dos acontecimentos, Se respeitarmos esta distinção semântica original, um fluxo, em concreto é por vezes definido como o ato de fluir, ou seja, algo em constante movimento, que segue um padrão. E fazendo uma analogia entre este termo e o mundo da informação, um fluxo de informação é considerado uma corrente criada por todo o processo de comunicação dinâmico, como a pesquisa, a seleção e o tratamento da informação de forma a realizar a sua posterior transmissão aos recetores que a desejarem de forma a expandir o seu conhecimento. Nos tempos modernos, estes fluxos encontram-se tão desenvolvidos e tão integrados nos nossos contextos sociais que se encontram numa relação de interligação com a qualidade da informação, querendo referir com isto que o aumento da quantidade destes fluxos levou a que a qualidade mencionada também fosse maior, o que levou a uma expansão no que toca a possíveis finalidades desta informação recolhida. Considera-se também este fenómeno como um impulsionador nos processos de inovação pelo qual temos vindo a ser rodeados todos os dias das nossas vidas, visto que o processo de inovação também em si é composto por diversos fluxos, sendo um dos principais componentes, os fluxos de informação, que possibilitam a análise de conhecimentos que possam mais tarde levar à criação de vantagens competitivas. Com isto, é quase uma garantia que os fluxos de informação continuarão a fazer parte do nosso quotidiano, visto que o conceito de inovação é algo que a humanidade estará sujeita até ao seu fim, e para que este conceito exista, precisa destes fluxos. A sua qualidade seguirá num processo evolutivo, assim como a velocidade da sua transmissão, o que permitirá ao ser humano que a utilize para cada vez mais objetivos, de forma a conseguir continuar a satisfazer as necessidades que a nossa espécie almejará no futuro.")
    ),
// FIX: Changed comma to colon for property definition.
    seeAlso: React.createElement("p", null, "Ciclo da Informação, Infocomunicação, Ciência da Informação"),
// FIX: Changed comma to colon for property definition.
    references: React.createElement(React.Fragment, null)
  },
  {
    term: "Formação Poliédrica",
// FIX: Changed comma to colon for property definition.
    definition: React.createElement(React.Fragment, null,
      React.createElement("p", null,
        "Expressão empregue para caracterizar uma estratégia formativa global e plurifacetada conforme com as exigências do emergente paradigma pós-custodial, infocomunicacional e transdisciplinar no qual se integra a Ciência da Informação trans e interdisciplinar (SILVA; RIBEIRO: 2002; SILVA; RIBEIRO: 2004; e SILVA e PALETTA, 2019). Estratégia plasmada num modelo formativo assente em quatro eixos: a reformular de acordo com o modelo poliédrico que propomos e que se baseia em quatro eixos essenciais: ",
        React.createElement("i", { className: "font-serif" }, "1.º eixo"),
        " - base téorico-metodológica que suporta as múltiplas investigações e actividades funcionais de intersecção multi e interdisciplinar; base esta que decorre diretamente da Ciência da Informação ministrada academicamente através de Licenciatura e Pós-Graduação; 2.º eixo: a Ciência da Informação é, pois, a matriz fundamentadora da ação funcional do documentalista, criador de produtos informacionais, do cibertecário, do analista da informação, do consultor em sistemas de informação, do bibliotecário, do arquivista, do gestor de bases de dados, etc.; ",
        React.createElement("i", { className: "font-serif" }, "3º eixo"),
        " - investigação teórica-aplicada a auditorias e a coordenações de Serviços e Projetos de Gestão de Informação; e ",
        React.createElement("i", { className: "font-serif" }, "4.º eixo"),
        " - formação profissional contínua e em ",
        React.createElement("i", { className: "font-serif" }, "e-learning"),
        " nos mais diversos contextos de gestão de informação. Na prática este modelo traduz-se na necessidade de encontrar e enfatizar no cerne de várias profissões ligadas ao estudo, processamento, armazenamento e difusão da informação a base científica e académica assegurada pelas Licenciaturas e Pós-Graduações em Ciência da Informação. Traduz-se, também, na percepção de que é preciso formar técnicos médios que assegurem tarefas e desempenhos mais práticos que teóricos, mais ligados ao fazer, sem, no entanto, ignorar quo conhecer, investigar e o mudar/resolver problemas. Uma formação que não pode descurar a evolução teórica do campo científico em que se insere."
      )
    ),
// FIX: Changed comma to colon for property definition.
    seeAlso: React.createElement("p", null, "Ciência da Informação, Multidisciplinaridade, Interdisciplinaridade"),
// FIX: Changed comma to colon for property definition.
    references: React.createElement(React.Fragment, null,
      React.createElement("p", null,
        "Silva, A. M. da. (2006). ",
        React.createElement("i", { className: "font-serif" }, "A informação: Da compreensão do fenómeno à construção do objeto"),
        " (pp. 137–167). Porto: Edições Afrontamento; CETAC.COM."
      ),
      React.createElement("p", null,
        "Silva, A. M. da, & Paletta, F. C. (2022). ",
        React.createElement("i", { className: "font-serif" }, "Ciência da Informação: Estudos de epistemologia e de ética"),
        ". Ponta Grossa, PR: Atena Editora."
      ),
      React.createElement("p", null,
        "Silva, A. M. da, & Ribeiro, F. (2002). ",
        React.createElement("i", { className: "font-serif" }, "Das \"Ciências Documentais\" à Ciência da Informação: Ensaio epistemológico para um novo modelo formativo"),
        ". Porto: Edições Afrontamento."
      ),
      React.createElement("p", null,
        "Silva, A. M. da, & Ribeiro, F. (2004). Formação, perfil e competências do profissional da informação. In ",
        React.createElement("i", { className: "font-serif" }, "Congresso BAD"),
        ". ",
        React.createElement("a", { href: "https://repositorio-aberto.up.pt/handle/10216/14056", target: "_blank", rel: "noopener noreferrer", className: "text-blue-600 hover:underline" }, "link")
      )
    )
  },
  {
    term: "Fundo",
// FIX: Changed comma to colon for property definition.
    definition: React.createElement(React.Fragment, null,
      React.createElement("p", null,
        "Surgiu, na prática, para corrigir o modo funcional-temático, que consiste em reordenar os documentos sem ter em conta a ordem original da entidade de proveniência em favor de um acesso ‘por matérias’ ao estilo da conceção iluminista e dos novos potenciais utilizadores) . Tornou-se depois uma das pedras angulares da Arquivística, sendo, já no séc. XX, ressignificada como ",
        React.createElement("i", { className: "font-serif" }, "conjunto orgânico de documentos produzidos e/ou recebidos por uma entidade pública ou privada no decurso da sua actividade"),
        ", o que implica, do ponto de vista teórico, uma alteração substancial, mas também geradora, no plano prático, de contradições operatórias graves. Foi artificialmente oposta à noção de Coleção que, no entanto, os arquivistas não deixaram de usar para identificar todo o tipo de documentação não padronizada ou não claramente administrativa (ofícios, cartas, relatórios, actas de reuniões, recibos, facturas, etc.). Fotografias, desenhos, mapas, etc. aparecem como coleções, ficando a dúvida sobre se serão ‘documento de arquivo’ ou ‘documento de biblioteca’. Percebe-se, além do anacronismo da dúvida, a fragilidade teórica que lhe subjaz: o critério determinante é tão só custodial, ou seja, não se tem atendido ao contexto de produção desses documentos, mas ao tipo de instituição que assume a sua custódia (Arquivo. Biblioteca ou Museu). O conceito Sistema de Informação (organizado e semi-aberto) substitui Fundo no corpus teórico da Ciência da Informação."
      )
    ),
// FIX: Changed comma to colon for property definition.
    seeAlso: React.createElement("p", null, "Arquivo, Proveniência, Sistema de Informação."),
// FIX: Changed comma to colon for property definition.
    references: React.createElement(React.Fragment, null,
      React.createElement("p", null, "Dictionnaire des archives: de l’archivage aux systèmes d’ingestion. (1991). Paris: École Nationale des Chartes; Association Française de Normalisation, pp. 106."),
      React.createElement("p", null, "Dicionário de Terminologia Arquivística. (1993). Lisboa: Instituto da Biblioteca Nacional e Livro; Organismo de Normalização Sectorial para a Informação e Documentação, p. 52."),
      React.createElement("p", null,
        "Faria, M. I., & Pericão, M. G. (2008). ",
        React.createElement("i", { className: "font-serif" }, "Dicionário do livro: Da escrita ao livro eletrônico"),
        " (p. 584). Coimbra: Almedina."
      )
    )
  },
  {
    term: "Gestão da Informação",
// FIX: Changed comma to colon for property definition.
    definition: React.createElement(React.Fragment, null,
      React.createElement("p", null, "Gerir significa lidar ou enfrentar, administrar, encontrar soluções práticas desde a génese até ao efeito recomeço, em espiral, do fluxo da informação e compreende um conjunto diversificado de actividades, a saber: produção, tratamento, registo e guarda, comunicação e uso da informação. E cada uma delas encerra problemáticas específicas que são ou podem ser estudadas cientificamente pelos profissionais da informação encarregues, na prática quotidiana, de agilizar o fluxo e a intensificação do uso da informação (PINTO; SILVA, 2005: 95). Em Ciência da Informação, a componente científica ganha um relevo considerável e a Gestão da Informação é o terreno natural da aplicação em que as hipóteses e as teorias, a pesquisa científica propriamente dita, substancia soluções concretas e úteis. A vasta e complexa problemática ligada à produção da informação (do meio ambiente à estrutura produtora, a operacionalização e utilidade da memória orgânica, os actores, os objetivos, as estratégias e os ajustamentos à mudança) em contexto orgânico institucional e informal, assim como as questões de mediação (organizar para melhor recuperar) e as práticas de uso e de articulação com as interfaces mediadoras constituem o cerne da Gestão de Informação.")
    ),
// FIX: Changed comma to colon for property definition.
    seeAlso: React.createElement("p", null, "Ciência da Informação e Gestor da Informação"),
// FIX: Changed comma to colon for property definition.
    references: React.createElement(React.Fragment, null,
      React.createElement("p", null,
        "Pinto, M. A., & Silva, A. M. da. (2005). Um modelo sistémico e integral de gestão da informação nas organizações. In ",
        React.createElement("i", { className: "font-serif" }, "2º Contecsi – Congresso Internacional de Gestão da Tecnologia e Sistemas de Informação / International Conference on Information Systems and Technology Management, 01–03 de junho de 2005, São Paulo, SP, Brasil"),
        ". ",
        React.createElement("a", { href: "https://repositorio-aberto.up.pt/bitstream/10216/13461/2/73495.pdf", target: "_blank", rel: "noopener noreferrer", className: "text-blue-600 hover:underline" }, "https://repositorio-aberto.up.pt/bitstream/10216/13461/2/73495.pdf")
      ),
      React.createElement("p", null,
        "Silva, A. M. da. (2013). A gestão da informação como área transversal e interdisciplinar: Diferentes perspetivas e a importância estratégica da ‘tipologia informacional’. In F. A. S. Almeida, A. M. da Silva, M. J. B. Franco, P. Q. Brito, & C. C. Freitas (Coords.), ",
        React.createElement("i", { className: "font-serif" }, "Coletânea Luso-Brasileira: Gestão da Informação, Inovação e Logística"),
        " (pp. 15–57). Goiânia, GO: Faculdade de Tecnologia do SENAI"
      )
    )
  },
  {
    term: "Gestão do Conhecimento",
// FIX: Changed comma to colon for property definition.
    definition: React.createElement(React.Fragment, null,
      React.createElement("p", null, "Não se trata de uma definição fácil, mas ainda assim há autores que se têm lançado nesta empresa e sugerem, por exemplo, ser a capacidade de uma organização gerar valor, baseando-se nas pessoas e numa gestão eficaz do capital intelectual. Assim sendo, a gestão do conhecimento incluiria todas as atividades e processos orientados a buscar e a descobrir o conhecimento existente numa organização sistematicamente e a organizá-lo para ser posto à disposição de toda a organização, através das tecnologias da informação e da comunicação e, especialmente, da internet, ajustada internamente como intranet corporativa (Pinto, Molina, Gómez, Camarero, 2004: 115)."),
      React.createElement("p", { className: "mt-4" }, "Outros consideram que gerir conhecimento é utilizar e desenvolver a compreensão que uma empresa tem dos relacionamentos de modo a obter benefícios diretos, seja poupando nos custos, gerando eficiências em processos, tirando partido das potencialidades do mercado ou mesmo desenvolvendo aquela inovação extraordinária que vai deitar por terra a concorrência (Kluge, Stein, Licht, 2002: 181). Esta acepção provém claramente das Ciências e Técnicas de Gestão em cujo vocabulário abundante e generalizado, através dos media, não faltam nuances apelativas, embora superficiais, como a estabelecida entre informação e conhecimento. Em Ciência da Informação interessam as práticas e as técnicas desenvolvidas como sendo de gestão de conhecimento que, afinal, são pura e simplesmente práticas e técnicas de gestão, de organização e de uso da informação numa entidade mais ou menos complexa. Este é, aliás, o posicionamento crítico de Tom Wilson que evidenciou o ‘no sense’ da expressão ‘gestão do conhecimento através de uma análise minuciosa e difícil de contestar\" (Wilson, 2002).")
    ),
// FIX: Changed comma to colon for property definition.
    seeAlso: React.createElement("p", null, "Gestão da Informação, Informação e Conhecimento"),
// FIX: Changed comma to colon for property definition.
    references: React.createElement(React.Fragment, null,
      React.createElement("p", null,
        "Kluge, J., Licht, T., & Stein, W. (2004). ",
        React.createElement("i", { className: "font-serif" }, "Gestão do conhecimento"),
        ". Lisboa: Principia."
      ),
      React.createElement("p", null,
        "Pinto Molina, M., & Gomez Camarero, C. (2004). ",
        React.createElement("i", { className: "font-serif" }, "La ciberadministración española en la sociedad de la información: Retos y perspectivas"),
        ". Gijón: Ediciones Trea."
      ),
      React.createElement("p", null,
        "Silva, A. M. da. (2013). A gestão da informação como área transversal e interdisciplinar: Diferentes perspetivas e a importância estratégica da ‘tipologia informacional’. In F. A. S. Almeida, A. M. da Silva, M. J. B. Franco, P. Q. Brito, & C. C. Freitas (Coords.), ",
        React.createElement("i", { className: "font-serif" }, "Coletânea Luso-Brasileira: Gestão da Informação, Inovação e Logística"),
        ". Goiânia, GO: Faculdade de Tecnologia do SENAI."
      ),
      React.createElement("p", null,
        "Wilson, T. (2002). The nonsense of knowledge management. ",
        React.createElement("i", { className: "font-serif" }, "Information Research, 8"),
        "(1). ",
        React.createElement("a", { href: "https://informationr.net/ir/8-3/infres83.html", target: "_blank", rel: "noopener noreferrer", className: "text-blue-600 hover:underline" }, "https://informationr.net/ir/8-3/infres83.html")
      )
    )
  },
  {
    term: "Gestor de Informação",
    definition: React.createElement(React.Fragment, null,
      React.createElement("p", null, "Os gestores de informação são a expressão aplicada da Ciência da Informação, enquanto ciência social aplicada, que visa formar além desse tipo de profissional, gestores de serviços de informação, gestores e analistas de dados, co-criadores de plataformas digitais e, ainda, os profissionais dos arquivos e das bibliotecas desenvolvem a sua atividade. São responsáveis, em cada contexto institucional ou organizacional (dos inúmeros existentes), por todo o fluxo de informação, desde a coleta, processamento, identificação, classificação, organização, armazenamento, recuperação, interpretação e uso da informação. Uma das suas funções é tornar acessível a informação e satisfazer as necessidades do utilizador. Cabe, também, ao gestor de informação planear, implementar e gerir os processos complexos que têm em vista a construção, comunicação, uso e preservação da informação (Pinto, 2009). Estudam a capacidade simbólica do ser humano em produzir representações codificadas e, por isso, preocupa-os essa necessidade em contexto e em ciclo, desde quando começa a ser produzida, a ser trabalhada, materializada, descrita, mediada e, por fim, comunicada e reproduzida. Referimo-nos a um ciclo que começa e acaba no cérebro passando pela sociedade uma vez que a codificação de representações mentais e emocionais, é feita através de um código que é social. O ciclo da informação inicia-se no momento em que se detecta uma necessidade de informação, ou seja,