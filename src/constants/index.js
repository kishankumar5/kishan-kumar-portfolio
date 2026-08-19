import {
    dev3d,
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    logic,
    intellect,
    shopify,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "projects",
      title: "Projects",
    }
    // ,
    // {
    //   id: "contact",
    //   title: "Contact",
    // },
  ];
  
  const services = [
    {
      title: "AI & ML Developer",
      icon: backend,
    },
    {
      title: "Full-Stack Developer",
      icon: web,
    },
    {
      title: "Mobile Developer",
      icon: mobile,
    },
    {
      title: "3D & XR Developer",
      icon: dev3d,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    // {
    //   name: "MongoDB",
    //   icon: mongodb,
    // },
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
    // No icon assets yet for: Python, PyTorch, React Native / Expo,
    // PostgreSQL, Express, Java, jQuery, Babylon.js, Streamlit, Blender.
    // Drop a PNG/SVG in src/assets/tech, export it from src/assets/index.js,
    // and add an entry here to surface them.
  ];
  
  const experiences = [
    {
      title: "Junior Intern",
      company_name: "Logic Information Systems (India) Pvt Ltd, Chennai",
      icon: logic,
      iconBg: "#383E56",
      date: "November 2021 - December 2021",
      points: [
        "Developed pilot applications as a replica of A TM machine by implementing core concepts of Java.",
        "These applications were assessed by the peers for code quality, and documented an application that was primarily developed for the use of managing HR and their work progress by the company."      ],
    },
    {
      title: "System Trainee (Software Developer)",
      company_name: "Intellect Design Arena, Chennai",
      icon: intellect,
      iconBg: "#E6DEDD",
      date: "August 2022 - September 2023",
      points: [
        // "Led a Proof of Concept (POC) for a metaverse-based banking application, incorporating Web 3.0, and utilizing Babylon.js for 3D rendering in web and Blender, to create the virtual environment.",
        "Led a Proof of Concept (POC) for a VR-based banking application, showcasing immersive financial services. Built the virtual environment in Blender and implemented interactive 3D experiences using Babylon.js (WebXR)",
        "This POC enables user to perform basic banking operations i.e. money transfer, view account details, and avail loans, all inside a virtual environment.",
        "Demonstrated the potential of immersive banking experiences, which could increase the client’s interest in adopting virtual banking solutions."
      ],
    },
    {
      title: "System Engineer (Software Developer)",
      company_name: "Intellect Design Arena, Chennai",
      icon: intellect,
      iconBg: "#E6DEDD",
      date: "September 2023 - June 2025",
      points: [
        "Built an AI-powered Chatbot that generates UI components, templates, metadata, DB connections, and images using Claude 3.5 Sonnet, Amazon Nova/Titan, and Meta AI—connected via a Node.js/Express middleware service.",
        "This service acted as a bridge between the Canvas app server and Amazon Bedrock, routing requests to the right models, managing image generation & storage, and executing DDL/DML scripts for automated business data creation/inserts—reducing app configuration time by ~50%",
        // "Worked on an experimental AI module which speeds up the process of developing enterprise level web applications, and elevates the user’s experience to develop the UI, within a few clicks away.",
        // "Used Claude 3.5 Sonnet AI through Amazon Bedrock to generate custom HTML templates according to the user’s needs and modifications, and later converted it to our low-code products meta data for processing it further.",
        "Developed a low-code platform module, allowing users to create dynamic and reusable content for both web and mobile apps without writing code, by leveraging HTML, CSS, JavaScript, and JQuery.",
        "Improved design efficiency for users by 30%, facilitating template adaptation for future technologies through generic data storage"
      ],
    }
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  // Preview images are picked up automatically: drop a file named after a
  // project's `slug` into src/assets/projects (e.g. chiptable.png) and it
  // replaces that card's gradient placeholder on the next build. No code
  // change needed. See src/assets/projects/README.md.
  //
  // `source_code_link` and `live_demo_link` are optional — each link button is
  // hidden when its URL is absent.
  const projects = [
    {
      name: "ReuseDepot — iPad Kiosk App",
      date: "August 2026",
      description:
        "Self-service kiosk app built for Northeastern University's Reuse Depot, letting visitors log the items they take without a coordinator present. Visitors tap item categories, enter their name and email, and submit on their own, while coordinators receive donations and monitor per-category inventory from the same app — everything logging to Supabase in real time. Runs in two modes: Drive Mode for move-out donation collection and Depot Mode for the year-round kiosk, on an iPad-optimized layout supporting both portrait and landscape. Idle detection auto-resets the session between visitors, and the standby screen cycles live sustainability facts and semester-wide impact stats. Built with React Native, Expo, and TypeScript with audio and haptic feedback, shipped through EAS Build, and iterated in place while in active use at the depot.",
      tags: [
        {
          name: "react-native",
          color: "blue-text-gradient",
        },
        {
          name: "expo",
          color: "green-text-gradient",
        },
        {
          name: "supabase",
          color: "pink-text-gradient",
        },
      ],
      slug: "reusedepot",
      source_code_link: "",
    },
    {
      name: "ChipTable",
      date: "August 2026",
      description:
        "Real-time poker chip manager that replaces physical chips for home games — stacks and betting, automatic blinds and dealer button, side pots with per-pot eligibility, single-tap showdown payouts with an objection window, cash-game settlement that always sums to zero, and tournament blind levels on a timer. The poker rules live in one TypeScript engine run on both sides: the browser executes it for instant optimistic UI while the server runs identical code as the authority, so the client can never talk the server into a different result. Players join through a six-character room code with no account or download, and Supabase Realtime pushes every state change to the room channel — reconnection restores your seat and stack across refreshes, lock screens, and dropped wifi. Roughly 6,300 lines with 51 engine tests, hand-rolled without a component, state, or router library to stay at 68 kB gzipped.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "typescript",
          color: "green-text-gradient",
        },
        {
          name: "supabase",
          color: "pink-text-gradient",
        },
      ],
      slug: "chiptable",
      source_code_link: "https://github.com/kishankumar5/chiptable",
      live_demo_link: "https://kishankumar5.github.io/chiptable/",
    },
    {
      name: "Multimodal Fashion Outfit Recommendation",
      date: "January 2026 - April 2026",
      description:
        "Multimodal outfit recommendation system pairing EfficientNet-B0 image embeddings with Sentence-BERT text embeddings in a shared 256-d space, reaching 0.7767 AUC and 70.14% accuracy on 40,000 stylist-curated Polyvore outfits. Ran 10 systematic experiments tuning data scaling, learning rate, backbone freezing, dropout, and negative sampling — identifying data volume as the strongest performance lever (+3.9% AUC). Ships as a Streamlit app serving real-time recommendations over 10,000+ catalog embeddings via cosine similarity, with mobile camera scanning, text search, and pairwise compatibility scoring.",
      tags: [
        {
          name: "pytorch",
          color: "blue-text-gradient",
        },
        {
          name: "multimodal-ml",
          color: "green-text-gradient",
        },
        {
          name: "streamlit",
          color: "pink-text-gradient",
        },
      ],
      slug: "fashion",
      source_code_link: "https://github.com/kishankumar5/Fashion-Outfit-Recommendation",
    },
    {
      name: "Realtor — Real Estate Mobile App",
      date: "December 2025 - Present",
      description:
        "Cross-platform real estate application built with React Native and Expo, featuring secure JWT authentication with an access/refresh token flow and encrypted credential storage via Expo SecureStore. Backed by a self-hosted GoTrue auth service (Supabase's open-source auth) containerized with Docker and PostgreSQL, enabling registration, login, and automatic token refresh with no third-party dependency. React Context drives global state behind a protected AuthStack/AppStack routing architecture, persisting sessions across app restarts and logging out automatically on token expiration.",
      tags: [
        {
          name: "react-native",
          color: "blue-text-gradient",
        },
        {
          name: "gotrue",
          color: "green-text-gradient",
        },
        {
          name: "postgresql",
          color: "pink-text-gradient",
        },
      ],
      slug: "realtor",
      source_code_link: "https://github.com/kishankumar5/realtor-app",
    },
    {
      name: "Flight Route Optimizer",
      date: "October 2025 - December 2025",
      description:
        "Graph-based flight route optimization system that finds optimal routes across major US airports by minimum cost or minimum duration using Dijkstra's shortest path algorithm. Built in Python with a min-heap priority queue and graph traversal (Dijkstra's, BFS, DFS), with flight data stored as JSON and converted into directed weighted graphs for pathfinding, surfaced through a Streamlit UI for interactive route visualization.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "algorithms",
          color: "green-text-gradient",
        },
        {
          name: "streamlit",
          color: "pink-text-gradient",
        },
      ],
      slug: "flight",
      source_code_link: "https://github.com/kishankumar5/Flight-Route-Optimizer",
      live_demo_link: "https://flight-route-optimizer-kk.streamlit.app/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };