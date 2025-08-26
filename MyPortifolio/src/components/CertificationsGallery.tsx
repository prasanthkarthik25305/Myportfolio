
// Certifications & Awards Section - Customize certs, platform logos, and upload guidance here
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye } from "lucide-react";
import CertificateManager from "@/components/CertificateManager";

// Change these logo URLs to your own or new platforms as needed
const logos = {
  coursera: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Coursera_logo.svg", // Update with your preferred logos
  hackerrank: "https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png",
  default: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=64&q=80"
};

// Placeholder image for certificates (replace with actual image URLs via upload or link)
const certificatePlaceholder =
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80";

/*
  To add a certificate/award: 
    - Add an object to defaultCerts.
    - Update 'platform', 'title', 'logo', 'certImg', 
      'viewUrl', 'description' as desired.
    - Replace dummy/placeholder images with your real scanned certificates.
    - For 'viewUrl', put actual link or "#" to disable the button.
*/
const defaultCerts = [
  {
    id: 'coursera-1',
    platform: 'Coursera',
    title: 'Dummy Data Science Cert',
    year: '2024',
    logo: logos.coursera,  // <-- Add your logo file or URL
    certImg: certificatePlaceholder, // <-- Replace with your certificate scan
    viewUrl: "#", // Or a drive/dropbox/public url of full certificate
    description: 'Fundamentals in Data Science — replace with real!',
  },
  {
    id: 'hackerrank-1',
    platform: 'HackerRank',
    title: 'Dummy Coding Cert',
    year: '2024',
    logo: logos.hackerrank,
    certImg: certificatePlaceholder,
    viewUrl: "#",
    description: 'HackerRank algorithm cert — upload real scan.',
  },
  {
    id: 'other-1',
    platform: 'Platform',
    title: 'Your Award Title',
    year: '2024',
    logo: logos.default,
    certImg: certificatePlaceholder,
    viewUrl: "#",
    description: 'Description and snapshot go here.',
  }
];

const CertificationsGallery = () => {
  return (
    <section id="certificates" className="py-16 bg-gradient-to-br from-background via-muted/10 to-background">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-foreground animate-fade-in">
          Certificates &amp; Awards
        </h2>
        
        {/* Dynamic Certificate Manager with Password Protection */}
        <CertificateManager />
        
      </div>
    </section>
  );
};

export default CertificationsGallery;

