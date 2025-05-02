import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import FormationsSection from "@/components/FormationsSection";
import TestimonialSection from "@/components/TestimonialSection";
import ActualitesSection from "@/components/ActualitesSection";
import PartenairesSection from "@/components/PartenairesSection";
import AvantagesSection from "@/components/AvantagesSection";
import Layout from "@/components/Layout";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Université Ahmadou Dieng - Accueil";
    
    // Smooth scroll for anchor links
    const smoothScroll = (e: Event, target: HTMLAnchorElement) => {
      e.preventDefault();
      
      const targetId = target.getAttribute('href');
      if (targetId === '#' || !targetId || !targetId.startsWith('#')) return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.getBoundingClientRect().top + window.scrollY - 80, // Adjust for header height
          behavior: 'smooth'
        });
      }
    };
    
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(anchor => {
      anchor.addEventListener('click', (e) => smoothScroll(e, anchor as HTMLAnchorElement));
    });
    
    // Cleanup
    return () => {
      anchorLinks.forEach(anchor => {
        anchor.removeEventListener('click', (e) => smoothScroll(e, anchor as HTMLAnchorElement));
      });
    };
  }, []);
  
  return (
    <Layout>
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <FormationsSection />
      <TestimonialSection />
      <ActualitesSection />
      <PartenairesSection />
      <AvantagesSection />
    </Layout>
  );
}
