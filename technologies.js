const technologies = [
    { name: "Python", icon: "./assets/python-icon.png", alt: "Python" },
    { name: "TypeScript", icon: "./assets/typescript-icon.png", alt: "TypeScript" },
    { name: "Node.js", icon: "./assets/nodejs-icon.png", alt: "Node.js" },
    { name: "Flutter", icon: "./assets/flutter-icon.png", alt: "Flutter" },
    { name: "Docker", icon: "./assets/docker-icon.png", alt: "Docker" }
  ];
  
  window.addEventListener('DOMContentLoaded', () => {
    const techListElement = document.getElementById('tech-list');

    technologies.forEach(tech => {
      const techItem = document.createElement('div');
      techItem.classList.add('tech-item');

      const techIcon = document.createElement('img');
      techIcon.src = tech.icon;
      techIcon.alt = tech.alt;
      techIcon.classList.add('tech-icon');

      const techName = document.createElement('p');
      techName.textContent = tech.name;

      techItem.appendChild(techIcon);
      techItem.appendChild(techName);

      techListElement.appendChild(techItem);
    });
  });
