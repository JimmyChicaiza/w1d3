var library = {
  tracks: {
    t01: {
      id: "t01",
      name: "Code Monkey",
      artist: "Jonathan Coulton",
      album: "Thing a Week Three"
    },
    t02: {
      id: "t02",
      name: "Model View Controller",
      artist: "James Dempsey",
      album: "WWDC 2003"
    },
    t03: {
      id: "t03",
      name: "Four Thirty-Three",
      artist: "John Cage",
      album: "Woodstock 1952"
    }
  },
  playlists: {
    p01: { id: "p01", name: "Coding Music", tracks: ["t01", "t02"] },
    p02: { id: "p02", name: "Other Playlist", tracks: ["t03"] }
  }
};
// entrer track console.log(track(library.tracks.t02));
function track(input) {
  return input;
}

// FUNCTIONS TO IMPLEMENT:

var printPlaylistSongs = function(tr_id) {
  var index = library.tracks[tr_id];
  console.log(
    index.id + ": ",
    index.name + " by " + index.artist + " (" + index.album + ")"
  );
};
printPlaylistSongs("t03");

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

var printTracks = function() {
  for (var trackKey in track) {
    var id = track[trackKey].id;
    var name = track[trackKey].name;
    var artist = track[trackKey].artist;
    var album = track[trackKey].album;
    console.log(id + ": " + name + " by " + artist + "(" + album + ")");
  }
};
printTracks();

// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

var printTracks = function() {
  for (var trackKey in track) {
    var id = track[trackKey].id;
    var name = track[trackKey].name;
    var artist = track[trackKey].artist;
    var album = track[trackKey].album;
    console.log(id + ": " + name + " by " + artist + "(" + album + ")");
  }
};

printTracks();

// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

var printPlaylists2 = function(id) {
  var id = playlists[id].id;
  var name = playlists[id].name;
  var tracks = playlists[id].tracks;
  console.log(id + ": " + name + " - " + tracks.length + " tracks");
  for (var trackKey of tracks) {
    var id = library.tracks[trackKey].id;
    var name = library.tracks[trackKey].name;
    var artist = library.tracks[trackKey].artist;
    var album = library.tracks[trackKey].album;
    console.log(id + ": " + name + " by " + artist + "(" + album + ")");
  }
};

printPlaylists2("p01");

// adds an existing track to an existing playlist

var playlist = library.playlists;
var track = library.tracks;
var addTrackToPlaylist = function(trackId, playlistId) {
  var addTrack = playlist["p01"].tracks;
  addTrack.push("t03");
  console.log(addTrack);
};
addTrackToPlaylist();

// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
};

// adds a track to the library

var addTrack = function(name, artist, album) {
  var addedTrack;
  addedTrack = "t0" + (Object.keys(track).length + 1);
  library.tracks[addedTrack] = {
    id: uid(),
    name: name,
    artist: artist,
    album: album
  };
};

addTrack("bamba", "wooly bulley", "ring of fire");

console.log(library.tracks);

// adds a playlist to the library

var addPlaylist = function(name) {
  var addedPlaylist;

  addedPlaylist = "p0" + (Object.keys(playlist).length + 1);
  library.playlists[addedPlaylist] = {
    id: uid(),
    name: name
  };
};

console.log(library.playlists);

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {};
