import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { Typescript } from "@/components/ui/svgs/typescript";

export const DATA = {
  name: "William Ortiz",
  initials: "WO",
  url: "https://williamortiz.net",
  location: "New York, NY",
  locationLink: "https://www.google.com/maps/place/New+York,+NY/",
  description:
    "New York-based UI/UX Designer and Front-End Developer with a passion for digital production and generative AI workflows.",
  summary:
    "I am an experienced senior professional with a diverse background in digital, print, and web development. With years of experience in the industry, I have honed my skills in designing, developing, and managing projects across various platforms. Alongside my professional work, I actively explore generative AI tools through conceptual and experimental projects. This includes prompt engineering and hands-on experimentation with tools such as Imagen 4, Gemini, Nano Banana, loraAi, and ComfyUI, allowing me to stay current with emerging technologies and evolving creative workflows.",
  avatarUrl: "/Images/william_portrait_2.jpeg",
  skills: [
    { name: "UI/UX Design" },
    { name: "Front-End Development" },
    { name: "User-Centered Design" },
    { name: "Information Architecture" },
    { name: "Figma" },
    { name: "Sketch" },
    { name: "Adobe XD" },
    { name: "Zeplin" },
    { name: "Adobe Photoshop" },
    { name: "Adobe Illustrator" },
    { name: "Adobe InDesign" },
    { name: "HTML5" },
    { name: "CSS3" },
    { name: "JavaScript" },
    { name: "Bootstrap" },
    { name: "PHP" },
    { name: "Google Cloud Platform" },
    { name: "Generative AI" },
    { name: "Prompt Engineering" }
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" }
  ],
  contact: {
    email: "williamortizjr69@gmail.com",
    tel: "",
    social: {
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/william-ortiz-76149b33/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:williamortizjr69@gmail.com",
        icon: Icons.email,
        navbar: true,
      }
    },
  },
  work: [
    {
      company: "Ortiz Design and Production",
      href: "#",
      badges: ["Contract"],
      location: "New York, NY (Remote)",
      title: "Senior Art Director & Senior Production Artist",
      logoUrl: "/Images/logos/ortiz.jpg",
      start: "Jan 2023",
      end: "Present",
      description:
        "• Executed precise edits across massive digital design systems in Figma and ADS for Inizio Evoke, directly eliminating production bottlenecks and maintaining strict brand standards.\n• Directed the digital production and migration of over 500 content pages from two disparate websites into unified templates for TinyWins.\n• Instituted a highly detailed tracking system to identify inconsistencies in copy, media, and design across complex medical devices and educational materials.\n• Managed digital production, asset optimization, and preflight quality control for interactive trade show kiosks at Bigtincan, ensuring complete visual fidelity across all screens.\n• Designed and edited print and digital sales assets for GSK, placing a strict focus on continuous content updates and rigorous quality control."
    },
    {
      company: "Pixacore",
      href: "#",
      badges: [],
      location: "New York, NY",
      title: "Senior Art Director, Digital Production",
      logoUrl: "/Images/logos/pixacore.png",
      start: "Jan 2022",
      end: "Dec 2022",
      description:
        "• Directed the end-to-end design and development of over 15 high-fidelity, responsive websites, utilizing Figma, Sketch, and Adobe XD to deliver polished pharmaceutical digital experiences.\n• Provided UI/UX design and art direction for the Iovance Pharmaceutical website, ensuring a modern, responsive user experience.\n• Improved content hierarchy and navigation for a Bayer Pharmaceutical digital experience to support faster user discovery.\n• Designed and directed UX patterns for the Blueprint Med Info Platform, managing heavy content loads for a highly technical information portal.\n• Crafted responsive UI and visual direction for the Vitrakvi HCP web experience, directly targeting healthcare professionals.\n• Delivered polished digital production assets for BMS, focusing on performance-minded execution across platforms.\n• Implemented highly detailed UI specifications and interaction models in Zeplin to radically streamline developer workflows, dropping overall production time by 20 percent."
    },
    {
      company: "Merck",
      href: "#",
      badges: [],
      location: "Rahway, NJ",
      title: "Digital Designer & Senior Production Artist",
      logoUrl: "/Images/logos/merck.png",
      start: "Apr 2021",
      end: "Mar 2022",
      description:
        "• Engineered a vast array of high-quality digital assets for websites, applications, and advertisements to consistently surpass rigorous client expectations.\n• Seamlessly managed and submitted critical commercial materials utilizing Veeva Promomats to ensure absolute brand compliance.\n• Maintained a flawless standard of excellence across all diverse digital platforms by translating complex creative briefs into impactful visual experiences."
    },
    {
      company: "TBWA / WorldHealth Wildtype",
      href: "#",
      badges: [],
      location: "New York, NY",
      title: "Graphic Artist & Senior Production Artist",
      logoUrl: "/Images/logos/tbwa.jpg",
      start: "Sep 2018",
      end: "Oct 2019",
      description:
        "• Delivered high-quality print and digital materials while managing content to enforce absolute brand consistency.\n• Instituted a rigorous quality control process covering editing, screen captures, asset slicing, and photo rights management.\n• Routed content within Assembler CMS to streamline data flow across the agency."
    },
    {
      company: "JUICE Pharma Worldwide",
      href: "#",
      badges: [],
      location: "New York, NY",
      title: "Graphic Artist & Senior Production Artist",
      logoUrl: "/Images/logos/juice.jpg",
      start: "Oct 2015",
      end: "Nov 2017",
      description:
        "• Created detailed layouts, mechanicals, and mockups that perfectly aligned with stakeholder expectations.\n• Managed strict preflight procedures for all physical materials to ensure completely error-free final print production.\n• Eliminated ambiguity during the digital development phase by streamlining developer handoffs with precise specifications and style guides in Zeplin and Avocado."
    },
    {
      company: "PrestoSports",
      href: "#",
      badges: [],
      location: "New York, NY",
      title: "Web Designer",
      logoUrl: "/Images/logos/prestosports.png",
      start: "May 2015",
      end: "Oct 2015",
      description:
        "• Designed and launched up to 20 monthly collegiate websites, managing the complete process from initial ideation to final deployment on WordPress."
    },
    {
      company: "One Shot Records Inc.",
      href: "#",
      badges: [],
      location: "New York, NY",
      title: "UI/UX Designer | Front-End Developer",
      logoUrl: "/Images/oneshot_logo.jpg",
      start: "Jan 2012",
      end: "Present",
      description:
        "As a UI designer and Google-certified architect with experience in user-centered design practices, information architecture, and service design, I bring a unique skill set to the table. I have expertise in creating prototypes, wireframes, user journey maps, and designing user interfaces, as well as advising on UX research plans and supporting engineering teams during development."
    },
    {
      company: "Global Hue",
      href: "#",
      badges: [],
      location: "New York, NY",
      title: "Studio Manager / Print Production Artist",
      logoUrl: "/Images/logos/globalhue.jpg",
      start: "2008",
      end: "2008",
      description:
        "Managed the production studio and created premium high-resolution print mechanicals and assets for clients like Verizon and AT&T."
    },
    {
      company: "Regan, Campbell, Ward and McCann",
      href: "#",
      badges: [],
      location: "New York, NY",
      title: "Studio Manager / Print Production Artist",
      logoUrl: "/Images/logos/rcwm.jpg",
      start: "2005",
      end: "2005",
      description:
        "Led print production efforts and quality assurance for prominent pharmaceutical accounts including Allergan, Novartis, and Genentech."
    },
    {
      company: "The Sloan Group",
      href: "#",
      badges: [],
      location: "New York, NY",
      title: "Print Production Artist",
      logoUrl: "/Images/logos/sloan.jpg",
      start: "1999",
      end: "1999",
      description:
        "Produced complex print materials and advertisements for major entertainment and media clients including Nickelodeon."
    },
    {
      company: "Medallion Associates",
      href: "#",
      badges: [],
      location: "New York, NY",
      title: "Quality Control / Print Production Artist",
      logoUrl: "/Images/logos/medallion.jpg",
      start: "1995",
      end: "1995",
      description:
        "Oversaw print production quality control processes, ensuring alignment with brand standards for clients like Dunkin' Donuts and Kinney Shoes."
    }
  ],
  education: [
    {
      school: "CUNY New York City College of Technology",
      href: "#",
      degree: "BFA, Communication Design (Bachelor of Fine Arts)",
      logoUrl: "/Images/logos/cuny.svg",
      start: "1986",
      end: "1990",
    },
    {
      school: "Santa Monica College",
      href: "#",
      degree: "Vocational Certification, Print Production & Darkroom Technician",
      logoUrl: "/Images/logos/smc.svg",
      start: "1990",
      end: "1991",
    }
  ],
  certifications: [
    {
      name: "Google UX Design Professional Certificate - Google (2025)",
      href: "https://www.coursera.org/account/accomplishments/professional-cert/certificate/3M746PVDWQYS"
    },
    {
      name: "Introduction to AI - Google (2025)",
      href: "https://www.coursera.org/my-learning?myLearningTab=CERTIFICATES"
    },
    {
      name: "Design a User Experience for Social Good & Prepare for Jobs - Google (2025)",
      href: "https://www.coursera.org/my-learning?myLearningTab=CERTIFICATES"
    },
    {
      name: "Build Dynamic User Interfaces (UI) for Websites - Google (2025)",
      href: "https://www.coursera.org/my-learning?myLearningTab=CERTIFICATES"
    },
    {
      name: "Create High-Fidelity Designs and Prototypes in Figma - Google (2024)",
      href: "https://www.coursera.org/my-learning?myLearningTab=CERTIFICATES"
    },
    {
      name: "Conduct UX Research and Test Early Concepts - Google (2023)",
      href: "https://www.coursera.org/my-learning?myLearningTab=CERTIFICATES"
    },
    {
      name: "Google Ads for Beginners - Coursera (2023)",
      href: "https://www.coursera.org/my-learning?myLearningTab=CERTIFICATES"
    },
    {
      name: "Build Wireframes and Low-Fidelity Prototypes - Google (2023)",
      href: "https://www.coursera.org/my-learning?myLearningTab=CERTIFICATES"
    },
    {
      name: "Start the UX Design Process: Empathize, Define, and Ideate - Google (2022)",
      href: "https://www.coursera.org/my-learning?myLearningTab=CERTIFICATES"
    },
    {
      name: "Architecting with Google Compute Engine Specialization - Google Cloud (2020)",
      href: "https://www.coursera.org/my-learning?myLearningTab=CERTIFICATES"
    },
    {
      name: "Reliable Google Cloud Infrastructure - Google Cloud (2020)",
      href: "https://www.coursera.org/my-learning?myLearningTab=CERTIFICATES"
    },
    {
      name: "Elastic Google Cloud Infrastructure - Google Cloud (2020)",
      href: "https://www.coursera.org/my-learning?myLearningTab=CERTIFICATES"
    },
    {
      name: "Essential Google Cloud Infrastructure - Google Cloud (2020)",
      href: "https://www.coursera.org/my-learning?myLearningTab=CERTIFICATES"
    },
    {
      name: "End-to-End Machine Learning with TensorFlow on GCP - Google Cloud (2020)",
      href: "https://www.coursera.org/my-learning?myLearningTab=CERTIFICATES"
    },
    {
      name: "Introduction to Structured Query Language - Coursera (2020)",
      href: "https://www.coursera.org/my-learning?myLearningTab=CERTIFICATES"
    },
    {
      name: "Managing Security in Google Cloud Platform - Google Cloud (2020)",
      href: "https://www.coursera.org/my-learning?myLearningTab=CERTIFICATES"
    },
    {
      name: "Building Web Applications in PHP - Coursera (2019)",
      href: "https://www.coursera.org/my-learning?myLearningTab=CERTIFICATES"
    },
    { name: "Blasting Off with Bootstrap - Code School (2015)" },
    { name: "Try Git - Code School (2015)" },
    { name: "JavaScript Road Trip Part 1 - Code School (2015)" },
    { name: "Fundamentals of Design - Code School (2014)" },
    { name: "Assembling Sass - Code School (2014)" },
    { name: "Assembling Sass Part 2 - Code School (2014)" },
    { name: "CSS Cross-Country - Code School (2014)" },
    { name: "Journey Into Mobile - Code School (2014)" },
    { name: "Front-end Formations - Code School (2014)" }
  ],
  languages: [
    { name: "Spanish", level: "Native / Bilingual" }
  ],
  projects: [
    {
      title: "EdinaKolozsi-Heath Styling",
      href: "#",
      dates: "2012",
      active: true,
      description:
        "Designed and developed a responsive HTML5 and CSS3 portfolio website with an interactive image slider for fashion stylist Edina Kolozsi-Heath. Built using the Skeleton boilerplate and Dreamweaver CS6.",
      technologies: ["Web Design", "HTML5", "CSS3", "Skeleton Boilerplate", "Dreamweaver"],
      links: [],
      image: "/Images/Thumbs/edina_styling_thumb.jpg",
      video: "",
      categories: ["UI/UX Design", "Interactive & Web"],
      subType: "website",
      year: 2012
    },
    {
      title: "One Shot Records Marketplace",
      href: "https://www.oneshotrecords.com/",
      dates: "2025 - Present",
      active: true,
      description:
        "Designed and developed a premium online marketplace for rare vinyl records, hip-hop memorabilia, posters, and collectibles featuring robust wantlists, catalogs, and offer workflows.",
      technologies: [
        "UI/UX Design",
        "Next.js",
        "Tailwind CSS",
        "React",
        "E-commerce",
      ],
      links: [
        {
          type: "Live Site",
          href: "https://www.oneshotrecords.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Wireframes",
          href: "/projects/oneshot",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "/Images/oneshot.png",
      video: "",
      categories: ["UI/UX Design", "Interactive & Web"],
      subType: "website",
      year: 2025
    },
    {
      title: "Iovance Pharmaceuticals Refresh",
      href: "https://www.iovance.com/",
      dates: "2022",
      active: true,
      description:
        "UI/UX Design and Art Direction for the website refresh of Iovance Pharmaceuticals. Created complete desktop and mobile wireframes and site maps.",
      technologies: ["UI/UX Design", "Art Direction", "Figma", "Zeplin"],
      links: [
        {
          type: "Live Site",
          href: "https://www.iovance.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Wireframes",
          href: "/projects/iovance",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "/Images/Thumbs/thumbs.png",
      video: "",
      categories: ["UI/UX Design", "Interactive & Web", "Pharma Campaigns"],
      subType: "website",
      year: 2022
    },
    {
      title: "Bayer Pharmaceuticals Portal",
      href: "https://www.bayer.com/en/pharma/pharmaceuticals/",
      dates: "2022",
      active: true,
      description:
        "UI/UX design and art direction for Bayer's primary pharmaceutical information website and patient safety dashboards.",
      technologies: ["UI/UX Design", "Art Direction", "Figma", "Sketch"],
      links: [
        {
          type: "Live Site",
          href: "https://www.bayer.com/en/pharma/pharmaceuticals/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Wireframes",
          href: "/projects/bayer",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "/Images/Thumbs/thumbs2.png",
      video: "",
      categories: ["UI/UX Design", "Interactive & Web", "Pharma Campaigns"],
      subType: "website",
      year: 2022
    },
    {
      title: "Blueprint MedInfo Site",
      href: "https://www.blueprintmedinfo.com/",
      dates: "2022",
      active: true,
      description:
        "UI/UX Design and Art Direction for Blueprint's medical information search portal and clinical trials catalog.",
      technologies: ["UI/UX Design", "Art Direction", "Figma", "Adobe XD"],
      links: [
        {
          type: "Live Site",
          href: "https://www.blueprintmedinfo.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Wireframes",
          href: "/projects/blueprint",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "/Images/Thumbs/thumbs3.png",
      video: "",
      categories: ["UI/UX Design", "Interactive & Web", "Pharma Campaigns"],
      subType: "website",
      year: 2022
    },
    {
      title: "BMS Pathways Portal",
      href: "https://www.bmsscience.com/pathways/",
      dates: "2022",
      active: true,
      description:
        "Digital production and assets creation for Bristol Myers Squibb scientific pathways including BCMA and CD19 mechanisms.",
      technologies: ["Digital Production", "Illustrator", "Photoshop"],
      links: [
        {
          type: "Live Site",
          href: "https://www.bmsscience.com/pathways/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Wireframes",
          href: "/projects/bms",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "/Images/Thumbs/thumbs4.png",
      video: "",
      categories: ["Digital Production", "Pharma Campaigns"],
      subType: "digital",
      year: 2022
    },
    {
      title: "Vitrakvi (Bayer) HCP Portal",
      href: "https://hcp.vitrakvi-us.com/",
      dates: "2022",
      active: true,
      description:
        "UI/UX design and art direction of responsive desktop and mobile portals for the Vitrakvi oncology program.",
      technologies: ["UI/UX Design", "Art Direction", "Figma", "Sketch"],
      links: [
        {
          type: "Live Site",
          href: "https://hcp.vitrakvi-us.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Wireframes",
          href: "/projects/vitrakvi",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "/Images/Thumbs/thumbs6.png",
      video: "",
      categories: ["UI/UX Design", "Interactive & Web", "Pharma Campaigns"],
      subType: "website",
      year: 2022
    },
    {
      title: "Intercept NASH Portal",
      href: "https://www.nashtippingpoint.com/",
      dates: "2022",
      active: true,
      description:
        "Digital asset production and support for the Intercept NASH disease state awareness campaign portal.",
      technologies: ["Digital Production", "Adobe Photoshop", "Zeplin"],
      links: [
        {
          type: "Live Site",
          href: "https://www.nashtippingpoint.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Wireframes",
          href: "/projects/intercept",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "/Images/Thumbs/thumbs5.png",
      video: "",
      categories: ["Digital Production", "Interactive & Web", "Pharma Campaigns"],
      subType: "website",
      year: 2022
    },
    {
      title: "Mizuo Peck Actor Portfolio",
      href: "http://mizuopeck.com/",
      dates: "2020",
      active: true,
      description:
        "UI/UX design, custom web development, and static cloud hosting setup for actress Mizuo Peck's online portfolio.",
      technologies: ["Web Design", "Development", "GCP Hosting", "HTML/CSS"],
      links: [
        {
          type: "Live Site",
          href: "http://mizuopeck.com/",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "/Images/Thumbs/thumbs7.png",
      video: "",
      categories: ["UI/UX Design", "Interactive & Web"],
      subType: "website",
      year: 2020
    },
    {
      title: "Rockford University Athletics",
      href: "https://rockfordregents.com/index.aspx",
      dates: "2015",
      active: true,
      description:
        "Web design for Rockford Regents athletics site in partnership with Presto Sports.",
      technologies: ["Web Design", "Theme Layout", "Presto Sports"],
      links: [
        {
          type: "Live Site",
          href: "https://rockfordregents.com/index.aspx",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Wireframes",
          href: "/projects/rockford",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "/Images/Thumbs/thumbs8.png",
      video: "",
      categories: ["UI/UX Design", "Interactive & Web"],
      subType: "website",
      year: 2015
    },
    {
      title: "Crandall Chargers Athletics",
      href: "https://crandallchargers.ca/landing/index",
      dates: "2015",
      active: true,
      description:
        "Athletics sports layout and user interface design for Crandall University Chargers portal.",
      technologies: ["Web Design", "Theme Layout", "Presto Sports"],
      links: [
        {
          type: "Live Site",
          href: "https://crandallchargers.ca/landing/index",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Wireframes",
          href: "/projects/crandall",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "/Images/Thumbs/thumbs9.png",
      video: "",
      categories: ["UI/UX Design", "Interactive & Web"],
      subType: "website",
      year: 2015
    },
    {
      title: "Trodelvy Patient Treatment Guide",
      href: "/projects/tro-patient-guide",
      dates: "2025",
      active: true,
      description:
        "Designed a comprehensive patient treatment guide for Trodelvy (Gilead Sciences). Created multi-page digital layouts detailing safety profiles, dosage tables, and support resources for patients and caregivers.",
      technologies: ["Print Production", "Layout Design", "InDesign", "Pharma Campaigns"],
      links: [
        {
          type: "Wireframes",
          href: "/projects/tro-patient-guide",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "/Images/Thumbs/tro_patient_guide_thumb.png",
      video: "",
      categories: ["UI/UX Design", "Digital Production", "Pharma Campaigns"],
      subType: "print",
      year: 2025
    },
    {
      title: "ATA Enterprise Architecture",
      href: "/assets/samples/ATA/ATA_architecture_v_1.6.pdf",
      dates: "2024",
      active: true,
      description:
        "Technical systems architecture blueprint and design layout for enterprise application ecosystems.",
      technologies: ["Systems Architecture", "Visio", "Technical Design"],
      links: [
        {
          type: "Architecture PDF",
          href: "/assets/samples/ATA/ATA_architecture_v_1.6.pdf",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "/Images/Thumbs/ata_thumb.png",
      video: "",
      categories: ["UI/UX Design", "Interactive & Web"],
      subType: "digital",
      year: 2024
    }
  ],
  printProjects: [
    {
      title: "BioMarin Vimizim Campaign",
      dates: "2018",
      role: "Integrated Production Artist",
      team: "Pixacore",
      image: "/Images/Thumbs/vimizim_thumb.png",
      description: "Integrated production campaign for Vimizim (BioMarin). Created full clinical style guides and responsive HTML email templates.",
      technologies: ["Email Production", "Style Guides", "HTML/CSS", "Photoshop"],
      links: [
        {
          type: "Style Guide",
          href: "/assets/samples/StyleGuides/Vimizim_BioMarin_SG.pdf",
          icon: <Icons.globe className="size-3" />
        },
        {
          type: "Brand Email",
          href: "/assets/samples/Emails/Vimizim_BioMarin_Email.pdf",
          icon: <Icons.globe className="size-3" />
        },
        {
          type: "Patient Email (Drive)",
          href: "https://drive.google.com/drive/folders/1P358bpblYOgG6W4ycedqWTDaBV12ik8V",
          icon: <Icons.globe className="size-3" />
        }
      ],
      categories: ["Print & Large Format", "Digital Production", "Pharma Campaigns"],
      subType: "digital",
      year: 2018
    },
    {
      title: "Pfizer HemMobile App",
      dates: "2018",
      role: "Integrated Production Specialist",
      team: "Pixacore",
      image: "/Images/Thumbs/hemmobile_thumb.png",
      description: "Mobile application interface and digital logger production for Pfizer HemMobile, tracking infusion and bleed cycles.",
      technologies: ["Mobile Asset Production", "iOS/Android", "Illustrator"],
      links: [
        {
          type: "iOS Assets (Drive)",
          href: "https://drive.google.com/drive/folders/1P358bpblYOgG6W4ycedqWTDaBV12ik8V",
          icon: <Icons.globe className="size-3" />
        },
        {
          type: "Android Assets (Drive)",
          href: "https://drive.google.com/drive/folders/1P358bpblYOgG6W4ycedqWTDaBV12ik8V",
          icon: <Icons.globe className="size-3" />
        }
      ],
      categories: ["Digital Production", "Pharma Campaigns"],
      subType: "digital",
      year: 2018
    },
    {
      title: "Neurocrine Ingrezza Launch",
      dates: "2018",
      role: "Interactive Production Specialist",
      team: "Pixacore",
      image: "/Images/Thumbs/ingrezza_thumb.png",
      description: "HCP interactive iPad presentations (iVA) and email campaigns built for the brand launch of Ingrezza.",
      technologies: ["iPad Presentation (iVA)", "Veeva Systems", "InDesign"],
      links: [
        {
          type: "iPad Presenter",
          href: "/assets/samples/Ipad/Ingrezza_Branded_HCP_Launch_iVA_2.pdf",
          icon: <Icons.globe className="size-3" />
        },
        {
          type: "Email Assets",
          href: "/assets/samples/Emails/Ingrezza_email.pdf",
          icon: <Icons.globe className="size-3" />
        }
      ],
      categories: ["Interactive & Web", "Pharma Campaigns", "Digital Production"],
      subType: "digital",
      year: 2018
    },
    {
      title: "JBL Subway Kiosk (Motion)",
      dates: "2018",
      role: "Motion Designer / Production Artist",
      team: "Medallion Associates",
      image: "/Images/Thumbs/jbl_thumb.png",
      description: "Subway kiosk motion graphics banner and out-of-home video banner featuring Aaron Judge.",
      technologies: ["Motion Graphics", "After Effects", "OOH Advertising"],
      links: [
        {
          type: "Watch Video",
          href: "/assets/samples/Motion/JBL_Judge_Subway_kiosk_final.mp4",
          icon: <Icons.globe className="size-3" />
        }
      ],
      categories: ["Print & Large Format"],
      subType: "print",
      year: 2018
    },
    {
      title: "Ultragenx Exhibit & OOH",
      dates: "2018",
      role: "Large Format Print Production Artist",
      team: "Pixacore",
      image: "/Images/Thumbs/ultragenx_thumb.png",
      description: "OOH exhibit stand, backlit displays, and podium layouts for Ultragenx convention booth.",
      technologies: ["Large Format Print", "Exhibition Design", "Illustrator"],
      links: [
        {
          type: "Exhibit Stand",
          href: "/assets/samples/OOHConvention_displays/Ultragenx_Exhibit%20Stand%20and%20Podium.pdf",
          icon: <Icons.globe className="size-3" />
        },
        {
          type: "Backlit Wall (Drive)",
          href: "https://drive.google.com/drive/folders/1P358bpblYOgG6W4ycedqWTDaBV12ik8V",
          icon: <Icons.globe className="size-3" />
        },
        {
          type: "Flashcard",
          href: "/assets/samples/Print/Ultragenx_flashcard.pdf",
          icon: <Icons.globe className="size-3" />
        }
      ],
      categories: ["Print & Large Format", "Pharma Campaigns"],
      subType: "print",
      year: 2018
    },
    {
      title: "Votrient ASCO Panels",
      dates: "2017",
      role: "Large Format Print Production Artist",
      team: "Pixacore",
      image: "/Images/Thumbs/votrient_thumb.png",
      description: "Convention exhibition panels for Votrient STS ASCO conference presentation.",
      technologies: ["Large Format Print", "Exhibition Design", "Illustrator"],
      links: [
        {
          type: "ASCO Panels (Drive)",
          href: "https://drive.google.com/drive/folders/1P358bpblYOgG6W4ycedqWTDaBV12ik8V",
          icon: <Icons.globe className="size-3" />
        },
        {
          type: "Patient Brochure",
          href: "/assets/samples/Print/%20Votrient%20Patient%20Brochure%20PDF.pdf",
          icon: <Icons.globe className="size-3" />
        }
      ],
      categories: ["Print & Large Format", "Pharma Campaigns"],
      subType: "print",
      year: 2017
    },
    {
      title: "Novartis Tasigna Campaign",
      dates: "2017",
      role: "Production Artist",
      team: "Regan Campbell Ward McCann",
      image: "/Images/Thumbs/tasigna_thumb.png",
      description: "Print newsletter production for 'Tasigna Tips' internal campaign, and clinical messaging guides.",
      technologies: ["Print Production", "Layout Design", "InDesign"],
      links: [
        {
          type: "Tasigna Tips #3",
          href: "/assets/samples/Print/Tasigna%20Tips%20Issue%203.pdf",
          icon: <Icons.globe className="size-3" />
        },
        {
          type: "Messaging Guide",
          href: "/assets/samples/Print/Novartis_Tasigna_Messaging%20PDF.pdf",
          icon: <Icons.globe className="size-3" />
        }
      ],
      categories: ["Print & Large Format", "Pharma Campaigns"],
      subType: "print",
      year: 2017
    },
    {
      title: "Novartis Afinitor Campaign",
      dates: "2017",
      role: "Production Artist",
      team: "Regan Campbell Ward McCann",
      image: "/Images/Thumbs/afinitor_thumb.png",
      description: "Print production for the Afinitor October Newsletter and B2B clinical flashcards.",
      technologies: ["Print Production", "Layout Design", "InDesign"],
      links: [
        {
          type: "October Newsletter",
          href: "/assets/samples/Print/Afinitor_October_Newsletter.pdf",
          icon: <Icons.globe className="size-3" />
        },
        {
          type: "Flashcard",
          href: "/assets/samples/Print/Afinitor_Flashcard.pdf",
          icon: <Icons.globe className="size-3" />
        }
      ],
      categories: ["Print & Large Format", "Pharma Campaigns"],
      subType: "print",
      year: 2017
    },
    {
      title: "Verizon Wireless Campaign",
      dates: "2007",
      role: "Studio Manager / Print Production Artist",
      team: "GlobalHue",
      image: "/Images/Thumbs/pthumbs10.png",
      technologies: ["Print Production", "Studio Management", "Photoshop"],
      categories: ["Print & Large Format"],
      subType: "print",
      year: 2007
    },
    {
      title: "Restasis Campaign",
      dates: "2005",
      role: "Studio Manager / Print Production Artist",
      team: "Regan, Campbell, Ward and McCann",
      image: "/Images/Thumbs/pthumbs11.png",
      technologies: ["Print Production", "Studio Management", "Photoshop"],
      categories: ["Print & Large Format", "Pharma Campaigns"],
      subType: "print",
      year: 2005
    },
    {
      title: "Genentech",
      dates: "2005",
      role: "Studio Manager / Print Production Artist",
      team: "Regan, Campbell, Ward and McCann",
      image: "/Images/Thumbs/pthumbs13.png",
      technologies: ["Print Production", "Studio Management", "Illustrator"],
      categories: ["Print & Large Format", "Pharma Campaigns"],
      subType: "print",
      year: 2005
    },
    {
      title: "Nickelodeon",
      dates: "1999",
      role: "Print Production Artist",
      team: "The Sloan Group",
      image: "/Images/Thumbs/pthumbs14.png",
      technologies: ["Print Production", "Layout Design", "Illustrator"],
      categories: ["Print & Large Format"],
      subType: "print",
      year: 1999
    },
    {
      title: "Dunkin' Donuts",
      dates: "1995",
      role: "Quality Control / Print Production Artist",
      team: "Medallion Associates",
      image: "/Images/Thumbs/pthumbs16.png",
      technologies: ["Quality Control", "Print Production"],
      categories: ["Print & Large Format"],
      subType: "print",
      year: 1995
    },
    {
      title: "Kinney Shoes Catalog",
      dates: "1995",
      role: "Quality Control / Print Production Artist",
      team: "Medallion Associates",
      image: "/Images/Thumbs/pthumbs17.png",
      technologies: ["Quality Control", "Print Production"],
      categories: ["Print & Large Format"],
      subType: "print",
      year: 1995
    },
    {
      title: "Kinney Shoes Campaign",
      dates: "1995",
      role: "Quality Control / Print Production Artist",
      team: "Medallion Associates",
      image: "/Images/Thumbs/pthumbs18.png",
      technologies: ["Quality Control", "Print Production"],
      categories: ["Print & Large Format"],
      subType: "print",
      year: 1995
    },
    {
      title: "Novartis Kesimpta Campaign",
      dates: "2022",
      role: "Digital Production Specialist",
      team: "Pixacore",
      image: "/Images/Thumbs/kesimpta_thumb.png",
      description: "Digital email marketing campaign layouts for Kesimpta (Novartis), including fully responsive brand and patient communications templates.",
      technologies: ["Email Production", "HTML/CSS", "Photoshop", "Pharma Campaigns"],
      links: [
        {
          type: "Brand Email",
          href: "/assets/samples/Kesimpta/Frame.pdf",
          icon: <Icons.globe className="size-3" />
        },
        {
          type: "Patient Email",
          href: "/assets/samples/Kesimpta/Frame-1.pdf",
          icon: <Icons.globe className="size-3" />
        }
      ],
      categories: ["Digital Production", "Pharma Campaigns", "Interactive & Web"],
      subType: "digital",
      year: 2022
    },
    {
      title: "TBWA \\ Chiat \\ Day Campaigns",
      dates: "2020",
      role: "Studio Manager",
      team: "TBWA \\ Chiat \\ Day",
      image: "/Images/Thumbs/tbwa_thumb.png",
      description: "Interactive UI wireframes, sitemaps, and user journey maps for telecom and branding client websites.",
      technologies: ["UI/UX Design", "Wireframing", "Information Architecture"],
      links: [
        {
          type: "Wireframes PDF",
          href: "/assets/samples/Wireframes_sample.pdf",
          icon: <Icons.globe className="size-3" />
        }
      ],
      categories: ["UI/UX Design", "Interactive & Web"],
      subType: "digital",
      year: 2020
    }
  ],
  aiArt: [
    { src: "/Images/AI/tape_explosion_2.png", alt: "Tape Explosion 2" },
    { src: "/Images/AI/hambuger.png", alt: "Hamburger illustration" },
    { src: "/Images/AI/cook.png", alt: "Chef cooking illustration" },
    { src: "/Images/AI/Service2.png", alt: "Digital service concept illustration" },
    { src: "/Images/AI/ai1.png", alt: "AI generated abstract art 1" },
    { src: "/Images/AI/ai2.png", alt: "AI generated abstract art 2" },
    { src: "/Images/AI/ai3.png", alt: "AI generated abstract art 3" },
    { src: "/Images/AI/ai4.png", alt: "AI generated abstract art 4" },
    { src: "/Images/AI/ai5.png", alt: "AI generated abstract art 5" },
    { src: "/Images/AI/ai6.png", alt: "AI generated abstract art 6" },
    { src: "/Images/AI/ai7.png", alt: "AI generated abstract art 7" },
    { src: "/Images/AI/ai8.png", alt: "AI generated abstract art 8" },
    { src: "/Images/AI/ai9.png", alt: "AI generated abstract art 9" },
    { src: "/Images/AI/ai10.png", alt: "AI generated abstract art 10" },
    { src: "/Images/AI/ai11.png", alt: "AI generated abstract art 11" },
    { src: "/Images/AI/ai12.png", alt: "AI generated abstract art 12" }
  ]
} as const;
// Deployment trigger: 2026-07-06

