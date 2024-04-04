document.addEventListener("DOMContentLoaded", function() {
    const generateButton = document.getElementById("generateButton");
    const restartButton = document.getElementById("restartButton");
    const addUrlsButton = document.getElementById("addUrlsButton");
    const memeContainer = document.getElementById("memeContainer");

    generateButton.addEventListener("click", function() {
        console.log("Generate Meme button clicked"); // Debugging statement
        const topText = document.getElementById("topText").value;
        const bottomText = document.getElementById("bottomText").value;
        const memeImageInputs = document.querySelectorAll(".imageInput");
        const memeImageURLs = [];

        // Collect all image URLs from input fields
        memeImageInputs.forEach(function(input) {
            const memeImageInput = input.value.trim();
            if (memeImageInput) {
                memeImageURLs.push(memeImageInput);
            }
        });

        // Create memes for all collected image URLs
        memeImageURLs.forEach(function(url) {
            createMeme(url, topText, bottomText);
        });

        // Clear input fields after generating memes
        document.getElementById("topText").value = "";
        document.getElementById("bottomText").value = "";
        memeImageInputs.forEach(function(input) {
            input.value = ""; // Clear the input field
        });
    });

    restartButton.addEventListener("click", function() {
        memeContainer.innerHTML = ""; // Clear all memes
    });

    addUrlsButton.addEventListener("click", function() {
        const input = createImageInput();
        memeContainer.appendChild(input);
    });

    function createImageInput() {
        const input = document.createElement("input");
        input.type = "text";
        input.className = "imageInput";
        input.placeholder = "Enter image URL";
        input.style.display = "block";
        return input;
    }

    function createMeme(memeImageInput, topText, bottomText) {
        const container = document.createElement("div");
        container.className = "meme";

        const img = document.createElement("img");
        img.src = memeImageInput;
        img.className = "meme-image";

        const topTextDiv = document.createElement("div");
        topTextDiv.className = "meme-text top";
        topTextDiv.textContent = topText;

        const bottomTextDiv = document.createElement("div");
        bottomTextDiv.className = "meme-text bottom";
        bottomTextDiv.textContent = bottomText;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "deleteButton";

        deleteButton.addEventListener("click", function() {
            container.remove();
        });

        container.appendChild(img);
        container.appendChild(topTextDiv);
        container.appendChild(bottomTextDiv);
        container.appendChild(deleteButton);

        memeContainer.appendChild(container);
    }
});
