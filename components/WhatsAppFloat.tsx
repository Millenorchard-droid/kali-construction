import { MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/content";

export default function WhatsAppFloat() {
  return (
    <a className="whatsapp-float" href={CONTACT.whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="Message us on WhatsApp">
      <MessageCircle size={26} />
    </a>
  );
}
