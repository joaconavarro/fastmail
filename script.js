document.addEventListener('DOMContentLoaded', () => {
    const palettes = {
        'modern-elegance': {
            '--main-color': '#c62828',
            '--secondary-color': '#0d47a1',
            '--cta-color': '#d32f2f',
            '--hover-color': '#1976d2'
        },
        'corporate-chic': {
            '--main-color': '#e53935',
            '--secondary-color': '#004d40',
            '--cta-color': '#ff7043',
            '--hover-color': '#c62828'
        },
        'sophisticated-slate': {
            '--main-color': '#d32f2f',
            '--secondary-color': '#607d8b',
            '--cta-color': '#e57373',
            '--hover-color': '#c62828'
        },
        'dynamic-energy': {
            '--main-color': '#b71c1c',
            '--secondary-color': '#0288d1',
            '--cta-color': '#ff1744',
            '--hover-color': '#d32f2f'
        },
        'professional-flair': {
            '--main-color': '#e53935',
            '--secondary-color': '#2c387e',
            '--cta-color': '#ff6f60',
            '--hover-color': '#c62828'
        }
    };

    const buttons = document.querySelectorAll('.palette-selector button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const paletteName = button.getAttribute('data-palette');
            const colors = palettes[paletteName];

            if (colors) {
                for (const [key, value] of Object.entries(colors)) {
                    document.documentElement.style.setProperty(key, value);
                }
            }
        });
    });
});
