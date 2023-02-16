import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateexcuse();
  });
};

let generateexcuse = () => {
  let who = [
    "Bob Esponja",
    "Goku",
    "La tortuga de Juan",
    "Jovany Vazquez",
    "Max Estrella",
  ];
  let what = ["comió", "lloró", "voló y me hizo volar", "saltó", "bailó"];
  let when = [
    "caminado con un flow violento",
    "justo a tiempo",
    "y pensé no eres tu soy yo, que te he cogido asco",
    "cuando eran 3 motoristas que eran motos",
    "mientras jugaba acá en la arbolada",
  ];

  let whoIndex = Math.floor(Math.random() * who.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);

  return who[whoIndex] + " " + what[whatIndex] + " " + when[whenIndex];
};
