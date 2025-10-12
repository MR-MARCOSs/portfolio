const certificates = [
    {
      title: "Intro to Machine Learning",
      issuer: "Kaggle",
      image: "./assets/intro-to-ml.png",
      link: "./assets/intro-to-ml.png",
      alt: "Projeto 1"
    },
    {
      title: "Intermediate Machine Learning",
      issuer: "Kaggle",
      image: "./assets/intermediate-ml.png",
      link: "./assets/intermediate-ml.png",
      alt: "Projeto 2"
    },
    {
      title: "NodeJS",
      issuer: "RocketSeat",
      image: "./assets/nodejsimg.png",
      link: "./assets/Nodejs.pdf",
      alt: "Projeto 3"
    },
    {
      title: "Discover(HTML, CSS)",
      issuer: "RocketSeat",
      image: "./assets/discover.png",
      link: "./assets/Discover.pdf",
      alt: "Projeto 4"
    },
    {
      title: "AI for Devs",
      issuer: "RocketSeat",
      image: "./assets/AI.png",
      link: "./assets/AIForDevs.pdf",
      alt: "Projeto 5"
    },
    {
      title: "Desafio DevOps e Cloud",
      issuer: "Fabricio Veronez",
      image: "./assets/DevOps Badges.png",
      link: "https://api.badgr.io/public/collections/75d41e9266b44192a0d25aa55b3a47fc",
      alt: "Projeto 6"
    }
  ];

  window.addEventListener('DOMContentLoaded', () => {
    const projectCardsContainer = document.getElementById('project-cards');

    certificates.forEach(cert => {
      const projectCard = document.createElement('div');
      projectCard.classList.add('project-card');

      const projectContent = document.createElement('div');
      projectContent.classList.add('project-content');

      const projectTitle = document.createElement('h3');
      projectTitle.textContent = cert.title;

      const projectIssuer = document.createElement('h4');
      projectIssuer.textContent = `De: ${cert.issuer}`;

      const projectImage = document.createElement('img');
      projectImage.src = cert.image;
      projectImage.alt = cert.alt;
      projectImage.classList.add('project-image');

      const certificateLink = document.createElement('a');
      certificateLink.href = cert.link;
      certificateLink.target = "_blank";
      certificateLink.classList.add('certificate-link');
      certificateLink.textContent = "Ver certificado";

      projectContent.appendChild(projectTitle);
      projectContent.appendChild(projectIssuer);
      projectContent.appendChild(projectImage);
      projectContent.appendChild(certificateLink);

      projectCard.appendChild(projectContent);
      projectCardsContainer.appendChild(projectCard);
    });
  });

  