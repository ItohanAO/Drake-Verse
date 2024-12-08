const songList = document.getElementById('song-list');
songList.addEventListener('mouseover', () => {
    songList.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
});

songList.addEventListener('mouseout', () => {
    songList.style.backgroundColor = 'transparent';
});