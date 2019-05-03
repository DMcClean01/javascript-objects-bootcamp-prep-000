var playlist = {
  artistName: 'Mya',
  songTitle: 'Fallen'
};

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName];
}
 
return playlist;