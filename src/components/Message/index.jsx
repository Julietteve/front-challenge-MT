/*
 * The Message component contains an anchor element and
 * a paragraph below the anchor. Rendering of the paragraph
 * should be toggleParagraphd by clicking on the anchor element
 * using the following logic:
 *
 * - At the start, the paragraph should not be rendered.
 * - After a click, the paragraph should be rendered.
 * - After another click, the paragraph should not be rendered.
 * - Finish the Message component by implementing this logic.
 */

import { useState } from "react";
import "./styles.css"

export function Message() {

	const [ toggleParagraph, setToggleParagraph ] = useState(false)

	const onClickAd = () => {
		setToggleParagraph(prevState => !prevState)
	}

	return (
		<section className="message-container">
			<a className="message-anchor" href="#" onClick={onClickAd}> Want to buy a new car? </a>
			{
				toggleParagraph ?
				<div className="message-ad">
					<img src="call-vector.png" alt="better-call-saul"></img>
					<p>Better Call +11 22 33 44 now!</p>
				</div>
				:
				null
			}
		</section>
	);
}
