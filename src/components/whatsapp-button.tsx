import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";

type Props = {
  message?: string;
  children?: React.ReactNode;
  className?: string;
};

export function WhatsappButton({ message, children = "WhatsApp", className }: Props) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3 text-sm font-semibold text-whatsapp-foreground transition-transform hover:scale-[1.03]",
        className,
      )}
    >
      <MessageCircle className="h-4 w-4 shrink-0" />
      {children}
    </a>
  );
}

export function WhatsappFloating() {
  return (
    <a
      href={whatsappLink("Hola TIC.!!!, quiero información sobre sus servicios.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-elevated transition-transform hover:scale-105"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
