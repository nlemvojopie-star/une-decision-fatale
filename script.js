const boutonExtrait = document.getElementById("bouton-extrait");
const contenuExtrait = document.getElementById("contenu-extrait");

boutonExtrait.addEventListener("click", function () {
  const extraitEstCache = contenuExtrait.hidden;

  contenuExtrait.hidden = !extraitEstCache;

  if (extraitEstCache) {
    boutonExtrait.textContent = "Masquer l’extrait";
    boutonExtrait.setAttribute("aria-expanded", "true");

    contenuExtrait.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  } else {
    boutonExtrait.textContent = "Afficher l’extrait";
    boutonExtrait.setAttribute("aria-expanded", "false");
  }
});

const boutonCouverture = document.getElementById("ouvrir-couverture");
const fenetreCouverture = document.getElementById("fenetre-couverture");
const fermerCouverture = document.getElementById("fermer-couverture");

boutonCouverture.addEventListener("click", function () {
  fenetreCouverture.showModal();
});

fermerCouverture.addEventListener("click", function () {
  fenetreCouverture.close();
});

fenetreCouverture.addEventListener("click", function (event) {
  if (event.target === fenetreCouverture) {
    fenetreCouverture.close();
  }
});