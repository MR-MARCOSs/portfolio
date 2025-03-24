// projects.js
const projects = [
    {
      title: "Site chat com IA's",
      image: "./assets/project1.png",
      alt: "Projeto 1",
      description: "Site com banco de dados e autenticação JWT para conversar com IA's, hospedado no Render.",
      tags: ["TypeScript", "NodeJS", "MySQL"],
      githubLink: "https://github.com/MR-MARCOSs/site_bots",
      githubIcon: "./assets/github.png"
    },
    {
      title: "Langchain Agent API",
      image: "./assets/project2.png",
      alt: "Projeto 2",
      description: "Agente com ferramentas feito com langchain consumindo API da OpenAI.",
      tags: ["Python", "Flask", "Langchain"],
      githubLink: "https://huggingface.co/spaces/MR-MARCOSs/Goobe/tree/main",
      githubIcon: "./assets/hf-logo.svg"
    },
    {
      title: "Favoritar Criptomoedas",
      image: "./assets/project3.png",
      alt: "Projeto 3",
      description: "Aplicativo para ver preços e favoritar criptomoedas.",
      tags: ["Flutter", "Dart", "Provider"],
      githubLink: "https://github.com/MR-MARCOSs/cryptoWeb",
      githubIcon: "./assets/github.png"
    },
    {
      title: "Automação de mensagens",
      image: "./assets/project4.png",
      alt: "Projeto 4",
      description: "Executável Python para envio de mensagens no WhatsApp Web.",
      tags: ["Python", "WebScrap", "RPA"],
      githubLink: "https://github.com/MR-MARCOSs/Process-Automation",
      githubIcon: "./assets/github.png"
    }
  ];

      // Espera até o conteúdo da página carregar completamente
      window.addEventListener('DOMContentLoaded', () => {
        const projectsContainer = document.getElementById('projects-container');
  
        // Itera sobre o array de projetos e cria os elementos HTML dinamicamente
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
  
          // Adiciona os elementos ao conteúdo do projeto
          projectContent.appendChild(projectTitle);
          projectContent.appendChild(projectImage);
          projectContent.appendChild(projectDescription);
          projectContent.appendChild(tagsContainer);
  
          // Adiciona o link para o GitHub ou Hugging Face
          const projectLink = document.createElement('a');
          projectLink.href = project.githubLink;
          projectLink.target = "_blank";
          projectLink.classList.add('github-icon');
  
          const githubIcon = document.createElement('img');
          githubIcon.src = project.githubIcon;
          githubIcon.alt = "GitHub";
  
          projectLink.appendChild(githubIcon);
  
          // Adiciona o link de GitHub/Hugging Face ao card do projeto
          projectCard.appendChild(projectContent);
          projectCard.appendChild(projectLink);
  
          // Adiciona o card à lista de projetos
          projectsContainer.appendChild(projectCard);
        });
      });
  