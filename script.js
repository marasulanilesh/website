document.addEventListener("DOMContentLoaded", () => {
    const tabButtons = document.querySelectorAll(".tab-btn");
    const tabContents = document.querySelectorAll(".tab-content");

    tabButtons.forEach(button => {
        button.addEventListener("click", () => {
            const targetTab = button.getAttribute("data-tab");

            // Remove active system states
            tabButtons.forEach(btn => btn.classList.remove("active"));
            tabContents.forEach(content => content.classList.remove("active"));

            // Set current target active indicators
            button.classList.add("active");
            const activePanel = document.getElementById(targetTab);
            if (activePanel) {
                activePanel.classList.add("active");
            }
        });
    });
});
