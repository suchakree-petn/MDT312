
function handleSectionMouseEnter(sectionId) {
    const section = document.getElementById(sectionId);
    section.style.transform = "scale(1.05)";
    section.style.transition = "transform 0.3s";
}

function handleSectionMouseLeave(sectionId) {
    const section = document.getElementById(sectionId);
    section.style.transform = "scale(1)";
    section.style.transition = "transform 0.3s";
}

document.getElementById("hobbies").addEventListener("mouseenter", () => handleSectionMouseEnter("hobbies"));
document.getElementById("hobbies").addEventListener("mouseleave", () => handleSectionMouseLeave("hobbies"));
document.getElementById("skills").addEventListener("mouseenter", () => handleSectionMouseEnter("skills"));
document.getElementById("skills").addEventListener("mouseleave", () => handleSectionMouseLeave("skills"));
document.getElementById("interests").addEventListener("mouseenter", () => handleSectionMouseEnter("interests"));
document.getElementById("interests").addEventListener("mouseleave", () => handleSectionMouseLeave("interests"));


