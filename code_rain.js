// Lista de palavras relacionadas a programação
const words = [
  "JavaScript", "HTML", "CSS", "Python", "Langchain", "Java",
  "Flutter", "TypeScript", "NodeJS", "SQL", "Github", "API", "JSON", "Flask", "Framework",
  "Foco", "Fé", "Determinação", "Paciência", "Docker", "Kubernetes", "Pipelines"
];

// Símbolos aleatórios para o efeito de substituição
const symbols = ["@", "#", "$", "%", "&", "*", "+", "?", "!", "~"];

function randomSymbol() {
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function createDrop() {
  // Escolhe uma palavra aleatória e divide em caracteres
  const word = words[Math.floor(Math.random() * words.length)].split("");
  const dropElement = document.createElement("div");
  dropElement.classList.add("code-drop");
  
  // Define uma posição aleatória
  dropElement.style.left = `${Math.random() * 99}%`;
  dropElement.style.top = `${Math.random() * document.documentElement.scrollHeight-185}px`;
  
  // Adiciona cada letra com atraso para criar o efeito de escrita vertical
  word.forEach((char, index) => {
    const span = document.createElement("span");
    span.classList.add("code-letter");
    span.style.transitionDelay = `${index * 0.1}s`; // Adiciona atraso entre letras

    // Alterna entre símbolo e letra final
    const intervalId = setInterval(() => {
      span.innerText = randomSymbol();
    }, 100);

    // Define a letra final após um tempo
    setTimeout(() => {
      clearInterval(intervalId);
      span.innerText = char;
    }, 800 + index * 100);

    // Adiciona fade out de baixo para cima
    setTimeout(() => {
      span.style.opacity = "0";
    }, 3000 + index * 100);

    dropElement.appendChild(span);
  });
  
  document.body.appendChild(dropElement);
  
  // Remove o elemento após a animação terminar
  setTimeout(() => {
    dropElement.remove();
  }, 5000);
}

// Gera as "chuvas de código" em intervalos regulares
setInterval(createDrop, 75);