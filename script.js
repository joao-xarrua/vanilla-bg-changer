const botao = document.querySelector(".enviar");
const select = document.querySelector("#select");
const fundo = document.querySelector(".wrap");
const cores = [
  {
    cor: "Branco",
    hex: "#fff",
  },
  {
    cor: "Preto",
    hex: "#000",
  },
  {
    cor: "Vermelho",
    hex: "#f00",
  },
  {
    cor: "Azul",
    hex: "#00f",
  },
  {
    cor: "Verde",
    hex: "#0f0",
  },
  {
    cor: "Ciano",
    hex: "#0ff",
  },
  {
    cor: "Amarelo",
    hex: "#ff0",
  },
  {
    cor: "Rosa",
    hex: "#f0f",
  },
];

defineCores = () => {
  cores.forEach((cor) => {
    const elemento = document.createElement("option");
    elemento.setAttribute("value", `${cor.hex}`);
    elemento.innerText = `${cor.cor}`;
    select.appendChild(elemento);
  });
};
defineCores();

handleChanger = () => {
  fundo.style.background = select.value;
};

botao.addEventListener("click", handleChanger);
