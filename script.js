// Initial selections and calculation values
const selections = { x: null, y: null, z: null };

// Add event listeners to all images
document.querySelectorAll(".row img").forEach(img => {
    img.addEventListener("click", () => {
        const value = parseInt(img.dataset.value, 10);
        const category = img.closest(".row").dataset.category;

        // Update selection for the clicked category
        selections[category] = value;

        // Highlight the selected image
        img.parentElement.querySelectorAll("img").forEach(image => {
            image.style.borderColor = "transparent"; // Reset other borders
        });
        img.style.borderColor = "#007BFF"; // Highlight selected image

        // Trigger recalculation if all categories are selected
        if (selections.x !== null && selections.y !== null && selections.z !== null) {
            calculateResults();
        }
    });
});

// Calculate and display the results
function calculateResults() {
    const { x, y, z } = selections;

    // Apply the formulas
    const resultX = 2 * x + 11;
    const resultY = (2 * z + y) - 5;
    const resultZ = Math.abs((y + z) - x);

    // Update the result display
    document.getElementById("result-x").textContent = resultX;
    document.getElementById("result-y").textContent = resultY;
    document.getElementById("result-z").textContent = resultZ;
}
