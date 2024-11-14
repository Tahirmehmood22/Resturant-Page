function createHome() {
  const home = document.createElement("div");
  home.id = "home";

  const img = document.createElement("img");
  img.src = require("./assets/main-page-pizza.png");
  img.alt = "tasty looking pizza";
  img.classList.add("main-image");

  home.appendChild(
    createParagraph("Islamabad best homemade pizza in the country!")
  );


  
  home.appendChild(img);
  home.appendChild(createParagraph("Home made pizza since 1990"));
  home.appendChild(
    createParagraph(
      "Please come and enjoy our pizza in our Resturant and you can also order online now!"
    )
  );

  return home;
}

function createParagraph(text) {
  const paragraph = document.createElement("p");
  paragraph.textContent = text;
  return paragraph;
}

function loadHome() {
  const content = document.getElementById("content");
  content.textContent = "";
  content.appendChild(createHome());
}

export default loadHome;
