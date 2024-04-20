window.addEventListener("DOMContentLoaded", (event)=>{
    const audio = document.getElementById("audio");
    audio.play();
});
var lastClickedAlbumId = null;
function showSongList(albumId) {
    var songListToShow = document.getElementById(albumId);
    var clickedImage = document.querySelector('img[alt="' + albumId + '"]');
    // Comprova si s'ha fet clic a la mateixa imatge dues vegades consecutives
    if (lastClickedAlbumId === albumId) // Si l'última imatge clicada és la mateixa que ara, amaga el menú emergent
    songListToShow.style.display = songListToShow.style.display === "block" ? "none" : "block";
    else {
        // Si s'ha clicat a una altra imatge, amaga el menú emergent anterior i mostra el nou
        var songLists = document.querySelectorAll(".song-list");
        songLists.forEach(function(songList) {
            songList.style.display = "none";
        });
        // Posiciona el menú emergent al centre del viewport
        var viewportWidth = window.innerWidth;
        var viewportHeight = window.innerHeight;
        var songListWidth = songListToShow.offsetWidth;
        var songListHeight = songListToShow.offsetHeight;
        var topPosition = (viewportHeight - songListHeight) / 2 + window.scrollY;
        var leftPosition = (viewportWidth - songListWidth) / 2 + window.scrollX;
        topPosition = 100;
        leftPosition = 20;
        songListToShow.style.display = "block";
        songListToShow.style.position = "absolute";
        songListToShow.style.top = topPosition + "px";
        songListToShow.style.left = leftPosition + "px";
    }
    // Actualitza l'última imatge clicada
    lastClickedAlbumId = albumId;
}

//# sourceMappingURL=index.5a25a435.js.map
