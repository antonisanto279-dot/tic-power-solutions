import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Snowflake, Users, Zap } from "lucide-react";
import heroAsset from "@/assets/hero-electric.webp.asset.json";
import acImage from "@/assets/ac-service.jpg";
const heroImage = heroAsset.url;
import { ServiceCards } from "@/components/service-cards";
import { WhatsappButton } from "@/components/whatsapp-button";
import { AC_SERVICES } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    links: [
      {
        rel: "preload",
        as: "image",
        href: heroImage,
        fetchpriority: "high",
      },
    ],
    meta: [
      { title: "The Isaia Company — TIC.!!! | Servicios eléctricos" },
      {
        name: "description",
        content:
          "TIC.!!! — The Isaia Company: instalación, reparación, mantenimiento, renovación y construcción de sistemas eléctricos, y especialistas en aire acondicionado.",
      },
      { property: "og:title", content: "The Isaia Company — TIC.!!! | Servicios eléctricos" },
      {
        property: "og:description",
        content:
          "Soluciones eléctricas profesionales y especialistas en aire acondicionado. Solicita tu cotización por WhatsApp.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="relative overflow-hidden bg-hero-gradient">
        <img
          src={heroImage}
          alt="Técnico de TIC.!!! trabajando en un panel eléctrico"
          width={1600}
          height={1104}
          className="absolute inset-0 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-background/30" />
        <div className="absolute inset-0 circuit-grid opacity-70" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 lg:px-8 lg:py-28">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            <Zap className="h-3.5 w-3.5" />
            Electricidad y multiservicios
          </span>
          <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
            The Isaia Company
            <span className="mt-2 block text-gradient-primary">TIC.!!!</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Soluciones eléctricas seguras, precisas y profesionales para tu hogar y tu negocio.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-gradient px-7 py-3.5 text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              Solicitar cotización
              <ArrowRight className="h-4 w-4" />
            </Link>
            <WhatsappButton
              className="px-7 py-3.5"
              message="Hola TIC.!!!, quiero información sobre sus servicios eléctricos."
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-extrabold sm:text-4xl">Nuestros servicios</h2>
          <p className="mt-3 text-muted-foreground">
            Trabajamos cada instalación con enfoque técnico y atención al detalle.
          </p>
        </div>
        <div className="mt-10">
          <ServiceCards />
        </div>
      </section>

      <section className="border-y border-border bg-surface/50">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              <Snowflake className="h-3.5 w-3.5" />
              Servicio destacado
            </span>
            <h2 className="mt-5 text-3xl font-extrabold sm:text-4xl">
              Especialistas en Aire Acondicionado
            </h2>
            <p className="mt-4 flex items-center gap-2 text-muted-foreground">
              <Users className="h-5 w-5 shrink-0 text-accent" />
              Contamos con 4 técnicos especializados.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-3">
              {AC_SERVICES.map((item) => (
                <li key={item.title} className="rounded-xl border border-border bg-card p-4">
                  <p className="font-bold">{item.title}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{item.description}</p>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/aire-acondicionado"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
              >
                Ver detalles
              </Link>
              <WhatsappButton message="Hola TIC.!!!, necesito servicio de aire acondicionado." />
            </div>
          </div>
          <img
            src={acImage}
            alt="Técnico instalando un aire acondicionado"
            loading="lazy"
            width={1408}
            height={1008}
            className="rounded-2xl border border-border object-cover shadow-elevated"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 lg:px-8">
        <div className="rounded-3xl border border-border bg-card p-8 text-center shadow-glow sm:p-14">
          <h2 className="text-3xl font-extrabold sm:text-4xl">¿Listo para tu proyecto?</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Cuéntanos qué necesitas y te preparamos una cotización.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-gradient px-7 py-3.5 text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              Solicitar cotización
            </Link>
            <WhatsappButton className="px-7 py-3.5" message="Hola TIC.!!!, quiero solicitar una cotización." />
          </div>
        </div>
      </section>
    </>
  );
}
