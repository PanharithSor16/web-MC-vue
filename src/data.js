import { data } from "autoprefixer"
import { ref } from "vue";
export const MachineTypeName = [
    {
        id: 1,
        value: "MC1",
        label: "MC1",
        children: 
        [{
            id: 1,
            value: "Air_Crimping",
            label: "Air Criming",
            children: [
              { id: 1, value: "Semi(M)", label: "Semi(M)" },
              { id: 2, value: "Semi(M)", label: "Semi(M)" },
              
            ],
          },
          {
            id: 2,
            value: "MS_01",
            label: "MS 01",
            children: [
              { id: 1, value: "MS-01 (A)", label: "MS-01 (A)" },
              { id: 2, value: "MS-01 (B)", label: "MS-01 (B)" },
              { id: 3, value: "MS-01 (C)", label: "MS-01 (C)" },
              { id: 4, value: "MS-01 (D)", label: "MS-01 (D)" },
              { id: 5, value: "MS-01 (E)", label: "MS-01 (E)" },
              { id: 6, value: "MS-01 (F)", label: "MS-01 (F)" },
              { id: 7, value: "MS-01 (G)", label: "MS-01 (G)" },
              { id: 8, value: "MS-01 (H)", label: "MS-01 (H)" },
              { id: 8, value: "MS-01 (I)", label: "MS-01 (I)" },
              { id: 8, value: "MS-01 (J)", label: "MS-01 (J)" },
              { id: 8, value: "MS-01 (K)", label: "MS-01 (K)" },
            ],
          },
          {
            id: 3,
            value: "D_E",
            label: "D_E",
            children: [
              { id: 1, value: "D/E(A)", label: "D/E(A)" },
              { id: 2, value: "D/E(B)", label: "D/E(B)" },
              { id: 3, value: "D/E(C)", label: "D/E(C)" },
              { id: 4, value: "D/E(D)", label: "D/E(D)" },
              { id: 5, value: "D/E(E)", label: "D/E(E)" },
              { id: 6, value: "D/E(F)", label: "D/E(F)" },
              { id: 7, value: "D/E(G)", label: "D/E(G)" },
              { id: 8, value: "D/E(H)", label: "D/E(H)" },
            ],
          },
          {
            id: 4,
            value: "JAM",
            label: "JAM",
            children: [
              { id: 1, value: "CRP-ZERO (A)", label: "CRP-ZERO (A)" },
              { id: 2, value: "CRP-ZERO (B)", label: "CRP-ZERO (B)" },
              { id: 3, value: "CRP-ZERO (C)", label: "CRP-ZERO (C)" },
              { id: 4, value: "JAM07-SDII (A)", label: "JAM07-SDII (A)" },
              { id: 5, value: "JAM07-SDII (B)", label: "JAM07-SDII (B)" },
              { id: 6, value: "JAM07-SDII (C)", label: "JAM07-SDII (C)" },
              { id: 7, value: "JAM07-SDII (D)", label: "JAM07-SDII (D)" },
              { id: 8, value: "SDW-ST (A)", label: "SDW-ST (A)" },
            ],
          },
          {
            id: 5,
            value: "MS_01_DECAM",
            label: "MS 01 & DECAM",
            children: [
              { id: 1, value: "MS-01 (A)", label: "MS-01 (A)" },
              { id: 2, value: "MS-01 (B)", label: "MS-01 (B)" },
              { id: 3, value: "MS-01 (C)", label: "MS-01 (C)" },
              { id: 4, value: "MS-01 (D)", label: "MS-01 (D)" },
              { id: 5, value: "MS-01 (E)", label: "MS-01 (E)" },
              { id: 6, value: "MS-01 (F)", label: "MS-01 (F)" },
              { id: 7, value: "MS-01 (G)", label: "MS-01 (G)" },
              { id: 8, value: "MS-01 (H)", label: "MS-01 (H)" },
              { id: 9, value: "MS-01 (I)", label: "MS-01 (I)" },
              { id: 10, value: "MS-01 (J)", label: "MS-01 (J)" },
              { id: 11, value: "MS-01 (K)", label: "MS-01 (K)" },
              { id: 12, value: "DECAM7 (A)", label: "DECAM7 (A)" },
              { id: 13, value: "DECAM7 (B)", label: "DECAM7 (B)" },
              { id: 14, value: "DECAM7 (C)", label: "DECAM7 (C)" },
              { id: 15, value: "DECAM7 (D)", label: "DECAM7 (D)" },
              { id: 16, value: "DECAM7 (E)", label: "DECAM7 (E)" },
              { id: 17, value: "DECAM7 (F)", label: "DECAM7 (F)" },

            ],
          },
          {
            id: 5,
            value: "SEMI PRESS",
            label: "SEMI PRESS",
            children: [
              { id: 1, value: "SEMI (A)", label: "SEMI (A)" },
              { id: 2, value: "SEMI (B)", label: "SEMI (B)" },
              { id: 3, value: "SEMI (C)", label: "SEMI (C)" },
              { id: 4, value: "SEMI (D)", label: "SEMI (D)" },
              { id: 5, value: "SEMI (E)", label: "SEMI (E)" },
              { id: 6, value: "SEMI (F)", label: "SEMI (F)" },
              { id: 7, value: "SEMI (G)", label: "SEMI (G)" },
        
            ],
          },
        ]
    },
    {
        id: 2,
        value: "MC2",
        label: "MC2",
        children: 
        [{
            id: 1,
            value: "Air_Crimping",
            label: "Air Criming",
            children: [
              { id: 1, value: "D/E(A)", label: "D/E(A)" },
              { id: 2, value: "D/E(B)", label: "D/E(B)" },
              { id: 3, value: "D/E(C)", label: "D/E(C)" },
              { id: 4, value: "D/E(D)", label: "D/E(D)" },
              { id: 5, value: "D/E(E)", label: "D/E(E)" },
              { id: 6, value: "D/E(F)", label: "D/E(F)" },
              { id: 7, value: "D/E(G)", label: "D/E(G)" },
              { id: 8, value: "D/E(H)", label: "D/E(H)" },
            ],
          },
          {
            id: 2,
            value: "MS_01",
            label: "MS 01",
            children: [
              { id: 1, value: "D/E(A)", label: "D/E(A)" },
              { id: 2, value: "D/E(B)", label: "D/E(B)" },
              { id: 3, value: "D/E(C)", label: "D/E(C)" },
              { id: 4, value: "D/E(D)", label: "D/E(D)" },
              { id: 5, value: "D/E(E)", label: "D/E(E)" },
              { id: 6, value: "D/E(F)", label: "D/E(F)" },
              { id: 7, value: "D/E(G)", label: "D/E(G)" },
              { id: 8, value: "D/E(H)", label: "D/E(H)" },
            ],
          },
          {
            id: 3,
            value: "JAM",
            label: "Jam",
            children: [
              { id: 1, value: "D/E(A)", label: "D/E(A)" },
              { id: 2, value: "D/E(B)", label: "D/E(B)" },
              { id: 3, value: "D/E(C)", label: "D/E(C)" },
              { id: 4, value: "D/E(D)", label: "D/E(D)" },
              { id: 5, value: "D/E(E)", label: "D/E(E)" },
              { id: 6, value: "D/E(F)", label: "D/E(F)" },
              { id: 7, value: "D/E(G)", label: "D/E(G)" },
              { id: 8, value: "D/E(H)", label: "D/E(H)" },
            ],
          },
        ]
    },
    {
        id: 3,
        value: "MC3",
        label: "MC3",
        children: 
        [{
            id: 1,
            value: "Air_Crimping",
            label: "Air Criming",
            children: [
              { id: 1, value: "D/E(A)", label: "D/E(A)" },
              { id: 2, value: "D/E(B)", label: "D/E(B)" },
              { id: 3, value: "D/E(C)", label: "D/E(C)" },
              { id: 4, value: "D/E(D)", label: "D/E(D)" },
              { id: 5, value: "D/E(E)", label: "D/E(E)" },
              { id: 6, value: "D/E(F)", label: "D/E(F)" },
              { id: 7, value: "D/E(G)", label: "D/E(G)" },
              { id: 8, value: "D/E(H)", label: "D/E(H)" },
            ],
          },
          {
            id: 2,
            value: "MS_01",
            label: "MS 01",
            children: [
              { id: 1, value: "D/E(A)", label: "D/E(A)" },
              { id: 2, value: "D/E(B)", label: "D/E(B)" },
              { id: 3, value: "D/E(C)", label: "D/E(C)" },
              { id: 4, value: "D/E(D)", label: "D/E(D)" },
              { id: 5, value: "D/E(E)", label: "D/E(E)" },
              { id: 6, value: "D/E(F)", label: "D/E(F)" },
              { id: 7, value: "D/E(G)", label: "D/E(G)" },
              { id: 8, value: "D/E(H)", label: "D/E(H)" },
            ],
          },
          {
            id: 3,
            value: "JAM",
            label: "Jam",
            children: [
              { id: 1, value: "D/E(A)", label: "D/E(A)" },
              { id: 2, value: "D/E(B)", label: "D/E(B)" },
              { id: 3, value: "D/E(C)", label: "D/E(C)" },
              { id: 4, value: "D/E(D)", label: "D/E(D)" },
              { id: 5, value: "D/E(E)", label: "D/E(E)" },
              { id: 6, value: "D/E(F)", label: "D/E(F)" },
              { id: 7, value: "D/E(G)", label: "D/E(G)" },
              { id: 8, value: "D/E(H)", label: "D/E(H)" },
            ],
          },
        ]
    }
]


//list item of machine navbar name   
export const ListItem = [
  "Machine",
  "IPQC",
  "NO. ",
  "Shipment",
  "Code",
  "NameItem",
  "POS (C)",
  "ភីន",
  "Wire",
  "Long",
  "Semi",
  "QTY", 
  "Status",
  "PlanFinish"
];


//machine plan 
export const MachinePlan =ref( [
  {
    nameMachine: "D/E (E)",
    ipqc: false,
    no: 1,
    shipment: "10-04-24",
    code: 880201,
    nameItem: "D1495334C-01",
    pos: "24-0300763",
    pesise: "03CT=>03CT",
    wire: "UL10272-26 RED (7/0.16) (HR) AMP",
    long: 264,
    semi: 1,
    qty: 200,
    status: '',
    planFinish: ''
  },
  {
    nameMachine: "D/E (E)",
    ipqc: false,
    no: 2,
    shipment: "10-04-24",
    code: 880201,
    nameItem: "D1495334C-01",
    pos: "24-0300763",
    pesise: "03CT=>03CT",
    wire: "UL10272-26 VLT (7/0.16) (HR) AMP",
    long: 264,
    semi: 1,
    qty: 200,
    status: '',
    planFinish: ''
  },
  {
    nameMachine: "D/E (E)",
    ipqc: false,
    no: 3,
    shipment: "10-04-24",
    code: 880201,
    nameItem: "D1495334C-01",
    pos: "24-0300763",
    pesise: "03CT=>03CT",
    wire: "UL10272-26 VLT (7/0.16) (HR) AMP",
    long: 264,
    semi: 1,
    qty: 200,
    status: '',
    planFinish: ''
  },
  
]);


export default data