document.addEventListener('DOMContentLoaded', function() {
    // Load Google Translate script if it's not already present
    function loadGoogleTranslate() {
        if (!document.querySelector('script[src="https://translate.google.com/translate_a/element.js"]')) {
            var script = document.createElement('script');
            script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
            document.head.appendChild(script);
        }
    }

    // Function to switch to the specified language
    function switchLanguage(languageCode) {
        if (window.google && google.translate && google.translate.TranslateElement) {
            var translateElement = document.querySelector('#google_translate_element');
            if (translateElement) {
                var translateFrame = document.querySelector('iframe.goog-te-menu-frame');
                if (translateFrame) {
                    var frameDoc = translateFrame.contentDocument || translateFrame.contentWindow.document;
                    var langOption = Array.from(frameDoc.querySelectorAll('.goog-te-menu2-item span.text')).find(function(element) {
                        return element.textContent.includes(languageCode);
                    });
                    if (langOption) {
                        langOption.click();
                    }
                }
            }
        }
    }

    document.getElementById('translate-btn').addEventListener('click', function() {
        loadGoogleTranslate();
        setTimeout(function() {
            switchLanguage('English'); // Adjust to the language you want to switch to
        }, 3000); // Wait for the Google Translate script to load and render
    });
});
