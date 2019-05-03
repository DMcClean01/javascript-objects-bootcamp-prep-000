var playlist = {
  artistName: "Mya",
  songTitle: "All About Me"
};

playlist.songTitle = ["All About Me", "Fallen"];

/* function updatePlaylist() {
  return Object.assign({}, playlist, "Mya", {[songTitle]:"Fallen"});
} */

function removeFromPlaylist() {
  delete playlist.song;
}

return playlist;