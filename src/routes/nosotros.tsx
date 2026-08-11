import { createFileRoute, Link } from "@tanstack/react-router";
import { Snowflake, Zap } from "lucide-react";
import logo from "@/assets/tic-logo.png";
import { WhatsappButton } from "@/components/whatsapp-button";

export const Route = createFileRoute("/nosotros")({
  head: () => ({
    meta: [
      { title: "Nosotros — TIC.!!! The Isaia Company" },
      {
        name: "description",
        content:
          "The Isaia Company (TIC.!!!) es una empresa de servicios eléctricos y multiservicios, con un equipo especializado en aire acondicionado.",
      },
      { property: "og:title", content: "Nosotros — TIC.!!! The Isaia Company" },
      {
        property: "og:description",
        content: "Conoce a The Isaia Company: servicios eléctricos y multiservicios.",
      },
    ],
  }),
  component: NosotrosPage,
});

function NosotrosPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 lg:px-8 lg:py-20">
      <img
        src={logo}
        alt="Logotipo de The Isaia Company TIC"
        loading="lazy"
        width={1024}
        height={1024}
        className="h-20 w-20 object-contain"
      />
      <h1 className="mt-6 text-4xl font-extrabold sm:text-5xl">Nosotros</h1>
      <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
        The Isaia Company, conocida por su marca <strong className="text-foreground">TIC.!!!</strong>,
        es una empresa de servicios eléctricos y multiservicios. Nos dedicamos a la instalación,
        reparación, mantenimiento, renovación, cotización y construcción de sistemas eléctricos.
      </p>
      <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
        Además, contamos con 4 técnicos especializados en instalación, reparación y mantenimiento de
        aires acondicionados, para atender también las necesidades de climatización de nuestros
        clientes.
      </p>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        <div className="rounded-2xl border border-border bg-card p-6">
          <Zap className="h-6 w-6 text-primary" />
          <h2 className="mt-4 text-lg font-bold">Trabajo eléctrico profesional</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Ejecutamos cada trabajo con criterio técnico y enfoque en la seguridad.
          </p>
        </div>
        <div className="rounded-2xl border border-border bg-card p-6">
          <Snowflake className="h-6 w-6 text-accent" />
          <h2 className="mt-4 text-lg font-bold">Equipo especializado</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            4 técnicos dedicados exclusivamente al servicio de aire acondicionado.
          </p>
        </div>
      </div>

      <div className="mt-12 flex flex-col gap-3 sm:flex-row">
        <Link
          to="/contacto"
          className="inline-flex items-center justify-center rounded-full bg-primary-gradient px-7 py-3.5 text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.03]"
        >
          Solicitar cotización
        </Link>
        <WhatsappButton className="px-7 py-3.5" message="Hola TIC.!!!, quiero conocer más sobre sus servicios." />
      </div>
    </section>
  );
}
