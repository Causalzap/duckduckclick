import { useState } from 'react';
import { content as defaultContent } from "@/config/content";
import { theme } from "@/config/theme";
import { layout } from "@/config/layout";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  content?: typeof defaultContent;
}

// 解析文本中的加粗标记
const parseBoldText = (text: string) => {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, index) => {
    if (index % 2 === 1) {
      return <strong key={index} className="font-semibold">{part}</strong>;
    }
    return part;
  });
};

export function FAQ({ content = defaultContent }: FAQProps) {
  return (
    <section
      id="faq"
      className={cn(
        theme.faq.layout.section,
        theme.faq.spacing.section,
        theme.layout.section.scrollMargin
      )}
    >
      <h2 className={cn(
        theme.faq.typography.title,
        theme.faq.spacing.title,
        "text-left"
      )}>
        {content.faq.title}
      </h2>
      
      <Accordion
        type={layout.faq.accordion.type}
        collapsible={layout.faq.accordion.collapsible}
        className={cn(
          theme.faq.layout.accordion,
          "text-left"
        )}
      >
        {content.faq.items.map((item) => (
          <AccordionItem 
            key={item.value} 
            value={item.value}
            className="text-left"
          >
            <AccordionTrigger className={cn(
              "text-left justify-start",
              "hover:no-underline",
              "font-normal text-lg"
            )}>
              <span className="text-left flex-1 pr-4">
                {item.question}
              </span>
            </AccordionTrigger>
            
            <AccordionContent className={cn(
              "text-left leading-relaxed",
              "break-words whitespace-normal",
              "pt-2"
            )}>
              {/* 修复后的代码 */}
              {Array.isArray(item.answer) ? (
                item.answer.map((line: string, index: number) => (
                  <div key={index} className="mb-3 text-left">
                    {parseBoldText(line)}
                  </div>
                ))
              ) : (
                <div className="text-left">
                  {parseBoldText(item.answer as string)}
                </div>
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}