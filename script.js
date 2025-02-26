// Event Listener for Form Submission
document.getElementById('artwork-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form data
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const image = document.getElementById('image').files[0];

    // Validate the inputs
    if (!title || !description || !image) {
        alert("Please fill in all fields.");
        return;
    }

    // Validate Image Format
    if (!["image/jpeg", "image/png"].includes(image.type)) {
        alert("Please upload a valid image (JPEG/PNG).");
        return;
    }

    // Create a new FileReader to read the image
    const reader = new FileReader();
    reader.onload = function(event) {
        const imageUrl = event.target.result;

        // Add the new artwork to the gallery
        const galleryContainer = document.getElementById('gallery-container');
        const artworkItem = document.createElement('div');
        artworkItem.className = 'artwork-item';
        artworkItem.innerHTML = `
            <img src="${imageUrl}" alt="${title}">
            <h3>${title}</h3>
            <p>${description}</p>
        `;
        galleryContainer.appendChild(artworkItem);
    };
    reader.readAsDataURL(image);

    // Clear the form after submission
    document.getElementById('artwork-form').reset();
});
