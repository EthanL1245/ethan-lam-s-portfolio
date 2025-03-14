// Function to load external HTML components
function loadHeader(id, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        });
}

// Load header and footer on every page
document.addEventListener("DOMContentLoaded", function () {
    loadHeader("header", "header.html");
});
