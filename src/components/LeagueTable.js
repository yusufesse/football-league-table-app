import "./LeagueTable.css";

export default function LeagueTable({ teams }) {
  return (
    <>
      {teams &&
        teams.standings.map((team) => (
          <div key={team.team.id} className="team-container">
            <p>{team.stats[8].displayValue}</p>
            <img className="club-logo" src={team.team.logos[0].href} />
            <p>
              {team.stats[0].shortDisplayName}: {team.stats[0].value}
            </p>
            <p>
              {team.stats[2].shortDisplayName}: {team.stats[2].value}
            </p>
            <p>
              {team.stats[1].shortDisplayName}: {team.stats[1].value}
            </p>
            <p>
              {team.stats[6].shortDisplayName}: {team.stats[6].value}
            </p>
          </div>
        ))}
    </>
  );
}
