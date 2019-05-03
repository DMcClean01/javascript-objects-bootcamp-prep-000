var playlist = {
  artistName: "Mya",
  songTitle: "All About Me"
};

return playlist;

function updatePlaylist() {
  return Object.assign({}, playlist, "Mya", {[songTitle]:"Fallen"});
}

function removeFromPlaylist() {
  delete playlist.song;
}

return playlist;