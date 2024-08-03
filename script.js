document.addEventListener('DOMContentLoaded', function() {
    // Toggle app grid visibility
    var appsIcon = document.getElementById('apps-icon');
    var appGrid = document.getElementById('app-grid');

    appsIcon.addEventListener('click', function() {
        appGrid.style.display = appGrid.style.display === 'none' || appGrid.style.display === '' ? 'grid' : 'none';
    });

    // Close the app grid if clicking outside of it
    document.addEventListener('click', function(event) {
        if (!appGrid.contains(event.target) && !appsIcon.contains(event.target)) {
            appGrid.style.display = 'none';
        }
    });

    // Toggle additional info for each result title
    var resultTitles = document.querySelectorAll('.result-title');

    resultTitles.forEach(function(title) {
        title.addEventListener('click', function(event) {
            event.preventDefault();
            var info = this.nextElementSibling.nextElementSibling.nextElementSibling; // Adjust as needed to get the correct sibling
            info.classList.toggle('show');
        });
    });
});
