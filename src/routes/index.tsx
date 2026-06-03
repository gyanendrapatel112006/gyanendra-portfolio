import { createFileRoute } from "@tanstack/react-router";
import { GyanendraPortfolioPage } from "@/components/portfolio/gyanendra-portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gyanendra Patel | AI & ML Portfolio" },
      {
        name: "description",
        content:
          "Premium portfolio of Gyanendra Patel, AI & ML Engineer and Full Stack Developer building intelligent solutions for real-world challenges.",
      },
      { property: "og:title", content: "Gyanendra Patel | AI & ML Portfolio" },
      {
        property: "og:description",
        content:
          "Explore projects, skills, achievements, and certifications of Gyanendra Patel — AI & ML Engineer and Full Stack Developer.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return <GyanendraPortfolioPage />;
}
