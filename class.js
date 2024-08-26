document.addEventListener('DOMContentLoaded', function() {
    // Fonction pour copier le texte dans le presse-papier
    function copyToClipboard(text, span) {
        navigator.clipboard.writeText(text).then(() => {
            console.log(`Copied text: ${text}`); // Log de confirmation de la copie

            // Sauvegarder le texte original
            const originalText = span.textContent;

            // Remplacer le texte par "Class copied!" et ajouter la classe "copied"
            span.textContent = 'Class copied!';
            span.classList.add('copied');

            // Remettre le texte original après 2 secondes
            setTimeout(() => {
                span.textContent = originalText;
                span.classList.remove('copied'); // Optionnel : Retirer la classe "copied" si nécessaire
            }, 1400);
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    }

    // Gestionnaire de clic pour les éléments avec la classe "redo"
    document.querySelectorAll('.redo').forEach(button => {
        button.addEventListener('click', function() {
            console.log('Redo button clicked'); // Log au clic du bouton redo
            
            // Trouver le h2 en tant que frère direct du parent du bouton
            const closestH2 = this.closest('div').nextElementSibling;
            if (closestH2 && closestH2.tagName === 'H2') {
                console.log('Found h2:', closestH2); // Log de l'élément h2 trouvé
                // Supprimer la classe .txt-anime-visible
                closestH2.classList.remove('txt-anime-visible');
                console.log('.txt-anime-visible removed from h2'); // Log de la suppression de la classe

                // Forcer un reflow pour garantir que la classe est supprimée
                void closestH2.offsetWidth;

                // Rajouter la classe .txt-anime-visible après 1,5 seconde
                setTimeout(() => {
                    closestH2.classList.add('txt-anime-visible');
                    console.log('.txt-anime-visible added back to h2'); // Log de l'ajout de la classe
                }, 1100);
            } else {
                console.error('No h2 found'); // Log si aucun h2 n'est trouvé
            }
        });
    });

    // Récupérer tous les divs contenant h2 pour le copier
    document.querySelectorAll('div').forEach(div => {
        const span = div.querySelector('.class');
        const h2 = div.querySelector('h2');

        if (span && h2) {
            // Récupérer uniquement la première classe qui n'est pas "animated-text"
            const firstClass = h2.classList[0];
            span.textContent = firstClass;
            console.log(`Set span text to: ${firstClass}`); // Log de la classe appliquée au span

            // Ajouter un gestionnaire de clic pour copier le contenu du span dans le presse-papier
            span.addEventListener('click', function() {
                copyToClipboard(span.textContent, span);
            });
        }
    });

});
document.addEventListener("DOMContentLoaded", function() {
    const divs = document.querySelectorAll('.demo > div'); // Sélectionne toutes les divs directement sous body
    divs.forEach((div, index) => {
        const number = (index + 1).toString().padStart(2, '0'); // Génère un numéro avec deux chiffres
        const prefix = `.${number}`; // Crée le préfixe avec un point

        // Ajoute le numéro avant le contenu de la div
        const numberElement = document.createElement('span');
        numberElement.textContent = prefix;
         numberElement.classList.add('number'); // Ajoute la classe "number"
        div.prepend(numberElement); // Ajoute le numéro au début de la div
    });
});
