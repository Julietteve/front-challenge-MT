/**
 * Given a list of items implement a navigation through the keyboard, following these requirements:
 * - Navigate through the list with UP and RIGHT keys will focus the next item.
 * - Navigate through the list with DOWN and LEFT keys will focus the previous item.
 * - Only one item will be FOCUSED per time in the browser.
 *
 * Suggestion: you may to think in term of "indexes".
 * You may calculate the index and use it to select the item, then you will focus that item.
 *
 * NOTE: The keydown event will work once the <ul> receives the focus.
 */


// Simulating a list of items to render.
// This can be passed through props as well. The constant is declared here for convenience

import { useListNavigation } from "../../hooks/useListNavigation";
import "./styles.css"

export function ListItemsForNavigation(props) {

	const { itemsList } = props
	const [selectedIndex, activeItemRef] = useListNavigation()

	return (
		<ul className="list-navigation-container">
			{
				itemsList.map((item,index)=> (
					<li 
						className={`list-navigation-list ${index === selectedIndex ? "navigation-active" : "navigation-off" }`}
						key={index}
						ref={(el) => (activeItemRef.current[index] = el)}
					>
						<img src={item.imgURL} alt={item.name}></img>
						<h1 className={index === selectedIndex ? "list-item-name" : ""}>{ index === selectedIndex ? item.nameENG : item.nameGRK }</h1>
					</li>
				))
			}
		</ul>
	);
}
