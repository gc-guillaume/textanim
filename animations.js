document.addEventListener('DOMContentLoaded', function() {
    function applyAnimation(element) {
        let content;
        let totalDelay = 0; // Variable pour accumuler les délais

        // Vérifier si l'élément a la classe 'split'
        if (element.classList.contains('split')) {
            // Découper le texte par lettres, envelopper chaque mot dans un span
            content = element.textContent.split(' ').map(word => {
                const letters = word.split('').map((letter, index) => {
                    const delay = totalDelay + (index + 1) * 0.025;
                    return `<span style="transition-delay: ${delay}s">${letter}</span>`;
                }).join('');
                totalDelay += (word.length * 0.03); // Ajouter le délai total de ce mot
                return `<span>${letters}</span>`;
            }).join(' ');
        } else {
            // Découper le texte par mots (par défaut)
            content = element.textContent.split(' ').map((word, index) => {
                const delay = totalDelay + (index + 1) * 0.04;
                totalDelay += 0.04; // Ajouter le délai pour chaque mot
                return `<span style="transition-delay: ${delay}s">${word}</span>`;
            }).join(' ');
        }

        element.innerHTML = content;

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                } else if (entry.target.classList.contains('repeat')) {
                    entry.target.classList.remove('is-visible');
                }
            });
        }, {
            rootMargin: '0px 0px -70px 0px' // Décalage pour déclencher un peu plus bas
        });

        observer.observe(element);

        // Vérification si l'élément est déjà visible au chargement
        if (element.getBoundingClientRect().top < window.innerHeight && element.getBoundingClientRect().bottom > 0) {
            element.classList.add('is-visible');
        }
    }

    // Appliquer l'animation à tous les éléments avec la classe 'animated-text'
    document.querySelectorAll('.animated-text').forEach(element => applyAnimation(element));
});
