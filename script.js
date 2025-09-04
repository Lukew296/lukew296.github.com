const form = document.getElementById('searchForm');
const results = document.getElementById('results');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const query = document.getElementById('searchQuery').value.trim();
    if (!query) return;
    searchYouTube(query);
});

function searchYouTube(query) {
    // Use YouTube search URL for guest/public mode
    // This approach uses public search results (not the Data API)
    const searchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
    // We'll fetch the HTML, but YouTube blocks CORS.
    // So, we show links, or embed videos by guessing video IDs from search results.
    // Instead, let's use YouTube Data API if you provide an API key.
    // For now, let's use static video IDs for demo.

    // Example: Show top 5 demo videos for "query"
    // To make this dynamic, you'd need a backend or an API key.
    // For true guest mode, we can use hardcoded video IDs or show instructions.

    // DEMO: Use YouTube iframe embeds for popular videos
    const demoVideoIds = [
        'dQw4w9WgXcQ', // Rick Astley
        'M7FIvfx5J10', // Ok Go
        'eY52Zsg-KVI', // TED Ed
        '9bZkp7q19f0', // Gangnam Style
        'V-_O7nl0Ii0', // Charlie bit my finger
    ];

    results.innerHTML = '';
    demoVideoIds.forEach(id => {
        const div = document.createElement('div');
        div.className = 'video';
        div.innerHTML = `
            <iframe src="https://www.youtube.com/embed/${id}" allowfullscreen></iframe>
            <p><a href="https://www.youtube.com/watch?v=${id}" target="_blank">Watch on YouTube</a></p>
        `;
        results.appendChild(div);
    });

    // If you want to use the Data API, let me know for the next step!
}
