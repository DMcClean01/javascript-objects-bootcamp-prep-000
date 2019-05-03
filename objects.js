var playlist = {
  artistName: "Mya",
  songTitle: "All About Me"
};

function updatePlaylist() {
  playlist.songTitle = ["All About Me", "Fallen"];
}

function removeFromPlaylist() {
  delete playlist.artistName;
}