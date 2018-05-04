function FootballService(callback) {
  var playersData = []
  //...
  this.getPlayersByTeam = function (teamName) {
    //return an array of all players who match the given teamName.
  }

  this.getPlayersByPosition = function (position) {
    //return an array of all players who match the given position.
  }
  //...

  function PlayersService(callback) {
    var playersData = [];

    this.getPlayersByTeam = function (teamName) {
      return playersData.filter(function (player) {
        if (player.team == teamName) {
          return true;
        }
      });
    }
  }
  function searchPlayers(query) {
    var filteredResults = NFLPlayers.filter(function (player) {
      return player.name.contains(query)
    })
    return filteredResults
  }
  //...
  function loadPlayersData() {
    //check if the player already has a copy of the NFL playersData
    var localData = localStorage.getItem('playersData');
    //if they do, pull from there
    if (localData) {
      playersData = JSON.parse(localData);
      //return will short-circuit the loadPlayersData function
      //this will prevent the code below from ever executing
      return callback(playersData)
    }
    //if not go get that data
    var url = "https://bcw-getter.herokuapp.com/?url=";
    var endpointUri = "http://api.cbssports.com/fantasy/players/list?version=3.0&SPORT=football&response_format=json";
    var apiUrl = url + encodeURIComponent(endpointUri);

    $.getJSON(apiUrl, function (data) {
      playersData = data.body.players;
      console.log('Player Data Ready')
      console.log('Writing Player Data to localStorage')
      localStorage.setItem('playersData', JSON.stringify(playersData))
      console.log('Finished Writing Player Data to localStorage')
      callback(playersData)
    });
  }
  loadPlayersData(); //call the function above every time we create a new service
} 