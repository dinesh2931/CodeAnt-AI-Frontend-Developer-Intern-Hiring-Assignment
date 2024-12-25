// Search Functionality for Repositories
document.getElementById("searchInput").addEventListener("input", function() {
    const searchTerm = this.value.toLowerCase();
    const repositories = document.querySelectorAll(".repository");

    repositories.forEach(function(repo) {
        const repoName = repo.querySelector("h3").textContent.toLowerCase();
        const repoDescription = repo.querySelector("p").textContent.toLowerCase();

        if (repoName.includes(searchTerm) || repoDescription.includes(searchTerm)) {
            repo.style.display = "flex";
        } else {
            repo.style.display = "none";
        }
    });
});
