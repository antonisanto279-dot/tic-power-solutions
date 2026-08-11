import { useState } from "react";
import { Send } from "lucide-react";
import { SERVICE_OPTIONS, whatsappLink } from "@/lib/site";

type Errors = Partial<Record<"name" | "phone" | "service" | "description", string>>;

export function QuoteForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function validate(): Errors {
    const e: Errors = {};
    if (!name.trim()) e.name = "Escribe tu nombre.";
    else if (name.trim().length > 80) e.name = "Máximo 80 caracteres.";
    if (!phone.trim()) e.phone = "Escribe tu teléfono.";
    else if (!/^[0-9+\-()\s]{7,20}$/.test(phone.trim())) e.phone = "Teléfono no válido.";
    if (!service) e.service = "Selecciona un servicio.";
    if (!description.trim()) e.description = "Describe el trabajo que necesitas.";
    else if (description.trim().length > 800) e.description = "Máximo 800 caracteres.";
    return e;
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) return;

    const message = [
      "Solicitud de cotización — TIC.!!!",
      `Nombre: ${name.trim()}`,
      `Teléfono: ${phone.trim()}`,
      `Servicio: ${service}`,
      `Descripción: ${description.trim()}`,
    ].join("\n");

    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  const field =
    "mt-2 w-full rounded-xl border border-input bg-secondary/40 px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/40";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border bg-card p-6 shadow-elevated sm:p-8"
    >
      <h3 className="text-xl font-bold">Solicitar cotización</h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Completa el formulario y enviaremos tu solicitud directamente a nuestro WhatsApp.
      </p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label htmlFor="name" className="text-sm font-medium">Nombre</label>
          <input
            id="name"
            value={name}
            maxLength={80}
            onChange={(e) => setName(e.target.value)}
            placeholder="Tu nombre"
            className={field}
          />
          {errors.name ? <p className="mt-1 text-xs text-destructive">{errors.name}</p> : null}
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="phone" className="text-sm font-medium">Teléfono</label>
          <input
            id="phone"
            value={phone}
            maxLength={20}
            inputMode="tel"
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Tu número de teléfono"
            className={field}
          />
          {errors.phone ? <p className="mt-1 text-xs text-destructive">{errors.phone}</p> : null}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="service" className="text-sm font-medium">Servicio solicitado</label>
          <select
            id="service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            className={field}
          >
            <option value="">Selecciona un servicio</option>
            {SERVICE_OPTIONS.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          {errors.service ? <p className="mt-1 text-xs text-destructive">{errors.service}</p> : null}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="description" className="text-sm font-medium">Descripción</label>
          <textarea
            id="description"
            value={description}
            maxLength={800}
            rows={4}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Cuéntanos qué necesitas"
            className={field}
          />
          {errors.description ? (
            <p className="mt-1 text-xs text-destructive">{errors.description}</p>
          ) : null}
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary-gradient px-6 py-3.5 text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.02] sm:w-auto"
      >
        <Send className="h-4 w-4" />
        Enviar solicitud por WhatsApp
      </button>

      {sent ? (
        <p className="mt-4 text-sm text-primary">
          Abrimos WhatsApp con tu solicitud. Si no se abrió, revisa el bloqueo de ventanas de tu
          navegador.
        </p>
      ) : null}
    </form>
  );
}
