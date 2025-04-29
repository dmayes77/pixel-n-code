// constants/content.js

//Business Info
export const businessInfo = {
  name: "Code & Pixel Web Design",
  tagline: "Vision Meets Function",
  phone: "(423) 497-0881",
  email: "info@pixelncode.io",
  address: {
    street: "123 Innovation Lane",
    city: "Chattanooga",
    state: "TN",
    zip: "37402",
  },
  logo: {
    publicId: {
      shortFormat: "pixel-n-code/logo-images/cnp-short-format-logo",
      longFormat: "pixel-n-code/logo-images/cnp-long-format-logo",
      logoOnly: "pixel-n-code/logo-images/cnp-logo-only",
    },
    alt: "Code an Pixel Logo",
  },
  website: "https://pixelncode.io",
  social: {
    facebook: "https://facebook.com/pixelncode",
    instagram: "https://instagram.com/pixelncode",
    linkedin: "https://linkedin.com/company/pixelncode",
  },
};

const { ...business } = businessInfo;

// Navigation items for Pixel & Code SPA
export const navItems = [
  { label: "Home", key: "home", href: "/" },
  { label: "About", key: "about", href: "/about" },
  { label: "Services", key: "services", href: "/services" },
  { label: "Contact", key: "contact", href: "/contact" },
];

// Hero section content for Pixel & Code SPA
export const heroContent = {
  home: {
    headline: (
      <>
        Empowering{" "}
        <mark className="px-3 py-1 text-white bg-accent/75 rounded-sm">
          Digital
        </mark>{" "}
        Experiences
      </>
    ),
    subheadline:
      "We build scalable, high-performance web applications that bring your brand vision to life—fast, secure, and mobile-first.",
    cta: { label: "Get Started", href: "/#contact" },
    secondaryCta: { label: "About Us", href: "/#about" },
    announcement: {
      text: "Custom Website packages starting at $497!",
      link: { label: "Learn More", href: "/#services" },
    },
    image: {
      publicId: "pixel-n-code/hero-images/pixel-home",
      alt: "Laptop on desk displaying a modern web app interface, with code snippets in background",
    },
  },

  about: {
    headline: (
      <>
        Your{" "}
        <mark className="px-3 py-1 text-white bg-primary/75 rounded-sm">
          Digital
        </mark>{" "}
        Dream Team
      </>
    ),
    subheadline: `${business.name} is a Chattanooga-based web design agency specializing in high-performance web applications and scalable architectures.`,
    cta: { label: "Meet the Team", href: "/#about" },
    secondaryCta: { label: "Our Story", href: "/#about" },
    announcement: {
      text: "Serving clients nationwide",
      link: { label: "Learn More", href: "/#about" },
    },
    image: {
      publicId: "pixel-n-code/hero-images/pixel-about",
      alt: "Team brainstorming in a modern office environment",
    },
  },

  services: {
    headline: (
      <>
        Tailored{" "}
        <mark className="px-3 py-1 text-white bg-primary/75 rounded-sm">
          Web
        </mark>{" "}
        App Development
      </>
    ),
    subheadline:
      "From design to deployment, our in-house team crafts pixel-perfect web apps optimized for performance and SEO.",
    cta: { label: "Explore Services", href: "/#services" },
    secondaryCta: { label: "Request a Quote", href: "/#contact" },
    announcement: {
      text: "New service: ClientFlow CRM Integration",
      link: { label: "Discover", href: "/#services" },
    },
    image: {
      publicId: "pixel-n-code/hero-images/pixel-services",
      alt: "Developer hands typing code on laptop with UI mockups floating above",
    },
  },

  contact: {
    headline: (
      <>
        Ready to{" "}
        <mark className="px-3 py-1 text-white bg-primary/75 rounded-sm">
          Elevate
        </mark>{" "}
        Your Web Presence?
      </>
    ),
    subheadline:
      "Let’s discuss your project goals and craft a custom solution that scales with your business.",
    cta: { label: "Get in Touch", href: "/#contact" },
    secondaryCta: { label: "Request a Call", href: "/#contact" },
    announcement: {
      text: "Open Mon–Sat • 9 AM–6 PM EST",
      link: { label: "Book a Call", href: "/#contact" },
    },
    image: {
      publicId: "pixel-n-code/hero-images/pixel-contact",
      alt: "Person typing on laptop with chat widget visible, set in a modern office environment",
    },
  },
};

