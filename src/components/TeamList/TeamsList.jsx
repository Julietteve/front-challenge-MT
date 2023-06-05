/**
 * Given a list of teams, we need to expose the teams in different ways:
 * - Criteria 1: depending on the score, order the list from highest to lowest.
 * - Criteria 2: depending on the score, order the list from lowest to highest.
 * - Criteria 3: depending on the player's quantity, show ONLY the teams that has more than 3 players.
 *
 * What you need to implement is:
 * - 3 buttons. Each of them need to execute a criteria.
 * - The list of teams should be updated dynamically depending on the selected filter.
 * - Each team item should display: Team Name / Player’s quantity / Total Score of each team.
 */

import { useState } from "react";
import "./styles.css"

const TEAMS = [
	{
		name: "Red",
		players: ["Robin", "Rey", "Roger", "Richard"],
		games: [
			{
				score: 10,
				city: "LA",
			},
			{
				score: 1,
				city: "NJ",
			},
			{
				score: 3,
				city: "NY",
			},
		],
	},
	{
		name: "Blue",
		players: ["Bob", "Ben"],
		games: [
			{
				score: 6,
				city: "CA",
			},
			{
				score: 3,
				city: "LA",
			},
		],
	},
	{
		name: "Yellow",
		players: ["Yesmin", "Yuliana", "Yosemite"],
		games: [
			{
				score: 2,
				city: "NY",
			},
			{
				score: 4,
				city: "LA",
			},
			{
				score: 7,
				city: "AK",
			},
		],
	},
];

const TeamInfo = (props) => { 
	
	const {team} = props
	
	return (
	  <div className="team-container" key={team.name}>
		<h2>{team.name}</h2>
		<div className="team-container-info">
			<div className="players">
			<h3>Total players : {team.players.length}</h3>
			<ul>
				{team.players.map((player, index) => (
				<li key={index}>{player}</li>
				))}
			</ul>
			</div>
			<div className="games">
			<h3>Total score : {team.games.reduce((a , b)=> a + b.score, 0)} </h3>
			<ul>
				{team.games.map((game, index) => (
				<li key={index}>
					<span>Score: {game.score}</span>
					<span>-</span>
					<span>City: {game.city}</span>
				</li>
				))}
			</ul>
			</div>
		</div>
	  </div>
	);
  };

export function TeamsList() {
	const [teams, setTeams] = useState(TEAMS)

	const calculateTotalScore = (team) => {
		return team.games.reduce((total, game) => total + game.score, 0);
	  }

	// Order teams by score (highest to lowest)
	function orderTeamByScoreHighestToLowest() {
		const sortedTeams = [...teams].sort((a,b)=>(
			calculateTotalScore(b) - calculateTotalScore(a)
		))
		setTeams(sortedTeams)
	}
	

	// Order teams by score (lowest to highest)
	function orderTeamByScoreLowestToHighest() {
		const sortedTeams = [...teams].sort((a,b)=>(
			calculateTotalScore(a) - calculateTotalScore(b)
		))
		setTeams(sortedTeams)
	}

	// Filtering teams that with at least 3 players
	function teamsWithMoreThanThreePlayers() {
		const filteredTeams = TEAMS.filter((team)=> team.players.length > 3)
		setTeams(filteredTeams)
	}

	return (
		<section>
			<button className="button-secondary" onClick={() => setTeams(TEAMS)}>Initial list</button>
			<button className="button-primary" onClick={orderTeamByScoreHighestToLowest}>Highest to Lowest</button>
			<button className="button-primary" onClick={orderTeamByScoreLowestToHighest}>Lowest to Highest</button>
			<button className="button-primary" onClick={teamsWithMoreThanThreePlayers}>Teams with at least 3 players</button>

			<ul>
				<div className="team-list-container">
					{
						teams.map((team)=>(
							<TeamInfo key={team.name} team={team}/>
						))
					}
				</div>
			</ul>
		</section>
	);
}
