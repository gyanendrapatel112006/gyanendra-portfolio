import { useMemo, useState } from "react";
import {
  Brain,
  Briefcase,
  Code2,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Phone,
  Sparkles,
} from "lucide-react";

import profileImage from "@/assets/gyanendra-profile.png";
import civicImage from "@/assets/project-civic-map.jpg";
import neuroWebImage from "@/assets/project-neuroweb.jpg";
import disasterIqImage from "@/assets/project-disasteriq.jpg";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const skillGroups = [
  {
    title: "Programming",
    icon: Code2,
    skills: ["Python", "Java"],
  },
  {
    title: "Development",
    icon: Briefcase,
    skills: ["Full Stack Development", "Git", "GitHub"],
  },
  {
    title: "AI & ML",
    icon: Brain,
    skills: ["Machine Learning", "Python for Data Science", "Microsoft Azure AI"],
  },
  {
    title: "Tools",
    icon: Sparkles,
    skills: ["VS Code", "Robotics Programming"],
  },
] as const;

const education = [
  {
    title: "B.Tech CSE (AI & ML)",
    subtitle: "Thakur Shyamnarayan Engineering College",
    period: "2023–2027",
    score: "CGPA: 9",
  },
  { title: "HSC Science", subtitle: "Maharashtra Board", period: "Completed", score: "65%" },
  {
    title: "SSC",
    subtitle: "Maharashtra Board",
    period: "Completed",
    score: "86%",
  },
  {
    title: "MHT-CET",
    subtitle: "Engineering Entrance",
    period: "2023",
    score: "87 Percentile",
  },
] as const;

const projects = [
  {
    title: "Civic Reporting AI Map",
    category: "ai",
    description:
      "AI-powered civic issue reporting platform with interactive map integration enabling citizens to report and track infrastructure issues in real time.",
    image: civicImage,
    stats: ["12+ Zones", "2.4k Reports", "86% Resolution Tracking"],
    tech: ["AI", "Maps", "Real-time", "Full Stack"],
    github: "https://github.com/",
    demo: "#",
  },
  {
    title: "NeuroWeb for Students",
    category: "fullstack",
    description:
      "AI-powered learning platform providing personalized study assistance, productivity tools, and learning resources.",
    image: neuroWebImage,
    stats: ["3.2x Study Consistency", "Personalized Paths", "Live Productivity Hub"],
    tech: ["AI", "EdTech", "Analytics", "Cloud"],
    github: "https://github.com/",
    demo: "#",
  },
  {
    title: "DisasterIQ",
    category: "ai",
    description:
      "AI-powered disaster management system for prediction, assessment, and emergency response coordination.",
    image: disasterIqImage,
    stats: ["Predictive Alerts", "Risk Heatmaps", "Response Coordination"],
    tech: ["ML", "Predictive AI", "Emergency Ops", "Data Viz"],
    github: "https://github.com/",
    demo: "#",
  },
] as const;

const counters = [
  { value: 9, suffix: " CGPA", label: "Academic Excellence" },
  { value: 4, suffix: " Hackathons", label: "Participated" },
  { value: 2, suffix: " Finalist", label: "Final Round Positions" },
  { value: 4, suffix: "+ Certifications", label: "Professional Credentials" },
] as const;

const certifications = [
  "NPTEL Python for Data Science (Elite)",
  "NPTEL COA (Elite)",
  "Microsoft Azure AI Certification",
  "Robotics Certifications",
];

const whyHireMe = [
  "Strong Academic Record",
  "AI & ML Knowledge",
  "Full Stack Development Experience",
  "Fast Learner",
  "Team Player",
  "Problem Solver",
  "Consistent Performer",
];

