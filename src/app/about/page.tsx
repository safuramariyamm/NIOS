import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us | BrightPath Learning Center",
  description: "Learn about BrightPath's story, mission, values, and work with children.",
};

export default function AboutPage() {
  return <AboutClient />;
}