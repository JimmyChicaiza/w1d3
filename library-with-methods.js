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
  },
  printPlaylists: function() {
    for (var playlistKey in library.playlists) {
      var id = this.playlists[playlistKey].id;
      var name = this.playlists[playlistKey].name;
      var tracks = this.playlists[playlistKey].tracks;

      console.log(id + ": " + name + " - " + tracks.length + " tracks");
    }
  },
  printTracks: function() {
    for (var songKey in library.tracks) {
      var id = this.tracks[songKey].id;
      var name = this.tracks[songKey].name;
      var artist = this.tracks[songKey].artist;
      var album = this.tracks[songKey].album;
      console.log(id + ": " + name + " by " + artist + "(" + album + ")");
    }
  },

  printPlaylists2: function(id) {
    var id = this.playlists[id].id;
    var name = this.playlists[id].name;
    var tracks = this.playlists[id].tracks;

    console.log(id + ": " + name + " - " + tracks.length + " tracks");

    for (var trackKey in library.tracks) {
      var id = this.tracks[trackKey].id;
      var name = this.tracks[trackKey].name;
      var artist = this.tracks[trackKey].artist;
      var album = this.tracks[trackKey].album;
      console.log(id + ": " + name + " by " + artist + "(" + album + ")");
    }
  },

  addTrackToPlaylist: function(trackId, playlistId) {
    var addTrack = this.playlists["p01"].tracks;
    addTrack.push("t03");
    console.log(addTrack);
  },

  uid: function() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  },

  addTrack: function(name, artist, album) {
    var addedTrack;

    addedTrack = "t0" + (Object.keys(this.tracks).length + 1);
    this.tracks[addedTrack] = {
      id: this.uid(),
      name: name,
      artist: artist,
      album: album
    };
  },

  addPlaylist: function(name) {
    var addedPlaylist;

    addedPlaylist = "p0" + (Object.keys(this.playlists).length + 1);
    this.playlists[addedPlaylist] = { id: this.uid(), name: name };
  }
};

library.printPlaylists();
library.printTracks();
library.printPlaylists2("p01");
library.addTrackToPlaylist();
library.uid();
library.addTrack("bamba", "boolie wooley", "ring of fire");
library.addPlaylist("Playlist8");
console.log(library.tracks);
console.log(library.playlists);
