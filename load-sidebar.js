document.addEventListener("DOMContentLoaded", function () {
    fetch("sidebar.html")
        .then(response => response.text())
        .then(data => {
            document.querySelector(".sidebar").innerHTML = data;

            // Get the background color from index.html
            const sidebarDiv = document.querySelector(".sidebar");
            const designBgColor = sidebarDiv.getAttribute("data-bg-color") || "rgb(238, 238, 238)"; // Default color if no color specified
            const highlightHref = sidebarDiv.getAttribute("data-highlight-href");
            
            // Apply background color only to "Design Projects" link
            const designLink = document.querySelector(`a[href="${highlightHref}"] .sidebar-link`);
            if (designLink) {
                designLink.style.backgroundColor = designBgColor;
            }
            document.body.style.visibility = "visible"; // Make visible after loading
        });
});