// Services we offer
export const services = [
  {
    title: "New Website",
    icon: "FaLaptopCode",
    description:
      "Custom-built websites designed for speed, scalability, and conversions.",
  },
  {
    title: "Account Manager",
    icon: "FaUserTie",
    description:
      "A dedicated expert guiding you throughout your website journey.",
  },
  {
    title: "Ongoing Improvements",
    icon: "FaChartLine",
    description:
      "Continuous optimizations to boost your site's performance and effectiveness.",
  },
  {
    title: "Mobile Friendly",
    icon: "FaMobileAlt",
    description:
      "Fully responsive designs, ensuring a seamless experience on all devices.",
  },
  {
    title: "Security & Backups",
    icon: "FaLock",
    description:
      "Protection and backups to keep your website safe and recoverable.",
  },
  {
    title: "24/7 Website Access",
    icon: "FaKey",
    description:
      "Your website is always live and accessible with high availability.",
  },
  {
    title: "Custom Emails",
    icon: "FaEnvelope",
    description:
      "Professional custom email addresses to enhance your brand credibility.",
  },
  {
    title: "Detailed Analytics",
    icon: "FaChartPie",
    description:
      "Deep insights into visitor behavior and traffic sources at your fingertips.",
  },
];

export const textImageSectionContent = {
  homePage: {
    heading: `Elevating Small Business Web Presence: Welcome to ${business.name}`,
    paragraphs: [
      `At ${business.name}, we specialize in crafting tailor-made websites that guide you through every phase—from brainstorming your brand’s vision to launching a polished site live on the web. Our dedicated team oversees each milestone, ensuring your small business gets a seamless, end-to-end digital solution without the headaches of juggling multiple vendors.`,
      "Did you know that over 90% of people judge a brand by its online look and feel? A cluttered or confusing website can drive potential customers away before they ever see what you offer. That’s why partnering with an experienced yet budget-friendly design studio is one of the smartest investments you can make.",
      "We pride ourselves on delivering rich, interactive experiences that balance eye-catching design with user-focused functionality. From vibrant color palettes and intuitive navigation to responsive layouts and performance-driven features, Pixel & Code empowers small businesses worldwide to stand out, engage visitors, and turn clicks into customers—effortlessly.",
    ],
    buttonText: "Consult For A Quick Session On Web Design",
    image: {
      src: "pixel-n-code/content-images/pixel-code-workspace",
      alt: "Overhead view of a wooden designer’s desk featuring a MacBook Pro, tablet, and smartphone—all displaying the Pixel & Code website in synchronized layouts—surrounded by a coffee mug, succulent, pen, and color swatches.",
    },
  },
};

export const servicesOverviewContent = {
  homePage: [
    {
      heading: "Website Consultation",
      description:
        "Kick off your project with an in-depth strategy session—where we align on your vision, goals, timeline, and budget so nothing’s left to chance.",
      image: {
        publicId: "pixel-n-code/content-images/website-consultation",
        alt: "Designer consulting with a client",
      },
      reverse: false, // text left, image right
    },
    {
      heading: (
        <>
          <mark className="bg-primary/75 text-white px-1 rounded">React</mark>{" "}
          Website Development
        </>
      ),
      description:
        "We build dynamic, component-driven React apps that are fast, maintainable, and scale with your needs. From reusable UI components to client-side routing and state management, we’ve got you covered.",
      image: {
        publicId: "pixel-n-code/content-images/dual-monitor-setup",
        alt: "Desktop workspace showing a dual-monitor setup with Visual Studio Code on the left screen and a website preview on the right screen.",
      },
      reverse: true, // image left, text right
    },
    {
      heading: "Website Deployment",
      description:
        "Once development is complete, we handle hosting setup, CI/CD pipelines, and performance monitoring—ensuring zero downtime and a rock-solid launch.",
      image: {
        publicId: "pixel-n-code/content-images/mobile-preview",
        alt: "Hand holding a smartphone showing the Pixel & Code homepage with “Get Started” button, set against a workspace backdrop of dual monitors and a laptop displaying code and deployment metrics.",
      },
      reverse: false, // text left, image right
    },
    {
      heading: "Website Maintenance",
      description:
        "Keep your site running smoothly with ongoing maintenance, security patches, performance tweaks, and backups—so you never miss a beat.",
      image: {
        publicId: "pixel-n-code/content-images/keyboard-closeup",
        alt: "Low-angle close-up of a laptop’s chiclet-style keyboard with a blurred website maintenance dashboard on the screen in the background.",
      },
      reverse: true, // image left, text right
    },
  ],
};

