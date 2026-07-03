import type { Metadata } from "next";
import ProgramsClient from "./ProgramsClient";

export const metadata: Metadata = {
  title: "Our Programs | BrightPath Learning Center",
  description: "Explore BrightPath's education, health, protection, and life-skills programs for children.",
};

export default function ProgramsPage() {
  return <ProgramsClient />;
}
