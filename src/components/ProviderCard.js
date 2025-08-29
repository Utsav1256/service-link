"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram, Facebook, Phone } from "lucide-react";

export default function ProviderCard({ provider, index = 0 }) {
  return (
    <motion.article
      className="group card rounded-3xl overflow-hidden bg-white/90 backdrop-blur-xl lift"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.08 * index, duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={provider.photo}
          alt={provider.name}
          fill
          priority={index < 3}
          className="object-cover transition duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white drop-shadow">
          {provider.name}
        </h3>
      </div>

      <div className="p-6">
        <p className="text-lg font-medium text-ink">
          {provider.service} • {provider.location}
        </p>
        <p className="text-sm text-gray-500">{provider.experience}</p>

        <div className="mt-5 flex items-center gap-5">
          <a href={provider.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
            <Instagram className="w-6 h-6 text-pink-500 group-hover:scale-110 transition" />
          </a>
          <a href={provider.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
            <Facebook className="w-6 h-6 text-blue-600 group-hover:scale-110 transition" />
          </a>
          <a href={`tel:${provider.phone}`} className="flex items-center gap-2 hover:opacity-80 transition">
            <Phone className="w-6 h-6 text-green-600" />
            <span className="text-gray-800">{provider.phone}</span>
          </a>
        </div>
      </div>
    </motion.article>
  );
}
