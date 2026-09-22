const boutonExtrait = document.getElementById("bouton-extrait");
const contenuExtrait = document.getElementById("contenu-extrait");

if (boutonExtrait && contenuExtrait) {
  boutonExtrait.addEventListener("click", function () {
    if (contenuExtrait.hidden === true) {
      contenuExtrait.hidden = false;
      boutonExtrait.textContent = "Masquer l’extrait";
      boutonExtrait.setAttribute("aria-expanded", "true");
    } else {
      contenuExtrait.hidden = true;
      boutonExtrait.textContent = "Lire l’extrait";
      boutonExtrait.setAttribute("aria-expanded", "false");
    }
  });
}