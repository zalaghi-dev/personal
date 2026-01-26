import { contactLinks } from "@/data/contact-links";
import { Button } from "../ui/button";

export function ContactLinksGroup() {
  return (
    <div className=" flex flex-wrap gap-1">
      {contactLinks.map(({ Icon, alt, url, variant }) => (
        <Button asChild variant={variant} size="icon-sm">
          <a href={url} target="_blank" rel="noreferrer" aria-label={alt}>
            {Icon}
          </a>
        </Button>
      ))}
    </div>
  );
}
