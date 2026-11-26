/**
 * ESTRUTURA EXPANSÍVEL DO CARDÁPIO — DONA LU
 *
 * Para adicionar, editar ou remover categorias e produtos:
 * - Edite o array `CARDAPIO_CATEGORIAS` abaixo.
 * - Cada categoria gera automaticamente sua aba de filtro e sua seção na página.
 * - Cada item gera um card com imagem, título, descrição, preços e botão de encomenda no WhatsApp.
 */

const WHATSAPP_CONFIG = {
  numero: "5514997836322",
  mensagemPadrao: "Olá! Conheci a Dona Lu pelo site e gostaria de fazer uma encomenda."
};

const CARDAPIO_CATEGORIAS = [
  {
    id: "nhoc-dona-lu",
    nome: "Nhoc Dona Lu",
    subtitulo: "Massa artesanal leve e macia",
    descricao:
      "Macio, saboroso e com aquele gostinho especial de comida feita em casa, com carinho em cada detalhe.",
    aviso: null,
    notaExtra: null,
    itens: [
      {
        id: "nhoc-fresquinho",
        nome: "Nhoc Fresquinho",
        badge: "Pronto para preparar",
        descricao:
          "Preparado na hora com massa macia e artesanal, ideal para servir fresquinho com o molho da sua preferência.",
        imagem: "img/fresco.jpg",
        imagemAlt: "Nhoc caseiro fresquinho Dona Lu sobre tábua de madeira",
        precos: [
          { peso: "1 kg", valor: "R$ 25,00" },
          { peso: "1,5 kg", valor: "R$ 37,50" }
        ],
        mensagemWhatsapp:
          "Olá! Conheci a Dona Lu pelo site e gostaria de encomendar Nhoc Fresquinho."
      },
      {
        id: "nhoc-congelado",
        nome: "Nhoc Congelado",
        badge: "Praticidade no dia a dia",
        descricao:
          "O mesmo sabor caseiro e maciez do nhoc fresquinho, embalado para conservar a qualidade no seu congelador.",
        imagem: "img/congelado.jpg",
        imagemAlt: "Nhoc caseiro congelado Dona Lu embalado",
        precos: [
          { peso: "1 kg", valor: "R$ 25,00" },
          { peso: "1,5 kg", valor: "R$ 37,50" }
        ],
        mensagemWhatsapp:
          "Olá! Conheci a Dona Lu pelo site e gostaria de encomendar Nhoc Congelado."
      }
    ]
  },
  {
    id: "nhoc-com-molho",
    nome: "Nhoc com Molho",
    subtitulo: "Especial de domingo",
    descricao:
      "Uma combinação deliciosa de nhoc caseiro com molhos saborosos, preparada para deixar qualquer refeição especial.",
    aviso: "Disponível somente aos domingos, sob encomenda.",
    notaExtra: null,
    itens: [
      {
        id: "nhoc-bolonhesa",
        nome: "Nhoc à Bolonhesa",
        badge: "Aos domingos",
        descricao:
          "Nhoc caseiro acompanhado de molho bolonhesa encorpado, bem temperado e preparado com carinho.",
        imagem: "img/bolonhesa.jpg",
        imagemAlt: "Molho bolonhesa artesanal servido em tigela rústica com manjericão",
        precos: [{ peso: "1 kg", valor: "R$ 60,00" }],
        mensagemWhatsapp:
          "Olá! Conheci a Dona Lu pelo site e gostaria de encomendar Nhoc com Molho Bolonhesa para domingo."
      },
      {
        id: "nhoc-toscana",
        nome: "Nhoc Toscana com Azeitona",
        badge: "Aos domingos",
        descricao:
          "Nhoc caseiro servido com molho especial de linguiça toscana e azeitonas selecionadas.",
        imagem: "img/toscana.jpg",
        imagemAlt: "Molho de toscana com azeitonas em tigela rústica",
        precos: [{ peso: "1 kg", valor: "R$ 60,00" }],
        mensagemWhatsapp:
          "Olá! Conheci a Dona Lu pelo site e gostaria de encomendar Nhoc com Molho Toscana com Azeitona para domingo."
      }
    ]
  },
  {
    id: "empadas-dona-lu",
    nome: "Empadas Dona Lu",
    subtitulo: "Massa amanteigada que derrete na boca",
    descricao:
      "Massa amanteigada, recheio generoso e todo o sabor da comida caseira, feita com muito carinho!",
    aviso: null,
    notaExtra: {
      texto: "Procurando outro tamanho para sua família ou evento? Temos outras opções disponíveis.",
      textoBotao: "Consultar outros tamanhos no WhatsApp",
      mensagemWhatsapp:
        "Olá! Conheci a Dona Lu pelo site e gostaria de consultar outros tamanhos de Empadas."
    },
    itens: [
      {
        id: "empada-frango",
        nome: "Empada de Frango",
        badge: "Clássica",
        descricao:
          "Recheio suculento de frango desfiado bem temperado, envolto em massa amanteigada dourada.",
        imagem: "img/frango.jpg",
        imagemAlt: "Empada de frango Dona Lu aberta mostrando o recheio generoso",
        precos: [
          { peso: "1 kg", valor: "R$ 45,00" },
          { peso: "1,5 kg", valor: "R$ 67,50" }
        ],
        mensagemWhatsapp:
          "Olá! Conheci a Dona Lu pelo site e gostaria de encomendar Empada de Frango."
      },
      {
        id: "empada-palmito",
        nome: "Empada de Palmito",
        badge: "Cremosa",
        descricao:
          "Palmito macio em creme saboroso e suave, combinado com nossa massa artesanal crocante e leve.",
        imagem: "img/palmito.jpg",
        imagemAlt: "Empada de palmito Dona Lu aberta com recheio cremoso",
        precos: [
          { peso: "1 kg", valor: "R$ 60,00" },
          { peso: "1,5 kg", valor: "R$ 90,00" }
        ],
        mensagemWhatsapp:
          "Olá! Conheci a Dona Lu pelo site e gostaria de encomendar Empada de Palmito."
      },
      {
        id: "empada-suprema",
        nome: "Empada Suprema",
        badge: "Especial",
        descricao:
          "Recheio generoso de mussarela derretida, presunto e bacon crocante na medida certa.",
        imagem: "img/suprema.jpg",
        imagemAlt: "Empada Suprema Dona Lu com mussarela, presunto e bacon",
        precos: [
          { peso: "1 kg", valor: "R$ 60,00" },
          { peso: "1,5 kg", valor: "R$ 90,00" }
        ],
        mensagemWhatsapp:
          "Olá! Conheci a Dona Lu pelo site e gostaria de encomendar Empada Suprema."
      }
    ]
  },
  {
    id: "sobremesas",
    nome: "Sobremesas",
    subtitulo: "Prévia de doces caseiros",
    descricao:
      "Nossa linha de sobremesas artesanais está sendo preparada com o mesmo carinho das nossas massas e empadas.",
    aviso: "Em breve no cardápio — consulte disponibilidade antecipada pelo WhatsApp.",
    notaExtra: null,
    itens: [
      {
        id: "manjar-caseiro",
        nome: "Manjar Caseiro com Ameixa",
        badge: "Prévia",
        descricao:
          "Manjar cremoso de coco servido com calda artesanal de ameixas. Consulte disponibilidade e tamanhos para encomenda.",
        imagem: "img/manjar.jpg",
        imagemAlt: "Manjar de coco caseiro com calda de ameixa em travessa",
        precos: [{ peso: "Sob consulta", valor: "WhatsApp" }],
        mensagemWhatsapp:
          "Olá! Conheci a Dona Lu pelo site e gostaria de saber sobre a disponibilidade do Manjar Caseiro."
      }
    ]
  }
];
