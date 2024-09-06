document.addEventListener("DOMContentLoaded", function () {
    // Fonction qui vérifie le text-align et applique la classe correspondante
    const applyTextAlignClass = (element) => {
        const computedStyle = window.getComputedStyle(element);
        const textAlign = computedStyle.textAlign;

        // Retirer les classes existantes pour éviter de les accumuler
        element.classList.remove('textalign-center', 'textalign-right', 'textalign-left');

        if (textAlign === 'center') {
            element.classList.add('textalign-center');
        } else if (textAlign === 'right') {
            element.classList.add('textalign-right');
        } else if (textAlign === 'left') {
            element.classList.add('textalign-left');
        }
    };

    const animateText = (element, isSplit) => {
    let a = 0;

    const processNode = (node) => {
        let htmlContent = "";

        node.childNodes.forEach(child => {
            if (child.nodeType === Node.TEXT_NODE) {
                const words = child.textContent.trim().split(" ");
                htmlContent += words.map(word => {
                    if (isSplit) {
                        // Si 'split' est activé, on divise chaque lettre
                        const wordHtml = word.split("").map((letter, i) => 
                            `<span style="transition-delay: ${(a + 0.025 * (i + .7)).toFixed(3)}s">${letter}</span>`
                        ).join("");
                        a += 0.037 * word.length;
                        return `<span>${wordHtml}</span>`;
                    } else {
                        // Sinon, on applique une animation par mot
                        a += 0.07;
                        return `<span style="transition-delay: ${a.toFixed(3)}s">${word}</span>`;
                    }
                }).join(" ");
            } else if (child.nodeType === Node.ELEMENT_NODE) {
                // Traiter les enfants récursivement
                const processedChildContent = processNode(child);

                // Si 'split' est activé, on enveloppe aussi les éléments imbriqués
                if (isSplit) {
                    htmlContent += `<span><${child.tagName.toLowerCase()} ${[...child.attributes].map(attr => `${attr.name}="${attr.value}"`).join(" ")}>${processedChildContent}</${child.tagName.toLowerCase()}></span>`;
                } else {
                    // Si 'split' n'est pas activé, on ne modifie pas la structure, mais on ajoute la transition
                    htmlContent += `<span style="transition-delay: ${a.toFixed(3)}s"><${child.tagName.toLowerCase()} ${[...child.attributes].map(attr => `${attr.name}="${attr.value}"`).join(" ")}>${processedChildContent}</${child.tagName.toLowerCase()}></span>`;
                }

                a += 0.07;
            }
        });

        return htmlContent;
    };

    return processNode(element);
};


    // Fonction pour traiter tous les éléments avec une classe contenant 'textanim'
    const checkTextAnimElements = () => {
        document.querySelectorAll('[class*="textanim-"]').forEach(t => {
    let a = 0;

    // Récupérer toutes les classes contenant 'textanim-'
    const animationClasses = [...t.classList].filter(cls => cls.includes("textanim-"));

    // Si aucune classe d'animation n'est trouvée, on sort
    if (animationClasses.length === 0) return;

    // On utilise la première classe `textanim-` trouvée (ou toutes si besoin)
    animationClasses.forEach(animationClass => {
        const parts = animationClass.split("-");
        let delay = 0;
        let isSplit = false;
        let isRepeat = false;

        parts.forEach(part => {
            if (part === "split") {
                isSplit = true;
            }
            if (part === "repeat") {
                isRepeat = true;
            }
            if (/^\d+$/.test(part)) {
                delay = parseInt(part, 10);
            }
        });

        // Observer pour animer l'élément en fonction de sa visibilité
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Appliquer l'animation avec délai
                    setTimeout(() => {
                        entry.target.classList.add("textanim-visible");
                    }, delay + 70);
                } else if (isRepeat) {
                    entry.target.classList.remove("textanim-visible");
                }
            });
        }, { rootMargin: "0px 0px -50px 0px" });

        // Appliquer l'animation de texte
        t.innerHTML = animateText(t, isSplit);
        observer.observe(t);
    });

    // Appliquer la vérification du text-align
    applyTextAlignClass(t);
});
    };

    // Exécuter immédiatement pour les éléments déjà dans le DOM
    checkTextAnimElements();

    // Observer les nouveaux éléments ajoutés au DOM
    const domObserver = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            mutation.addedNodes.forEach(node => {
                if (node.nodeType === Node.ELEMENT_NODE) {
                    // Vérifier si le nouvel élément ou un de ses enfants contient 'textanim'
                    if (node.matches('[class*="textanim"]')) {
                        applyTextAlignClass(node);
                    }
                    node.querySelectorAll('[class*="textanim"]').forEach(child => {
                        applyTextAlignClass(child);
                    });
                }
            });
        });
    });

    // Observer les ajouts au DOM
    domObserver.observe(document.body, { childList: true, subtree: true });
});
