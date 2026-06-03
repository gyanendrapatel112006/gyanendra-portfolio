import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { S as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { D as Download, G as Github, L as Linkedin, C as CodeXml, B as Briefcase, a as Brain, S as Sparkles, E as ExternalLink, b as GraduationCap, P as Phone, M as Mail } from "../_libs/lucide-react.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
const profileImage = "/assets/gyanendra-profile-p_6zD_W-.png";
const civicImage = "/assets/project-civic-map-COPXqDDs.jpg";
const neuroWebImage = "/assets/project-neuroweb-DNjoMk-x.jpg";
const disasterIqImage = "/assets/project-disasteriq-D5W-dbPA.jpg";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({ className, variant, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn(badgeVariants({ variant }), className), ...props });
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = reactExports.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
const Card = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref,
      className: cn("rounded-xl border bg-card text-card-foreground shadow", className),
      ...props
    }
  )
);
Card.displayName = "Card";
const CardHeader = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: cn("flex flex-col space-y-1.5 p-6", className), ...props })
);
CardHeader.displayName = "CardHeader";
const CardTitle = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref,
      className: cn("font-semibold leading-none tracking-tight", className),
      ...props
    }
  )
);
CardTitle.displayName = "CardTitle";
const CardDescription = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: cn("text-sm text-muted-foreground", className), ...props })
);
CardDescription.displayName = "CardDescription";
const CardContent = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: cn("p-6 pt-0", className), ...props })
);
CardContent.displayName = "CardContent";
const CardFooter = reactExports.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: cn("flex items-center p-6 pt-0", className), ...props })
);
CardFooter.displayName = "CardFooter";
const Input = reactExports.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";
const Textarea = reactExports.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "textarea",
      {
        className: cn(
          "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Textarea.displayName = "Textarea";
const skillGroups = [
  {
    title: "Programming",
    icon: CodeXml,
    skills: ["Python", "Java"]
  },
  {
    title: "Development",
    icon: Briefcase,
    skills: ["Full Stack Development", "Git", "GitHub"]
  },
  {
    title: "AI & ML",
    icon: Brain,
    skills: ["Machine Learning", "Python for Data Science", "Microsoft Azure AI"]
  },
  {
    title: "Tools",
    icon: Sparkles,
    skills: ["VS Code", "Robotics Programming"]
  }
];
const education = [
  {
    title: "B.Tech CSE (AI & ML)",
    subtitle: "Thakur Shyamnarayan Engineering College",
    period: "2023–2027",
    score: "CGPA: 9"
  },
  { title: "HSC Science", subtitle: "Maharashtra Board", period: "Completed", score: "65%" },
  {
    title: "SSC",
    subtitle: "Maharashtra Board",
    period: "Completed",
    score: "86%"
  },
  {
    title: "MHT-CET",
    subtitle: "Engineering Entrance",
    period: "2023",
    score: "87 Percentile"
  }
];
const projects = [
  {
    title: "Civic Reporting AI Map",
    category: "ai",
    description: "AI-powered civic issue reporting platform with interactive map integration enabling citizens to report and track infrastructure issues in real time.",
    image: civicImage,
    stats: ["12+ Zones", "2.4k Reports", "86% Resolution Tracking"],
    tech: ["AI", "Maps", "Real-time", "Full Stack"],
    github: "https://github.com/",
    demo: "#"
  },
  {
    title: "NeuroWeb for Students",
    category: "fullstack",
    description: "AI-powered learning platform providing personalized study assistance, productivity tools, and learning resources.",
    image: neuroWebImage,
    stats: ["3.2x Study Consistency", "Personalized Paths", "Live Productivity Hub"],
    tech: ["AI", "EdTech", "Analytics", "Cloud"],
    github: "https://github.com/",
    demo: "#"
  },
  {
    title: "DisasterIQ",
    category: "ai",
    description: "AI-powered disaster management system for prediction, assessment, and emergency response coordination.",
    image: disasterIqImage,
    stats: ["Predictive Alerts", "Risk Heatmaps", "Response Coordination"],
    tech: ["ML", "Predictive AI", "Emergency Ops", "Data Viz"],
    github: "https://github.com/",
    demo: "#"
  }
];
const counters = [
  { value: 9, suffix: " CGPA", label: "Academic Excellence" },
  { value: 4, suffix: " Hackathons", label: "Participated" },
  { value: 2, suffix: " Finalist", label: "Final Round Positions" },
  { value: 4, suffix: "+ Certifications", label: "Professional Credentials" }
];
const certifications = [
  "NPTEL Python for Data Science (Elite)",
  "NPTEL COA (Elite)",
  "Microsoft Azure AI Certification",
  "Robotics Certifications"
];
const whyHireMe = [
  "Strong Academic Record",
  "AI & ML Knowledge",
  "Full Stack Development Experience",
  "Fast Learner",
  "Team Player",
  "Problem Solver",
  "Consistent Performer"
];
function GyanendraPortfolioPage() {
  const [projectFilter, setProjectFilter] = reactExports.useState("all");
  const filteredProjects = reactExports.useMemo(() => {
    if (projectFilter === "all") return projects;
    return projects.filter((project) => project.category === projectFilter);
  }, [projectFilter]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "mx-auto max-w-7xl px-6 py-12 md:px-10 md:py-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-b border-border pb-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", children: "AI & ML Engineer" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-4 text-4xl font-semibold text-foreground md:text-5xl", children: "Gyanendra Patel" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-lg text-muted-foreground md:text-xl", children: "AI & ML Engineer | Full Stack Developer" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 max-w-2xl leading-relaxed text-muted-foreground", children: "Building intelligent solutions that solve real-world problems." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/resume.pdf", target: "_blank", rel: "noreferrer", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Download, {}),
            " Resume"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", size: "lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#contact", children: "Contact" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", size: "icon", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://github.com/", target: "_blank", rel: "noreferrer", "aria-label": "GitHub", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Github, {}) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", size: "icon", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://linkedin.com/", target: "_blank", rel: "noreferrer", "aria-label": "LinkedIn", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, {}) }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "group mx-auto aspect-[4/3] w-full max-w-sm overflow-hidden rounded-2xl border border-border bg-card p-2 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: profileImage,
          alt: "Portrait of Gyanendra Patel",
          width: 1024,
          height: 768,
          className: "h-full w-full rounded-xl object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        }
      ) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "about", className: "py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-2xl", children: "About Me" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "leading-relaxed text-muted-foreground", children: "I am a B.Tech Computer Science & Engineering (AI & ML) student with a CGPA of 9. I am passionate about Artificial Intelligence, Machine Learning, Full Stack Development, Cloud Computing, and building impactful technology solutions. I enjoy solving real-world challenges through innovation and continuous learning." }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "education", className: "py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "section-title", children: "Education" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid gap-4 md:grid-cols-2", children: education.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardHeader, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-lg", children: item.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardDescription, { children: item.subtitle })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "flex flex-wrap items-center gap-3 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", children: item.period }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item.score })
        ] })
      ] }, item.title)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "skills", className: "py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "section-title", children: "Skills" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4", children: skillGroups.map((group, index) => {
        const Icon = group.icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            style: { transitionDelay: `${index * 70}ms` },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "h-full", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "flex items-center gap-2 text-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "text-primary" }),
                group.title
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "flex flex-wrap gap-2", children: group.skills.map((skill) => /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "secondary", children: skill }, skill)) })
            ] })
          },
          group.title
        );
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "projects", className: "py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-end justify-between gap-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "section-title", children: "Projects" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 rounded-lg border border-border p-1", children: [
          { key: "all", label: "All" },
          { key: "ai", label: "AI" },
          { key: "fullstack", label: "Full Stack" }
        ].map((option) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: projectFilter === option.key ? "default" : "ghost",
            size: "sm",
            onClick: () => setProjectFilter(option.key),
            children: option.label
          },
          option.key
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid gap-6 lg:grid-cols-3", children: filteredProjects.map((project) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "overflow-hidden rounded-xl border border-border bg-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: project.image,
            alt: `${project.title} preview`,
            loading: "lazy",
            width: 1920,
            height: 1080,
            className: "h-48 w-full object-cover"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold", children: project.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: project.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex flex-wrap gap-2", children: project.tech.map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { variant: "outline", children: tag }, tag)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 grid gap-2 text-xs text-muted-foreground", children: project.stats.map((stat) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: stat }, stat)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", size: "sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: project.github, target: "_blank", rel: "noreferrer", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Github, {}),
              " GitHub"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: project.demo, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, {}),
              " Live Demo"
            ] }) })
          ] })
        ] })
      ] }, project.title)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "achievements", className: "py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "section-title", children: "Achievements" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-4", children: counters.map((counter) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pt-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-3xl font-semibold md:text-4xl", children: [
          counter.value,
          counter.suffix
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: counter.label })
      ] }) }, counter.label)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "section-title", children: "Certifications" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid gap-5 md:grid-cols-2", children: certifications.map((certification) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "flex items-center gap-3 pt-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: certification })
      ] }) }, certification)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "section-title", children: "Hackathon Experience" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 space-y-4", children: [
        "Participated in 4 Hackathons",
        "Reached Final Round in 2",
        "Strong Team Collaboration",
        "Problem Solving Experience"
      ].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "pt-6", children: item }) }, item)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "section-title", children: "Why Hire Me" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4", children: whyHireMe.map((point) => /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "pt-6 text-sm", children: point }) }, point)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "contact", className: "py-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "section-title", children: "Contact" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "pt-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex flex-wrap gap-4 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "tel:9730178248", className: "flex items-center gap-2 hover:text-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4" }),
            " +91 97301 78248"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "mailto:patelgyanendra130@gmail.com", className: "flex items-center gap-2 hover:text-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4" }),
            " patelgyanendra130@gmail.com"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "grid gap-4 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { required: true, placeholder: "Your Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { required: true, type: "email", placeholder: "Your Email" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { required: true, placeholder: "Tell me about your project or opportunity", className: "min-h-28" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2 flex flex-wrap items-center justify-between gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", size: "icon", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://github.com/", target: "_blank", rel: "noreferrer", "aria-label": "GitHub", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Github, {}) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", size: "icon", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://linkedin.com/", target: "_blank", rel: "noreferrer", "aria-label": "LinkedIn", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, {}) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", size: "icon", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:patelgyanendra130@gmail.com", "aria-label": "Email", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, {}) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", size: "icon", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:9730178248", "aria-label": "Phone", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, {}) }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", children: "Send Message" })
          ] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "border-t border-border py-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground", children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Gyanendra Patel"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "ghost", size: "icon", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://github.com/", target: "_blank", rel: "noreferrer", "aria-label": "GitHub", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Github, {}) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "ghost", size: "icon", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://linkedin.com/", target: "_blank", rel: "noreferrer", "aria-label": "LinkedIn", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, {}) }) })
      ] })
    ] }) })
  ] });
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(GyanendraPortfolioPage, {});
}
export {
  Index as component
};
