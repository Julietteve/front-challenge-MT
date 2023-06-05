/**
 * You have a Grocery component, which receives a list of products, each one with name and votes.
 * - The app should render an unordered list, with a list item for each product.
 * - Products can be upvoted or downvoted.
 * By appropriately using React state and props, implement the upvote/downvote logic. Keep the state in the topmost component, while the Product component should accept props.
 *
 * For example, passing the following array as products prop to Grocery
 * [{ name: "Oranges", votes: 0 }, { name: "Bananas", votes: 0 }]
 * and clicking the '+' button next to the Oranges should result in HTML like:
 *
 *   <ul>
 *     <li>
 *       <span>Oranges - votes: 1</span>
 *       <button>+</button>
 *       <button>-</button>
 *     </li>
 *     <li>
 *       <span>Bananas - votes: 0</span>
 *       <button>+</button>
 *       <button>-</button>
 *     </li>
 *   </ul>
 */

import { useState } from "react";
import "./styles.css"


function Product(props) {

	const { handleMinus, handlePlus, name, votes, imgURL } = props

	return (
		<li className="product-list">
			<div className="product-card-container">
				<div className="product-img-container">
					<img className="product-card-img" src={imgURL} alt={name}></img>
				</div>
				<span className="product-card-title"><h3>{name}</h3></span>
				<div className="product-card-votes-container">
					<button className="product-card-handler" onClick={handleMinus}>-</button>
					<span className={votes > 0 ? "product-vote-pos" : "product-vote-neg"}>{votes} votes</span>
					<button className="product-card-handler" onClick={handlePlus}>+</button>
				</div>
			</div>
		</li>
	);
}

export function Grocery(props) {

	const { products } = props
	const [ productsList, setProductsList ] = useState(products)

	const onVote = (name, increment) => {
		// Used .map() to make a copy of the state to avoid modifying it directly
		const updatedList = productsList.map(obj =>
			obj.name === name ? { ...obj, votes : obj.votes+= increment } : obj
		  );
		setProductsList(updatedList);
	}
	
	return (
		<section className="container">
			<div className="container-main">
				<ul className="product-main">
					{
						productsList.map((item,index)=>(
							<Product
								key = {index}
								name = {item.name}
								votes = {item.votes}
								imgURL={item.imgURL}
								handleMinus = {()=> onVote(item.name, -1)}
								handlePlus = {()=> onVote(item.name, 1)} 
							/>
						))
					}
				</ul>
			</div>
		</section>
	);
}
