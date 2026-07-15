export interface ProjectDetail {
  id: string;
  title: string;
  client: string;
  role: string;
  team: string;
  year: string;
  description: string;
  liveUrl?: string;
  desktopDesigns?: string[];
  mobileDesigns?: string[];
  desktopImages?: string[];
  mobileImages?: string[];
  images?: string[];
}

export const PROJECT_DETAILS: Record<string, ProjectDetail> = {
  oneshot: {
    id: "oneshot",
    title: "One Shot Records Marketplace",
    client: "One Shot Records Inc.",
    role: "Product Designer/Developer",
    team: "One Shot Records Inc.",
    year: "2012",
    description: "Designed and developed a premium online marketplace for rare vinyl records, hip-hop memorabilia, posters, and collectibles featuring robust wantlists, catalogs, and offer workflows.",
    liveUrl: "https://www.oneshotrecords.com/",
    images: [
      "/Images/oneshot.png"
    ]
  },
  iovance: {
    id: "iovance",
    title: "Iovance Pharmaceuticals Website Refresh",
    client: "Iovance Pharmaceutical",
    role: "UI/UX Design and Art Direction",
    team: "Pixacore",
    year: "2022",
    description: "Full website refresh layout, including comprehensive desktop and mobile wireframes and site maps.",
    liveUrl: "https://www.iovance.com/",
    desktopDesigns: [
      "/Images/Iovance/desktop_designs/home_design.png"
    ],
    mobileDesigns: [
      "/Images/Iovance/mobile_designs/home_design.png"
    ],
    desktopImages: [
      "/Images/Iovance/desktop_wires/0.0 home.png",
      "/Images/Iovance/desktop_wires/1.1 about iovance bio-1.png",
      "/Images/Iovance/desktop_wires/2.1 about TIL.png",
      "/Images/Iovance/desktop_wires/3.1 iCTC.png",
      "/Images/Iovance/desktop_wires/4.1 clinical pipeline.png",
      "/Images/Iovance/desktop_wires/5.1 current opportunities.png",
      "/Images/Iovance/desktop_wires/F6.0 site map.png"
    ],
    mobileImages: [
      "/Images/Iovance/Mobile_wires/0.0 home.png",
      "/Images/Iovance/Mobile_wires/1.1 about iovance.png",
      "/Images/Iovance/Mobile_wires/2.1 ictc.png",
      "/Images/Iovance/Mobile_wires/3.1 about TIL.png",
      "/Images/Iovance/Mobile_wires/4.1 clinical pipeline.png",
      "/Images/Iovance/Mobile_wires/5.1 current opportunities.png",
      "/Images/Iovance/Mobile_wires/U6.0 site map.png"
    ]
  },
  bayer: {
    id: "bayer",
    title: "Bayer Pharmaceuticals Web Portal",
    client: "Bayer Pharmaceutical",
    role: "UI/UX Design and Art Direction",
    team: "Pixacore",
    year: "2022",
    description: "Detailed wireframes and sitemaps designed for Bayer's primary healthcare professional portal and patient information workflows.",
    liveUrl: "https://www.bayer.com/en/pharma/pharmaceuticals/",
    desktopDesigns: [
      "/Images/Bayer/desktop_designs/0.0 Home.png",
      "/Images/Bayer/desktop_designs/0.1 Home_Carousel.png",
      "/Images/Bayer/desktop_designs/1.1 Prostate Cancer.png",
      "/Images/Bayer/desktop_designs/1.1.2 Prostate Cancer.png",
      "/Images/Bayer/desktop_designs/1.2 Colorectal Cancer.png",
      "/Images/Bayer/desktop_designs/1.2.2 Colorectal Cancer.png",
      "/Images/Bayer/desktop_designs/1.3 Precision Oncology.png",
      "/Images/Bayer/desktop_designs/1.3.2 Precision Oncology.png",
      "/Images/Bayer/desktop_designs/2.0 Patient Safety.png",
      "/Images/Bayer/desktop_designs/3.0 News & Events.png",
      "/Images/Bayer/desktop_designs/4.0 Contact Us.png",
      "/Images/Bayer/desktop_designs/Cookies Banner.png",
      "/Images/Bayer/desktop_designs/Leaving the Site Modal.png",
      "/Images/Bayer/desktop_designs/F4.0 Sitemap.png",
      "/Images/Bayer/desktop_designs/F4.0 Sitemap_Expanded.png"
    ],
    mobileDesigns: [
      "/Images/Bayer/mobile_designs/Mobile 0.0_Home.png",
      "/Images/Bayer/mobile_designs/Mobile 0.0_Home_Carousel.png",
      "/Images/Bayer/mobile_designs/Mobile 0.0_Home_Menu.png",
      "/Images/Bayer/mobile_designs/Mobile 1.1 Prostate Cancer Mobile.png",
      "/Images/Bayer/mobile_designs/Mobile 1.3 Precision Oncology.png"
    ],
    images: [
      "/Images/Bayer/0.0 Home.png",
      "/Images/Bayer/1.1 Prostate Cancer.png",
      "/Images/Bayer/2.0 Patient Safety.png",
      "/Images/Bayer/3.0 News & Events.png",
      "/Images/Bayer/4.0 Contact Us.png",
      "/Images/Bayer/F4.0 Sitemap.png"
    ]
  },
  blueprint: {
    id: "blueprint",
    title: "Blueprint Medicines Information Center",
    client: "Blueprint Pharmaceutical",
    role: "UI/UX Design and Art Direction",
    team: "Pixacore",
    year: "2022",
    description: "High-fidelity UX design templates for medical information portals, congress presentations index, and clinical trials tracking workflows.",
    liveUrl: "https://www.blueprintmedinfo.com/",
    desktopDesigns: [
      "/Images/Blueprint/desktop_designs/Desktop - Home 1.1.0.png",
      "/Images/Blueprint/desktop_designs/Desktop - Home 1.1.2.png",
      "/Images/Blueprint/desktop_designs/Desktop - Congress Presentations 1.2.1.png",
      "/Images/Blueprint/desktop_designs/Desktop - 1.2 Congress Publications.jpg",
      "/Images/Blueprint/desktop_designs/Desktop - Clinical Trials.png",
      "/Images/Blueprint/desktop_designs/Desktop - Clinical Trials - ALL LOGOS.png",
      "/Images/Blueprint/desktop_designs/Desktop - CT and Access dropdown.png",
      "/Images/Blueprint/desktop_designs/Desktop - Submit an inquiry 1.5.1.jpg"
    ],
    mobileDesigns: [
      "/Images/Blueprint/mobile_designs/Mobile - Home 1.1.1.png",
      "/Images/Blueprint/mobile_designs/Mobile - Home 1.1.1_MENU.jpg",
      "/Images/Blueprint/mobile_designs/Mobile - Congress Presentations 1.2.1.jpg",
      "/Images/Blueprint/mobile_designs/Mobile - Congress Presentations 1.2.1_Filter Drawer.jpg",
      "/Images/Blueprint/mobile_designs/Mobile - Clinical Trials.jpg"
    ],
    images: [
      "/Images/Blueprint/0.0. Search Medical Information (Home).png",
      "/Images/Blueprint/1.1 Congress Presentations.png",
      "/Images/Blueprint/2.1 Clinical Trials.png"
    ]
  },
  bms: {
    id: "bms",
    title: "Bristol Myers Squibb Pathways",
    client: "Bristol Myers Squibb Pharmaceutical",
    role: "Digital Production Artist",
    team: "Pixacore",
    year: "2022",
    description: "Digital assets production, layout design, and illustration of biological pathways including BCMA, CD19, SIRPα, and GPRC5D.",
    liveUrl: "https://www.bmsscience.com/pathways/",
    images: [
      "/Images/Bms/Bms_documents.png",
      "/Images/Bms/BCMA.png",
      "/Images/Bms/CD19.png",
      "/Images/Bms/SIRPα.png",
      "/Images/Bms/GPRC5D.png",
      "/Images/Bms/Ikaros and Aiolos.png"
    ]
  },
  vitrakvi: {
    id: "vitrakvi",
    title: "Vitrakvi (Bayer) HCP Portal",
    client: "Bayer Pharmaceutical",
    role: "UI/UX Design and Art Direction",
    team: "Pixacore",
    year: "2022",
    description: "User experience maps, layout designs, and responsive wireframes for the Vitrakvi HCP web application on desktop and mobile screens.",
    liveUrl: "https://hcp.vitrakvi-us.com/",
    desktopImages: [
      "/Images/vitrakvi/desktop/0.0 Home - full.png",
      "/Images/vitrakvi/desktop/2.3 Pediatric Data.png",
      "/Images/vitrakvi/desktop/2.4.1 Lung.png",
      "/Images/vitrakvi/desktop/2.5 Patient Cases.png",
      "/Images/vitrakvi/desktop/4.0 NCCN (pop-ups).png",
      "/Images/vitrakvi/desktop/5.0 Testing.png",
      "/Images/vitrakvi/desktop/7.1 Videos.png"
    ],
    mobileImages: [
      "/Images/vitrakvi/mobile/0.0 Home Mobile - full.png",
      "/Images/vitrakvi/mobile/2.3 Patient cases Mobile-1.png",
      "/Images/vitrakvi/mobile/2.3 Pediatric Data Mobile.png",
      "/Images/vitrakvi/mobile/4.0 NCCN Mobile (pop-ups).png",
      "/Images/vitrakvi/mobile/mobile menu collapsed.png"
    ]
  },
  rockford: {
    id: "rockford",
    title: "Rockford Regents Athletics Site",
    client: "Rockford University",
    role: "Web Designer",
    team: "Presto Sports",
    year: "2015",
    description: "Athletics program web portal layout design for Rockford University's sports news and events.",
    liveUrl: "https://rockfordregents.com/index.aspx",
    images: [
      "/Images/Rockford/Rockford_index.jpg"
    ]
  },
  crandall: {
    id: "crandall",
    title: "Crandall Chargers Athletics Site",
    client: "Crandall University",
    role: "Web Designer",
    team: "Presto Sports",
    year: "2015",
    description: "Custom sports branding, theme design, and athletic portal landing page for Crandall University Chargers.",
    liveUrl: "https://crandallchargers.ca/landing/index",
    images: [
      "/Images/Crandall/Crandall Home.png"
    ]
  },
  "tro-patient-guide": {
    id: "tro-patient-guide",
    title: "Trodelvy Patient Treatment Guide",
    client: "Gilead Sciences",
    role: "Print & Digital Production Artist",
    team: "Inizio Evoke",
    year: "2025",
    description: "Designed a comprehensive patient treatment layout guide for Trodelvy (Gilead Sciences). Created multi-page digital layouts detailing safety profiles, dosage tables, and support resources for patients and caregivers.",
    desktopDesigns: [
      "/Images/TRO_Patient_Treatment_Guide/desktop_designs/d1 - Batch 3 dash [TNBC] _ default.png",
      "/Images/TRO_Patient_Treatment_Guide/desktop_designs/d1.1 - Batch 3 dash [TNBC] _ expanded.png",
      "/Images/TRO_Patient_Treatment_Guide/desktop_designs/d2 - Batch 3 dash [HR] _ default.png",
      "/Images/TRO_Patient_Treatment_Guide/desktop_designs/d2.1 - Batch 3 dash [HR] _ expanded.png",
      "/Images/TRO_Patient_Treatment_Guide/desktop_designs/d3 About the Clinical Trial [TNBC] _ default.png",
      "/Images/TRO_Patient_Treatment_Guide/desktop_designs/d3.1 About the Clinical Trial [TNBC] _ expanded.png",
      "/Images/TRO_Patient_Treatment_Guide/desktop_designs/d4 Results with TRODELVY [TNBC].png",
      "/Images/TRO_Patient_Treatment_Guide/desktop_designs/d5 Safety [TNBC] _ default.png",
      "/Images/TRO_Patient_Treatment_Guide/desktop_designs/d5.1 Safety [TNBC] _ expanded.png",
      "/Images/TRO_Patient_Treatment_Guide/desktop_designs/d6 About the Clinical Trial [HR] _ default.png",
      "/Images/TRO_Patient_Treatment_Guide/desktop_designs/d6.1 About the Clinical Trial [HR] _ expand.png",
      "/Images/TRO_Patient_Treatment_Guide/desktop_designs/d6.2 About the Clinical Trial [HR] _ expand w definitions.png",
      "/Images/TRO_Patient_Treatment_Guide/desktop_designs/d7 Results with TRODELVY [HR].jpg",
      "/Images/TRO_Patient_Treatment_Guide/desktop_designs/d8 Safety [HR] _ default.jpg",
      "/Images/TRO_Patient_Treatment_Guide/desktop_designs/d8.1 Safety [HR] _ expanded.jpg",
      "/Images/TRO_Patient_Treatment_Guide/desktop_designs/d9 Quality of Life Results with TRODELVY [HR] _ default.png",
      "/Images/TRO_Patient_Treatment_Guide/desktop_designs/d9.1 Quality of Life Results with TRODELVY [HR] _ expanded.png",
      "/Images/TRO_Patient_Treatment_Guide/desktop_designs/d10 Dosing Review _ default.jpg",
      "/Images/TRO_Patient_Treatment_Guide/desktop_designs/d10.1 Dosing Review _ expanded.jpg",
      "/Images/TRO_Patient_Treatment_Guide/desktop_designs/d11 Supportive Care Medicines.jpg",
      "/Images/TRO_Patient_Treatment_Guide/desktop_designs/d12 Revisiting Infusion Day Checklist _ default.jpg",
      "/Images/TRO_Patient_Treatment_Guide/desktop_designs/d12.1 Revisiting Infusion Day Checklist _ expanded.jpg",
      "/Images/TRO_Patient_Treatment_Guide/desktop_designs/d13 Support from Care Partners Video _ default.jpg",
      "/Images/TRO_Patient_Treatment_Guide/desktop_designs/d13.1 Support from Care Partners Video _ expanded.jpg"
    ],
    mobileDesigns: [
      "/Images/TRO_Patient_Treatment_Guide/mobile_designs/m1 - Batch 3 dash [TNBC] _ default.png",
      "/Images/TRO_Patient_Treatment_Guide/mobile_designs/m1.1 - Batch 3 dash [TNBC] _ expanded.png",
      "/Images/TRO_Patient_Treatment_Guide/mobile_designs/m2 - Batch 3 dash [HR] _ default.png",
      "/Images/TRO_Patient_Treatment_Guide/mobile_designs/m2.1 - Batch 3 dash [HR] _ expanded.png",
      "/Images/TRO_Patient_Treatment_Guide/mobile_designs/m3 About the Clinical Trial [TNBC] _ default.png",
      "/Images/TRO_Patient_Treatment_Guide/mobile_designs/m3 About the Clinical Trial [TNBC] _ expanded.png",
      "/Images/TRO_Patient_Treatment_Guide/mobile_designs/m4 Results with TRODELVY [TNBC].png",
      "/Images/TRO_Patient_Treatment_Guide/mobile_designs/m5 Safety [TNBC] _ default.png",
      "/Images/TRO_Patient_Treatment_Guide/mobile_designs/m5.1 Safety [TNBC] _ expanded.png",
      "/Images/TRO_Patient_Treatment_Guide/mobile_designs/m6 About the Clinical Trial [HR] _ default.png",
      "/Images/TRO_Patient_Treatment_Guide/mobile_designs/m6.1 About the Clinical Trial [HR] _ expand.jpg",
      "/Images/TRO_Patient_Treatment_Guide/mobile_designs/m6.2 About the Clinical Trial [HR] _ expand w definitions.jpg",
      "/Images/TRO_Patient_Treatment_Guide/mobile_designs/m7 Results with TRODELVY [HR].jpg",
      "/Images/TRO_Patient_Treatment_Guide/mobile_designs/m8 Safety [HR] _ default.jpg",
      "/Images/TRO_Patient_Treatment_Guide/mobile_designs/m8.1 Safety [HR] _ expanded.jpg",
      "/Images/TRO_Patient_Treatment_Guide/mobile_designs/m9 Quality of Life Results with TRODELVY [HR] _ default.jpg",
      "/Images/TRO_Patient_Treatment_Guide/mobile_designs/m9.1 Quality of Life Results with TRODELVY [HR] _ expanded.jpg",
      "/Images/TRO_Patient_Treatment_Guide/mobile_designs/m10 Dosing Review _ default.jpg",
      "/Images/TRO_Patient_Treatment_Guide/mobile_designs/m10.1 Dosing Review _ expanded.jpg",
      "/Images/TRO_Patient_Treatment_Guide/mobile_designs/m11 Supportive Care Medicines.jpg",
      "/Images/TRO_Patient_Treatment_Guide/mobile_designs/m12 Revisiting Infusion Day Checklist _ default.jpg",
      "/Images/TRO_Patient_Treatment_Guide/mobile_designs/m12.1 Revisiting Infusion Day Checklist _ expanded.jpg",
      "/Images/TRO_Patient_Treatment_Guide/mobile_designs/m13 Support from Care Partners Video _ default.jpg",
      "/Images/TRO_Patient_Treatment_Guide/mobile_designs/m13.1 Support from Care Partners Video _ expanded.jpg"
    ]
  },
  intercept: {
    id: "intercept",
    title: "Intercept NASH Portal",
    client: "Intercept Pharmaceuticals",
    role: "Digital Asset Production",
    team: "Pixacore",
    year: "2022",
    description: "Digital asset production and support for the Intercept NASH disease state awareness campaign portal, providing critical information layouts on advanced liver fibrosis.",
    liveUrl: "https://www.nashtippingpoint.com/",
    images: [
      "/Images/intercept/home.png"
    ]
  }
};
