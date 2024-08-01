function buildMatchesTable(num_teams) {
    if (num_teams % 2 !== 0) {
      throw new Error("Number of teams must be even");
    }
  
    const num_rounds = num_teams - 1;
    const matches_per_round = num_teams / 2;
  
    const teams = Array.from({ length: num_teams }, (_, i) => i + 1);
    const matches_table = [];
  
    for (let round_num = 0; round_num < num_rounds; round_num++) {
      const round_matches = [];
      for (let match_num = 0; match_num < matches_per_round; match_num++) {
        const home_team = teams[match_num];
        const away_team = teams[num_teams - match_num - 1];
        round_matches.push([home_team, away_team]);
      }
      teams.splice(1, 0, teams.pop());
      matches_table.push(round_matches);
    }
      
    return matches_table;
  }
  