const certificates = [
  {
    title: "Intro to Machine Learning",
    issuer: "Kaggle",
    image: "../assets/intro-to-ml.png",
    link: "../assets/intro-to-ml.png",
    alt: "Project 1"
  },
  {
    title: "Intermediate Machine Learning",
    issuer: "Kaggle",
    image: "../assets/intermediate-ml.png",
    link: "../assets/intermediate-ml.png",
    alt: "Project 2"
  },
  {
    title: "NodeJS",
    issuer: "RocketSeat",
    image: "../assets/nodejsimg.png",
    link: "../assets/Nodejs.pdf",
    alt: "Project 3"
  },
  {
    title: "Discover (HTML, CSS)",
    issuer: "RocketSeat",
    image: "../assets/discover.png",
    link: "../assets/Discover.pdf",
    alt: "Project 4"
  },
  {
    title: "AI for Devs",
    issuer: "RocketSeat",
    image: "../assets/AI.png",
    link: "../assets/AIForDevs.pdf",
    alt: "Project 5"
  },
  {
    title: "DevOps and Cloud Challenge",
    issuer: "Fabricio Veronez",
    image: "../assets/DevOps Badges.png",
    link: "https://api.badgr.io/public/collections/75d41e9266b44192a0d25aa55b3a47fc",
    alt: "Project 6"
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
    projectIssuer.textContent = `By: ${cert.issuer}`;

    const projectImage = document.createElement('img');
    projectImage.src = cert.image;
    projectImage.alt = cert.alt;
    projectImage.classList.add('project-image');

    const certificateLink = document.createElement('a');
    certificateLink.href = cert.link;
    certificateLink.target = "_blank";
    certificateLink.classList.add('certificate-link');
    certificateLink.textContent = "View certificate";

    projectContent.appendChild(projectTitle);
    projectContent.appendChild(projectIssuer);
    projectContent.appendChild(projectImage);
    projectContent.appendChild(certificateLink);

    projectCard.appendChild(projectContent);
    projectCardsContainer.appendChild(projectCard);
  });
});