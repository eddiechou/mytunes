// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,
  url: 'http://parse.sfm6.hackreactor.com/mytunes/classes/songs',
  parse: function(response) {
    return response.results;
  },
  initialize: function() {

    $.ajax({
      url: 'http://parse.sfm6.hackreactor.com/mytunes/classes/songs',
      type: 'GET',
      contentType: 'application/json',
      success: function(data) {
        this.trigger('fetch', this);
        console.log('data is received!', data.results);
        data.results.forEach(function(song) {
          this.add(song);
        }.bind(this));
      }.bind(this),
      error: function() {
        console.log('Cannot reach server!');
      }
    });

  //   this.fetch({
  //     data: {limit: 10}
  //   });


  },
});