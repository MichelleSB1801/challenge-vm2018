var PlayerService = {
  getPlayerTeamId: function(playerId) {
          return new Promise(resolve => {
            $.ajax({
                  url: "/player/" + playerId + "/team"
            }).then(response => resolve(response.id));
          });
  },
  getPlayers: function(teamId) {
          return new Promise(resolve => {
            $.ajax({
                  url: "/team/" + teamId + "/player"
            }).then(response => resolve(response));
          });
  }
};

var PlayerDetailsController = {
  playerId: 8,
  showTeammatesClick: async function() {
          teamId = await PlayerService.getPlayerTeamId(this.playerId);
          playerList = await PlayerService.getPlayers(teamId);

			//Render playerList
  }
};

PlayerDetailsController.showTeammatesClick();