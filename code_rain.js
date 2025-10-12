const words = [
  "JavaScript", "HTML", "CSS", "Python", "Langchain", "Java",
  "Flutter", "TypeScript", "NodeJS", "SQL", "Github", "API", "JSON", "Flask", "Framework",
  "Foco", "Fé", "Determinação", "Paciência", "Docker", "Kubernetes", "Pipelines"
];

const symbols = ["@", "#", "$", "%", "&", "*", "+", "?", "!", "~"];

function randomSymbol() {
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function createDrop() {

  const word = words[Math.floor(Math.random() * words.length)].split("");
  const dropElement = document.createElement("div");
  dropElement.classList.add("code-drop");
  dropElement.style.left = `${Math.random() * 99}%`;
  dropElement.style.top = `${Math.random() * document.documentElement.scrollHeight-185}px`;

  word.forEach((char, index) => {
    const span = document.createElement("span");
    span.classList.add("code-letter");
    span.style.transitionDelay = `${index * 0.1}s`; 

    const intervalId = setInterval(() => {
      span.innerText = randomSymbol();
    }, 100);
    
    setTimeout(() => {
      clearInterval(intervalId);
      span.innerText = char;
    }, 800 + index * 100);

    setTimeout(() => {
      span.style.opacity = "0";
    }, 3000 + index * 100);

    dropElement.appendChild(span);
  });

  document.body.appendChild(dropElement);

  setTimeout(() => {
    dropElement.remove();
  }, 5000);
}

setInterval(createDrop, 75);