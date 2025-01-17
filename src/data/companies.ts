export interface Company {
  name: string;
  instagram: string;
  website: string;
  facebook: string;
  locations: {
    name: string;
    address: string;
    googleReview: string;
  }[];
  theme: "kitchen" | "max";
}

export interface Employee {
  name: string;
  phone: string;
  email: string;
  company: "KK" | "MG";
  role: string;
  avatar: string;
}

export const companies: Record<string, Company> = {
  KK: {
    name: "Kitchen Konnections",
    instagram: "https://www.instagram.com/kitchenkonnectionofficial/",
    website: "kitchenkonnections.net",
    facebook: "https://www.facebook.com/profile.php?id=61560418180585",
    locations: [
      {
        name: "Showroom",
        address: "11811 U.S. Hwy 1 N STE 104, North Palm, FL",
        googleReview: "https://g.page/r/CdlBiSU4q9wDEBM/review"
      },
      {
        name: "Warehouse",
        address: "475 N Cleary Rd unit 4, West Palm Beach, FL",
        googleReview: "https://g.page/r/CVQnFuKlKsKIEBM/review"
      }
    ],
    theme: "kitchen"
  },
  MG: {
    name: "Max Granite",
    instagram: "https://www.instagram.com/maxgraniteofficial/",
    website: "maxgranite.com",
    facebook: "https://www.facebook.com/profile.php?id=100094062485450",
    locations: [
      {
        name: "Main Location",
        address: "6614 Lantana Rd, Lake Worth, FL",
        googleReview: "https://g.page/r/CUQgaiJBDLXVEAI/review"
      }
    ],
    theme: "max"
  }
};

export const employees: Employee[] = [
  {
    name: "Max Silva",
    phone: "+1 (561) 255-5290",
    email: "max@maxbusinessgroup.net",
    company: "MG",
    role: "Owner",
    avatar: "/lovable-uploads/da24b509-ac73-44ee-96e3-146950306728.png"
  },
  {
    name: "Francesco Paciletti",
    phone: "+1 (561) 715-3095",
    email: "francesco@kitchenkonnections.net",
    company: "KK",
    role: "Owner",
    avatar: "/lovable-uploads/838466c9-6b6c-4d80-b267-080489e62217.png"
  }
];