function FootballController() {

    //Private
    var footballService = new FootballService(drawPlayer);

    function drawMyTeam(players) {
        //this reference to the h1 search results needs to match an id on my index.html yes? can it be a div class or need be h1?
        var template = "<h2>My Team</h2>";
        //by setting that template equal to a tag on html page i am what, setting where that temp will populate?
        for (let i = 0; i < players.length; i++) {
            const player = players[i];
            template += `
            <div>
            //questions about this image class now. class comes from html, also corresponds with a css style. what about thumbnail? 
            <img class="NFLpic" src="${player.thumbnail.path}.${player.thumbnail.extension}" alt="">
            <h1>Name: ${player.name}</h1>
            <h3>Position:
            //in marvel thing we did description in a p tag here.  what will this do if i use more h3's, and detail them..?
            <h3>Team:  ${player.description ? player.description : "No description!"}</p>
            <button onclick="app.controllers.footballController.removeFromTeam(${player.id})">Remove From Team</button>
            the fact that this is all red makes me think something is not right...ha. no really. 
          </div>
`;
        }
        document.getElementById("myTeam").innerHTML = template
    }
    function searchResults(players) {
        //does this need to be a draw function
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
}













//Public