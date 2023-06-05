/**
 * Implement the ImageGallery component that accepts a `links`
 * prop and renders the gallery so that the first
 * item in the links prop is the src attribute of the first image in the gallery.

 * It should also implement the following logic:
 * - When the button is clicked, the image that is in the same div as the button should be removed from the gallery.
 */

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import './styles.css'

function Image(props) {

	const {src,onRemove} = props

	return (
		<div className="gallery-image-container">
			<img className="gallery-image" src={src} />
			<button onClick={onRemove}>
				<FontAwesomeIcon 
					icon={faCircleXmark} 
					fontSize={'1.5rem'}
					color='#a98afe'
					className="delete-icon"
				/>
			</button>
		</div>
	);
}

export function ImageGallery(props) {

	const { links = [] } = props
	const [ galleryImages, setImagesGallery ] = useState(links)

	const onRemove = (id) => {
		const removedImage = galleryImages.filter(image => image.id != id)
		setImagesGallery(removedImage)
	}

	return (
		<section className="container">
			<div className="container-main">
				{
					galleryImages.length > 0 ?
					(
						galleryImages.map(image => (
							<Image
								key={image.id}
								src={image.src}
								onRemove ={()=> onRemove(image.id)}
							/>
						))
					)
					:
					<p>No images to show</p>
				}
			</div>
		</section>
	);
}
