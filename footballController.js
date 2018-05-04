function FootballController() {

    //Private
    var footballService = new FootballService(drawPlayer);

    function drawMyTean(players) {
        //this reference to the h1 search results needs to match an id on my index.html yes? can it be a div class or need be h1?
        var template = "<h2>My Team</h2>";
        for (let i = 0; i < players.length; i++) {
            const player = players[i];
            template += `
            <div>
            <img class="footballpic" src="${player.thumbnail.path}.${
                player.thumbnail.extension}" alt="">
            <h1>Name: ${player.name}</h1>
            <h3>Position:
            <h3>Team:  ${player.description ? player.description : "No description!"}</p>
            <button onclick="app.controllers.footballController.removeFromTeam(${player.id})">Remove From Team</button>
          </div>
`;
        }
        document.getElementById("myTeam").innerHTML = template
    }
    function searchResults(players) {
        var template = "<h2>Search Results</h2>";
        for (let i = 0; i < players.length; i++) {
            const player = players[i];
            template += `
                  <div>
                          <img class="footballPic" src="${player.thumbnail.path}.${
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