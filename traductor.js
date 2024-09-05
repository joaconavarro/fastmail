// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    function switchLanguage(languageCode) {
        var iframe = document.querySelector('iframe.goog-te-menu-frame');
        if (iframe) {
            var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
            var langOptions = iframeDoc.querySelectorAll('.goog-te-menu2-item span.text');
            langOptions.forEach(function(option) {
                if (option.textContent.includes(languageCode)) {
                    option.click();
                }
            });
        } else {
            // Retry if iframe is not yet available
            setTimeout(() => switchLanguage(languageCode), 1000);
        }
    }

    document.getElementById('translate-btn').addEventListener('click', function() {
        switchLanguage('English'); // Use 'English' to switch to English
    });
});
