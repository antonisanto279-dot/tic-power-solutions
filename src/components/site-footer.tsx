import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import logo from "@/assets/tic-logo.png";
import { WHATSAPP_DISPLAY, whatsappLink } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface/60">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Logotipo de The Isaia Company"
              loading="lazy"
              width={1024}
              height={1024}
              className="h-10 w-10 object-contain"
            />
            <div>
              <p className="font-display font-extrabold">TIC.!!!</p>
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                The Isaia Company
              </p>
            </div>
          </div>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Servicios eléctricos y multiservicios: instalación, reparación, mantenimiento,
            renovación y construcción de sistemas eléctricos.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-primary">Navegación</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-foreground">Inicio</Link></li>
            <li><Link to="/servicios" className="hover:text-foreground">Servicios</Link></li>
            <li><Link to="/aire-acondicionado" className="hover:text-foreground">Aire Acondicionado</Link></li>
            <li><Link to="/nosotros" className="hover:text-foreground">Nosotros</Link></li>
            <li><Link to="/contacto" className="hover:text-foreground">Contacto</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-primary">Contacto</h3>
          <a
            href={whatsappLink("Hola TIC.!!!, quiero solicitar una cotización.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <Phone className="h-4 w-4" />
            {WHATSAPP_DISPLAY}
          </a>
          <p className="mt-3 text-sm text-muted-foreground">
            Escríbenos por WhatsApp y te respondemos con tu cotización.
          </p>
        </div>
      </div>
      <div className="border-t border-border px-4 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} The Isaia Company — TIC.!!!
      </div>
    </footer>
  );
}
