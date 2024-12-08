const songList = document.getElementById('song-list');
songList.addEventListener('mouseover', () => {
    songList.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
});

songList.addEventListener('mouseout', () => {
    songList.style.backgroundColor = 'transparent';
});

function filterSongs() {
    let input = document.getElementById('searchBar');
    let filter = input.value.toLowerCase();
    let songItems = document.querySelectorAll('.song-item');

    songItems.forEach(function(song) {
        let songTitle = song.querySelector('a').textContent.toLowerCase();
        if (songTitle.indexOf(filter) > -1) {
            song.style.display = "";  // Show the song item
        } else {
            song.style.display = "none";  // Hide the song item
        }
    });
}
