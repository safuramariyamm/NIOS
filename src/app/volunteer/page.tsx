import type { Metadata } from "next";
import VolunteerClient from "./VolunteerClient";

export const metadata: Metadata = {
  title: "Volunteer | BrightPath Learning Center",
  description: "Join BrightPath as a volunteer — teach, mentor, fundraise, or organize events for children who need you.",
};

export default function VolunteerPage() {
  return <VolunteerClient />;
}