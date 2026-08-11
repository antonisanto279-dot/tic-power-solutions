import { createFileRoute, Link } from "@tanstack/react-router";
import { Snowflake, Users } from "lucide-react";
import acImage from "@/assets/ac-service.jpg";
import { WhatsappButton } from "@/components/whatsapp-button";
import { AC_SERVICES } from "@/lib/site";

export const Route = createFileRoute("/aire-acondicionado")({
  head: () => ({
    meta: [
      { title: "Aire Acondicionado — TIC.!!! The Isaia Company" },
      {
        name: "description",
        content:
          "Instalación, reparación y mantenimiento de aires acondicionados con 4 técnicos especializados de TIC.!!!",
      },
      { property: "og:title", content: "Especialistas en Aire Acondicionado — TIC.!!!" },
      {
        property: "og:description",
        content: "4 técnicos especializados en instalación, reparación y mantenimiento de aires acondicionados.",
      },
    ],
  }),
  component: AcPage,
});

function AcPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 lg:px-8 lg:py-20">
      <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-accent">
        <Snowflake className="h-3.5 w-3.5" />
        Aire acondicionado
      </span>
      <h1 className="mt-5 text-4xl font-extrabold sm:text-5xl">
        Especialistas en Aire Acondicionado
      </h1>
      <p className="mt-4 flex items-center gap-2 text-muted-foreground">
        <Users className="h-5 w-5 shrink-0 text-accent" />
        Contamos con 4 técnicos especializados en instalación, reparación y mantenimiento.
      </p>

      <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:items-center">
        <ul className="grid gap-4">
          {AC_SERVICES.map((item) => (
            <li key={item.title} className="rounded-2xl border border-border bg-card p-6">
              <h2 className="text-lg font-bold">{item.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
            </li>
          ))}
        </ul>
        <img
          src={acImage}
          alt="Técnico especializado instalando un equipo de aire acondicionado"
          loading="lazy"
          width={1408}
          height={1008}
          className="rounded-2xl border border-border object-cover shadow-elevated"
        />
      </div>

      <div className="mt-12 flex flex-col gap-3 sm:flex-row">
        <Link
          to="/contacto"
          className="inline-flex items-center justify-center rounded-full bg-primary-gradient px-7 py-3.5 text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.03]"
        >
          Solicitar cotización
        </Link>
        <WhatsappButton className="px-7 py-3.5" message="Hola TIC.!!!, necesito servicio de aire acondicionado." />
      </div>
    </section>
  );
}
