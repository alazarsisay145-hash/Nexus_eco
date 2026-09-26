import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FAQ as FAQItem } from "@/data/faqs";
import { cn } from "@/lib/utils";

export function FAQ({
  items,
  className,
}: {
  items: FAQItem[];
  className?: string;
}) {
  return (
    <Accordion
      type="single"
      collapsible
      className={cn("w-full", className)}
    >
      {items.map((item, index) => (
        <AccordionItem key={item.question} value={`faq-${index}`}>
          <AccordionTrigger>{item.question}</AccordionTrigger>
          <AccordionContent className="max-w-2xl text-base leading-relaxed text-muted-foreground">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
