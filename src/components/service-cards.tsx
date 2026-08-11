import {
  FileText,
  HardHat,
  Plug,
  RefreshCw,
  ShieldCheck,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { ELECTRIC_SERVICES } from "@/lib/site";

const ICONS: Record<string, LucideIcon> = {
  Plug,
  Wrench,
  ShieldCheck,
  RefreshCw,
  HardHat,
  FileText,
};

export function ServiceCards() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {ELECTRIC_SERVICES.map((service) => {
        const Icon = ICONS[service.icon] ?? Plug;
        return (
          <article
            key={service.slug}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-glow"
          >
            <span className="absolute inset-x-0 top-0 h-px bg-primary-gradient opacity-0 transition-opacity group-hover:opacity-100" />
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary">
              <Icon className="h-6 w-6" />
            </span>
            <h3 className="mt-5 text-lg font-bold">{service.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {service.description}
            </p>
          </article>
        );
      })}
    </div>
  );
}
