import {
    mobile,
    backend,
    vespa,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    bulma,
    nodejs,
    mongodb,
    git,
    aws,
    docker,
    avaloq,
    asurion,
    inprogress,
    antd,
    postgre,
  } from "../assets/assets";
  
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
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React JS Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Vespa Lover",
      icon: vespa,
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
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    // {
    //   name: "Bulma CSS",
    //   icon: bulma,
    // },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    // {
    //   name: "ANTD",
    //   icon: antd,
    // },
    {
      name: "git",
      icon: git,
    },
    {
      name: "AWS",
      icon: aws,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "PostgreSQL",
      icon: postgre,
    },
  ];
  
  const experiences = [
    {
      title: "Application Developer Intern",
      company_name: "Avaloq",
      icon: avaloq,
      iconBg: "#383E56",
      date: "May 2021 - Oct 2021",
      points: [
        "Developing and maintaining web applications using Edoras One.",
        "Coordinating with stakeholders",
        "Implementing responsive design.",
        "Agile Methodology",
        'Version Control'
      ],
    },
    {
      title: "Software Engineer Intern",
      company_name: "Asurion",
      icon: asurion,
      iconBg: "#E6DEDD",
      date: "Nov 2022 - Feb 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Familiarity with AWS",
        "Implemented a whole feature frontend and backend with responsive design and flexibility of code",
        "Exposed to TypeScript",
      ],
    },
    {
      title: "Software Engineer",
      company_name: "Asurion",
      icon: asurion,
      iconBg: "#E6DEDD",
      date: "March 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Coordinating with team and stakeholders for creating high-quality applications",
        "Implemented features backend to frontend with responsive design and fexlibility of code",
        "Implemented unit testing to some features in the application.",
        "Owning and handling UAT.",
        'Exposure with MERN stack'
      ],
    },
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
      name: "In Progress...",
      description:
        "Web application",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDB",
          color: "green-text-gradient",
        },
        {
          name: "TypeScript",
          color: "pink-text-gradient",
        },
      ],
      image: inprogress,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };