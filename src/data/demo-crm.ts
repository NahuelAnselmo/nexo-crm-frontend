export type Metric = {
  label: string;
  value: string;
  change: string;
  trend: "up" | "neutral";
  detail: string;
};

export type Opportunity = {
  id: string;
  title: string;
  company: string;
  value: string;
  contact: string;
  initials: string;
  nextAction: string;
  temperature: "Alta" | "Media" | "Baja";
};

export type PipelineStage = {
  id: string;
  name: string;
  color: string;
  total: string;
  opportunities: readonly Opportunity[];
};

export const metrics: readonly Metric[] = [
  {
    label: "Pipeline abierto",
    value: "$18,4 M",
    change: "+12,5%",
    trend: "up",
    detail: "frente al mes anterior",
  },
  {
    label: "Oportunidades",
    value: "24",
    change: "+4 nuevas",
    trend: "up",
    detail: "en 4 etapas activas",
  },
  {
    label: "Tasa de conversión",
    value: "31,8%",
    change: "+2,1 pts",
    trend: "up",
    detail: "últimos 90 días",
  },
  {
    label: "Seguimientos",
    value: "8",
    change: "3 para hoy",
    trend: "neutral",
    detail: "actividades pendientes",
  },
];

export const pipeline: readonly PipelineStage[] = [
  {
    id: "new",
    name: "Nuevo contacto",
    color: "#7a8bff",
    total: "$4,1 M",
    opportunities: [
      {
        id: "op-1",
        title: "Rediseño de plataforma",
        company: "Lumen Estudio",
        value: "$1.850.000",
        contact: "Martina Lagos",
        initials: "ML",
        nextAction: "Llamar hoy · 16:30",
        temperature: "Alta",
      },
      {
        id: "op-2",
        title: "Portal de distribuidores",
        company: "Andes Supply",
        value: "$1.420.000",
        contact: "Tomás Villar",
        initials: "TV",
        nextAction: "Enviar presentación",
        temperature: "Media",
      },
      {
        id: "op-3",
        title: "Automatización comercial",
        company: "Punto Norte",
        value: "$860.000",
        contact: "Carla Paz",
        initials: "CP",
        nextAction: "Calificar necesidad",
        temperature: "Media",
      },
    ],
  },
  {
    id: "qualified",
    name: "Calificado",
    color: "#47a8bd",
    total: "$5,7 M",
    opportunities: [
      {
        id: "op-4",
        title: "CRM para franquicias",
        company: "Sur Café",
        value: "$2.600.000",
        contact: "Lucía Medina",
        initials: "LM",
        nextAction: "Reunión · Mañana",
        temperature: "Alta",
      },
      {
        id: "op-5",
        title: "Dashboard operativo",
        company: "Brava Logística",
        value: "$1.750.000",
        contact: "Diego Núñez",
        initials: "DN",
        nextAction: "Revisar alcance",
        temperature: "Alta",
      },
      {
        id: "op-6",
        title: "Web institucional",
        company: "Casa Oliva",
        value: "$1.350.000",
        contact: "Sofía Arias",
        initials: "SA",
        nextAction: "Solicitar contenidos",
        temperature: "Baja",
      },
    ],
  },
  {
    id: "proposal",
    name: "Propuesta enviada",
    color: "#e6a64c",
    total: "$4,8 M",
    opportunities: [
      {
        id: "op-7",
        title: "E-commerce B2B",
        company: "Delta Insumos",
        value: "$3.150.000",
        contact: "Agustín Vera",
        initials: "AV",
        nextAction: "Follow-up · Viernes",
        temperature: "Alta",
      },
      {
        id: "op-8",
        title: "Sistema de reservas",
        company: "Marea Wellness",
        value: "$1.680.000",
        contact: "Ana Costa",
        initials: "AC",
        nextAction: "Esperando respuesta",
        temperature: "Media",
      },
    ],
  },
  {
    id: "negotiation",
    name: "Negociación",
    color: "#9a67d7",
    total: "$3,8 M",
    opportunities: [
      {
        id: "op-9",
        title: "Suite de gestión",
        company: "Nodo Arquitectura",
        value: "$2.200.000",
        contact: "Pablo Ríos",
        initials: "PR",
        nextAction: "Ajustar propuesta",
        temperature: "Alta",
      },
      {
        id: "op-10",
        title: "App de fidelización",
        company: "Verde Mercado",
        value: "$1.620.000",
        contact: "Mica Torres",
        initials: "MT",
        nextAction: "Definir fecha de inicio",
        temperature: "Alta",
      },
    ],
  },
];

export const activities = [
  {
    time: "10:00",
    type: "Reunión",
    title: "Demo con Sur Café",
    detail: "Lucía Medina · Google Meet",
    tone: "violet",
  },
  {
    time: "13:30",
    type: "Llamada",
    title: "Seguimiento propuesta",
    detail: "Delta Insumos · Agustín Vera",
    tone: "blue",
  },
  {
    time: "16:30",
    type: "Llamada",
    title: "Primera conversación",
    detail: "Lumen Estudio · Martina Lagos",
    tone: "green",
  },
] as const;

export const contacts = [
  {
    name: "Lucía Medina",
    initials: "LM",
    company: "Sur Café",
    role: "Directora comercial",
    owner: "Nahuel A.",
    lastContact: "Hoy, 09:12",
    status: "Activo",
  },
  {
    name: "Agustín Vera",
    initials: "AV",
    company: "Delta Insumos",
    role: "Gerente de operaciones",
    owner: "Nahuel A.",
    lastContact: "Ayer, 17:40",
    status: "En propuesta",
  },
  {
    name: "Martina Lagos",
    initials: "ML",
    company: "Lumen Estudio",
    role: "Co-fundadora",
    owner: "Nahuel A.",
    lastContact: "Hace 2 días",
    status: "Nuevo",
  },
  {
    name: "Pablo Ríos",
    initials: "PR",
    company: "Nodo Arquitectura",
    role: "Socio",
    owner: "Nahuel A.",
    lastContact: "Hace 3 días",
    status: "Negociación",
  },
] as const;
