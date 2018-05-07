function FootballService(callback) {
  var playersData = [];
  var myTeam = [];

  this.getPlayersByPosition = function (position) {
    return playersData.filter(function (player) {
      if (player.position.includes(position)) { return true }

    })
  }
  this.getPlayersByName = function (name) {
    return playersData.filter(function (player) {
      if (player.fullname.toUpperCase().includes(name)) { return true }
    })
  }

  this.getPlayersByTeam = function (teamName) {
    return playersData.filter(function (player) {
      if (player.pro_team == teamName) {
        return true;
      }
    });
  }

  //...
  function loadPlayersData() {
    var localData = localStorage.getItem('playersData');
    if (localData) {
      playersData = JSON.parse(localData);
      // return callback(playersData)
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
      // callback(playersData)
    });
  }


  this.addMyTeam = function addMyTeam(newPlayerid, cb, cb2) {
    var playerNew = playersData.find(function (player) {
      return player.id == newPlayerid
    })
    if(myTeam.includes(playerNew) == false){ 
      if (myTeam.length <= 11) {
      myTeam.push(playerNew)
      cb(myTeam);
    } else {
      cb2 ('Team is full. Remove player')
    }} 


  }
  this.removeFromTeam = function removeFromTeam(id, draw) {
    var removePlayer = myTeam.find(function (player) {
      return player.id == id
    })
    playersData.push(removePlayer)
  var index = myTeam.indexOf(removePlayer)
    myTeam.splice(index, 1)
    draw(myTeam)
      ;
  }

  loadPlayersData(); //call the function above every time we create a new service
} 