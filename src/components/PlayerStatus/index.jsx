/**
 * Finish the PlayerStatus component so that it follows the current status of the player.
 * - The status can be either "online" or "away".
 * - When the component first renders, the player should be "online".
 * - The toggleStatus function should change the status variable.
 * - The component should count how many times the user changed their status, using the counter.
 * - When the component first renders, the counter should be 1.
 * - The counter should be updated within useEffect when status changes.
 *
 * For example, after the first render, the div element with id root should look like this:
 *
 *   <div>
 *     <h1>Online</h1>
 *     <h3>1</h3>
 *     <button>Toggle status</button>
 *   </div>
 */

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import "./styles.css"

export function PlayerStatus() {
	const [status, setStatus] = useState("Online");
	const [counter, setCounter] = useState(0);

	// Toggle between the two status values - 'Away' and 'Online'
	function onToggleStatus() {
		setStatus(prevState => prevState == 'Online' ? 'Away' : 'Online')
	}

	function onReset (){
		setStatus('Online')
		setCounter(1)
	}

	// Implement effect hook below.
	// Update the counter when status changes.
	useEffect(() => {
		setCounter( prevState => prevState + 1 )
	}, [status]);

	return (
		<section>
			<div className="player-status">
				<h1>{status}</h1>
				<FontAwesomeIcon icon={faCircle} color={ status === 'Online'? "green":"red" }/>
			</div>
			<div className="counter-container">
				<img src={status === 'Online'? "asleep.jpg":"awake.jpg"} alt="status"></img>
				<div className="counter-overlay">{counter}</div>
			</div>
			<div>
				<button className="button-primary" onClick={onToggleStatus}>Toggle status</button>
				<button className="button-secondary" onClick={onReset}>Reset</button>
			</div>
		</section>
	);
}
