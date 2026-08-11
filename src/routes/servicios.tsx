import { createFileRoute, Link } from "@tanstack/react-router";
import { ServiceCards } from "@/components/service-cards";
import { WhatsappButton } from "@/components/whatsapp-button";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios eléctricos — TIC.!!! The Isaia Company" },
      {
        name: "description",
        content:
          "Instalaciones, reparaciones, mantenimiento, renovación y construcción de sistemas eléctricos, además de cotizaciones con TIC.!!!",
      },
      { property: "og:title", content: "Servicios eléctricos — TIC.!!!" },
      {
        property: "og:description",
        content: "Conoce todos los servicios eléctricos de The Isaia Company.",
      },
    ],
  }),
  component: ServiciosPage,
});

function ServiciosPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 lg:px-8 lg:py-20">
      <h1 className="text-4xl font-extrabold sm:text-5xl">Servicios</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Cubrimos todo el ciclo de un sistema eléctrico: desde la instalación inicial hasta la
        renovación completa, con mantenimiento y reparaciones cuando lo necesites.
      </p>
      <div className="mt-10">
        <ServiceCards />
      </div>
      <div className="mt-12 flex flex-col gap-3 sm:flex-row">
        <Link
          to="/contacto"
          className="inline-flex items-center justify-center rounded-full bg-primary-gradient px-7 py-3.5 text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.03]"
        >
          Solicitar cotización
        </Link>
        <WhatsappButton className="px-7 py-3.5" message="Hola TIC.!!!, quiero información sobre un servicio eléctrico." />
      </div>
    </section>
  );
}
