export const showMenuHamburguer = () => {
  const linksNav = document.getElementById("myLinks");
  const iconHamburguer = document.getElementsByClassName("icon")[0];
  if (linksNav.style.display === "block") {
    linksNav.style.display = "none";
    iconHamburguer.style.transform = "rotate(180deg)";
    iconHamburguer.style.transition = "1s";
  } else {
    linksNav.style.display = "block";
    iconHamburguer.style.transform = "rotate(90deg)";
    iconHamburguer.style.transition = "1s";
  }
};
