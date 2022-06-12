// Créer un événement au scroll

// Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut

// Faire apparaitre l'image de la partie improvise

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours

document.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    navbar.style.height = 50 + "px";
  } else navbar.style.height = 90 + "px";
  if (window.scrollY > 299) {
    imgImprovise.style.transform = "translateX(0)";
    imgImprovise.style.opacity = 1;
  }
  if (window.scrollY > 1200) {
    popup.style.transform = "translateX(0)";
    popup.style.opacity = 1;
  } else {
    popup.style.transform = "translateX(500px)";
    popup.style.opacity = 0;
  }
});

closeBtn.addEventListener("click", () => {
  popup.style.transform = "translateX(500px)";
  popup.style.opacity = 0;
  popup.style.visibility = "hidden";
});
