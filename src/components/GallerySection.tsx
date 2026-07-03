"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/SectionTitle";
import { galleryImages } from "@/data/siteContent";

export function GallerySection() {
  return (
    <section id="gallery" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="Gallery" title="Moments of joy, learning, and belonging" description="A glimpse into the caring spaces where children feel welcomed, inspired, and safe to grow." align="center" />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.alt}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              className={`group relative overflow-hidden rounded-[28px] border border-[#E5E7EB] ${image.className}`}
            >
              <Image src={image.src} alt={image.alt} width={900} height={900} className="h-72 w-full object-cover transition duration-500 group-hover:scale-105" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
