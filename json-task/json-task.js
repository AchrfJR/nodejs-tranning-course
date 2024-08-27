async function fetchRandomPost() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await response.json();

        const randomIndex = Math.floor(Math.random() * posts.length);
        const randomPost = posts[randomIndex];

        const postDescriptionElement = document.getElementById('post-description');
        postDescriptionElement.innerHTML = `
            <h2>  ${randomPost.title}</h2>
            <p>   ${randomPost.body}</p>
        `;
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
}

fetchRandomPost();

setInterval(fetchRandomPost, 3000);
