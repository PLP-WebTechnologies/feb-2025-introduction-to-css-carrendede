// Change text content
document.getElementById("change-text-btn").addEventListener("click", function () {
    document.getElementById("main-title").textContent = "Text Changed!";
    document.getElementById("intro-text").textContent = "You clicked the button to change text.";
});

// Change CSS styles
document.getElementById("change-style-btn").addEventListener("click", function () {
    const intro = document.getElementById("intro-text");
    intro.style.color = "white";
    intro.style.backgroundColor = "teal";
    intro.style.padding = "10px";
    intro.style.borderRadius = "8px";
});

// Add/remove an element
document.getElementById("toggle-element-btn").addEventListener("click", function () {
    const section = document.getElementById("extra-section");
    section.style.display = section.style.display === "none" ? "block" : "none";
});
