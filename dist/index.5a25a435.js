const audio = document.getElementById("audio");
window.addEventListener("click", async ()=>{
    try {
        await audio.play();
    } catch (error) {
        console.error("No s'ha pogut reproduir l'\xe0udio:", error.message);
    }
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
        // Posiciona el menú emergent esquerre del viewport
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
