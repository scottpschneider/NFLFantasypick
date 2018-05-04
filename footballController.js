function FootballController() {

    //Private
    var footballService = new FootballService(drawMyTeam);

    function drawMyTeam(players) {
        console.log(players)
        //this reference to the h1 search results needs to match an id on my index.html yes? can it be a div class or need be h1?
        var template = "<h2>My Team</h2>";
        //by setting that template equal to a tag on html page i am what, setting where that temp will populate?
        for (let i = 0; i < players.length; i++) {
            const player = players[i];
            //questions about this image class now. class comes from html, also corresponds with a css style. what about thumbnail? 
            //in marvel thing we did description in a p tag here.  what will this do if i use more h3's, and detail them..?
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
        //this is draw function ya
        var template = "<h2>Search Results</h2>";
        for (let i = 0; i < players.length; i++) {
            const player = players[i];
            template += `
                  <div>
                          <img class="NFLPic" src="${player.thumbnail.path}.${
                player.thumbnail.extension
                }" alt="">
                          <h3>Name: ${player.name}</h3>
                          <h3>Position:
                          <h3>Team: ${
                player.description ? player.description : "No description!"
                }</p>
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
        var query = e.target.name.value
        var catchResults = footballService.searchPlayers(query)
        drawSearchResults(catchResults)
    }
}



//Public