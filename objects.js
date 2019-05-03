var playlist = {
  artist: "Mya",
  song: "All About Me"
};

return playlist;

function updatePlaylist() {
  return Object.assign({}, playlist, "Mya", {[song]:"Fallen"});
}

function removeFromPlaylist() {
  delete playlist.song;
}

return playlist;
