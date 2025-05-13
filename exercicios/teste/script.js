window.onload = () => {
    const tree = document.getElementById('tree');
    const hearts = document.querySelectorAll('.heart');

    // Faz a árvore crescer
    tree.style.clipPath = 'inset(0 0 0 0)';

    // Depois que a árvore crescer, faz os corações aparecerem
    setTimeout(() => {
        hearts.forEach((heart, index) => {
            setTimeout(() => {
                heart.style.transform = 'rotate(45deg) scale(1)';
                heart.style.opacity = 1;
            }, index * 300); // Atraso entre os corações
        });
    }, 2000); // Espera a animação da árvore terminar (2 segundos)
};