export const parallaxSectionContent = {
  homePage: {
    backgroundImage:
      "https://res.cloudinary.com/mayes-auto-detailing-llc/image/upload/v1745261356/pixel-n-code/about-images/team-collab.png", // Update with your actual image
    headline: "Build A Website That Grows With Your Business",
    paragraph: `At ${business.name}, we design digital experiences that scale with your goals. Our websites are crafted to be fast, intuitive, and ready to impress—from launch day to your next big milestone.`,
    subheadline: "Ready To Launch A Website That Works As Hard As You Do?",
    button: {
      text: "Start Your Project Today",
      link: "/contact",
    },
  },
};

// constants/content.js

export const whyChooseUsContent = {
  homePage: {
    heading: `Why Partner With ${business.name} For Your Small Business Website?`,
    paragraph: `When it comes to building a strong online presence, choosing the right team makes all the difference. At ${business.name}, we specialize in helping small businesses launch websites that are professional, secure, and designed for long-term growth.`,
    features: [
      {
        icon: "FaRegComments",
        title: "Personalized Consultations",
        description:
          "Our team is ready whenever you need us — offering expert advice, project updates, and support to keep your website running smoothly.",
      },
      {
        icon: "FaUserTie",
        title: "Skilled Web Designers",
        description: `${business.name} brings together experienced designers who know what it takes to turn your brand vision into a high-performing website.`,
      },
      {
        icon: "FaClock",
        title: "Reliable Project Timelines",
        description:
          "We respect your schedule. With consistent updates and on-time delivery, you’ll always know where your project stands.",
      },
      {
        icon: "FaMobileAlt",
        title: "Built for Ease of Use",
        description:
          "We create websites that are intuitive, mobile-friendly, and easy for your customers to navigate — boosting engagement from the start.",
      },
      {
        icon: "FaShieldAlt",
        title: "Strong Website Security",
        description:
          "Protecting your business and customer information is a top priority. We implement trusted security measures from day one.",
      },
      {
        icon: "FaChartLine",
        title: "Ongoing Performance Checks",
        description:
          "Our job doesn't end at launch — we monitor your site’s performance and recommend improvements to keep you ahead online.",
      },
    ],
  },
};

export const processContent = {
  homePage: {
    heading:
      "Turning Your Vision Into Reality with a Proven Web Development Process",
    paragraph: `At ${business.name}, we follow a proven, streamlined approach to website design and development. Every step is carefully crafted to ensure timely delivery, flawless execution, and outstanding results for your business.`,
    image: {
      publicId: "pixel-n-code/content-images/creative-workspace-stages",
      alt: "Modern digital workspace showing website development stages with a laptop displaying code, a sketchbook with wireframes, colorful post-it notes, and a tablet mockup.",
    }, // Update to your real image path
    steps: [
      {
        icon: "FaFileAlt",
        title: "Requirements Gathering",
        description:
          "We begin by understanding your goals, requirements, and target audience—setting the foundation for a successful website build.",
      },
      {
        icon: "FaPencilRuler",
        title: "Website Design",
        description:
          "Our designers craft wireframes and layouts focused on user experience and branding, ensuring your vision comes to life visually.",
      },
      {
        icon: "FaCode",
        title: "Website Development",
        description:
          "Our developers turn designs into responsive, high-performance websites built on modern, scalable frameworks.",
      },
      {
        icon: "FaThumbsUp",
        title: "Quality Assurance",
        description:
          "Before launch, we rigorously test your site across devices and browsers to guarantee flawless functionality and reliability.",
      },
    ],
    buttonText: "Hire Our Team Of Web Experts!",
    buttonLink: "/contact",
  },
};
