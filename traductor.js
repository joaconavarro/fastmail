
document.addEventListener('DOMContentLoaded', function() {
    function translatePage(languageCode) {
        if (window.google && google.translate) {
            var translate = google.translate.TranslateElement.getInstance();
            if (translate) {
                translate.setEnabled(true);
                translate.setLanguage(languageCode);
            }
        } else {
            // Google Translate API not yet loaded
            setTimeout(function() {
                translatePage(languageCode);
            }, 1000); // Retry after 1 second
        }
    }

    document.getElementById('translate-btn').addEventListener('click', function() {
        translatePage('en'); // Change to 'en' for English
    });
});
