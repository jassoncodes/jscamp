export const MENU = [
  {
    label: "Inicio",
    ref: "/",
    icon: "",
    disabled: false,
  },
  {
    label: "Buscar",
    ref: "/search",
    icon: "",
    disabled: false,
  },
  {
    label: "Empleos",
    ref: "/search",
    icon: "",
    disabled: false,
  },
  {
    label: "Salarios",
    ref: "/#",
    icon: "",
    disabled: false,
  },
];

export const FEATURES = [
  {
    id: "work",
    title: "Encuentra el trabajo de tus sueños",
    description:
      "Busca miles de empleos de las mejores empresas de todo el mundo",
    icon: "briefcase",
  },
  {
    id: "community",
    title: "Conecta con las mejores empresas",
    description:
      "Conecta con empresas que están contratando por tus habilidades",
    icon: "community",
  },
  {
    id: "salary",
    title: "Obtén el salario que mereces",
    description:
      "Obtén el salario que mereces con nuestra calculadora de salarios",
    icon: "bills",
  },
];

export const FILTERS = [
  {
    filter: "Tecnologia",
    name: "tecnologia",
    filterOptions: [
      "Tecnologia",
      "JavaScript",
      "Python",
      "React",
      "Node.js",
      "Java",
      "C#",
      "C",
      "C++",
      "Ruby",
      "PHP",
    ],
  },
  {
    filter: "Ubicacion",
    name: "ubicacion",
    filterOptions: [
      "Ubicacion",
      "Remoto",
      "Ciudad de México",
      "Guadalajara",
      "Monterrey",
      "Barcelona",
    ],
  },
  {
    filter: "Nivel de experiencia",
    name: "nivel",
    filterOptions: [
      "Nivel de experiencia",
      "Junior",
      "Mid-level",
      "Senior",
      "Lead",
    ],
  },
];
