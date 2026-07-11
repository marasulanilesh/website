document.addEventListener("DOMContentLoaded", () => {
    const tabButtons = document.querySelectorAll(".tab-btn");
    const tabContents = document.querySelectorAll(".tab-content");

    tabButtons.forEach(button => {
        button.addEventListener("click", () => {
            const targetedTab = button.getAttribute("data-tab");

            // Remove active design markers from buttons
            tabButtons.forEach(btn => btn.classList.remove("active"));
            
            // Hide all structural tabs from viewport
            tabContents.forEach(content => content.classList.remove("active"));

            // Inject state changes to selected identifiers
            button.classList.add("active");
            document.getElementById(targetedTab).classList.add("active");
        });
    });
});