export function GyanendraPortfolioPage() {
  const [projectFilter, setProjectFilter] = useState<"all" | "ai" | "fullstack">("all");

  const filteredProjects = useMemo(() => {
    if (projectFilter === "all") return projects;
    return projects.filter((project) => project.category === projectFilter);
  }, [projectFilter]);

  return (
    <main className="mx-auto max-w-7xl px-6 py-12 md:px-10 md:py-16">
      <section className="border-b border-border pb-12">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <Badge variant="outline">AI & ML Engineer</Badge>
            <h1 className="mt-4 text-4xl font-semibold text-foreground md:text-5xl">Gyanendra Patel</h1>
            <p className="mt-3 text-lg text-muted-foreground md:text-xl">
              AI & ML Engineer | Full Stack Developer
            </p>
            <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
              Building intelligent solutions that solve real-world problems.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <a href="/resume.pdf" target="_blank" rel="noreferrer">
                  <Download /> Resume
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#contact">Contact</a>
              </Button>
              <Button asChild variant="outline" size="icon">
                <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub">
                  <Github />
                </a>
              </Button>
              <Button asChild variant="outline" size="icon">
                <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <Linkedin />
                </a>
              </Button>
            </div>
          </div>

          <div className="group mx-auto aspect-[4/3] w-full max-w-sm overflow-hidden rounded-2xl border border-border bg-card p-2 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
            <img
              src={profileImage}
              alt="Portrait of Gyanendra Patel"
              width={1024}
              height={768}
              className="h-full w-full rounded-xl object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
        </div>
      </section>

      <section id="about" className="py-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">About Me</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="leading-relaxed text-muted-foreground">
              I am a B.Tech Computer Science &amp; Engineering (AI &amp; ML) student with a CGPA of
              9. I am passionate about Artificial Intelligence, Machine Learning, Full Stack
              Development, Cloud Computing, and building impactful technology solutions. I enjoy
              solving real-world challenges through innovation and continuous learning.
            </p>
          </CardContent>
        </Card>
      </section>

      <section id="education" className="py-12">
        <h2 className="section-title">Education</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {education.map((item) => (
            <Card key={item.title}>
              <CardHeader>
                <CardTitle className="text-lg">{item.title}</CardTitle>
                <CardDescription>{item.subtitle}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                <Badge variant="outline">{item.period}</Badge>
                <span>{item.score}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="skills" className="py-12">
        <h2 className="section-title">Skills</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group, index) => {
              const Icon = group.icon;
              return (
                <div
                  key={group.title}
                  style={{ transitionDelay: `${index * 70}ms` }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <Icon className="text-primary" />
                        {group.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <Badge key={skill} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              );
            })}
        </div>
      </section>

      <section id="projects" className="py-12">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <h2 className="section-title">Projects</h2>
          <div className="flex gap-2 rounded-lg border border-border p-1">
              {[
                { key: "all", label: "All" },
                { key: "ai", label: "AI" },
                { key: "fullstack", label: "Full Stack" },
              ].map((option) => (
                <Button
                  key={option.key}
                  variant={projectFilter === option.key ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setProjectFilter(option.key as "all" | "ai" | "fullstack")}
                >
                  {option.label}
                </Button>
              ))}
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <article key={project.title} className="overflow-hidden rounded-xl border border-border bg-card">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  loading="lazy"
                  width={1920}
                  height={1080}
                  className="h-48 w-full object-cover"
                />
                <div className="p-5">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-4 grid gap-2 text-xs text-muted-foreground">
                    {project.stats.map((stat) => (
                      <span key={stat}>{stat}</span>
                    ))}
                  </div>
                  <div className="mt-5 flex gap-2">
                    <Button asChild variant="outline" size="sm">
                      <a href={project.github} target="_blank" rel="noreferrer">
                        <Github /> GitHub
                      </a>
                    </Button>
                    <Button asChild size="sm">
                      <a href={project.demo}>
                        <ExternalLink /> Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
            </article>
          ))}
        </div>
      </section>

      <section id="achievements" className="py-12">
        <h2 className="section-title">Achievements</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {counters.map((counter) => (
            <Card key={counter.label}>
              <CardContent className="pt-6">
                <p className="text-3xl font-semibold md:text-4xl">
                  {counter.value}
                  {counter.suffix}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{counter.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-12">
        <h2 className="section-title">Certifications</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {certifications.map((certification) => (
            <Card key={certification}>
              <CardContent className="flex items-center gap-3 pt-6">
                <GraduationCap className="text-primary" />
                <p className="text-sm">{certification}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-12">
        <h2 className="section-title">Hackathon Experience</h2>
        <div className="mt-6 space-y-4">
            {[
              "Participated in 4 Hackathons",
              "Reached Final Round in 2",
              "Strong Team Collaboration",
              "Problem Solving Experience",
            ].map((item) => (
              <Card key={item}>
                <CardContent className="pt-6">{item}</CardContent>
              </Card>
            ))}
        </div>
      </section>

      <section className="py-12">
        <h2 className="section-title">Why Hire Me</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {whyHireMe.map((point) => (
              <Card key={point} className="h-full">
                <CardContent className="pt-6 text-sm">{point}</CardContent>
              </Card>
            ))}
        </div>
      </section>

      <section id="contact" className="py-12">
        <h2 className="section-title">Contact</h2>
        <Card className="mt-6">
          <CardContent className="pt-6">
            <div className="mb-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
              <a href="tel:9730178248" className="flex items-center gap-2 hover:text-foreground">
                <Phone className="h-4 w-4" /> +91 97301 78248
              </a>
              <a href="mailto:patelgyanendra130@gmail.com" className="flex items-center gap-2 hover:text-foreground">
                <Mail className="h-4 w-4" /> patelgyanendra130@gmail.com
              </a>
            </div>
            <form className="grid gap-4 md:grid-cols-2">
              <Input required placeholder="Your Name" />
              <Input required type="email" placeholder="Your Email" />
              <div className="md:col-span-2">
                <Textarea required placeholder="Tell me about your project or opportunity" className="min-h-28" />
              </div>
              <div className="md:col-span-2 flex flex-wrap items-center justify-between gap-3">
                <div className="flex gap-3">
                  <Button asChild variant="outline" size="icon">
                    <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub">
                      <Github />
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="icon">
                    <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                      <Linkedin />
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="icon">
                    <a href="mailto:patelgyanendra130@gmail.com" aria-label="Email">
                      <Mail />
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="icon">
                    <a href="tel:9730178248" aria-label="Phone">
                      <Phone />
                    </a>
                  </Button>
                </div>
                <Button type="submit">Send Message</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </section>

      <footer className="border-t border-border py-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Gyanendra Patel</p>
          <div className="flex gap-2">
            <Button asChild variant="ghost" size="icon">
              <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub">
                <Github />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon">
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Linkedin />
              </a>
            </Button>
          </div>
        </div>
      </footer>
    </main>
  );
}