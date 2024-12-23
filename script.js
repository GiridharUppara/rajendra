
$(document).ready(function() {
    $('nav ul li a').on('click', function(event) {
        alert('Navigating to: ' + $(this).text());
    });
});
