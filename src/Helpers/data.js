export const cards = [
  {
    value: "$1000000",
    title: "Ingresos",
    iconName: "money-in",   
  },
  {
    value: "$4000000", 
    title: "Egresos", 
    iconName: "money-out", 
    backgroundCard: "#EAC0C1",
    widthCard: 35,
    heightCard: 35,
  },
  {
    value: "5", 
    title: "Clientes", 
    iconName: "group", 
    backgroundCard: "#C18585",
  },
  {
    value: "10", 
    title: "Proximas citas", 
    iconName: "calendar-check", 
    backgroundCard: "#606060", 
    marginCard: "0",
  },
];
                                                
export const clientsTable = [
  {
    type: "header",
    data: [
      "clientes",
      "Trabajador/a",
      "fecha",
      "valor",
    ],
  },
  {
    type: "body",
    data: [
      "Stephanie",
      "Rosa",
      "Abril 21",
      "$30.000"
    ],
  },
  {
    type: "body",
    data: [
      "Cinthya",
      "Micari Yurei",
      "Abril 21",
      "$30.000",
    ],
  },
  {
    type: "body",
    data: [
      "Lady",
      "Eli",
      "Abril 21",
      "$30.000",
    ],
  },
  {
    type: "body",
    data: [
      "Edilma",
      "Olga",
      "Abril 21",
      "$30.000",
    ],
  },
]

export const servicesTable = [
  {
    type: "header",
    data: [
      "Proveedor",
      "Descripcion",
      "Fecha",
      "Valor",
    ],
  },
  {
    type: "info",
    data: [
      "AAA",
      "Servicio agua",
      "Abril 1",
      "$80.000"
    ],
  },
  {
    type: "info",
    data: [
      "Organic",
      "Compra esmaltes",
      "Abril 12",
      "$100.000",
    ],
  },
];


export const tableComponents  = [
  {
    type: "header",
    row: [
      "clientes",
      "Trabajador/a",
      "fecha",
      "valor",
    ]
  },
  {
    type: "body",
    row: [
      [
        "Stephanie",
        "Rosa",
        "Abril 21",
        "$30.000",
      ],
      [
        "Cinthya",
        "Micari Yurei",
        "Abril 21",
        "$30.000",
      ],
      [
        "Lady",
        "Eli",
        "Abril 21",
        "$30.000",
      ],
      [
        "Edilma",
        "Olga",
        "Abril 21",
        "$30.000",
      ],
    ],
  }
];