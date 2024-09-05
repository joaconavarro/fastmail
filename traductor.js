document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('es-btn').addEventListener('click', function() {
        // Set the page to Spanish
        googleTranslateElementInit();
        var frame = document.querySelector('.goog-te-menu-frame');
        if (frame) {
            frame.contentDocument.querySelector('.goog-te-menu2-item span.text').click();
        }
    });

    document.getElementById('en-btn').addEventListener('click', function() {
        // Set the page to English
        googleTranslateElementInit();
        var frame = document.querySelector('.goog-te-menu-frame');
        if (frame) {
            frame.contentDocument.querySelector('.goog-te-menu2-item span.text').click();
        }
    });
});

