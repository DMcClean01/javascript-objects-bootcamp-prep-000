var playlist = { 
  artistName: "Mya",
  songTitle: "All About Me"
};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[songTitle] = "All About Me", "Fallen";
}

return playlist;

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
}

return playlist;