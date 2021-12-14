import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import LeagueTable from "./LeagueTable";

// Styles
import "./League.css";

export default function League() {
  const premierLeague =
    "https://api-football-standings.azharimm.site/leagues/eng.1/standings?season=2020&sort=asc";
  const ligue1 =
    "https://api-football-standings.azharimm.site/leagues/fra.1/standings?season=2020&sort=asc";

  const [url, setUrl] = useState(premierLeague);
  const { data: teams, loading } = useFetch(url);

  return (
    <div
      className={`section-league ${
        teams && teams.name.includes("English") ? "eng" : "fra"
      } `}
    >
      {loading && <p className="loading">Loading...</p>}
      {!loading && teams && (
        <h1 className="league--name">
          {teams.name}: {teams.seasonDisplay}
        </h1>
      )}

      <LeagueTable teams={teams} />

      <>
        <button onClick={() => setUrl(ligue1)} className="btn btn--add">
          Ligue 1 table
        </button>
        <button onClick={() => setUrl(premierLeague)} className="btn btn--add">
          Premier League table
        </button>
      </>
    </div>
  );
}
