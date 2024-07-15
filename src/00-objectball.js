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

// Function to get the number of points scored by a player
function numPointsScored(playerName) {
  // Gets the combined list of all players
  const players = getAllPlayers()
  // Return the points scored by the player or "Player not found" if the player doesn't exist
  return players[playerName] ? players[playerName].points : "Player not found" 
}

// Function to get the shoe size of a player
function shoeSize(playerName) {
  // Gets the combined list of all players
  const players = getAllPlayers() 
  // Returns the shoe size of the player or "Player not found" if the player doesn't exist
  return players[playerName] ? players[playerName].shoe : "Player not found" 
}

// Function to get the colors of a team
function teamColors(teamName) {
  // Get the game object
  const game = gameObject()
  if (game.home.teamName === teamName) {
    // Returns the colors of the home team if the teamName matches
    return game.home.colors
  } else if (game.away.teamName === teamName) {
    // Returns the colors of the away team if the teamName matches
    return game.away.colors 
  } else {
    // Returns "Team not found" if the teamName doesn't match any team
    return "Team not found"
  }
}

// Function to get the names of all teams
function teamNames() {
  // Get the game object
  const game = gameObject()
  // Return an array containing the names of both teams
  return [game.home.teamName, game.away.teamName]
}

// Function to get the jersey numbers of all players in a team
function playerNumbers(teamName) {
  // Gets the game object
  let team
  const game = gameObject()
  if (game.home.teamName === teamName) {
    // Sets the team to home if the teamName matches
    team = game.home
  } else if (game.away.teamName === teamName) {
    // Sets the team to away if the teamName matches
    team = game.away
  }

  if (team) {
    // Initialize an empty array to hold jersey numbers
    const jerseyNumbers = []
    // Get the names of all players in the team
    const playerNames = Object.keys(team.players)

    // Iterates over each player name
    playerNames.forEach(function(playerName) {
      // Adds the player's jersey number to the jerseyNumbers array
      jerseyNumbers.push(team.players[playerName].number)
    })
  // Returns the array of jersey numbers
    return jerseyNumbers
  } else {
    // Return "Team not found" if the teamName doesn't match any team
    return "Team not found"
  }
}

// Function to get the statistics of a player
function playerStats(playerName) {
  // Get the combined list of all players
  const players = getAllPlayers()
  // Return the statistics of the player or "Player not found" if the player doesn't exist
  return players[playerName] ? players[playerName] : "Player not found"
}

// Function to get the number of rebounds by the player with the largest shoe size
function bigShoeRebounds() {
  const players = getAllPlayers()
  // Gets the combined list of all players
  let maxShoeSize = 0
  let rebounds = 0
  // Gets the names of all players
  const playerNames = Object.keys(players)
  // Iterates over each player name
  playerNames.forEach(function(playerName) {
    if (players[playerName].shoe > maxShoeSize) {
      // Updates the maxShoeSize
      maxShoeSize = players[playerName].shoe
      // Updates the rebounds for the player with the largest shoe size
      rebounds = players[playerName].rebounds
    }
  })
  // Returns the number of rebounds by the player with the largest shoe size
  return rebounds
}

// Function to get the player with the most points scored
function mostPointsScored() {
  // Gets the combined list of all players
  const players = getAllPlayers()
  // Initializes an empty string to hold the name of the top scorer
  let topScorer = ""
  // Initializes a variable to hold the maximum points scored by any player
  let maxPoints = 0
  // Gets the names of all players
  const playerNames = Object.keys(players)
// Iterates over each player name
  playerNames.forEach(function(playerName) {
    if (players[playerName].points > maxPoints) {
      // Updates the maxPoints
      maxPoints = players[playerName].points
      // Updates the topScorer
      topScorer = playerName
    }
  })
  // Returns the player with the most points scored
  return topScorer
}

// Function to get the name of the winning team
function winningTeam() {
  // Gets the game object
  const game = gameObject()
  let homePoints = 0
  let awayPoints = 0
  // Gets the names of home team players
  const homePlayerNames = Object.keys(game.home.players)
  // Gets the names of away team players
  const awayPlayerNames = Object.keys(game.away.players)
  // Calculates total points for the home team
  homePlayerNames.forEach(function(playerName) {
    homePoints += game.home.players[playerName].points
  })
  // Calculates total points for the away team
  awayPlayerNames.forEach(function(playerName) {
    awayPoints += game.away.players[playerName].points
  })
  // Determines the winning team based on the total points
  if (homePoints > awayPoints) {
    return game.home.teamName
  } else {
    return game.away.teamName
  }
}

// Function to get the player with the longest name
function playerWithLongestName() {
  // Gets the combined list of all players
  const players = getAllPlayers()
  let longestName = ""
  // Gets the names of all players
  const playerNames = Object.keys(players)
  // Iterates over each player name
  playerNames.forEach(function(playerName) {
    // Updates the longestName
    if (playerName.length > longestName.length) {
      longestName = playerName
    }
  })
  // Returns the player with the longest name
  return longestName
}

// Function to check if the player with the longest name has the most steals
function doesLongNameStealATon() {
  // Gets the combined list of all players
  const players = getAllPlayers()
  // Gets the player with the longest name
  const longestNamePlayer = playerWithLongestName()
  // Initializes a variable to hold the maximum number of steals by any player
  let maxSteals = 0
  // Initializes an empty string to hold the name of the player with the most steals
  let playerWithMaxSteals = ""
  // Gets the names of all players
  const playerNames = Object.keys(players)
  // Iterates over each player name
  playerNames.forEach(function(playerName) {
    if (players[playerName].steals > maxSteals) {
      // Updates the maxSteals
      maxSteals = players[playerName].steals
      // Updates the playerWithMaxSteals
      playerWithMaxSteals = playerName
    }
  })

  // Checks if the player with the longest name has the most steals
  return players[longestNamePlayer].steals === players[playerWithMaxSteals].steals
}
