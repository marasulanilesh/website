document.addEventListener("DOMContentLoaded", () => {
    const tabButtons = document.querySelectorAll(".tab-btn");
    const tabContents = document.querySelectorAll(".tab-content");

    tabButtons.forEach(button => {
        button.addEventListener("click", () => {
            const targetTab = button.getAttribute("data-tab");

            // Remove active status from all elements
            tabButtons.forEach(btn => btn.classList.remove("active"));
            tabContents.forEach(content => content.classList.remove("active"));

            // Assign active status to the targeted section elements
            button.classList.add("active");
            const activePanel = document.getElementById(targetTab);
            if (activePanel) {
                activePanel.classList.add("active");
            }
        });
    });
});
