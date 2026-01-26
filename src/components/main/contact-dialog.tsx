import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";
import { ContactLinksGroup } from "./contact-links-group";
import { Separator } from "../ui/separator";

const CONTACT_EMAIL = "zalaghi.dev@gmail.com";
const CONTACT_PHONE = "+989106030260";

function copyToClipboard(value: string) {
  if (navigator?.clipboard?.writeText) {
    navigator.clipboard.writeText(value).catch(() => {
      // ignore errors
    });
  }
}

export function ContactDialog() {
  const { t } = useTranslation();
  const [copiedField, setCopiedField] = useState<"email" | "phone" | null>(
    null,
  );

  const handleCopy = (value: string, field: "email" | "phone") => {
    copyToClipboard(value);
    setCopiedField(field);
    setTimeout(() => {
      setCopiedField((prev) => (prev === field ? null : prev));
    }, 2000);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" variant="outline">
          {t("hero.contact")}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t("hero.contact")}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 mt-2">
          <div className="flex items-center justify-between gap-2 text-sm">
            <div className="flex flex-col">
              <span className="text-muted-foreground">
                {t("contact.email")}
              </span>
              <span className="font-mono text-xs md:text-sm break-all">
                {CONTACT_EMAIL}
              </span>
            </div>
            <Button
              size="icon-lg"
              variant="outline"
              onClick={() => handleCopy(CONTACT_EMAIL, "email")}
            >
              {copiedField === "email" ? <Check /> : <Copy />}
            </Button>
          </div>

          <div className="flex items-center justify-between gap-2 text-sm">
            <div className="flex flex-col">
              <span className="text-muted-foreground">
                {t("contact.phone")}
              </span>
              <span
                dir="ltr"
                className="font-mono text-xs md:text-sm break-all"
              >
                {CONTACT_PHONE}
              </span>
            </div>
            <Button
              size="icon-lg"
              variant="outline"
              onClick={() => handleCopy(CONTACT_PHONE, "phone")}
            >
              {copiedField === "phone" ? <Check /> : <Copy />}
            </Button>
          </div>
        </div>
        <Separator />
        <DialogFooter>
          <ContactLinksGroup />
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
