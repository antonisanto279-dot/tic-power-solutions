export const WHATSAPP_NUMBER = "18094565547";
export const WHATSAPP_DISPLAY = "+1 809 456 5547";

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const ELECTRIC_SERVICES = [
  {
    slug: "instalaciones",
    icon: "Plug",
    title: "Instalaciones eléctricas",
    description:
      "Instalación de circuitos, paneles, tomacorrientes, iluminación y acometidas con estándares de seguridad.",
  },
  {
    slug: "reparaciones",
    icon: "Wrench",
    title: "Reparaciones eléctricas",
    description:
      "Diagnóstico y corrección de fallas, cortocircuitos, sobrecargas y averías en sistemas eléctricos.",
  },
  {
    slug: "mantenimiento",
    icon: "ShieldCheck",
    title: "Mantenimiento eléctrico",
    description:
      "Revisiones preventivas y correctivas para mantener tu instalación segura y funcionando de forma estable.",
  },
  {
    slug: "renovacion",
    icon: "RefreshCw",
    title: "Renovación de sistemas",
    description:
      "Modernización y reemplazo de instalaciones antiguas por sistemas eléctricos actualizados y seguros.",
  },
  {
    slug: "construccion",
    icon: "HardHat",
    title: "Construcción de sistemas",
    description:
      "Diseño y ejecución de sistemas eléctricos completos para proyectos residenciales y comerciales.",
  },
  {
    slug: "cotizaciones",
    icon: "FileText",
    title: "Cotizaciones",
    description:
      "Evaluamos tu necesidad y te entregamos una cotización clara para el trabajo que deseas realizar.",
  },
] as const;

export const AC_SERVICES = [
  { title: "Instalación", description: "Montaje e instalación de equipos de aire acondicionado." },
  { title: "Reparación", description: "Detección y solución de fallas en equipos de climatización." },
  { title: "Mantenimiento", description: "Limpieza y mantenimiento para un mejor rendimiento del equipo." },
] as const;

export const SERVICE_OPTIONS = [
  "Instalaciones eléctricas",
  "Reparaciones eléctricas",
  "Mantenimiento eléctrico",
  "Renovación de sistemas eléctricos",
  "Construcción de sistemas eléctricos",
  "Cotización general",
  "Aire acondicionado — Instalación",
  "Aire acondicionado — Reparación",
  "Aire acondicionado — Mantenimiento",
];
