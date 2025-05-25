const services = [
  {
    title: "ERP Solutions",
    description:
      "Streamline your business processes with our tailored ERP systems. We provide scalable and modular ERP solutions for businesses of all sizes.",
    features: [
      {
        title: "Human Resource Systems",
        description: "Manage employee records, recruitment, and performance effectively."
      },
      {
        title: "Procurement Management",
        description: "Optimize purchasing processes to reduce costs and improve supplier relations."
      },
      {
        title: "Finance & Budgeting Systems",
        description: "Track expenses and revenues with detailed budgeting tools."
      },
      {
        title: "Fleet Management",
        description: "Monitor vehicle usage and maintenance to improve logistics."
      },
      {
        title: "Payroll Management",
        description: "Automate salary calculations, taxes, and benefits processing."
      }
    ],
    slug: "erp-solutions",
    image: "/images/services/erp-solutions.jpg"
  },
  {
    title: "QuickBooks Integration & Setup",
    description:
      "We help businesses get the most out of QuickBooks. From initial setup to full custom integrations with your portals and platforms.",
    features: [
      {
        title: "QuickBooks Online/Desktop Setup",
        description: "Get your QuickBooks environment ready for smooth accounting operations."
      },
      {
        title: "Custom APIs for Portal Sync",
        description: "Seamlessly sync data between your business portals and QuickBooks."
      },
      {
        title: "Automated Financial Reporting",
        description: "Generate reports automatically for faster decision-making."
      }
    ],
    slug: "quickbooks-integration",
    image: "/images/services/quickbooks-integration.jpg"
  },
  {
    title: "Web Design & Development",
    description:
      "Build modern, responsive, and high-performance websites and portals.",
    features: [
      {
        title: "CMS Websites (WordPress, Joomla)",
        description: "Easy-to-manage websites with popular content management systems."
      },
      {
        title: "Custom Web Design (No CMS)",
        description: "Tailored websites built from scratch for unique business needs."
      },
      {
        title: "Web Applications & Admin Panels",
        description: "Interactive web apps to handle your business workflows."
      },
      {
        title: "Secure User Portals & Dashboards",
        description: "Protected interfaces for your clients and staff."
      }
    ],
    slug: "web-development",
    image: "/images/services/web-development.jpg"
  },
  {
    title: "Payment Systems Integration & Automation",
    description:
      "Seamless digital payment experiences for your customers.",
    features: [
      {
        title: "M-Pesa",
        description: "Integrate Kenya’s leading mobile money service for easy payments."
      },
      {
        title: "Visa & MasterCard Gateways",
        description: "Enable secure credit and debit card transactions."
      },
      {
        title: "Bank APIs & Custom Banking Workflows",
        description: "Connect directly with banks for streamlined payment processing."
      },
      {
        title: "Recurring Payments & Mobile Wallets",
        description: "Automate subscriptions and accept various digital wallets."
      }
    ],
    slug: "payment-integration",
    image: "/images/services/payment-integration.jpg"
  },
  {
    title: "Custom API Development",
    description:
      "Need to modernize a legacy or manual system? We build APIs that connect your operations and data in real time.",
    features: [
      {
        title: "Non-automated systems",
        description: "Convert manual workflows into automated processes."
      },
      {
        title: "Government or private legacy systems",
        description: "Bridge modern software with older legacy platforms."
      },
      {
        title: "Offline-to-online bridges",
        description: "Synchronize data and workflows between offline and online systems."
      }
    ],
    slug: "api-development",
    image: "/images/services/api-development.jpg"
  },
  {
    title: "Networking & Infrastructure",
    description:
      "Solid network infrastructure is key to your operations.",
    features: [
      {
        title: "LAN/WAN Design & Setup",
        description: "Plan and install local and wide area networks tailored to your needs."
      },
      {
        title: "Office & Campus Networking",
        description: "Reliable connectivity solutions for your workspaces."
      },
      {
        title: "Network Security Implementation",
        description: "Protect your network from threats with advanced security measures."
      }
    ],
    slug: "networking-infrastructure",
    image: "/images/services/networking-infrastructure.jpg"
  },
  {
    title: "Systems Installation",
    description:
      "Complete server and system installations for your enterprise.",
    features: [
      {
        title: "Server Installation & Configuration",
        description: "Set up and optimize your physical or virtual servers."
      },
      {
        title: "Operating System Setup (Windows/Linux)",
        description: "Install and configure OS environments to your specifications."
      },
      {
        title: "Enterprise Software Installation (ERP, CRM, etc.)",
        description: "Deploy business-critical software to keep your operations running."
      }
    ],
    slug: "systems-installation",
    image: "/images/services/systems-installation.jpg"
  }
];

export async function getServices() {
  return services;
}


export async function getServiceBySlug(slug: string) {
  const allServices = await getServices();
  return allServices.find(service => service.slug === slug);
}