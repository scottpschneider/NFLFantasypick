function FootballController() {

    //Private
    var footballService = new FootballService(drawMyTeam);

    function drawMyTeam(players) {
        var template = "<h2>My Team</h2>";
        for (let i = 0; i < 5; i++) {//players.length
            const player = players[i];
            template += `
            <div>
            <img class="NFLpic" src="${player.photo}" alt="">
            <h1>Name: ${player.fullname}</h1>
            <h3>Position: ${player.position}
            <h3>Team:  ${player.pro_team ? player.pro_team : "unknown"}</p>
            <button onclick="app.controllers.footballController.removeFromTeam(${player.id})">Remove From Team</button> 
          </div>
`;
        }
        document.getElementById("myTeam").innerHTML = template
    }
    function drawSearchResults(players) {
        var template = "<h2>Search Results</h2>";
        for (let i = 0; i < players.length; i++) {
            const player = players[i];
            template += `
                  <div>
                          <img class="NFLPic" src="${player.photo}" alt="">
                          <h3>Name: ${player.fullname}</h3>
                          <h3>Position: ${player.position}(/h3)
                          <h3>Team: ${player.pro_team ? player.pro_team : "unknown"}</h3>
                          <button onclick="app.controllers.footballController.addToTeam(${player.id})">Add to team</button>
                        </div>
                  `;
        }
        document.getElementById("searchResults").innerHTML = template;
    }
    //function ItunesController(){
    // var itunesService = new ItunesService()
    //Do Not Modify the getMusic function
    //this.getMusic = function getMusic(e){
    //e.preventDefault();
    //var artist = e.target.artist.value;
    //itunesService.getMusicByArtist(artist).then(draw); //after get music by artist returns what are you doing with the objects?
    // }

    //Start coding here
    // function draw(results){
    //   console.log(results)
    // }

    this.searchPlayers = function searchPlayers(e) {
        e.preventDefault();
        var query = e.target.player.value.toUpperCase()
        //var catchResults = footballService.searchPlayers(query)
        var playerPosition = footballService.getPlayersByPosition(query)
        var playerName = footballService.getPlayersByName(query)
        var playerTeam = footballService.getPlayersByTeam(query)
        var PositionAndName = playerPosition.concat(playerName)
        var resultsArr = PositionAndName.concat(playerTeam)
        drawSearchResults(resultsArr)
    }
    function draw(results) {
        console.log(results)
    }



    //Public

    this.addToTeam = function addToTeam(id) {
        footballService.addMyTeam(id, drawMyTeam);

    };
    this.removeFromTeam = function removeFromTeam(id) {
        footballService.removeFromTeam(id, drawMyTeam)
    };
}