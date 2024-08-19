import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";



export const DATA = {
  name: "Youness AABIBI",
  initials: "YA",
  url: "https://portfolio-youness-aabibi.vercel.app/",
  location: "Casablanca, Morocco",
  locationLink: "",
  description: "Goal-oriented Software Engineer | ML/DL Passionate. I am dedicated to building high-quality products.",
  summary:
    "I'm a passionate Software Engineer based in Quebec, Canada (Currently). With a strong foundation in Front-end, and Back-end technologies, alongside the focus on AI integration in my solutions. I specialize in creating dynamic, user-friendly web applications that not only meet client needs but also deliver an exceptional user experience. Mainly, [I pursued a double degree in computer science and engineering](/#education), and [competed in 3 hackathons for fun](/#hackathons).",
  avatarUrl: "/me.jpg",
  skills: [
    "TypeScript",
    "Python",
    "Java",
    "C++",
    "Node.js",
    "Next.js",
    "React",
    "TailwindCSS",
    "OpenCV",
    "PostgreSQL",
    "Supabase",
    "Git & GitHub "
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "younesseaabibi828@gmail.com",
    tel: "+212 613427188",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Younessab12",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/yassineyassif",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:younesseaabibi828@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "JESA",
      href: "https://www.jesagroup.com/",
      badges: [],
      location: "Casablanca, Morocco",
      title: "intern: Software Engineer",
      logoUrl: "/assets/work/jesa.png",
      start: "Jul 2024",
      end: "Aug 2024",
      description: "",
    },
    {
      company: "Yzaki Meknes",
      href: "https://www.yazaki-europe.com/fr/about-us/yazaki-worldwide",
      badges: [],
      location: "Meknes, Morocco",
      title: "Part time Software Engineer",
      logoUrl: "/assets/work/yazaki.png",
      start: "December 2023",
      end: "Jan 2024",
      description: "",
    },
  ],
  education: [
    {
      school: "University of Moulay Ismail - ENSAM-Meknes",
      href: "http://www.ensam-umi.ac.ma/?lang=en",
      degree: "Bachelor's of Engineering in Artificial Intelligence & Data Science",
      logoUrl: "/assets/education/ensam.png",
      start: "2019",
      end: "2025",
    },
    {
      school: "Ben M'sik High School",
      href: "https://www.facebook.com/LyceeBenMsik/",
      degree: "Mathematical Sciences Baccalaureate",
      logoUrl: "/assets/education/ibn-soulaiman.png",
      start: "2017",
      end: "2020",
    }
  ],
  projects: [
    {
      title: "LGuide-AI",
      href: "https://github.com/yyassif/thinkai-lguide",
      dates: "May 2024",
      active: true,
      description: "LGuide-AI - Your Best Touristic Assistant, Empowered by Generative AI.",
      technologies: [
        "GPT-4o",
        "Google-Maps-API",
        "FastAPI",
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "TailwindCSS",
        "Shadcn UI",
        "Docker",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/yyassif/thinkai-lguide",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/assets/projects/lguideai.webp",
      video: "",
    },
    {
      title: "Headshot AI - Professional Headshots",
      href: "https://github.com/yyassif/headshot-ai",
      dates: "January 2024 - April 2024",
      active: true,
      description:
        "Headshot AI, let you generates Professional AI Headshots in minutes with AI (Powered by Astria.ai).",
      technologies: [
        "Next.js",
        "Astria.AI",
        "Supabase",
        "Resend",
        "Shadcn UI",
        "TailwindCSS",
        "Magic UI",
        "Vercel",
        "Stripe",
      ],
      links: [
        {
          type: "Github",
          href: "https://github.com/yyassif/headshot-ai",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/assets/projects/headshot-ai.png",
      video: "",
    },
    {
      title: "Data Augmentation by GANs",
      href: "https://github.com/yyassif/Data-Augmentation-GANs",
      dates: "April 2023 - June 2023",
      active: true,
      description:
        "Data Augmentation powered by GANs (Generative Adversarial Networks) architecture for industrial use cases, specifically Image Data Augmentation for quality inspection tasks.",
      technologies: [
        "PyTorch",
        "Pillow",
        "Pandas",
        "Numpy",
        "LaTex",
      ],
      links: [
        {
          type: "Overleaf",
          href: "https://www.overleaf.com/project/647782bbe6a354d0850c3e89",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Github",
          href: "https://github.com/yyassif/Data-Augmentation-GANs",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/assets/projects/Data-Augmentation-GANs.jpg",
      video: "",
    },
    {
      title: "kNN-Gzip - Deep Learning",
      href: "https://github.com/yyassif/kNN-Gzip-deep-learning",
      dates: "January 2024",
      active: true,
      description: "Simplistic Linear & Multiprocessed approach to sentiment analysis using Gzip Normalized Compression Distances with k nearest neighbors.",
      technologies: [
        "Gzip",
        "scikit-learn",
      ],
      links: [
        {
          type: "Github",
          href: "https://github.com/yyassif/kNN-Gzip-deep-learning",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/assets/projects/kNN-Gzip-deep-learning.jpg",
      video: "",
    },
  ],


  hackathons: [
    {
      title: "UPF Coding Challenge",
      dates: "May 26th, 2022",
      location: "Fez, Morocco",
      description: "Solved 5 problems securing the 3nd prize.",
      image: "/assets/hackatons/upf.png",
      mlh: "",
      links: [
        {
          title: "Gallery",
          href: "https://www.facebook.com/share/p/fP6VZzWjm5gBMnTc/?mibextid=oFDknk",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
    {
      title: "UPF Coding Challenge",
      dates: "May 25th, 2024",
      location: "Fez, Morocco",
      description: "Solved all the problems securing the 1nd prize.",
      image: "/assets/hackatons/upf.png",
      mlh: "",
      links: [
        {
          title: "Gallery",
          href: "https://www.facebook.com/share/dYbCKT9QNETu2ypS/?mibextid=oFDknk",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
    {
      title: "MNPC: Moroccan Collegiate Programming Contest",
      dates: "Oct 19th, 2021",
      location: "Morocco",
      description: "Solved 7 problems out of 12 in total, attaining the 18th place in the national elimination round.",
      image: "/assets/hackatons/mcpc.jpg",
      mlh: "",
      links: [
        {
          
          title: "Leaderboard",
          href: "https://x.com/mcpc__news/status/1450595581806747649",
          icon: <Icons.x className="size-3" />,
        }
      ],
    },
    {
      title: "ThinkAI Hackathon",
      dates: "May 16th - 19th, 2024",
      location: "Ben Guerir, Morocco",
      description: "Developed a virtual guide called LGuideAI that helps tourists to navigate morocco easily via the a geolocation system that serves for better discoveery of places.",
      image: "/assets/hackatons/thinkai.jpeg",
      mlh: "",
      links: [],
    },
  ]
} as const;
