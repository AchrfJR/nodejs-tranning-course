<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Image Slider</title>
    <style>
        #image-container {
            text-align: center;
            margin-top: 20px;
        }
        #image-container img {
            max-width: 100%;
            height: auto;
        }
    </style>
</head>
<body>
    <div id="image-container">
        <img id="image" src="" alt="Image from API">
    </div>
    <script>
        // Function to fetch images from JSONPlaceholder
        async function fetchImages() {
            try {
                // Fetch images from JSONPlaceholder API
                const response = await fetch('https://jsonplaceholder.typicode.com/photos');
                const data = await response.json();
                
                // Extract URLs of the first 5 images
                const imageUrls = data.slice(0, 5).map(photo => photo.url);
                
                return imageUrls;
            } catch (error) {
                console.error('Error fetching images:', error);
                return [];
            }
        }

        // Function to display images one by one
        function startImageSlider(imageUrls) {
            const imageElement = document.getElementById('image');
            let currentIndex = 0;

            // Function to update image
            function updateImage() {
                imageElement.src = imageUrls[currentIndex];
                currentIndex = (currentIndex + 1) % imageUrls.length;
            }

            // Update image every 30 seconds
            updateImage();
            setInterval(updateImage, 30000);
        }

        // Initialize image slider
        fetchImages().then(imageUrls => {
            if (imageUrls.length > 0) {
                startImageSlider(imageUrls);
            } else {
                document.getElementById('image').alt = 'No images available';
            }
        });
    </script>
</body>
</html>

