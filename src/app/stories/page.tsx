import type { Metadata } from "next";
import StoriesClient from "./StoriesClient";

export const metadata: Metadata = {
  title: "Stories | BrightPath Learning Center",
  description: "Real stories of change from the children, families, and volunteers whose lives BrightPath has touched.",
};

export default function StoriesPage() {
  return <StoriesClient />;
}
