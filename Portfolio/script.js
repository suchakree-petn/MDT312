window.onload = function() {
    function handleSectionMouseEnter(event) {
        const section = event.target;
        section.style.transform = "scale(1.05)";
        section.style.transition = "transform 0.3s";
    }

    function handleSectionMouseLeave(event) {
        const section = event.target;
        section.style.transform = "scale(1)";
        section.style.transition = "transform 0.3s";
    }
    const sections = document.querySelectorAll(".section");
    sections.forEach(function(section) {
        section.addEventListener("mouseenter", handleSectionMouseEnter);
        section.addEventListener("mouseleave", handleSectionMouseLeave);
    });
};