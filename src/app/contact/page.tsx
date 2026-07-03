import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact | BrightPath Learning Center",
  description: "Get in touch with BrightPath Learning Center for questions about donating, volunteering, or our programs.",
};

export default function ContactPage() {
  return <ContactClient />;
}