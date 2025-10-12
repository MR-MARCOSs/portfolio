const projects = [
  {
    title: "AI Chat Website",
    image: "../assets/project1.png",
    alt: "Project 1",
    description: "Website with database and JWT authentication to chat with AIs, hosted on Render.",
    tags: ["TypeScript", "NodeJS", "MySQL"],
    githubLink: "https://github.com/MR-MARCOSs/site_bots",
    githubIcon: "../assets/github.png"
  },
  {
    title: "Langchain Agent API",
    image: "../assets/project2.png",
    alt: "Project 2",
    description: "Agent with tools created using Langchain consuming OpenAI's API.",
    tags: ["Python", "Flask", "Langchain"],
    githubLink: "https://huggingface.co/spaces/MR-MARCOSs/Goobe/tree/main",
    githubIcon: "../assets/hf-logo.svg"
  },
  {
    title: "Cryptocurrency Favorites",
    image: "../assets/project3.png",
    alt: "Project 3",
    description: "Application to view prices and favorite cryptocurrencies.",
    tags: ["Flutter", "Dart", "Provider"],
    githubLink: "https://github.com/MR-MARCOSs/cryptoWeb",
    githubIcon: "../assets/github.png"
  },
  
];

window.addEventListener('DOMContentLoaded', () => {
  const projectsContainer = document.getElementById('projects-container');

  projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.classList.add('project-card');

    const projectContent = document.createElement('div');
    projectContent.classList.add('project-content');

    const projectTitle = document.createElement('h3');
    projectTitle.textContent = project.title;

    const projectImage = document.createElement('img');
    projectImage.src = project.image;
    projectImage.alt = project.alt;
    projectImage.classList.add('project-image');

    const projectDescription = document.createElement('p');
    projectDescription.classList.add('project-description');
    projectDescription.textContent = project.description;

    const tagsContainer = document.createElement('div');
    tagsContainer.classList.add('tags');
    project.tags.forEach(tag => {
      const tagElement = document.createElement('span');
      tagElement.classList.add('tag');
      tagElement.textContent = tag;
      tagsContainer.appendChild(tagElement);
    });

    projectContent.appendChild(projectTitle);
    projectContent.appendChild(projectImage);
    projectContent.appendChild(projectDescription);
    projectContent.appendChild(tagsContainer);

    const projectLink = document.createElement('a');
    projectLink.href = project.githubLink;
    projectLink.target = "_blank";
    projectLink.classList.add('github-icon');

    const githubIcon = document.createElement('img');
    githubIcon.src = project.githubIcon;
    githubIcon.alt = "GitHub";

    projectLink.appendChild(githubIcon);

    projectCard.appendChild(projectContent);
    projectCard.appendChild(projectLink);

    projectsContainer.appendChild(projectCard);
  });
});