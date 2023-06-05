/**
 * The Rating component consists in a container with 5 stars.
 * Each star is represented by a <span /> element.
 * The component should render to this HTML code:
 *
 *  <div id='rating'>
 *		<span>*</span>
 *		<span>*</span>
 *		<span>*</span>
 *		<span>*</span>
 *		<span>*</span>
 *	</div>
 *
 * When an <span /> element is clicked, the active class should be added to that <span /> and to ALL <span /> before it.
 * Also, the active class should be removed from all span elements after it, if there are any.
 * For example, after the third span element has been clicked, the HTML code should look like this:
 *
 * <div id='rating'>
 *  <span class="active">*</span>
 *  <span class="active">*</span>
 *  <span class="active">*</span>
 *  <span>*</span>
 *  <span>*</span>
 * </div>
 */

 import { useState } from 'react'
 import { faStar } from "@fortawesome/free-solid-svg-icons";
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 import "./styles.css"

export function Rating() {

	const [ rating,setRating ] = useState(0)

	const onHandleRating = (index) => {
		setRating(index + 1)
	}

	function getEmoji (idx) {
        switch (idx) {
            case 0:
                return <h1>&#128565;</h1>
            case 1:
                return <h1>&#128561;</h1>
            case 2:
                return <h1>&#128560;</h1>
            case 3:
                return <h1>&#128527;</h1>
			case 4:
				return <h1>&#128522;</h1>
			case 5:
				return <h1>&#128525;</h1>
            default:
                break;
        }
    }

	return (
		<section className='rating-container'>
			<div className='rating-emoji'>
				<h1>Rate me!</h1>
				{getEmoji(rating)}
			</div>
			{
				Array.from(new Array(5),(n,index) => (
					<FontAwesomeIcon
						onClick={ ()=> onHandleRating(index) }
						icon={faStar}
						key={`star-${index}`}
						className = { index < rating ? 'active-star' : 'non-active-star'}
						fontSize={'3rem'}
        			/>
				))
			}

		</section>
	)
}
