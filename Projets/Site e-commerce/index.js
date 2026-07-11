// Importation des données et des fonctions depuis d'autres fichiers JavaScript
import { data } from "./data.js";
import { generateDialogHTML, generateProductHTML } from "./fonction.js";

// Sélection de l'élément HTML avec la classe "produits"
const Produits = document.querySelector(".produits");

// Fonction pour afficher les produits
const afficherproduit = (produits) => {
    produits.forEach((produit) => {
        // Création d'un élément div pour chaque produit
        const produitHTML = document.createElement("div");
        produitHTML.classList.add("carte-produit");
        produitHTML.setAttribute("data-id", produit.id);
        produitHTML.innerHTML = generateProductHTML(produit);
        // Ajout du produit à l'élément parent
        Produits.appendChild(produitHTML);
    });
};

// Appel de la fonction pour afficher les produits avec les données initiales
afficherproduit(data);

// Sélection de l'élément input pour la recherche
const input = document.querySelector(".recherche");

// Ajout d'un écouteur d'événement pour la recherche en temps réel
input.addEventListener("keyup", (e) => {
    // Filtre les produits en fonction de la saisie de l'utilisateur
    const filtre = data.filter(p => p.nom.toLocaleLowerCase().includes(e.target.value.toLowerCase()));
    // Réinitialise le contenu de l'élément "Produits"
    Produits.innerHTML = "";
    if (filtre.length > 0) {
        // Affiche les produits filtrés
        afficherproduit(filtre);
    } else {
        // Affiche un message si aucun produit n'est trouvé
        const vide = document.createElement("h3");
        vide.textContent = "Aucun produit trouvé";
        Produits.appendChild(vide);
    }
});

// Sélection de toutes les cartes de produits
const cartes = document.querySelectorAll(".carte-produit");
let produitcarte = [];

const tspe = (arr, produit) => {
    const el = arr.find((p) => p.id== produit.id);
    return el ? true : false ;
}

// Ajout d'un écouteur d'événement à chaque carte de produit
cartes.forEach((produit) => {
    produit.addEventListener("click", () => {
        // Sélection de l'élément dialog
        const dialogue = document.querySelector("dialog");

        // Sélection de l'élément pour afficher le nombre de produits
        const nombreproduit = document.querySelector(".carte .nombre");
        // Supprime l'ancienne section du dialog s'il y en a une
        const contenudialog = document.querySelector(".dialog-menu");
        if (contenudialog) contenudialog.remove();

        // Affiche le dialog
        dialogue.showModal();

        // Trouve le produit actuel en fonction de l'ID
        const currentproduct = data.find(p => p.id == produit.dataset.id);

        // Création d'une nouvelle section pour le contenu du dialog
        const section = document.createElement("section");
        section.classList.add("dialog-menu");
        section.innerHTML = generateDialogHTML(currentproduct);
        dialogue.appendChild(section);

        // Ajout d'un écouteur d'événement pour changer la couleur de l'image de fond
        const couleurs = document.querySelectorAll(".color.change");
        couleurs.forEach((couleurs, key) => {
            couleurs.addEventListener("click", () => {
                const backgroundimg = document.querySelector(".gauche");
                backgroundimg.style.background = key === 0 ? "#ff6b58" : "#5f69d5";
            });
        });

     

        // Gestion du panier de produits
        
        const ajouter = document.querySelector(".ajouter");
        const qte = document.querySelector(".qte");

        ajouter.addEventListener("click", () => {

            if (tspe (produitcarte, currentproduct)){
                    const btntest = `<div class="icon"><i class="fa-solid fa-plus"></i></div>
              <p>Ajouter au panier</p>
            </button>`;
            ajouter.innerHTML = btntest;
            ajouter.classList.remove("ajoute");
            produitcarte = produitcarte.filter ((p) => p.id !== currentproduct.id);
            nombreproduit = produitcarte.length;
            }else{
                
                produitcarte.push(currentproduct);
                ajouter.textContent = "Effacer du panier";
                ajouter.classList.add("ajoute");
                nombreproduit.textContent = produitcarte.length;
                qte.textcontent = 1;
            }
        });

        if ( tspe (produitcarte , currentproduct)) {
            ajouter.textContent = "Effacer du panier";
            ajouter.classList.add("ajoute");
        };

      

        // Sélection des boutons et de l'élément pour afficher la quantité
const btnreduire = document.querySelector(".counter .fa-minus");
const btnajouter = document.querySelector(".counter .fa-plus");

// Variable pour suivre la quantité du produit
let qteproduit = 0;

// Initialiser la quantité du produit en vérifiant s'il est déjà dans le panier
if (tspe(produitcarte, currentproduct)) {
    qteproduit = 1; // Ou utilisez la quantité actuelle si disponible
}
qte.textContent = qteproduit;

// Ajouter un produit au panier et mettre à jour la quantité
btnajouter.addEventListener("click", () => {
    qteproduit += 1;
    qte.textContent = qteproduit;

    // Mettre à jour le panier (facultatif, selon votre logique)
    if (!tspe(produitcarte, currentproduct)) {
        produitcarte.push(currentproduct);
    }
});

// Réduire la quantité du produit et mettre à jour l'affichage
btnreduire.addEventListener("click", () => {
    if (qteproduit > 0) {
        qteproduit -= 1;
        qte.textContent = qteproduit;
    }
});

        // Ferme le dialog lorsque le bouton de fermeture est cliqué
        const btnfermer = document.querySelector(".close");
        btnfermer.addEventListener("click", () => {
            dialogue.close();
        });
    });
});
