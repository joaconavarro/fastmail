// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    // Initialize Google Translate when the page loads
    function googleTranslateElementInit() {
        new google.translate.TranslateElement({
            pageLanguage: 'es', // Default language of the page
            includedLanguages: 'en,es', // Languages you want to include
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE
        }, 'google_translate_element');
    }

    // Load the Google Translate script
    function loadGoogleTranslate() {
        var script = document.createElement('script');
        script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        document.head.appendChild(script);
    }

    // Button click event handler
    document.getElementById('translate-btn').addEventListener('click', function() {
        // Load the Google Translate script if not already loaded
        if (!document.querySelector('script[src="https://translate.google.com/translate_a/element.js"]')) {
            loadGoogleTranslate();
        } else {
            // Trigger Google Translate
            var frame = document.querySelector('.goog-te-menu-frame');
            if (frame) {
                var langMenu = frame.contentDocument.querySelector('.goog-te-menu2');
                if (langMenu) {
                    var englishOption = langMenu.querySelector('.goog-te-menu2-item span.text:contains("English")');
                    if (englishOption) {
                        englishOption.click();
                    }
                }
            }
        }
    });
});
