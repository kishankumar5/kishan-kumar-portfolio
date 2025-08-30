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
    carrent,
    jobit,
    tripguide,
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
    }
    // ,
    // {
    //   id: "contact",
    //   title: "Contact",
    // },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "3D Web Developer",
      icon: dev3d,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
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
    //   name: "git",
    //   icon: git,
    // },
    {
      name: "figma",
      icon: figma,
    },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
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
        "Worked on an experimental AI module which speeds up the process of developing enterprise level web applications, and elevates the user’s experience to develop the UI, within a few clicks away.",
        "Used Claude 3.5 Sonnet AI through Amazon Bedrock to generate custom HTML templates according to the user’s needs and modifications, and later converted it to our low-code products meta data for processing it further.",
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
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };