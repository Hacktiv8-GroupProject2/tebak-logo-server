function increasePoints(id,players) {
    players = players.map(player => {
      if(player.id == id){
        return {
          id: player.id, 
          username: player.username, 
          points: player.points + 1
        }
      } else {
        return player;
      }
    });
}

module.exports = increasePoints