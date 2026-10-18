
const themeButton = document.getElementById("themeButton");
const flipButtons = document.querySelectorAll(".flipButton");

// Change dark and light mode
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
}

updateThemeButton();

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }

    updateThemeButton();
});

function updateThemeButton() {
    if (document.body.classList.contains("dark")) {
        themeButton.textContent = "Light Mode";
    } else {
        themeButton.textContent = "Dark Mode";
    }
}

// Flip movie cards
flipButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const card = button.closest(".card");
        const isFlipped = card.classList.toggle("flipped");

        button.textContent = isFlipped ? "Буцаах" : "Эргүүлэх";
    });
});
