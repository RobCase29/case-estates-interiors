import { Metadata } from "next";
import Hero from "@/components/home/Hero";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Case Estates Home Interiors",
  description:
    "Connect with Emma Case to begin transforming your home with sophisticated interior design solutions.",
  keywords:
    "contact, interior design consultation, case estates, email, phone",
};

export default function Contact() {
  return (
    <main className="bg-background-light">
      <Hero
        heading="Get in Touch"
        subheading="Tell us about your dream space and we'll make it a reality."
        backgroundImage="/about-interior.jpg"
        backgroundAlt="Elegant interior setting"
        primaryButtonText="Start Your Project"
        primaryButtonLink="#contact-form"
        secondaryButtonText="View Portfolio"
        secondaryButtonLink="/portfolio"
      />
      <div className="container mx-auto px-4 py-20">
        <ContactForm />
      </div>
    </main>
  );
}
