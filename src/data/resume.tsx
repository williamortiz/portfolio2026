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
  avatarUrl: "/Images/william_portrait.jpg",
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
      company: "One Shot Records Inc.",
      href: "#",
      badges: [],
      location: "New York, NY",
      title: "UI/UX Designer | Front-End Developer",
      logoUrl: "/Images/oneshot_logo.jpg",
      start: "Jan 2012",
      end: "Present",
      description:
        "As a UI designer and Google-certified architect with experience in user-centered design practices, information architecture, and service design, I bring a unique skill set to the table. I have expertise in creating prototypes, wireframes, user journey maps, and designing user interfaces, as well as advising on UX research plans and supporting engineering teams during development.",
    },
    {
      company: "Pixacore",
      href: "#",
      badges: [],
      location: "New York, NY",
      title: "Senior Art Director Digital Production",
      logoUrl: "/Images/logos/pixacore.svg",
      start: "Jan 2022",
      end: "Dec 2022",
      description:
        "As a Senior Art Director for Digital Production, my team and I specialize in designing and producing top-notch digital web products, including fully responsive websites, emails, and various digital assets. Our expertise in utilizing online tools such as Figma, Sketch, and Adobe XD allows us to create visually stunning user interfaces, and our Zeplin release process ensures a smooth hand-off to developers, with thorough post-review and quality control to deliver optimal results.",
    },
    {
      company: "Merck",
      href: "#",
      badges: [],
      location: "New York, NY",
      title: "Digital Designer",
      logoUrl: "/Images/logos/merck.png",
      start: "Apr 2021",
      end: "Feb 2022",
      description:
        "As a Digital Designer and Senior Production Artist, my main focus is creating high-quality digital assets for various graphics projects, based on client-driven creative briefs. These projects encompass a wide range of mediums, including websites, mobile apps, advertising, animation, emails, and social media, as well as Promomats/Veeva layout and submissions. I pride myself on my ability to take a concept and turn it into a visually stunning reality, using my expertise in design and production to bring ideas to life.",
    },
    {
      company: "Presto Sports",
      href: "#",
      badges: [],
      location: "Remote",
      title: "Web Designer",
      logoUrl: "/Images/logos/prestosports.svg",
      start: "2015",
      end: "2015",
      description:
        "Designed responsive athletics websites and portals for academic clients, including Rockford University and Crandall University.",
    },
    {
      company: "Global Hue",
      href: "#",
      badges: [],
      location: "New York, NY",
      title: "Studio Manager / Print Production Artist",
      logoUrl: "/Images/logos/globalhue.svg",
      start: "2008",
      end: "2008",
      description:
        "Managed the production studio and created premium high-resolution print mechanicals and assets for clients like Verizon and AT&T.",
    },
    {
      company: "Regan, Campbell, Ward and McCann",
      href: "#",
      badges: [],
      location: "New York, NY",
      title: "Studio Manager / Print Production Artist",
      logoUrl: "/Images/logos/rcwm.svg",
      start: "2005",
      end: "2005",
      description:
        "Led print production efforts and quality assurance for prominent pharmaceutical accounts including Allergan, Novartis, and Genentech.",
    },
    {
      company: "The Sloan Group",
      href: "#",
      badges: [],
      location: "New York, NY",
      title: "Print Production Artist",
      logoUrl: "/Images/logos/sloan.svg",
      start: "1999",
      end: "1999",
      description:
        "Produced complex print materials and advertisements for major entertainment and media clients including Nickelodeon.",
    },
    {
      company: "Medallion Associates",
      href: "#",
      badges: [],
      location: "New York, NY",
      title: "Quality Control / Print Production Artist",
      logoUrl: "/Images/logos/medallion.svg",
      start: "1995",
      end: "1995",
      description:
        "Oversaw print production quality control processes, ensuring alignment with brand standards for clients like Dunkin' Donuts and Kinney Shoes.",
    }
  ],
  education: [
    {
      school: "CUNY New York City College of Technology",
      href: "#",
      degree: "Bachelor's Degree of Computer Science",
      logoUrl: "/Images/logos/cuny.svg",
      start: "1986",
      end: "1990",
    },
    {
      school: "Santa Monica College",
      href: "#",
      degree: "Vocational Degree, Print Production",
      logoUrl: "/Images/logos/smc.svg",
      start: "1990",
      end: "1991",
    }
  ],
  certifications: [
    { name: "Google UX Design Professional Certificate (2023)" },
    { name: "Architecting with Google Compute Engine (2020)" },
    { name: "Security in Google Cloud (2019)" },
    { name: "Building Web Applications in PHP (2019)" }
  ],
  projects: [
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
      video: ""
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
      video: ""
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
      video: ""
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
      video: ""
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
      video: ""
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
      video: ""
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
        }
      ],
      image: "/Images/Thumbs/thumbs5.png",
      video: ""
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
      video: ""
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
      video: ""
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
      video: ""
    }
  ],
  printProjects: [
    {
      title: "BioMarin Vimizim Campaign",
      dates: "2018",
      role: "Integrated Production Artist",
      team: "Pixacore",
      image: "/Images/Thumbs/pthumbs10.png",
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
      ]
    },
    {
      title: "Pfizer HemMobile App",
      dates: "2018",
      role: "Integrated Production Specialist",
      team: "Pixacore",
      image: "/Images/Thumbs/pthumbs11.png",
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
      ]
    },
    {
      title: "Neurocrine Ingrezza Launch",
      dates: "2018",
      role: "Interactive Production Specialist",
      team: "Pixacore",
      image: "/Images/Thumbs/pthumbs12.png",
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
      ]
    },
    {
      title: "JBL Subway Kiosk (Motion)",
      dates: "2018",
      role: "Motion Designer / Production Artist",
      team: "Medallion Associates",
      image: "/Images/Thumbs/pthumbs13.png",
      description: "Subway kiosk motion graphics banner and out-of-home video banner featuring Aaron Judge.",
      technologies: ["Motion Graphics", "After Effects", "OOH Advertising"],
      links: [
        {
          type: "Watch Video",
          href: "/assets/samples/Motion/JBL_Judge_Subway_kiosk_final.mp4",
          icon: <Icons.globe className="size-3" />
        }
      ]
    },
    {
      title: "Ultragenx Exhibit & OOH",
      dates: "2018",
      role: "Large Format Print Production Artist",
      team: "Pixacore",
      image: "/Images/Thumbs/pthumbs14.png",
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
      ]
    },
    {
      title: "Votrient ASCO Panels",
      dates: "2017",
      role: "Large Format Print Production Artist",
      team: "Pixacore",
      image: "/Images/Thumbs/pthumbs15.png",
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
      ]
    },
    {
      title: "Novartis Tasigna Campaign",
      dates: "2017",
      role: "Production Artist",
      team: "Regan Campbell Ward McCann",
      image: "/Images/Thumbs/pthumbs12.png",
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
      ]
    },
    {
      title: "Novartis Afinitor Campaign",
      dates: "2017",
      role: "Production Artist",
      team: "Regan Campbell Ward McCann",
      image: "/Images/Thumbs/pthumbs13.png",
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
      ]
    },
    {
      title: "Verizon Wireless Campaign",
      dates: "2007",
      role: "Studio Manager / Print Production Artist",
      team: "GlobalHue",
      image: "/Images/Thumbs/pthumbs10.png",
      technologies: ["Print Production", "Studio Management", "Photoshop"]
    },
    {
      title: "Restasis Campaign",
      dates: "2005",
      role: "Studio Manager / Print Production Artist",
      team: "Regan, Campbell, Ward and McCann",
      image: "/Images/Thumbs/pthumbs11.png",
      technologies: ["Print Production", "Studio Management", "Photoshop"]
    },
    {
      title: "Genentech",
      dates: "2005",
      role: "Studio Manager / Print Production Artist",
      team: "Regan, Campbell, Ward and McCann",
      image: "/Images/Thumbs/pthumbs13.png",
      technologies: ["Print Production", "Studio Management", "Illustrator"]
    },
    {
      title: "Nickelodeon",
      dates: "1999",
      role: "Print Production Artist",
      team: "The Sloan Group",
      image: "/Images/Thumbs/pthumbs14.png",
      technologies: ["Print Production", "Layout Design", "Illustrator"]
    },
    {
      title: "Dunkin' Donuts",
      dates: "1995",
      role: "Quality Control / Print Production Artist",
      team: "Medallion Associates",
      image: "/Images/Thumbs/pthumbs16.png",
      technologies: ["Quality Control", "Print Production"]
    },
    {
      title: "Kinney Shoes Catalog",
      dates: "1995",
      role: "Quality Control / Print Production Artist",
      team: "Medallion Associates",
      image: "/Images/Thumbs/pthumbs17.png",
      technologies: ["Quality Control", "Print Production"]
    },
    {
      title: "Kinney Shoes Campaign",
      dates: "1995",
      role: "Quality Control / Print Production Artist",
      team: "Medallion Associates",
      image: "/Images/Thumbs/pthumbs18.png",
      technologies: ["Quality Control", "Print Production"]
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
