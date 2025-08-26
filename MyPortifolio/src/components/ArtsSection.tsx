
// Artworks & Digital Portfolio - Dynamic gallery management
import React from 'react';
import { Image as ImageIcon } from "lucide-react";
import ArtworkManager from "@/components/ArtworkManager";

const ArtsSection = () => {
  return (
    <section id="artworks" className="py-20 bg-gradient-to-br from-background via-accent/3 to-background relative">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/2 to-transparent"></div>
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-foreground animate-fade-in flex items-center justify-center gap-2">
          <ImageIcon className="w-8 h-8 text-foreground" /> Artworks &amp; Digital Portfolio
        </h2>
        <div className="max-w-6xl mx-auto">
          <ArtworkManager />
        </div>
      </div>
    </section>
  );
};

export default ArtsSection;

