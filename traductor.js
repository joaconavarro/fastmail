document.addEventListener('DOMContentLoaded', function() {
    function switchLanguage(languageCode) {
        var googleTranslateFrame = document.querySelector('iframe.goog-te-menu-frame');
        if (googleTranslateFrame) {
            var googleTranslateDocument = googleTranslateFrame.contentDocument || googleTranslateFrame.contentWindow.document;
            var languageOption = Array.from(googleTranslateDocument.querySelectorAll('.goog-te-menu2-item span.text')).find(item => item.textContent.includes(languageCode));
            if (languageOption) {
                languageOption.click();
            }
        } else {
            // Google Translate frame not yet available
            setTimeout(() => switchLanguage(languageCode), 1000);
        }
    }

    document.getElementById('translate-btn').addEventListener('click', function() {
        // Ensure Google Translate script is loaded
        if (typeof google !== 'undefined' && google.translate) {
            switchLanguage('English'); // Switch to English
        } else {
            // Load Google Translate script if not already present
            var script = document.createElement('script');
            script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
            document.head.appendChild(script);
            script.onload = () => switchLanguage('English'); // Switch language once script is loaded
        }
    });
});
