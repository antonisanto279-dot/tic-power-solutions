import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { QuoteForm } from "@/components/quote-form";
import { WhatsappButton } from "@/components/whatsapp-button";
import { WHATSAPP_DISPLAY } from "@/lib/site";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto y cotizaciones — TIC.!!! The Isaia Company" },
      {
        name: "description",
        content:
          "Solicita tu cotización a TIC.!!! por formulario o escríbenos directamente al WhatsApp +1 809 456 5547.",
      },
      { property: "og:title", content: "Contacto y cotizaciones — TIC.!!!" },
      {
        property: "og:description",
        content: "Escríbenos por WhatsApp o envía tu solicitud de cotización.",
      },
    ],
  }),
  component: ContactoPage,
});

function ContactoPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 lg:px-8 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_1.1fr] lg:items-start">
        <div>
          <h1 className="text-4xl font-extrabold sm:text-5xl">Contacto</h1>
          <p className="mt-4 text-muted-foreground">
            Escríbenos por WhatsApp o envíanos tu solicitud de cotización y te respondemos.
          </p>

          <div className="mt-8 rounded-2xl border border-border bg-card p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
              WhatsApp oficial
            </p>
            <p className="mt-2 flex items-center gap-2 text-2xl font-extrabold">
              <MessageCircle className="h-6 w-6 text-whatsapp" />
              {WHATSAPP_DISPLAY}
            </p>
            <WhatsappButton
              className="mt-5 w-full sm:w-auto"
              message="Hola TIC.!!!, quiero solicitar una cotización."
            >
              Abrir conversación
            </WhatsappButton>
          </div>
        </div>

        <QuoteForm />
      </div>
    </section>
  );
}
