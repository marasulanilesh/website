document.addEventListener("DOMContentLoaded", () => {
    const tabButtons = document.querySelectorAll(".moxa-btn");
    const tabViews = document.querySelectorAll(".tab-view");

    tabButtons.forEach(button => {
        button.addEventListener("click", () => {
            const selectedTab = button.getAttribute("data-tab");

            // Clean active classes from navigation elements
            tabButtons.forEach(btn => btn.classList.remove("active"));
            tabViews.forEach(view => view.classList.remove("active"));

            // Provision selected route state transitions
            button.classList.add("active");
            document.getElementById(selectedTab).classList.add("active");
        });
    });
});
