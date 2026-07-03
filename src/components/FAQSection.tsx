"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";
import { faqs } from "@/data/siteContent";

export function FAQSection() {
  const [open, setOpen] = useState(0);

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <SectionTitle eyebrow="Good to know" title="Frequently asked questions" description="Answers to what donors, volunteers, and families ask us most." align="center" />
        <div className="mt-10 flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = open === index;
            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                className="overflow-hidden rounded-[24px] border border-[#FDE9D8] bg-white shadow-[0_16px_50px_rgba(154,52,18,0.06)]"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="flex items-center gap-3 text-base font-semibold text-[#111827]">
                    <HelpCircle className="h-5 w-5 shrink-0 text-[#F97316]" />
                    {faq.question}
                  </span>
                  <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.25 }}>
                    <ChevronDown className="h-5 w-5 text-[#F97316]" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-sm leading-7 text-[#6B7280]">{faq.answer}</p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
