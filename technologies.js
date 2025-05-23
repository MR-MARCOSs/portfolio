const technologies = [
    { name: "HTML", icon: "./assets/html-icon.png", alt: "HTML" },
    { name: "CSS", icon: "./assets/css-icon.png", alt: "CSS" },
    { name: "Python", icon: "./assets/python-icon.png", alt: "Python" },
    { name: "TypeScript", icon: "./assets/typescript-icon.png", alt: "TypeScript" },
    { name: "JavaScript", icon: "./assets/javascript-icon.png", alt: "JavaScript" },
    { name: "Node.js", icon: "./assets/nodejs-icon.png", alt: "Node.js" },
    { name: "SQL", icon: "./assets/sql-icon.png", alt: "SQL" },
    { name: "Flutter", icon: "./assets/flutter-icon.png", alt: "Flutter" },
    { name: "Docker", icon: "./assets/docker-icon.png", alt: "Docker" }
  ];
  

  // Espera até o conteúdo da página carregar completamente
  window.addEventListener('DOMContentLoaded', () => {
    const techListElement = document.getElementById('tech-list');

    // Itera sobre a lista de tecnologias e cria os elementos HTML dinamicamente
    technologies.forEach(tech => {
      const techItem = document.createElement('div');
      techItem.classList.add('tech-item');

      const techIcon = document.createElement('img');
      techIcon.src = tech.icon;
      techIcon.alt = tech.alt;
      techIcon.classList.add('tech-icon');

      const techName = document.createElement('p');
      techName.textContent = tech.name;

      // Adiciona a imagem e o nome da tecnologia ao item
      techItem.appendChild(techIcon);
      techItem.appendChild(techName);

      // Adiciona o item à lista de tecnologias
      techListElement.appendChild(techItem);
    });
  });
