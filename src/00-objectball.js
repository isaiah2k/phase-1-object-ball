function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1
        }
      }
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12
        }
      }
    }
  }
}

function getAllPlayers() {
  const game = gameObject()
  const allPlayers = {}
  const teams = [game.home, game.away]

  teams.forEach(function(team) {
    const players = team.players
    const playerNames = Object.keys(players)

    playerNames.forEach(function(playerName) {
      allPlayers[playerName] = players[playerName]
    })
  })

  return allPlayers
}

function numPointsScored(playerName) {
  const players = getAllPlayers()
  return players[playerName] ? players[playerName].points : "Player not found"
}

function shoeSize(playerName) {
  const players = getAllPlayers()
  return players[playerName] ? players[playerName].shoe : "Player not found"
}

function teamColors(teamName) {
  const game = gameObject()
  if (game.home.teamName === teamName) {
    return game.home.colors
  } else if (game.away.teamName === teamName) {
    return game.away.colors
  } else {
    return "Team not found"
  }
}

function teamNames() {
  const game = gameObject()
  return [game.home.teamName, game.away.teamName]
}

function playerNumbers(teamName) {
  const game = gameObject()
  let team
  if (game.home.teamName === teamName) {
    team = game.home
  } else if (game.away.teamName === teamName) {
    team = game.away
  }

  if (team) {
    const jerseyNumbers = []
    const playerNames = Object.keys(team.players)

    playerNames.forEach(function(playerName) {
      jerseyNumbers.push(team.players[playerName].number)
    })

    return jerseyNumbers
  } else {
    return "Team not found"
  }
}

function playerStats(playerName) {
  const players = getAllPlayers()
  return players[playerName] ? players[playerName] : "Player not found"
}

function bigShoeRebounds() {
  const players = getAllPlayers()
  let maxShoeSize = 0
  let rebounds = 0

  const playerNames = Object.keys(players)

  playerNames.forEach(function(playerName) {
    if (players[playerName].shoe > maxShoeSize) {
      maxShoeSize = players[playerName].shoe
      rebounds = players[playerName].rebounds
    }
  })

  return rebounds
}

function mostPointsScored() {
  const players = getAllPlayers()
  let topScorer = ""
  let maxPoints = 0

  const playerNames = Object.keys(players)

  playerNames.forEach(function(playerName) {
    if (players[playerName].points > maxPoints) {
      maxPoints = players[playerName].points
      topScorer = playerName
    }
  })

  return topScorer
}

function winningTeam() {
  const game = gameObject()
  let homePoints = 0
  let awayPoints = 0

  const homePlayerNames = Object.keys(game.home.players)
  const awayPlayerNames = Object.keys(game.away.players)

  homePlayerNames.forEach(function(playerName) {
    homePoints += game.home.players[playerName].points
  })

  awayPlayerNames.forEach(function(playerName) {
    awayPoints += game.away.players[playerName].points
  })

  if (homePoints > awayPoints) {
    return game.home.teamName
  } else {
    return game.away.teamName
  }
}

function playerWithLongestName() {
  const players = getAllPlayers()
  let longestName = ""

  const playerNames = Object.keys(players)

  playerNames.forEach(function(playerName) {
    if (playerName.length > longestName.length) {
      longestName = playerName
    }
  })

  return longestName
}

function doesLongNameStealATon() {
  const players = getAllPlayers()
  const longestNamePlayer = playerWithLongestName()
  let maxSteals = 0
  let playerWithMaxSteals = ""

  const playerNames = Object.keys(players)

  playerNames.forEach(function(playerName) {
    if (players[playerName].steals > maxSteals) {
      maxSteals = players[playerName].steals
      playerWithMaxSteals = playerName
    }
  })

  return players[longestNamePlayer].steals === players[playerWithMaxSteals].steals
}


